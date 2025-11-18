import{u as t,r as s,j as a,d as r}from"./index-DsEGQgHG.js";import{a as i}from"./attachHireMe-cocM_1Z7.js";function p(){const e=t();return s.useEffect(()=>i(document),[]),a.jsxs("div",{className:"min-h-screen bg-[#06080a] p-[clamp(12px,3vw,24px)] lg:p-[clamp(6px,1.5vw,12px)] animate-fadeIn relative flex flex-col",children:[a.jsx("div",{className:"page-fixed-bg","aria-hidden":!0,style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${r})`}}),a.jsx("div",{className:"page-fixed-overlay","aria-hidden":!0}),a.jsxs("div",{className:"liquid-glass-header animate-slideDownNav flex items-center justify-center py-[clamp(10px,2.5vh,16px)] relative",children:[a.jsx("img",{decoding:"async",src:"/left.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-left svg-gold sub-anim-svg-left"}),a.jsx("img",{decoding:"async",src:"/right.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-right svg-gold sub-anim-svg-right"}),a.jsx("div",{className:"absolute left-[clamp(16px,3vw,40px)] w-auto",children:a.jsxs("button",{onClick:()=>e("/branding",{replace:!1,state:{animateHero:!0}}),"aria-label":"Back to Branding",className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] whitespace-nowrap",children:[a.jsx("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),a.jsx("span",{className:"hidden sm:inline",children:"Back to Branding"})]})}),a.jsx("img",{decoding:"async",src:"/ibheelz-logo.webp",alt:"ibheelz",className:"h-[clamp(3rem,6vw,4.25rem)] w-auto cursor-pointer sub-anim-logo-slow",style:{maxHeight:"68px"},onClick:()=>e("/")}),a.jsx("div",{className:"absolute right-[clamp(16px,3vw,40px)]",children:a.jsxs("button",{onClick:()=>window.open("/Resume.pdf","_blank"),className:"glass-button p-[clamp(12px,3vw,18px)] sm:px-[clamp(10px,2vw,14px)] sm:py-[clamp(6px,1.5vh,10px)] rounded-full text-[clamp(10px,2vw,14px)] font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-[clamp(4px,1vw,6px)] cursor-pointer",children:[a.jsxs("svg",{className:"w-[clamp(14px,3vw,18px)] h-[clamp(14px,3vw,18px)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("polyline",{points:"14,2 14,8 20,8"}),a.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),a.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),a.jsx("polyline",{points:"10,9 9,9 8,9"})]}),a.jsx("span",{className:"hidden sm:inline",children:"View Resume"})]})})]}),a.jsx("div",{className:"header-spacer"}),a.jsx("div",{className:"page-content relative subpad flex-1 px-[clamp(18px,4.5vw,36px)] md:px-0 anim-bg-soft"}),a.jsx("style",{jsx:!0,children:`
        .page-fixed-bg { position: fixed; inset: 0; background-size: cover; background-position: center; z-index: 0; }
        .page-fixed-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.35); z-index: 1; }
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
        .page-content { position: relative; z-index: 2; }
        /* Navbar decorative SVGs (match subpage behavior) */
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
          .svg-left { left: calc(50% - 120px); }
          .svg-right { right: calc(50% - 120px); }
        }
        @media (min-width: 1024px) {
          .svg-left { left: calc(50% - 160px); }
          .svg-right { right: calc(50% - 160px); }
        }
        @media (min-width: 1280px) {
          .svg-left { left: calc(50% - 200px); }
          .svg-right { right: calc(50% - 200px); }
        }
        /* Place after others to pull arrows closer on all >=640px (match Creative subpage) */
        @media (min-width: 640px) {
          .svg-left { left: calc(50% - 90px); }
          .svg-right { right: calc(50% - 90px); }
        }
        .glass-button { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.16); color: #e7f2f8; }
        /* Branding theme hover */
        .glass-button:hover { background: #aa90db; color: #ffffff; border-color: transparent; }
        .glass-card { background: rgba(255,255,255,0.03); border: 1.5px solid rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        @keyframes contentSoftIn { 0% { opacity: 0; transform: translateY(12px) } 100% { opacity: 1; transform: translateY(0) } }
        .anim-content-soft { animation: contentSoftIn 900ms ease-out both; }
        @keyframes bgSoftIn { 0% { opacity: 0; transform: scale(1.015) } 100% { opacity: 1; transform: scale(1) } }
        .anim-bg-soft { animation: bgSoftIn 800ms ease-out both; }
        @keyframes subLogoSlowIn { from { transform: translateY(-40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .sub-anim-logo-slow { animation: subLogoSlowIn 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @keyframes subSvgInLeft { from { transform: translateX(-14px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes subSvgInRight { from { transform: translateX(14px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .sub-anim-svg-left { animation: subSvgInLeft 4.5s cubic-bezier(0.22, 1, 0.36, 1) 200ms both; }
        .sub-anim-svg-right { animation: subSvgInRight 4.5s cubic-bezier(0.22, 1, 0.36, 1) 260ms both; }
        @keyframes slideDownNav { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slideDownNav { animation: slideDownNav 1.5s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `})]})}export{p as default};
