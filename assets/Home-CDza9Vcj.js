import{r as i,u as R,j as e}from"./index-DsEGQgHG.js";function B(){const[N,x]=i.useState(null),[a,d]=i.useState(null),[z,S]=i.useState(null),[s,h]=i.useState(2),[m,f]=i.useState(!1),[l,c]=i.useState(null),[u,L]=i.useState(!1),[I,E]=i.useState(!1),b=i.useRef(!1),v=i.useRef(!1),p=i.useRef(null),n=R(),o=a||N,w=t=>{b.current=!0,window.innerWidth<1024?(S(t),d(t)):a===t?(d(null),x(null),v.current=!0,setTimeout(()=>{v.current=!1},100)):d(t)},y=t=>{!a&&!v.current&&x(t)},k=()=>{a||x(null)};return i.useEffect(()=>{const t=()=>{!b.current&&a&&d(null),b.current=!1};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)},[a]),i.useEffect(()=>{const t=p.current;if(!t)return;const r=()=>{const j=t.scrollLeft,g=t.offsetWidth,C=Math.round(j/g)+1;C!==1&&!m&&f(!0),h(C)};return t.addEventListener("scroll",r),()=>t.removeEventListener("scroll",r)},[m]),i.useLayoutEffect(()=>{const t=p.current;if(!t||window.innerWidth>=1024)return;const r=t.offsetWidth;t.scrollLeft=r,h(2),f(!1),E(!1),L(!0)},[]),i.useEffect(()=>{const t=p.current;if(!t)return;const r=()=>{if(window.innerWidth<1024){const g=t.offsetWidth;Math.abs(t.scrollLeft-g)>2&&(t.scrollLeft=g,h(2),f(!0))}};window.addEventListener("resize",r);const j=setTimeout(r,600);return()=>{window.removeEventListener("resize",r),clearTimeout(j)}},[]),e.jsxs("div",{className:"h-screen overflow-auto lg:overflow-hidden bg-[#06080a] p-[8px] lg:p-[12px] flex flex-col animate-fadeIn",children:[e.jsxs("div",{className:"w-full rounded-[20px] lg:rounded-[30px] bg-cover bg-center bg-no-repeat relative overflow-hidden hero-container",style:{backgroundImage:"url(/hero-bg.webp)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[e.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out",style:{background:"linear-gradient(to top, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 45%)",opacity:!o&&!a?1:0}}),e.jsx("div",{className:"absolute inset-0 transition-opacity duration-[1500ms] ease-out",style:{background:"linear-gradient(to bottom, #6e3534 0%, #ae504d 40%, #f6d0cb 100%)",opacity:(window.innerWidth>=1024?o===1:s===1&&m)?1:0}}),e.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none transition-opacity duration-[800ms] ease-out",style:{backgroundImage:"url('/test.png')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 100%",opacity:(window.innerWidth>=1024?o===1:s===1&&m)?.05:0}}),e.jsx("div",{className:"absolute inset-0 transition-opacity duration-[1500ms] ease-out",style:{background:"linear-gradient(to bottom, #4a346e 0%, #6e4dae 40%, #faf3ff 100%)",opacity:(window.innerWidth<1024?s===3:o===2)?1:0}}),e.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none transition-opacity duration-[800ms] ease-out",style:{backgroundImage:"url('/testtt.png')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 100%",opacity:(window.innerWidth<1024?s===3:o===2)?.3:0}}),e.jsx("div",{className:"absolute inset-0 transition-opacity duration-[1500ms] ease-out",style:{background:"linear-gradient(to bottom, #6e4a34 0%, #ae764d 40%, #f3dcc4 100%)",opacity:(window.innerWidth<1024?s===2:o===3)?1:0}}),e.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none transition-opacity duration-[800ms] ease-out",style:{backgroundImage:"url('/testt.png')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 100%",opacity:(window.innerWidth<1024?s===2:o===3)?.3:0}}),e.jsx("div",{className:"absolute inset-0 transition-opacity duration-[1500ms] ease-out",style:{background:"linear-gradient(to bottom, #346e4a 0%, #4dae72 40%, #c8f3de 100%)",opacity:(window.innerWidth<1024?s===4:o===4)?1:0}}),e.jsx("div",{className:"absolute inset-0 transition-opacity duration-[1500ms] ease-out",style:{background:"linear-gradient(to bottom, #6e1e34 0%, #ae3d5d 40%, #f3c0cf 100%)",opacity:(window.innerWidth<1024?s===5:o===5)?1:0}}),e.jsx("div",{className:"absolute anim-logo-slow",style:{top:"clamp(1rem, 2vh, 2rem)",left:"50%",transform:"translateX(-50%)"},children:e.jsx("img",{src:"/ibheelz-logo.webp",alt:"ibheelz",className:"h-[clamp(3.5rem,7vw,4.25rem)] w-auto",style:{maxHeight:"68px"}})}),e.jsx("img",{src:"/left.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-left svg-gold transition-opacity duration-700 svg-desktop-left svg-logo-left anim-svg-left"}),e.jsx("img",{src:"/right.svg",alt:"",className:"absolute h-[20px] sm:h-[26px] md:h-[32px] w-auto transform svg-right svg-gold transition-opacity duration-700 svg-desktop-right svg-logo-right anim-svg-right"}),e.jsx("div",{className:"lg:hidden absolute left-1/2 transform -translate-x-1/2 text-center px-6 w-full z-10 pointer-events-none",style:{top:"calc(clamp(3.5rem, 7vw, 4.25rem) + clamp(1rem, 2vh, 2rem) + 50px)"},children:e.jsxs("div",{className:"text-white relative mobile-very-slow-fade",children:[e.jsx("img",{src:"/left.svg",alt:"",className:"hidden absolute h-[20px] w-auto svg-gold transition-opacity duration-700 svg-mobile-left",style:{top:"calc(clamp(1.75rem,5.5vw,2.3rem) / 2)",transform:"translateY(-50%)",opacity:s>=1&&s<=5?1:0}}),e.jsx("img",{src:"/right.svg",alt:"",className:"hidden absolute h-[20px] w-auto svg-gold transition-opacity duration-700 svg-mobile-right",style:{top:"calc(clamp(1.75rem,5.5vw,2.3rem) / 2)",transform:"translateY(-50%)",opacity:s>=1&&s<=5?1:0}}),e.jsxs("div",{className:"transition-opacity duration-700",style:{opacity:s===1?1:0,position:s===1?"relative":"absolute",top:0,left:0,right:0,zIndex:s===1?10:1},children:[e.jsx("div",{className:"text-[clamp(1.235rem,4.275vw,2.185rem)] font-bold text-white font-['Libre_Baskerville',serif] leading-tight mb-3 whitespace-nowrap",children:"Creative Designer"}),e.jsx("div",{className:"text-[clamp(0.875rem,2.8vw,1.1rem)] font-light font-['Jost',sans-serif] mb-5",style:{color:"#ffffff",overflow:"visible",textOverflow:"clip",whiteSpace:"normal",lineHeight:"1.5"},onClick:()=>c(l===1?null:1),children:"“I lock horns with challenges, wrestling with problems until they transform into solutions.”"})]}),e.jsxs("div",{className:"transition-opacity duration-700",style:{opacity:s===3?1:0,position:s===3?"relative":"absolute",top:0,left:0,right:0,zIndex:s===3?10:1},children:[e.jsx("div",{className:"text-[clamp(1.235rem,4.275vw,2.185rem)] font-bold text-white font-['Libre_Baskerville',serif] leading-tight mb-3 whitespace-nowrap",children:"Brand Designer"}),e.jsx("div",{className:"text-[clamp(0.875rem,2.8vw,1.1rem)] font-light font-['Jost',sans-serif] mb-5",style:{color:"#ffffff",overflow:"visible",textOverflow:"clip",whiteSpace:"normal",lineHeight:"1.5"},onClick:()=>c(l===2?null:2),children:"“I deliver brand strategies that hit the mark every time, turning insights into identities.”"})]}),e.jsxs("div",{className:"transition-opacity duration-700",style:{opacity:s===2?1:0,position:s===2?"relative":"absolute",top:0,left:0,right:0,zIndex:s===2?10:1},children:[e.jsx("div",{className:"text-[clamp(1.235rem,4.275vw,2.185rem)] font-bold text-white font-['Libre_Baskerville',serif] leading-tight mb-3 whitespace-nowrap",children:"AI Creator"}),e.jsx("div",{className:"text-[clamp(0.875rem,2.8vw,1.1rem)] font-light font-['Jost',sans-serif] mb-5",style:{color:"#ffffff",overflow:"visible",textOverflow:"clip",whiteSpace:"normal",lineHeight:"1.5"},onClick:()=>c(l===3?null:3),children:"“In the AI landscape, it takes a fox's cleverness to transform possibilities into practical magic.”"})]}),e.jsxs("div",{className:"transition-opacity duration-700",style:{opacity:s===4?1:0,position:s===4?"relative":"absolute",top:0,left:0,right:0,zIndex:s===4?10:1},children:[e.jsx("div",{className:"text-[clamp(1.235rem,4.275vw,2.185rem)] font-bold text-white font-['Libre_Baskerville',serif] leading-tight mb-3 whitespace-nowrap",children:"3D Design"}),e.jsx("div",{className:"text-[clamp(0.875rem,2.8vw,1.1rem)] font-light font-['Jost',sans-serif] mb-5",style:{color:"#ffffff",overflow:"visible",textOverflow:"clip",whiteSpace:"normal",lineHeight:"1.5"},onClick:()=>c(l===4?null:4),children:"“What I build doesn't just look good, it's engineered for perfection.”"})]}),e.jsxs("div",{className:"transition-opacity duration-700",style:{opacity:s===5?1:0,position:s===5?"relative":"absolute",top:0,left:0,right:0,zIndex:s===5?10:1},children:[e.jsx("div",{className:"text-[clamp(1.235rem,4.275vw,2.185rem)] font-bold text-white font-['Libre_Baskerville',serif] leading-tight mb-3 whitespace-nowrap",children:"Game Design"}),e.jsx("div",{className:"text-[clamp(0.875rem,2.8vw,1.1rem)] font-light font-['Jost',sans-serif] mb-5",style:{color:"#ffffff",overflow:"visible",textOverflow:"clip",whiteSpace:"normal",lineHeight:"1.5"},onClick:()=>c(l===5?null:5),children:"“I design games that roar to life and leave lasting impressions.”"})]}),e.jsx("button",{onClick:()=>{n(s===1?"/creative-designer":s===2?"/ai-creator":"/branding",{state:{animateHero:!0}})},className:"mobile-glass-button px-4 py-2 rounded-full text-white font-['Jost',sans-serif] font-medium text-[10px] cursor-pointer",style:{letterSpacing:"0.2em",pointerEvents:"auto"},children:"PICK CHARACTER"})]})}),e.jsx("div",{className:"hidden lg:block absolute top-[20%] lg:top-32 left-1/2 transform -translate-x-1/2 lg:translate-y-0 text-center px-4 sm:px-6 md:px-8 w-full max-w-4xl",children:e.jsxs("div",{className:"text-white leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed lg:mt-0",children:[e.jsxs("div",{className:"text-[clamp(1.425rem,4.275vw,2.85rem)] lg:text-[2.565rem] font-bold text-[#e7f2f8] font-['Libre_Baskerville',serif] leading-none lg:leading-tight transition-opacity duration-700 anim-hero-heading",style:{opacity:o?0:1},children:["I craft digital",e.jsx("br",{className:"lg:hidden"})," experiences"]}),e.jsx("div",{className:"text-[clamp(0.831rem,2.375vw,1.425rem)] lg:text-[1.2825rem] font-light font-['Jost',sans-serif] mt-3 lg:mt-2 transition-opacity duration-700 anim-hero-sub",style:{opacity:o?0:1,color:"#d0dadf"},children:"where art, code, and intelligence converge."}),e.jsx("button",{className:"mt-6 px-4 py-2 rounded-full border border-white/30 text-white/30 font-['Jost',sans-serif] font-medium text-[clamp(9px,1.8vw,12px)] transition-opacity duration-700 cursor-default anim-hero-cta",style:{opacity:!o&&!a?1:0,letterSpacing:"0.2em"},children:"CLICK ANY CHARACTER"})]})}),e.jsxs("div",{className:"hidden lg:block absolute top-[20%] lg:top-32 left-1/2 transform -translate-x-1/2 lg:translate-y-0 text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl z-20",children:[e.jsxs("div",{className:"absolute inset-0 text-white leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed transition-opacity duration-700",style:{opacity:o===1?1:0,pointerEvents:o===1?"auto":"none"},children:[e.jsx("div",{className:"text-[clamp(2.375rem,5.7vw,3.8rem)] lg:text-[3.20625rem] font-bold text-white font-['Libre_Baskerville',serif] leading-none lg:leading-tight whitespace-nowrap",children:"Creative Designer"}),e.jsx("div",{className:"text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl font-light font-['Jost',sans-serif] mt-3 lg:mt-2",style:{color:"#ffffff"},children:"“I lock horns with challenges, wrestling with problems until they transform into elegant solutions.”"}),e.jsx("button",{onClick:a===1?()=>n("/creative-designer"):void 0,className:a===1?"mobile-glass-button mt-6 px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium cursor-pointer flex items-center gap-1.5 sm:gap-2 mx-auto":"mt-6 px-4 py-2 rounded-full border border-white/30 text-white/30 font-['Jost',sans-serif] font-medium text-[clamp(9px,1.8vw,12px)] cursor-default mx-auto",style:{pointerEvents:a===1?"auto":"none",...a===1?{transition:"opacity 0.5s ease-in-out"}:{letterSpacing:"0.2em"}},children:a===1?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Enter Character"]}):"CLICK CHARACTER"})]}),e.jsxs("div",{className:"absolute inset-0 text-white leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed transition-opacity duration-700",style:{opacity:o===2?1:0,pointerEvents:o===2?"auto":"none"},children:[e.jsx("div",{className:"text-[clamp(2.375rem,5.7vw,3.8rem)] lg:text-[3.20625rem] font-bold text-white font-['Libre_Baskerville',serif] leading-none lg:leading-tight whitespace-nowrap",children:"Brand Designer"}),e.jsx("div",{className:"text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl font-light font-['Jost',sans-serif] mt-3 lg:mt-2",style:{color:"#ffffff"},children:"“I deliver brand strategies that hit the mark every time, turning insights into identities.”"}),e.jsx("button",{onClick:a===2?()=>n("/branding"):void 0,className:a===2?"mobile-glass-button mt-6 px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium cursor-pointer flex items-center gap-1.5 sm:gap-2 mx-auto":"mt-6 px-4 py-2 rounded-full border border-white/30 text-white/30 font-['Jost',sans-serif] font-medium text-[clamp(9px,1.8vw,12px)] cursor-default mx-auto",style:{pointerEvents:a===2?"auto":"none",...a===2?{transition:"opacity 0.5s ease-in-out"}:{letterSpacing:"0.2em"}},children:a===2?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Enter Character"]}):"CLICK CHARACTER"})]}),e.jsxs("div",{className:"absolute inset-0 text-white leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed transition-opacity duration-700",style:{opacity:o===3?1:0,pointerEvents:o===3?"auto":"none"},children:[e.jsx("div",{className:"text-[clamp(2.375rem,5.7vw,3.8rem)] lg:text-[3.20625rem] font-bold text-white font-['Libre_Baskerville',serif] leading-none lg:leading-tight whitespace-nowrap",children:"AI Creator"}),e.jsx("div",{className:"text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl font-light font-['Jost',sans-serif] mt-3 lg:mt-2",style:{color:"#ffffff"},children:"“In the AI landscape, it takes a fox's cleverness to transform possibilities into practical magic.”"}),e.jsx("button",{onClick:a===3?()=>n("/ai-creator"):void 0,className:a===3?"mobile-glass-button mt-6 px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium cursor-pointer flex items-center gap-1.5 sm:gap-2 mx-auto":"mt-6 px-4 py-2 rounded-full border border-white/30 text-white/30 font-['Jost',sans-serif] font-medium text-[clamp(9px,1.8vw,12px)] cursor-default mx-auto",style:{pointerEvents:a===3?"auto":"none",...a===3?{transition:"opacity 0.5s ease-in-out"}:{letterSpacing:"0.2em"}},children:a===3?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Enter Character"]}):"CLICK CHARACTER"})]}),e.jsxs("div",{className:"absolute inset-0 text-white leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed transition-opacity duration-700",style:{opacity:o===4?1:0,pointerEvents:o===4?"auto":"none"},children:[e.jsx("div",{className:"text-[clamp(2.375rem,5.7vw,3.8rem)] lg:text-[3.20625rem] font-bold text-white font-['Libre_Baskerville',serif] leading-none lg:leading-tight whitespace-nowrap",children:"3D Design"}),e.jsx("div",{className:"text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl font-light font-['Jost',sans-serif] mt-3 lg:mt-2",style:{color:"#ffffff"},children:"“What I build doesn't just look good, it's engineered for perfection.”"}),e.jsx("button",{onClick:a===4?()=>n("/3d-design"):void 0,className:a===4?"mobile-glass-button mt-6 px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium cursor-pointer flex items-center gap-1.5 sm:gap-2 mx-auto":"mt-6 px-4 py-2 rounded-full border border-white/30 text-white/30 font-['Jost',sans-serif] font-medium text-[clamp(9px,1.8vw,12px)] cursor-default mx-auto",style:{pointerEvents:a===4?"auto":"none",...a===4?{transition:"opacity 0.5s ease-in-out"}:{letterSpacing:"0.2em"}},children:a===4?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Enter Character"]}):"CLICK CHARACTER"})]}),e.jsxs("div",{className:"absolute inset-0 text-white leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed transition-opacity duration-700",style:{opacity:o===5?1:0,pointerEvents:o===5?"auto":"none"},children:[e.jsx("div",{className:"text-[clamp(2.375rem,5.7vw,3.8rem)] lg:text-[3.20625rem] font-bold text-white font-['Libre_Baskerville',serif] leading-none lg:leading-tight whitespace-nowrap",children:"Game Design"}),e.jsx("div",{className:"text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl font-light font-['Jost',sans-serif] mt-3 lg:mt-2",style:{color:"#ffffff"},children:"“I design games that roar to life and leave lasting impressions.”"}),e.jsx("button",{onClick:a===5?()=>n("/game-design"):void 0,className:a===5?"mobile-glass-button mt-6 px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium cursor-pointer flex items-center gap-1.5 sm:gap-2 mx-auto":"mt-6 px-4 py-2 rounded-full border border-white/30 text-white/30 font-['Jost',sans-serif] font-medium text-[clamp(9px,1.8vw,12px)] cursor-default mx-auto",style:{pointerEvents:a===5?"auto":"none",...a===5?{transition:"opacity 0.5s ease-in-out"}:{letterSpacing:"0.2em"}},children:a===5?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Enter Character"]}):"CLICK CHARACTER"})]})]}),e.jsx("div",{ref:p,className:"lg:hidden absolute inset-0 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory hide-scrollbar",style:{scrollSnapType:"x mandatory",scrollBehavior:u?"smooth":"auto",opacity:u?1:0,transition:"opacity 600ms ease"},children:(window.innerWidth<1024&&!u?[3]:[1,3,2]).map((t,r)=>e.jsx("div",{className:"flex-shrink-0 w-full h-full flex items-end justify-center snap-center pb-0"+(r===1&&I?" middle-char-rise":""),style:{scrollSnapAlign:"center"},children:e.jsx("img",{src:`/characters/${t}.webp`,alt:`Character ${t}`,className:"h-auto w-auto object-contain object-bottom mobile-char-img",style:{width:t===1||t===2?"53%":t===3?"51%":t===4?"54%":"60%",maxHeight:"50%",transform:t===1?"none":t===3?"translateY(13px)":"none"}})},t))}),e.jsxs("div",{className:"hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-[95%] lg:w-[90%] justify-center items-end gap-5 animate-slideUp",style:{bottom:"clamp(-100px, calc(-150px + 20vh), 0px)"},children:[e.jsx("img",{src:"/characters/1.webp",alt:"Character 1",className:"h-auto w-[23%] cursor-pointer transition-transform duration-[1500ms] char-2",onMouseEnter:()=>y(1),onMouseLeave:k,onClick:()=>w(1),style:{transform:o&&o!==1?"translateY(100%)":"translate(-20px, calc(clamp(0px, 30%, 50vh) + 20px))",marginLeft:"10%",marginRight:"12%"}}),e.jsx("img",{src:"/characters/3.webp",alt:"Character 3",className:"h-auto w-[16%] cursor-pointer transition-transform duration-[1500ms] absolute char-3",onMouseEnter:()=>y(3),onMouseLeave:k,onClick:()=>w(3),style:{transform:o&&o!==3?"translateY(100%)":N===3||o===3?"translateY(32px) scale(0.99)":void 0,left:"50%",marginLeft:"-8%",bottom:0}}),e.jsx("img",{src:"/characters/2.webp",alt:"Character 2",className:"h-auto w-[20%] cursor-pointer transition-transform duration-[1500ms] char-4",onMouseEnter:()=>y(2),onMouseLeave:k,onClick:()=>w(2),style:{transform:o&&o!==2?"translate(clamp(-50px, -7vw, -100px), 100%)":void 0,marginLeft:"12%",marginRight:"1%"}})]})]}),e.jsx("div",{className:"lg:hidden flex justify-center gap-2 mt-2 mb-0 z-0",children:[1,2,3].map(t=>e.jsx("div",{className:"transition-all duration-300",style:{width:s===t?"8px":"6px",height:s===t?"8px":"6px",borderRadius:"50%",backgroundColor:s===t?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.3)",boxShadow:s===t?"0 0 8px rgba(255, 255, 255, 0.5)":"none"}},t))}),e.jsx("div",{className:"lg:hidden flex justify-center my-6 z-0 pointer-events-none",children:e.jsx("img",{src:"https://cdn.prod.website-files.com/65058b9f245f78f8abf8d2d7/68f277b989c0d7b4309cd19c_Separator.svg",alt:"",className:"h-auto mobile-separator"})}),e.jsxs("div",{className:"flex-1 flex flex-col justify-center overflow-auto relative z-10",children:[e.jsx("p",{className:"relative z-[999] selected-brands-title text-[#9ca3af] text-center text-xs sm:text-sm tracking-wider font-['Jost',sans-serif] font-medium px-4 mt-0 lg:mt-5",children:"Selected Brands I've Worked On"}),e.jsxs("div",{className:"mt-[30px] animate-logoSlideUp",children:[e.jsx("div",{className:"max-[870px]:block hidden overflow-hidden mobile-very-slow-fade",children:e.jsxs("div",{className:"flex animate-scroll-mobile",children:[e.jsxs("div",{className:"flex gap-8 shrink-0",children:[e.jsx("img",{src:"/logos/1xbet.webp",alt:"1xBet",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/betsson.webp",alt:"Betsson",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/parimatch.webp",alt:"Parimatch",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/pinup.webp",alt:"Pin-Up",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/stake.webp",alt:"Stake",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/thunderpick.webp",alt:"Thunderpick",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/wow.webp",alt:"WOW",className:"h-5 w-auto logo-color"})]}),e.jsxs("div",{className:"flex gap-8 shrink-0 ml-8",children:[e.jsx("img",{src:"/logos/1xbet.webp",alt:"1xBet",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/betsson.webp",alt:"Betsson",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/parimatch.webp",alt:"Parimatch",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/pinup.webp",alt:"Pin-Up",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/stake.webp",alt:"Stake",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/thunderpick.webp",alt:"Thunderpick",className:"h-5 w-auto logo-color"}),e.jsx("img",{src:"/logos/wow.webp",alt:"WOW",className:"h-5 w-auto logo-color"})]})]})}),e.jsxs("div",{className:"min-[871px]:flex hidden items-center justify-center gap-6 md:gap-8 flex-wrap px-4 max-w-4xl mx-auto",children:[e.jsx("img",{src:"/logos/1xbet.webp",alt:"1xBet",className:"h-6 md:h-[26.6px] logo-color hover:opacity-60 transition-opacity duration-300"}),e.jsx("img",{src:"/logos/betsson.webp",alt:"Betsson",className:"h-6 md:h-[26.6px] logo-color hover:opacity-60 transition-opacity duration-300"}),e.jsx("img",{src:"/logos/parimatch.webp",alt:"Parimatch",className:"h-6 md:h-[26.6px] logo-color hover:opacity-60 transition-opacity duration-300"}),e.jsx("img",{src:"/logos/pinup.webp",alt:"Pin-Up",className:"h-6 md:h-[26.6px] logo-color hover:opacity-60 transition-opacity duration-300"}),e.jsx("img",{src:"/logos/stake.webp",alt:"Stake",className:"h-6 md:h-[26.6px] logo-color hover:opacity-60 transition-opacity duration-300"}),e.jsx("img",{src:"/logos/thunderpick.webp",alt:"Thunderpick",className:"h-6 md:h-[26.6px] logo-color hover:opacity-60 transition-opacity duration-300"}),e.jsx("img",{src:"/logos/wow.webp",alt:"WOW",className:"h-6 md:h-[26.6px] logo-color hover:opacity-60 transition-opacity duration-300"})]})]}),e.jsxs("div",{className:"flex justify-center items-center gap-3 sm:gap-4 px-4 mt-[40px] mb-5",children:[e.jsxs("button",{className:"apple-glass-button px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 anim-btn-left",children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14,2 14,8 20,8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("polyline",{points:"10,9 9,9 8,9"})]}),"View Resume"]}),e.jsxs("button",{className:"apple-glass-button-neutral px-4 py-2 sm:px-5 sm:py-[8.6px] md:px-6 md:py-[9.6px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] text-sm sm:text-base text-white font-['Jost',sans-serif] font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 anim-btn-right",children:[e.jsxs("svg",{width:"16",height:"16",className:"sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Hire Me"]})]})]}),e.jsx("style",{jsx:!0,children:`
        /* Hero container height - responsive across all screen sizes */
        .hero-container {
          height: clamp(420px, calc(100vh - 280px), 650px);
        }

        /* Ultra-wide screens: increase max height for better proportions */
        @media (min-width: 1920px) {
          .hero-container {
            height: clamp(420px, calc(100vh - 280px), 850px);
          }

          /* Reduce character widths and constrain height on ultra-wide screens */
          .char-1 {
            width: 11% !important;
            max-height: 50%;
            margin-right: 0.7% !important;
            transform: translate(180px, 0) !important;
          }

          .char-2 {
            width: 14% !important;
            max-height: 50%;
            margin-left: 7% !important;
            margin-right: 8.5% !important;
          }

          .char-3 {
            width: 12% !important;
            margin-left: -6% !important;
          }

          .char-4 {
            width: 13% !important;
            max-height: 50%;
            margin-left: 8.5% !important;
            margin-right: 0.7% !important;
          }

          .char-5 {
            width: 14% !important;
            max-height: 50%;
          }
        }

        /* Character positioning - responsive on smaller screens, fixed on desktop */
        .char-1 {
          transform: translate(clamp(50px, 10vw, 150px), 0);
        }

        .char-2 {
          transform: translate(0, clamp(10px, 2vh, 22px));
        }

        .char-3 {
          transform: translateY(0);
        }

        .char-4 {
          transform: translate(clamp(-50px, -7vw, -100px), clamp(8px, 1.5vh, 15px));
        }

        .char-5 {
          transform: translate(clamp(-60px, -8vw, -120px), 0);
        }

        /* Desktop: Fixed positioning (no responsive scaling) */
        @media (min-width: 1280px) {
          .char-1 {
            transform: translate(150px, 0);
          }

          .char-2 {
            transform: translate(0, 22px);
          }

          .char-3 {
            transform: translateY(0);
          }

          .char-4 {
            transform: translate(-100px, 15px);
          }

          .char-5 {
            transform: translate(-120px, 0);
          }
        }

        /* Mobile glass button with realistic distortion */
        .mobile-glass-button {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.15) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow:
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 1px 0 rgba(255, 255, 255, 0.2),
            0 8px 32px 0 rgba(0, 0, 0, 0.2),
            0 2px 8px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .mobile-glass-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.25) 0%,
            transparent 100%
          );
          pointer-events: none;
        }

        .mobile-glass-button::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.4),
            transparent 50%,
            rgba(255, 255, 255, 0.2)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Logo color filter - white */
        .logo-color {
          filter: brightness(0) invert(1);
        }

        /* SVG color filter - #d8ac65 */
        .svg-gold {
          filter: brightness(0) saturate(100%) invert(76%) sepia(36%) saturate(459%) hue-rotate(358deg) brightness(97%) contrast(89%);
        }

        /* Apple-style liquid glass buttons */
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

        .apple-glass-button-accent {
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
        }

        /* Neutral gray glass button */
        .apple-glass-button-neutral {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(180, 190, 200, 0.28) 0%,
            rgba(180, 190, 200, 0.18) 50%,
            rgba(180, 190, 200, 0.28) 100%
          );
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(180, 190, 200, 0.45);
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 0 rgba(180, 190, 200, 0.35),
            0 8px 32px 0 rgba(180, 190, 200, 0.2);
          color: #ffffff;
        }
        .apple-glass-button-neutral::before {
          content: '';
          position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%);
          animation: liquidMove 4s ease-in-out infinite;
        }
        .apple-glass-button-neutral::after {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: glossyShine 3s ease-in-out infinite; animation-delay: 0.5s;
        }

        .apple-glass-button-accent::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 60%
          );
          animation: liquidMove 4s ease-in-out infinite;
        }

        .apple-glass-button-accent::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          animation: glossyShine 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        /* Separator default width on mobile */
        .mobile-separator {
          width: 80vw;
        }

        /* Mobile separator responsive sizing */
        @media (min-width: 720px) and (max-width: 1023.98px) {
          .mobile-separator {
            width: 68vw !important; /* 15% smaller than 80vw */
          }
        }

        /* Tablet: 850px–1024px => 20% smaller (overrides above) */
        @media (min-width: 850px) and (max-width: 1023.98px) {
          .mobile-separator {
            width: 64vw !important; /* 20% smaller than 80vw */
          }
          .selected-brands-title {
            z-index: 9999 !important;
            margin-top: 0.5rem !important; /* ensure it clears the separator */
          }
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

        .apple-glass-button-red {
          background: linear-gradient(
            135deg,
            rgba(228, 100, 100, 0.25) 0%,
            rgba(228, 100, 100, 0.15) 50%,
            rgba(228, 100, 100, 0.25) 100%
          );
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(228, 100, 100, 0.4);
          box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 0 rgba(228, 100, 100, 0.3),
            0 8px 32px 0 rgba(228, 100, 100, 0.15);
        }

        .apple-glass-button-red::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 60%
          );
          animation: liquidMove 4s ease-in-out infinite;
        }

        .apple-glass-button-red::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          animation: glossyShine 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @keyframes liquidMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10%, 10%);
          }
          50% {
            transform: translate(0, 20%);
          }
          75% {
            transform: translate(-10%, 10%);
          }
        }

        @keyframes glossyShine {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 200%;
          }
        }

        @keyframes slideUp {
          from {
            transform: translate(-50%, 100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 4.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes slideDown {
          from {
            transform: translate(-50%, -870px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        /* Ensure logo drops straight down at exact horizontal center */
        @keyframes logoDownCenter {
          from {
            transform: translateX(-50%) translateY(-100vh);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
        }
        .anim-logo-slow {
          animation: logoDownCenter 4.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Client logos: fade in only (no vertical slide) */
        @keyframes logoSlideUp {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-logoSlideUp {
          animation: logoSlideUp 1.2s ease-out forwards;
        }

        @keyframes scrollMobile {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 1rem));
          }
        }

        .animate-scroll-mobile {
          animation: scrollMobile 12s linear infinite;
          will-change: transform;
        }

        /* SVG positioning */
        .svg-left {
          left: calc(50% - 70px);
        }

        .svg-right {
          right: calc(50% - 70px);
        }

        @media (min-width: 768px) {
          .svg-left {
            left: calc(50% - 120px);
          }

          .svg-right {
            right: calc(50% - 120px);
          }

          .svg-logo-left {
            left: calc(50% - 120px);
          }

          .svg-logo-right {
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

          .svg-logo-left {
            left: calc(50% - 160px);
          }

          .svg-logo-right {
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

          .svg-logo-left {
            left: calc(50% - 200px);
          }

          .svg-logo-right {
            right: calc(50% - 200px);
          }
        }

        /* Desktop SVG positioning - beside logo */
        .svg-desktop-left,
        .svg-desktop-right {
          top: calc(clamp(1rem, 2vh, 2rem) + clamp(3.5rem, 7vw, 4.25rem) / 2);
          transform: translateY(-50%);
        }

        /* Mobile: arrows beside logo */
        .svg-logo-left {
          left: calc(50% - 70px);
        }

        .svg-logo-right {
          right: calc(50% - 70px);
        }

        @media (min-width: 640px) {
          .svg-left {
            left: calc(50% - 90px);
          }

          .svg-right {
            right: calc(50% - 90px);
          }

          .svg-logo-left {
            left: calc(50% - 90px);
          }

          .svg-logo-right {
            right: calc(50% - 90px);
          }
        }

        /* Mobile SVG positioning for role text */
        .svg-mobile-left {
          left: 10px;
        }

        .svg-mobile-right {
          right: 10px;
        }

        @media (max-width: 399px) {
          .svg-mobile-left {
            left: 5px;
          }

          .svg-mobile-right {
            right: 5px;
          }
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

        @keyframes slideUpFromBottom {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUpFromBottom {
          animation: slideUpFromBottom 0.8s ease-out forwards;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Middle character rises from beneath the container on first load */
        @keyframes middleRise {
          0% { transform: translateY(120%); }
          100% { transform: translateY(0); }
        }
        .middle-char-rise {
          animation: middleRise 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; /* match logo timing */
        }

        /* Subtle, varied hero animations */
        @keyframes svgInLeft {
          from { transform: translateX(-14px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes svgInRight {
          from { transform: translateX(14px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .anim-svg-left { animation: svgInLeft 4.5s cubic-bezier(0.22, 1, 0.36, 1) 200ms both; }
        .anim-svg-right { animation: svgInRight 4.5s cubic-bezier(0.22, 1, 0.36, 1) 260ms both; }

        @keyframes heroSubtleUp {
          from { transform: translateY(10px); }
          to { transform: translateY(0); }
        }
        .anim-hero-sub { animation: heroSubtleUp 800ms ease-out 120ms both; }

        @keyframes heroCtaPop {
          0% { transform: scale(0.96); }
          60% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        .anim-hero-cta { animation: heroCtaPop 700ms ease-out 280ms both; }

        @keyframes heroHeadingUp {
          from { transform: translateY(8px); }
          to { transform: translateY(0); }
        }
        .anim-hero-heading { animation: heroHeadingUp 900ms ease-out 60ms both; }

        /* Buttons: very slow slide/fade from sides to match logo timing */
        @keyframes btnInLeft {
          from { transform: translateX(-120vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes btnInRight {
          from { transform: translateX(120vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .anim-btn-left { animation: btnInLeft 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .anim-btn-right { animation: btnInRight 4.5s cubic-bezier(0.22, 1, 0.36, 1) both; }

        /* Large screens: buttons rise from bottom instead of sides */
        @keyframes btnInUp {
          from { transform: translateY(120vh); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (min-width: 1024px) {
          .anim-btn-left,
          .anim-btn-right {
            animation: btnInUp 4.5s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
        }

        /* Mobile: very slow fade-in for hero text and logo list */
        @keyframes verySlowFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 1023.98px) {
          .mobile-very-slow-fade {
            opacity: 0;
            animation: verySlowFade 4s ease-out 150ms forwards;
          }
        }

        /* Force hero images to 50% height on very small screens */
        @media (max-width: 420px) {
          .mobile-char-img {
            height: 50% !important;
            max-height: none !important;
          }
        }
      `})]})}export{B as default};
