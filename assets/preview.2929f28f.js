var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{w as m,h as f,S as u,q as k}from"./iframe.f430a7bb.js";import{m as L}from"./make-decorator.2c24f61c.js";var h="links",l=m.document,p=m.HTMLElement,E=n(function(e){return f.getChannel().emit(k,e)},"navigate"),d=n(function(e){var r=e.target;if(r instanceof p){var v=r,i=v.dataset,o=i.sbKind,s=i.sbStory;(o||s)&&(e.preventDefault(),E({kind:o,story:s}))}},"linksListener"),a=!1,w=n(function(){a||(a=!0,l.addEventListener("click",d))},"on"),g=n(function(){a&&(a=!1,l.removeEventListener("click",d))},"off"),S=L({name:"withLinks",parameterName:h,wrapper:n(function(e,r){return w(),f.getChannel().once(u,g),e(r)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var y=[S];export{y as decorators};
//# sourceMappingURL=preview.2929f28f.js.map
