const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d;t.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b10db471.js.map
