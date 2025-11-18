import{u as J,a as O,r as n,d as k,e as Y,j as e}from"./index-DsEGQgHG.js";import{a as V}from"./attachHireMe-cocM_1Z7.js";const q="/assets/1-JCirSOCe.webp",F="/assets/2-CNgwvvu8.webp",K="/assets/3-DG0DQtok.webp",U="/assets/4-DefcXSaw.webp",Q="/assets/5-CS07AdK6.webp",Z="/assets/6-BBGEu7YQ.webp",ee="/assets/7-Cy4lyGKz.webp",te="/assets/9-8IM4r6To.webp",ae=Object.assign({"../assets/merchandise/1.webp":q,"../assets/merchandise/2.webp":F,"../assets/merchandise/3.webp":K,"../assets/merchandise/4.webp":U,"../assets/merchandise/5.webp":Q,"../assets/merchandise/6.webp":Z,"../assets/merchandise/7.webp":ee,"../assets/merchandise/9.webp":te}),i=Object.values(ae).sort();function se(){const p=J(),j=O(),[u,N]=n.useState(!1),[ne,oe]=n.useState(null),[R,B]=n.useState(0),[s,_]=n.useState(!1),[v,C]=n.useState(!1),[c,m]=n.useState(0),[S,z]=n.useState(null),X=n.useRef(null),I=n.useRef(null),$=n.useRef(null),b=n.useRef(null),x=n.useRef(null),g=n.useRef(new Set),[d,f]=n.useState(!1),r=n.useRef(null);n.useEffect(()=>{j.state&&j.state.animateHero&&B(a=>a+1)},[]),n.useEffect(()=>V(document),[]),n.useEffect(()=>{const a=k,t=document.createElement("link");return t.rel="preload",t.as="image",t.href=a,document.head.appendChild(t),()=>{try{document.head.removeChild(t)}catch{}}},[]),n.useEffect(()=>{const a=Y,t=document.createElement("link");return t.rel="preload",t.as="image",t.href=a,document.head.appendChild(t),()=>{try{document.head.removeChild(t)}catch{}}},[]),n.useEffect(()=>{const a=document.documentElement,t=document.body,o=a.style.overflow,l=t.style.overflow;return u||s?(a.style.overflow="hidden",t.style.overflow="hidden"):(a.style.overflow=o||"",t.style.overflow=l||""),()=>{a.style.overflow=o||"",t.style.overflow=l||""}},[u,s]);const H=a=>new Promise(t=>{if(!a||g.current.has(a))return t();const o=new Image;if(o.src=a,o.decode)o.decode().catch(()=>{}).then(()=>{g.current.add(a),t()});else{if(o.complete)return g.current.add(a),t();o.onload=()=>{g.current.add(a),t()},o.onerror=()=>t()}});n.useEffect(()=>{if(!s)return;const a=t=>{t.key==="ArrowRight"?(t.preventDefault(),y()):t.key==="ArrowLeft"&&(t.preventDefault(),w())};return window.addEventListener("keydown",a),setTimeout(()=>{var t;return(t=I.current)==null?void 0:t.focus()},0),()=>window.removeEventListener("keydown",a)},[s]),n.useEffect(()=>(s?(f(!0),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>f(!1),1600)):(f(!1),r.current&&(clearTimeout(r.current),r.current=null)),()=>{r.current&&(clearTimeout(r.current),r.current=null)}),[s]);const M=async(a=0)=>{const t=i.length?i:Array.from({length:24},(o,l)=>`/merchandise/${l+1}.webp`);try{if(window.preloadGate)window.preloadGate(t,{minMs:0,maxMs:0,silent:!0});else{const o=t[a]||t[0];o&&H(o)}}catch{}m(a),f(!0),_(!0)},T=()=>{C(!0),setTimeout(()=>{_(!1),C(!1)},140)},D=i.length||0,L=24,h=D||L,w=()=>{z("right"),m(a=>(a-1+h)%h)},y=()=>{z("left"),m(a=>(a+1)%h)},P=a=>{const t=a.touches&&a.touches[0];t&&(b.current=t.clientX,x.current=t.clientY)},W=a=>{const t=a.touches&&a.touches[0];if(!t)return;const o=t.clientX-(b.current??t.clientX),l=t.clientY-(x.current??t.clientY),E=Math.abs(o),A=Math.abs(l);window.innerWidth<=768&&E>40&&E>A*1.2&&(o<0?y():w(),b.current=t.clientX,x.current=t.clientY)},G=()=>{b.current=null,x.current=null};return e.jsxs("div",{className:"min-h-screen bg-[#06080a] p-[clamp(6px,1.5vw,12px)] animate-fadeIn relative flex flex-col",children:[e.jsx("div",{className:"page-fixed-bg","aria-hidden":!0,style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${k})`}}),e.jsx("div",{className:"page-fixed-overlay","aria-hidden":!0}),e.jsxs("div",{className:"liquid-glass-header animate-slideDownNav flex items-center justify-center py-[clamp(10px,2.5vh,16px)] relative",children:[e.jsx("img",{decoding:"async",src:"/left.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-left svg-gold sub-anim-svg-left"}),e.jsx("img",{decoding:"async",src:"/right.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-right svg-gold sub-anim-svg-right"}),e.jsx("div",{className:"absolute left-[clamp(16px,3vw,40px)] w-auto",children:e.jsxs("button",{onClick:()=>p("/"),className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full sm:rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] whitespace-nowrap",children:[e.jsx("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),e.jsx("span",{className:"hidden sm:inline",children:"Character Select"})]})}),e.jsx("img",{decoding:"async",src:"/ibheelz-logo.webp",alt:"ibheelz",className:"h-[clamp(3rem,6vw,4.25rem)] w-auto cursor-pointer sub-anim-logo-slow",style:{maxHeight:"68px"},onClick:()=>p("/")}),e.jsx("div",{className:"absolute right-[clamp(16px,3vw,40px)]",children:e.jsxs("button",{onClick:()=>window.open("/Resume.pdf","_blank"),className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full sm:rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] cursor-pointer",children:[e.jsxs("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14,2 14,8 20,8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("polyline",{points:"10,9 9,9 8,9"})]}),e.jsx("span",{className:"hidden sm:inline",children:"View Resume"})]})})]}),e.jsx("div",{className:"header-spacer"}),e.jsxs("div",{className:"page-content relative brand-bg subpad flex-1 flex flex-col items-center justify-center p-0 mt-0 -mx-[clamp(12px,3vw,24px)] -mb-[clamp(12px,3vw,24px)] px-[clamp(18px,4.5vw,36px)] md:px-0 anim-bg-soft",children:[e.jsxs("div",{className:"w-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-20",children:[e.jsx("div",{className:"hidden lg:flex flex-col items-center justify-center lg:my-24",children:e.jsx("button",{className:"branding-image-button anim-btn-soft font-['Jost',sans-serif] font-medium capitalize transition-all duration-300 flex items-center justify-center text-[clamp(11px,1vw,16px)]",style:{minWidth:"clamp(280px, 24vw, 480px)",height:"clamp(64px,6vw,96px)"},children:e.jsx("span",{className:"branding-image-button__label",children:"Brand Identity"})})}),e.jsx("img",{src:Y,alt:"Brand Designer",className:"w-full lg:w-auto h-auto object-contain mt-[clamp(48px,8vw,96px)] lg:mt-0 anim-content-soft mx-auto lg:mx-0 max-h-[78vh] lg:max-h-[68vh]",decoding:"async",fetchpriority:"high"},R),e.jsx("div",{className:"hidden lg:flex flex-col items-center justify-center lg:my-24",children:e.jsx("button",{className:"branding-image-button anim-btn-soft font-['Jost',sans-serif] font-medium capitalize transition-all duration-300 flex items-center justify-center text-[clamp(11px,1vw,16px)]",style:{minWidth:"clamp(280px, 24vw, 480px)",height:"clamp(64px,6vw,96px)"},onClick:()=>M(0),children:e.jsx("span",{className:"branding-image-button__label",children:"Merchandise"})})})]}),e.jsx("div",{className:"hidden lg:flex w-full justify-center mt-10 mb-6",children:e.jsxs("button",{onClick:()=>p("/branding/case-study"),className:"branding-case-btn px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base text-white font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2",children:[e.jsx("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),"Case Study"]})}),e.jsxs("div",{className:"lg:hidden w-full px-0 mt-[clamp(36px,7vw,64px)] mb-[clamp(80px,12vh,140px)] text-center",children:[e.jsx("div",{className:"max-w-[900px] mx-auto grid grid-cols-1 gap-[clamp(14px,3vw,24px)]",children:["Brand Identity","Merchandise"].map((a,t)=>e.jsx("button",{className:"branding-image-button anim-btn-soft w-full font-['Jost',sans-serif] font-medium capitalize transition-all duration-300 flex items-center justify-center text-[clamp(13px,3.5vw,16px)]",style:{height:"clamp(64px,10vw,86px)"},onClick:()=>{a==="Merchandise"&&M(0)},children:e.jsx("span",{className:"branding-image-button__label",children:a})},t))}),e.jsx("div",{className:"mt-5",children:e.jsxs("button",{onClick:()=>p("/branding/case-study"),className:"apple-glass-button px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2",children:[e.jsx("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),"Case Study"]})})]})]}),e.jsx("div",{className:"lg:hidden page-content mobile-sticky-cta flex justify-center items-center px-4 mt-[40px] mb-5",children:e.jsxs("button",{className:"apple-glass-button-neutral px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base text-white font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2",style:{minWidth:"min(65vw, 520px)"},children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Hire Me"]})}),u&&e.jsx("div",{className:"modal-overlay",onClick:()=>N(!1),children:e.jsxs("div",{className:"modal-glass",onClick:a=>a.stopPropagation(),children:[e.jsx("button",{className:"modal-close glass-button rounded-full",onClick:()=>N(!1),"aria-label":"Close",title:"Close",children:"×"}),e.jsxs("div",{className:"modal-split",children:[e.jsx("div",{className:"modal-pane-left"}),e.jsx("div",{className:"modal-pane-right"})]})]})}),(s||v)&&e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Merchandise gallery",className:`fixed inset-0 z-[9998] lightbox-overlay ${v?"lightbox-fade-out":"lightbox-fade-in"}`,children:[e.jsx("button",{ref:I,className:`lightbox-close ${d?"controls-pop-in":""}`,"aria-label":"Close",onClick:T,children:"×"}),e.jsx("button",{className:"lightbox-chevron lightbox-prev","aria-label":"Previous",onClick:w,children:e.jsx("span",{className:`chevron-content ${d?"controls-pop-in":""}`,children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})})}),e.jsx("button",{className:"lightbox-chevron lightbox-next","aria-label":"Next",onClick:y,children:e.jsx("span",{className:`chevron-content ${d?"controls-pop-in":""}`,children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})})}),e.jsx("div",{className:`lightbox-modal ${d?"modal-pop-in":v?"scale-out":"scale-in"}`,ref:X,onClick:a=>a.stopPropagation(),children:e.jsx("div",{className:"lightbox-image-wrap",onTouchStart:P,onTouchMove:W,onTouchEnd:G,children:e.jsx("img",{src:i.length?i[c%i.length]:`/merchandise/${c+1}.webp`,alt:`Merchandise ${c+1}`,className:`lightbox-image ${S==="left"?"img-enter-left":S==="right"?"img-enter-right":""}`,decoding:"async"},c)})}),e.jsx("div",{className:`lightbox-thumbs ${d?"thumbs-pop-in":""}`,role:"listbox","aria-label":"Thumbnails",onClick:a=>a.stopPropagation(),children:e.jsx("div",{className:"lightbox-thumbs-scroll",ref:$,children:e.jsx("div",{className:"thumbs-inner",children:(i.length?i:Array.from({length:L},(a,t)=>`/merchandise/${t+1}.webp`)).map((a,t)=>e.jsx("button",{className:`thumb ${t===c%h?"thumb-active":""}`,"aria-label":`Go to image ${t+1}`,onClick:()=>m(t),children:e.jsx("img",{src:a,alt:"",decoding:"async"})},t))})})})]}),e.jsx("style",{jsx:!0,children:`
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
          background: #aa90db; /* Branding hover/click */
          border-color: #aa90db;
          box-shadow: none;
          color: #ffffff; /* white text */
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

        /* Grey merged center card */
        .grey-card {
          background: #06080a; /* page theme color */
          border: none;
        }

        /* Small screens: increase card height */
        @media (max-width: 639.98px) {
          .glass-card,
          .theme-card {
            min-height: clamp(180px, 35vh, 360px) !important;
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

        /* Card entrance animations */
        @keyframes cardInLeft {
          from { transform: translateX(-120vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes cardInRight {
          from { transform: translateX(120vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes cardSoftFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        /* Slow entrance (as before) */
        .anim-card-in-left { animation: cardInLeft 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .anim-card-in-right { animation: cardInRight 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .anim-card-fade { animation: cardSoftFade 2.4s ease-out 200ms both; }

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

        /* Soft content fade/slide-in for hero image (all screen sizes) */
        @keyframes contentSoftIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.992); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .anim-content-soft { animation: contentSoftIn 900ms ease-out 200ms both; }

        /* Enhanced hero image animation (enter + subtle float) */
        @keyframes heroEnter {
          0% { opacity: 0; transform: translateY(16px) scale(0.985); }
          60% { opacity: 1; transform: translateY(0) scale(1.012); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        .anim-hero-image {
          will-change: transform, opacity;
          animation: heroEnter 720ms cubic-bezier(0.2, 0.85, 0.2, 1) both, heroFloat 7000ms ease-in-out 900ms infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-hero-image { animation: heroEnter 400ms ease-out both; }
        }

        /* Page-level soft intro animations (exclude navbar) */
        @keyframes bgSoftIn {
          0% { opacity: 0; transform: scale(1.015); }
          100% { opacity: 1; transform: scale(1); }
        }
        .anim-bg-soft { animation: bgSoftIn 800ms ease-out both; }

        /* Match Creative: extra darkening overlay via pseudo */
        .brand-bg::before { display: none; }
        @media (max-width: 639.98px) {
          /* Add 2x horizontal padding on smaller screens */
          .subpad { padding-left: calc(clamp(18px, 4.5vw, 36px) * 2); padding-right: calc(clamp(18px, 4.5vw, 36px) * 2); }
        }

        /* Apple-style gold button (match homepage) */
        .apple-glass-button,
        .apple-glass-button-accent {
          position: relative;
          overflow: hidden;
        }
        .apple-glass-button {
          background: #d8ac65;
          border: none;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
          color: #10171d;
        }
        .apple-glass-button::before { display: none; }
        .apple-glass-button:hover {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
        }

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
        /* Neutral gray button for Hire Me (mobile) */
        .apple-glass-button-neutral {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, rgba(180,190,200,0.28) 0%, rgba(180,190,200,0.18) 50%, rgba(180,190,200,0.28) 100%);
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(180,190,200,0.45);
          box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.4), inset 0 -1px 0 0 rgba(180,190,200,0.35), 0 8px 32px 0 rgba(180,190,200,0.2);
          color: #ffffff;
        }
        .apple-glass-button-neutral::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%); animation: liquidMove 4s ease-in-out infinite; }
        .apple-glass-button-neutral::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent); animation: glossyShine 3s ease-in-out infinite; animation-delay: 0.5s; }
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

        /* Branding theme Case Study button (purple glass) */
        .branding-case-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(170, 144, 219, 0.32) 0%,
            rgba(170, 144, 219, 0.22) 50%,
            rgba(170, 144, 219, 0.32) 100%
          );
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(170, 144, 219, 0.5);
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 0 rgba(170, 144, 219, 0.35),
            0 8px 32px 0 rgba(170, 144, 219, 0.25);
          color: #ffffff;
        }
        .branding-case-btn::before {
          content: '';
          position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%);
          animation: liquidMove 4s ease-in-out infinite;
        }
        .branding-case-btn::after {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: glossyShine 3s ease-in-out infinite; animation-delay: 0.5s;
        }
        .branding-case-btn:hover {
          background: linear-gradient(
            135deg,
            rgba(170, 144, 219, 0.45) 0%,
            rgba(170, 144, 219, 0.32) 50%,
            rgba(170, 144, 219, 0.45) 100%
          );
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 0 rgba(170, 144, 219, 0.5),
            0 8px 32px 0 rgba(170, 144, 219, 0.35);
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

        /* Branding image-based buttons */
        .branding-image-button {
          position: relative;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
        }
        .branding-image-button::before {
          content: "";
          position: absolute; inset: 0;
          background-image: url('/branding-button.webp');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        .branding-image-button__label {
          position: relative;
          color: #ffffff;
          text-align: center;
          width: 100%; height: 100%;
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0 12px;
          pointer-events: none;
          transition: color 160ms ease;
        }
        /* Hover/click label color (match Creative) */
        .branding-image-button:hover .branding-image-button__label { color: #eabe76; }
        .branding-image-button:active .branding-image-button__label { color: #eabe76; }

        /* Lightbox (reuse Creative styles) */
        /* Lightbox (exact same as Creative) */
        .lightbox-overlay { background-image: linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(${k}); background-size: cover; background-position: center; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 120ms ease; overflow: hidden; overscroll-behavior: contain; }
        .lightbox-fade-in { opacity: 1; }
        .lightbox-fade-out { opacity: 0; }
        .lightbox-modal { position: relative; width: min(70vw, 1200px); max-height: 80vh; background: rgba(20,20,22,0.2); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.35); color: #e7f2f8; transform: scale(0.98); transform-origin: center center; transition: transform 120ms ease; opacity: 0; }
        .scale-in { transform: scale(1); opacity: 1; }
        .scale-out { transform: scale(0.98); }
        .scale-in { transform: scale(1); }
        .scale-out { transform: scale(0.98); }
        @keyframes modalPopIn { 0% { opacity: 0; transform: translateY(12px) scale(0.94);} 100% { opacity: 1; transform: translateY(0) scale(1);} }
        .modal-pop-in { animation: modalPopIn 900ms cubic-bezier(0.2, 0.85, 0.2, 1) both; }
        @keyframes controlsPopIn { 0% { opacity: 0; transform: translateY(12px);} 100% { opacity: 1; transform: translateY(0);} }
        .controls-pop-in { animation: controlsPopIn 1200ms ease-out both 220ms; }
        .thumbs-pop-in { animation: controlsPopIn 1300ms ease-out both 260ms; }
        .chevron-content { display: inline-flex; align-items: center; justify-content: center; }
        .lightbox-close { position: fixed; top: calc(20px + env(safe-area-inset-top)); right: calc(10px + env(safe-area-inset-right)); z-index: 10001; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; background: transparent; color: #ffffff; border: none; font-size: 24px; line-height: 1; font-weight: 600; border-radius: 8px; }
        /* Match Branding navbar button color */
        .lightbox-close:hover { background: #aa90db; color: #ffffff; }
        .lightbox-close:active { background: #aa90db; color: #ffffff; }
        .lightbox-chevron { position: fixed; top: 50%; transform: translateY(-50%); z-index: 10001; width: 42px; height: 42px; border-radius: 9999px; border: 2px solid #ffffff; background: rgba(0,0,0,0.45); color: #fff; display: inline-flex; align-items: center; justify-content: center; transition: background 160ms ease, border-color 160ms ease, color 160ms ease; }
        .lightbox-prev { left: calc(20px + env(safe-area-inset-left)); }
        .lightbox-next { right: calc(20px + env(safe-area-inset-right)); }
        /* Match Branding navbar button color */
        .lightbox-chevron:hover { background: #aa90db; border-color: #aa90db; color: #ffffff; }
        .lightbox-chevron:active { background: #aa90db; border-color: #aa90db; color: #ffffff; }
        .lightbox-image-wrap { display: flex; align-items: center; justify-content: center; padding: 20px 20px 90px; touch-action: none; }
        .lightbox-image { max-width: 100%; max-height: calc(80vh - 110px); object-fit: cover; object-position: top center; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); will-change: transform, opacity, filter; }
        @keyframes imgEnterL { 0% { opacity: 0; transform: translateX(36px) scale(0.985); filter: blur(6px);} 100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0);} }
        @keyframes imgEnterR { 0% { opacity: 0; transform: translateX(-36px) scale(0.985); filter: blur(6px);} 100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0);} }
        .img-enter-left { animation: imgEnterL 900ms cubic-bezier(0.16, 1, 0.3, 1); }
        .img-enter-right { animation: imgEnterR 900ms cubic-bezier(0.16, 1, 0.3, 1); }
        .lightbox-thumbs { position: fixed; left: 0; right: 0; bottom: 0; height: 86px; background: rgba(10,10,12,0.35); border-top: none; z-index: 9999; padding-bottom: env(safe-area-inset-bottom); }
        .lightbox-thumbs-scroll { height: 100%; overflow-x: auto; overflow-y: hidden; padding: 8px 10px; -webkit-overflow-scrolling: touch; touch-action: pan-x; text-align: center; white-space: nowrap; }
        .lightbox-thumbs-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .lightbox-thumbs-scroll::-webkit-scrollbar { width: 0; height: 0; display: none; }
        .thumbs-inner { display: inline-block; white-space: nowrap; }
        .thumb { width: 100px; height: 64px; border-radius: 8px; overflow: hidden; border: 2px solid transparent; background: rgba(255,255,255,0.05); display: inline-block; vertical-align: middle; transition: transform 150ms ease, border-color 150ms ease; }
        .thumb:hover { transform: translateY(-1px); }
        .thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .thumb-active { border-color: #ed6d6d; }
        @media (max-width: 768px) { .lightbox-modal { width: min(92vw, 900px); max-height: 80vh; } .lightbox-image-wrap { padding: 12px 12px 90px; } .lightbox-chevron { display: none; } }
      `})]})}export{se as default};
