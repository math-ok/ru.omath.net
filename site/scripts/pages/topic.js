(()=>{var Xt=Object.defineProperty;var Ut=(t,e,n)=>e in t?Xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var yt=(t,e,n)=>(Ut(t,typeof e!="symbol"?e+"":e,n),n);var P=Math.min,O=Math.max,W=Math.round,q=Math.floor,R=t=>({x:t,y:t});function U(t,e,n){return O(t,P(e,n))}function K(t,e){return typeof t=="function"?t(e):t}function G(t){return t.split("-")[0]}function st(t){return t.split("-")[1]}function rt(t){return t==="x"?"y":"x"}function lt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(G(t))?"y":"x"}function ct(t){return rt(J(t))}function Kt(t){return{top:0,right:0,bottom:0,left:0,...t}}function at(t){return typeof t!="number"?Kt(t):{top:t,right:t,bottom:t,left:t}}function F(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function vt(t,e,n){let{reference:o,floating:i}=t,r=J(e),s=ct(e),c=lt(s),a=G(e),l=r==="y",u=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[c]/2-i[c]/2,d;switch(a){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-i.width,y:f};break;default:d={x:o.x,y:o.y}}switch(st(e)){case"start":d[s]-=p*(n&&l?-1:1);break;case"end":d[s]+=p*(n&&l?-1:1);break}return d}var bt=async(t,e,n)=>{let{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e)),l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=vt(l,o,a),p=o,d={},m=0;for(let h=0;h<c.length;h++){let{name:w,fn:g}=c[h],{x,y,data:T,reset:v}=await g({x:u,y:f,initialPlacement:o,placement:p,strategy:i,middlewareData:d,rects:l,platform:s,elements:{reference:t,floating:e}});u=x??u,f=y??f,d={...d,[w]:{...d[w],...T}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(p=v.placement),v.rects&&(l=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:u,y:f}=vt(l,p,a)),h=-1)}return{x:u,y:f,placement:p,strategy:i,middlewareData:d}};async function Gt(t,e){var n;e===void 0&&(e={});let{x:o,y:i,platform:r,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:d=0}=K(e,t),m=at(d),w=c[p?f==="floating"?"reference":"floating":f],g=F(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:u,strategy:a})),x=f==="floating"?{...s.floating,x:o,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),T=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=F(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:a}):x);return{top:(g.top-v.top+m.top)/T.y,bottom:(v.bottom-g.bottom+m.bottom)/T.y,left:(g.left-v.left+m.left)/T.x,right:(v.right-g.right+m.right)/T.x}}var Et=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:u=0}=K(t,e)||{};if(l==null)return{};let f=at(u),p={x:n,y:o},d=ct(i),m=lt(d),h=await s.getDimensions(l),w=d==="y",g=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",T=r.reference[m]+r.reference[d]-p[d]-r.floating[m],v=p[d]-r.reference[d],M=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l)),$=M?M[y]:0;(!$||!await(s.isElement==null?void 0:s.isElement(M)))&&($=c.floating[y]||r.floating[m]);let Yt=T/2-v/2,gt=$/2-h[m]/2-1,pt=P(f[g],gt),wt=P(f[x],gt),X=pt,xt=$-h[m]-wt,D=$/2-h[m]/2+Yt,nt=U(X,D,xt),ot=!a.arrow&&st(i)!=null&&D!==nt&&r.reference[m]/2-(D<X?pt:wt)-h[m]/2<0,it=ot?D<X?D-X:D-xt:0;return{[d]:p[d]+it,data:{[d]:nt,centerOffset:D-nt-it,...ot&&{alignmentOffset:it}},reset:ot}}});var Tt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:g,y:x}=w;return{x:g,y:x}}},...a}=K(t,e),l={x:n,y:o},u=await Gt(e,a),f=J(G(i)),p=rt(f),d=l[p],m=l[f];if(r){let w=p==="y"?"top":"left",g=p==="y"?"bottom":"right",x=d+u[w],y=d-u[g];d=U(x,d,y)}if(s){let w=f==="y"?"top":"left",g=f==="y"?"bottom":"right",x=m+u[w],y=m-u[g];m=U(x,m,y)}let h=c.fn({...e,[p]:d,[f]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function L(t){return St(t)?(t.nodeName||"").toLowerCase():"#document"}function b(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function S(t){var e;return(e=(St(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function St(t){return t instanceof Node||t instanceof b(t).Node}function C(t){return t instanceof Element||t instanceof b(t).Element}function A(t){return t instanceof HTMLElement||t instanceof b(t).HTMLElement}function At(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof b(t).ShadowRoot}function V(t){let{overflow:e,overflowX:n,overflowY:o,display:i}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Ct(t){return["table","td","th"].includes(L(t))}function Q(t){let e=Z(),n=E(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ft(t){let e=B(t);for(;A(e)&&!j(e);){if(Q(e))return e;e=B(e)}return null}function Z(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function j(t){return["html","body","#document"].includes(L(t))}function E(t){return b(t).getComputedStyle(t)}function _(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function B(t){if(L(t)==="html")return t;let e=t.assignedSlot||t.parentNode||At(t)&&t.host||S(t);return At(e)?e.host:e}function Ot(t){let e=B(t);return j(e)?t.ownerDocument?t.ownerDocument.body:t.body:A(e)&&V(e)?e:Ot(e)}function I(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);let i=Ot(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=b(i);return r?e.concat(s,s.visualViewport||[],V(i)?i:[],s.frameElement&&n?I(s.frameElement):[]):e.concat(i,I(i,[],n))}function Pt(t){let e=E(t),n=parseFloat(e.width)||0,o=parseFloat(e.height)||0,i=A(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=W(n)!==r||W(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function ut(t){return C(t)?t:t.contextElement}function z(t){let e=ut(t);if(!A(e))return R(1);let n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Pt(e),s=(r?W(n.width):n.width)/o,c=(r?W(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}var Jt=R(0);function kt(t){let e=b(t);return!Z()||!e.visualViewport?Jt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Qt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==b(t)?!1:e}function H(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);let i=t.getBoundingClientRect(),r=ut(t),s=R(1);e&&(o?C(o)&&(s=z(o)):s=z(t));let c=Qt(r,n,o)?kt(r):R(0),a=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,u=i.width/s.x,f=i.height/s.y;if(r){let p=b(r),d=o&&C(o)?b(o):o,m=p.frameElement;for(;m&&o&&d!==p;){let h=z(m),w=m.getBoundingClientRect(),g=E(m),x=w.left+(m.clientLeft+parseFloat(g.paddingLeft))*h.x,y=w.top+(m.clientTop+parseFloat(g.paddingTop))*h.y;a*=h.x,l*=h.y,u*=h.x,f*=h.y,a+=x,l+=y,m=b(m).frameElement}}return F({width:u,height:f,x:a,y:l})}var Zt=[":popover-open",":modal"];function Mt(t){let e=!1,n=0,o=0;function i(r){try{e=e||t.matches(r)}catch{}}if(Zt.forEach(r=>{i(r)}),e){let r=ft(t);if(r){let s=r.getBoundingClientRect();n=s.x,o=s.y}}return[e,n,o]}function te(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t,r=S(o),[s]=e?Mt(e.floating):[!1];if(o===r||s)return n;let c={scrollLeft:0,scrollTop:0},a=R(1),l=R(0),u=A(o);if((u||!u&&i!=="fixed")&&((L(o)!=="body"||V(r))&&(c=_(o)),A(o))){let f=H(o);a=z(o),l.x=f.x+o.clientLeft,l.y=f.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+l.x,y:n.y*a.y-c.scrollTop*a.y+l.y}}function ee(t){return Array.from(t.getClientRects())}function Dt(t){return H(S(t)).left+_(t).scrollLeft}function ne(t){let e=S(t),n=_(t),o=t.ownerDocument.body,i=O(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=O(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),s=-n.scrollLeft+Dt(t),c=-n.scrollTop;return E(o).direction==="rtl"&&(s+=O(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function oe(t,e){let n=b(t),o=S(t),i=n.visualViewport,r=o.clientWidth,s=o.clientHeight,c=0,a=0;if(i){r=i.width,s=i.height;let l=Z();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:c,y:a}}function ie(t,e){let n=H(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=A(t)?z(t):R(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,a=i*r.x,l=o*r.y;return{width:s,height:c,x:a,y:l}}function Rt(t,e,n){let o;if(e==="viewport")o=oe(t,n);else if(e==="document")o=ne(S(t));else if(C(e))o=ie(e,n);else{let i=kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return F(o)}function Ft(t,e){let n=B(t);return n===e||!C(n)||j(n)?!1:E(n).position==="fixed"||Ft(n,e)}function se(t,e){let n=e.get(t);if(n)return n;let o=I(t,[],!1).filter(c=>C(c)&&L(c)!=="body"),i=null,r=E(t).position==="fixed",s=r?B(t):t;for(;C(s)&&!j(s);){let c=E(s),a=Q(s);!a&&c.position==="fixed"&&(i=null),(r?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||V(s)&&!a&&Ft(t,s))?o=o.filter(u=>u!==s):i=c,s=B(s)}return e.set(t,o),o}function re(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t,s=[...n==="clippingAncestors"?se(e,this._c):[].concat(n),o],c=s[0],a=s.reduce((l,u)=>{let f=Rt(e,u,i);return l.top=O(f.top,l.top),l.right=P(f.right,l.right),l.bottom=P(f.bottom,l.bottom),l.left=O(f.left,l.left),l},Rt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function le(t){let{width:e,height:n}=Pt(t);return{width:e,height:n}}function ce(t,e,n,o){let i=A(e),r=S(e),s=n==="fixed",c=H(t,!0,s,e),a={scrollLeft:0,scrollTop:0},l=R(0);if(i||!i&&!s)if((L(e)!=="body"||V(r))&&(a=_(e)),i){let h=H(e,!0,s,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else r&&(l.x=Dt(r));let u=c.left+a.scrollLeft-l.x,f=c.top+a.scrollTop-l.y,[p,d,m]=Mt(o);return p&&(u+=d,f+=m,i&&(u+=e.clientLeft,f+=e.clientTop)),{x:u,y:f,width:c.width,height:c.height}}function Lt(t,e){return!A(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function Bt(t,e){let n=b(t);if(!A(t))return n;let o=Lt(t,e);for(;o&&Ct(o)&&E(o).position==="static";)o=Lt(o,e);return o&&(L(o)==="html"||L(o)==="body"&&E(o).position==="static"&&!Q(o))?n:o||ft(t)||n}var ae=async function(t){let e=this.getOffsetParent||Bt,n=this.getDimensions;return{reference:ce(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await n(t.floating)}}};function fe(t){return E(t).direction==="rtl"}var ue={convertOffsetParentRelativeRectToViewportRelativeRect:te,getDocumentElement:S,getClippingRect:re,getOffsetParent:Bt,getElementRects:ae,getClientRects:ee,getDimensions:le,getScale:z,isElement:C,isRTL:fe};function de(t,e){let n=null,o,i=S(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),r();let{left:l,top:u,width:f,height:p}=t.getBoundingClientRect();if(c||e(),!f||!p)return;let d=q(u),m=q(i.clientWidth-(l+f)),h=q(i.clientHeight-(u+p)),w=q(l),x={rootMargin:-d+"px "+-m+"px "+-h+"px "+-w+"px",threshold:O(0,P(1,a))||1},y=!0;function T(v){let M=v[0].intersectionRatio;if(M!==a){if(!y)return s();M?s(!1,M):o=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(T,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,x)}n.observe(t)}return s(!0),r}function Ht(t,e,n,o){o===void 0&&(o={});let{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=ut(t),u=i||r?[...l?I(l):[],...I(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});let f=l&&c?de(l,n):null,p=-1,d=null;s&&(d=new ResizeObserver(g=>{let[x]=g;x&&x.target===l&&d&&(d.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var y;(y=d)==null||y.observe(e)})),n()}),l&&!a&&d.observe(l),d.observe(e));let m,h=a?H(t):null;a&&w();function w(){let g=H(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&n(),h=g,m=requestAnimationFrame(w)}return n(),()=>{var g;u.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),f?.(),(g=d)==null||g.disconnect(),d=null,a&&cancelAnimationFrame(m)}}var It=Tt;var Vt=Et;var zt=(t,e,n)=>{let o=new Map,i={platform:ue,...n},r={...i.platform,_c:o};return bt(t,e,{...i,platform:r})};var k=class{preview;asideToggler;static get(){return window.OMath}};function $t(){window.location.hash&&Nt(window.location.hash.slice(1)),window.addEventListener("hashchange",()=>{let t=window.location.hash;Nt(t.slice(1))})}function Nt(t){if(document.documentElement.getAttribute("data-layout")!=="topic")return;let e=document.getElementById(t);if(!e)return;let n=e;for(;(n=n.parentElement)!==null;){if(n.classList.contains("accentBlock")){let i=n.querySelector(":scope > .base > .expand");i&&i.contains(e)&&n.setAttribute("data-expand-open","")}n.classList.contains("task")&&n.querySelectorAll(":scope > section").forEach(r=>{r.contains(e)&&n.setAttribute(`data-${r.getAttribute("data-name")}-open`,"")})}let o=document.createElement("a");o.href="#"+t,o.click()}function Wt(){let t=getComputedStyle(document.documentElement);return parseFloat(t.getPropertyValue("--transitionSpeed"))*1e3}var tt=class{updateAllowed=!0;updateDelay=150;idToHeader={};idToElem={};idToTocElem={};constructor(e){this.fillMaps(e);let n;["resize","scroll"].forEach(o=>{window.addEventListener(o,()=>{clearTimeout(n),n=setTimeout(()=>{this.updateTocPos()},this.updateDelay)})}),window.addEventListener("hashchange",()=>{this.updateTocPos()}),this.setupForcedToc(),this.updateTocPos()}fillMaps(e){for(e of e.children){let n=e.querySelector(":scope > a").getAttribute("href").slice(1),o=["heading","auto-heading"].includes(n.split(":")[0]);this.idToTocElem[n]=e;let i=document.getElementById(n);o?this.idToHeader[n]=i:this.idToElem[n]=i}}setupForcedToc(){let e;Object.keys(this.idToTocElem).forEach(n=>{this.idToTocElem[n].addEventListener("click",()=>{clearTimeout(e),e=setTimeout(()=>{this.updateAllowed=!0},this.updateDelay+100),this.updateAllowed=!1,this.clearCurrentPos(),this.setCurrentPos(n)})})}updateTocPos(){if(!this.updateAllowed||(this.clearCurrentPos(),!this.hasVScrollbar()))return;let e=Object.values(this.idToHeader);if(e.length){let o=this.getCurrentHeaderIdFrom(e);this.setCurrentPos(o)}let n=Object.values(this.idToElem);if(n.length){let o=this.getCurrentElementIdFrom(n);o&&this.setCurrentPos(o)}}getCurrentHeaderIdFrom(e){let n=window.scrollY+300,o=0,i=e.length,r=0;for(;o<i;){let s=(o+i)/2|0,a=e[s].getBoundingClientRect().top+window.scrollY;n<=a?i=s:(r=s,o=s+1)}return e[r].id}getCurrentElementIdFrom(e){let n=0,o=e.length,i=null,r=-1;for(;n<o;){let s=(n+o)/2|0,c=e[s],a=c.getBoundingClientRect(),l=a.top,u=a.bottom;if(u<0){n=s+1;continue}if(l>document.documentElement.clientHeight){o=s;continue}let f=u-300;(Math.abs(f)<r||r===-1)&&(r=Math.abs(f),i=c),f<0?n=s+1:o=s}return i?i.id:null}setCurrentPos(e){this.idToTocElem[e].setAttribute("data-current","")}clearCurrentPos(){Object.values(this.idToTocElem).forEach(e=>e.removeAttribute("data-current"))}hasVScrollbar(){return document.body.scrollHeight>window.innerHeight}};var dt=class{element;messageElem;messages;messageI=0;constructor(e,n){this.messages=e.messages,et(this.messages);let o=document.createElement("div");o.innerHTML=Y.renderSponsor(e),this.element=o.firstChild,this.messageElem=this.element.querySelector(".message"),this.updateMessage(),this.element.querySelector(".actions .next").addEventListener("click",()=>n.next()),n.inner.appendChild(this.element),n.sponsorMap[e.id]=this}updateMessage(){this.messageElem.textContent=this.messages[this.messageI++%this.messages.length]}toggleCurrentClass(e){this.element.classList.toggle("current",e)}},ht=class{root;inner;sponsorMap={};tier;currentSponsor;currentI=0;fakeI;resizeObs;constructor(e,n){this.tier=n,this.fakeI=ht.fakeStartIndex++,this.root=e,this.inner=document.createElement("div"),this.inner.classList.add("inner"),this.root.appendChild(this.inner),this.resizeObs=new ResizeObserver(()=>this.onResize()),this.next()}getRaw(){let e=Y[`tier${this.tier}`],n=e[this.currentI%e.length];return n==="fake"?this.getFakeRaw():n}getFakeRaw(){let e={...Y.fakeSponsors[this.fakeI%Y.fakeSponsors.length]};return e.isFake=!0,e.tier=this.tier,this.tier===3&&(e.id+="-tier3"),this.tier<3&&delete e.avatarVideo,e}next(){let e=this.getRaw();this.currentI++,e.isFake&&this.fakeI++;let n=this.getRaw();[e,n].forEach(i=>{i.id in this.sponsorMap||new dt(i,this)});let o=this.sponsorMap[e.id];this.setCurrentSponsor(o)}setCurrentSponsor(e){this.currentSponsor&&(this.resizeObs.unobserve(this.currentSponsor.element),this.currentSponsor.toggleCurrentClass(!1)),this.currentSponsor=e,this.currentSponsor.updateMessage(),this.currentSponsor.toggleCurrentClass(!0),this.resizeObs.observe(this.currentSponsor.element),this.onResize()}onResize(){let e=this.currentSponsor.element.getBoundingClientRect().height;this.root.setAttribute("style",`height: ${e}px`)}},N=ht;yt(N,"fakeStartIndex",0);var mt=class{renderSponsor;fakeSponsors;tier3;tier2},Y;async function jt(){let t=await fetch("/site/topicSponsorData.json");if(!t.ok)return!1;let e=await t.json(),n=new mt;return n.renderSponsor=new Function("locals",e.templateFuncStr+" return template(locals);"),n.fakeSponsors=e.fakeSponsors,n.tier3=e.sponsors.tier3,n.tier2=e.sponsors.tier2,et(n.fakeSponsors),et(n.tier2),et(n.tier3),qt(n.tier3),qt(n.tier2),Y=n,!0}function qt(t){Math.random()>.5?t.push("fake"):t.unshift("fake")}function et(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}}window.addEventListener("DOMContentLoaded",()=>{ge()});window.addEventListener("load",()=>{let t=k.get().asideToggler;t.asides.minor.querySelector(":scope .mini > a[data-current]").addEventListener("click",()=>{t.toggleAside(t.asides.minor,!0)}),me(),he(),window.location.hash.startsWith("#todo:")&&_t(),$t(),new tt(t.asides.minor.querySelector(":scope .full .topicToc .tocTree")),pe()});function me(){let t=k.get().asideToggler.asides.minor,e=t.querySelector(":scope .full > .contributors"),n=t.querySelector(":scope .full > .minorView.contribution"),o=n.querySelector(":scope .close");[e,o].forEach(i=>{i.addEventListener("click",()=>n.toggleAttribute("data-visible"))})}function he(){let t=k.get().asideToggler.asides.minor,e=t.querySelector(":scope .full > .editorSwitch"),n=t.querySelector(":scope .full > .minorView.todo");if(!n)return;let o=n.querySelector(":scope .close");[e,o].forEach(i=>{i.addEventListener("click",()=>_t())})}function ge(){let t=document.getElementById("sponsorBlockTier3"),e=document.getElementById("sponsorBlockTier2");jt().then(n=>{if(!n){[t,e].forEach(o=>o.remove());return}new N(t,3),new N(e,2)})}function _t(){document.documentElement.classList.toggle("displayTodo"),k.get().asideToggler.asides.minor.querySelector(":scope .full > .minorView.todo").toggleAttribute("data-visible")}function pe(){document.querySelector("#__erudit > main").querySelectorAll(":scope > article > header > .flags > .flag").forEach(e=>{let n=e.querySelector(".tooltip"),o=n.querySelector(".arrow"),i=(()=>{let l=null;function u(){try{l(),l=null}catch{}}function f(){l||(u(),l=Ht(e,n,a))}return{clearState:u,startUpdating:f}})();a(),[["mouseenter",r],["mouseleave",c]].forEach(([l,u])=>{e.addEventListener(l,u)});function r(){clearTimeout(s),i.startUpdating(),n.classList.toggle("showing",!0)}let s=null;function c(){i.clearState(),n.classList.toggle("showing",!1),s=setTimeout(()=>{n.removeAttribute("style"),o.removeAttribute("style")},Wt())}function a(){zt(e,n,{placement:"bottom",middleware:[It({boundary:document.querySelector("main"),padding:10}),Vt({element:o})]}).then(({x:l,y:u,middlewareData:f})=>{Object.assign(n.style,{left:`${l}px`,top:`${u}px`}),Object.assign(o.style,{left:l!=null?`${f.arrow.x}px`:"",top:u!=null?`${f.arrow.y}px`:""})})}})}})();