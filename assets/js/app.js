(async()=>{
  const root=document.documentElement;
  let encoded="";
  for(let i=1;i<=8;i++){
    const path=`assets/js/app.part${String(i).padStart(2,"0")}.txt`;
    const response=await fetch(path,{cache:"force-cache"});
    if(!response.ok) throw new Error(`Failed to load ${path}`);
    encoded+=await response.text();
  }
  const bytes=Uint8Array.from(atob(encoded.trim()),c=>c.charCodeAt(0));
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  const code=await new Response(stream).text();
  root.classList.add("motion-ready");
  Function(code)();

  const officialLogos={
    "Saudi Business Center":"https://business.sa/assets/images/logo.svg",
    "KSA Visa / Ministry of Foreign Affairs":"https://ksavisa.sa/public/images/ksa-visa.svg"
  };
  const fixAuthorityLogos=()=>{
    document.querySelectorAll(".authority-logo").forEach(img=>{
      const source=officialLogos[img.alt];
      if(source && img.src!==source){
        img.src=source;
        img.style.display="block";
        img.closest(".authority-logo-wrap")?.classList.toggle("authority-logo-wide",img.alt==="Saudi Business Center");
        img.closest(".authority-logo-wrap")?.querySelector(".authority-fallback")?.style.removeProperty("display");
      }
    });
  };
  fixAuthorityLogos();
  new MutationObserver(fixAuthorityLogos).observe(document.body,{childList:true,subtree:true});

  const counters=[...document.querySelectorAll("[data-counter]")];
  const runCounter=el=>{
    if(el.dataset.counted) return;
    el.dataset.counted="true";
    const end=Number(el.dataset.counter);
    if(!Number.isFinite(end) || matchMedia("(prefers-reduced-motion: reduce)").matches){el.textContent=String(end);return;}
    const start=performance.now(), duration=900;
    const tick=now=>{
      const progress=Math.min((now-start)/duration,1);
      const eased=1-Math.pow(1-progress,3);
      el.textContent=String(Math.round(end*eased));
      if(progress<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if("IntersectionObserver" in window){
    const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){runCounter(entry.target);counterObserver.unobserve(entry.target);}
    }),{threshold:.6});
    counters.forEach(el=>counterObserver.observe(el));
  }else counters.forEach(runCounter);
})().catch(error=>{
  console.error("Safwah app failed to start",error);
  document.documentElement.classList.remove("motion-ready");
  document.documentElement.classList.add("app-load-error");
  document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
});
