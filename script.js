(function(){
 var r=["agentic AI","LLM apps","explainable models","multilingual tools"],i=0,el=document.getElementById("rot");
 if(!matchMedia("(prefers-reduced-motion: reduce)").matches)setInterval(function(){i=(i+1)%r.length;el.textContent=r[i]},2200);
 var ch=document.querySelectorAll(".chips button"),cs=document.querySelectorAll("#projects .card");
 ch.forEach(function(b){b.onclick=function(){ch.forEach(function(x){x.setAttribute("aria-pressed",x===b)});cs.forEach(function(c){c.hidden=b.dataset.f!=="all"&&c.dataset.cat!==b.dataset.f})}});
 document.getElementById("copy").onclick=function(e){var t=e.target,m="yashshreya21@gmail.com";
  (navigator.clipboard?navigator.clipboard.writeText(m):Promise.reject()).then(function(){t.textContent="Copied"}).catch(function(){t.textContent=m});
  setTimeout(function(){t.textContent="Copy email"},2000)};
 document.getElementById("theme").onclick=function(){var h=document.documentElement,d=h.getAttribute("data-theme")==="dark"||(!h.getAttribute("data-theme")&&matchMedia("(prefers-color-scheme: dark)").matches);h.setAttribute("data-theme",d?"light":"dark")};
})();
