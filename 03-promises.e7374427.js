!function(){var e=document.querySelector(".form"),n=document.querySelector("[name=delay]"),o=document.querySelector("[name=step]"),t=document.querySelector("[name=amount]");function c(e,n){var o=Math.random()>.3;return new Promise((function(t,c){setTimeout((function(){o?t({position:e,delay:n}):c({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();setTimeout((function(){for(var e=0;e<t.value;e+=1){c(e+1,+n.value+ +o.value*e).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}),n.value)}))}();
//# sourceMappingURL=03-promises.e7374427.js.map
