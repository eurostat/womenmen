"use strict";(self.webpackChunkinternetactivities=self.webpackChunkinternetactivities||[]).push([[788],{VJKd:(t,i,n)=>{n.d(i,{Z:()=>x});var s=n("6txh"),h=n("JgGf"),_=n("Ft72");function e(t){return t.innerRadius}function o(t){return t.outerRadius}function a(t){return t.startAngle}function c(t){return t.endAngle}function r(t){return t&&t.padAngle}function l(t,i,n,s,h,e,o,a){var c=n-t,r=s-i,l=o-h,u=a-e,x=u*c-l*r;if(!(x*x<_.Ho))return[t+(x=(l*(i-e)-u*(t-h))/x)*c,i+x*r]}function u(t,i,n,s,h,e,o){var a=t-n,c=i-s,r=(o?e:-e)/(0,_._b)(a*a+c*c),l=r*c,u=-r*a,x=t+l,f=i+u,y=n+l,p=s+u,v=(x+y)/2,d=(f+p)/2,Z=y-x,b=p-f,T=Z*Z+b*b,w=h-e,g=x*p-y*f,N=(b<0?-1:1)*(0,_._b)((0,_.Fp)(0,w*w*T-g*g)),k=(g*b-Z*N)/T,m=(-g*Z-b*N)/T,E=(g*b+Z*N)/T,S=(-g*Z+b*N)/T,P=k-v,M=m-d,A=E-v,C=S-d;return P*P+M*M>A*A+C*C&&(k=E,m=S),{cx:k,cy:m,x01:-l,y01:-u,x11:k*(h/w-1),y11:m*(h/w-1)}}function x(){var t=e,i=o,n=(0,h.Z)(0),x=null,f=a,y=c,p=r,v=null;function d(){var h,e,o=+t.apply(this,arguments),a=+i.apply(this,arguments),c=f.apply(this,arguments)-_.ou,r=y.apply(this,arguments)-_.ou,d=(0,_.Wn)(r-c),Z=r>c;if(v||(v=h=(0,s.Z)()),a<o&&(e=a,a=o,o=e),a>_.Ho)if(d>_.BZ-_.Ho)v.moveTo(a*(0,_.mC)(c),a*(0,_.O$)(c)),v.arc(0,0,a,c,r,!Z),o>_.Ho&&(v.moveTo(o*(0,_.mC)(r),o*(0,_.O$)(r)),v.arc(0,0,o,r,c,Z));else{var b,T,w=c,g=r,N=c,k=r,m=d,E=d,S=p.apply(this,arguments)/2,P=S>_.Ho&&(x?+x.apply(this,arguments):(0,_._b)(o*o+a*a)),M=(0,_.VV)((0,_.Wn)(a-o)/2,+n.apply(this,arguments)),A=M,C=M;if(P>_.Ho){var R=(0,_.ZR)(P/o*(0,_.O$)(S)),H=(0,_.ZR)(P/a*(0,_.O$)(S));(m-=2*R)>_.Ho?(N+=R*=Z?1:-1,k-=R):(m=0,N=k=(c+r)/2),(E-=2*H)>_.Ho?(w+=H*=Z?1:-1,g-=H):(E=0,w=g=(c+r)/2)}var V=a*(0,_.mC)(w),O=a*(0,_.O$)(w),F=o*(0,_.mC)(k),G=o*(0,_.O$)(k);if(M>_.Ho){var $,Y=a*(0,_.mC)(g),B=a*(0,_.O$)(g),z=o*(0,_.mC)(N),J=o*(0,_.O$)(N);if(d<_.pi&&($=l(V,O,z,J,Y,B,F,G))){var X=V-$[0],W=O-$[1],q=Y-$[0],I=B-$[1],U=1/(0,_.O$)((0,_.Kh)((X*q+W*I)/((0,_._b)(X*X+W*W)*(0,_._b)(q*q+I*I)))/2),K=(0,_._b)($[0]*$[0]+$[1]*$[1]);A=(0,_.VV)(M,(o-K)/(U-1)),C=(0,_.VV)(M,(a-K)/(U+1))}}E>_.Ho?C>_.Ho?(b=u(z,J,V,O,a,C,Z),T=u(Y,B,F,G,a,C,Z),v.moveTo(b.cx+b.x01,b.cy+b.y01),C<M?v.arc(b.cx,b.cy,C,(0,_.fv)(b.y01,b.x01),(0,_.fv)(T.y01,T.x01),!Z):(v.arc(b.cx,b.cy,C,(0,_.fv)(b.y01,b.x01),(0,_.fv)(b.y11,b.x11),!Z),v.arc(0,0,a,(0,_.fv)(b.cy+b.y11,b.cx+b.x11),(0,_.fv)(T.cy+T.y11,T.cx+T.x11),!Z),v.arc(T.cx,T.cy,C,(0,_.fv)(T.y11,T.x11),(0,_.fv)(T.y01,T.x01),!Z))):(v.moveTo(V,O),v.arc(0,0,a,w,g,!Z)):v.moveTo(V,O),o>_.Ho&&m>_.Ho?A>_.Ho?(b=u(F,G,Y,B,o,-A,Z),T=u(V,O,z,J,o,-A,Z),v.lineTo(b.cx+b.x01,b.cy+b.y01),A<M?v.arc(b.cx,b.cy,A,(0,_.fv)(b.y01,b.x01),(0,_.fv)(T.y01,T.x01),!Z):(v.arc(b.cx,b.cy,A,(0,_.fv)(b.y01,b.x01),(0,_.fv)(b.y11,b.x11),!Z),v.arc(0,0,o,(0,_.fv)(b.cy+b.y11,b.cx+b.x11),(0,_.fv)(T.cy+T.y11,T.cx+T.x11),Z),v.arc(T.cx,T.cy,A,(0,_.fv)(T.y11,T.x11),(0,_.fv)(T.y01,T.x01),!Z))):v.arc(0,0,o,k,N,Z):v.lineTo(F,G)}else v.moveTo(0,0);if(v.closePath(),h)return v=null,h+""||null}return d.centroid=function(){var n=(+t.apply(this,arguments)+ +i.apply(this,arguments))/2,s=(+f.apply(this,arguments)+ +y.apply(this,arguments))/2-_.pi/2;return[(0,_.mC)(s)*n,(0,_.O$)(s)*n]},d.innerRadius=function(i){return arguments.length?(t="function"==typeof i?i:(0,h.Z)(+i),d):t},d.outerRadius=function(t){return arguments.length?(i="function"==typeof t?t:(0,h.Z)(+t),d):i},d.cornerRadius=function(t){return arguments.length?(n="function"==typeof t?t:(0,h.Z)(+t),d):n},d.padRadius=function(t){return arguments.length?(x=null==t?null:"function"==typeof t?t:(0,h.Z)(+t),d):x},d.startAngle=function(t){return arguments.length?(f="function"==typeof t?t:(0,h.Z)(+t),d):f},d.endAngle=function(t){return arguments.length?(y="function"==typeof t?t:(0,h.Z)(+t),d):y},d.padAngle=function(t){return arguments.length?(p="function"==typeof t?t:(0,h.Z)(+t),d):p},d.context=function(t){return arguments.length?(v=null==t?null:t,d):v},d}},"Adb/":(t,i,n)=>{n.d(i,{Z:()=>c});var s=n("6txh"),h=n("NrYb"),_=n("JgGf"),e=n("CFUE"),o=n("Zyc/"),a=n("/LuR");function c(t,i,n){var c=null,r=(0,_.Z)(!0),l=null,u=e.Z,x=null;function f(_){var e,o,a,f,y,p=(_=(0,h.Z)(_)).length,v=!1,d=new Array(p),Z=new Array(p);for(null==l&&(x=u(y=(0,s.Z)())),e=0;e<=p;++e){if(!(e<p&&r(f=_[e],e,_))===v)if(v=!v)o=e,x.areaStart(),x.lineStart();else{for(x.lineEnd(),x.lineStart(),a=e-1;a>=o;--a)x.point(d[a],Z[a]);x.lineEnd(),x.areaEnd()}v&&(d[e]=+t(f,e,_),Z[e]=+i(f,e,_),x.point(c?+c(f,e,_):d[e],n?+n(f,e,_):Z[e]))}if(y)return x=null,y+""||null}function y(){return(0,o.Z)().defined(r).curve(u).context(l)}return t="function"==typeof t?t:void 0===t?a.x:(0,_.Z)(+t),i="function"==typeof i?i:void 0===i?(0,_.Z)(0):(0,_.Z)(+i),n="function"==typeof n?n:void 0===n?a.y:(0,_.Z)(+n),f.x=function(i){return arguments.length?(t="function"==typeof i?i:(0,_.Z)(+i),c=null,f):t},f.x0=function(i){return arguments.length?(t="function"==typeof i?i:(0,_.Z)(+i),f):t},f.x1=function(t){return arguments.length?(c=null==t?null:"function"==typeof t?t:(0,_.Z)(+t),f):c},f.y=function(t){return arguments.length?(i="function"==typeof t?t:(0,_.Z)(+t),n=null,f):i},f.y0=function(t){return arguments.length?(i="function"==typeof t?t:(0,_.Z)(+t),f):i},f.y1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:(0,_.Z)(+t),f):n},f.lineX0=f.lineY0=function(){return y().x(t).y(i)},f.lineY1=function(){return y().x(t).y(n)},f.lineX1=function(){return y().x(c).y(i)},f.defined=function(t){return arguments.length?(r="function"==typeof t?t:(0,_.Z)(!!t),f):r},f.curve=function(t){return arguments.length?(u=t,null!=l&&(x=u(l)),f):u},f.context=function(t){return arguments.length?(null==t?l=x=null:x=u(l=t),f):l},f}},NrYb:(t,i,n)=>{function s(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}n.d(i,{Z:()=>s}),Array.prototype.slice},JgGf:(t,i,n)=>{function s(t){return function(){return t}}n.d(i,{Z:()=>s})},VaXY:(t,i,n)=>{function s(t,i,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+i)/6,(t._y0+4*t._y1+n)/6)}function h(t){this._context=t}function _(t){return new h(t)}n.d(i,{ZP:()=>_,fE:()=>h,xm:()=>s}),h.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:s(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:s(this,t,i)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}}},"20Xk":(t,i,n)=>{n.d(i,{Z:()=>e});var s=n("pxSl"),h=n("VaXY");function _(t){this._context=t}function e(t){return new _(t)}_.prototype={areaStart:s.Z,areaEnd:s.Z,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x2=t,this._y2=i;break;case 1:this._point=2,this._x3=t,this._y3=i;break;case 2:this._point=3,this._x4=t,this._y4=i,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+i)/6);break;default:(0,h.xm)(this,t,i)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}}},"t+EG":(t,i,n)=>{n.d(i,{Z:()=>_});var s=n("VaXY");function h(t){this._context=t}function _(t){return new h(t)}h.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+t)/6,h=(this._y0+4*this._y1+i)/6;this._line?this._context.lineTo(n,h):this._context.moveTo(n,h);break;case 3:this._point=4;default:(0,s.xm)(this,t,i)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}}},NJa3:(t,i,n)=>{n.d(i,{Z:()=>_});var s=n("VaXY");function h(t,i){this._basis=new s.fE(t),this._beta=i}h.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,i=this._y,n=t.length-1;if(n>0)for(var s,h=t[0],_=i[0],e=t[n]-h,o=i[n]-_,a=-1;++a<=n;)s=a/n,this._basis.point(this._beta*t[a]+(1-this._beta)*(h+s*e),this._beta*i[a]+(1-this._beta)*(_+s*o));this._x=this._y=null,this._basis.lineEnd()},point:function(t,i){this._x.push(+t),this._y.push(+i)}};const _=function t(i){function n(t){return 1===i?new s.fE(t):new h(t,i)}return n.beta=function(i){return t(+i)},n}(.85)},u6RG:(t,i,n)=>{function s(t,i,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-i),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function h(t,i){this._context=t,this._k=(1-i)/6}n.d(i,{ZP:()=>_,pC:()=>h,xm:()=>s}),h.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:s(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2,this._x1=t,this._y1=i;break;case 2:this._point=3;default:s(this,t,i)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const _=function t(i){function n(t){return new h(t,i)}return n.tension=function(i){return t(+i)},n}(0)},lF8b:(t,i,n)=>{n.d(i,{U:()=>_,Z:()=>e});var s=n("pxSl"),h=n("u6RG");function _(t,i){this._context=t,this._k=(1-i)/6}_.prototype={areaStart:s.Z,areaEnd:s.Z,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:(0,h.xm)(this,t,i)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const e=function t(i){function n(t){return new _(t,i)}return n.tension=function(i){return t(+i)},n}(0)},xWpI:(t,i,n)=>{n.d(i,{T:()=>h,Z:()=>_});var s=n("u6RG");function h(t,i){this._context=t,this._k=(1-i)/6}h.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:(0,s.xm)(this,t,i)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const _=function t(i){function n(t){return new h(t,i)}return n.tension=function(i){return t(+i)},n}(0)},RBdy:(t,i,n)=>{n.d(i,{Z:()=>o,x:()=>_});var s=n("Ft72"),h=n("u6RG");function _(t,i,n){var h=t._x1,_=t._y1,e=t._x2,o=t._y2;if(t._l01_a>s.Ho){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);h=(h*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,_=(_*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>s.Ho){var r=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a);e=(e*r+t._x1*t._l23_2a-i*t._l12_2a)/l,o=(o*r+t._y1*t._l23_2a-n*t._l12_2a)/l}t._context.bezierCurveTo(h,_,e,o,t._x2,t._y2)}function e(t,i){this._context=t,this._alpha=i}e.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){if(t=+t,i=+i,this._point){var n=this._x2-t,s=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3;default:_(this,t,i)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const o=function t(i){function n(t){return i?new e(t,i):new h.pC(t,0)}return n.alpha=function(i){return t(+i)},n}(.5)},"ai+S":(t,i,n)=>{n.d(i,{Z:()=>o});var s=n("lF8b"),h=n("pxSl"),_=n("RBdy");function e(t,i){this._context=t,this._alpha=i}e.prototype={areaStart:h.Z,areaEnd:h.Z,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,i){if(t=+t,i=+i,this._point){var n=this._x2-t,s=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:(0,_.x)(this,t,i)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const o=function t(i){function n(t){return i?new e(t,i):new s.U(t,0)}return n.alpha=function(i){return t(+i)},n}(.5)},XWgq:(t,i,n)=>{n.d(i,{Z:()=>e});var s=n("xWpI"),h=n("RBdy");function _(t,i){this._context=t,this._alpha=i}_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){if(t=+t,i=+i,this._point){var n=this._x2-t,s=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:(0,h.x)(this,t,i)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const e=function t(i){function n(t){return i?new _(t,i):new s.T(t,0)}return n.alpha=function(i){return t(+i)},n}(.5)},CFUE:(t,i,n)=>{function s(t){this._context=t}function h(t){return new s(t)}n.d(i,{Z:()=>h}),s.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:this._context.lineTo(t,i)}}}},tIkG:(t,i,n)=>{n.d(i,{Z:()=>_});var s=n("pxSl");function h(t){this._context=t}function _(t){return new h(t)}h.prototype={areaStart:s.Z,areaEnd:s.Z,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,i){t=+t,i=+i,this._point?this._context.lineTo(t,i):(this._point=1,this._context.moveTo(t,i))}}},ACVE:(t,i,n)=>{function s(t){return t<0?-1:1}function h(t,i,n){var h=t._x1-t._x0,_=i-t._x1,e=(t._y1-t._y0)/(h||_<0&&-0),o=(n-t._y1)/(_||h<0&&-0),a=(e*_+o*h)/(h+_);return(s(e)+s(o))*Math.min(Math.abs(e),Math.abs(o),.5*Math.abs(a))||0}function _(t,i){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-i)/2:i}function e(t,i,n){var s=t._x0,h=t._y0,_=t._x1,e=t._y1,o=(_-s)/3;t._context.bezierCurveTo(s+o,h+o*i,_-o,e-o*n,_,e)}function o(t){this._context=t}function a(t){this._context=new c(t)}function c(t){this._context=t}function r(t){return new o(t)}function l(t){return new a(t)}n.d(i,{Z:()=>r,s:()=>l}),o.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:e(this,this._t0,_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){var n=NaN;if(i=+i,(t=+t)!==this._x1||i!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3,e(this,_(this,n=h(this,t,i)),n);break;default:e(this,this._t0,n=h(this,t,i))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i,this._t0=n}}},(a.prototype=Object.create(o.prototype)).point=function(t,i){o.prototype.point.call(this,i,t)},c.prototype={moveTo:function(t,i){this._context.moveTo(i,t)},closePath:function(){this._context.closePath()},lineTo:function(t,i){this._context.lineTo(i,t)},bezierCurveTo:function(t,i,n,s,h,_){this._context.bezierCurveTo(i,t,s,n,_,h)}}},"9IB/":(t,i,n)=>{function s(t){this._context=t}function h(t){var i,n,s=t.length-1,h=new Array(s),_=new Array(s),e=new Array(s);for(h[0]=0,_[0]=2,e[0]=t[0]+2*t[1],i=1;i<s-1;++i)h[i]=1,_[i]=4,e[i]=4*t[i]+2*t[i+1];for(h[s-1]=2,_[s-1]=7,e[s-1]=8*t[s-1]+t[s],i=1;i<s;++i)n=h[i]/_[i-1],_[i]-=n,e[i]-=n*e[i-1];for(h[s-1]=e[s-1]/_[s-1],i=s-2;i>=0;--i)h[i]=(e[i]-h[i+1])/_[i];for(_[s-1]=(t[s]+h[s-1])/2,i=0;i<s-1;++i)_[i]=2*t[i+1]-h[i+1];return[h,_]}function _(t){return new s(t)}n.d(i,{Z:()=>_}),s.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,i=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],i[0]):this._context.moveTo(t[0],i[0]),2===n)this._context.lineTo(t[1],i[1]);else for(var s=h(t),_=h(i),e=0,o=1;o<n;++e,++o)this._context.bezierCurveTo(s[0][e],_[0][e],s[1][e],_[1][e],t[o],i[o]);(this._line||0!==this._line&&1===n)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,i){this._x.push(+t),this._y.push(+i)}}},"38Zz":(t,i,n)=>{function s(t,i){this._context=t,this._t=i}function h(t){return new s(t,.5)}function _(t){return new s(t,0)}function e(t){return new s(t,1)}n.d(i,{RN:()=>_,ZP:()=>h,cD:()=>e}),s.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,i),this._context.lineTo(t,i);else{var n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,i)}}this._x=t,this._y=i}}},"Zyc/":(t,i,n)=>{n.d(i,{Z:()=>a});var s=n("6txh"),h=n("NrYb"),_=n("JgGf"),e=n("CFUE"),o=n("/LuR");function a(t,i){var n=(0,_.Z)(!0),a=null,c=e.Z,r=null;function l(_){var e,o,l,u=(_=(0,h.Z)(_)).length,x=!1;for(null==a&&(r=c(l=(0,s.Z)())),e=0;e<=u;++e)!(e<u&&n(o=_[e],e,_))===x&&((x=!x)?r.lineStart():r.lineEnd()),x&&r.point(+t(o,e,_),+i(o,e,_));if(l)return r=null,l+""||null}return t="function"==typeof t?t:void 0===t?o.x:(0,_.Z)(t),i="function"==typeof i?i:void 0===i?o.y:(0,_.Z)(i),l.x=function(i){return arguments.length?(t="function"==typeof i?i:(0,_.Z)(+i),l):t},l.y=function(t){return arguments.length?(i="function"==typeof t?t:(0,_.Z)(+t),l):i},l.defined=function(t){return arguments.length?(n="function"==typeof t?t:(0,_.Z)(!!t),l):n},l.curve=function(t){return arguments.length?(c=t,null!=a&&(r=c(a)),l):c},l.context=function(t){return arguments.length?(null==t?a=r=null:r=c(a=t),l):a},l}},Ft72:(t,i,n)=>{n.d(i,{BZ:()=>x,Fp:()=>e,Ho:()=>r,Kh:()=>f,O$:()=>a,VV:()=>o,Wn:()=>s,ZR:()=>y,_b:()=>c,fv:()=>h,mC:()=>_,ou:()=>u,pi:()=>l});const s=Math.abs,h=Math.atan2,_=Math.cos,e=Math.max,o=Math.min,a=Math.sin,c=Math.sqrt,r=1e-12,l=Math.PI,u=l/2,x=2*l;function f(t){return t>1?0:t<-1?l:Math.acos(t)}function y(t){return t>=1?u:t<=-1?-u:Math.asin(t)}},pxSl:(t,i,n)=>{function s(){}n.d(i,{Z:()=>s})},RJeP:(t,i,n)=>{n.d(i,{Z:()=>a});var s=n("NrYb"),h=n("JgGf");function _(t,i){return i<t?-1:i>t?1:i>=t?0:NaN}function e(t){return t}var o=n("Ft72");function a(){var t=e,i=_,n=null,a=(0,h.Z)(0),c=(0,h.Z)(o.BZ),r=(0,h.Z)(0);function l(h){var _,e,l,u,x,f=(h=(0,s.Z)(h)).length,y=0,p=new Array(f),v=new Array(f),d=+a.apply(this,arguments),Z=Math.min(o.BZ,Math.max(-o.BZ,c.apply(this,arguments)-d)),b=Math.min(Math.abs(Z)/f,r.apply(this,arguments)),T=b*(Z<0?-1:1);for(_=0;_<f;++_)(x=v[p[_]=_]=+t(h[_],_,h))>0&&(y+=x);for(null!=i?p.sort((function(t,n){return i(v[t],v[n])})):null!=n&&p.sort((function(t,i){return n(h[t],h[i])})),_=0,l=y?(Z-f*T)/y:0;_<f;++_,d=u)e=p[_],u=d+((x=v[e])>0?x*l:0)+T,v[e]={data:h[e],index:_,value:x,startAngle:d,endAngle:u,padAngle:b};return v}return l.value=function(i){return arguments.length?(t="function"==typeof i?i:(0,h.Z)(+i),l):t},l.sortValues=function(t){return arguments.length?(i=t,n=null,l):i},l.sort=function(t){return arguments.length?(n=t,i=null,l):n},l.startAngle=function(t){return arguments.length?(a="function"==typeof t?t:(0,h.Z)(+t),l):a},l.endAngle=function(t){return arguments.length?(c="function"==typeof t?t:(0,h.Z)(+t),l):c},l.padAngle=function(t){return arguments.length?(r="function"==typeof t?t:(0,h.Z)(+t),l):r},l}},"/LuR":(t,i,n)=>{function s(t){return t[0]}function h(t){return t[1]}n.d(i,{x:()=>s,y:()=>h})}}]);
//# sourceMappingURL=5f94193bd4ff44c494fc.pnpm.d3-shape.js.map