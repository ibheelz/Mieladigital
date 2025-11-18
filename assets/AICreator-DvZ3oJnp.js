import{u as F,a as q,r as i,j as e,f as E,g as K}from"./index-DsEGQgHG.js";import{a as V}from"./attachHireMe-cocM_1Z7.js";const R="/images/annie/annie-hero.webp",$="/images/lucia/lucia-hero.webp";function Q(){const y=F(),k=q(),[f,j]=i.useState(!1),[J,O]=i.useState(null),[M,T]=i.useState(0),[l,N]=i.useState(!1),[u,z]=i.useState(!1),[n,x]=i.useState(0),[d,g]=i.useState(null),X=i.useRef(null),I=i.useRef(null),C=i.useRef(null),D=i.useRef(null),S=i.useRef(null),L=i.useRef(null),[h,b]=i.useState(!1),c=i.useRef(null),[o,H]=i.useState("annie");i.useEffect(()=>{k.state&&k.state.animateHero&&T(t=>t+1)},[]),i.useEffect(()=>V(document),[]),i.useEffect(()=>{const t=document.documentElement,a=document.body,s=t.style.overflow,p=a.style.overflow;return f||l?(t.style.overflow="hidden",a.style.overflow="hidden"):(t.style.overflow=s||"",a.style.overflow=p||""),()=>{t.style.overflow=s||"",a.style.overflow=p||""}},[f,l]),i.useEffect(()=>(l?(b(!0),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>b(!1),1600)):(b(!1),c.current&&(clearTimeout(c.current),c.current=null)),()=>{c.current&&(clearTimeout(c.current),c.current=null)}),[l]),i.useEffect(()=>{if(!l)return;const t=a=>{a.key==="ArrowRight"?(a.preventDefault(),v()):a.key==="ArrowLeft"&&(a.preventDefault(),w())};return window.addEventListener("keydown",t),setTimeout(()=>{var a;return(a=I.current)==null?void 0:a.focus()},0),()=>window.removeEventListener("keydown",t)},[l]);const m=o==="annie"?Array.from({length:5},(t,a)=>`/images/annie/a${a+1}.webp`):Array.from({length:5},(t,a)=>`/images/lucia/l${a+1}.webp`),r=(t,a=0)=>{H(t),x(a),b(!0),N(!0)},Y=()=>{z(!0),setTimeout(()=>{N(!1),z(!1)},140)},w=()=>{g("right"),x(t=>(t-1+m.length)%m.length)},v=()=>{g("left"),x(t=>(t+1)%m.length)},W=t=>{const a=t.touches&&t.touches[0];a&&(S.current=a.clientX,L.current=a.clientY)},_=()=>{},P=t=>{const a=t.changedTouches&&t.changedTouches[0];if(!a)return;const s=a.clientX-(S.current??a.clientX),p=a.clientY-(L.current??a.clientY),A=Math.abs(s),B=Math.abs(p);window.innerWidth<=768&&A>40&&A>B*1.2&&(s<0?v():w())};return i.useEffect(()=>{if(!l)return;const t=C.current;if(!t)return;const a=t.querySelectorAll(".thumb"),s=a&&a[n];s&&typeof s.scrollIntoView=="function"&&requestAnimationFrame(()=>{try{s.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}catch{}})},[n,l]),e.jsxs("div",{className:"min-h-screen bg-[#06080a] p-[clamp(6px,1.5vw,12px)] animate-fadeIn relative flex flex-col",children:[e.jsx("div",{className:"page-fixed-bg","aria-hidden":!0,style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${E})`}}),e.jsx("div",{className:"page-fixed-overlay","aria-hidden":!0}),e.jsxs("div",{className:"liquid-glass-header animate-slideDownNav flex items-center justify-center py-[clamp(10px,2.5vh,16px)] relative",children:[e.jsx("img",{decoding:"async",src:"/left.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-left svg-gold sub-anim-svg-left"}),e.jsx("img",{decoding:"async",src:"/right.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-right svg-gold sub-anim-svg-right"}),e.jsx("div",{className:"absolute left-[clamp(16px,3vw,40px)] w-auto",children:e.jsxs("button",{onClick:()=>y("/"),className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full sm:rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] whitespace-nowrap",children:[e.jsx("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),e.jsx("span",{className:"hidden sm:inline",children:"Character Select"})]})}),e.jsx("img",{decoding:"async",src:"/ibheelz-logo.webp",alt:"ibheelz",className:"h-[clamp(3rem,6vw,4.25rem)] w-auto cursor-pointer sub-anim-logo-slow",style:{maxHeight:"68px"},onClick:()=>y("/")}),e.jsx("div",{className:"absolute right-[clamp(16px,3vw,40px)]",children:e.jsxs("button",{onClick:()=>window.open("/Resume.pdf","_blank"),className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full sm:rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] cursor-pointer",children:[e.jsxs("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14,2 14,8 20,8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("polyline",{points:"10,9 9,9 8,9"})]}),e.jsx("span",{className:"hidden sm:inline",children:"View Resume"})]})})]}),e.jsx("div",{className:"header-spacer"}),e.jsxs("div",{className:"page-content relative ai-bg subpad flex-1 flex flex-col items-center justify-center p-0 mt-0 -mx-[clamp(12px,3vw,24px)] -mb-[clamp(12px,3vw,24px)] px-[clamp(18px,4.5vw,36px)] md:px-0 anim-bg-soft",children:[e.jsxs("div",{className:"w-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-20",children:[e.jsxs("div",{className:"hidden lg:flex flex-col items-center justify-center lg:my-24",children:[e.jsx("img",{decoding:"async",fetchpriority:"high",src:R,alt:"Annie",className:"block cursor-pointer",onClick:()=>r("annie",0),style:{minWidth:"clamp(320px, 26vw, 640px)",height:"clamp(220px, 32vh, 520px)",objectFit:"contain",opacity:1,filter:"none",position:"relative",zIndex:1}}),e.jsx("div",{className:"ai-badge font-['Jost',sans-serif] font-medium capitalize text-[clamp(11px,1vw,16px)]",role:"button",tabIndex:0,onClick:()=>r("annie",0),onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r("annie",0))},style:{minWidth:"clamp(280px, 24vw, 480px)",height:"clamp(64px,6.4vw,96px)",marginTop:"clamp(12px,1.5vw,16px)",cursor:"pointer"},children:e.jsx("span",{className:"ai-badge__label",children:"Annie Radley"})})]}),e.jsx("img",{src:K,alt:"AI Creator",className:"w-full lg:w-auto h-auto object-contain mt-[clamp(48px,8vw,96px)] lg:mt-0 anim-content-soft mx-auto lg:mx-0 max-h-[78vh] lg:max-h-[68vh]",decoding:"async",fetchpriority:"high"},M),e.jsxs("div",{className:"hidden lg:flex flex-col items-center justify-center lg:my-24",children:[e.jsx("img",{decoding:"async",src:$,alt:"Lucia",className:"block cursor-pointer",onClick:()=>r("lucia",0),style:{minWidth:"clamp(320px, 26vw, 640px)",height:"clamp(220px, 32vh, 520px)",objectFit:"contain",opacity:1,filter:"none",position:"relative",zIndex:1}}),e.jsx("div",{className:"ai-badge font-['Jost',sans-serif] font-medium capitalize text-[clamp(11px,1vw,16px)]",role:"button",tabIndex:0,onClick:()=>r("lucia",0),onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r("lucia",0))},style:{minWidth:"clamp(280px, 24vw, 480px)",height:"clamp(64px,6.4vw,96px)",marginTop:"clamp(12px,1.5vw,16px)",cursor:"pointer"},children:e.jsx("span",{className:"ai-badge__label",children:"Lucia Pazmiño"})})]})]}),e.jsx("div",{className:"lg:hidden w-full px-0 mt-[clamp(36px,7vw,64px)] mb-[clamp(80px,12vh,140px)] text-center",children:e.jsxs("div",{className:"max-w-[900px] mx-auto grid grid-cols-1 gap-[clamp(14px,3vw,24px)]",children:[e.jsxs("div",{className:"ai-mobile-pair",children:[e.jsx("img",{loading:"lazy",decoding:"async",src:R,alt:"Annie",className:"w-full object-contain mx-auto cursor-pointer",onClick:()=>r("annie",0),style:{height:"clamp(216px, 48vw, 432px)",opacity:1,filter:"none",position:"relative",zIndex:1}}),e.jsx("div",{className:"ai-badge w-full font-['Jost',sans-serif] font-medium capitalize text-[clamp(13px,3.5vw,16px)]",role:"button",tabIndex:0,onClick:()=>r("annie",0),onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r("annie",0))},style:{height:"clamp(77px,11.2vw,112px)",marginTop:"clamp(16px,4vw,24px)",cursor:"pointer"},children:e.jsx("span",{className:"ai-badge__label",children:"Annie Radley"})})]}),e.jsxs("div",{className:"ai-mobile-pair",children:[e.jsx("img",{loading:"lazy",decoding:"async",src:$,alt:"Lucia",className:"w-full object-contain mx-auto cursor-pointer",onClick:()=>r("lucia",0),style:{height:"clamp(216px, 48vw, 432px)",opacity:1,filter:"none",position:"relative",zIndex:1}}),e.jsx("div",{className:"ai-badge w-full font-['Jost',sans-serif] font-medium capitalize text-[clamp(13px,3.5vw,16px)]",role:"button",tabIndex:0,onClick:()=>r("lucia",0),onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r("lucia",0))},style:{height:"clamp(77px,11.2vw,112px)",marginTop:"clamp(16px,4vw,24px)",cursor:"pointer"},children:e.jsx("span",{className:"ai-badge__label",children:"Lucia Pazmiño"})})]})]})})]}),e.jsx("div",{className:"lg:hidden page-content mobile-sticky-cta flex justify-center items-center px-4 mt-[40px] mb-5",children:e.jsxs("button",{className:"apple-glass-button-accent px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base text-white font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2",style:{minWidth:"min(65vw, 520px)"},children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Hire Me"]})}),f&&e.jsx("div",{className:"modal-overlay",onClick:()=>j(!1),children:e.jsxs("div",{className:"modal-glass",onClick:t=>t.stopPropagation(),children:[e.jsx("button",{className:"modal-close glass-button rounded-full",onClick:()=>j(!1),"aria-label":"Close",title:"Close",children:"×"}),e.jsxs("div",{className:"modal-split",children:[e.jsx("div",{className:"modal-pane-left"}),e.jsx("div",{className:"modal-pane-right"})]})]})}),(l||u)&&e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Image gallery",className:`fixed inset-0 z-[9998] lightbox-overlay ${u?"lightbox-fade-out":"lightbox-fade-in"}`,style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(${E})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("button",{ref:I,className:`lightbox-close ${h?"controls-pop-in":""}`,"aria-label":"Close",onClick:Y,children:"×"}),e.jsx("button",{className:"lightbox-chevron lightbox-prev","aria-label":"Previous",onClick:w,children:e.jsx("span",{className:`chevron-content ${h?"controls-pop-in":""}`,children:e.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})})}),e.jsx("button",{className:"lightbox-chevron lightbox-next","aria-label":"Next",onClick:v,children:e.jsx("span",{className:`chevron-content ${h?"controls-pop-in":""}`,children:e.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})})}),e.jsx("div",{ref:X,className:`lightbox-modal ${h?"modal-pop-in":u?"scale-out":"scale-in"}`,onClick:t=>t.stopPropagation(),children:e.jsx("div",{className:"lightbox-image-wrap",onTouchStart:W,onTouchMove:_,onTouchEnd:P,children:e.jsxs("div",{className:`lightbox-image-row subject-${o} ${typeof window<"u"&&window.innerWidth>768&&d?d==="left"?"block-enter-left":"block-enter-right":""} ${typeof window<"u"&&window.innerWidth>=769&&o==="annie"&&n===4?"row-free":""} ${typeof window<"u"&&window.innerWidth>=1024&&o==="annie"&&n===4?"row-annie-last":""} ${typeof window<"u"&&window.innerWidth<=768&&o==="lucia"&&(n===0||n===1)?"lucia-center":""}`,onAnimationEnd:()=>{try{typeof window<"u"&&window.innerWidth>768&&g(null)}catch{}},children:[e.jsx("img",{src:m[n],alt:`${o} ${n+1}`,decoding:"async",fetchpriority:"high",loading:"eager",className:`lightbox-image ${typeof window<"u"&&window.innerWidth<=768&&d?d==="left"?"img-enter-left":"img-enter-right":""} has-side`,onAnimationEnd:()=>g(null)},n),e.jsx("div",{className:`lightbox-rect right ${typeof window<"u"&&window.innerWidth<=768?d==="left"?"img-enter-left":d==="right"?"img-enter-right":"":""} ${o==="annie"&&n===0?"annie-first":""}`,"aria-hidden":"false",children:e.jsx("div",{className:"lightbox-rect-content",children:e.jsxs("div",{className:"lightbox-rect-inner",children:[n===0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lightbox-rect-title",children:o==="annie"?"Annie Radley":"Lucia Pazmiño"}),e.jsx("div",{className:"lightbox-rect-sub",children:o==="lucia"?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"/flags/ar.svg",alt:"Argentina flag",className:"flag-icon"}),e.jsx("span",{children:"Argentinian influencer"})]}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"/flags/uk.svg",alt:"UK flag",className:"flag-icon"}),e.jsx("span",{children:"British influencer"})]})})]}),(o==="annie"||o==="lucia")&&(()=>{const a=(o==="lucia"?{0:["Lucia Pazmiño blends warm Latina confidence with a natural elegance that makes her stand out instantly.","She’s expressive, magnetic, and carries herself with that effortless mix of attitude and softness that defines her personality."],1:["Lucia’s everyday charm comes from how real she is.","She switches between Spanish and English without thinking, laughs at her own messiness, and brings a playful, spontaneous energy that feels genuinely relatable and human."],2:["Passion drives everything about Lucia.","She feels intensely, expresses herself openly, and has that confident, emotional spark that makes her a modern muse.","Her personality is bold, warm, and unmistakably alive."],3:["Lucia balances sweetness with a fiery edge.","She’s flirty, fun, and full of personality, always carrying that blend of charm and boldness that gives her a vibrant, unforgettable presence."],4:["Beneath her confidence, Lucia has a reflective, emotional depth.","She values connection, late-night thoughts, and honest moments, giving her a grounded softness that adds real dimension to who she is."]}:{0:["Annie Radley is built around a mix of calm confidence and modern British elegance.","She carries herself with the energy of someone who knows her direction in life, blending discipline with a soft, relatable warmth.","At 25, she embodies that balance between ambition and ease that defines her London lifestyle."],1:["Annie’s personality leans into a friendly, best-friend charm — expressive, playful, and grounded.","She loves everyday moments, has a subtle sense of humour, and speaks with that warm British tone that feels instantly familiar.","She’s stylish, but never tries too hard, which is a big part of her appeal."],2:["Fashion and self-expression are central to who Annie is.","She gravitates toward minimal, clean aesthetics and lets her personality shine through simple choices.","There’s an authenticity in her style that mirrors her character: effortless, composed, and quietly confident."],3:["Fitness and wellness are a core part of Annie’s identity.","She’s the disciplined, early-morning type — focused, driven, and committed to personal growth.","Her energy reflects someone who pushes herself but stays balanced, always pairing strength with softness."],4:["Annie also has a reflective side that defines her emotional depth.","She values calm spaces, warm conversations, and moments of quiet clarity.","Her personality blends ambition with introspection, giving her that rare mix of strength, sensitivity, and elegance."]})[n];return!a||!a.length?null:e.jsx("div",{className:"lightbox-rect-desc-block",children:a.map((s,p)=>e.jsx("p",{className:"lightbox-rect-desc",children:s},p))})})()]})})})]},`row-${n}`)})}),e.jsx("div",{className:`lightbox-thumbs ${h?"thumbs-pop-in":""}`,role:"listbox","aria-label":"Thumbnails",onClick:t=>t.stopPropagation(),children:e.jsx("div",{className:"lightbox-thumbs-scroll",ref:C,children:e.jsx("div",{className:"thumbs-inner",ref:D,children:m.map((t,a)=>e.jsx("button",{role:"option","aria-selected":a===n,className:`thumb ${a===n?"thumb-active":""}`,onClick:()=>x(a),title:`View image ${a+1}`,children:e.jsx("img",{src:t,alt:`Thumbnail ${a+1}`,loading:"lazy",decoding:"async",fetchpriority:"low"})},a))})})})]}),e.jsx("style",{jsx:!0,children:`
        /* Fixed background shared style */
        .page-fixed-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          pointer-events: none;
        }
        .page-fixed-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: rgba(0,0,0,0);
        }
        .page-content { position: relative; z-index: 2; }
        /* Mobile sticky CTA fixed to bottom, above overlays */
        .mobile-sticky-cta {
          position: fixed;
          left: clamp(6px, 1.5vw, 12px);
          right: clamp(6px, 1.5vw, 12px);
          bottom: max(12px, env(safe-area-inset-bottom));
          z-index: 20;
          margin: 0;
        }
        @media (max-width: 1023.98px) {
          .page-fixed-overlay { background: rgba(0,0,0,0.35); }
          /* Shift background slightly left on smaller screens */
          .page-fixed-bg { background-position: calc(50% - 50px) center; }
        }
        @media (min-width: 1024px) {
          .page-fixed-overlay { background: rgba(0,0,0,0.5); }
        }
        /* Fixed background shared style */
        .page-fixed-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          pointer-events: none;
        }
        .svg-gold {
          filter: brightness(0) saturate(100%) invert(76%) sepia(36%) saturate(459%) hue-rotate(358deg) brightness(97%) contrast(89%);
        }

        .svg-left {
          top: calc(clamp(10px,2.5vh,16px) + clamp(3rem,6vw,4.25rem) / 2);
          left: calc(50% - 70px);
          transform: translateY(-50%);
        }

        .svg-right {
          top: calc(clamp(10px,2.5vh,16px) + clamp(3rem,6vw,4.25rem) / 2);
          right: calc(50% - 70px);
          transform: translateY(-50%);
        }

        @media (min-width: 768px) {
          .svg-left {
            left: calc(50% - 120px);
          }
          .svg-right {
            right: calc(50% - 120px);
          }
        }

        @media (min-width: 1024px) {
          .svg-left {
            left: calc(50% - 160px);
          }
          .svg-right {
            right: calc(50% - 160px);
          }
        }

        @media (min-width: 1280px) {
          .svg-left {
            left: calc(50% - 200px);
          }
          .svg-right {
            right: calc(50% - 200px);
          }
        }

        @media (min-width: 640px) {
          .svg-left {
            left: calc(50% - 90px);
          }
          .svg-right {
            right: calc(50% - 90px);
          }
        }

        .liquid-glass-header {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: clamp(20px, 4vw, 30px);
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: clamp(6px, 1.5vw, 12px);
          right: clamp(6px, 1.5vw, 12px);
          z-index: 10;
        }
        .header-spacer { height: clamp(72px, 12vh, 120px); }

        .glass-button {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border: 1.5px solid #ffffff;
          box-shadow: none;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .glass-button:hover,
        .glass-button:active {
          background: #eac28a; /* AI Creator hover/click */
          border-color: #eac28a;
          box-shadow: none;
          color: #10171d;
        }

        /* Cards match navbar fill */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
        }
        .theme-card {
          background: #06080a;
          border: none;
        }

        /* Small screens: increase card height */
        @media (max-width: 639.98px) {
          .glass-card,
          .theme-card {
            min-height: clamp(260px, 55vh, 640px) !important;
          }
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6, 8, 10, 0.45);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
          overscroll-behavior: contain;
        }
        .modal-glass {
          position: relative;
          width: 88vw;
          aspect-ratio: 16 / 9;
          max-height: 88vh;
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: clamp(16px, 3vw, 28px);
          box-shadow: 0 4px 24px rgba(0,0,0,0.35);
          color: #e7f2f8;
          overflow: hidden;
          display: flex;
          align-items: stretch;
          justify-content: stretch;
        }
        .modal-close {
          position: absolute;
          top: clamp(12px, 2vw, 20px);
          right: clamp(12px, 2vw, 20px);
          line-height: 1;
          font-size: clamp(12px, 1.6vw, 16px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 200ms ease;
          width: clamp(26px, 3.85vw, 32px);
          height: clamp(26px, 3.85vw, 32px);
          border-radius: 9999px;
          box-sizing: border-box;
        }

        .modal-split { display: flex; width: 100%; height: 100%; }
        .modal-pane-left, .modal-pane-right { flex: 1 1 50%; height: 100%; }
        .modal-pane-left { background: transparent; }
        .modal-pane-right { background: #06080a; color: #e7f2f8; }

        /* Side card entrance animations (match slow style) */
        @keyframes cardInLeft {
          from { transform: translateX(-120vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes cardInRight {
          from { transform: translateX(120vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .anim-card-in-left { animation: cardInLeft 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .anim-card-in-right { animation: cardInRight 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes slideDownNav {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDownNav {
          animation: slideDownNav 1.5s ease-out forwards;
        }

        @keyframes slideUpHero {
          from {
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUpHero {
          animation: slideUpHero 1s ease-out forwards;
        }

        /* Very slow logo slide-in */
        @keyframes subLogoSlowIn {
          from { transform: translateY(-40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .sub-anim-logo-slow { animation: subLogoSlowIn 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }

        /* Very slow SVGs slide/fade from sides */
        @keyframes subSvgInLeft {
          from { transform: translateX(-14px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes subSvgInRight {
          from { transform: translateX(14px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .sub-anim-svg-left { animation: subSvgInLeft 4.5s cubic-bezier(0.22, 1, 0.36, 1) 200ms both; }
        .sub-anim-svg-right { animation: subSvgInRight 4.5s cubic-bezier(0.22, 1, 0.36, 1) 260ms both; }

        /* Page-level soft intro animations (exclude navbar) */
        @keyframes bgSoftIn {
          0% { opacity: 0; transform: scale(1.015); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes contentSoftIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.992); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .anim-bg-soft { animation: bgSoftIn 800ms ease-out both; }
        .anim-content-soft { animation: contentSoftIn 900ms ease-out 200ms both; }

        /* Match Creative: extra darkening overlay via pseudo */
        .ai-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: rgba(0,0,0,0);
        }
        .ai-bg::before { display: none; }
        /* Apple-style glowing blue accent button (exact as homepage) */
        .apple-glass-button-accent {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(165, 200, 228, 0.25) 0%,
            rgba(165, 200, 228, 0.15) 50%,
            rgba(165, 200, 228, 0.25) 100%
          );
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(165, 200, 228, 0.4);
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 0 rgba(165, 200, 228, 0.3),
            0 8px 32px 0 rgba(165, 200, 228, 0.15);
          color: #ffffff;
        }
        .apple-glass-button-accent::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%);
          animation: liquidMove 4s ease-in-out infinite;
        }
        .apple-glass-button-accent::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: glossyShine 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .apple-glass-button-accent:hover {
          background: linear-gradient(
            135deg,
            rgba(165, 200, 228, 0.35) 0%,
            rgba(165, 200, 228, 0.25) 50%,
            rgba(165, 200, 228, 0.35) 100%
          );
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 0 rgba(165, 200, 228, 0.4),
            0 8px 32px 0 rgba(165, 200, 228, 0.25);
        }

        /* Glowing movement (match Home) */
        @keyframes liquidMove {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10%, 5%); }
          100% { transform: translate(0, 0); }
        }
        @keyframes glossyShine {
          0% { left: -100%; }
          50%, 100% { left: 200%; }
        }
      
      /* AI Creator element badge under hero images */
      .ai-badge {
        position: relative;
      }
      .ai-badge::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url('/ai-element.webp');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .ai-badge__label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #ffffff;
        text-align: center;
        pointer-events: none;
        padding: 0 12px;
      }
      /* Extra spacing between the two mobile pairs */
      @media (max-width: 1023.98px) {
        .ai-mobile-pair { margin-bottom: clamp(36px, 12vw, 72px); }
      }
      /* Hover/click label color (match Creative/Branding) */
      .ai-badge:hover .ai-badge__label { color: #eabe76; }
      .ai-badge:active .ai-badge__label { color: #eabe76; }
        @media (max-width: 639.98px) {
          /* Add 2x horizontal padding on smaller screens */
          .subpad { padding-left: calc(clamp(18px, 4.5vw, 36px) * 2); padding-right: calc(clamp(18px, 4.5vw, 36px) * 2); }
        }
      `}),e.jsx("style",{children:`
        .lightbox-overlay { opacity: 1; transition: opacity 140ms ease; }
        .lightbox-fade-in { opacity: 1; }
        .lightbox-fade-out { opacity: 0; }
        .lightbox-modal {
          position: relative;
          margin: 0 auto;
          top: 10vh;
          width: auto;
          max-width: min(95vw, 1200px);
          max-height: 80vh;
          background: rgba(20,20,22,0.2);
          border-radius: 12px; /* allow outer corners to show, including rect right side */
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          color: #e7f2f8;
          transform: scale(0.98);
          transform-origin: center center;
          transition: transform 120ms ease;
          opacity: 1; /* show immediately so glass blur is visible without delay */
        }
        .scale-in { transform: scale(1); opacity: 1; }
        .scale-out { transform: scale(0.98); }
        @keyframes modalPopIn { 0% { transform: translateY(12px) scale(0.94); } 100% { transform: translateY(0) scale(1); } }
        .modal-pop-in { animation: modalPopIn 600ms cubic-bezier(0.2, 0.85, 0.2, 1) both; }
        @keyframes controlsPopIn { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
        .controls-pop-in { animation: controlsPopIn 1200ms ease-out both 220ms; }
        .thumbs-pop-in { animation: controlsPopIn 1300ms ease-out both 260ms; }
        .chevron-content { display: inline-flex; align-items: center; justify-content: center; }
        .lightbox-close {
          position: fixed; top: calc(20px + env(safe-area-inset-top)); right: calc(10px + env(safe-area-inset-right)); z-index: 10001;
          width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center;
          background: transparent; color: #ffffff; border: none; font-size: 24px; line-height: 1; font-weight: 600; border-radius: 8px;
        }
        /* Match AI Creator navbar button color */
        .lightbox-close:hover { background: #eac28a; color: #10171d; }
        .lightbox-close:active { background: #eac28a; color: #10171d; }
        .lightbox-chevron {
          position: fixed; top: 50%; transform: translateY(-50%); z-index: 10001;
          width: 42px; height: 42px; border-radius: 9999px; border: 2px solid #ffffff;
          background: rgba(0,0,0,0.45); color: #fff; display: inline-flex; align-items: center; justify-content: center;
          transition: background 160ms ease, border-color 160ms ease, color 160ms ease;
        }
        .lightbox-prev { left: calc(20px + env(safe-area-inset-left)); }
        .lightbox-next { right: calc(20px + env(safe-area-inset-right)); }
        /* Match AI Creator navbar button color */
        .lightbox-chevron:hover { background: #eac28a; border-color: #eac28a; color: #10171d; }
        .lightbox-chevron:active { background: #eac28a; border-color: #eac28a; color: #10171d; }
        .lightbox-image-wrap { display: flex; align-items: center; justify-content: center; padding: 20px 20px 90px; touch-action: none; }
        .lightbox-image-row {
          display: inline-flex; align-items: stretch; gap: 0;
          max-height: calc(80vh - 110px);
          border-radius: 0; overflow: visible;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }
        /* Make the image size to full available height and keep aspect, width auto.
           Its box matches the bitmap edge so it touches the side panel with no gap. */
        .lightbox-image { 
          flex: 0 0 auto;
          height: calc(80vh - 110px);
          width: auto;
          max-height: calc(80vh - 110px);
          object-fit: contain;
          border-radius: 0; box-shadow: none; display: block;
        }
        /* Round only outer corners when side panel is present */
        .lightbox-image.has-side { border-top-left-radius: 12px !important; border-bottom-left-radius: 12px !important; }
        /* Off-white side panel for Annie first image (not overlay) */
        .lightbox-rect {
          flex: 0 0 35vw; /* keep panel width consistent while allowing centering */
          align-self: stretch; /* match image height exactly */
          /* Glass style to match navbar */
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
          color: #ffffff;
          display: flex; flex-direction: column; align-items: flex-start; justify-content: center; /* vertical center, left aligned */
          box-sizing: border-box;
          /* Use first-image horizontal padding for all images */
          padding: clamp(24px, 4.5vw, 48px) clamp(28px, 8vw, 100px);
          overflow: hidden; /* ensure rounded corners render crisply */
          will-change: transform, backdrop-filter; /* prevent initial flicker */
          backface-visibility: hidden;
        }
        /* Annie first image: responsive padding (~5x max) and doubled paragraph spacing */
        .lightbox-rect.annie-first { padding: clamp(28px, 8vw, 100px); }
        .lightbox-rect.annie-first .lightbox-rect-desc { margin-bottom: 24px; }
        .lightbox-rect.right { border-top-right-radius: 12px !important; border-bottom-right-radius: 12px !important; }
        .lightbox-rect-content {
          position: relative;
          text-align: left;
          font-family: 'Jost', sans-serif;
          width: 100%;
          display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start;
          word-break: break-word; overflow-wrap: break-word; hyphens: auto;
        }
        .lightbox-rect-inner { width: 100%; max-width: 52ch; margin: 0 auto; }
        .lightbox-rect-title, .lightbox-rect-sub, .lightbox-rect-desc { text-align: left; margin-left: 0; margin-right: 0; }
        .lightbox-rect-title { font-weight: 600; font-size: clamp(16px, 2.2vw, 24px); line-height: 1.2; color: #ffffff; }
        .lightbox-rect-sub {
          margin-top: 6px;
          margin-bottom: clamp(4px, 0.8vw, 10px);
          font-size: clamp(12px, 1.6vw, 14px);
          opacity: 0.92;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.02em;
          color: #ffffff;
        }
        .flag-icon { width: clamp(14px, 1.6vw, 18px); height: auto; display: inline-block; border-radius: 2px; }
        .lightbox-rect-desc-block { margin-top: clamp(4px, 0.8vw, 10px); width: 100%; }
        .lightbox-rect-desc { font-size: clamp(12px, 1.2vw, 15px); line-height: 1.8; color: #bb9b6e; margin: 0 0 24px; }
        @keyframes imgEnterL { 0% { opacity: 0; transform: translateX(36px) scale(0.985); filter: blur(6px); } 100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); } }
        @keyframes imgEnterR { 0% { opacity: 0; transform: translateX(-36px) scale(0.985); filter: blur(6px); } 100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); } }
        .img-enter-left  { animation: imgEnterL 900ms cubic-bezier(0.16, 1, 0.3, 1); }
        .img-enter-right { animation: imgEnterR 900ms cubic-bezier(0.16, 1, 0.3, 1); }

        /* Desktop seamless pair animation (no opacity to avoid glass flicker) */
        @keyframes blockEnterL { 0% { transform: translateX(36px) scale(0.985); } 100% { transform: translateX(0) scale(1); } }
        @keyframes blockEnterR { 0% { transform: translateX(-36px) scale(0.985); } 100% { transform: translateX(0) scale(1); } }
        .block-enter-left  { animation: blockEnterL 900ms cubic-bezier(0.16, 1, 0.3, 1); }
        .block-enter-right { animation: blockEnterR 900ms cubic-bezier(0.16, 1, 0.3, 1); }

        /* Mobile: stack image + panel in one scrollable container */
        @media (max-width: 768px) {
          .lightbox-image-row {
            flex-direction: column;
            width: min(92vw, 1000px);
            height: calc(80vh - 110px); /* leave room for bottom thumbs */
            overflow-y: auto; overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            touch-action: pan-y;
            overscroll-behavior: contain;
            border-radius: 12px; /* keep outer corners */
          }
          .lightbox-image-wrap { padding: 12px; }
          /* Keep mobile heights consistent with desktop viewport-based height */
          /* Make image content width match rectangle inner width (20px padding on rect) */
          .lightbox-image {
            box-sizing: border-box;
            width: calc(100% - (2 * clamp(28px, 8vw, 100px)));
            margin: 0 clamp(28px, 8vw, 100px) 20px;
            aspect-ratio: 1 / 1;            /* make image square */
            height: auto;                    /* let aspect-ratio compute height */
            max-height: none;                /* avoid shrinking square */
            object-fit: cover;               /* fill square nicely */
            object-position: top center;     /* crop from the top, not center */
            border-radius: 12px !important;
          }
          /* Center Lucia image 1 and 2 horizontally on mobile */
          .lucia-center .lightbox-image { margin-left: auto !important; margin-right: auto !important; }
          /* Let rectangle height grow with its text on small screens */
          .lightbox-rect { box-sizing: border-box; width: 100%; flex: 0 0 auto; height: auto; overflow: visible; border-radius: 12px !important; }
          /* Add scroll only on small screens for long text; show a visible thin scrollbar */
          .lightbox-rect-content {
            max-height: 100%;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            padding-right: 16px;           /* space between text and scrollbar */
            scrollbar-gutter: stable;      /* where supported, reserve gutter */
            scrollbar-width: thin;         /* Firefox */
            scrollbar-color: rgba(0,0,0,0.2) transparent; /* 20% opacity */
          }
          .lightbox-rect-content::-webkit-scrollbar { width: 2px; }
          .lightbox-rect-content::-webkit-scrollbar-track { background: transparent; }
          .lightbox-rect-content::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 8px; }
          /* Lucia mobile: no overrides; matches Annie */
          /* Mirror for Annie to keep behavior consistent if needed */
          .subject-annie .lightbox-image {
            border-top-left-radius: 12px !important;
            border-top-right-radius: 12px !important;
            border-bottom-left-radius: 12px !important;
            border-bottom-right-radius: 12px !important;
          }
          .subject-annie .lightbox-rect {
            border-top-left-radius: 12px !important;
            border-top-right-radius: 12px !important;
            border-bottom-left-radius: 12px !important;
            border-bottom-right-radius: 12px !important;
          }
          .lightbox-rect.right { border-radius: 12px !important; }
        }
        
        /* Desktop: enforce seamless outer rounding on the pair (container handles corners) */
        @media (min-width: 769px) {
          .lightbox-image-row { border-radius: 12px; overflow: hidden; }
          .lightbox-image.has-side { border-radius: 0 !important; }
          .lightbox-rect.right { border-radius: 0 !important; }

          /* Annie last image: make image and rectangle same width and stretch to same height */
          @media (min-width: 1024px) {
            .row-annie-last { align-items: stretch !important; }
            .row-annie-last .lightbox-image { flex: 0 0 50% !important; width: 50% !important; height: auto !important; max-height: none !important; }
            .row-annie-last .lightbox-rect { flex: 0 0 50% !important; height: auto !important; }
          }

          /* Allow last image (index 4) to have its own natural height */
          .row-free { max-height: none !important; }
          .row-free .lightbox-image { height: auto !important; max-height: none !important; }

          /* Last image wider layout */
          
          
          /* Rectangle text: visible thin scrollbar on desktop when overflow */
          .lightbox-rect-content {
            max-height: 100%;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            padding-right: 16px;           /* match mobile spacing */
            scrollbar-gutter: stable;      /* where supported */
            scrollbar-width: thin;         /* Firefox */
            scrollbar-color: rgba(0,0,0,0.2) transparent;
          }
          .lightbox-rect-content::-webkit-scrollbar { width: 2px; }
          .lightbox-rect-content::-webkit-scrollbar-track { background: transparent; }
          .lightbox-rect-content::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 8px; }
          /* No custom indicator on desktop to avoid double bars */
        }
        .lightbox-thumbs { position: fixed; left: 0; right: 0; bottom: 0; height: 86px; background: rgba(10,10,12,0.35); border-top: none; z-index: 9999; padding-bottom: env(safe-area-inset-bottom); }
        .lightbox-thumbs-scroll { height: 100%; overflow-x: auto; overflow-y: hidden; padding: 8px 10px; -webkit-overflow-scrolling: touch; touch-action: pan-x; text-align: center; white-space: nowrap; }
        .thumbs-inner { display: inline-block; white-space: nowrap; }
        .thumb { width: 100px; height: 64px; border-radius: 8px; overflow: hidden; border: 2px solid transparent; background: rgba(255,255,255,0.05); display: inline-block; vertical-align: middle; transition: transform 150ms ease, border-color 150ms ease; }
        .thumb:hover { transform: translateY(-1px); }
        .thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .thumb-active { border-color: #ed6d6d; }
        @media (max-width: 768px) { .lightbox-modal { width: min(92vw, 900px); max-height: 80vh; } .lightbox-image-wrap { padding: 12px 12px 90px; } .lightbox-chevron { display: none; } }
      `})]})}export{Q as default};
