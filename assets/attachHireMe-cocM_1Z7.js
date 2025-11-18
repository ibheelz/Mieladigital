function u(r=document){const c=encodeURIComponent("Project Inquiry"),i=encodeURIComponent(`Hi,

I came across your portfolio and would love to discuss working together.

Please let me know your availability.

Thank you!`),o=`mailto:abioladeyeye@gmail.com?subject=${c}&body=${i}`,s=Array.from(r.querySelectorAll("button, a")).filter(t=>(t.textContent||"").trim().toLowerCase().includes("hire me")),n=[];return s.forEach(t=>{if(t.dataset.mailtoWired==="1")return;t.style.cursor="pointer";const a=e=>{e.preventDefault();try{window.location.href=o}catch{}};if(t.addEventListener("click",a),t.tagName==="A")try{t.href=o,t.target="_self"}catch{}t.dataset.mailtoWired="1",n.push(()=>{try{t.removeEventListener("click",a),delete t.dataset.mailtoWired}catch{}})}),()=>{n.forEach(t=>t())}}export{u as a};
