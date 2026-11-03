const icon = name => '<svg class="icon" aria-hidden="true"><use href="assets/icons.svg#'+name+'"></use></svg>';
const projects = {
  narrow: {
    index: '01', title: 'The Narrow Path', category: 'A SHARED JOURNEY · FULL STACK WEB APP',
    subtitle: 'A private space for two people to build a daily rhythm of faith, encouragement, and shared progress.',
    demoUrl: 'https://narrow-path-recruiter-demo.vercel.app/demo', url: 'https://narrow-path-blond.vercel.app/', repo: 'https://github.com/amahlenell/narrow-path',
    role: 'Full-stack developer · Personal project', architecture: [['Frontend', 'Next.js · React · Tailwind · Motion'], ['Application logic', 'Server actions · check-in rules · Auckland dates'], ['Data & identity', 'Supabase Auth · PostgreSQL · RLS · Realtime']],
    type: 'Personal project / PWA', status: 'Live app + isolated sample demo',
    stack: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Motion'],
    images: [
      {src:'assets/narrow-path-demo-mobile.png', alt:'The Narrow Path sample demo with fictional Alex and Jordan', caption:'Narrow Path · working sample demo · mobile', portrait:true},
      {src:'assets/narrow-path-mobile.png', alt:'The Narrow Path public mobile sign-in interface', caption:'Actual public interface · responsive capture of the unauthenticated sign-in markup', portrait:true},
      {src:'assets/narrow-path-live.png', alt:'Public sign-in screen of The Narrow Path', caption:'Public interface · desktop sign-in screen'},
      {src:'assets/narrow-path-lifestyle.jpg', alt:'Licensed stock photograph of a couple sharing a phone at a table', caption:'Lifestyle photograph · Gustavo Fring / Pexels · stock models, not users or endorsers'}
    ],
    overview: [
      ['THE CHALLENGE', 'Make a daily habit feel like a shared journey.', 'A simple streak counter can make progress feel transactional. The Narrow Path centres a two-person experience: show up together, encourage one another, and recognise progress without making a fresh start feel like failure.'],
      ['THE APPROACH', 'A path you walk, together.', 'An interactive mountain pathway makes shared progress visible. Daily check-ins require both people to confirm; milestones and joint reward voting give the journey moments to celebrate. Scripture, devotional prompts, and a shared prayer list support the experience beyond the counter.'],
      ['THE RESULT', 'A working application with a personal purpose.', 'The project brings accounts, a two-person invite flow, daily check-ins, calendar history, milestones, and an installable app shell into one experience. The public site opens at sign-in; private activity is kept out of this portfolio.']
    ],
    build: [
      ['FRONTEND', 'An interface that makes progress tangible.', 'Next.js, TypeScript, and Tailwind CSS provide the application structure. Motion supports the animated pathway and fresh-start transitions. The installable PWA includes an offline page.'],
      ['SHARED STATE', 'Two people. One consistent journey.', 'Supabase supplies authentication, PostgreSQL, and realtime updates. The check-in rules are enforced in the database and mirrored in shared application logic: no duplicate check-ins, a shared confirmation requirement, and a defined late grace period.'],
      ['THE DETAIL THAT MATTERS', 'A day needs a clear boundary.', 'Daily progress follows Pacific/Auckland calendar days, including daylight-saving changes. Lifetime achievements are separate from the current streak, so a reset does not erase the whole journey.']
    ],
    notes: [
      ['DESIGN DECISION', 'Encouragement belongs in the system.', 'Grace-centred resets, preserved milestone badges, and reflection turn an error-prone daily habit into something more forgiving. The product’s tone and its underlying rules need to express the same idea.'],
      ['ENGINEERING DECISION', 'Keep shared progress and private reflection separate.', 'The repository defines couple-scoped access policies, with reset reflections scoped to their author. That separation is part of the data model, rather than only a choice about what to show on screen.'],
      ['NEXT STEPS', 'Keep the scope honest.', 'The repository documents notification-delivery verification and the avatar upload interface as remaining work. This case study describes implemented code and the public deployment; it does not claim independent verification of every signed-in flow.']
    ]
  },
  table: {
    index: '02', title: 'Our Table', category: 'YOUR EVERYDAY KITCHEN · FULL STACK WEB APP',
    subtitle: 'A shared recipe book that connects the food you love with practical meal preparation for two.',
    demoUrl: 'https://our-table-recruiter-demo.vercel.app/', url: 'https://our-table-wine.vercel.app/auth/login', repo: 'https://github.com/amahlenell/our-table',
    role: 'Full-stack developer · Personal project', architecture: [['Frontend', 'Next.js · React · responsive cookbook UI'], ['Server & domain', 'Validated APIs · nutrition & planning modules'], ['Data & services', 'Supabase · OpenAI API · USDA food data']],
    type: 'Personal project / Web application', status: 'Live app + isolated sample demo',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'OpenAI API', 'USDA FoodData Central', 'Zod'],
    images: [
      {src:'assets/our-table-demo-desktop.png', alt:'Our Table sample kitchen with fictional recipes and people', caption:'Our Table · working sample kitchen · desktop'},
      {src:'assets/our-table-demo-mobile.png', alt:'Our Table sample kitchen on mobile', caption:'Our Table · working sample kitchen · mobile', portrait:true},
      {src:'assets/our-table-live.png', alt:'Our Table’s live public welcome and sign-in page', caption:'Live capture · welcome to the everyday kitchen'},
      {src:'assets/our-table-mobile.png', alt:'Our Table public mobile welcome and sign-in interface', caption:'Actual public interface · mobile welcome and sign-in', portrait:true},
      {src:'assets/our-table-flow.svg', alt:'Recipe to ingredients to portions to meal plan product flow', caption:'Product flow · from a favourite recipe to a shared plan'}
    ],
    overview: [
      ['THE CHALLENGE', 'One kitchen. Different appetites.', 'Two people need one home for favourite recipes and a practical way to prepare several days of meals. Portions can differ. The aim is nutrition transparency and useful planning, without turning the kitchen into a daily tracking dashboard.'],
      ['THE APPROACH', 'Start with the recipe, not the numbers.', 'Warm colours, rounded typography, and an editorial cookbook layout make recipes the focus. The flow moves from saving a recipe to reviewing ingredients and assigning portions. Cooking mode simplifies the screen to instructions and a checklist.'],
      ['THE RESULT', 'A connected kitchen workspace.', 'The implemented application includes recipe editing, ingredient-based nutrition, cooking mode, and three- to five-day meal plans with individual portions. Shared household accounts and private photos sit behind sign-in. AI drafting and recipe importing are included as optional integrations.']
    ],
    build: [
      ['ARCHITECTURE', 'Give the calculations a home of their own.', 'Next.js App Router and TypeScript connect the interface to server endpoints. Separate domain modules handle nutrition and planning. Supabase provides accounts, relational storage, household access policies, and private recipe photos.'],
      ['NUTRITION', 'Unknown is more useful than a convincing guess.', 'Ingredient calculations preserve missing values and source calories. Grams convert directly; volume needs an ingredient-specific basis. Recipe yield, batch quantities, and per-person portions remain distinct so scaling a plan does not silently change its meaning.'],
      ['AI INTEGRATION', 'A draft is a starting point.', 'The OpenAI integration returns structured recipe drafts validated with Zod. Drafts are reviewed in the editor and do not save automatically. Nutrient records come from identified food data or packaging information, rather than AI-generated numbers.']
    ],
    notes: [
      ['PRODUCT DECISION', 'Plan around the people at the table.', 'Portions are assigned per household member and meal date. That makes unequal portions explicit, while batch preparation combines the quantities needed for the plan.'],
      ['DESIGN DECISION', 'Make the everyday actions feel easy.', 'The application’s cookbook identity uses an earthy palette and Fredoka/Nunito typography. Mobile navigation, focused cooking steps, and a print layout support using the product in a kitchen, rather than only presenting it in a browser.'],
      ['NEXT STEPS', 'Verify the connected experience.', 'The repository records the distinction between local demo behaviour and service-backed features. Live multi-account isolation, provider calls, and concurrent editing need their own verification. The portfolio does not present those checks as completed.']
    ]
  },
  medical: {
    index: '03', title: 'AI medical application', category: 'COMING NEXT · PROJECT DIRECTION',
    subtitle: 'An upcoming project exploring the intersection of AI and healthcare. The idea is still taking shape.',
    role: 'Planned personal project',
    type: 'Planned project', status: 'Not built yet', stack: ['To be decided after discovery'],
    images: [{src:'assets/medical-artwork.svg', alt:'Abstract violet orbital artwork for an upcoming AI healthcare project', caption:'Concept artwork · no application has been built yet'}],
    overview: [
      ['THE STARTING POINT', 'Begin with a real problem.', 'This space is reserved for an AI medical application. The first step is to choose a specific problem and audience before settling on a feature set, technical stack, or product name.'],
      ['THE PLAN', 'Discover. Prototype. Evaluate.', 'Define the intended use, map a small user journey, and build a focused prototype. The eventual case study will document the decisions, interface, implementation, and limitations with actual evidence.'],
      ['THE STATUS', 'Something to look forward to.', 'There is no live application, completed build, or technology stack to showcase yet. This project slot will become a full visual case study when the work exists.']
    ],
    build: [
      ['PLANNED', 'Let the problem choose the stack.', 'The application framework, AI model, and data requirements will be chosen after the project’s purpose and constraints are defined. No technologies are presented here as implemented.'],
      ['FUTURE CASE STUDY', 'Show the work as it develops.', 'This case study is ready for interface captures, a walkthrough video, technical decisions, and an evaluation of what the prototype can and cannot do.']
    ],
    notes: [
      ['OPEN QUESTIONS', 'A useful starting point.', 'Who is the application for? What task should it help with? What would a successful prototype demonstrate? Those questions come before the final design and implementation.']
    ]
  }
};

const dialog = document.querySelector('#case-dialog');
const content = document.querySelector('#case-content');
let activeProject, imageIndex = 0, opener;
const keys = Object.keys(projects);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const renderStory = blocks => blocks.map(([label,title,body]) => `<section class="story-block"><span>${escapeHTML(label)}</span><h2>${escapeHTML(title)}</h2><p>${escapeHTML(body)}</p></section>`).join('');

function renderArchitecture(nodes) {
  return '<div class="architecture-flow" aria-label="Application architecture">'+nodes.map(([title,detail],index)=>`${index?icon('arrow-right'):''}<div class="architecture-node"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(detail)}</span></div>`).join('')+'</div><p class="architecture-caption">Frontend, application logic, and connected services.</p>';
}

function renderCase(key) {
  const p = projects[key];
  activeProject = key;
  imageIndex = 0;
  document.querySelector('#case-counter').textContent = `SELECTED WORK / ${p.index}`;
  content.innerHTML = `<div class="case-title-row"><div><p class="case-eyebrow">${p.category}</p><h1 id="case-title">${p.title}</h1><p class="case-subtitle">${p.subtitle}</p></div>${p.url ? `<div class="case-links"><div class="case-primary-links"><a class="case-external case-demo" href="${p.demoUrl}" target="_blank" rel="noopener">Try Live Demo ${icon('arrow-up-right')}</a></div><a class="case-production" href="${p.url}" target="_blank" rel="noopener">Open production app ${icon('arrow-up-right')}</a></div>` : '<span class="soon-tag">Coming next</span>'}</div>
    <figure class="gallery"><div class="gallery-stage"><img id="gallery-image" src="${p.images[0].src}" alt="${p.images[0].alt}" class="${p.images[0].portrait ? 'portrait-media' : ''}"><button class="gallery-expand" type="button" aria-expanded="false">Expand preview ${icon('expand')}</button></div><figcaption class="gallery-controls"><span class="gallery-caption" id="gallery-caption" aria-live="polite">${p.images[0].caption}</span>${p.images.length > 1 ? `<button class="gallery-prev" aria-label="Previous image" type="button">${icon('arrow-left')}</button><span class="gallery-index" aria-hidden="true"></span><button class="gallery-next" aria-label="Next image" type="button">${icon('arrow-right')}</button>` : ''}</figcaption></figure>
    <div class="case-body"><aside class="case-meta" aria-label="Project details"><div><h3>MY ROLE</h3><p class="case-role">${p.role}</p></div><div><h3>PROJECT TYPE</h3><p>${p.type}</p></div><div><h3>STATUS</h3><p>${p.status}</p></div><div><h3>TECHNOLOGY STACK</h3><div class="tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div></div>${p.repo ? `<div><h3>EXPLORE THE CODE</h3><a href="${p.repo}" target="_blank" rel="noopener">View repository ${icon('arrow-up-right')}</a></div>`:''}</aside><div class="case-story"><div class="case-tabs" role="tablist" aria-label="Case study sections"><button type="button" id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" data-tab="overview">Overview</button><button type="button" id="tab-build" role="tab" aria-selected="false" aria-controls="panel-build" tabindex="-1" data-tab="build">The build</button><button type="button" id="tab-notes" role="tab" aria-selected="false" aria-controls="panel-notes" tabindex="-1" data-tab="notes">Reflections</button></div>${['overview','build','notes'].map((tab,i) => `<div role="tabpanel" id="panel-${tab}" aria-labelledby="tab-${tab}" tabindex="0" ${i?'hidden':''}>${tab==='build'&&p.architecture?renderArchitecture(p.architecture):''}${renderStory(p[tab])}</div>`).join('')}</div></div>`;
  updateGallery();
  content.querySelectorAll('[data-tab]').forEach(button => {
    button.addEventListener('click', () => activateTab(button.dataset.tab));
    button.addEventListener('keydown', event => {
      const tabs = [...content.querySelectorAll('[data-tab]')];
      let index = tabs.indexOf(button);
      if(event.key==='ArrowRight') index=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft') index=(index-1+tabs.length)%tabs.length;
      else if(event.key==='Home') index=0;
      else if(event.key==='End') index=tabs.length-1;
      else return;
      event.preventDefault(); activateTab(tabs[index].dataset.tab); tabs[index].focus();
    });
  });
  content.querySelector('.gallery-prev')?.addEventListener('click', () => changeImage(-1));
  content.querySelector('.gallery-next')?.addEventListener('click', () => changeImage(1));
  content.querySelector('.gallery-expand').addEventListener('click', event => {
    const expanded = content.querySelector('.gallery-stage').classList.toggle('expanded');
    event.currentTarget.setAttribute('aria-expanded',String(expanded));
    event.currentTarget.innerHTML = expanded ? `Fit preview ${icon('collapse')}` : `Expand preview ${icon('expand')}`;
  });
  const nextKey = keys[(keys.indexOf(key)+1)%keys.length];
  const next = document.querySelector('#next-project');
  next.innerHTML = `${escapeHTML(projects[nextKey].title)} ${icon('arrow-up-right')}`;
  next.onclick = () => {
    history.replaceState({project:nextKey},'',`#case-study/${nextKey}`);
    renderCase(nextKey); dialog.scrollTop=0; document.querySelector('.close-case').focus({preventScroll:true});
  };
  dialog.scrollTop=0;
}
function activateTab(tab) {
  content.querySelectorAll('[data-tab]').forEach(button => { const selected=button.dataset.tab===tab; button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1; });
  content.querySelectorAll('[role="tabpanel"]').forEach(panel => {panel.hidden=panel.id!==`panel-${tab}`;});
}
function updateGallery() {
  const p=projects[activeProject], item=p.images[imageIndex];
  const img=content.querySelector('#gallery-image');img.src=item.src;img.alt=item.alt;img.classList.toggle('portrait-media',!!item.portrait);
  content.querySelector('#gallery-caption').textContent=item.caption;
  const counter=content.querySelector('.gallery-index');if(counter) counter.textContent=`${imageIndex+1} / ${p.images.length}`;
}
function changeImage(direction) { imageIndex=(imageIndex+direction+projects[activeProject].images.length)%projects[activeProject].images.length;updateGallery(); }
function openCase(key, trigger, updateURL=true) {
  if(!projects[key]) return;
  if(trigger) opener=trigger;
  renderCase(key);
  if(!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
  document.title=`${projects[key].title} — Amy Nell`;
  if(updateURL) history.pushState({project:key},'',`#case-study/${key}`);
  document.querySelector('.close-case').focus({preventScroll:true});
}
function closeCase(updateURL=true) {
  if(dialog.open) dialog.close();
  document.body.classList.remove('modal-open');
  document.title='Amy Nell — AI & Full-Stack Developer';
  if(updateURL&&location.hash.startsWith('#case-study/'))history.replaceState(null,'','#work');
  opener?.focus({preventScroll:true});
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click',()=>openCase(button.dataset.project,button)));
document.querySelector('.close-case').addEventListener('click',()=>closeCase());
document.querySelector('[data-close]').addEventListener('click',event=>{event.preventDefault();closeCase();});
dialog.addEventListener('cancel',event=>{event.preventDefault();closeCase();});
function syncHash(){const match=location.hash.match(/^#case-study\/(narrow|table|medical)$/);if(match)openCase(match[1],null,false);else if(dialog.open)closeCase(false);}
window.addEventListener('popstate',syncHash);window.addEventListener('hashchange',syncHash);syncHash();

document.querySelector('#copy-email').addEventListener('click', async event => {
  const copyButton = event.currentTarget;
  try { await navigator.clipboard.writeText('amynell711@gmail.com');document.querySelector('#copy-status').textContent='Email address copied.';copyButton.querySelector('.copy-label').textContent='Copied'; }
  catch { document.querySelector('#copy-status').textContent='amynell711@gmail.com — select and copy this address.'; }
});
document.querySelector('#year').textContent=new Date().getFullYear();
let ticking=false;
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=`${max>0?scrollY/max*100:0}%`;ticking=false;});ticking=true;}},{passive:true});
const cursor=document.querySelector('.hover-cursor');
if(matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
  document.querySelectorAll('.project-visual').forEach(button=>{
    button.addEventListener('pointerenter',()=>cursor.classList.add('active'));
    button.addEventListener('pointerleave',()=>cursor.classList.remove('active'));
    button.addEventListener('pointerdown',()=>cursor.classList.remove('active'));
    button.addEventListener('pointermove',event=>{cursor.style.left=`${event.clientX}px`;cursor.style.top=`${event.clientY}px`;});
  });
}


// Pin a panel only after its last content has been reached. Tall sections remain fully readable.
const panels=[...document.querySelectorAll('.panel')];
let panelFrame;
function schedulePanelLayout(){
  if(panelFrame) return;
  panelFrame=requestAnimationFrame(()=>{
    const measured=panels.map(panel=>({panel,height:panel.offsetHeight}));
    measured.forEach(({panel,height})=>panel.style.setProperty('--pin-top',Math.min(0,window.innerHeight-height-20)+'px'));
    panelFrame=undefined;
  });
}
if('ResizeObserver' in window){const panelObserver=new ResizeObserver(schedulePanelLayout);panels.forEach(panel=>panelObserver.observe(panel));}
window.addEventListener('resize',schedulePanelLayout,{passive:true});
schedulePanelLayout();

// Use the panels' normal flow for anchor destinations, not their pinned on-screen positions.
// Only link navigation is handled here; wheel, touch, and keyboard scrolling stay native.
function scrollToSection(id, behavior='smooth') {
  const target=document.getElementById(id);
  const panel=target?.closest('.panel');
  if(!panel) return;
  let top=document.querySelector('#main').offsetTop;
  for(const current of panels){
    top+=parseFloat(getComputedStyle(current).marginTop)||0;
    if(current===panel) break;
    top+=current.offsetHeight;
  }
  if(target!==panel){
    let child=target;
    while(child&&child!==panel){top+=child.offsetTop;child=child.offsetParent;}
  }
  const reduceMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
  window.scrollTo({top:id==='home'?0:Math.max(0,top-24),behavior:reduceMotion?'instant':behavior});
}
document.querySelectorAll('a[href^="#"]:not([data-close])').forEach(link=>{
  const id=link.getAttribute('href').slice(1);
  if(!document.getElementById(id)?.closest('.panel')) return;
  link.addEventListener('click',event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey) return;
    event.preventDefault();
    history.pushState(null,'','#'+id);
    scrollToSection(id);
    const target=document.getElementById(id);
    const focusTarget=target.querySelector('h1,h2')||target;
    focusTarget.setAttribute('tabindex','-1');
    focusTarget.focus({preventScroll:true});
  });
});
function restoreSectionAnchor(){if(!location.hash.startsWith('#case-study/')) scrollToSection(decodeURIComponent(location.hash.slice(1)),'instant');}
window.addEventListener('hashchange',restoreSectionAnchor);
window.addEventListener('popstate',restoreSectionAnchor);
document.fonts.ready.then(()=>{schedulePanelLayout();restoreSectionAnchor();});
