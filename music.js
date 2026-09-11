/**
 * music.js — Background Music Player & Now Playing Toast
 * 4 Tahun, Tetap Kamu
 *
 * Urutan lagu:
 * 1. Jadian Yuk - Chloe Pawapua
 * 2. Sialan - Adrian Khalif & Juicy Luicy
 * 3. About You - The 1975
 * 4. seasons - wave to earth
 */

(function () {
  // --- Playlist Configuration ---
  const PLAYLIST = [
    {
      title: "Jadian Yuk",
      artist: "Chloe Pawapua",
      src: "assets/music/1-jadian-yuk.mp3",
      fallback: "assets/music/Chloe Pawapua - Jadian Yuk (with Lyrics)(MP3_160K).mp3.mpeg"
    },
    {
      title: "Sialan",
      artist: "Adrian Khalif & Juicy Luicy",
      src: "assets/music/Adrian Khalif _ Juicy Luicy - Sialan (Video Lirik)(MP3_160K).mp3.mpeg",
      fallback: "assets/music/Adrian Khalif _ Juicy Luicy - Sialan (Video Lirik)(MP3_160K).mp3.mpeg"
    },
    {
      title: "About You",
      artist: "The 1975",
      src: "assets/music/2-about-you.mp3",
      fallback: "assets/music/The 1975 - About You (Official)(MP3_160K).mp3.mpeg"
    },
    {
      title: "seasons",
      artist: "wave to earth",
      src: "assets/music/3-seasons.mp3",
      fallback: "assets/music/wave to earth - seasons (Lyrics)(MP3_160K).mp3.mpeg"
    }
  ];

  // Storage Keys for Session Continuity across pages
  const STORAGE_TRACK = "fy_music_track";
  const STORAGE_TIME  = "fy_music_time";
  const STORAGE_PAUSED = "fy_music_paused";

  // State
  let currentIndex = 0;
  try {
    const saved = sessionStorage.getItem(STORAGE_TRACK);
    if (saved !== null && !isNaN(parseInt(saved))) {
      currentIndex = parseInt(saved) % PLAYLIST.length;
    }
  } catch (e) {}

  let isPlaying = false;
  let isPlayPending = false;
  let toastTimeout = null;

  // Single Audio Instance
  const audio = new Audio();
  audio.preload = "auto";

  // --- Load Track ---
  function loadTrack(index) {
    currentIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[currentIndex];

    try {
      sessionStorage.setItem(STORAGE_TRACK, currentIndex);
    } catch (e) {}

    audio.src = track.src;

    audio.onerror = () => {
      if (audio.src !== track.fallback) {
        audio.src = track.fallback;
        if (isPlaying) {
          audio.play().catch(() => {});
        }
      }
    };

    updateUI();
  }

  // --- Play Track ---
  function playTrack(index = currentIndex, showNotification = true) {
    if (isPlayPending) return;

    if (index !== currentIndex || !audio.src) {
      loadTrack(index);
    }

    isPlayPending = true;
    const promise = audio.play();

    if (promise !== undefined) {
      promise.then(() => {
        isPlayPending = false;
        isPlaying = true;
        try { sessionStorage.setItem(STORAGE_PAUSED, "false"); } catch(e) {}
        updateUI();
        if (showNotification) {
          showNowPlayingToast(PLAYLIST[currentIndex]);
        }
        cleanupGestureListeners();
      }).catch((err) => {
        isPlayPending = false;
        isPlaying = false;
        updateUI();
        // Setup listener for first user interaction (touch/click) to play immediately
        setupInteractionAutoplay();
      });
    } else {
      isPlayPending = false;
      isPlaying = true;
      updateUI();
    }
  }

  // --- Pause Track ---
  function pauseTrack() {
    audio.pause();
    isPlaying = false;
    isPlayPending = false;
    try { sessionStorage.setItem(STORAGE_PAUSED, "true"); } catch(e) {}
    updateUI();
  }

  // --- Toggle Play / Pause ---
  function togglePlay() {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack(currentIndex, true);
    }
  }

  // --- Next Track ---
  function nextTrack() {
    playTrack((currentIndex + 1) % PLAYLIST.length, true);
  }

  // Auto-play next track when current one ends
  audio.addEventListener("ended", () => {
    nextTrack();
  });

  // Track time updates for persistence
  audio.addEventListener("timeupdate", () => {
    if (audio.currentTime > 0) {
      try {
        sessionStorage.setItem(STORAGE_TIME, audio.currentTime.toFixed(1));
      } catch (e) {}
    }
  });

  // --- Autoplay on First User Interaction (Scroll, Touch, or Tap) ---
  let gestureAttached = false;
  const GESTURE_EVENTS = ["scroll", "touchmove", "wheel", "touchstart", "touchend", "pointerdown", "pointerup", "click"];

  function setupInteractionAutoplay() {
    if (gestureAttached || isPlaying) return;
    gestureAttached = true;

    const onUserAction = () => {
      if (isPlaying) {
        cleanupGestureListeners();
        return;
      }

      if (isPlayPending) return;
      isPlayPending = true;

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          isPlayPending = false;
          isPlaying = true;
          try { sessionStorage.setItem(STORAGE_PAUSED, "false"); } catch(e) {}
          updateUI();
          showNowPlayingToast(PLAYLIST[currentIndex]);
          cleanupGestureListeners();
        }).catch((err) => {
          isPlayPending = false;
          // Keep listening so continuing scroll or next touch will try again until success
        });
      }
    };

    window.__fyOnUserAction = onUserAction;

    GESTURE_EVENTS.forEach(evt => {
      window.addEventListener(evt, onUserAction, { passive: true });
    });
  }

  function cleanupGestureListeners() {
    gestureAttached = false;
    if (window.__fyOnUserAction) {
      GESTURE_EVENTS.forEach(evt => {
        window.removeEventListener(evt, window.__fyOnUserAction);
      });
      delete window.__fyOnUserAction;
    }
  }

  // --- Create DOM UI ---
  function createUI() {
    // 1. Toast Notification Container
    const toast = document.createElement("div");
    toast.className = "now-playing-toast";
    toast.id = "now-playing-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.innerHTML = `
      <div class="toast-disc">♫</div>
      <div class="toast-body">
        <span class="toast-tag"><span class="pulse-dot"></span> NOW PLAYING</span>
        <span class="toast-title" id="toast-title">-</span>
        <span class="toast-artist" id="toast-artist">-</span>
      </div>
      <button class="toast-close" id="toast-close" aria-label="Tutup notifikasi">×</button>
      <div class="toast-progress"></div>
    `;
    document.body.appendChild(toast);

    toast.querySelector("#toast-close").addEventListener("click", (e) => {
      e.stopPropagation();
      hideToast();
    });

    toast.addEventListener("click", () => {
      togglePlay();
    });

    // 2. Floating Mini Player Widget
    const widget = document.createElement("div");
    widget.className = "music-widget";
    widget.id = "music-widget";
    widget.setAttribute("aria-label", "Music Player");
    widget.innerHTML = `
      <div class="music-vinyl ${isPlaying ? "spinning" : "paused"}" id="music-vinyl" title="Putar / Jeda musik"></div>
      <div class="music-info" id="music-info" title="Lagu saat ini">
        <span class="music-title-text" id="widget-title">Memuat...</span>
        <span class="music-artist-text" id="widget-artist">-</span>
      </div>
      <div class="music-equalizer ${isPlaying ? "playing" : ""}" id="music-equalizer">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="music-btns">
        <button class="music-btn" id="btn-music-play" aria-label="Putar atau Jeda">
          <span id="music-play-icon">${isPlaying ? "⏸" : "▶"}</span>
        </button>
        <button class="music-btn" id="btn-music-next" aria-label="Lagu berikutnya" title="Lagu berikutnya">
          <span>⏭</span>
        </button>
      </div>
    `;
    document.body.appendChild(widget);

    // Widget Events
    widget.querySelector("#music-vinyl").addEventListener("click", togglePlay);
    widget.querySelector("#music-info").addEventListener("click", togglePlay);
    widget.querySelector("#btn-music-play").addEventListener("click", (e) => {
      e.stopPropagation();
      togglePlay();
    });
    widget.querySelector("#btn-music-next").addEventListener("click", (e) => {
      e.stopPropagation();
      nextTrack();
    });

    updateUI();
  }

  // --- Show Toast Notification ---
  function showNowPlayingToast(track) {
    const toast = document.getElementById("now-playing-toast");
    if (!toast) return;

    const titleEl = document.getElementById("toast-title");
    const artistEl = document.getElementById("toast-artist");

    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;

    // Reset progress bar animation
    const progressEl = toast.querySelector(".toast-progress");
    if (progressEl) {
      progressEl.style.animation = "none";
      void progressEl.offsetWidth; // trigger reflow
      progressEl.style.animation = "toastProgress 5s linear forwards";
    }

    toast.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      hideToast();
    }, 5000);
  }

  function hideToast() {
    const toast = document.getElementById("now-playing-toast");
    if (toast) toast.classList.remove("show");
  }

  // --- Update UI Elements ---
  function updateUI() {
    const track = PLAYLIST[currentIndex];
    if (!track) return;

    const widgetTitle = document.getElementById("widget-title");
    const widgetArtist = document.getElementById("widget-artist");
    const playIcon = document.getElementById("music-play-icon");
    const vinyl = document.getElementById("music-vinyl");
    const eq = document.getElementById("music-equalizer");

    if (widgetTitle) widgetTitle.textContent = track.title;
    if (widgetArtist) widgetArtist.textContent = track.artist;
    if (playIcon) playIcon.textContent = isPlaying ? "⏸" : "▶";

    if (vinyl) {
      if (isPlaying) {
        vinyl.classList.add("spinning");
        vinyl.classList.remove("paused");
      } else {
        vinyl.classList.add("paused");
      }
    }

    if (eq) {
      if (isPlaying) {
        eq.classList.add("playing");
      } else {
        eq.classList.remove("playing");
      }
    }
  }

  // --- Initialize on DOM Ready ---
  function init() {
    createUI();

    loadTrack(currentIndex);

    // Attempt to auto-play right away
    playTrack(currentIndex, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
