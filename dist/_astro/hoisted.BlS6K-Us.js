const cn=document.querySelectorAll('input[name="slider"]');let St=0;const Bn=cn.length;setInterval(()=>{St=(St+1)%Bn,cn[St].checked=!0},5e3);const Wn=document.querySelectorAll(".slider");window.matchMedia("(prefers-reduced-motion: reduce)").matches||Hn();function Hn(){Wn.forEach(e=>{e.setAttribute("data-animated","true");const n=e.querySelector(".logos");n&&Array.from(n.children).forEach(r=>{const a=r.cloneNode(!0);a.setAttribute("aria-hidden","true"),n.appendChild(a)})})}function Yn(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xn(e,n,t){return n&&Yn(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Kt="(prefers-reduced-motion: reduce)",Ce=1,qn=2,Pe=3,Me=4,Ke=5,it=6,st=7,Kn={CREATED:Ce,MOUNTED:qn,IDLE:Pe,MOVING:Me,SCROLLING:Ke,DRAGGING:it,DESTROYED:st};function de(e){e.length=0}function _e(e,n,t){return Array.prototype.slice.call(e,n,t)}function U(e){return e.bind.apply(e,[null].concat(_e(arguments,1)))}var fn=setTimeout,Rt=function(){};function $t(e){return requestAnimationFrame(e)}function lt(e,n){return typeof n===e}function ze(e){return!pt(e)&&lt("object",e)}var Pt=Array.isArray,vn=U(lt,"function"),he=U(lt,"string"),$e=U(lt,"undefined");function pt(e){return e===null}function ln(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function je(e){return Pt(e)?e:[e]}function ne(e,n){je(e).forEach(n)}function Mt(e,n){return e.indexOf(n)>-1}function at(e,n){return e.push.apply(e,je(n)),e}function fe(e,n,t){e&&ne(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function oe(e,n){fe(e,he(n)?n.split(" "):n,!0)}function Ze(e,n){ne(n,e.appendChild.bind(e))}function Vt(e,n){ne(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function Ue(e,n){return ln(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function dn(e,n){var t=e?_e(e.children):[];return n?t.filter(function(r){return Ue(r,n)}):t}function Je(e,n){return n?dn(e,n)[0]:e.firstElementChild}var Be=Object.keys;function Le(e,n,t){return e&&(t?Be(e).reverse():Be(e)).forEach(function(r){r!=="__proto__"&&n(e[r],r)}),e}function We(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){e[r]=n[r]})}),e}function ge(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){Pt(t)?e[r]=t.slice():ze(t)?e[r]=ge({},ze(e[r])?e[r]:{},t):e[r]=t})}),e}function jt(e,n){ne(n||Be(e),function(t){delete e[t]})}function ue(e,n){ne(e,function(t){ne(n,function(r){t&&t.removeAttribute(r)})})}function x(e,n,t){ze(n)?Le(n,function(r,a){x(e,a,r)}):ne(e,function(r){pt(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function De(e,n,t){var r=document.createElement(e);return n&&(he(n)?oe(r,n):x(r,n)),t&&Ze(t,r),r}function re(e,n,t){if($e(t))return getComputedStyle(e)[n];pt(t)||(e.style[n]=""+t)}function He(e,n){re(e,"display",n)}function En(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,n){return e.getAttribute(n)}function Zt(e,n){return e&&e.classList.contains(n)}function ee(e){return e.getBoundingClientRect()}function Ie(e){ne(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function gn(e){return Je(new DOMParser().parseFromString(e,"text/html").body)}function ce(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function hn(e,n){return e&&e.querySelector(n)}function xt(e,n){return n?_e(e.querySelectorAll(n)):[]}function ve(e,n){fe(e,n,!1)}function bt(e){return e.timeStamp}function Te(e){return he(e)?e:e?e+"px":""}var Qe="splide",Ft="data-"+Qe;function Ge(e,n){if(!e)throw new Error("["+Qe+"] "+(n||""))}var me=Math.min,ct=Math.max,ft=Math.floor,Ye=Math.ceil,J=Math.abs;function mn(e,n,t){return J(e-n)<t}function ot(e,n,t,r){var a=me(n,t),l=ct(n,t);return r?a<e&&e<l:a<=e&&e<=l}function be(e,n,t){var r=me(n,t),a=ct(n,t);return me(ct(r,e),a)}function Ot(e){return+(e>0)-+(e<0)}function Ct(e,n){return ne(n,function(t){e=e.replace("%s",""+t)}),e}function Gt(e){return e<10?"0"+e:""+e}var Jt={};function $n(e){return""+e+Gt(Jt[e]=(Jt[e]||0)+1)}function An(){var e=[];function n(i,s,c,v){a(i,s,function(o,m,d){var E="addEventListener"in o,u=E?o.removeEventListener.bind(o,m,c,v):o.removeListener.bind(o,c);E?o.addEventListener(m,c,v):o.addListener(c),e.push([o,m,d,c,u])})}function t(i,s,c){a(i,s,function(v,o,m){e=e.filter(function(d){return d[0]===v&&d[1]===o&&d[2]===m&&(!c||d[3]===c)?(d[4](),!1):!0})})}function r(i,s,c){var v,o=!0;return typeof CustomEvent=="function"?v=new CustomEvent(s,{bubbles:o,detail:c}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(s,o,!1,c)),i.dispatchEvent(v),v}function a(i,s,c){ne(i,function(v){v&&ne(s,function(o){o.split(" ").forEach(function(m){var d=m.split(".");c(v,d[0],d[1])})})})}function l(){e.forEach(function(i){i[4]()}),de(e)}return{bind:n,unbind:t,dispatch:r,destroy:l}}var Re="mounted",Qt="ready",Ae="move",et="moved",_n="click",jn="active",Zn="inactive",Jn="visible",Qn="hidden",q="refresh",Q="updated",Xe="resize",kt="resized",er="drag",tr="dragging",nr="dragged",zt="scroll",Ve="scrolled",rr="overflow",yn="destroy",ir="arrows:mounted",ar="arrows:updated",or="pagination:mounted",ur="pagination:updated",Sn="navigation:mounted",Tn="autoplay:play",sr="autoplay:playing",Ln="autoplay:pause",In="lazyload:loaded",Nn="sk",Rn="sh",vt="ei";function H(e){var n=e?e.event.bus:document.createDocumentFragment(),t=An();function r(l,i){t.bind(n,je(l).join(" "),function(s){i.apply(i,Pt(s.detail)?s.detail:[])})}function a(l){t.dispatch(n,l,_e(arguments,1))}return e&&e.event.on(yn,t.destroy),We(t,{bus:n,on:r,off:U(t.unbind,n),emit:a})}function dt(e,n,t,r){var a=Date.now,l,i=0,s,c=!0,v=0;function o(){if(!c){if(i=e?me((a()-l)/e,1):1,t&&t(i),i>=1&&(n(),l=a(),r&&++v>=r))return d();s=$t(o)}}function m(A){A||u(),l=a()-(A?i*e:0),c=!1,s=$t(o)}function d(){c=!0}function E(){l=a(),i=0,t&&t(i)}function u(){s&&cancelAnimationFrame(s),i=0,s=0,c=!0}function f(A){e=A}function _(){return c}return{start:m,rewind:E,pause:d,cancel:u,set:f,isPaused:_}}function cr(e){var n=e;function t(a){n=a}function r(a){return Mt(je(a),n)}return{set:t,is:r}}function fr(e,n){var t=dt(0,e,null,1);return function(){t.isPaused()&&t.start()}}function vr(e,n,t){var r=e.state,a=t.breakpoints||{},l=t.reducedMotion||{},i=An(),s=[];function c(){var u=t.mediaQuery==="min";Be(a).sort(function(f,_){return u?+f-+_:+_-+f}).forEach(function(f){o(a[f],"("+(u?"min":"max")+"-width:"+f+"px)")}),o(l,Kt),m()}function v(u){u&&i.destroy()}function o(u,f){var _=matchMedia(f);i.bind(_,"change",m),s.push([u,_])}function m(){var u=r.is(st),f=t.direction,_=s.reduce(function(A,h){return ge(A,h[1].matches?h[0]:{})},{});jt(t),E(_),t.destroy?e.destroy(t.destroy==="completely"):u?(v(!0),e.mount()):f!==t.direction&&e.refresh()}function d(u){matchMedia(Kt).matches&&(u?ge(t,l):jt(t,Be(l)))}function E(u,f,_){ge(t,u),f&&ge(Object.getPrototypeOf(t),u),(_||!r.is(Ce))&&e.emit(Q,t)}return{setup:c,destroy:v,reduce:d,set:E}}var Et="Arrow",gt=Et+"Left",ht=Et+"Right",bn=Et+"Up",On=Et+"Down",en="rtl",mt="ttb",Tt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[bn,ht],ArrowRight:[On,gt]};function lr(e,n,t){function r(l,i,s){s=s||t.direction;var c=s===en&&!i?1:s===mt?0:-1;return Tt[l]&&Tt[l][c]||l.replace(/width|left|right/i,function(v,o){var m=Tt[v.toLowerCase()][c]||v;return o>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function a(l){return l*(t.direction===en?1:-1)}return{resolve:r,orient:a}}var le="role",we="tabindex",dr="disabled",ae="aria-",tt=ae+"controls",Cn=ae+"current",tn=ae+"selected",te=ae+"label",Ut=ae+"labelledby",Dn=ae+"hidden",Bt=ae+"orientation",qe=ae+"roledescription",nn=ae+"live",rn=ae+"busy",an=ae+"atomic",Wt=[le,we,dr,tt,Cn,te,Ut,Dn,Bt,qe],se=Qe+"__",ye="is-",Lt=Qe,on=se+"track",Er=se+"list",At=se+"slide",wn=At+"--clone",gr=At+"__container",Ht=se+"arrows",_t=se+"arrow",Pn=_t+"--prev",pn=_t+"--next",yt=se+"pagination",Mn=yt+"__page",hr=se+"progress",mr=hr+"__bar",Ar=se+"toggle",_r=se+"spinner",yr=se+"sr",Sr=ye+"initialized",Ne=ye+"active",Vn=ye+"prev",xn=ye+"next",Dt=ye+"visible",wt=ye+"loading",Fn=ye+"focus-in",Gn=ye+"overflow",Tr=[Ne,Dt,Vn,xn,wt,Fn,Gn],Lr={slide:At,clone:wn,arrows:Ht,arrow:_t,prev:Pn,next:pn,pagination:yt,page:Mn,spinner:_r};function Ir(e,n){if(vn(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!Ue(t,n);)t=t.parentElement;return t}var Nr=5,un=200,kn="touchstart mousedown",It="touchmove mousemove",Nt="touchend touchcancel mouseup click";function Rr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=e.root,s=t.i18n,c={},v=[],o=[],m=[],d,E,u;function f(){g(),P(),h()}function _(){a(q,A),a(q,f),a(Q,h),l(document,kn+" keydown",function(S){u=S.type==="keydown"},{capture:!0}),l(i,"focusin",function(){fe(i,Fn,!!u)})}function A(S){var O=Wt.concat("style");de(v),ve(i,o),ve(d,m),ue([d,E],O),ue(i,S?O:["style",qe])}function h(){ve(i,o),ve(d,m),o=M(Lt),m=M(on),oe(i,o),oe(d,m),x(i,te,t.label),x(i,Ut,t.labelledby)}function g(){d=b("."+on),E=Je(d,"."+Er),Ge(d&&E,"A track/list element is missing."),at(v,dn(E,"."+At+":not(."+wn+")")),Le({arrows:Ht,pagination:yt,prev:Pn,next:pn,bar:mr,toggle:Ar},function(S,O){c[O]=b("."+S)}),We(c,{root:i,track:d,list:E,slides:v})}function P(){var S=i.id||$n(Qe),O=t.role;i.id=S,d.id=d.id||S+"-track",E.id=E.id||S+"-list",!ie(i,le)&&i.tagName!=="SECTION"&&O&&x(i,le,O),x(i,qe,s.carousel),x(E,le,"presentation")}function b(S){var O=hn(i,S);return O&&Ir(O,"."+Lt)===i?O:void 0}function M(S){return[S+"--"+t.type,S+"--"+t.direction,t.drag&&S+"--draggable",t.isNavigation&&S+"--nav",S===Lt&&Ne]}return We(c,{setup:f,mount:_,destroy:A})}var pe="slide",xe="loop",nt="fade";function br(e,n,t,r){var a=H(e),l=a.on,i=a.emit,s=a.bind,c=e.Components,v=e.root,o=e.options,m=o.isNavigation,d=o.updateOnMove,E=o.i18n,u=o.pagination,f=o.slideFocus,_=c.Direction.resolve,A=ie(r,"style"),h=ie(r,te),g=t>-1,P=Je(r,"."+gr),b;function M(){g||(r.id=v.id+"-slide"+Gt(n+1),x(r,le,u?"tabpanel":"group"),x(r,qe,E.slide),x(r,te,h||Ct(E.slideLabel,[n+1,e.length]))),S()}function S(){s(r,"click",U(i,_n,p)),s(r,"keydown",U(i,Nn,p)),l([et,Rn,Ve],L),l(Sn,G),d&&l(Ae,w)}function O(){b=!0,a.destroy(),ve(r,Tr),ue(r,Wt),x(r,"style",A),x(r,te,h||"")}function G(){var D=e.splides.map(function(T){var C=T.splide.Components.Slides.getAt(n);return C?C.slide.id:""}).join(" ");x(r,te,Ct(E.slideX,(g?t:n)+1)),x(r,tt,D),x(r,le,f?"button":""),f&&ue(r,qe)}function w(){b||L()}function L(){if(!b){var D=e.index;I(),N(),fe(r,Vn,n===D-1),fe(r,xn,n===D+1)}}function I(){var D=F();D!==Zt(r,Ne)&&(fe(r,Ne,D),x(r,Cn,m&&D||""),i(D?jn:Zn,p))}function N(){var D=Y(),T=!D&&(!F()||g);if(e.state.is([Me,Ke])||x(r,Dn,T||""),x(xt(r,o.focusableNodes||""),we,T?-1:""),f&&x(r,we,T?-1:0),D!==Zt(r,Dt)&&(fe(r,Dt,D),i(D?Jn:Qn,p)),!D&&document.activeElement===r){var C=c.Slides.getAt(e.index);C&&En(C.slide)}}function V(D,T,C){re(C&&P||r,D,T)}function F(){var D=e.index;return D===n||o.cloneStatus&&D===t}function Y(){if(e.is(nt))return F();var D=ee(c.Elements.track),T=ee(r),C=_("left",!0),k=_("right",!0);return ft(D[C])<=Ye(T[C])&&ft(T[k])<=Ye(D[k])}function W(D,T){var C=J(D-n);return!g&&(o.rewind||e.is(xe))&&(C=me(C,e.length-C)),C<=T}var p={index:n,slideIndex:t,slide:r,container:P,isClone:g,mount:M,destroy:O,update:L,style:V,isWithin:W};return p}function Or(e,n,t){var r=H(e),a=r.on,l=r.emit,i=r.bind,s=n.Elements,c=s.slides,v=s.list,o=[];function m(){d(),a(q,E),a(q,d)}function d(){c.forEach(function(L,I){f(L,I,-1)})}function E(){b(function(L){L.destroy()}),de(o)}function u(){b(function(L){L.update()})}function f(L,I,N){var V=br(e,I,N,L);V.mount(),o.push(V),o.sort(function(F,Y){return F.index-Y.index})}function _(L){return L?M(function(I){return!I.isClone}):o}function A(L){var I=n.Controller,N=I.toIndex(L),V=I.hasFocus()?1:t.perPage;return M(function(F){return ot(F.index,N,N+V-1)})}function h(L){return M(L)[0]}function g(L,I){ne(L,function(N){if(he(N)&&(N=gn(N)),ln(N)){var V=c[I];V?Vt(N,V):Ze(v,N),oe(N,t.classes.slide),O(N,U(l,Xe))}}),l(q)}function P(L){Ie(M(L).map(function(I){return I.slide})),l(q)}function b(L,I){_(I).forEach(L)}function M(L){return o.filter(vn(L)?L:function(I){return he(L)?Ue(I.slide,L):Mt(je(L),I.index)})}function S(L,I,N){b(function(V){V.style(L,I,N)})}function O(L,I){var N=xt(L,"img"),V=N.length;V?N.forEach(function(F){i(F,"load error",function(){--V||I()})}):I()}function G(L){return L?c.length:o.length}function w(){return o.length>t.perPage}return{mount:m,destroy:E,update:u,register:f,get:_,getIn:A,getAt:h,add:g,remove:P,forEach:b,filter:M,style:S,getLength:G,isEnough:w}}function Cr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.emit,s=n.Slides,c=n.Direction.resolve,v=n.Elements,o=v.root,m=v.track,d=v.list,E=s.getAt,u=s.style,f,_,A;function h(){g(),l(window,"resize load",fr(U(i,Xe))),a([Q,q],g),a(Xe,P)}function g(){f=t.direction===mt,re(o,"maxWidth",Te(t.width)),re(m,c("paddingLeft"),b(!1)),re(m,c("paddingRight"),b(!0)),P(!0)}function P(p){var D=ee(o);(p||_.width!==D.width||_.height!==D.height)&&(re(m,"height",M()),u(c("marginRight"),Te(t.gap)),u("width",O()),u("height",G(),!0),_=D,i(kt),A!==(A=W())&&(fe(o,Gn,A),i(rr,A)))}function b(p){var D=t.padding,T=c(p?"right":"left");return D&&Te(D[T]||(ze(D)?0:D))||"0px"}function M(){var p="";return f&&(p=S(),Ge(p,"height or heightRatio is missing."),p="calc("+p+" - "+b(!1)+" - "+b(!0)+")"),p}function S(){return Te(t.height||ee(d).width*t.heightRatio)}function O(){return t.autoWidth?null:Te(t.fixedWidth)||(f?"":w())}function G(){return Te(t.fixedHeight)||(f?t.autoHeight?null:w():S())}function w(){var p=Te(t.gap);return"calc((100%"+(p&&" + "+p)+")/"+(t.perPage||1)+(p&&" - "+p)+")"}function L(){return ee(d)[c("width")]}function I(p,D){var T=E(p||0);return T?ee(T.slide)[c("width")]+(D?0:F()):0}function N(p,D){var T=E(p);if(T){var C=ee(T.slide)[c("right")],k=ee(d)[c("left")];return J(C-k)+(D?0:F())}return 0}function V(p){return N(e.length-1)-N(0)+I(0,p)}function F(){var p=E(0);return p&&parseFloat(re(p.slide,c("marginRight")))||0}function Y(p){return parseFloat(re(m,c("padding"+(p?"Right":"Left"))))||0}function W(){return e.is(nt)||V(!0)>L()}return{mount:h,resize:P,listSize:L,slideSize:I,sliderSize:V,totalSize:N,getPadding:Y,isOverflow:W}}var Dr=2;function wr(e,n,t){var r=H(e),a=r.on,l=n.Elements,i=n.Slides,s=n.Direction.resolve,c=[],v;function o(){a(q,m),a([Q,Xe],E),(v=_())&&(u(v),n.Layout.resize(!0))}function m(){d(),o()}function d(){Ie(c),de(c),r.destroy()}function E(){var A=_();v!==A&&(v<A||!A)&&r.emit(q)}function u(A){var h=i.get().slice(),g=h.length;if(g){for(;h.length<A;)at(h,h);at(h.slice(-A),h.slice(0,A)).forEach(function(P,b){var M=b<A,S=f(P.slide,b);M?Vt(S,h[0].slide):Ze(l.list,S),at(c,S),i.register(S,b-A+(M?0:g),P.index)})}}function f(A,h){var g=A.cloneNode(!0);return oe(g,t.classes.clone),g.id=e.root.id+"-clone"+Gt(h+1),g}function _(){var A=t.clones;if(!e.is(xe))A=0;else if($e(A)){var h=t[s("fixedWidth")]&&n.Layout.slideSize(0),g=h&&Ye(ee(l.track)[s("width")]/h);A=g||t[s("autoWidth")]&&e.length||t.perPage*Dr}return A}return{mount:o,destroy:d}}function Pr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=e.state.set,s=n.Layout,c=s.slideSize,v=s.getPadding,o=s.totalSize,m=s.listSize,d=s.sliderSize,E=n.Direction,u=E.resolve,f=E.orient,_=n.Elements,A=_.list,h=_.track,g;function P(){g=n.Transition,a([Re,kt,Q,q],b)}function b(){n.Controller.isBusy()||(n.Scroll.cancel(),S(e.index),n.Slides.update())}function M(T,C,k,$){T!==C&&p(T>k)&&(L(),O(w(V(),T>k),!0)),i(Me),l(Ae,C,k,T),g.start(C,function(){i(Pe),l(et,C,k,T),$&&$()})}function S(T){O(N(T,!0))}function O(T,C){if(!e.is(nt)){var k=C?T:G(T);re(A,"transform","translate"+u("X")+"("+k+"px)"),T!==k&&l(Rn)}}function G(T){if(e.is(xe)){var C=I(T),k=C>n.Controller.getEnd(),$=C<0;($||k)&&(T=w(T,k))}return T}function w(T,C){var k=T-W(C),$=d();return T-=f($*(Ye(J(k)/$)||1))*(C?1:-1),T}function L(){O(V(),!0),g.cancel()}function I(T){for(var C=n.Slides.get(),k=0,$=1/0,K=0;K<C.length;K++){var Ee=C[K].index,y=J(N(Ee,!0)-T);if(y<=$)$=y,k=Ee;else break}return k}function N(T,C){var k=f(o(T-1)-Y(T));return C?F(k):k}function V(){var T=u("left");return ee(A)[T]-ee(h)[T]+f(v(!1))}function F(T){return t.trimSpace&&e.is(pe)&&(T=be(T,0,f(d(!0)-m()))),T}function Y(T){var C=t.focus;return C==="center"?(m()-c(T,!0))/2:+C*c(T)||0}function W(T){return N(T?n.Controller.getEnd():0,!!t.trimSpace)}function p(T){var C=f(w(V(),T));return T?C>=0:C<=A[u("scrollWidth")]-ee(h)[u("width")]}function D(T,C){C=$e(C)?V():C;var k=T!==!0&&f(C)<f(W(!1)),$=T!==!1&&f(C)>f(W(!0));return k||$}return{mount:P,move:M,jump:S,translate:O,shift:w,cancel:L,toIndex:I,toPosition:N,getPosition:V,getLimit:W,exceededLimit:D,reposition:b}}function pr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=n.Move,s=i.getPosition,c=i.getLimit,v=i.toPosition,o=n.Slides,m=o.isEnough,d=o.getLength,E=t.omitEnd,u=e.is(xe),f=e.is(pe),_=U(V,!1),A=U(V,!0),h=t.start||0,g,P=h,b,M,S;function O(){G(),a([Q,q,vt],G),a(kt,w)}function G(){b=d(!0),M=t.perMove,S=t.perPage,g=p();var y=be(h,0,E?g:b-1);y!==h&&(h=y,i.reposition())}function w(){g!==p()&&l(vt)}function L(y,z,Z){if(!Ee()){var X=N(y),j=W(X);j>-1&&(z||j!==h)&&(k(j),i.move(X,j,P,Z))}}function I(y,z,Z,X){n.Scroll.scroll(y,z,Z,function(){var j=W(i.toIndex(s()));k(E?me(j,g):j),X&&X()})}function N(y){var z=h;if(he(y)){var Z=y.match(/([+\-<>])(\d+)?/)||[],X=Z[1],j=Z[2];X==="+"||X==="-"?z=F(h+ +(""+X+(+j||1)),h):X===">"?z=j?D(+j):_(!0):X==="<"&&(z=A(!0))}else z=u?y:be(y,0,g);return z}function V(y,z){var Z=M||(K()?1:S),X=F(h+Z*(y?-1:1),h,!(M||K()));return X===-1&&f&&!mn(s(),c(!y),1)?y?0:g:z?X:W(X)}function F(y,z,Z){if(m()||K()){var X=Y(y);X!==y&&(z=y,y=X,Z=!1),y<0||y>g?!M&&(ot(0,y,z,!0)||ot(g,z,y,!0))?y=D(T(y)):u?y=Z?y<0?-(b%S||S):b:y:t.rewind?y=y<0?g:0:y=-1:Z&&y!==z&&(y=D(T(z)+(y<z?-1:1)))}else y=-1;return y}function Y(y){if(f&&t.trimSpace==="move"&&y!==h)for(var z=s();z===v(y,!0)&&ot(y,0,e.length-1,!t.rewind);)y<h?--y:++y;return y}function W(y){return u?(y+b)%b||0:y}function p(){for(var y=b-(K()||u&&M?1:S);E&&y-- >0;)if(v(b-1,!0)!==v(y,!0)){y++;break}return be(y,0,b-1)}function D(y){return be(K()?y:S*y,0,g)}function T(y){return K()?me(y,g):ft((y>=g?b-1:y)/S)}function C(y){var z=i.toIndex(y);return f?be(z,0,g):z}function k(y){y!==h&&(P=h,h=y)}function $(y){return y?P:h}function K(){return!$e(t.focus)||t.isNavigation}function Ee(){return e.state.is([Me,Ke])&&!!t.waitForTransition}return{mount:O,go:L,scroll:I,getNext:_,getPrev:A,getAdjacent:V,getEnd:p,setIndex:k,getIndex:$,toIndex:D,toPage:T,toDest:C,hasFocus:K,isBusy:Ee}}var Mr="http://www.w3.org/2000/svg",Vr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",rt=40;function xr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.emit,s=t.classes,c=t.i18n,v=n.Elements,o=n.Controller,m=v.arrows,d=v.track,E=m,u=v.prev,f=v.next,_,A,h={};function g(){b(),a(Q,P)}function P(){M(),g()}function b(){var I=t.arrows;I&&!(u&&f)&&G(),u&&f&&(We(h,{prev:u,next:f}),He(E,I?"":"none"),oe(E,A=Ht+"--"+t.direction),I&&(S(),L(),x([u,f],tt,d.id),i(ir,u,f)))}function M(){r.destroy(),ve(E,A),_?(Ie(m?[u,f]:E),u=f=null):ue([u,f],Wt)}function S(){a([Re,et,q,Ve,vt],L),l(f,"click",U(O,">")),l(u,"click",U(O,"<"))}function O(I){o.go(I,!0)}function G(){E=m||De("div",s.arrows),u=w(!0),f=w(!1),_=!0,Ze(E,[u,f]),!m&&Vt(E,d)}function w(I){var N='<button class="'+s.arrow+" "+(I?s.prev:s.next)+'" type="button"><svg xmlns="'+Mr+'" viewBox="0 0 '+rt+" "+rt+'" width="'+rt+'" height="'+rt+'" focusable="false"><path d="'+(t.arrowPath||Vr)+'" />';return gn(N)}function L(){if(u&&f){var I=e.index,N=o.getPrev(),V=o.getNext(),F=N>-1&&I<N?c.last:c.prev,Y=V>-1&&I>V?c.first:c.next;u.disabled=N<0,f.disabled=V<0,x(u,te,F),x(f,te,Y),i(ar,u,f,N,V)}}return{arrows:h,mount:g,destroy:M,update:L}}var Fr=Ft+"-interval";function Gr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.emit,s=dt(t.interval,e.go.bind(e,">"),S),c=s.isPaused,v=n.Elements,o=n.Elements,m=o.root,d=o.toggle,E=t.autoplay,u,f,_=E==="pause";function A(){E&&(h(),d&&x(d,tt,v.track.id),_||g(),M())}function h(){t.pauseOnHover&&l(m,"mouseenter mouseleave",function(G){u=G.type==="mouseenter",b()}),t.pauseOnFocus&&l(m,"focusin focusout",function(G){f=G.type==="focusin",b()}),d&&l(d,"click",function(){_?g():P(!0)}),a([Ae,zt,q],s.rewind),a(Ae,O)}function g(){c()&&n.Slides.isEnough()&&(s.start(!t.resetProgress),f=u=_=!1,M(),i(Tn))}function P(G){G===void 0&&(G=!0),_=!!G,M(),c()||(s.pause(),i(Ln))}function b(){_||(u||f?P(!1):g())}function M(){d&&(fe(d,Ne,!_),x(d,te,t.i18n[_?"play":"pause"]))}function S(G){var w=v.bar;w&&re(w,"width",G*100+"%"),i(sr,G)}function O(G){var w=n.Slides.getAt(G);s.set(w&&+ie(w.slide,Fr)||t.interval)}return{mount:A,destroy:s.cancel,play:g,pause:P,isPaused:c}}function kr(e,n,t){var r=H(e),a=r.on;function l(){t.cover&&(a(In,U(s,!0)),a([Re,Q,q],U(i,!0)))}function i(c){n.Slides.forEach(function(v){var o=Je(v.container||v.slide,"img");o&&o.src&&s(c,o,v)})}function s(c,v,o){o.style("background",c?'center/cover no-repeat url("'+v.src+'")':"",!0),He(v,c?"none":"")}return{mount:l,destroy:U(i,!1)}}var zr=10,Ur=600,Br=.6,Wr=1.5,Hr=800;function Yr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=e.state.set,s=n.Move,c=s.getPosition,v=s.getLimit,o=s.exceededLimit,m=s.translate,d=e.is(pe),E,u,f=1;function _(){a(Ae,P),a([Q,q],b)}function A(S,O,G,w,L){var I=c();if(P(),G&&(!d||!o())){var N=n.Layout.sliderSize(),V=Ot(S)*N*ft(J(S)/N)||0;S=s.toPosition(n.Controller.toDest(S%N))+V}var F=mn(I,S,1);f=1,O=F?0:O||ct(J(S-I)/Wr,Hr),u=w,E=dt(O,h,U(g,I,S,L),1),i(Ke),l(zt),E.start()}function h(){i(Pe),u&&u(),l(Ve)}function g(S,O,G,w){var L=c(),I=S+(O-S)*M(w),N=(I-L)*f;m(L+N),d&&!G&&o()&&(f*=Br,J(N)<zr&&A(v(o(!0)),Ur,!1,u,!0))}function P(){E&&E.cancel()}function b(){E&&!E.isPaused()&&(P(),h())}function M(S){var O=t.easingFunc;return O?O(S):1-Math.pow(1-S,4)}return{mount:_,destroy:P,scroll:A,cancel:b}}var Oe={passive:!1,capture:!0};function Xr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=r.bind,s=r.unbind,c=e.state,v=n.Move,o=n.Scroll,m=n.Controller,d=n.Elements.track,E=n.Media.reduce,u=n.Direction,f=u.resolve,_=u.orient,A=v.getPosition,h=v.exceededLimit,g,P,b,M,S,O=!1,G,w,L;function I(){i(d,It,Rt,Oe),i(d,Nt,Rt,Oe),i(d,kn,V,Oe),i(d,"click",W,{capture:!0}),i(d,"dragstart",ce),a([Re,Q],N)}function N(){var R=t.drag;qt(!R),M=R==="free"}function V(R){if(G=!1,!w){var B=j(R);X(R.target)&&(B||!R.button)&&(m.isBusy()?ce(R,!0):(L=B?d:window,S=c.is([Me,Ke]),b=null,i(L,It,F,Oe),i(L,Nt,Y,Oe),v.cancel(),o.cancel(),p(R)))}}function F(R){if(c.is(it)||(c.set(it),l(er)),R.cancelable)if(S){v.translate(g+Z(K(R)));var B=Ee(R)>un,Se=O!==(O=h());(B||Se)&&p(R),G=!0,l(tr),ce(R)}else C(R)&&(S=T(R),ce(R))}function Y(R){c.is(it)&&(c.set(Pe),l(nr)),S&&(D(R),ce(R)),s(L,It,F),s(L,Nt,Y),S=!1}function W(R){!w&&G&&ce(R,!0)}function p(R){b=P,P=R,g=A()}function D(R){var B=k(R),Se=$(B),Fe=t.rewind&&t.rewindByDrag;E(!1),M?m.scroll(Se,0,t.snap):e.is(nt)?m.go(_(Ot(B))<0?Fe?"<":"-":Fe?">":"+"):e.is(pe)&&O&&Fe?m.go(h(!0)?">":"<"):m.go(m.toDest(Se),!0),E(!0)}function T(R){var B=t.dragMinThreshold,Se=ze(B),Fe=Se&&B.mouse||0,Un=(Se?B.touch:+B)||10;return J(K(R))>(j(R)?Un:Fe)}function C(R){return J(K(R))>J(K(R,!0))}function k(R){if(e.is(xe)||!O){var B=Ee(R);if(B&&B<un)return K(R)/B}return 0}function $(R){return A()+Ot(R)*me(J(R)*(t.flickPower||600),M?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function K(R,B){return z(R,B)-z(y(R),B)}function Ee(R){return bt(R)-bt(y(R))}function y(R){return P===R&&b||P}function z(R,B){return(j(R)?R.changedTouches[0]:R)["page"+f(B?"Y":"X")]}function Z(R){return R/(O&&e.is(pe)?Nr:1)}function X(R){var B=t.noDrag;return!Ue(R,"."+Mn+", ."+_t)&&(!B||!Ue(R,B))}function j(R){return typeof TouchEvent<"u"&&R instanceof TouchEvent}function zn(){return S}function qt(R){w=R}return{mount:I,disable:qt,isDragging:zn}}var qr={Spacebar:" ",Right:ht,Left:gt,Up:bn,Down:On};function Yt(e){return e=he(e)?e:e.key,qr[e]||e}var sn="keydown";function Kr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.unbind,s=e.root,c=n.Direction.resolve,v,o;function m(){d(),a(Q,E),a(Q,d),a(Ae,f)}function d(){var A=t.keyboard;A&&(v=A==="global"?window:s,l(v,sn,_))}function E(){i(v,sn)}function u(A){o=A}function f(){var A=o;o=!0,fn(function(){o=A})}function _(A){if(!o){var h=Yt(A);h===c(gt)?e.go("<"):h===c(ht)&&e.go(">")}}return{mount:m,destroy:E,disable:u}}var ke=Ft+"-lazy",ut=ke+"-srcset",$r="["+ke+"], ["+ut+"]";function jr(e,n,t){var r=H(e),a=r.on,l=r.off,i=r.bind,s=r.emit,c=t.lazyLoad==="sequential",v=[et,Ve],o=[];function m(){t.lazyLoad&&(d(),a(q,d))}function d(){de(o),E(),c?A():(l(v),a(v,u),u())}function E(){n.Slides.forEach(function(h){xt(h.slide,$r).forEach(function(g){var P=ie(g,ke),b=ie(g,ut);if(P!==g.src||b!==g.srcset){var M=t.classes.spinner,S=g.parentElement,O=Je(S,"."+M)||De("span",M,S);o.push([g,h,O]),g.src||He(g,"none")}})})}function u(){o=o.filter(function(h){var g=t.perPage*((t.preloadPages||1)+1)-1;return h[1].isWithin(e.index,g)?f(h):!0}),o.length||l(v)}function f(h){var g=h[0];oe(h[1].slide,wt),i(g,"load error",U(_,h)),x(g,"src",ie(g,ke)),x(g,"srcset",ie(g,ut)),ue(g,ke),ue(g,ut)}function _(h,g){var P=h[0],b=h[1];ve(b.slide,wt),g.type!=="error"&&(Ie(h[2]),He(P,""),s(In,P,b),s(Xe)),c&&A()}function A(){o.length&&f(o.shift())}return{mount:m,destroy:U(de,o),check:u}}function Zr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=r.bind,s=n.Slides,c=n.Elements,v=n.Controller,o=v.hasFocus,m=v.getIndex,d=v.go,E=n.Direction.resolve,u=c.pagination,f=[],_,A;function h(){g(),a([Q,q,vt],h);var w=t.pagination;u&&He(u,w?"":"none"),w&&(a([Ae,zt,Ve],G),P(),G(),l(or,{list:_,items:f},O(e.index)))}function g(){_&&(Ie(u?_e(_.children):_),ve(_,A),de(f),_=null),r.destroy()}function P(){var w=e.length,L=t.classes,I=t.i18n,N=t.perPage,V=o()?v.getEnd()+1:Ye(w/N);_=u||De("ul",L.pagination,c.track.parentElement),oe(_,A=yt+"--"+S()),x(_,le,"tablist"),x(_,te,I.select),x(_,Bt,S()===mt?"vertical":"");for(var F=0;F<V;F++){var Y=De("li",null,_),W=De("button",{class:L.page,type:"button"},Y),p=s.getIn(F).map(function(T){return T.slide.id}),D=!o()&&N>1?I.pageX:I.slideX;i(W,"click",U(b,F)),t.paginationKeyboard&&i(W,"keydown",U(M,F)),x(Y,le,"presentation"),x(W,le,"tab"),x(W,tt,p.join(" ")),x(W,te,Ct(D,F+1)),x(W,we,-1),f.push({li:Y,button:W,page:F})}}function b(w){d(">"+w,!0)}function M(w,L){var I=f.length,N=Yt(L),V=S(),F=-1;N===E(ht,!1,V)?F=++w%I:N===E(gt,!1,V)?F=(--w+I)%I:N==="Home"?F=0:N==="End"&&(F=I-1);var Y=f[F];Y&&(En(Y.button),d(">"+F),ce(L,!0))}function S(){return t.paginationDirection||t.direction}function O(w){return f[v.toPage(w)]}function G(){var w=O(m(!0)),L=O(m());if(w){var I=w.button;ve(I,Ne),ue(I,tn),x(I,we,-1)}if(L){var N=L.button;oe(N,Ne),x(N,tn,!0),x(N,we,"")}l(ur,{list:_,items:f},w,L)}return{items:f,mount:h,destroy:g,getAt:O,update:G}}var Jr=[" ","Enter"];function Qr(e,n,t){var r=t.isNavigation,a=t.slideFocus,l=[];function i(){e.splides.forEach(function(u){u.isParent||(v(e,u.splide),v(u.splide,e))}),r&&o()}function s(){l.forEach(function(u){u.destroy()}),de(l)}function c(){s(),i()}function v(u,f){var _=H(u);_.on(Ae,function(A,h,g){f.go(f.is(xe)?g:A)}),l.push(_)}function o(){var u=H(e),f=u.on;f(_n,d),f(Nn,E),f([Re,Q],m),l.push(u),u.emit(Sn,e.splides)}function m(){x(n.Elements.list,Bt,t.direction===mt?"vertical":"")}function d(u){e.go(u.index)}function E(u,f){Mt(Jr,Yt(f))&&(d(u),ce(f))}return{setup:U(n.Media.set,{slideFocus:$e(a)?r:a},!0),mount:i,destroy:s,remount:c}}function ei(e,n,t){var r=H(e),a=r.bind,l=0;function i(){t.wheel&&a(n.Elements.track,"wheel",s,Oe)}function s(v){if(v.cancelable){var o=v.deltaY,m=o<0,d=bt(v),E=t.wheelMinThreshold||0,u=t.wheelSleep||0;J(o)>E&&d-l>u&&(e.go(m?"<":">"),l=d),c(m)&&ce(v)}}function c(v){return!t.releaseWheel||e.state.is(Me)||n.Controller.getAdjacent(v)!==-1}return{mount:i}}var ti=90;function ni(e,n,t){var r=H(e),a=r.on,l=n.Elements.track,i=t.live&&!t.isNavigation,s=De("span",yr),c=dt(ti,U(o,!1));function v(){i&&(d(!n.Autoplay.isPaused()),x(l,an,!0),s.textContent="…",a(Tn,U(d,!0)),a(Ln,U(d,!1)),a([et,Ve],U(o,!0)))}function o(E){x(l,rn,E),E?(Ze(l,s),c.start()):(Ie(s),c.cancel())}function m(){ue(l,[nn,an,rn]),Ie(s)}function d(E){i&&x(l,nn,E?"off":"polite")}return{mount:v,disable:d,destroy:m}}var ri=Object.freeze({__proto__:null,Media:vr,Direction:lr,Elements:Rr,Slides:Or,Layout:Cr,Clones:wr,Move:Pr,Controller:pr,Arrows:xr,Autoplay:Gr,Cover:kr,Scroll:Yr,Drag:Xr,Keyboard:Kr,LazyLoad:jr,Pagination:Zr,Sync:Qr,Wheel:ei,Live:ni}),ii={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ai={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Lr,i18n:ii,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function oi(e,n,t){var r=n.Slides;function a(){H(e).on([Re,q],l)}function l(){r.forEach(function(s){s.style("transform","translateX(-"+100*s.index+"%)")})}function i(s,c){r.style("transition","opacity "+t.speed+"ms "+t.easing),fn(c)}return{mount:a,start:i,cancel:Rt}}function ui(e,n,t){var r=n.Move,a=n.Controller,l=n.Scroll,i=n.Elements.list,s=U(re,i,"transition"),c;function v(){H(e).bind(i,"transitionend",function(E){E.target===i&&c&&(m(),c())})}function o(E,u){var f=r.toPosition(E,!0),_=r.getPosition(),A=d(E);J(f-_)>=1&&A>=1?t.useScroll?l.scroll(f,A,!1,u):(s("transform "+A+"ms "+t.easing),r.translate(f,!0),c=u):(r.jump(E),u())}function m(){s(""),l.cancel()}function d(E){var u=t.rewindSpeed;if(e.is(pe)&&u){var f=a.getIndex(!0),_=a.getEnd();if(f===0&&E>=_||f>=_&&E===0)return u}return t.speed}return{mount:v,start:o,cancel:m}}var si=function(){function e(t,r){this.event=H(),this.Components={},this.state=cr(Ce),this.splides=[],this._o={},this._E={};var a=he(t)?hn(document,t):t;Ge(a,a+" is invalid."),this.root=a,r=ge({label:ie(a,te)||"",labelledby:ie(a,Ut)||""},ai,e.defaults,r||{});try{ge(r,JSON.parse(ie(a,Ft)))}catch{Ge(!1,"Invalid JSON")}this._o=Object.create(ge({},r))}var n=e.prototype;return n.mount=function(r,a){var l=this,i=this.state,s=this.Components;Ge(i.is([Ce,st]),"Already mounted!"),i.set(Ce),this._C=s,this._T=a||this._T||(this.is(nt)?oi:ui),this._E=r||this._E;var c=We({},ri,this._E,{Transition:this._T});return Le(c,function(v,o){var m=v(l,s,l._o);s[o]=m,m.setup&&m.setup()}),Le(s,function(v){v.mount&&v.mount()}),this.emit(Re),oe(this.root,Sr),i.set(Pe),this.emit(Qt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Pe)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,a){return this.event.on(r,a),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var a;return(a=this.event).emit.apply(a,[r].concat(_e(arguments,1))),this},n.add=function(r,a){return this._C.Slides.add(r,a),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(q),this},n.destroy=function(r){r===void 0&&(r=!0);var a=this.event,l=this.state;return l.is(Ce)?H(this).on(Qt,this.destroy.bind(this,r)):(Le(this._C,function(i){i.destroy&&i.destroy(r)},!0),a.emit(yn),a.destroy(),r&&de(this.splides),l.set(st)),this},Xn(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Xt=si;Xt.defaults={};Xt.STATES=Kn;new Xt(".splide").mount();
