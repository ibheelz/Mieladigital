import{u as U,a as Q,r as o,c as v,b as V,j as t}from"./index-DsEGQgHG.js";import{a as Z}from"./attachHireMe-cocM_1Z7.js";const ee="/assets/1-wpwK6Kjr.webp",te="/assets/2-uL_6mq-c.webp",ae="/assets/3-B-N_w99q.webp",oe="/assets/4-Cr2VAHIm.webp",ne="/assets/5-CWx8SGAs.webp",re="/assets/6-CK-J-TBe.webp",se="/assets/7-0Up4tRbL.webp",ie="/assets/8-Bvc3fA7e.webp",le="/assets/9-T__qxVMn.webp",ce=Object.assign({"../assets/ooh/1.webp":ee,"../assets/ooh/2.webp":te,"../assets/ooh/3.webp":ae,"../assets/ooh/4.webp":oe,"../assets/ooh/5.webp":ne,"../assets/ooh/6.webp":re,"../assets/ooh/7.webp":se,"../assets/ooh/8.webp":ie,"../assets/ooh/9.webp":le}),b=Object.values(ce).sort();function ge(){const x=U(),L=Q(),[w,z]=o.useState(!1),[pe,de]=o.useState(null),[i,I]=o.useState(!1),[y,R]=o.useState(!1),[l,h]=o.useState(0),[E,k]=o.useState(null),M=o.useRef(null),T=o.useRef(null),$=o.useRef(null),q=o.useRef(null),Y=o.useRef(null),D=o.useRef(null),[H,O]=o.useState("posters"),u=o.useRef(new Set),[g,j]=o.useState(!1),p=o.useRef(null),N=o.useRef(0),d=o.useRef({position:"",top:"",width:"",overflow:""}),_=o.useRef(""),[P,W]=o.useState(0);o.useEffect(()=>{L.state&&L.state.animateHero&&W(a=>a+1)},[]),o.useEffect(()=>Z(document),[]),o.useEffect(()=>{const a=v,e=document.createElement("link");return e.rel="preload",e.as="image",e.href=a,document.head.appendChild(e),()=>{try{document.head.removeChild(e)}catch{}}},[]),o.useEffect(()=>{const a=V,e=document.createElement("link");return e.rel="preload",e.as="image",e.href=a,document.head.appendChild(e),()=>{try{document.head.removeChild(e)}catch{}}},[]);const X={posters:{base:"posters-and-flyers",length:27},web:{base:"web-designs",length:12},editorial:{base:"editorial-designs",length:5},ooh:{base:"ooh",length:b.length||24}},B=X[H],r=H==="ooh"&&b.length?b:Array.from({length:B.length},(a,e)=>`/${B.base}/${e+1}.webp`),A=a=>new Promise(e=>{if(!a||u.current.has(a))return e();const n=new Image;if(n.src=a,n.decode)n.decode().catch(()=>{}).then(()=>{u.current.add(a),e()});else{if(n.complete)return u.current.add(a),e();n.onload=()=>{u.current.add(a),e()},n.onerror=()=>e()}});o.useEffect(()=>{const a=document.documentElement,e=document.body;if(w||i)_.current=a.style.overflow,d.current={position:e.style.position,top:e.style.top,width:e.style.width,overflow:e.style.overflow},N.current=window.scrollY||window.pageYOffset||0,a.style.overflow="hidden",e.style.overflow="hidden",e.style.position="fixed",e.style.top=`-${N.current}px`,e.style.width="100%";else{a.style.overflow=_.current||"",e.style.position=d.current.position||"",e.style.top=d.current.top||"",e.style.width=d.current.width||"",e.style.overflow=d.current.overflow||"";const n=N.current||0;typeof window<"u"&&window.scrollTo(0,n)}return()=>{a.style.overflow=_.current||"",e.style.position=d.current.position||"",e.style.top=d.current.top||"",e.style.width=d.current.width||"",e.style.overflow=d.current.overflow||""}},[w,i]),o.useEffect(()=>{if(!i)return;const a=e=>{var n;if(e.key==="ArrowRight")e.preventDefault(),S();else if(e.key==="ArrowLeft")e.preventDefault(),C();else if(e.key==="Tab"){const s=((n=M.current)==null?void 0:n.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])'))||[];if(s.length){const c=s[0],f=s[s.length-1];e.shiftKey&&document.activeElement===c?(e.preventDefault(),f.focus()):!e.shiftKey&&document.activeElement===f&&(e.preventDefault(),c.focus())}}};return window.addEventListener("keydown",a),setTimeout(()=>{var e;return(e=T.current)==null?void 0:e.focus()},0),()=>window.removeEventListener("keydown",a)},[i,r.length]),o.useEffect(()=>{if(!i||!r.length)return;const a=r[(l+1)%r.length],e=r[(l-1+r.length)%r.length];[a,e].forEach(n=>{n&&A(n)})},[i,l,r.length]),o.useEffect(()=>(i?(j(!0),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>j(!1),1600)):(j(!1),p.current&&(clearTimeout(p.current),p.current=null)),()=>{p.current&&(clearTimeout(p.current),p.current=null)}),[i]),o.useEffect(()=>{if(!i)return;const a=$.current;if(!a)return;const e=a.querySelectorAll(".thumb"),n=e&&e[l];n&&typeof n.scrollIntoView=="function"&&requestAnimationFrame(()=>{try{n.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}catch{}})},[l,i]);const m=async(a,e=0)=>{const n=X[a];let s=[];a==="ooh"&&b.length?s=b:s=Array.from({length:n.length},(c,f)=>`/${n.base}/${f+1}.webp`);try{if(window.preloadGate)window.preloadGate(s,{minMs:0,maxMs:0,silent:!0});else{const c=s[e]||s[0];c&&A(c)}}catch{}O(a),h(e),I(!0)},J=()=>{R(!0),setTimeout(()=>{I(!1),R(!1)},140)},C=()=>{k("right"),h(a=>(a-1+r.length)%r.length)},S=()=>{k("left"),h(a=>(a+1)%r.length)},K=a=>{const e=a.touches&&a.touches[0];e&&(Y.current=e.clientX,D.current=e.clientY)},G=()=>{},F=a=>{const e=a.changedTouches&&a.changedTouches[0];if(!e)return;const n=e.clientX-(Y.current??e.clientX),s=e.clientY-(D.current??e.clientY),c=Math.abs(n),f=Math.abs(s);window.innerWidth<=768&&c>40&&c>f*1.2&&(n<0?S():C())};return t.jsxs("div",{className:"min-h-screen bg-[#06080a] p-[clamp(12px,3vw,24px)] lg:p-[clamp(6px,1.5vw,12px)] animate-fadeIn relative flex flex-col",children:[t.jsx("div",{className:"page-fixed-bg","aria-hidden":!0,style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${v})`}}),t.jsx("div",{className:"page-fixed-overlay","aria-hidden":!0}),t.jsxs("div",{className:"liquid-glass-header animate-slideDownNav flex items-center justify-center py-[clamp(10px,2.5vh,16px)] relative",children:[t.jsx("img",{decoding:"async",src:"/left.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-left svg-gold sub-anim-svg-left"}),t.jsx("img",{decoding:"async",src:"/right.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-right svg-gold sub-anim-svg-right"}),t.jsx("div",{className:"absolute left-[clamp(16px,3vw,40px)] w-auto",children:t.jsxs("button",{onClick:()=>x("/"),className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full sm:rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] whitespace-nowrap",children:[t.jsx("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),t.jsx("span",{className:"hidden sm:inline",children:"Character Select"})]})}),t.jsx("img",{decoding:"async",src:"/ibheelz-logo.webp",alt:"ibheelz",className:"h-[clamp(3rem,6vw,4.25rem)] w-auto cursor-pointer sub-anim-logo-slow",style:{maxHeight:"68px"},onClick:()=>x("/")}),t.jsx("div",{className:"absolute right-[clamp(16px,3vw,40px)]",children:t.jsxs("button",{onClick:()=>window.open("/Resume.pdf","_blank"),className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full sm:rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] cursor-pointer",children:[t.jsxs("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),t.jsx("polyline",{points:"14,2 14,8 20,8"}),t.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),t.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),t.jsx("polyline",{points:"10,9 9,9 8,9"})]}),t.jsx("span",{className:"hidden sm:inline",children:"View Resume"})]})})]}),t.jsx("div",{className:"header-spacer"}),t.jsxs("div",{className:"page-content relative cd-bg subpad flex-1 flex flex-col items-center md:items-center justify-center p-0 mt-0 -mx-[clamp(12px,3vw,24px)] -mb-[clamp(12px,3vw,24px)] lg:-mx-[clamp(6px,1.5vw,12px)] lg:-mb-[clamp(6px,1.5vw,12px)] px-[clamp(18px,4.5vw,36px)] md:px-0 anim-bg-soft",children:[t.jsxs("div",{className:"w-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-12 xl:gap-20",children:[t.jsx("div",{className:"hidden lg:flex flex-col gap-28 items-center justify-center lg:my-24",children:["posters & flyers","web design"].map((a,e)=>t.jsx("button",{className:"creative-image-button anim-btn-soft font-['Jost',sans-serif] font-medium capitalize transition-all duration-300 flex items-center justify-center text-[clamp(11px,1vw,16px)]",style:{minWidth:"clamp(280px, 24vw, 480px)",height:"clamp(64px,6vw,96px)",animationDelay:`${e*80}ms`},onClick:()=>{a.includes("posters")?m("posters",0):a.includes("web")?m("web",0):a.toLowerCase().includes("ooh")&&m("ooh",0)},children:t.jsx("span",{className:"creative-image-button__label",children:a})},`left-${e}`))}),t.jsx("img",{src:V,alt:"Creative Designer",className:"w-full lg:w-auto h-auto object-contain mt-[clamp(48px,8vw,96px)] lg:mt-0 anim-content-soft mx-auto lg:mx-0 max-h-[78vh] lg:max-h-[68vh]",decoding:"async",fetchpriority:"high"},P),t.jsx("div",{className:"hidden lg:flex flex-col gap-28 items-center justify-center lg:my-24",children:["OOH & Billboard Design","Editorial design"].map((a,e)=>t.jsx("button",{className:"creative-image-button anim-btn-soft font-['Jost',sans-serif] font-medium capitalize transition-all duration-300 flex items-center justify-center text-[clamp(11px,1vw,16px)]",style:{minWidth:"clamp(280px, 24vw, 480px)",height:"clamp(64px,6vw,96px)",animationDelay:`${e*80+120}ms`},onClick:()=>{a.toLowerCase().includes("ooh")?m("ooh",0):a.toLowerCase().includes("editorial")&&m("editorial",0)},children:t.jsx("span",{className:"creative-image-button__label",children:a})},`right-${e}`))})]}),t.jsx("div",{className:"hidden lg:flex w-full justify-center mt-10 mb-6",children:t.jsxs("button",{onClick:()=>x("/creative-designer/case-study"),className:"case-study-btn px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base text-white font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2",children:[t.jsx("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),"Case Study"]})}),t.jsxs("div",{className:"lg:hidden w-full px-0 mt-[clamp(36px,7vw,64px)] mb-[clamp(80px,12vh,140px)] text-center",style:{WebkitOverflowScrolling:"touch"},children:[t.jsx("div",{className:"max-w-[900px] mx-auto grid grid-cols-1 gap-[clamp(14px,3vw,24px)]",style:{gridTemplateColumns:"1fr"},children:["posters & flyers","web design","OOH & Billboard Design","Editorial design"].map((a,e)=>t.jsx("button",{className:"creative-image-button anim-btn-soft w-full font-['Jost',sans-serif] font-medium capitalize transition-all duration-300 flex items-center justify-center text-[clamp(13px,3.5vw,16px)]",style:{height:"clamp(64px,10vw,86px)",animationDelay:`${e*80}ms`},onClick:()=>{a.includes("posters")?m("posters",0):a.includes("web")?m("web",0):a.toLowerCase().includes("ooh")?m("ooh",0):a.toLowerCase().includes("editorial")&&m("editorial",0)},children:t.jsx("span",{className:"creative-image-button__label",children:a})},e))}),t.jsx("div",{className:"mt-5",children:t.jsxs("button",{onClick:()=>x("/creative-designer/case-study"),className:"apple-glass-button px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2",children:[t.jsx("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),"Case Study"]})})]})]}),t.jsx("div",{className:"hidden"}),t.jsx("div",{className:"lg:hidden page-content mobile-sticky-cta flex justify-center items-center px-4 mt-[40px] mb-5",children:t.jsxs("button",{className:"apple-glass-button-neutral px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base text-white font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2",style:{minWidth:"min(65vw, 520px)"},children:[t.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),t.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Hire Me"]})}),w&&t.jsx("div",{className:"modal-overlay",onClick:()=>z(!1),children:t.jsxs("div",{className:"modal-glass",onClick:a=>a.stopPropagation(),children:[t.jsx("button",{className:"modal-close glass-button rounded-full",onClick:()=>z(!1),"aria-label":"Close",title:"Close",children:"×"}),t.jsxs("div",{className:"modal-split",children:[t.jsx("div",{className:"modal-pane-left"}),t.jsx("div",{className:"modal-pane-right"})]})]})}),(i||y)&&t.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Image gallery",className:`fixed inset-0 z-[9998] lightbox-overlay ${y?"lightbox-fade-out":"lightbox-fade-in"}`,style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(${v})`,backgroundSize:"cover",backgroundPosition:"center"},children:[t.jsx("button",{ref:T,className:`lightbox-close ${g?"controls-pop-in":""}`,"aria-label":"Close",onClick:J,children:"×"}),t.jsx("button",{className:"lightbox-chevron lightbox-prev","aria-label":"Previous",onClick:C,children:t.jsx("span",{className:`chevron-content ${g?"controls-pop-in":""}`,children:t.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"15 18 9 12 15 6"})})})}),t.jsx("button",{className:"lightbox-chevron lightbox-next","aria-label":"Next",onClick:S,children:t.jsx("span",{className:`chevron-content ${g?"controls-pop-in":""}`,children:t.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"9 18 15 12 9 6"})})})}),t.jsx("div",{ref:M,className:`lightbox-modal ${g?"modal-pop-in":y?"scale-out":"scale-in"}`,onClick:a=>a.stopPropagation(),children:t.jsx("div",{className:"lightbox-image-wrap",onTouchStart:K,onTouchMove:G,onTouchEnd:F,children:t.jsx("img",{src:r[l],alt:`Creative design ${l+1}`,decoding:"async",fetchpriority:"high",loading:"eager",className:`lightbox-image ${E==="left"?"img-enter-left":E==="right"?"img-enter-right":""}`,onAnimationEnd:()=>k(null)},l)})}),t.jsx("div",{className:`lightbox-thumbs ${g?"thumbs-pop-in":""}`,role:"listbox","aria-label":"Thumbnails",onClick:a=>a.stopPropagation(),children:t.jsx("div",{className:"lightbox-thumbs-scroll",ref:$,children:t.jsx("div",{className:"thumbs-inner",ref:q,children:r.map((a,e)=>t.jsx("button",{role:"option","aria-selected":e===l,className:`thumb ${e===l?"thumb-active":""}`,onClick:()=>h(e),title:`View image ${e+1}`,children:t.jsx("img",{src:a,alt:`Thumbnail ${e+1}`,loading:"lazy",decoding:"async",fetchpriority:"low"})},e))})})})]}),t.jsx("style",{children:`
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
          left: clamp(12px, 3vw, 24px);
          right: clamp(12px, 3vw, 24px);
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
          left: clamp(12px, 3vw, 24px);
          right: clamp(12px, 3vw, 24px);
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
          background: #ec6d6c;
          border-color: #ec6d6c;
          box-shadow: none;
          color: #ffffff; /* white text on pinkish bg */
        }
        /* Ensure icons turn white on pinkish bg */
        .glass-button:hover svg,
        .glass-button:active svg {
          stroke: #ffffff;
          fill: none;
        }

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

        /* Glass grid cards – match navbar glass style */
        .glass-card {
          /* Match navbar fill */
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
        }

        .theme-card {
          /* Middle bottom: solid theme background */
          background: #06080a;
          border: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
        }

        /* Grey merged center card */
        .grey-card {
          background: #06080a; /* page theme color */
          border: none;
        }

        /* Apple-style liquid glass buttons (from homepage) */
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

        .apple-glass-button::before {
          display: none;
        }

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

        /* Creative theme Case Study button (red glass) */
        .case-study-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(236, 109, 108, 0.32) 0%,
            rgba(236, 109, 108, 0.22) 50%,
            rgba(236, 109, 108, 0.32) 100%
          );
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(236, 109, 108, 0.5);
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 0 rgba(236, 109, 108, 0.35),
            0 8px 32px 0 rgba(236, 109, 108, 0.25);
          color: #ffffff;
        }
        .case-study-btn::before {
          content: '';
          position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%);
          animation: liquidMove 4s ease-in-out infinite;
        }
        .case-study-btn::after {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: glossyShine 3s ease-in-out infinite; animation-delay: 0.5s;
        }
        .case-study-btn:hover {
          background: linear-gradient(
            135deg,
            rgba(236, 109, 108, 0.45) 0%,
            rgba(236, 109, 108, 0.32) 50%,
            rgba(236, 109, 108, 0.45) 100%
          );
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 0 rgba(236, 109, 108, 0.5),
            0 8px 32px 0 rgba(236, 109, 108, 0.35);
        }

        @keyframes liquidMove {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10%, 5%); }
          100% { transform: translate(0, 0); }
        }

        @keyframes glossyShine {
          0% { left: -100%; }
          50%, 100% { left: 200%; }
        }

        /* Page-level soft intro animations (exclude navbar) */
        @keyframes bgSoftIn {
          0% { opacity: 0; transform: scale(1.015); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes contentSoftIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-bg-soft { animation: bgSoftIn 800ms ease-out both; }
        .anim-content-soft { animation: contentSoftIn 900ms ease-out 200ms both; }

        /* Remove moving overlay on scroll for content container */
        .cd-bg::before { display: none; }

        /* Soft button entrance */
        @keyframes btnSoftIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.985); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .anim-btn-soft { opacity: 0; animation: btnSoftIn 600ms ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .anim-btn-soft { animation: none; opacity: 1; }
        }

        /* Creative button image style */
        .creative-image-button {
          position: relative;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
        }
        .creative-image-button::before {
          content: "";
          position: absolute; inset: 0;
          background-image: url('/creative-button.webp');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          transition: transform 160ms ease;
        }
        /* No zoom on hover */
        .creative-image-button:hover::before { transform: none; }
        .creative-image-button:active::before { transform: none; }
        .creative-image-button__label {
          position: relative;
          color: #ffffff;
          text-align: center;
          width: 100%; height: 100%;
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0 12px;
          pointer-events: none;
        }
        /* Hover text color */
        .creative-image-button:hover .creative-image-button__label { color: #eabe76; }

        /* Creative hero uses the soft content animation only (match Branding) */

        /* Small screens: increase card height */
        @media (max-width: 639.98px) {
          .glass-card,
          .theme-card {
            min-height: clamp(180px, 35vh, 360px) !important;
          }
          /* Add 2x horizontal padding on smaller screens */
          .subpad { padding-left: calc(clamp(18px, 4.5vw, 36px) * 2); padding-right: calc(clamp(18px, 4.5vw, 36px) * 2); }
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          /* Theme-aware translucent overlay with backdrop blur */
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
          width: 88vw; /* 10% bigger */
          aspect-ratio: 16 / 9; /* landscape */
          max-height: 88vh; /* 10% bigger */
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
          width: clamp(26px, 3.85vw, 32px); /* 30% smaller */
          height: clamp(26px, 3.85vw, 32px); /* 30% smaller */
          border-radius: 9999px;
          box-sizing: border-box;
        }
        /* Hover handled by .glass-button hover rules */

        /* Split panes (no inner margins) */
        .modal-split {
          display: flex;
          width: 100%;
          height: 100%;
        }
        .modal-pane-left,
        .modal-pane-right {
          flex: 1 1 50%;
          height: 100%;
        }
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

        /* Lightbox */
        .lightbox-overlay {
          background-image: linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(${v});
          background-size: cover;
          background-position: center;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 120ms ease;
          overflow: hidden;
          overscroll-behavior: contain;
          /* Do not set touch-action here; child regions control it */
        }
        .lightbox-fade-in { opacity: 1; }
        .lightbox-fade-out { opacity: 0; }

        .lightbox-modal {
          position: relative;
          width: min(70vw, 1200px);
          max-height: 80vh;
          background: rgba(20,20,22,0.2);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          color: #e7f2f8;
          transform: scale(0.98);
          transform-origin: center center;
          transition: transform 120ms ease;
          opacity: 0;
        }
        .scale-in { transform: scale(1); opacity: 1; }
        .scale-out { transform: scale(0.98); }

        /* Very slow pop-in on open (animate up) */
        @keyframes modalPopIn {
          0% { opacity: 0; transform: translateY(24px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-pop-in { animation: modalPopIn 1200ms cubic-bezier(0.2, 0.85, 0.2, 1) both; }

        /* Controls + bottom grid entrance (slower too) */
        @keyframes controlsPopIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .controls-pop-in { animation: controlsPopIn 1200ms ease-out both 220ms; }
        .thumbs-pop-in { animation: controlsPopIn 1300ms ease-out both 260ms; }

        /* Chevron content wrapper for safe transform animation */
        .chevron-content { display: inline-flex; align-items: center; justify-content: center; }

        .lightbox-close {
          position: fixed; top: calc(20px + env(safe-area-inset-top)); right: calc(10px + env(safe-area-inset-right)); z-index: 10001;
          width: 32px; height: 32px;
          display: inline-flex; align-items: center; justify-content: center;
          background: transparent; color: #ffffff; border: none;
          font-size: 24px; line-height: 1; font-weight: 600; border-radius: 8px;
        }
        /* Match Creative navbar button color */
        .lightbox-close:hover { background: #ec6d6c; color: #ffffff; }
        .lightbox-close:active { background: #ec6d6c; color: #ffffff; }

        .lightbox-chevron {
          position: fixed; top: 50%; transform: translateY(-50%); z-index: 10001;
          width: 42px; height: 42px; border-radius: 9999px; border: 2px solid #ffffff;
          background: rgba(0,0,0,0.45); color: #fff;
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 160ms ease, border-color 160ms ease, color 160ms ease;
        }
        .lightbox-prev { left: calc(20px + env(safe-area-inset-left)); }
        .lightbox-next { right: calc(20px + env(safe-area-inset-right)); }
        .lightbox-chevron:hover { background: #ed6d6d; border-color: #ed6d6d; color: #ffffff; }
        .lightbox-chevron:active { background: #d95857; border-color: #d95857; color: #ffffff; }

        .lightbox-image-wrap { display: flex; align-items: center; justify-content: center; padding: 20px 20px 90px; touch-action: none; }
        .lightbox-image {
          max-width: 100%;
          max-height: calc(80vh - 110px);
          object-fit: cover;
          object-position: top center;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.35);
          will-change: transform, opacity, filter;
        }

        /* Soft swipe/arrow transition (all screen sizes) */
        @keyframes imgEnterL {
          0%   { opacity: 0; transform: translateX(36px) scale(0.985); filter: blur(6px); }
          100% { opacity: 1; transform: translateX(0)     scale(1);     filter: blur(0); }
        }
        @keyframes imgEnterR {
          0%   { opacity: 0; transform: translateX(-36px) scale(0.985); filter: blur(6px); }
          100% { opacity: 1; transform: translateX(0)      scale(1);     filter: blur(0); }
        }
        .img-enter-left  { animation: imgEnterL 900ms cubic-bezier(0.16, 1, 0.3, 1); }
        .img-enter-right { animation: imgEnterR 900ms cubic-bezier(0.16, 1, 0.3, 1); }

        .lightbox-thumbs {
          position: fixed;
          left: 0; right: 0; bottom: 0;
          height: 86px;
          background: rgba(10,10,12,0.35);
          border-top: none;
          z-index: 9999;
          padding-bottom: env(safe-area-inset-bottom);
          /* Container remains full width */
        }
        .lightbox-thumbs-scroll {
          height: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 8px 10px;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x;
          text-align: center;         /* center inner when it fits */
          white-space: nowrap;        /* keep in one line */
        }
        .lightbox-thumbs-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .lightbox-thumbs-scroll::-webkit-scrollbar { width: 0; height: 0; display: none; }
        .thumbs-inner {
          display: inline-block;      /* allow centering via text-align */
          white-space: nowrap;        /* prevent wrapping */
        }
        .thumb { width: 100px; height: 64px; border-radius: 8px; overflow: hidden; border: 2px solid transparent; background: rgba(255,255,255,0.05); display: inline-block; vertical-align: middle; transition: transform 150ms ease, border-color 150ms ease; }
        .thumb:hover { transform: translateY(-1px); }
        .thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .thumb-active { border-color: #ed6d6d; }

        @media (max-width: 768px) {
          .lightbox-modal { width: min(92vw, 900px); max-height: 80vh; }
          .lightbox-image-wrap { padding: 12px 12px 90px; }
          .lightbox-chevron { display: none; }
          /* Soft enter animation on mobile swipe */
          /* Keep only chevron visibility changes on mobile */
          @media (prefers-reduced-motion: reduce) {
            .img-enter-left, .img-enter-right { animation-duration: 0ms; }
          }
        }
      `})]})}export{ge as default};
