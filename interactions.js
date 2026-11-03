// Touch, pointer, and keyboard interactions use the existing design and case-study system.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  const portrait = document.querySelector('.portrait-toggle');
  portrait?.addEventListener('click', () => {
    const colour = portrait.classList.toggle('is-color');
    portrait.setAttribute('aria-pressed', String(colour));
    portrait.setAttribute('aria-label', colour ? 'Show portrait in black and white' : 'Show portrait in colour');
  });
  const track = document.querySelector('.stack-track');
  if (!track) return;
  const slides = [...track.querySelectorAll('.stack-slide')];
  const dots = [...document.querySelectorAll('[data-stack-go]')];
  const previous = document.querySelector('[data-stack-prev]');
  const next = document.querySelector('[data-stack-next]');
  const flip = document.querySelector('.stack-flip-button');
  let active = 0, pending = null, scrollFrame, dragging;
  function sync() {
    slides.forEach((slide, index) => {
      slide.inert = index !== active;
      slide.setAttribute('aria-hidden', String(index !== active));
    });
    dots.forEach((dot, index) => {
      if (index === active) dot.setAttribute('aria-current','true'); else dot.removeAttribute('aria-current');
    });
    previous.disabled = active === 0;
    next.disabled = active === slides.length - 1;
    document.querySelector('#stack-position').textContent = String(active + 1).padStart(2, '0');
    const isFlipped = slides[active].querySelector('.stack-flip').classList.contains('is-flipped');
    flip.setAttribute('aria-pressed', String(isFlipped));
    flip.setAttribute('aria-controls', `stack-card-${active}`);
    flip.innerHTML = `${isFlipped ? 'Back to tools' : 'Flip card'} ${icon(isFlipped ? 'collapse' : 'expand')}`;
    document.querySelector('#stack-announcement').textContent = `Card ${active+1} of 5: ${slides[active].getAttribute('aria-label').split(': ')[1]}`;
  }
  function go(index, instant=false) {
    active = Math.max(0, Math.min(slides.length-1, index));
    sync();
    pending = !instant && !reduced.matches && Math.abs(track.scrollLeft-active*track.clientWidth)>2 ? active : null;
    track.scrollTo({left: active * track.clientWidth, behavior: instant || reduced.matches ? 'instant' : 'smooth'});
  }
  previous.addEventListener('click', () => go(active - 1));
  next.addEventListener('click', () => go(active + 1));
  dots.forEach(dot => dot.addEventListener('click', () => go(Number(dot.dataset.stackGo))));
  flip.addEventListener('click', () => {
    const card = slides[active].querySelector('.stack-flip');
    const isFlipped = card.classList.toggle('is-flipped');
    for (const [selector, hidden] of [['.stack-front',isFlipped],['.stack-back',!isFlipped]]) {
      const face=card.querySelector(selector);face.inert=hidden;face.setAttribute('aria-hidden',String(hidden));
    }
    sync();
  });
  track.addEventListener('scroll', () => {
    if (scrollFrame || dragging) return;
    scrollFrame=requestAnimationFrame(() => {
      if(pending!==null){
        if(Math.abs(track.scrollLeft-pending*track.clientWidth)<2){active=pending;pending=null;sync();}
        scrollFrame=undefined;return;
      }
      const index=Math.max(0,Math.min(slides.length-1,Math.round(track.scrollLeft/track.clientWidth)));
      if(index!==active){active=index;sync();}
      scrollFrame=undefined;
    });
  }, {passive:true});
  track.addEventListener('pointerdown',()=>{pending=null;},{passive:true});
  track.addEventListener('wheel',()=>{pending=null;},{passive:true});
  track.addEventListener('keydown', event => {
    let index=active;
    if(event.key==='ArrowRight') index++;
    else if(event.key==='ArrowLeft') index--;
    else if(event.key==='Home') index=0;
    else if(event.key==='End') index=slides.length-1;
    else return;
    event.preventDefault(); go(index);
  });
  track.addEventListener('pointerdown', event => {
    if(event.pointerType!=='mouse'||event.button!==0||event.target.closest('button,a'))return;
    dragging={id:event.pointerId,x:event.clientX,left:track.scrollLeft,moved:false};
    track.classList.add('is-dragging');track.setPointerCapture(event.pointerId);event.preventDefault();track.focus({preventScroll:true});
  });
  track.addEventListener('pointermove', event => {
    if(!dragging||event.pointerId!==dragging.id)return;
    const distance=event.clientX-dragging.x;
    if(Math.abs(distance)>7)dragging.moved=true;
    track.scrollLeft=dragging.left-distance;
  });
  function finishDrag(event){
    if(!dragging||event.pointerId!==dragging.id)return;
    const index=Math.round(track.scrollLeft/track.clientWidth);
    dragging=undefined;track.classList.remove('is-dragging');
    if(track.hasPointerCapture(event.pointerId))track.releasePointerCapture(event.pointerId);
    go(index);
  }
  track.addEventListener('pointerup',finishDrag);track.addEventListener('pointercancel',finishDrag);
  new ResizeObserver(()=>go(active,true)).observe(track);
  sync();

  document.querySelectorAll('.project-visual').forEach(button=>{
    let start, dragged=false;
    button.addEventListener('pointerdown', event=>{if(event.pointerType==='mouse'||reduced.matches)return;start={x:event.clientX,y:event.clientY};dragged=false;});
    button.addEventListener('pointermove', event=>{
      if(!start)return;
      const dx=event.clientX-start.x,dy=event.clientY-start.y;
      if(Math.abs(dx)>14&&Math.abs(dx)>Math.abs(dy)*1.2){dragged=true;button.classList.add('is-touch-drag');button.style.setProperty('--touch-turn',`${Math.max(-5,Math.min(5,dx/18))}deg`);}
    });
    const finish=()=>{start=undefined;button.classList.remove('is-touch-drag');button.style.removeProperty('--touch-turn');};
    button.addEventListener('pointerup',finish);button.addEventListener('pointercancel',finish);
    button.addEventListener('click',event=>{if(dragged){event.preventDefault();event.stopImmediatePropagation();dragged=false;}},true);
  });
  // Gallery swipes work in the existing dialog; vertical page scrolling stays native.
  let galleryStart;
  const caseRoot=document.querySelector('#case-content');
  caseRoot.addEventListener('pointerdown',event=>{
    if(event.pointerType==='mouse'||!event.target.closest('.gallery-stage')||event.target.closest('button'))return;
    galleryStart={x:event.clientX,y:event.clientY};
  });
  caseRoot.addEventListener('pointerup',event=>{
    if(!galleryStart)return;
    const dx=event.clientX-galleryStart.x,dy=event.clientY-galleryStart.y;galleryStart=undefined;
    if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.2)changeImage(dx<0?1:-1);
  });
  caseRoot.addEventListener('pointercancel',()=>{galleryStart=undefined;});
})();
