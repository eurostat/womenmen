"use strict";(self.webpackChunkinternetactivities=self.webpackChunkinternetactivities||[]).push([[856],{"mk+8":(t,e,n)=>{n.d(e,{mN:()=>D,Yu:()=>I,L:()=>M});var r=n("xo8x"),s=n("qWY1"),i=n("/KVZ"),u=n("X48g"),a=n("PATO"),o=n("gUNB");const l=t=>()=>t;function c(t,{sourceEvent:e,target:n,selection:r,mode:s,dispatch:i}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},selection:{value:r,enumerable:!0,configurable:!0},mode:{value:s,enumerable:!0,configurable:!0},_:{value:i}})}function h(t){t.stopImmediatePropagation()}function f(t){t.preventDefault(),t.stopImmediatePropagation()}var p={name:"drag"},d={name:"space"},v={name:"handle"},b={name:"center"};const{abs:y,max:m,min:w}=Math;function g(t){return[+t[0],+t[1]]}function _(t){return[g(t[0]),g(t[1])]}var k={name:"x",handles:["w","e"].map(P),input:function(t,e){return null==t?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},x={name:"y",handles:["n","s"].map(P),input:function(t,e){return null==t?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Z=(["n","w","e","s","nw","ne","sw","se"].map(P),{overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"}),A={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},z={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},K={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},E={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function P(t){return{type:t}}function T(t){return!t.ctrlKey&&!t.button}function V(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function C(){return navigator.maxTouchPoints||"ontouchstart"in this}function B(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function N(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function D(t){var e=t.__brush;return e?e.dim.output(e.selection):null}function I(){return O(k)}function M(){return O(x)}function O(t){var e,n=V,g=T,D=C,I=!0,M=(0,r.Z)("start","brush","end"),O=6;function S(e){var n=e.property("__brush",W).selectAll(".overlay").data([P("overlay")]);n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Z.overlay).merge(n).each((function(){var t=B(this).extent;(0,u.Z)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),e.selectAll(".selection").data([P("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Z.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=e.selectAll(".handle").data(t.handles,(function(t){return t.type}));r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return Z[t.type]})),e.each(Y).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",G).filter(D).on("touchstart.brush",G).on("touchmove.brush",L).on("touchend.brush touchcancel.brush",U).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function Y(){var t=(0,u.Z)(this),e=B(this).selection;e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?e[1][0]-O/2:e[0][0]-O/2})).attr("y",(function(t){return"s"===t.type[0]?e[1][1]-O/2:e[0][1]-O/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+O:O})).attr("height",(function(t){return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+O:O}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function j(t,e,n){var r=t.__brush.emitter;return!r||n&&r.clean?new q(t,e,n):r}function q(t,e,n){this.that=t,this.args=e,this.state=t.__brush,this.active=0,this.clean=n}function G(n){if((!e||n.touches)&&g.apply(this,arguments)){var r,i,l,c,_,P,T,V,C,D,M,O=this,S=n.target.__data__.type,q="selection"===(I&&n.metaKey?S="overlay":S)?p:I&&n.altKey?b:v,G=t===x?null:K[S],L=t===k?null:E[S],U=B(O),W=U.extent,X=U.selection,F=W[0][0],H=W[0][1],J=W[1][0],Q=W[1][1],R=0,$=0,tt=G&&L&&I&&n.shiftKey,et=Array.from(n.touches||[n],(t=>{const e=t.identifier;return(t=(0,a.Z)(t,O)).point0=t.slice(),t.identifier=e,t}));(0,o.e1)(O);var nt=j(O,arguments,!0).beforestart();if("overlay"===S){X&&(C=!0);const e=[et[0],et[1]||et[0]];U.selection=X=[[r=t===x?F:w(e[0][0],e[1][0]),l=t===k?H:w(e[0][1],e[1][1])],[_=t===x?J:m(e[0][0],e[1][0]),T=t===k?Q:m(e[0][1],e[1][1])]],et.length>1&&at(n)}else r=X[0][0],l=X[0][1],_=X[1][0],T=X[1][1];i=r,c=l,P=_,V=T;var rt=(0,u.Z)(O).attr("pointer-events","none"),st=rt.selectAll(".overlay").attr("cursor",Z[S]);if(n.touches)nt.moved=ut,nt.ended=ot;else{var it=(0,u.Z)(n.view).on("mousemove.brush",ut,!0).on("mouseup.brush",ot,!0);I&&it.on("keydown.brush",lt,!0).on("keyup.brush",ct,!0),(0,s.Z)(n.view)}Y.call(O),nt.start(n,q.name)}function ut(t){for(const e of t.changedTouches||[t])for(const t of et)t.identifier===e.identifier&&(t.cur=(0,a.Z)(e,O));if(tt&&!D&&!M&&1===et.length){const t=et[0];y(t.cur[0]-t[0])>y(t.cur[1]-t[1])?M=!0:D=!0}for(const t of et)t.cur&&(t[0]=t.cur[0],t[1]=t.cur[1]);C=!0,f(t),at(t)}function at(t){const e=et[0],n=e.point0;var s;switch(R=e[0]-n[0],$=e[1]-n[1],q){case d:case p:G&&(R=m(F-r,w(J-_,R)),i=r+R,P=_+R),L&&($=m(H-l,w(Q-T,$)),c=l+$,V=T+$);break;case v:et[1]?(G&&(i=m(F,w(J,et[0][0])),P=m(F,w(J,et[1][0])),G=1),L&&(c=m(H,w(Q,et[0][1])),V=m(H,w(Q,et[1][1])),L=1)):(G<0?(R=m(F-r,w(J-r,R)),i=r+R,P=_):G>0&&(R=m(F-_,w(J-_,R)),i=r,P=_+R),L<0?($=m(H-l,w(Q-l,$)),c=l+$,V=T):L>0&&($=m(H-T,w(Q-T,$)),c=l,V=T+$));break;case b:G&&(i=m(F,w(J,r-R*G)),P=m(F,w(J,_+R*G))),L&&(c=m(H,w(Q,l-$*L)),V=m(H,w(Q,T+$*L)))}P<i&&(G*=-1,s=r,r=_,_=s,s=i,i=P,P=s,S in A&&st.attr("cursor",Z[S=A[S]])),V<c&&(L*=-1,s=l,l=T,T=s,s=c,c=V,V=s,S in z&&st.attr("cursor",Z[S=z[S]])),U.selection&&(X=U.selection),D&&(i=X[0][0],P=X[1][0]),M&&(c=X[0][1],V=X[1][1]),X[0][0]===i&&X[0][1]===c&&X[1][0]===P&&X[1][1]===V||(U.selection=[[i,c],[P,V]],Y.call(O),nt.brush(t,q.name))}function ot(t){if(h(t),t.touches){if(t.touches.length)return;e&&clearTimeout(e),e=setTimeout((function(){e=null}),500)}else(0,s.D)(t.view,C),it.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);rt.attr("pointer-events","all"),st.attr("cursor",Z.overlay),U.selection&&(X=U.selection),N(X)&&(U.selection=null,Y.call(O)),nt.end(t,q.name)}function lt(t){switch(t.keyCode){case 16:tt=G&&L;break;case 18:q===v&&(G&&(_=P-R*G,r=i+R*G),L&&(T=V-$*L,l=c+$*L),q=b,at(t));break;case 32:q!==v&&q!==b||(G<0?_=P-R:G>0&&(r=i-R),L<0?T=V-$:L>0&&(l=c-$),q=d,st.attr("cursor",Z.selection),at(t));break;default:return}f(t)}function ct(t){switch(t.keyCode){case 16:tt&&(D=M=tt=!1,at(t));break;case 18:q===b&&(G<0?_=P:G>0&&(r=i),L<0?T=V:L>0&&(l=c),q=v,at(t));break;case 32:q===d&&(t.altKey?(G&&(_=P-R*G,r=i+R*G),L&&(T=V-$*L,l=c+$*L),q=b):(G<0?_=P:G>0&&(r=i),L<0?T=V:L>0&&(l=c),q=v),st.attr("cursor",Z[S]),at(t));break;default:return}f(t)}}function L(t){j(this,arguments).moved(t)}function U(t){j(this,arguments).ended(t)}function W(){var e=this.__brush||{selection:null};return e.extent=_(n.apply(this,arguments)),e.dim=t,e}return S.move=function(e,n,r){e.tween?e.on("start.brush",(function(t){j(this,arguments).beforestart().start(t)})).on("interrupt.brush end.brush",(function(t){j(this,arguments).end(t)})).tween("brush",(function(){var e=this,r=e.__brush,s=j(e,arguments),u=r.selection,a=t.input("function"==typeof n?n.apply(this,arguments):n,r.extent),o=(0,i.Z)(u,a);function l(t){r.selection=1===t&&null===a?null:o(t),Y.call(e),s.brush()}return null!==u&&null!==a?l:l(1)})):e.each((function(){var e=this,s=arguments,i=e.__brush,u=t.input("function"==typeof n?n.apply(e,s):n,i.extent),a=j(e,s).beforestart();(0,o.e1)(e),i.selection=null===u?null:u,Y.call(e),a.start(r).brush(r).end(r)}))},S.clear=function(t,e){S.move(t,null,e)},q.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(t,e){return this.starting?(this.starting=!1,this.emit("start",t,e)):this.emit("brush",t),this},brush:function(t,e){return this.emit("brush",t,e),this},end:function(t,e){return 0==--this.active&&(delete this.state.emitter,this.emit("end",t,e)),this},emit:function(e,n,r){var s=(0,u.Z)(this.that).datum();M.call(e,this.that,new c(e,{sourceEvent:n,target:S,selection:t.output(this.state.selection),mode:r,dispatch:M}),s)}},S.extent=function(t){return arguments.length?(n="function"==typeof t?t:l(_(t)),S):n},S.filter=function(t){return arguments.length?(g="function"==typeof t?t:l(!!t),S):g},S.touchable=function(t){return arguments.length?(D="function"==typeof t?t:l(!!t),S):D},S.handleSize=function(t){return arguments.length?(O=+t,S):O},S.keyModifiers=function(t){return arguments.length?(I=!!t,S):I},S.on=function(){var t=M.on.apply(M,arguments);return t===M?S:t},S}}}]);
//# sourceMappingURL=5f94193bd4ff44c494fc.pnpm.d3-brush.js.map