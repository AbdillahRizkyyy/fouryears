const memories=[
  {
    "year": "SMA",
    "title": "Tawa di Masa SMA",
    "label": "foto kenangan waktu SMA",
    "caption": "Masa-masa manis waktu SMA saat kita mulai dekat dan sering bercanda bareng. Tawa lepasmu di sampingku seperti ini selalu jadi memori masa sekolah yang paling membekas.",
    "color": "#c5cdb3",
    "url": "assets/gallery/foto-1.jpg",
    "position": "center 65%"
  },
  {
    "year": "SMA",
    "title": "Dari kursi paling depan",
    "label": "foto kenangan di kelas",
    "caption": "Aku duduk paling depan, kamu paling belakang. Karena sulit melihat papan tulis, kamu kadang maju untuk mencatat. Dari duduk berdekatan, kita mulai cerita-cerita. Lalu ada panggilan “Suamikuu” yang katanya cuma permainan. Tapi perasaanku ternyata ikut tumbuh.",
    "color": "#e2bcc5",
    "url": "assets/gallery/foto-6.jpg"
  },
  {
    "year": "SMA",
    "title": "Foto pertama kita",
    "label": "foto pertama berdua",
    "caption": "Aku sibuk memotret orang-orang dengan pasangannya setelah acara sekolah. Lalu kamu datang: “Kau mau foto sama ku, kan?” Aku menjawab, “Iya ayok, dari tadi aku nyariin kamu.” Akhirnya, si fotografer punya foto berdua juga.",
    "color": "#dac6a8",
    "url": "assets/gallery/foto-8.jpg"
  },
  {
    "year": "2024",
    "title": "Pulangnya besok aja",
    "label": "photobooth di Medan",
    "caption": "Juni 2024. Setelah setahun tidak bertemu, urusan ujian temanku membawa kita berjumpa lagi. Tiket pulang sudah dipesan. Tapi obrolan tentang Podomoro berubah jadi: “Yaudah ayok sekarang.” Kita jalan berdua, nonton, dan photobooth. Aku senang kita punya hari itu.",
    "color": "#c5cedb",
    "url": "assets/gallery/foto-23.jpg"
  },
  {
    "year": "2024",
    "title": "Awal yang Baru Bersama",
    "label": "foto pertemuan pertama setelah balikan",
    "caption": "Pertemuan pertama setelah kita balikan, yang bertepatan langsung dengan hari ulang tahunku. Sederhana, tapi penuh makna — kamu hadir, dan itu sudah lebih dari cukup.",
    "color": "#d6c4d8",
    "url": "assets/gallery/foto-78.jpg"
  },
  {
    "year": "2024",
    "title": "Ikut Bazar Kampusnya",
    "label": "foto di bazar kampus Medan",
    "caption": "Sengaja datang ke Medan untuk ketemu kamu, dan malah ikut meramaikan bazar di kampusmu. Jadi bagian dari hari-harimu di sana — hal kecil yang rasanya hangat banget.",
    "color": "#c9ded3",
    "url": "assets/gallery/foto-17.jpg"
  },
  {
    "year": "2025",
    "title": "Bunga untuk Suci",
    "label": "foto ulang tahun Januari",
    "caption": "Januari 2025. Kali ini aku datang langsung untuk merayakan ulang tahunmu, sambil membawa bunga. Satu potongan waktu bersama di antara hari-hari Langsa dan Medan.",
    "color": "#e5c0a9",
    "url": "assets/gallery/foto-76.jpeg"
  },
  {
    "year": "2025",
    "title": "Setiap Hari, Selalu Ada Kamu",
    "label": "foto rutinitas vc setiap hari",
    "caption": "LDR bukan halangan kalau kita punya kebiasaan ini — VC setiap hari, tanpa absen. Wajahmu di layar HP setiap malam jadi bagian dari rutinitas yang paling aku tunggu.",
    "color": "#dfd6ca",
    "url": "assets/gallery/foto-88.jpg"
  },
  {
    "year": "2026",
    "title": "Magang di Kotamu",
    "label": "foto saat magang di Medan",
    "caption": "Sengaja mengambil kesempatan magang di Medan — bukan cuma soal karier, tapi karena di sana ada kamu. Bisa dekat dan ketemu lebih sering jadi alasan terbesar di balik keputusan itu.",
    "color": "#cfd7e8",
    "url": "assets/gallery/foto-90.jpeg"
  },
  {
    "year": "2026",
    "title": "Halaman kita sekarang",
    "label": "foto terbaru bersama",
    "caption": "Ada banyak yang sudah kita lewati, dan ada yang masih perlu kita bicarakan. Aku ingin kita membuat kenangan baru dengan lebih jujur, lebih lembut, dan lebih saling menjaga.",
    "color": "#d6c4d8",
    "url": "assets/gallery/foto-28.jpg"
  }
];
const board=document.getElementById('board'),dialog=document.getElementById('memory-dialog');let filter='all',selected=0,z=2;
const desktop=[[2,35,-9],[34,5,5],[67,45,-5],[4,285,7],[37,258,-6],[69,272,8],[8,515,5],[60,500,-8],[20,725,-5],[55,710,7]],mobile=[[3,25,-7],[53,60,6],[4,295,5],[52,325,-6],[3,565,-7],[52,600,8],[4,840,6],[52,870,-5],[20,1110,-4],[52,1100,7]];
memories.forEach((m,i)=>{const p=document.createElement('article');p.className='polaroid';p.dataset.index=i;p.style.setProperty('--photo-bg',m.color);p.style.setProperty('--delay',`${i*.07}s`);p.innerHTML=`<button class="photo-window" aria-label="Buka kenangan: ${m.title}">${m.url?`<img src="${m.url}" alt="${m.title}" style="width:100%;height:100%;object-fit:cover;object-position:${m.position||'center'};display:block;">`:`<span class="empty-number">${String(i+1).padStart(2,'0')}</span><span class="empty-label">${m.label}</span>`}</button><button class="polaroid-caption">${m.title}</button><div class="polaroid-bottom"><span>${m.year} · OUR LITTLE STORY</span></div>`;board.append(p);m.element=p;m.dx=0;m.dy=0;
 let touchTimer=null,isTouchDrag=false,startTouchX=0,startTouchY=0,initTouchDx=0,initTouchDy=0,didTouchMove=false;
 p.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;startTouchX=e.touches[0].clientX;startTouchY=e.touches[0].clientY;initTouchDx=m.dx;initTouchDy=m.dy;isTouchDrag=false;didTouchMove=false;touchTimer=setTimeout(()=>{isTouchDrag=true;p.classList.add('dragging');p.style.zIndex=++z;},150);},{passive:true});
 p.addEventListener('touchmove',e=>{if(e.touches.length!==1)return;const curX=e.touches[0].clientX,curY=e.touches[0].clientY,diffX=curX-startTouchX,diffY=curY-startTouchY;if(!isTouchDrag){if(Math.abs(diffX)>10&&Math.abs(diffX)>Math.abs(diffY)){clearTimeout(touchTimer);isTouchDrag=true;p.classList.add('dragging');p.style.zIndex=++z;}else if(Math.abs(diffY)>8){clearTimeout(touchTimer);return;}}if(isTouchDrag){if(e.cancelable)e.preventDefault();didTouchMove=true;const left=(parseFloat(p.style.left)/100)*board.clientWidth,top=parseFloat(p.style.top);m.dx=Math.min(board.clientWidth-p.offsetWidth-left,Math.max(-left,initTouchDx+diffX));m.dy=Math.min(board.clientHeight-p.offsetHeight-top,Math.max(-top,initTouchDy+diffY));p.style.setProperty('--dx',m.dx+'px');p.style.setProperty('--dy',m.dy+'px');}},{passive:false});
 const onTouchEnd=()=>{clearTimeout(touchTimer);if(isTouchDrag){p.classList.remove('dragging');setTimeout(()=>{isTouchDrag=false;didTouchMove=false;},60);}};p.addEventListener('touchend',onTouchEnd,{passive:true});p.addEventListener('touchcancel',onTouchEnd,{passive:true});
 p.addEventListener('mousedown',e=>{if(e.button!==0)return;const startX=e.clientX,startY=e.clientY,initMDx=m.dx,initMDy=m.dy;let mouseMoved=false;const onMM=ev=>{const dX=ev.clientX-startX,dY=ev.clientY-startY;if(Math.hypot(dX,dY)>4){if(!mouseMoved){mouseMoved=true;p.classList.add('dragging');p.style.zIndex=++z;}}if(mouseMoved){const left=(parseFloat(p.style.left)/100)*board.clientWidth,top=parseFloat(p.style.top);m.dx=Math.min(board.clientWidth-p.offsetWidth-left,Math.max(-left,initMDx+dX));m.dy=Math.min(board.clientHeight-p.offsetHeight-top,Math.max(-top,initMDy+dY));p.style.setProperty('--dx',m.dx+'px');p.style.setProperty('--dy',m.dy+'px');}};const onMU=()=>{window.removeEventListener('mousemove',onMM);window.removeEventListener('mouseup',onMU);if(mouseMoved){p.classList.remove('dragging');}};window.addEventListener('mousemove',onMM);window.addEventListener('mouseup',onMU);});
 p.addEventListener('click',e=>{if(didTouchMove)return;openMemory(i);});
});
function layout(){const small=innerWidth<=760,positions=small?mobile:desktop;let visible=0;memories.forEach(m=>{m.element.hidden=filter!=='all'&&m.year!==filter;if(m.element.hidden)return;const [left,top,angle]=positions[visible++];m.element.style.left=left+'%';m.element.style.top=top+'px';m.element.style.setProperty('--angle',angle+'deg');m.dx=m.dy=0;m.element.style.setProperty('--dx','0px');m.element.style.setProperty('--dy','0px');});const bottom=Math.max(...memories.filter(m=>!m.element.hidden).map(m=>parseFloat(m.element.style.top)+m.element.offsetHeight))+65;board.style.minHeight=Math.max(bottom,filter==='all'?(small?960:790):360)+'px';board.querySelector('.board-note').hidden=filter!=='all';board.querySelector('.board-stamp').hidden=filter!=='all';}
function openMemory(i){selected=i;dialog.classList.remove('photo-only');const m=memories[i];document.getElementById('memory-title').textContent=m.title;document.getElementById('memory-year').textContent=m.year+' / OUR LITTLE STORY';document.getElementById('memory-caption').textContent=m.caption;const surface=document.getElementById('memory-image');surface.replaceChildren();if(m.url){const img=new Image();img.src=m.url;img.alt=m.title;surface.append(img);}else{const number=document.createElement('span');number.className='empty-number';number.textContent=String(i+1).padStart(2,'0');const label=document.createElement('span');label.className='empty-label';label.textContent=m.label;surface.append(number,label);}if(!dialog.open){dialog.showModal();document.body.style.overflow='hidden';}}
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{dialog.classList.remove('photo-only');document.body.style.overflow='';});document.querySelectorAll('[data-year]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.year;document.querySelectorAll('[data-year]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});layout();}));document.getElementById('tidy').addEventListener('click',()=>{layout();if(!matchMedia('(prefers-reduced-motion: reduce)').matches)board.animate([{opacity:.65},{opacity:1}],{duration:350});});let resize;addEventListener('resize',()=>{clearTimeout(resize);resize=setTimeout(layout,100);});layout();
document.querySelectorAll('.card').forEach(card=>{card.addEventListener('click',()=>{const open=card.getAttribute('aria-expanded')==='true';card.setAttribute('aria-expanded',String(!open));card.querySelector('.card-message').hidden=open;card.querySelector('.card-hint').textContent=open?'Buka pesan +':'Tutup pesan −';});});
document.querySelector('.letter-trigger').addEventListener('click',function(){this.setAttribute('aria-expanded','true');this.hidden=true;const letter=document.getElementById('letter-content');letter.hidden=false;letter.setAttribute('tabindex','-1');letter.focus({preventScroll:true});});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');document.getElementById('next').addEventListener('click',function(){document.getElementById('ending').hidden=false;this.textContent='Untuk kita berdua ♡';this.disabled=true;if(!reduced.matches){const layer=document.getElementById('celebration');for(let i=0;i<38;i++){const c=document.createElement('span');c.className='confetti';c.textContent=i%3?'♡':'✦';c.style.setProperty('--left',Math.random()*100+'%');c.style.setProperty('--duration',2+Math.random()*2+'s');c.style.setProperty('--delay',Math.random()*.7+'s');c.style.setProperty('--color',['#d4849c','#e9b977','#ae526e'][i%3]);layer.append(c);}setTimeout(()=>layer.replaceChildren(),5000);}document.getElementById('ending').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'center'});});
if('IntersectionObserver' in window&&!reduced.matches){const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}else{e.target.classList.remove('visible');}});},{threshold:0.1,rootMargin:'0px 0px -20px 0px'});document.querySelectorAll('.polaroid,.section-title,.chapters article,.scrap-heading,.flow-inline-stage,.reasons .eyebrow,.reasons h2,.cards .card,.letter-trigger,.future .eyebrow,.future h2,.wishes span,#next').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}function progress(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.reading-progress').style.width=(max>0?scrollY/max*100:100)+'%';}addEventListener('scroll',progress,{passive:true});progress();

// --- Flowing Ribbon Memory Marquee di Halaman Utama ---
function openFlowMemory(photo){dialog.classList.add('photo-only');const surface=document.getElementById('memory-image');surface.replaceChildren();if(photo.src){const img=new Image();img.src=photo.src;img.alt=photo.title||'';img.decoding='async';surface.append(img);}if(!dialog.open){dialog.showModal();document.body.style.overflow='hidden';}}
(function initFlowRibbon(){const stageWrapper=document.getElementById('flow-stage'),scalerContainer=document.getElementById('flow-scaler'),itemsContainer=document.getElementById('flow-items-container');if(!stageWrapper||!scalerContainer||!itemsContainer)return;const SVG_PATH="M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5",VB_WIDTH=1000,VB_HEIGHT=340;const photosList=typeof galleryPhotos!=='undefined'?galleryPhotos:[];if(!photosList.length)return;function updateScaler(){const wrapW=stageWrapper.clientWidth,wrapH=stageWrapper.clientHeight,scale=Math.min(wrapW/VB_WIDTH,wrapH/VB_HEIGHT*.95),offsetX=(wrapW-VB_WIDTH*scale)/2,offsetY=(wrapH-VB_HEIGHT*scale)/2;scalerContainer.style.width=VB_WIDTH+'px';scalerContainer.style.height=VB_HEIGHT+'px';scalerContainer.style.transform=`translate3d(${offsetX}px, ${offsetY}px, 0) scale(${scale})`;scalerContainer.style.transformOrigin='top left';}window.addEventListener('resize',updateScaler);updateScaler();const totalPhotos=photosList.length,numSlots=24,slotSpacing=100/numSlots,maxPeriod=100*totalPhotos*numSlots,flowItems=[];function setSlotPhoto(item,pIdx){const normalizedIdx=((pIdx%totalPhotos)+totalPhotos)%totalPhotos;if(item.currentPhotoIdx===normalizedIdx)return;item.currentPhotoIdx=normalizedIdx;const photo=photosList[normalizedIdx];item.currentPhoto=photo;if(!item.imgEl){item.imgEl=item.element.querySelector('img');item.placeholderEl=item.element.querySelector('.fp-placeholder');item.numEl=item.element.querySelector('.fp-num');item.thumbEl=item.element.querySelector('.fp-thumb');}if(item.thumbEl)item.thumbEl.style.backgroundColor=photo.color||'#f0eae1';if(item.numEl)item.numEl.textContent='#'+String(photo.id).padStart(2,'0');if(item.imgEl){item.imgEl.style.display='';item.imgEl.src=photo.src;item.imgEl.alt=photo.title||'';if(item.placeholderEl)item.placeholderEl.style.display='none';}}for(let i=0;i<numSlots;i++){const el=document.createElement('article');el.className='flow-polaroid-item';el.style.offsetPath=`path('${SVG_PATH}')`;el.style.webkitOffsetPath=`path('${SVG_PATH}')`;el.innerHTML=`<div class="fp-thumb"><img src="" alt="" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"/><div class="fp-placeholder" style="display:none;"><span class="fp-num"></span></div></div>`;const itemObj={element:el,slotIdx:i,currentPhotoIdx:-1,currentPhoto:null};el.addEventListener('mouseenter',()=>{isHovered=true;});el.addEventListener('mouseleave',()=>{isHovered=false;});el.addEventListener('click',()=>{if(Math.abs(totalDragDistance)>8)return;if(itemObj.currentPhoto)openFlowMemory(itemObj.currentPhoto);});itemsContainer.appendChild(el);setSlotPhoto(itemObj,i);flowItems.push(itemObj);}let baseOffset=0,baseVelocity=3.2,isHovered=false,hoverFactor=1.0,isDragging=false,lastX=0,dragVelocity=0,totalDragDistance=0,lastTimestamp=performance.now(),touchStartX=0,touchStartY=0,touchLock=null,isRibbonVisible=false,isAnimating=false;function animate(now){if(!isRibbonVisible&&!isDragging){isAnimating=false;return;}isAnimating=true;const delta=Math.min((now-lastTimestamp)/1000,0.1);lastTimestamp=now;const targetHover=isHovered?.2:1.0;hoverFactor+=(targetHover-hoverFactor)*Math.min(delta*6,1);if(isDragging){baseOffset+=dragVelocity;dragVelocity*=.88;}else{baseOffset+=baseVelocity*delta*hoverFactor;if(Math.abs(dragVelocity)>.01){baseOffset+=dragVelocity;dragVelocity*=.94;}}baseOffset=((baseOffset%maxPeriod)+maxPeriod)%maxPeriod;flowItems.forEach(item=>{const virtualPos=baseOffset+item.slotIdx*slotSpacing,progress=((virtualPos%100)+100)%100,lap=Math.floor(virtualPos/100),photoIdx=item.slotIdx+lap*numSlots;setSlotPhoto(item,photoIdx);item.element.style.offsetDistance=`${progress}%`;item.element.style.webkitOffsetDistance=`${progress}%`;item.element.style.zIndex=Math.floor(10+Math.sin((progress/100)*Math.PI)*25);});requestAnimationFrame(animate);}if('IntersectionObserver' in window){const rObs=new IntersectionObserver((entries)=>{entries.forEach(entry=>{isRibbonVisible=entry.isIntersecting;if(isRibbonVisible&&!isAnimating){lastTimestamp=performance.now();requestAnimationFrame(animate);}});},{rootMargin:'200px 0px'});rObs.observe(stageWrapper);}else{isRibbonVisible=true;requestAnimationFrame(animate);}stageWrapper.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;touchStartX=e.touches[0].clientX;touchStartY=e.touches[0].clientY;lastX=touchStartX;totalDragDistance=0;dragVelocity=0;touchLock=null;if(!isAnimating){lastTimestamp=performance.now();requestAnimationFrame(animate);}},{passive:true});stageWrapper.addEventListener('touchmove',e=>{if(e.touches.length!==1)return;const curX=e.touches[0].clientX,curY=e.touches[0].clientY,diffX=curX-touchStartX,diffY=curY-touchStartY;if(!touchLock){if(Math.hypot(diffX,diffY)<7)return;if(Math.abs(diffY)>Math.abs(diffX)){touchLock='scroll';return;}else{touchLock='drag';isDragging=true;stageWrapper.classList.add('grabbing');}}if(touchLock==='drag'){if(e.cancelable)e.preventDefault();const dx=curX-lastX;totalDragDistance+=Math.abs(dx);lastX=curX;dragVelocity=dx*0.16;baseOffset+=dragVelocity;}},{passive:false});const endTouch=()=>{isDragging=false;touchLock=null;stageWrapper.classList.remove('grabbing');};stageWrapper.addEventListener('touchend',endTouch,{passive:true});stageWrapper.addEventListener('touchcancel',endTouch,{passive:true});stageWrapper.addEventListener('mousedown',e=>{if(e.button!==0)return;lastX=e.clientX;totalDragDistance=0;dragVelocity=0;isDragging=true;stageWrapper.classList.add('grabbing');if(!isAnimating){lastTimestamp=performance.now();requestAnimationFrame(animate);}});window.addEventListener('mousemove',e=>{if(!isDragging)return;const dx=e.clientX-lastX;totalDragDistance+=Math.abs(dx);lastX=e.clientX;dragVelocity=dx*0.16;baseOffset+=dragVelocity;});window.addEventListener('mouseup',()=>{if(isDragging){isDragging=false;stageWrapper.classList.remove('grabbing');}});})();

