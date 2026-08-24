(async()=>{
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
  Function(code)();
})().catch(error=>{
  console.error("Safwah app failed to start",error);
  document.documentElement.classList.add("app-load-error");
});
