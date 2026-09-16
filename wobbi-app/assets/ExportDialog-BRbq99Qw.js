import{_ as e,a as t,b as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,o as d,r as f,s as p,t as m,u as h,v as g,x as _}from"./index-nzJ2oBXc.js";var v={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};v.node;var y=g(v),b={name:`code-xml`,size:24,node:[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]],aliases:[`code-2`]};b.node;var x=g(b),S={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]};S.node;var C=g(S),w={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};w.node;var T=g(w),E={name:`file-pen-line`,size:24,node:[[`path`,{d:`M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z`,key:`ukzhwg`}],[`path`,{d:`M14.487 7.858A1 1 0 0 1 14 7V2`,key:`1klhew`}],[`path`,{d:`M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516`,key:`rxaxab`}],[`path`,{d:`M8 18h1`,key:`13wk12`}]],aliases:[`file-signature`]};E.node;var D=g(E),O={name:`image`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]};O.node;var k=g(O),A={name:`link-2`,size:24,node:[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]};A.node;var j=g(A),M=n(),N=Uint8Array,P=Uint16Array,ee=Int32Array,te=new N([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),F=new N([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),I=new N([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),L=function(e,t){for(var n=new P(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new ee(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},R=L(te,2),ne=R.b,re=R.r;ne[28]=258,re[258]=28;var z=L(F,0);z.b;for(var B=z.r,V=new P(32768),H=0;H<32768;++H){var U=(H&43690)>>1|(H&21845)<<1;U=(U&52428)>>2|(U&13107)<<2,U=(U&61680)>>4|(U&3855)<<4,V[H]=((U&65280)>>8|(U&255)<<8)>>1}for(var W=(function(e,t,n){for(var r=e.length,i=0,a=new P(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new P(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new P(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[V[d]>>c]=l}else for(s=new P(r),i=0;i<r;++i)e[i]&&(s[i]=V[o[e[i]-1]++]>>15-e[i]);return s}),G=new N(288),H=0;H<144;++H)G[H]=8;for(var H=144;H<256;++H)G[H]=9;for(var H=256;H<280;++H)G[H]=7;for(var H=280;H<288;++H)G[H]=8;for(var K=new N(32),H=0;H<32;++H)K[H]=5;var q=W(G,9,0),ie=W(K,5,0),ae=function(e){return(e+7)/8|0},oe=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new N(e.subarray(t,n))},se=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],J=function(e,t,n){var r=Error(t||se[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,J),!n)throw r;return r},Y=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},ce=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},le=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:ge,l:0};if(i==1){var o=new N(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new P(f+1),m=ue(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new N(p),l:m}},ue=function(e,t,n){return e.s==-1?Math.max(ue(e.l,t,n+1),ue(e.r,t,n+1)):t[e.s]=n},de=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new P(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},fe=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},pe=function(e,t,n){var r=n.length,i=ae(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},me=function(e,t,n,r,i,a,o,s,c,l,u){Y(t,u++,n),++i[256];for(var d=le(i,15),f=d.t,p=d.l,m=le(a,15),h=m.t,g=m.l,_=de(f),v=_.c,y=_.n,b=de(h),x=b.c,S=b.n,C=new P(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=le(C,7),E=T.t,D=T.l,O=19;O>4&&!E[I[O-1]];--O);var k=l+5<<3,A=fe(i,G)+fe(a,K)+o,j=fe(i,f)+fe(a,h)+o+14+3*O+fe(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=j)return pe(t,u,e.subarray(c,c+l));var M,N,ee,L;if(Y(t,u,1+(j<A)),u+=2,j<A){M=W(f,p,0),N=f,ee=W(h,g,0),L=h;var R=W(E,D,0);Y(t,u,y-257),Y(t,u+5,S-1),Y(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)Y(t,u+3*w,E[I[w]]);u+=3*O;for(var ne=[v,x],re=0;re<2;++re)for(var z=ne[re],w=0;w<z.length;++w){var B=z[w]&31;Y(t,u,R[B]),u+=E[B],B>15&&(Y(t,u,z[w]>>5&127),u+=z[w]>>12)}}else M=q,N=G,ee=ie,L=K;for(var w=0;w<s;++w){var V=r[w];if(V>255){var B=V>>18&31;ce(t,u,M[B+257]),u+=N[B+257],B>7&&(Y(t,u,V>>23&31),u+=te[B]);var H=V&31;ce(t,u,ee[H]),u+=L[H],H>3&&(ce(t,u,V>>5&8191),u+=F[H])}else ce(t,u,M[V]),u+=N[V]}return ce(t,u,M[256]),u+N[256]},he=new ee([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ge=new N(0),_e=function(e,t,n,r,i,a){var o=a.z||e.length,s=new N(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=he[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new P(32768),g=a.h||new P(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new ee(25e3),x=new P(288),S=new P(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,j=g[k];if(h[A]=j,g[k]=A,D<=T){var M=o-T;if((C>7e3||E>24576)&&(M>423||!l)){u=me(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var I=0;I<286;++I)x[I]=0;for(var I=0;I<30;++I)S[I]=0}var L=2,R=0,ne=p,z=A-j&32767;if(M>2&&k==y(T-z))for(var V=Math.min(f,M)-1,H=Math.min(32767,T),U=Math.min(258,M);z<=H&&--ne&&A!=j;){if(e[T+L]==e[T+L-z]){for(var W=0;W<U&&e[T+W]==e[T+W-z];++W);if(W>L){if(L=W,R=z,W>V)break;for(var G=Math.min(z,W-2),K=0,I=0;I<G;++I){var q=T-z+I&32767,ie=q-h[q]&32767;ie>K&&(K=ie,j=q)}}}A=j,j=h[A],z+=A-j&32767}if(R){b[E++]=268435456|re[L]<<18|B[R];var se=re[L]&31,J=B[R]&31;w+=te[se]+F[J],++x[257+se],++S[J],D=T+L,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=me(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var Y=T+65535;Y>=o&&(c[u/8|0]=l,Y=o),u=pe(c,u+1,e.subarray(T,Y))}a.i=o}return oe(s,0,r+ae(u)+i)},ve=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),ye=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=ve[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},be=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new N(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return _e(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},xe=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},X=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function Se(e,t){return be(e,t||{},0,0)}var Ce=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=xe(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[o]=[a,s]:(n[o+=`/`]=[new N(0),s],Ce(a,o,n,r))}},we=typeof TextEncoder<`u`&&new TextEncoder,Te=typeof TextDecoder<`u`&&new TextDecoder;try{Te.decode(ge,{stream:!0})}catch{}function Ee(e,t){if(t){for(var n=new N(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(we)return we.encode(e);for(var i=e.length,a=new N(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new N(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return oe(a,0,o)}var De=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&J(9),t+=r+4}return t},Oe=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=De(l);X(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&J(10),X(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(X(e,t,n.crc),X(e,t+4,a<0?-a-2:a),X(e,t+8,n.size)),X(e,t+12,c),X(e,t+14,d),t+=16,o!=null&&(X(e,t,u),X(e,t+6,n.attrs),X(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;X(e,t,+m),X(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},ke=function(e,t,n,r,i){X(e,t,101010256),X(e,t+8,n),X(e,t+10,n),X(e,t+12,r),X(e,t+16,i)};function Ae(e,t){t||={};var n={},r=[];Ce(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=Ee(o),f=d.length,p=l.comment,m=p&&Ee(p),h=m&&m.length,g=De(l.extra);f>65535&&J(11);var _=u?Se(c,l):c,v=_.length,y=ye();y.p(c),r.push(xe(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new N(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];Oe(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+De(d.extra);b.set(d.c,d.o+w),Oe(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return ke(b,i,r.length,S,x),b}var je=`import {
  DEFAULT_CUSTOM_SHAPE_POINTS,
  DEFAULT_CUSTOM_EYE_POINTS,
  DEFAULT_CUSTOM_IRIS_POINTS,
  DEFAULT_CUSTOM_HAIR_POINTS,
  DEFAULT_CUSTOM_NOSE_POINTS,
  DEFAULT_CUSTOM_BROW_POINTS,
  DEFAULT_CUSTOM_MOUTH_POINTS,
} from './custom-shape.js';

export const REACTIONS = [
  'idle',
  'happy',
  'thinking',
  'surprised',
  'sad',
  'error',
  'success',
  'loading',
  'sleeping',
  'singing',
];
export const SHAPES = [
  'wobbi',
  'ghost',
  'circle',
  'rounded-square',
  'cloud',
  'drop',
  'oval',
  'egg',
  'custom',
];
export const EYES = [
  'classic',
  'round',
  'capsules',
  'dots',
  'asymmetric',
  'pixel',
  'sleepy',
  'angry',
  'side-eye',
  'wink',
  'lashed',
  'bubble',
  'winged',
  'custom',
];
export const IRIS = [
  'dot',
  'glossy',
  'money',
  'heart',
  'star',
  'swirl',
  'rings',
  'pinwheel',
  'veil',
  'slit',
  'flower',
  'clock',
  'custom',
];
export const NOSES = [
  'none',
  'dot',
  'round',
  'button',
  'hook',
  'nostrils',
  'pointy',
  'muzzle',
  'moustache',
  'beak',
  'custom',
];
export const BROWS = [
  'none',
  'soft',
  'straight',
  'arched',
  'worried',
  'custom',
];
export const MOUTHS = [
  'none',
  'smile',
  'small',
  'open',
  'tooth',
  'grin',
  'pout',
  'fangs',
  'custom',
];
const NO_MOUTH_NOSES = new Set(['muzzle', 'beak']);
export const mouthsForNose = (nose) =>
  NO_MOUTH_NOSES.has(nose) ? ['none'] : MOUTHS;
export const DEPTHS = ['flat', 'soft', 'deep'];
export const HEADS = [
  'none',
  'tuft',
  'curl',
  'spiky',
  'bun',
  'fringe',
  'blaze',
  'mane',
  'wild-mane',
  'custom-hair',
  'bunny-ears',
  'ears',
  'round-ears',
  'elf-ears',
  'horns',
  'halo',
];
export const ACCESSORIES = [
  'none',
  'glasses',
  'sunglasses',
  'headphones',
  'bowtie',
  'monocle',
  'blush',
  'freckles',
  'bandage',
  'fox-tail',
  'cat-tail',
];
export const HEADS_BY_SHAPE = {
  wobbi: [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'round-ears',
    'horns',
    'halo',
  ],
  ghost: [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'round-ears',
    'horns',
    'halo',
  ],
  circle: HEADS,
  'rounded-square': [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'horns',
    'halo',
  ],
  cloud: [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'halo',
  ],
  drop: ['none', 'halo'],
  oval: HEADS,
  egg: HEADS,
  custom: HEADS,
};
export const ACCESSORIES_BY_SHAPE = {
  wobbi: ACCESSORIES,
  ghost: ACCESSORIES,
  circle: ACCESSORIES,
  'rounded-square': ACCESSORIES,
  cloud: ACCESSORIES,
  drop: ACCESSORIES,
  oval: ACCESSORIES,
  egg: ACCESSORIES,
  custom: ACCESSORIES,
};
export const headsForShape = (shape) => HEADS_BY_SHAPE[shape] || ['none'];
export const accessoriesForShape = (shape) =>
  ACCESSORIES_BY_SHAPE[shape] || ['none'];
export const MOVEMENTS = [
  'bounce',
  'squash',
  'tilt',
  'shake',
  'blink',
  'eye-movement',
  'mouth',
];
export const EASINGS = [
  'ease-out',
  'ease-in-out',
  'linear',
  'cubic-bezier(0.34,1.56,0.64,1)',
];
export const PROJECT_VERSION = 2;
export const resolveState = (state) =>
  REACTIONS.includes(state) ? state : 'idle';
export function normalizeSlug(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 64);
}
export function normalizeMotion(value = {}) {
  const clamp = (n, min, max, fallback) =>
    Number.isFinite(Number(n))
      ? Math.min(max, Math.max(min, Number(n)))
      : fallback;
  return {
    duration: clamp(value.duration, 200, 5000, 800),
    intensity: clamp(value.intensity, 0, 100, 60),
    easing: EASINGS.includes(value.easing) ? value.easing : 'ease-out',
    playback: value.playback === 'once' ? 'once' : 'loop',
    movements: (value.movements || [])
      .filter(
        (m, i, a) =>
          MOVEMENTS.includes(m.type) &&
          a.findIndex((x) => x.type === m.type) === i,
      )
      .map((m) => ({ type: m.type, enabled: !!m.enabled })),
  };
}
const LEGACY_EYE_REMAP = {
  glossy: { eyes: 'classic', iris: 'glossy' },
  money: { eyes: 'classic', iris: 'money' },
  heart: { eyes: 'classic', iris: 'heart' },
  star: { eyes: 'classic', iris: 'star' },
};
export function createConfig(rawOverrides = {}) {
  const legacyEyes = LEGACY_EYE_REMAP[rawOverrides.eyes];
  const overrides = legacyEyes
    ? {
        ...rawOverrides,
        eyes: legacyEyes.eyes,
        iris: rawOverrides.iris ?? legacyEyes.iris,
      }
    : rawOverrides;
  const moves = {
    idle: ['blink', 'eye-movement'],
    happy: ['bounce', 'squash', 'tilt', 'blink'],
    thinking: ['tilt', 'eye-movement'],
    surprised: ['squash', 'blink'],
    sad: ['tilt'],
    error: ['shake'],
    success: ['bounce', 'squash'],
    loading: ['tilt', 'blink'],
    sleeping: ['blink'],
    singing: ['bounce', 'mouth'],
  };
  const defaults = {
    version: PROJECT_VERSION,
    id: 'wobbi-original',
    slug: 'wobbi',
    name: 'Wobbi',
    componentName: 'Wobbi',
    preset: 'wobbi',
    shape: 'wobbi',
    eyes: 'classic',
    iris: 'dot',
    nose: 'none',
    brows: 'none',
    mouth: 'none',
    depth: 'soft',
    color: '#111218',
    mouthColor: '#111218',
    noseColor: '#111218',
    browColor: '#111218',
    pupilColor: '#111218',
    lashColor: '#111218',
    eyeOutlineColor: '#111218',
    eyeOutlineWidth: 0,
    headColor: '#111218',
    noseOutlineColor: '#111218',
    noseOutlineWidth: 0,
    browOutlineColor: '#111218',
    browOutlineWidth: 0,
    mouthOutlineColor: '#111218',
    mouthOutlineWidth: 0,
    headOutlineColor: '#111218',
    headOutlineWidth: 0,
    accessoryOutlineColor: '#111218',
    accessoryOutlineWidth: 0,
    head: 'none',
    accessory: 'none',
    accessoryColor: '#262331',
    accentColor: '#9270ff',
    eyeColor: '#ffffff',
    outlineColor: '#ffffff',
    outlineWidth: 0,
    irisSpin: false,
    background: { type: 'solid', color: '#f1edff' },
    customShape: { points: DEFAULT_CUSTOM_SHAPE_POINTS },
    customEyeShape: {
      symmetric: true,
      left: { points: DEFAULT_CUSTOM_EYE_POINTS },
      right: { points: DEFAULT_CUSTOM_EYE_POINTS },
    },
    customIris: { points: DEFAULT_CUSTOM_IRIS_POINTS },
    customHair: { points: DEFAULT_CUSTOM_HAIR_POINTS },
    customNose: { points: DEFAULT_CUSTOM_NOSE_POINTS },
    customBrows: {
      symmetric: true,
      left: { points: DEFAULT_CUSTOM_BROW_POINTS },
      right: { points: DEFAULT_CUSTOM_BROW_POINTS },
    },
    customMouth: { points: DEFAULT_CUSTOM_MOUTH_POINTS },
    size: 256,
    defaultState: 'idle',
    reactions: Object.fromEntries(
      REACTIONS.map((state) => [
        state,
        normalizeMotion({
          duration: state === 'idle' ? 2400 : 800,
          intensity: 60,
          movements: moves[state].map((type) => ({ type, enabled: true })),
        }),
      ]),
    ),
    export: {
      folder: 'src/components/mascot',
      framework: 'react',
    },
    accessibility: {
      respectReducedMotion: true,
      pauseOffscreen: true,
      label: 'Mascotte Wobbi',
    },
  };
  const knownOverrides = Object.fromEntries(
    Object.keys(defaults)
      .filter((key) => Object.hasOwn(overrides, key))
      .map((key) => [key, overrides[key]]),
  );
  return {
    ...defaults,
    ...knownOverrides,
    background: { ...defaults.background, ...overrides.background },
    customShape: { ...defaults.customShape, ...overrides.customShape },
    customEyeShape: {
      ...defaults.customEyeShape,
      ...overrides.customEyeShape,
      left: {
        ...defaults.customEyeShape.left,
        ...overrides.customEyeShape?.left,
      },
      right: {
        ...defaults.customEyeShape.right,
        ...overrides.customEyeShape?.right,
      },
    },
    customIris: { ...defaults.customIris, ...overrides.customIris },
    customHair: { ...defaults.customHair, ...overrides.customHair },
    customNose: { ...defaults.customNose, ...overrides.customNose },
    customBrows: {
      ...defaults.customBrows,
      ...overrides.customBrows,
      left: {
        ...defaults.customBrows.left,
        ...overrides.customBrows?.left,
      },
      right: {
        ...defaults.customBrows.right,
        ...overrides.customBrows?.right,
      },
    },
    customMouth: { ...defaults.customMouth, ...overrides.customMouth },
    export: { ...defaults.export, ...overrides.export },
    accessibility: { ...defaults.accessibility, ...overrides.accessibility },
    reactions: Object.fromEntries(
      REACTIONS.map((state) => [
        state,
        normalizeMotion(
          overrides.reactions?.[state] || defaults.reactions[state],
        ),
      ]),
    ),
  };
}

const CONFIG_KEYS = [
  'version',
  'id',
  'slug',
  'name',
  'componentName',
  'preset',
  'shape',
  'eyes',
  'iris',
  'nose',
  'brows',
  'mouth',
  'depth',
  'color',
  'mouthColor',
  'noseColor',
  'browColor',
  'pupilColor',
  'lashColor',
  'eyeOutlineColor',
  'eyeOutlineWidth',
  'headColor',
  'noseOutlineColor',
  'noseOutlineWidth',
  'browOutlineColor',
  'browOutlineWidth',
  'mouthOutlineColor',
  'mouthOutlineWidth',
  'headOutlineColor',
  'headOutlineWidth',
  'accessoryOutlineColor',
  'accessoryOutlineWidth',
  'head',
  'accessory',
  'accessoryColor',
  'accentColor',
  'eyeColor',
  'outlineColor',
  'outlineWidth',
  'irisSpin',
  'background',
  'customShape',
  'customEyeShape',
  'customIris',
  'customHair',
  'customNose',
  'customBrows',
  'customMouth',
  'size',
  'defaultState',
  'reactions',
  'export',
  'accessibility',
];
const hasOnlyKeys = (value, keys) =>
  value &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  Object.keys(value).every((key) => keys.includes(key));

export function validateConfig(config) {
  const errors = [];
  const color = /^#[\\da-f]{6}$/i;
  if (!config || typeof config !== 'object' || Array.isArray(config))
    return ['Configuration must be an object.'];
  if (!hasOnlyKeys(config, CONFIG_KEYS))
    errors.push('Configuration contains unsupported fields.');
  if (config.version !== PROJECT_VERSION)
    errors.push(\`Project version must be \${PROJECT_VERSION}.\`);
  if (
    typeof config.id !== 'string' ||
    config.id.length > 64 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(config.id)
  )
    errors.push('Project id must be a safe identifier.');
  if (
    typeof config.preset !== 'string' ||
    config.preset.length > 64 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(config.preset)
  )
    errors.push('Preset must be a safe identifier.');
  if (
    typeof config.componentName !== 'string' ||
    config.componentName.length > 50 ||
    !/^[A-Z][A-Za-z0-9]*$/.test(config.componentName)
  )
    errors.push(
      'Component name must be a valid PascalCase JavaScript identifier.',
    );
  if (
    typeof config.slug !== 'string' ||
    config.slug.length > 64 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(config.slug)
  )
    errors.push('Slug must use lowercase letters, numbers and hyphens.');
  if (
    typeof config.name !== 'string' ||
    !config.name.trim() ||
    config.name.length > 40 ||
    /[\\0\\r\\n]/.test(config.name)
  )
    errors.push('Mascot name must contain between 1 and 40 characters.');
  if (!SHAPES.includes(config.shape)) errors.push('Choose a supported shape.');
  if (!EYES.includes(config.eyes)) errors.push('Choose supported eyes.');
  if (!IRIS.includes(config.iris)) errors.push('Choose a supported iris.');
  if (!NOSES.includes(config.nose)) errors.push('Choose a supported nose.');
  if (!BROWS.includes(config.brows)) errors.push('Choose supported eyebrows.');
  if (!MOUTHS.includes(config.mouth)) errors.push('Choose a supported mouth.');
  if (!mouthsForNose(config.nose).includes(config.mouth))
    errors.push('A muzzle or beak cannot be combined with a mouth.');
  if (!DEPTHS.includes(config.depth)) errors.push('Choose supported depth.');
  if (!HEADS.includes(config.head)) errors.push('Invalid head detail.');
  if (!ACCESSORIES.includes(config.accessory))
    errors.push('Invalid accessory.');
  if (!headsForShape(config.shape).includes(config.head))
    errors.push('Choose a head detail compatible with the shape.');
  if (!accessoriesForShape(config.shape).includes(config.accessory))
    errors.push('Choose an accessory compatible with the shape.');
  if (
    !Number.isFinite(config.eyeOutlineWidth) ||
    config.eyeOutlineWidth < 0 ||
    config.eyeOutlineWidth > 6
  )
    errors.push('Invalid eye outline.');
  for (const key of [
    'noseOutlineWidth',
    'browOutlineWidth',
    'mouthOutlineWidth',
    'headOutlineWidth',
    'accessoryOutlineWidth',
  ]) {
    if (!Number.isFinite(config[key]) || config[key] < 0 || config[key] > 6)
      errors.push(\`Invalid \${key}.\`);
  }
  for (const key of [
    'color',
    'mouthColor',
    'noseColor',
    'browColor',
    'eyeColor',
    'outlineColor',
    'pupilColor',
    'lashColor',
    'eyeOutlineColor',
    'headColor',
    'noseOutlineColor',
    'browOutlineColor',
    'mouthOutlineColor',
    'headOutlineColor',
    'accessoryOutlineColor',
    'accessoryColor',
    'accentColor',
  ]) {
    if (key === 'lashColor' && config[key] === undefined) continue;
    if (!color.test(config[key])) errors.push(\`Invalid \${key}.\`);
  }
  if (
    !hasOnlyKeys(config.background, ['type', 'color']) ||
    !color.test(config.background?.color) ||
    !['solid', 'transparent'].includes(config.background?.type)
  )
    errors.push('Invalid background.');
  const isFinitePoint = (point) =>
    point &&
    typeof point === 'object' &&
    hasOnlyKeys(point, ['x', 'y']) &&
    Number.isFinite(point.x) &&
    Number.isFinite(point.y);
  const isValidPointArray = (points, min = 3, max = 24) =>
    Array.isArray(points) &&
    points.length >= min &&
    points.length <= max &&
    points.every(isFinitePoint);
  if (
    !config.customShape ||
    typeof config.customShape !== 'object' ||
    !hasOnlyKeys(config.customShape, ['points']) ||
    !isValidPointArray(config.customShape.points)
  )
    errors.push('Invalid custom shape.');
  const isValidEyeSidePoints = (side) =>
    side &&
    typeof side === 'object' &&
    hasOnlyKeys(side, ['points']) &&
    isValidPointArray(side.points);
  if (
    !config.customEyeShape ||
    typeof config.customEyeShape !== 'object' ||
    !hasOnlyKeys(config.customEyeShape, ['symmetric', 'left', 'right']) ||
    typeof config.customEyeShape.symmetric !== 'boolean' ||
    !isValidEyeSidePoints(config.customEyeShape.left) ||
    !isValidEyeSidePoints(config.customEyeShape.right)
  )
    errors.push('Invalid custom eye shape.');
  if (
    !config.customIris ||
    typeof config.customIris !== 'object' ||
    !hasOnlyKeys(config.customIris, ['points']) ||
    !isValidPointArray(config.customIris.points)
  )
    errors.push('Invalid custom iris.');
  if (
    !config.customHair ||
    typeof config.customHair !== 'object' ||
    !hasOnlyKeys(config.customHair, ['points']) ||
    !isValidPointArray(config.customHair.points)
  )
    errors.push('Invalid custom hair.');
  if (
    !config.customNose ||
    typeof config.customNose !== 'object' ||
    !hasOnlyKeys(config.customNose, ['points']) ||
    !isValidPointArray(config.customNose.points)
  )
    errors.push('Invalid custom nose.');
  if (
    !config.customBrows ||
    typeof config.customBrows !== 'object' ||
    !hasOnlyKeys(config.customBrows, ['symmetric', 'left', 'right']) ||
    typeof config.customBrows.symmetric !== 'boolean' ||
    !isValidEyeSidePoints(config.customBrows.left) ||
    !isValidEyeSidePoints(config.customBrows.right)
  )
    errors.push('Invalid custom brows.');
  if (
    !config.customMouth ||
    typeof config.customMouth !== 'object' ||
    !hasOnlyKeys(config.customMouth, ['points']) ||
    !isValidPointArray(config.customMouth.points)
  )
    errors.push('Invalid custom mouth.');
  if (typeof config.irisSpin !== 'boolean') errors.push('Invalid iris spin.');
  if (!Number.isFinite(config.size) || config.size < 48 || config.size > 512)
    errors.push('Size must be between 48 and 512.');
  if (
    !Number.isFinite(config.outlineWidth) ||
    config.outlineWidth < 0 ||
    config.outlineWidth > 16
  )
    errors.push('Outline must be between 0 and 16.');
  if (!REACTIONS.includes(config.defaultState))
    errors.push('Choose a supported default state.');
  if (
    !hasOnlyKeys(config.export, ['folder', 'framework']) ||
    typeof config.export?.folder !== 'string' ||
    !config.export.folder.trim() ||
    config.export.folder.length > 240 ||
    /[\\0<>:"|?*]/.test(config.export.folder) ||
    config.export.folder.split(/[\\\\/]/).some((p) => p === '..')
  )
    errors.push('Choose a safe export folder without parent traversal.');
  if (!['react', 'vue'].includes(config.export?.framework))
    errors.push('Choose React or Vue.js.');
  if (
    !hasOnlyKeys(config.accessibility, [
      'respectReducedMotion',
      'pauseOffscreen',
      'label',
    ]) ||
    typeof config.accessibility?.respectReducedMotion !== 'boolean' ||
    typeof config.accessibility?.pauseOffscreen !== 'boolean' ||
    typeof config.accessibility?.label !== 'string' ||
    !config.accessibility.label.trim() ||
    config.accessibility.label.length > 120 ||
    /[\\0\\r\\n]/.test(config.accessibility.label)
  )
    errors.push('Invalid accessibility settings.');
  const reactionKeys = Object.keys(config.reactions || {});
  if (
    reactionKeys.length !== REACTIONS.length ||
    REACTIONS.some((state) => !reactionKeys.includes(state))
  )
    errors.push('Every supported reaction must be configured exactly once.');
  for (const state of REACTIONS) {
    const motion = config.reactions?.[state];
    if (!motion) continue;
    if (
      !hasOnlyKeys(motion, [
        'duration',
        'intensity',
        'easing',
        'playback',
        'movements',
      ]) ||
      !Number.isFinite(motion.duration) ||
      motion.duration < 200 ||
      motion.duration > 5000 ||
      !Number.isFinite(motion.intensity) ||
      motion.intensity < 0 ||
      motion.intensity > 100 ||
      !EASINGS.includes(motion.easing) ||
      !['once', 'loop'].includes(motion.playback) ||
      !Array.isArray(motion.movements) ||
      motion.movements.some(
        (movement, index, movements) =>
          !MOVEMENTS.includes(movement?.type) ||
          !hasOnlyKeys(movement, ['type', 'enabled']) ||
          typeof movement.enabled !== 'boolean' ||
          movements.findIndex((item) => item?.type === movement.type) !== index,
      )
    )
      errors.push(\`Invalid \${state} reaction.\`);
  }
  return errors;
}
export function animationPlan(motion, reduced = false) {
  if (reduced) return [];
  const value = normalizeMotion(motion);
  const enabled = value.movements.filter((m) => m.enabled);
  const strength = value.intensity / 100;
  const transforms = {
    bounce: \`translateY(\${-18 * strength}px)\`,
    squash: \`scale(\${1 + 0.18 * strength}, \${1 - 0.16 * strength})\`,
    tilt: \`rotate(\${10 * strength}deg)\`,
    shake: \`translateX(\${9 * strength}px)\`,
    blink: \`scaleY(\${1 - 0.94 * strength})\`,
    'eye-movement': \`translate(\${7 * strength}px, \${-4 * strength}px)\`,
    mouth: \`scale(\${1 + 0.4 * strength}, \${1 + 0.3 * strength})\`,
  };
  return enabled.map((move, index) => ({
    type: move.type,
    target:
      move.type === 'blink' || move.type === 'eye-movement'
        ? 'eyes'
        : move.type === 'mouth'
          ? 'mouth'
          : move.type,
    keyframes: [
      { transform: 'none', offset: 0 },
      { transform: transforms[move.type], offset: 0.5 / enabled.length },
      { transform: 'none', offset: 1 / enabled.length },
      ...(enabled.length > 1 ? [{ transform: 'none', offset: 1 }] : []),
    ],
    options: {
      duration: value.duration,
      delay: (index * value.duration) / enabled.length,
      easing: value.easing,
      iterations: value.playback === 'loop' ? Infinity : 1,
      fill: 'none',
    },
  }));
}
`,Me=`// Closed Catmull-Rom spline converted to cubic beziers (standard 1/6 tension),
// so the outline stays smooth and blobby instead of a jagged polygon. Works
// for any ordered loop of points — the array order IS the loop traversal
// order (consecutive entries are consecutive perimeter neighbours).
function pointsToPath(points) {
  const count = points.length;
  let d = \`M\${points[0].x.toFixed(2)} \${points[0].y.toFixed(2)} \`;
  for (let index = 0; index < count; index += 1) {
    const previous = points[(index - 1 + count) % count];
    const current = points[index];
    const next = points[(index + 1) % count];
    const afterNext = points[(index + 2) % count];
    const controlX1 = current.x + (next.x - previous.x) / 6;
    const controlY1 = current.y + (next.y - previous.y) / 6;
    const controlX2 = next.x - (afterNext.x - current.x) / 6;
    const controlY2 = next.y - (afterNext.y - current.y) / 6;
    d += \`C\${controlX1.toFixed(2)} \${controlY1.toFixed(2)} \${controlX2.toFixed(2)} \${controlY2.toFixed(2)} \${next.x.toFixed(2)} \${next.y.toFixed(2)} \`;
  }
  return \`\${d.trim()}Z\`;
}

// The pre-freeform editors stored one radius per point, at a fixed angle
// implied by its index. Used only to compute pixel-identical defaults and
// to migrate shapes saved in that old format into free {x,y} points.
function legacyPolarOffset(index, count, radius) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
}

// Detects the old bare-number-per-point format and converts it to today's
// {x,y} offsets, reproducing the exact silhouette it used to render (same
// angle formula the renderer used to project it). Already-migrated (or
// freshly drawn) arrays are returned unchanged.
export function migrateLegacyPointsArray(points) {
  if (!Array.isArray(points) || points.length === 0) return points;
  if (typeof points[0] !== 'number') return points;
  return points.map((radius, index) =>
    legacyPolarOffset(index, points.length, radius),
  );
}

// Scales every point away from/toward the shape's own local origin (0,0) —
// used by each editor's uniform-scale slider.
export function scalePoints(points, factor) {
  return points.map((p) => ({ x: p.x * factor, y: p.y * factor }));
}

// Nearest point-to-segment distance, used to find where to splice a new
// point in when the user double-clicks the outline. Approximate against the
// closed polygon rather than the true Catmull-Rom curve — cheap, and close
// enough since the curve hugs the polygon closely for typical blob shapes.
function distanceToSegment(point, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared
    ? Math.max(
        0,
        Math.min(
          1,
          ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSquared,
        ),
      )
    : 0;
  const closestX = a.x + t * dx;
  const closestY = a.y + t * dy;
  return Math.hypot(point.x - closestX, point.y - closestY);
}

// Inserts \`point\` into \`points\` at the position between its two nearest
// perimeter neighbours, keeping the loop's traversal order intact.
export function insertPointOnSegment(points, point) {
  const count = points.length;
  let bestIndex = 0;
  let bestDistance = Infinity;
  for (let index = 0; index < count; index += 1) {
    const distance = distanceToSegment(
      point,
      points[index],
      points[(index + 1) % count],
    );
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  }
  const next = [...points];
  next.splice(bestIndex + 1, 0, point);
  return next;
}

// Removes the point at \`index\`, refusing to go below a closed loop's
// minimum of 3 points.
export function removePointAt(points, index) {
  if (points.length <= 3) return points;
  return points.filter((_, i) => i !== index);
}

// --- Custom body shape -------------------------------------------------

export const CUSTOM_SHAPE_POINT_COUNT = 10;
export const CUSTOM_SHAPE_CENTER = 128;

export const DEFAULT_CUSTOM_SHAPE_POINTS = Array.from(
  { length: CUSTOM_SHAPE_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_SHAPE_POINT_COUNT, 88),
);

export function customShapePointCoordinates(points) {
  return points.map((p) => ({
    x: CUSTOM_SHAPE_CENTER + p.x,
    y: CUSTOM_SHAPE_CENTER + p.y,
  }));
}

export function customShapeToPath(points) {
  return pointsToPath(customShapePointCoordinates(points));
}

// --- Custom eye globe shape ---------------------------------------------
// Same free-point technique as the body shape, but sized for a single eye
// and centred wherever that eye sits (each eye can even mirror the other).
// Points are stored as offsets from the eye's own local centre, so the same
// data plugs into either eye slot unchanged.

export const CUSTOM_EYE_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_EYE_POINTS = Array.from(
  { length: CUSTOM_EYE_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_EYE_POINT_COUNT, 20),
);

export function customEyePointCoordinates(
  points,
  centerX,
  centerY,
  mirrorX = false,
) {
  return points.map((p) => ({
    x: centerX + p.x * (mirrorX ? -1 : 1),
    y: centerY + p.y,
  }));
}

export function customEyeToPath(points, centerX, centerY, mirrorX = false) {
  return pointsToPath(
    customEyePointCoordinates(points, centerX, centerY, mirrorX),
  );
}

// Half-width/half-height bounding box of the shape's own points (centre-
// relative), used to keep the iris safely inside whatever custom globe the
// user draws. Points no longer sit at guaranteed compass positions once
// they can be freely dragged/added/removed, so this is a bounding-box
// approximation rather than reading fixed N/E/S/W indices.
export function customEyeExtent(points) {
  return {
    width: Math.max(...points.map((p) => Math.abs(p.x))),
    height: Math.max(...points.map((p) => Math.abs(p.y))),
  };
}

// --- Custom iris shape ---------------------------------------------------
// The iris/pupil mark sits inside a globe whose own size varies wildly (a
// tiny "dots" globe vs. a large "classic" one), so its points are stored as
// ratios of the globe's own half-extent (x and y each independently) rather
// than absolute pixels. At render time they are scaled by whatever globe
// currently hosts them.

export const CUSTOM_IRIS_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_IRIS_POINTS = Array.from(
  { length: CUSTOM_IRIS_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_IRIS_POINT_COUNT, 0.62),
);

export function customIrisPointCoordinates(points, centerX, centerY, scale) {
  return points.map((p) => ({
    x: centerX + p.x * scale,
    y: centerY + p.y * scale,
  }));
}

export function customIrisToPath(points, centerX, centerY, scale) {
  return pointsToPath(
    customIrisPointCoordinates(points, centerX, centerY, scale),
  );
}

// --- Custom hair shape ----------------------------------------------------
// Same free-point technique as the body shape, but with a much wider usual
// range and, unlike the preset hairstyles, drawn on top of the body so the
// user has total freedom over height and width with no risk of it being
// clipped by the body silhouette.

export const CUSTOM_HAIR_POINT_COUNT = 10;

export const DEFAULT_CUSTOM_HAIR_POINTS = Array.from(
  { length: CUSTOM_HAIR_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_HAIR_POINT_COUNT, 40),
);

export function customHairPointCoordinates(points, centerX, centerY) {
  return points.map((p) => ({
    x: centerX + p.x,
    y: centerY + p.y,
  }));
}

export function customHairToPath(points, centerX, centerY) {
  return pointsToPath(customHairPointCoordinates(points, centerX, centerY));
}

// --- Custom nose shape -----------------------------------------------------
// A single free-point blob centred on the nose's own anchor point, same
// technique as the body shape.

export const CUSTOM_NOSE_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_NOSE_POINTS = Array.from(
  { length: CUSTOM_NOSE_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_NOSE_POINT_COUNT, 8),
);

export function customNosePointCoordinates(points, centerX, centerY) {
  return points.map((p) => ({
    x: centerX + p.x,
    y: centerY + p.y,
  }));
}

export function customNoseToPath(points, centerX, centerY) {
  return pointsToPath(customNosePointCoordinates(points, centerX, centerY));
}

// --- Custom brow shape ------------------------------------------------------
// Same free-point technique as the eye globe: a small blob per side, stored
// relative to its own local centre so it can be re-centred (and mirrored)
// over either eyebrow at render time.

export const CUSTOM_BROW_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_BROW_POINTS = Array.from(
  { length: CUSTOM_BROW_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_BROW_POINT_COUNT, 14),
);

export function customBrowPointCoordinates(
  points,
  centerX,
  centerY,
  mirrorX = false,
) {
  return points.map((p) => ({
    x: centerX + p.x * (mirrorX ? -1 : 1),
    y: centerY + p.y,
  }));
}

export function customBrowToPath(points, centerX, centerY, mirrorX = false) {
  return pointsToPath(
    customBrowPointCoordinates(points, centerX, centerY, mirrorX),
  );
}

// --- Custom mouth shape ------------------------------------------------------
// A single free-point blob centred on the mouth's own anchor point, same
// technique as the body shape.

export const CUSTOM_MOUTH_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_MOUTH_POINTS = Array.from(
  { length: CUSTOM_MOUTH_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_MOUTH_POINT_COUNT, 10),
);

export function customMouthPointCoordinates(points, centerX, centerY) {
  return points.map((p) => ({
    x: centerX + p.x,
    y: centerY + p.y,
  }));
}

export function customMouthToPath(points, centerX, centerY) {
  return pointsToPath(customMouthPointCoordinates(points, centerX, centerY));
}
`,Ne=`// Shared SVG geometry. Every eye family retains its identity in each expression.
export const BODY_PATHS = {
  wobbi:
    'M42 167 C36 126 70 75 113 52 C157 25 186 40 211 79 C233 112 242 173 217 198 C187 230 90 226 58 201 C46 191 43 180 42 167Z',
  ghost:
    'M43 173 C43 90 70 40 128 40 C186 40 213 91 213 173 Q212 205 190 192 Q169 222 148 197 Q126 225 106 199 Q81 216 67 192 Q39 208 43 173Z',
  circle: 'M218 131 A90 90 0 1 1 38 131 A90 90 0 1 1 218 131Z',
  'rounded-square':
    'M72 43 H184 Q215 43 215 74 V186 Q215 217 184 217 H72 Q41 217 41 186 V74 Q41 43 72 43Z',
  cloud:
    'M57 189 C13 169 21 124 49 112 C33 70 79 43 109 66 C142 25 194 52 195 87 C241 89 251 144 220 164 C235 211 177 234 149 213 C111 239 70 222 57 189Z',
  drop: 'M134 29 C141 85 217 104 217 162 C217 240 41 241 41 162 C41 105 109 85 134 29Z',
  oval: 'M204 130 C204 191 174 228 128 228 C82 228 52 191 52 130 C52 67 82 28 128 28 C174 28 204 67 204 130Z',
  egg: 'M128 27 C160 27 180 62 191 104 C207 164 197 205 164 224 C144 236 112 236 92 224 C59 205 49 164 65 104 C76 62 96 27 128 27Z',
};

export const LASHED_EYES = ['sleepy', 'angry', 'wink', 'lashed'];

// Attachment points are tuned per silhouette instead of assuming every body is
// the same circle. Head details use the crown, while glasses and headphones use
// the actual width around the face.
export const SHAPE_FITS = {
  wobbi: {
    faceY: 0,
    crownX: 128,
    crownY: 55,
    crownHalf: 72,
    sideLeft: 43,
    sideRight: 217,
    templeHalf: 72,
    cheekX: [70, 186],
    cheekRadiusX: 14,
    roundEarX: [84, 192],
    roundEarY: [65, 58],
    hornHalf: 48,
    hornX: [80, 198],
  },
  ghost: {
    faceY: 0,
    crownX: 128,
    crownY: 53,
    crownHalf: 68,
    sideLeft: 43,
    sideRight: 213,
    templeHalf: 77,
    cheekX: [69, 187],
    cheekRadiusX: 14,
  },
  circle: {
    faceY: 0,
    crownX: 128,
    crownY: 53,
    crownHalf: 67,
    sideLeft: 38,
    sideRight: 218,
    templeHalf: 78,
    cheekX: [68, 188],
    cheekRadiusX: 15,
  },
  'rounded-square': {
    faceY: 0,
    crownX: 128,
    crownY: 54,
    crownHalf: 66,
    sideLeft: 41,
    sideRight: 215,
    templeHalf: 76,
    cheekX: [66, 190],
    cheekRadiusX: 15,
  },
  cloud: {
    faceY: 2,
    crownX: 135,
    crownY: 68,
    crownHalf: 78,
    sideLeft: 28,
    sideRight: 232,
    templeHalf: 82,
    cheekX: [62, 194],
    cheekRadiusX: 15,
  },
  drop: {
    faceY: 19,
    crownX: 133,
    crownY: 83,
    crownHalf: 46,
    sideLeft: 42,
    sideRight: 217,
    templeHalf: 67,
    cheekX: [69, 187],
    cheekRadiusX: 14,
  },
  oval: {
    faceY: 0,
    crownX: 128,
    crownY: 39,
    crownHalf: 55,
    sideLeft: 52,
    sideRight: 204,
    templeHalf: 64,
    glassesArms: false,
    cheekX: [72, 184],
    cheekRadiusX: 12,
  },
  egg: {
    faceY: 6,
    crownX: 128,
    crownY: 41,
    crownHalf: 49,
    sideLeft: 57,
    sideRight: 199,
    templeHalf: 61,
    glassesArms: false,
    cheekX: [73, 183],
    cheekRadiusX: 11,
  },
  custom: {
    faceY: 0,
    crownX: 128,
    crownY: 53,
    crownHalf: 67,
    sideLeft: 38,
    sideRight: 218,
    templeHalf: 78,
    cheekX: [68, 188],
    cheekRadiusX: 15,
  },
};

export function closedEyeColor(bodyColor) {
  const channels = bodyColor
    .slice(1)
    .match(/.{2}/g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4),
    );
  const luminance =
    channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  return luminance < 0.179 ? '#ffffff' : '#111218';
}
`,Pe=`export function renderEffects(kit, config, state) {
  const { n, path, ellipse, group } = kit;
  return [
    state === 'thinking'
      ? n(
          'g',
          { 'data-part': 'reaction-effect', 'data-effect': 'idea' },
          n(
            'text',
            {
              x: 211,
              y: 70,
              fontSize: 51,
              textAnchor: 'middle',
              fontFamily:
                'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif',
              style: {
                filter: 'drop-shadow(0 5px 5px rgb(34 23 61 / 28%))',
              },
              'data-idea-bulb': true,
            },
            '💡',
          ),
        )
      : null,
    state === 'sleeping'
      ? n(
          'g',
          { 'data-part': 'reaction-effect', 'data-effect': 'sleep' },
          n(
            'text',
            {
              x: 185,
              y: 79,
              fill: config.accentColor,
              fontSize: 24,
              fontWeight: 900,
              'data-sleep-z': 0,
            },
            'Z',
          ),
          n(
            'text',
            {
              x: 207,
              y: 55,
              fill: config.accentColor,
              fontSize: 19,
              fontWeight: 900,
              'data-sleep-z': 1,
            },
            'Z',
          ),
          n(
            'text',
            {
              x: 225,
              y: 35,
              fill: config.accentColor,
              fontSize: 14,
              fontWeight: 900,
              'data-sleep-z': 2,
            },
            'Z',
          ),
        )
      : null,
    state === 'singing'
      ? n(
          'g',
          { 'data-part': 'reaction-effect', 'data-effect': 'singing' },
          path('M197 82 V51 L221 45 V73', {
            fill: 'none',
            stroke: config.accentColor,
            strokeWidth: 5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          ellipse(191, 84, 8, 6, { fill: config.accentColor }),
          ellipse(215, 75, 8, 6, { fill: config.accentColor }),
        )
      : null,
    state === 'loading'
      ? group(
          'indicator',
          ...[0, 1, 2].map((i) =>
            ellipse(112 + i * 16, 258, 3, 3, {
              fill: config.accentColor,
              'data-wait-dot': i,
            }),
          ),
        )
      : null,
    state === 'success'
      ? group(
          'spark',
          path(
            'M223 52 L226 62 L236 65 L226 68 L223 78 L220 68 L210 65 L220 62Z',
            { fill: config.accentColor },
          ),
        )
      : null,
  ];
}
`,Fe=`import {
  BODY_PATHS,
  LASHED_EYES,
  SHAPE_FITS,
  closedEyeColor,
} from './render-model.js';
import { renderEffects } from './render-effects.js';
import {
  customShapeToPath,
  customEyeToPath,
  customEyeExtent,
  customIrisToPath,
  customHairToPath,
  customNoseToPath,
  customBrowToPath,
  customMouthToPath,
} from './custom-shape.js';

const EYE_SYMBOLS = { money: '$', heart: '♥', star: '★' };

export function renderParts(h, config, state = 'idle') {
  let key = 0;
  const n = (tag, props, ...children) =>
    h(tag, { key: key++, ...props }, ...children);
  const path = (d, props = {}) => n('path', { d, ...props });
  const ellipse = (cx, cy, rx, ry, props = {}) =>
    n('ellipse', { cx, cy, rx, ry, ...props });
  const group = (part, ...children) =>
    n('g', { 'data-part': part, 'data-motion': part }, ...children);
  const happy = ['happy', 'success'].includes(state);
  const startled = state === 'surprised';
  const fearful = state === 'sad';
  const thinking = state === 'thinking';
  const sleeping = state === 'sleeping';
  const singing = state === 'singing';
  const angry = state === 'error' || config.eyes === 'angry';
  const shape =
    config.shape === 'custom'
      ? customShapeToPath(config.customShape.points)
      : BODY_PATHS[config.shape] || BODY_PATHS.wobbi;
  const fit = SHAPE_FITS[config.shape] || SHAPE_FITS.wobbi;
  const depthProfile =
    config.depth === 'deep'
      ? { highlight: 0.42, mid: 0.1, shade: 0.11, edge: 0.4 }
      : { highlight: 0.19, mid: 0.04, shade: 0.035, edge: 0.17 };
  const depthId = \`wobbi-depth-\${config.shape}-\${config.color.slice(1)}-\${config.depth}\`;
  const depthDefinition =
    config.depth === 'flat'
      ? null
      : n(
          'defs',
          null,
          n(
            'radialGradient',
            {
              id: depthId,
              gradientUnits: 'userSpaceOnUse',
              cx: 77,
              cy: 46,
              r: 225,
              fx: 61,
              fy: 31,
            },
            n('stop', {
              offset: '0%',
              stopColor: '#ffffff',
              stopOpacity: depthProfile.highlight,
            }),
            n('stop', {
              offset: '44%',
              stopColor: '#ffffff',
              stopOpacity: depthProfile.mid,
            }),
            n('stop', {
              offset: '72%',
              stopColor: '#120b20',
              stopOpacity: depthProfile.shade,
            }),
            n('stop', {
              offset: '100%',
              stopColor: '#120b20',
              stopOpacity: depthProfile.edge,
            }),
          ),
        );
  const faceY = fit.faceY;
  const pupilInk = config.pupilColor;
  const mouthInk = config.mouthColor || config.pupilColor;
  const closedEyeInk = closedEyeColor(config.color);
  const eyeStroke = {
    stroke: config.eyeOutlineColor,
    strokeWidth: config.eyeOutlineWidth,
  };
  const eyes = [0, 1].map((i) => {
    const type = config.eyes;
    const iris = config.iris;
    const x = i ? 160 : 102;
    const y = (config.shape === 'wobbi' ? (i ? 117 : 127) : 123) + faceY;
    const dots = type === 'dots';
    const pixel = type === 'pixel';
    const custom = type === 'custom';
    const customEyePoints = custom
      ? i && !config.customEyeShape.symmetric
        ? config.customEyeShape.right.points
        : config.customEyeShape.left.points
      : null;
    const customEyeMirror =
      custom && i === 1 && config.customEyeShape.symmetric;
    const customExtent = custom
      ? customEyeExtent(customEyePoints)
      : { width: 0, height: 0 };
    const symbol = EYE_SYMBOLS[iris];
    // When enabled, every iris/pupil style spins continuously in place; the
    // spin lives on an inner group nested inside 'pupil' (rather than on
    // 'pupil' itself) so it never fights with the gaze-follow transform the
    // motion runtime writes to that same attribute every frame.
    const irisSpinTransform = config.irisSpin
      ? n('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          from: \`0 \${x} \${y}\`,
          to: \`360 \${x} \${y}\`,
          dur: '3s',
          repeatCount: 'indefinite',
        })
      : null;
    const pupilGroup = (...children) =>
      group('pupil', n('g', {}, ...children, irisSpinTransform));
    const capsule = type === 'capsules' || type === 'asymmetric';
    const wink = type === 'wink' && i === 1 && !startled;
    const hasLashes = LASHED_EYES.includes(type);
    const configuredLashInk = config.lashColor || closedEyeInk;
    const lashInk =
      hasLashes &&
      configuredLashInk.toLowerCase() !== config.color.toLowerCase()
        ? configuredLashInk
        : closedEyeInk;
    const lashData = hasLashes ? { 'data-eye-lash': type } : {};
    const width = custom
      ? customExtent.width
      : dots
        ? 7
        : pixel
          ? 12
          : type === 'asymmetric' && i
            ? 7
            : capsule
              ? 10
              : type === 'round' ||
                  type === 'lashed' ||
                  type === 'bubble' ||
                  type === 'winged'
                ? 21
                : type === 'side-eye'
                  ? 24
                  : 22;
    const height = custom
      ? customExtent.height
      : startled
        ? 30
        : type === 'asymmetric' && i
          ? 13
          : dots
            ? 8
            : pixel
              ? 17
              : type === 'round' ||
                  type === 'lashed' ||
                  type === 'bubble' ||
                  type === 'winged'
                ? 21
                : type === 'side-eye'
                  ? 25
                  : 29;
    const eyeParts = [];
    if (sleeping) {
      eyeParts.push(
        path(
          \`M\${x - width + 2} \${y - 2} Q\${x} \${y + 8} \${x + width - 2} \${y - 2}\`,
          {
            fill: 'none',
            stroke: lashInk,
            strokeWidth: 6,
            strokeLinecap: 'round',
            'data-eye-lid': 'sleeping',
            ...lashData,
          },
        ),
      );
    } else if (wink && !startled) {
      eyeParts.push(
        path(\`M\${x - 17} \${y + 1} Q\${x} \${y + 14} \${x + 17} \${y - 1}\`, {
          fill: 'none',
          stroke: lashInk,
          strokeWidth: 6,
          strokeLinecap: 'round',
          ...lashData,
        }),
      );
    } else if (happy) {
      const d = pixel
        ? \`M\${x - 12} \${y + 3} V\${y - 8} H\${x + 12} V\${y + 3}\`
        : \`M\${x - width} \${y + 3} Q\${x} \${y - (dots ? 10 : 21)} \${x + width} \${y + 3}\`;
      eyeParts.push(
        path(d, {
          fill: 'none',
          stroke: lashInk,
          strokeWidth: dots ? 5 : 8,
          strokeLinecap: pixel ? 'square' : 'round',
          ...lashData,
        }),
      );
    } else {
      if (type === 'bubble') {
        // A smaller circle peeking out from behind the main globe, giving
        // an overlapping "double bubble" silhouette.
        const bumpDir = i ? 1 : -1;
        eyeParts.push(
          ellipse(
            x + bumpDir * width * 0.72,
            y - height * 0.15,
            width * 0.5,
            height * 0.5,
            { fill: config.eyeColor, ...eyeStroke },
          ),
        );
      }
      eyeParts.push(
        custom
          ? path(customEyeToPath(customEyePoints, x, y, customEyeMirror), {
              fill: config.eyeColor,
              'data-part': 'eye-white',
              ...eyeStroke,
            })
          : pixel
            ? n('rect', {
                x: x - width,
                y: y - height,
                width: width * 2,
                height: height * 2,
                fill: config.eyeColor,
                'data-part': 'eye-white',
                ...eyeStroke,
              })
            : ellipse(x, y, width, height, {
                fill: config.eyeColor,
                'data-part': 'eye-white',
                ...eyeStroke,
              }),
      );
      if (type === 'lashed') {
        // Three upward lash spikes fanning off the top of the globe,
        // sized off this globe's own extent so they scale with it.
        eyeParts.push(
          ...[-1, 0, 1].map((offset) => {
            const spikeX = x + offset * width * 0.45;
            const baseY = y - height * 0.78;
            const tipX = spikeX + offset * width * 0.25;
            const tipY = y - height - Math.max(6, height * 0.5);
            return path(
              \`M\${spikeX - 1.6} \${baseY} L\${tipX} \${tipY} L\${spikeX + 1.6} \${baseY}Z\`,
              { fill: lashInk, 'data-eye-lash': type },
            );
          }),
        );
      }
      if (type === 'winged') {
        // A small triangular flick at the globe's outer top corner, giving
        // a cat-eye / winged-liner silhouette.
        const wingDir = i ? 1 : -1;
        const wingBaseX = x + wingDir * width * 0.75;
        const wingBaseY = y - height * 0.35;
        const wingTipX = x + wingDir * (width + 10);
        const wingTipY = y - height * 0.9;
        eyeParts.push(
          path(
            \`M\${wingBaseX} \${wingBaseY - 3} L\${wingTipX} \${wingTipY} L\${wingBaseX + wingDir * 4} \${wingBaseY + 4}Z\`,
            { fill: config.eyeColor, ...eyeStroke },
          ),
        );
      }
      if (symbol) {
        // Glyph is always sized off this globe's own extent, so it can never
        // spill outside the eye-white shape behind it, whatever globe shape
        // and glyph are paired.
        const fontSize = Math.min(
          20,
          Math.max(8, Math.min(width, height) * 1.3),
        );
        eyeParts.push(
          n(
            'g',
            {},
            n(
              'text',
              {
                x,
                y: y + fontSize * 0.07,
                fill: pupilInk,
                fontSize,
                fontWeight: 900,
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                'data-eye-symbol': iris,
              },
              symbol,
            ),
            irisSpinTransform,
          ),
        );
      } else if (iris === 'swirl') {
        // A generic "manga power eye" motif: a coloured disc with small
        // comma marks radiating from the centre. The tomoe pattern is a
        // traditional Japanese heraldic symbol, not any single work's
        // trademark, and is sized off this globe's own extent so it can
        // never spill outside it.
        const discRadius = Math.min(width, height) * 0.62;
        const markInk = closedEyeColor(pupilInk);
        const markCount = 3;
        const headOffset = discRadius * 0.48;
        const headR = discRadius * 0.22;
        const marks = Array.from({ length: markCount }, (_, markIndex) => {
          const angleDeg = (markIndex / markCount) * 360;
          const tailPath = \`M\${x} \${y - headOffset} Q\${x + discRadius * 0.42} \${y - headOffset * 0.15} \${x + discRadius * 0.16} \${y + headOffset * 0.62} Q\${x - discRadius * 0.05} \${y + headOffset * 0.28} \${x} \${y - headOffset}Z\`;
          return n(
            'g',
            { transform: \`rotate(\${angleDeg} \${x} \${y})\` },
            path(tailPath, { fill: markInk }),
            ellipse(x, y - headOffset, headR, headR, { fill: markInk }),
          );
        });
        eyeParts.push(
          pupilGroup(
            ellipse(x, y, discRadius, discRadius, { fill: pupilInk }),
            config.depth === 'flat'
              ? null
              : ellipse(x, y, discRadius, discRadius, {
                  fill: '#000000',
                  opacity: 0.12,
                  pointerEvents: 'none',
                }),
            ...marks,
            ellipse(x, y, discRadius, discRadius, {
              fill: 'none',
              stroke: markInk,
              strokeWidth: Math.max(1, discRadius * 0.08),
            }),
          ),
        );
      } else if (iris === 'rings') {
        // A generic "rippled eye" motif: concentric rings around a small
        // centre dot. Sized off this globe's own extent so the rings can
        // never spill outside it.
        const discRadius = Math.min(width, height) * 0.62;
        const ringInk = closedEyeColor(pupilInk);
        const ringCount = 3;
        const rings = Array.from({ length: ringCount }, (_, ringIndex) => {
          const r = discRadius * ((ringIndex + 1) / (ringCount + 1));
          return ellipse(x, y, r, r, {
            fill: 'none',
            stroke: ringInk,
            strokeWidth: Math.max(1, discRadius * 0.09),
          });
        });
        eyeParts.push(
          pupilGroup(
            ellipse(x, y, discRadius, discRadius, { fill: pupilInk }),
            config.depth === 'flat'
              ? null
              : ellipse(x, y, discRadius, discRadius, {
                  fill: '#000000',
                  opacity: 0.12,
                  pointerEvents: 'none',
                }),
            ...rings,
            ellipse(x, y, discRadius * 0.14, discRadius * 0.14, {
              fill: ringInk,
            }),
          ),
        );
      } else if (iris === 'pinwheel') {
        // A generic "star-burst eye" motif: angular blades radiating from
        // the centre, sized off this globe's own extent so they can never
        // spill outside it.
        const discRadius = Math.min(width, height) * 0.62;
        const markInk = closedEyeColor(pupilInk);
        const bladeCount = 4;
        const bladeLen = discRadius * 0.85;
        const bladeHalf = discRadius * 0.22;
        const blades = Array.from({ length: bladeCount }, (_, bladeIndex) => {
          const angleDeg = (bladeIndex / bladeCount) * 360;
          const bladePath = \`M\${x} \${y} L\${x - bladeHalf} \${y - bladeLen} Q\${x} \${y - bladeLen - bladeHalf * 0.5} \${x + bladeHalf} \${y - bladeLen} Z\`;
          return n(
            'g',
            { transform: \`rotate(\${angleDeg} \${x} \${y})\` },
            path(bladePath, { fill: markInk }),
          );
        });
        eyeParts.push(
          pupilGroup(
            ellipse(x, y, discRadius, discRadius, { fill: pupilInk }),
            config.depth === 'flat'
              ? null
              : ellipse(x, y, discRadius, discRadius, {
                  fill: '#000000',
                  opacity: 0.12,
                  pointerEvents: 'none',
                }),
            ...blades,
            ellipse(x, y, discRadius * 0.16, discRadius * 0.16, {
              fill: markInk,
            }),
            ellipse(x, y, discRadius, discRadius, {
              fill: 'none',
              stroke: markInk,
              strokeWidth: Math.max(1, discRadius * 0.08),
            }),
          ),
        );
      } else if (iris === 'veil') {
        // A generic "veined eye" motif: a pale disc with fine veins and no
        // visible dark pupil, sized off this globe's own extent so it can
        // never spill outside it.
        const discRadius = Math.min(width, height) * 0.62;
        const veinInk = closedEyeColor(pupilInk);
        const veinCount = 8;
        const veins = Array.from({ length: veinCount }, (_, veinIndex) => {
          const angleDeg = (veinIndex / veinCount) * 360;
          return n(
            'g',
            { transform: \`rotate(\${angleDeg} \${x} \${y})\` },
            path(
              \`M\${x} \${y - discRadius * 0.22} L\${x} \${y - discRadius * 0.92}\`,
              {
                stroke: veinInk,
                strokeWidth: Math.max(1, discRadius * 0.06),
                strokeLinecap: 'round',
                fill: 'none',
                opacity: 0.55,
              },
            ),
          );
        });
        eyeParts.push(
          pupilGroup(
            ellipse(x, y, discRadius, discRadius, { fill: pupilInk }),
            config.depth === 'flat'
              ? null
              : ellipse(x, y, discRadius, discRadius, {
                  fill: '#000000',
                  opacity: 0.08,
                  pointerEvents: 'none',
                }),
            ...veins,
            ellipse(x, y, discRadius * 0.18, discRadius * 0.18, {
              fill: veinInk,
            }),
            ellipse(x, y, discRadius, discRadius, {
              fill: 'none',
              stroke: veinInk,
              strokeWidth: Math.max(1, discRadius * 0.07),
            }),
          ),
        );
      } else if (iris === 'slit') {
        // A vertical cat/reptile slit pupil on a solid iris disc, sized off
        // this globe's own extent so it can never spill outside it.
        const discRadius = Math.min(width, height) * 0.62;
        const slitInk = closedEyeColor(pupilInk);
        eyeParts.push(
          pupilGroup(
            ellipse(x, y, discRadius, discRadius, { fill: pupilInk }),
            config.depth === 'flat'
              ? null
              : ellipse(x, y, discRadius, discRadius, {
                  fill: '#000000',
                  opacity: 0.12,
                  pointerEvents: 'none',
                }),
            ellipse(x, y, discRadius * 0.16, discRadius * 0.95, {
              fill: slitInk,
            }),
            ellipse(x, y, discRadius, discRadius, {
              fill: 'none',
              stroke: slitInk,
              strokeWidth: Math.max(1, discRadius * 0.08),
            }),
          ),
        );
      } else if (iris === 'flower') {
        // A generic "blossom eye" motif: petals radiating from a small
        // centre dot, sized off this globe's own extent so it can never
        // spill outside it.
        const discRadius = Math.min(width, height) * 0.62;
        const petalInk = closedEyeColor(pupilInk);
        const petalCount = 5;
        const petalLen = discRadius * 0.85;
        const petalHalf = discRadius * 0.32;
        const petals = Array.from({ length: petalCount }, (_, petalIndex) => {
          const angleDeg = (petalIndex / petalCount) * 360;
          const petalPath = \`M\${x} \${y} Q\${x - petalHalf} \${y - petalLen * 0.55} \${x} \${y - petalLen} Q\${x + petalHalf} \${y - petalLen * 0.55} \${x} \${y}Z\`;
          return n(
            'g',
            { transform: \`rotate(\${angleDeg} \${x} \${y})\` },
            path(petalPath, { fill: petalInk, opacity: 0.82 }),
          );
        });
        eyeParts.push(
          pupilGroup(
            ellipse(x, y, discRadius, discRadius, {
              fill: pupilInk,
              opacity: 0.32,
            }),
            ...petals,
            ellipse(x, y, discRadius * 0.22, discRadius * 0.22, {
              fill: petalInk,
            }),
            ellipse(x, y, discRadius, discRadius, {
              fill: 'none',
              stroke: petalInk,
              strokeWidth: Math.max(1, discRadius * 0.07),
            }),
          ),
        );
      } else if (iris === 'clock') {
        // A generic "clockwork eye" motif: tick marks and hands around the
        // rim, sized off this globe's own extent so it can never spill
        // outside it.
        const discRadius = Math.min(width, height) * 0.62;
        const clockInk = closedEyeColor(pupilInk);
        const tickCount = 12;
        const ticks = Array.from({ length: tickCount }, (_, tickIndex) => {
          const angleDeg = (tickIndex / tickCount) * 360;
          const long = tickIndex % 3 === 0;
          const innerR = discRadius * (long ? 0.6 : 0.76);
          return n(
            'g',
            { transform: \`rotate(\${angleDeg} \${x} \${y})\` },
            path(\`M\${x} \${y - innerR} L\${x} \${y - discRadius * 0.92}\`, {
              stroke: clockInk,
              strokeWidth: Math.max(1, discRadius * (long ? 0.1 : 0.06)),
              strokeLinecap: 'round',
              fill: 'none',
            }),
          );
        });
        const handPath = \`M\${x} \${y} L\${x} \${y - discRadius * 0.55} M\${x} \${y} L\${x + discRadius * 0.35} \${y}\`;
        eyeParts.push(
          pupilGroup(
            ellipse(x, y, discRadius, discRadius, { fill: pupilInk }),
            config.depth === 'flat'
              ? null
              : ellipse(x, y, discRadius, discRadius, {
                  fill: '#000000',
                  opacity: 0.12,
                  pointerEvents: 'none',
                }),
            ...ticks,
            path(handPath, {
              stroke: clockInk,
              strokeWidth: Math.max(1, discRadius * 0.09),
              strokeLinecap: 'round',
              fill: 'none',
            }),
            ellipse(x, y, discRadius * 0.1, discRadius * 0.1, {
              fill: clockInk,
            }),
            ellipse(x, y, discRadius, discRadius, {
              fill: 'none',
              stroke: clockInk,
              strokeWidth: Math.max(1, discRadius * 0.08),
            }),
          ),
        );
      } else if (iris === 'custom') {
        const scale = Math.min(width, height) * 0.6;
        eyeParts.push(
          pupilGroup(
            path(customIrisToPath(config.customIris.points, x, y, scale), {
              fill: pupilInk,
            }),
          ),
        );
      } else {
        const baseGazeX =
          type === 'side-eye'
            ? 10
            : thinking
              ? 10
              : config.shape === 'wobbi'
                ? 7
                : 2;
        const gazeX = Math.min(baseGazeX, width * 0.55);
        const pupilX = x + gazeX;
        const baseYOffset = type === 'round' ? 2 : 8;
        const pupilY = y - Math.min(baseYOffset, height * 0.55);
        const basePupilWidth = iris === 'glossy' ? 11 : startled ? 6 : 9;
        const basePupilHeight =
          type === 'round' ? 10 : iris === 'glossy' ? 14 : startled ? 8 : 11;
        const pupilWidth = Math.min(basePupilWidth, width * 0.6);
        const pupilHeight = Math.min(basePupilHeight, height * 0.6);
        const highlightRx = Math.min(
          iris === 'glossy' ? 4 : 2.6,
          pupilWidth * 0.5,
        );
        const highlightRy = Math.min(
          iris === 'glossy' ? 5 : 3.2,
          pupilHeight * 0.5,
        );
        eyeParts.push(
          pupilGroup(
            ellipse(pupilX, pupilY, pupilWidth, pupilHeight, {
              fill: pupilInk,
            }),
            ...(config.depth === 'flat'
              ? []
              : [
                  ellipse(
                    pupilX - pupilWidth * 0.38,
                    pupilY - pupilHeight * 0.42,
                    highlightRx,
                    highlightRy,
                    { fill: '#ffffff', opacity: 0.96 },
                  ),
                  ...(iris === 'glossy'
                    ? [
                        ellipse(
                          pupilX + Math.min(4, pupilWidth * 0.4),
                          pupilY + Math.min(5, pupilHeight * 0.4),
                          Math.min(2.2, highlightRx * 0.6),
                          Math.min(2.5, highlightRy * 0.6),
                          { fill: '#ffffff', opacity: 0.75 },
                        ),
                      ]
                    : []),
                ]),
          ),
        );
      }
      const restingLids = type === 'sleepy' && !startled && !fearful && !angry;
      if (fearful || angry || restingLids) {
        const tilt = fearful ? (i ? 9 : -9) : angry ? (i ? -10 : 10) : 0;
        const eyelidMask = \`M\${x - width - 3} \${y - height - 3} H\${x + width + 3} V\${y - 6 + tilt} L\${x - width - 3} \${y - 6 - tilt}Z\`;
        eyeParts.push(
          path(eyelidMask, { fill: config.color }),
          config.depth === 'flat'
            ? null
            : path(eyelidMask, {
                fill: \`url(#\${depthId})\`,
                'data-eye-volume-mask': type,
                pointerEvents: 'none',
              }),
        );
        const lidPath = angry
          ? \`M\${x - width + 3} \${y - 7 - tilt * 0.84} L\${x + width - 3} \${y - 7 + tilt * 0.84}\`
          : fearful
            ? \`M\${x - width + 3} \${y - 7 - tilt * 0.7} Q\${x} \${y - 2} \${x + width - 3} \${y - 7 + tilt * 0.7}\`
            : \`M\${x - width + 3} \${y - 7} Q\${x} \${y - 9} \${x + width - 3} \${y - 7}\`;
        eyeParts.push(
          path(lidPath, {
            fill: 'none',
            stroke: lashInk,
            strokeWidth: 4,
            strokeLinecap: 'round',
            'data-eye-lid': angry ? 'angry' : fearful ? 'fearful' : 'sleepy',
            ...lashData,
          }),
        );
      }
    }
    const expressionClosed = happy || sleeping || (wink && !startled);
    return n(
      'g',
      { 'data-eye-wrap': i },
      n(
        'g',
        {
          'data-eye': i,
          'data-expression-closed': expressionClosed,
          style: { transformBox: 'fill-box', transformOrigin: 'center' },
        },
        ...eyeParts,
      ),
      expressionClosed
        ? null
        : path(\`M\${x - width + 2} \${y} Q\${x} \${y + 7} \${x + width - 2} \${y}\`, {
            fill: 'none',
            stroke: closedEyeInk,
            strokeWidth: 5,
            strokeLinecap: 'round',
            opacity: 0,
            'data-blink-line': i,
          }),
    );
  });
  const browY = 88 + faceY;
  const browInk = config.browColor || closedEyeInk;
  const browNeedsOutline = browInk.toLowerCase() === config.color.toLowerCase();
  const browOutlineStroke =
    config.browOutlineWidth > 0 ? config.browOutlineColor : closedEyeInk;
  const browOutlineWidth =
    config.browOutlineWidth > 0 ? config.browOutlineWidth * 2 + 5 : 8;
  const browPaths = {
    soft: [
      \`M82 \${browY + 5} Q102 \${browY - 3} 121 \${browY + 4}\`,
      \`M141 \${browY + 4} Q160 \${browY - 3} 180 \${browY + 5}\`,
    ],
    straight: [
      \`M83 \${browY + 2} L120 \${browY}\`,
      \`M142 \${browY} L179 \${browY + 2}\`,
    ],
    arched: [
      \`M82 \${browY + 7} Q101 \${browY - 12} 120 \${browY + 3}\`,
      \`M142 \${browY + 3} Q161 \${browY - 12} 180 \${browY + 7}\`,
    ],
    worried: [
      \`M83 \${browY + 1} Q102 \${browY - 5} 120 \${browY + 8}\`,
      \`M142 \${browY + 8} Q160 \${browY - 5} 179 \${browY + 1}\`,
    ],
    thinking: [
      \`M83 \${browY + 5} Q102 \${browY - 4} 120 \${browY + 2}\`,
      \`M142 \${browY - 2} Q160 \${browY - 11} 179 \${browY - 5}\`,
    ],
  };
  // 'custom' has no derivable "raised eyebrow" variant, so the thinking
  // reaction's brow-raise override is skipped for it and the user's drawn
  // shape stays put.
  const effectiveBrows =
    thinking && config.brows !== 'none' && config.brows !== 'custom'
      ? 'thinking'
      : config.brows;
  const browCenterX = [101, 161];
  const brows =
    effectiveBrows === 'none'
      ? null
      : effectiveBrows === 'custom'
        ? group(
            'brows',
            ...[0, 1].map((i) => {
              const side = i ? 'right' : 'left';
              const points = config.customBrows.symmetric
                ? config.customBrows.left.points
                : config.customBrows[side].points;
              const d = customBrowToPath(
                points,
                browCenterX[i],
                browY,
                i === 1 && config.customBrows.symmetric,
              );
              return path(d, {
                fill: browInk,
                ...(config.browOutlineWidth > 0
                  ? {
                      stroke: config.browOutlineColor,
                      strokeWidth: config.browOutlineWidth,
                    }
                  : {}),
                'data-brow': i,
              });
            }),
          )
        : group(
            'brows',
            ...browPaths[effectiveBrows].flatMap((d, i) => [
              browNeedsOutline || config.browOutlineWidth > 0
                ? path(d, {
                    fill: 'none',
                    stroke: browOutlineStroke,
                    strokeWidth: browOutlineWidth,
                    strokeLinecap: 'round',
                    opacity: 0.9,
                  })
                : null,
              path(d, {
                fill: 'none',
                stroke: browInk,
                strokeWidth: 5,
                strokeLinecap: 'round',
                'data-brow': i,
              }),
            ]),
          );
  const noseY = 156 + faceY * 0.65;
  const noseNeedsOutline =
    config.noseColor.toLowerCase() === config.color.toLowerCase();
  const noseOutline =
    config.noseOutlineWidth > 0
      ? {
          stroke: config.noseOutlineColor,
          strokeWidth: config.noseOutlineWidth,
        }
      : noseNeedsOutline
        ? { stroke: closedEyeInk, strokeWidth: 2.5 }
        : {};
  const noseLineBehind = (d, strokeWidth) =>
    config.noseOutlineWidth > 0
      ? path(d, {
          fill: 'none',
          stroke: config.noseOutlineColor,
          strokeWidth: strokeWidth + config.noseOutlineWidth * 2,
          strokeLinecap: 'round',
        })
      : null;
  let nose = null;
  if (config.nose === 'button')
    nose = group(
      'nose',
      ellipse(128, noseY, 9, 7, { fill: config.noseColor, ...noseOutline }),
      ellipse(124, noseY + 3, 1.6, 1.1, { fill: closedEyeInk, opacity: 0.5 }),
      ellipse(132, noseY + 3, 1.6, 1.1, { fill: closedEyeInk, opacity: 0.5 }),
      ellipse(125, noseY - 2.5, 2, 1.5, { fill: '#ffffff', opacity: 0.7 }),
    );
  if (config.nose === 'hook') {
    const hookPath = \`M123 \${noseY - 11} Q113 \${noseY - 2} 118 \${noseY + 7} Q121 \${noseY + 11} 128 \${noseY + 9}\`;
    nose = group(
      'nose',
      noseLineBehind(hookPath, 3),
      path(hookPath, {
        fill: 'none',
        stroke: config.noseColor,
        strokeWidth: 3,
        strokeLinecap: 'round',
      }),
    );
  }
  if (config.nose === 'nostrils') {
    const leftPath = \`M124 \${noseY - 2} Q121.5 \${noseY + 3} 125 \${noseY + 5.5}\`;
    const rightPath = \`M132 \${noseY - 2} Q134.5 \${noseY + 3} 131 \${noseY + 5.5}\`;
    nose = group(
      'nose',
      noseLineBehind(leftPath, 2),
      noseLineBehind(rightPath, 2),
      path(leftPath, {
        fill: 'none',
        stroke: config.noseColor,
        strokeWidth: 2,
        strokeLinecap: 'round',
      }),
      path(rightPath, {
        fill: 'none',
        stroke: config.noseColor,
        strokeWidth: 2,
        strokeLinecap: 'round',
      }),
    );
  }
  if (config.nose === 'pointy')
    nose = group(
      'nose',
      path(\`M128 \${noseY - 9} L134 \${noseY + 6} L122 \${noseY + 6}Z\`, {
        fill: config.noseColor,
        ...noseOutline,
      }),
    );
  if (config.nose === 'dot')
    nose = group(
      'nose',
      ellipse(128, noseY, 4.5, 3.5, {
        fill: config.noseColor,
        ...noseOutline,
      }),
    );
  if (config.nose === 'round')
    nose = group(
      'nose',
      ellipse(128, noseY, 8, 6.5, {
        fill: config.noseColor,
        ...noseOutline,
      }),
      ellipse(125, noseY - 2, 2, 1.5, { fill: '#ffffff', opacity: 0.7 }),
    );
  if (config.nose === 'muzzle')
    nose = group(
      'nose',
      ellipse(117, noseY + 5, 15, 12, {
        fill: config.eyeColor,
        opacity: 0.94,
      }),
      ellipse(139, noseY + 5, 15, 12, {
        fill: config.eyeColor,
        opacity: 0.94,
      }),
      ellipse(128, noseY - 1, 7, 5.5, {
        fill: config.noseColor,
        ...noseOutline,
      }),
      path(\`M128 \${noseY + 4} V\${noseY + 10}\`, {
        fill: 'none',
        stroke: config.noseColor,
        strokeWidth: 3,
        strokeLinecap: 'round',
      }),
    );
  if (config.nose === 'moustache')
    nose = group(
      'nose',
      path(
        \`M128 \${noseY + 5} C120 \${noseY - 3} 111 \${noseY - 2} 104 \${noseY + 5} C110 \${noseY + 5} 109 \${noseY + 16} 120 \${noseY + 15} C125 \${noseY + 14} 128 \${noseY + 10} 128 \${noseY + 5}Z M128 \${noseY + 5} C136 \${noseY - 3} 145 \${noseY - 2} 152 \${noseY + 5} C146 \${noseY + 5} 147 \${noseY + 16} 136 \${noseY + 15} C131 \${noseY + 14} 128 \${noseY + 10} 128 \${noseY + 5}Z\`,
        {
          fill: config.noseColor,
          strokeLinejoin: 'round',
          'data-nose-style': 'moustache',
          ...noseOutline,
        },
      ),
    );
  if (config.nose === 'beak')
    nose = group(
      'nose',
      path(
        \`M112 \${noseY} Q128 \${noseY - 12} 144 \${noseY} Q128 \${noseY + 14} 112 \${noseY}Z\`,
        {
          fill: config.noseColor,
          strokeLinejoin: 'round',
          stroke: closedEyeInk,
          strokeWidth: 2,
          ...noseOutline,
        },
      ),
      path(\`M115 \${noseY} H141\`, {
        fill: 'none',
        stroke:
          config.noseOutlineWidth > 0 ? config.noseOutlineColor : closedEyeInk,
        strokeWidth:
          config.noseOutlineWidth > 0 ? config.noseOutlineWidth : 1.5,
        opacity: config.noseOutlineWidth > 0 ? 1 : 0.5,
      }),
    );
  if (config.nose === 'custom')
    nose = group(
      'nose',
      path(customNoseToPath(config.customNose.points, 128, noseY), {
        fill: config.noseColor,
        ...noseOutline,
      }),
    );
  const noseSpacing =
    config.nose === 'muzzle'
      ? 3
      : config.nose === 'moustache'
        ? 18
        : config.nose === 'none'
          ? 0
          : 8;
  const mouthY = 174 + faceY * 0.35 + noseSpacing;
  const configuredMouth = ['muzzle', 'beak'].includes(config.nose)
    ? 'none'
    : config.mouth;
  const muzzleSurprise = config.nose === 'muzzle' && startled;
  const mouthOutlineActive = config.mouthOutlineWidth > 0;
  const mouthOutline = mouthOutlineActive
    ? {
        stroke: config.mouthOutlineColor,
        strokeWidth: config.mouthOutlineWidth,
      }
    : {};
  const mouthLineBehind = (d, strokeWidth, props = {}) =>
    mouthOutlineActive
      ? path(d, {
          fill: 'none',
          stroke: config.mouthOutlineColor,
          strokeWidth: strokeWidth + config.mouthOutlineWidth * 2,
          strokeLinecap: 'round',
          ...props,
        })
      : null;
  let mouth = null;
  if (configuredMouth !== 'none' || muzzleSurprise) {
    let d =
      fearful || angry
        ? \`M116 \${mouthY + 4} Q128 \${mouthY - 10} 140 \${mouthY + 4}\`
        : \`M115 \${mouthY - 4} Q128 \${mouthY + 12} 141 \${mouthY - 4}\`;
    if (configuredMouth === 'small' && !happy) d = \`M122 \${mouthY} H134\`;
    let mouthParts;
    if (configuredMouth === 'open' || muzzleSurprise || startled || singing)
      mouthParts = [
        ellipse(128, mouthY, singing ? 13 : 10, singing ? 16 : happy ? 13 : 9, {
          fill: mouthInk,
          'data-mouth-style': muzzleSurprise
            ? 'muzzle-surprise'
            : singing
              ? 'singing'
              : 'open',
          ...mouthOutline,
        }),
        ...(config.depth === 'flat'
          ? []
          : [
              path(\`M121 \${mouthY + 4} Q128 \${mouthY + 10} 135 \${mouthY + 4}\`, {
                fill: 'none',
                stroke: config.accentColor,
                strokeWidth: 3,
                strokeLinecap: 'round',
                opacity: 0.85,
              }),
            ]),
      ];
    else if (configuredMouth === 'tooth' && !fearful && !angry)
      mouthParts = [
        path(\`M110 \${mouthY - 5} Q128 \${mouthY + 20} 146 \${mouthY - 5}Z\`, {
          fill: mouthInk,
          ...mouthOutline,
        }),
        n('rect', {
          x: 119,
          y: mouthY - 4,
          width: 7,
          height: 6,
          rx: 1,
          fill: '#ffffff',
        }),
        n('rect', {
          x: 130,
          y: mouthY - 4,
          width: 7,
          height: 6,
          rx: 1,
          fill: '#ffffff',
        }),
      ];
    else if (configuredMouth === 'grin')
      mouthParts = [
        path(\`M106 \${mouthY - 6} Q128 \${mouthY + 22} 150 \${mouthY - 6}Z\`, {
          fill: '#ffffff',
          stroke: mouthOutlineActive ? config.mouthOutlineColor : mouthInk,
          strokeWidth: mouthOutlineActive ? config.mouthOutlineWidth : 4,
          strokeLinejoin: 'round',
        }),
        path(\`M114 \${mouthY + 4} H142\`, {
          fill: 'none',
          stroke: mouthInk,
          strokeWidth: 2,
          opacity: 0.35,
        }),
      ];
    else if (configuredMouth === 'pout')
      mouthParts = [
        mouthLineBehind(
          \`M116 \${mouthY + 4} Q128 \${mouthY - 10} 140 \${mouthY + 4}\`,
          5,
        ),
        path(\`M116 \${mouthY + 4} Q128 \${mouthY - 10} 140 \${mouthY + 4}\`, {
          fill: 'none',
          stroke: mouthInk,
          strokeWidth: 5,
          strokeLinecap: 'round',
        }),
      ];
    else if (configuredMouth === 'fangs')
      mouthParts = [
        mouthLineBehind(
          \`M106 \${mouthY - 2} Q128 \${mouthY + 8} 150 \${mouthY - 2}\`,
          5,
          { 'data-mouth-style': 'closed-fangs' },
        ),
        path(\`M106 \${mouthY - 2} Q128 \${mouthY + 8} 150 \${mouthY - 2}\`, {
          fill: 'none',
          stroke: mouthInk,
          strokeWidth: 5,
          strokeLinecap: 'round',
          'data-mouth-style': 'closed-fangs',
        }),
        path(
          \`M113 \${mouthY} L120 \${mouthY + 13} L126 \${mouthY + 2}Z M130 \${mouthY + 2} L136 \${mouthY + 13} L143 \${mouthY}Z\`,
          {
            fill: '#ffffff',
            stroke: mouthOutlineActive ? config.mouthOutlineColor : mouthInk,
            strokeWidth: mouthOutlineActive ? config.mouthOutlineWidth : 2,
            strokeLinejoin: 'round',
          },
        ),
      ];
    else if (configuredMouth === 'custom')
      mouthParts = [
        path(customMouthToPath(config.customMouth.points, 128, mouthY), {
          fill: mouthInk,
          ...mouthOutline,
        }),
      ];
    else
      mouthParts = [
        mouthLineBehind(d, 5),
        path(d, {
          fill: 'none',
          stroke: mouthInk,
          strokeWidth: 5,
          strokeLinecap: 'round',
        }),
      ];
    mouth = group('mouth', ...mouthParts);
  }
  const headY = fit.crownY;
  const headX = fit.crownX;
  const crownHalf = fit.crownHalf;
  const crownLeft = headX - crownHalf;
  const crownRight = headX + crownHalf;
  const crownInnerHalf = Math.max(22, crownHalf * 0.38);
  const head = [];
  const frontHead = [];
  const headOutline =
    config.headOutlineWidth > 0
      ? {
          stroke: config.headOutlineColor,
          strokeWidth: config.headOutlineWidth,
        }
      : {};
  const depthLayer = (d, part) =>
    config.depth === 'flat'
      ? null
      : path(d, {
          fill: \`url(#\${depthId})\`,
          'data-detail-depth': part,
          pointerEvents: 'none',
        });
  if (config.head === 'tuft') {
    const tuftPath = \`M\${headX - 20} \${headY + 9} Q\${headX - crownHalf * 0.58} \${headY - 35} \${headX - 7} \${headY - 29} Q\${headX + 10} \${headY - 30} \${headX - 6} \${headY - 11} Q\${headX + crownHalf * 0.55} \${headY - 29} \${headX + 29} \${headY + 8}Z\`;
    head.push(
      path(tuftPath, { fill: config.headColor, ...headOutline }),
      depthLayer(tuftPath, 'tuft'),
    );
  }
  if (config.head === 'curl') {
    const curlPath = \`M\${headX + 3} \${headY + 11} C\${headX - 1} \${headY - 5} \${headX - 22} \${headY - 12} \${headX - 18} \${headY - 29} C\${headX - 14} \${headY - 47} \${headX + 15} \${headY - 48} \${headX + 18} \${headY - 30} C\${headX + 20} \${headY - 18} \${headX + 4} \${headY - 18} \${headX + 7} \${headY - 29}\`;
    head.push(
      config.headOutlineWidth > 0
        ? path(curlPath, {
            fill: 'none',
            stroke: config.headOutlineColor,
            strokeWidth: 11 + config.headOutlineWidth * 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        : null,
      path(curlPath, {
        fill: 'none',
        stroke: config.headColor,
        strokeWidth: 11,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      config.depth === 'flat'
        ? null
        : path(curlPath, {
            fill: 'none',
            stroke: \`url(#\${depthId})\`,
            strokeWidth: 11,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'data-detail-depth': 'curl',
            pointerEvents: 'none',
          }),
    );
  }
  if (config.head === 'spiky') {
    const spikyPath = [-16, 0, 16]
      .map((offset) => {
        const baseX = headX + offset;
        const tipY = headY - 33 + Math.abs(offset) * 0.25;
        return \`M\${baseX - 9} \${headY + 8} L\${baseX} \${tipY} L\${baseX + 9} \${headY + 8}Z\`;
      })
      .join(' ');
    head.push(
      path(spikyPath, { fill: config.headColor, ...headOutline }),
      depthLayer(spikyPath, 'spiky'),
    );
  }
  if (config.head === 'bun') {
    const bunY = headY - 22;
    head.push(
      group(
        'bun',
        ellipse(headX, bunY, 15, 14, {
          fill: config.headColor,
          ...headOutline,
        }),
        config.depth === 'flat'
          ? null
          : ellipse(headX, bunY, 15, 14, {
              fill: \`url(#\${depthId})\`,
              'data-detail-depth': 'bun',
              pointerEvents: 'none',
            }),
        path(
          \`M\${headX - 14} \${bunY + 3} Q\${headX} \${bunY + 11} \${headX + 14} \${bunY + 3}\`,
          {
            fill: 'none',
            stroke: config.accentColor,
            strokeWidth: 3,
            strokeLinecap: 'round',
            opacity: 0.85,
          },
        ),
      ),
    );
  }
  if (config.head === 'fringe') {
    const fringeSpan = Math.min(38, crownHalf * 0.66);
    const fringePath = \`M\${headX - fringeSpan} \${headY + 14} Q\${headX - fringeSpan * 0.5} \${headY - 22} \${headX} \${headY - 14} Q\${headX + fringeSpan * 0.5} \${headY - 22} \${headX + fringeSpan} \${headY + 14} Q\${headX} \${headY + 2} \${headX - fringeSpan} \${headY + 14}Z\`;
    head.push(
      path(fringePath, { fill: config.headColor, ...headOutline }),
      depthLayer(fringePath, 'fringe'),
    );
  }
  if (config.head === 'blaze') {
    // A dramatic, asymmetric "flame" silhouette: uneven curved spikes of
    // varying height and lean, distinct from the plainer "spiky" style.
    const spikeDefs = [
      { offset: -30, height: 30, lean: -6 },
      { offset: -20, height: 52, lean: -4 },
      { offset: -10, height: 40, lean: 2 },
      { offset: 0, height: 62, lean: 0 },
      { offset: 10, height: 42, lean: -2 },
      { offset: 20, height: 56, lean: 5 },
      { offset: 30, height: 32, lean: 8 },
    ];
    const blazePath = spikeDefs
      .map(({ offset, height, lean }) => {
        const baseX = headX + offset;
        const tipX = baseX + lean;
        const tipY = headY - height;
        const baseWidth = Math.max(5, 8 - Math.abs(offset) * 0.05);
        return \`M\${baseX - baseWidth} \${headY + 8} Q\${baseX - baseWidth * 0.3} \${headY - height * 0.5} \${tipX} \${tipY} Q\${baseX + baseWidth * 0.3} \${headY - height * 0.5} \${baseX + baseWidth} \${headY + 8}Z\`;
      })
      .join(' ');
    head.push(
      path(blazePath, { fill: config.headColor, ...headOutline }),
      depthLayer(blazePath, 'blaze'),
    );
  }
  if (config.head === 'mane') {
    // One bold sweeping lock: a wide rounded base at the crown tapering to
    // a fine point, like a single long strand swept up and to the side.
    // Kept above the body's own top curve (like tuft/blaze) so it isn't
    // hidden behind it, with a slimmer second strand for volume.
    const baseX = headX - 6;
    const baseY = headY + 6;
    const tipX = headX + 46;
    const tipY = headY - 58;
    const manePath = \`M\${baseX} \${baseY - 15} Q\${headX + 26} \${headY - 40} \${tipX} \${tipY} Q\${headX + 14} \${headY - 24} \${baseX + 2} \${baseY + 14} Q\${baseX - 16} \${baseY + 8} \${baseX - 15} \${baseY - 5} Q\${baseX - 15} \${baseY - 13} \${baseX} \${baseY - 15}Z\`;
    const strandTipX = headX + 26;
    const strandTipY = headY - 38;
    const strandPath = \`M\${baseX + 6} \${baseY - 10} Q\${headX + 14} \${headY - 22} \${strandTipX} \${strandTipY} Q\${headX + 6} \${headY - 12} \${baseX + 4} \${baseY + 2}Z\`;
    const fullManePath = \`\${manePath} \${strandPath}\`;
    head.push(
      path(fullManePath, { fill: config.headColor, ...headOutline }),
      depthLayer(fullManePath, 'mane'),
    );
  }
  if (config.head === 'wild-mane') {
    const spikeOffsets = [-34, -22, -11, 0, 11, 22, 34];
    const spikeHeights = [20, 46, 30, 52, 28, 44, 18];
    const wildPath = spikeOffsets
      .map((offset, index) => {
        const baseX = headX + offset;
        const tipY = headY - spikeHeights[index];
        const tipX = baseX + offset * 0.15;
        return \`M\${baseX - 9} \${headY + 10} L\${tipX} \${tipY} L\${baseX + 9} \${headY + 10}Z\`;
      })
      .join(' ');
    const sideLeftPath = \`M\${headX - crownHalf * 0.7} \${headY + 4} Q\${headX - crownHalf * 1.15} \${headY - 6} \${headX - crownHalf * 0.95} \${headY + 22}Z\`;
    const sideRightPath = \`M\${headX + crownHalf * 0.7} \${headY + 4} Q\${headX + crownHalf * 1.15} \${headY - 6} \${headX + crownHalf * 0.95} \${headY + 22}Z\`;
    const fullPath = \`\${wildPath} \${sideLeftPath} \${sideRightPath}\`;
    head.push(
      path(fullPath, { fill: config.headColor, ...headOutline }),
      depthLayer(fullPath, 'wild-mane'),
    );
  }
  if (config.head === 'custom-hair') {
    // Unlike every other hairstyle, this one is drawn in front of the body
    // (see frontHead below) so the user has total freedom over height and
    // width with no risk of it being clipped by the body silhouette.
    const customHairPath = customHairToPath(
      config.customHair.points,
      headX,
      headY,
    );
    frontHead.push(
      path(customHairPath, { fill: config.headColor, ...headOutline }),
      depthLayer(customHairPath, 'custom-hair'),
    );
  }
  if (config.head === 'bunny-ears')
    [0, 1].forEach((i) => {
      const direction = i ? 1 : -1;
      const baseX = headX + direction * crownHalf * 0.43;
      const tipX = baseX + direction * 8;
      const earHeight = Math.min(72, headY + 14);
      const earScale = earHeight / 72;
      const outerPath = \`M\${baseX - 13} \${headY + 23} C\${baseX - 16} \${headY - 6 * earScale} \${tipX - 17} \${headY - 66 * earScale} \${tipX} \${headY - earHeight} C\${tipX + 18} \${headY - 67 * earScale} \${baseX + 17} \${headY - 6 * earScale} \${baseX + 13} \${headY + 23}Z\`;
      const innerPath = \`M\${baseX - 6} \${headY + 8} C\${baseX - 7} \${headY - 16 * earScale} \${tipX - 8} \${headY - 52 * earScale} \${tipX} \${headY - 58 * earScale} C\${tipX + 9} \${headY - 51 * earScale} \${baseX + 8} \${headY - 15 * earScale} \${baseX + 6} \${headY + 8}Z\`;
      head.push(
        group(
          \`bunny-ear-\${i}\`,
          path(outerPath, { fill: config.headColor, ...headOutline }),
          depthLayer(outerPath, \`bunny-ear-\${i}\`),
          path(innerPath, { fill: config.accentColor, opacity: 0.9 }),
        ),
      );
    });
  if (config.head === 'ears')
    [0, 1].forEach((i) => {
      const outerPath = i
        ? \`M\${headX + crownInnerHalf} \${headY + 15} L\${crownRight - 8} \${headY - 22} Q\${crownRight + 8} \${headY - 29} \${crownRight + 7} \${headY + 39}Z\`
        : \`M\${crownLeft - 7} \${headY + 39} Q\${crownLeft - 8} \${headY - 29} \${crownLeft + 8} \${headY - 22} L\${headX - crownInnerHalf} \${headY + 15}Z\`;
      const innerPath = i
        ? \`M\${crownRight - 25} \${headY + 10} L\${crownRight - 5} \${headY - 10} L\${crownRight - 5} \${headY + 28}Z\`
        : \`M\${crownLeft + 5} \${headY + 28} L\${crownLeft + 5} \${headY - 10} L\${crownLeft + 25} \${headY + 10}Z\`;
      head.push(
        group(
          \`ear-\${i}\`,
          path(outerPath, { fill: config.headColor, ...headOutline }),
          depthLayer(outerPath, \`ear-\${i}\`),
          path(innerPath, { fill: config.accentColor }),
        ),
      );
    });
  if (config.head === 'round-ears')
    [0, 1].forEach((i) => {
      const direction = i ? 1 : -1;
      const earX = fit.roundEarX?.[i] ?? headX + direction * (crownHalf - 8);
      const earY = Array.isArray(fit.roundEarY)
        ? fit.roundEarY[i]
        : (fit.roundEarY ?? headY + 2);
      head.push(
        group(
          \`round-ear-\${i}\`,
          ellipse(earX, earY, 24, 25, {
            fill: config.headColor,
            ...headOutline,
          }),
          config.depth === 'flat'
            ? null
            : ellipse(earX, earY, 24, 25, {
                fill: \`url(#\${depthId})\`,
                'data-detail-depth': \`round-ear-\${i}\`,
                pointerEvents: 'none',
              }),
          ellipse(earX, earY + 1, 12, 13, {
            fill: config.accentColor,
            opacity: 0.78,
          }),
        ),
      );
    });
  if (config.head === 'elf-ears')
    [0, 1].forEach((i) => {
      const direction = i ? 1 : -1;
      const baseX = fit.roundEarX?.[i] ?? headX + direction * (crownHalf - 6);
      const baseY = Array.isArray(fit.roundEarY)
        ? fit.roundEarY[i]
        : (fit.roundEarY ?? headY + 4);
      const tipX = baseX + direction * 48;
      const tipY = baseY - 46;
      const outerPath = \`M\${baseX - direction * 6} \${baseY + 22} Q\${baseX - direction * 15} \${baseY - 8} \${baseX - direction * 2} \${baseY - 30} Q\${baseX + direction * 20} \${baseY - 44} \${tipX} \${tipY} Q\${tipX + direction * 12} \${tipY + 18} \${baseX + direction * 20} \${baseY - 4} Q\${baseX + direction * 23} \${baseY + 16} \${baseX + direction * 9} \${baseY + 27}Z\`;
      const innerPath = \`M\${baseX + direction * 1} \${baseY + 13} Q\${baseX + direction * 8} \${baseY - 7} \${baseX + direction * 17} \${baseY - 22} Q\${tipX - direction * 6} \${tipY + 24} \${tipX - direction * 8} \${tipY + 15} Q\${baseX + direction * 13} \${baseY - 3} \${baseX + direction * 7} \${baseY + 15}Z\`;
      head.push(
        group(
          \`elf-ear-\${i}\`,
          path(outerPath, { fill: config.headColor, ...headOutline }),
          depthLayer(outerPath, \`elf-ear-\${i}\`),
          path(innerPath, { fill: config.accentColor, opacity: 0.85 }),
        ),
      );
    });
  if (config.head === 'halo') {
    const haloY = headY - (config.shape === 'drop' ? 62 : 35);
    head.push(
      group(
        'halo',
        config.headOutlineWidth > 0
          ? ellipse(headX, haloY, Math.max(29, crownHalf * 0.48), 10, {
              fill: 'none',
              stroke: config.headOutlineColor,
              strokeWidth: 7 + config.headOutlineWidth * 2,
              opacity: 0.96,
            })
          : null,
        ellipse(headX, haloY, Math.max(29, crownHalf * 0.48), 10, {
          fill: 'none',
          stroke: config.accentColor,
          strokeWidth: 7,
          opacity: 0.96,
          'data-head-style': 'halo',
        }),
        path(
          \`M\${headX - crownHalf * 0.34} \${haloY - 4} Q\${headX} \${haloY - 12} \${headX + crownHalf * 0.3} \${haloY - 4}\`,
          {
            fill: 'none',
            stroke: '#ffffff',
            strokeWidth: 2,
            strokeLinecap: 'round',
            opacity: 0.7,
          },
        ),
      ),
    );
  }
  if (config.head === 'horns') {
    const hornHalf = fit.hornHalf ?? crownHalf;
    const hornLeft = fit.hornX?.[0] ?? headX - hornHalf;
    const hornRight = fit.hornX?.[1] ?? headX + hornHalf;
    const hornInnerHalf = Math.max(22, hornHalf * 0.38);
    const hornPath = \`M\${hornLeft + 5} \${headY + 25} Q\${hornLeft - 16} \${headY - 3} \${hornLeft + 7} \${headY - 24} Q\${hornLeft + 1} \${headY - 3} \${headX - hornInnerHalf} \${headY + 10}Z M\${headX + hornInnerHalf} \${headY + 10} Q\${hornRight - 1} \${headY - 3} \${hornRight - 7} \${headY - 24} Q\${hornRight + 16} \${headY - 3} \${hornRight - 5} \${headY + 25}Z\`;
    head.push(
      path(hornPath, {
        fill: config.accessoryColor,
        'data-head-style': 'horns',
        ...headOutline,
      }),
      depthLayer(hornPath, 'horns'),
    );
  }
  const accessoriesBehind = [];
  const accessoriesFront = [];
  const ey = 122 + faceY;
  const accessoryOutlineActive = config.accessoryOutlineWidth > 0;
  const accessoryOutline = accessoryOutlineActive
    ? {
        stroke: config.accessoryOutlineColor,
        strokeWidth: config.accessoryOutlineWidth,
      }
    : {};
  if (config.accessory === 'glasses')
    accessoriesFront.push(
      accessoryOutlineActive
        ? n(
            'g',
            {
              fill: 'none',
              stroke: config.accessoryOutlineColor,
              strokeWidth: 5 + config.accessoryOutlineWidth * 2,
            },
            ellipse(101, ey, 29, 33),
            ellipse(160, ey, 29, 33),
            fit.glassesArms === false
              ? null
              : path(
                  \`M72 \${ey - 5} L\${128 - fit.templeHalf} \${ey - 9} M189 \${ey - 5} L\${128 + fit.templeHalf} \${ey - 9}\`,
                ),
          )
        : null,
      n(
        'g',
        { fill: 'none', stroke: config.accessoryColor, strokeWidth: 5 },
        ellipse(101, ey, 29, 33),
        ellipse(160, ey, 29, 33),
        path(\`M129 \${ey - 4} Q131 \${ey - 8} 133 \${ey - 4}\`),
        fit.glassesArms === false
          ? null
          : path(
              \`M72 \${ey - 5} L\${128 - fit.templeHalf} \${ey - 9} M189 \${ey - 5} L\${128 + fit.templeHalf} \${ey - 9}\`,
              { 'data-accessory-piece': 'glasses-arms' },
            ),
      ),
    );
  if (config.accessory === 'sunglasses') {
    const lensInk =
      config.accessoryColor.toLowerCase() === config.color.toLowerCase()
        ? closedEyeInk
        : config.accessoryColor;
    const leftLens = \`M70 \${ey - 19} L130 \${ey - 13} L126 \${ey + 2} Q119 \${ey + 26} 97 \${ey + 25} Q76 \${ey + 24} 73 \${ey + 4}Z\`;
    const rightLens = \`M132 \${ey - 13} L192 \${ey - 19} L189 \${ey + 4} Q186 \${ey + 24} 165 \${ey + 25} Q143 \${ey + 26} 136 \${ey + 2}Z\`;
    accessoriesFront.push(
      n(
        'g',
        {
          'data-accessory-style': 'sunglasses',
          strokeLinejoin: 'round',
        },
        path(leftLens, {
          fill: lensInk,
          stroke: accessoryOutlineActive
            ? config.accessoryOutlineColor
            : lensInk,
          strokeWidth: accessoryOutlineActive
            ? config.accessoryOutlineWidth
            : 4,
          'data-accessory-piece': 'left-sunglass-lens',
        }),
        path(rightLens, {
          fill: lensInk,
          stroke: accessoryOutlineActive
            ? config.accessoryOutlineColor
            : lensInk,
          strokeWidth: accessoryOutlineActive
            ? config.accessoryOutlineWidth
            : 4,
          'data-accessory-piece': 'right-sunglass-lens',
        }),
        path(\`M126 \${ey - 5} Q131 \${ey - 10} 136 \${ey - 5}\`, {
          fill: 'none',
          stroke: lensInk,
          strokeWidth: 5,
          strokeLinecap: 'round',
        }),
        fit.glassesArms === false
          ? null
          : path(
              \`M72 \${ey - 10} L\${128 - fit.templeHalf} \${ey - 14} M190 \${ey - 10} L\${128 + fit.templeHalf} \${ey - 14}\`,
              {
                fill: 'none',
                stroke: lensInk,
                strokeWidth: 5,
                strokeLinecap: 'round',
                'data-accessory-piece': 'sunglasses-arms',
              },
            ),
        path(\`M82 \${ey - 10} L103 \${ey - 7}\`, {
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: 3,
          strokeLinecap: 'round',
          opacity: 0.42,
        }),
        path(\`M144 \${ey - 7} L165 \${ey - 10}\`, {
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: 3,
          strokeLinecap: 'round',
          opacity: 0.42,
        }),
      ),
    );
  }
  if (config.accessory === 'headphones') {
    const cupTop = ey - 14;
    const cupHeight = 57;
    const leftCupX = fit.sideLeft - 12;
    const rightCupX = fit.sideRight - 12;
    accessoriesBehind.push(
      accessoryOutlineActive
        ? path(
            \`M\${fit.sideLeft} \${cupTop + 34} V\${cupTop + 5} C\${fit.sideLeft} \${headY - 38} \${fit.sideRight} \${headY - 38} \${fit.sideRight} \${cupTop + 5} V\${cupTop + 34}\`,
            {
              fill: 'none',
              stroke: config.accessoryOutlineColor,
              strokeWidth: 12 + config.accessoryOutlineWidth * 2,
            },
          )
        : null,
      path(
        \`M\${fit.sideLeft} \${cupTop + 34} V\${cupTop + 5} C\${fit.sideLeft} \${headY - 38} \${fit.sideRight} \${headY - 38} \${fit.sideRight} \${cupTop + 5} V\${cupTop + 34}\`,
        {
          fill: 'none',
          stroke: config.accessoryColor,
          strokeWidth: 12,
        },
      ),
    );
    accessoriesFront.push(
      n('rect', {
        x: leftCupX,
        y: cupTop,
        width: 25,
        height: cupHeight,
        rx: 12,
        fill: config.accessoryColor,
        'data-accessory-piece': 'left-earcup',
        ...accessoryOutline,
      }),
      n('rect', {
        x: rightCupX,
        y: cupTop,
        width: 25,
        height: cupHeight,
        rx: 12,
        fill: config.accessoryColor,
        'data-accessory-piece': 'right-earcup',
        ...accessoryOutline,
      }),
      ...(config.depth === 'flat'
        ? []
        : [
            n('rect', {
              x: leftCupX,
              y: cupTop,
              width: 25,
              height: cupHeight,
              rx: 12,
              fill: \`url(#\${depthId})\`,
              'data-detail-depth': 'left-earcup',
              pointerEvents: 'none',
            }),
            n('rect', {
              x: rightCupX,
              y: cupTop,
              width: 25,
              height: cupHeight,
              rx: 12,
              fill: \`url(#\${depthId})\`,
              'data-detail-depth': 'right-earcup',
              pointerEvents: 'none',
            }),
          ]),
    );
  }
  if (config.accessory === 'bowtie') {
    const bowY = 198 + faceY * 0.35;
    const bowPath = \`M126 \${bowY} Q108 \${bowY - 15} 103 \${bowY - 2} Q105 \${bowY + 14} 126 \${bowY + 5}Z M130 \${bowY} Q148 \${bowY - 15} 153 \${bowY - 2} Q151 \${bowY + 14} 130 \${bowY + 5}Z\`;
    accessoriesFront.push(
      path(bowPath, { fill: config.accessoryColor, ...accessoryOutline }),
      depthLayer(bowPath, 'bowtie'),
      ellipse(128, bowY + 2, 7, 7, {
        fill: config.accentColor,
        'data-accessory-piece': 'bowtie-knot',
      }),
    );
  }
  if (config.accessory === 'monocle')
    accessoriesFront.push(
      accessoryOutlineActive
        ? ellipse(160, ey, 31, 35, {
            fill: 'none',
            stroke: config.accessoryOutlineColor,
            strokeWidth: 5 + config.accessoryOutlineWidth * 2,
          })
        : null,
      ellipse(160, ey, 31, 35, {
        fill: 'none',
        stroke: config.accessoryColor,
        strokeWidth: 5,
      }),
      path(\`M187 \${ey + 19} Q198 \${ey + 43} 189 \${ey + 64}\`, {
        fill: 'none',
        stroke: config.accessoryColor,
        strokeWidth: 3,
        strokeLinecap: 'round',
        'data-accessory-piece': 'monocle-chain',
      }),
    );
  if (config.accessory === 'blush')
    accessoriesFront.push(
      ellipse(fit.cheekX[0], ey + 39, fit.cheekRadiusX, 7, {
        fill: config.accentColor,
        opacity: 0.56,
        'data-accessory-piece': 'left-blush',
      }),
      ellipse(fit.cheekX[1], ey + 39, fit.cheekRadiusX, 7, {
        fill: config.accentColor,
        opacity: 0.56,
        'data-accessory-piece': 'right-blush',
      }),
    );
  if (config.accessory === 'freckles')
    accessoriesFront.push(
      ...[
        [103, ey + 31],
        [111, ey + 34],
        [118, ey + 30],
        [143, ey + 30],
        [150, ey + 34],
        [158, ey + 31],
      ].map(([cx, cy], i) =>
        ellipse(cx, cy, 2.1, 1.8, {
          fill: config.accessoryColor,
          opacity: 0.72,
          'data-accessory-piece': i === 0 ? 'freckles' : undefined,
        }),
      ),
    );
  if (config.accessory === 'bandage')
    accessoriesFront.push(
      n(
        'g',
        {
          transform: \`rotate(-14 176 \${ey + 31})\`,
          'data-accessory-piece': 'bandage',
        },
        n('rect', {
          x: 158,
          y: ey + 23,
          width: 36,
          height: 16,
          rx: 7,
          fill: config.accessoryColor,
          ...accessoryOutline,
        }),
        n('rect', {
          x: 171,
          y: ey + 24,
          width: 10,
          height: 14,
          rx: 3,
          fill: config.accentColor,
          opacity: 0.72,
        }),
        ...[0, 1, 2].map((i) =>
          ellipse(164 + i * 12, ey + 31, 1.2, 1.2, {
            fill: '#ffffff',
            opacity: 0.65,
          }),
        ),
      ),
    );
  if (config.accessory === 'fox-tail') {
    const baseX = fit.sideRight - 24;
    const baseY = 196 + faceY * 0.2;
    const tipX = baseX + 68;
    const tipY = baseY - 8;
    const tailPath = \`M\${baseX} \${baseY} C\${baseX + 50} \${baseY + 48} \${baseX + 90} \${baseY + 24} \${tipX} \${tipY}\`;
    accessoriesBehind.push(
      accessoryOutlineActive
        ? path(tailPath, {
            fill: 'none',
            stroke: config.accessoryOutlineColor,
            strokeWidth: 28 + config.accessoryOutlineWidth * 2,
            strokeLinecap: 'round',
          })
        : null,
      path(tailPath, {
        fill: 'none',
        stroke: config.accessoryColor,
        strokeWidth: 28,
        strokeLinecap: 'round',
        'data-accessory-piece': 'fox-tail',
      }),
      ellipse(tipX, tipY, 14, 12, {
        fill: config.accentColor,
        opacity: 0.92,
        'data-accessory-piece': 'fox-tail-tip',
      }),
    );
  }
  if (config.accessory === 'cat-tail') {
    const baseX = fit.sideRight - 20;
    const baseY = 198 + faceY * 0.2;
    const tipX = baseX + 44;
    const tipY = baseY - 46;
    const tailPath = \`M\${baseX} \${baseY} C\${baseX + 46} \${baseY + 24} \${baseX + 54} \${baseY - 36} \${tipX} \${tipY}\`;
    accessoriesBehind.push(
      accessoryOutlineActive
        ? path(tailPath, {
            fill: 'none',
            stroke: config.accessoryOutlineColor,
            strokeWidth: 13 + config.accessoryOutlineWidth * 2,
            strokeLinecap: 'round',
          })
        : null,
      path(tailPath, {
        fill: 'none',
        stroke: config.accessoryColor,
        strokeWidth: 13,
        strokeLinecap: 'round',
        'data-accessory-piece': 'cat-tail',
      }),
    );
  }
  const body = group(
    'body',
    n(
      'g',
      {
        'data-part': 'head',
        'data-motion': 'head',
        'data-fit-shape': config.shape,
      },
      ...head,
    ),
    accessoriesBehind.length
      ? n(
          'g',
          {
            'data-part': 'accessory-back',
            'data-motion': 'accessory',
            'data-fit-shape': config.shape,
          },
          ...accessoriesBehind,
        )
      : null,
    path(shape, {
      'data-shape': config.shape,
      fill: config.color,
      stroke: config.outlineColor,
      strokeWidth: config.outlineWidth,
      strokeLinejoin: 'round',
    }),
    config.depth === 'flat'
      ? null
      : path(shape, {
          fill: \`url(#\${depthId})\`,
          'data-part': 'body-depth',
          'data-depth': config.depth,
          pointerEvents: 'none',
        }),
    frontHead.length
      ? n(
          'g',
          {
            'data-part': 'head-front',
            'data-motion': 'head',
            'data-fit-shape': config.shape,
          },
          ...frontHead,
        )
      : null,
    group(
      'gaze',
      n(
        'g',
        {
          'data-part': 'eyes',
          'data-eyes': config.eyes,
          'data-iris': config.iris,
        },
        ...eyes,
      ),
    ),
    brows,
    nose,
    mouth,
    n(
      'g',
      {
        'data-part': 'accessory',
        'data-motion': 'accessory',
        'data-fit-shape': config.shape,
      },
      ...accessoriesFront,
    ),
  );
  return n(
    'g',
    null,
    depthDefinition,
    group(
      'shadow',
      ellipse(128, 238, 55, 6, { fill: '#30214c', opacity: 0.1 }),
    ),
    body,
    ...renderEffects({ n, path, ellipse, group }, config, state),
  );
}
`,Ie=`import { animationPlan } from './config.js';
// Cleans up both animations and observers; responds to live OS preferences.
export function mountMotion(element, motion, preferences, playing) {
  if (!element || !playing) return () => {};
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let animations = [];
  let visible = true;
  const cancel = () => {
    animations.forEach((a) => a.cancel());
    animations = [];
  };
  const update = () => {
    cancel();
    const reduced = preferences.respectReducedMotion && media.matches;
    for (const step of animationPlan(motion, reduced)) {
      const target = element.querySelector(\`[data-motion="\${step.type}"]\`);
      if (target?.animate)
        animations.push(target.animate(step.keyframes, step.options));
    }
    if (!visible) animations.forEach((a) => a.pause());
  };
  update();
  media.addEventListener('change', update);
  let observer;
  if (
    preferences.pauseOffscreen &&
    typeof IntersectionObserver !== 'undefined'
  ) {
    observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      animations.forEach((a) => (visible ? a.play() : a.pause()));
    });
    observer.observe(element);
  }
  return () => {
    cancel();
    media.removeEventListener('change', update);
    observer?.disconnect();
  };
}

export function reactionDuration(state) {
  return (
    {
      happy: 1600,
      success: 1800,
      surprised: 1200,
      thinking: 3000,
      sad: 2200,
      error: 1300,
      loading: 3600,
      sleeping: 3600,
      singing: 2800,
    }[state] || 0
  );
}
// Authored phases: anticipation, action, settling. Time is explicit for faithful recordings.
export function sampleCharacter(config, state, time, look = { x: 0, y: 0 }) {
  const t = Math.max(0, time);
  const frame = {
    x: 0,
    y: 0,
    sx: 1,
    sy: 1,
    rotate: 0,
    opacity: 1,
    gx: look.x || 0,
    gy: look.y || 0,
    blink: 1,
    ears: 0,
    shadow: 1,
  };
  const soft = ['ghost', 'cloud', 'wobbi'].includes(config.shape);
  frame.y = soft ? Math.sin(t * 1.7) * 2.6 : 0;
  frame.gx += Math.sin(t * 0.71) * 1.2;
  frame.gy += Math.sin(t * 0.47) * 0.8;
  const blinkTime = t % 6.7;
  if (blinkTime > 2.8 && blinkTime < 2.98)
    frame.blink = 1 - 0.98 * Math.sin(((blinkTime - 2.8) / 0.18) * Math.PI);
  if (blinkTime > 3.2 && blinkTime < 3.34)
    frame.blink = 1 - 0.96 * Math.sin(((blinkTime - 3.2) / 0.14) * Math.PI);
  const points = (rows, phase) => {
    const b = rows.findIndex((r) => r[0] >= phase);
    if (b <= 0) return rows[b < 0 ? rows.length - 1 : 0].slice(1);
    const a = rows[b - 1],
      z = rows[b],
      v = (phase - a[0]) / (z[0] - a[0]),
      u = v * v * (3 - 2 * v);
    return a.slice(1).map((x, i) => x + (z[i + 1] - x) * u);
  };
  if (['happy', 'success'].includes(state)) {
    const p = Math.min(t / 1.45, 1);
    const [y, sx, sy, r] = points(
      [
        [0, 0, 1, 1, 0],
        [0.13, 9, 1.12, 0.86, -3],
        [0.29, -20, 0.94, 1.12, 1],
        [0.48, -32, 0.98, 1.04, 4],
        [0.68, 5, 1.13, 0.86, -2],
        [0.83, -3, 0.98, 1.03, 1],
        [1, 0, 1, 1, 0],
      ],
      p,
    );
    Object.assign(frame, {
      y,
      sx,
      sy,
      rotate: r,
    });
  }
  if (state === 'thinking') {
    frame.rotate = Math.sin((Math.min(t / 1.1, 1) * Math.PI) / 2) * 7;
  }
  if (state === 'loading') {
    frame.y = Math.sin(t * 2) * 2;
    frame.rotate = Math.sin(t * 1.3) * 3;
    frame.gx += Math.sin(t * 1.8) * 3;
  }
  if (state === 'sleeping') {
    frame.y += Math.sin(t * 1.35) * 1.6 + 3;
    frame.rotate = Math.sin(t * 0.72) * 1.8;
    frame.blink = 1;
  }
  if (state === 'singing') {
    frame.y = -6 - Math.abs(Math.sin(t * 4.2)) * 9;
    frame.rotate = Math.sin(t * 4.2) * 4;
    frame.sx = 1 + Math.sin(t * 8.4) * 0.025;
    frame.sy = 2 - frame.sx;
  }
  if (state === 'sad') {
    frame.y += Math.min(t, 1) * 5;
    frame.rotate = 5;
    frame.gy += 4;
  }
  if (state === 'error') {
    frame.x = Math.sin(t * 27) * 6 * Math.max(0, 1 - t / 1.1);
    frame.rotate = frame.x * 0.6;
  }
  if (state === 'surprised') {
    frame.sy = 1 + Math.sin(Math.min(t / 0.9, 1) * Math.PI) * 0.14;
    frame.sx = 2 - frame.sy;
    frame.y = -Math.sin(Math.min(t / 0.9, 1) * Math.PI) * 8;
  }
  frame.shadow = 1 + Math.min(0, frame.y) * 0.012;
  return frame;
}
export function applyCharacterFrame(element, f, time = 0) {
  const part = (p) => element.querySelector('[data-part="' + p + '"]');
  part('body')?.setAttribute(
    'transform',
    \`translate(\${f.x} \${f.y}) translate(128 215) rotate(\${f.rotate}) scale(\${f.sx} \${f.sy}) translate(-128 -215)\`,
  );
  part('body')?.setAttribute('opacity', String(f.opacity));
  part('shadow')?.setAttribute(
    'transform',
    \`translate(128 238) scale(\${f.shadow} 1) translate(-128 -238)\`,
  );
  part('gaze')?.setAttribute(
    'transform',
    \`translate(\${f.gx * 0.35} \${f.gy * 0.35})\`,
  );
  element
    .querySelectorAll('[data-part="pupil"]')
    .forEach((p) =>
      p.setAttribute('transform', \`translate(\${f.gx * 0.65} \${f.gy * 0.65})\`),
    );
  element.querySelectorAll('[data-eye]').forEach((p) => {
    const expressionClosed =
      p.getAttribute('data-expression-closed') === 'true';
    p.style.transform = \`scaleY(\${expressionClosed ? 1 : f.blink})\`;
    p.setAttribute(
      'opacity',
      String(expressionClosed ? 1 : Math.min(1, f.blink * 3)),
    );
  });
  element
    .querySelectorAll('[data-blink-line]')
    .forEach((p) =>
      p.setAttribute('opacity', String(1 - Math.min(1, f.blink * 3))),
    );
  part('accessory')?.setAttribute(
    'transform',
    \`translate(\${f.gx * 0.15} \${f.gy * 0.15})\`,
  );
  part('ear-0')?.setAttribute('transform', \`rotate(\${f.ears} 70 62)\`);
  part('ear-1')?.setAttribute('transform', \`rotate(\${-f.ears} 185 62)\`);
  part('bunny-ear-0')?.setAttribute(
    'transform',
    \`rotate(\${f.ears * 0.45} 104 68)\`,
  );
  part('bunny-ear-1')?.setAttribute(
    'transform',
    \`rotate(\${-f.ears * 0.45} 152 68)\`,
  );
  part('round-ear-0')?.setAttribute('transform', \`rotate(\${f.ears} 70 62)\`);
  part('round-ear-1')?.setAttribute('transform', \`rotate(\${-f.ears} 185 62)\`);
  part('halo')?.setAttribute(
    'transform',
    \`translate(0 \${Math.sin(time * 3.1) * 3})\`,
  );
  element.querySelectorAll('[data-wait-dot]').forEach((p, i) => {
    p.setAttribute(
      'opacity',
      String(0.3 + (0.7 * (Math.sin(time * 5 - i * 1.6) + 1)) / 2),
    );
  });
  element.querySelectorAll('[data-sleep-z]').forEach((node, i) => {
    const phase = (time * 0.55 + i * 0.28) % 1;
    node.setAttribute('opacity', String(Math.sin(phase * Math.PI) * 0.9));
    node.setAttribute('transform', \`translate(0 \${-phase * 12})\`);
  });
  const idea = element.querySelector('[data-effect="idea"]');
  idea?.setAttribute('transform', \`translate(0 \${-Math.sin(time * 3) * 3})\`);
  const singing = element.querySelector('[data-effect="singing"]');
  singing?.setAttribute(
    'transform',
    \`translate(0 \${-Math.abs(Math.sin(time * 3.4)) * 9})\`,
  );
}
export function mountCharacter(
  element,
  config,
  state = 'idle',
  playing = true,
  interactive = true,
) {
  if (!element || !playing) return () => {};
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const interactionTarget =
    element.closest?.('[data-gaze-zone]') || element.parentElement || element;
  let raf = 0,
    visible = true,
    last = 0,
    elapsed = 0,
    disposed = false;
  let target = { x: 0, y: 0 },
    look = { x: 0, y: 0 };
  const allowed = () =>
    playing &&
    !(config.accessibility.respectReducedMotion && media.matches) &&
    visible &&
    !document.hidden;
  const move = (event) => {
    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    target = {
      x: Math.max(
        -9,
        Math.min(
          9,
          ((event.clientX - rect.left - rect.width / 2) / rect.width) * 18,
        ),
      ),
      y: Math.max(
        -7,
        Math.min(
          7,
          ((event.clientY - rect.top - rect.height / 2) / rect.height) * 14,
        ),
      ),
    };
  };
  const leave = () => {
    target = { x: 0, y: 0 };
  };
  const tick = (now) => {
    if (disposed || !allowed()) {
      last = 0;
      return;
    }
    const dt = last ? Math.min((now - last) / 1000, 0.06) : 0;
    last = now;
    elapsed += dt;
    look.x += (target.x - look.x) * (1 - Math.exp(-dt * 9));
    look.y += (target.y - look.y) * (1 - Math.exp(-dt * 9));
    applyCharacterFrame(
      element,
      sampleCharacter(config, state, elapsed, look),
      elapsed,
    );
    raf = requestAnimationFrame(tick);
  };
  const restart = () => {
    cancelAnimationFrame(raf);
    last = 0;
    if (allowed()) raf = requestAnimationFrame(tick);
    else if (media.matches)
      applyCharacterFrame(element, sampleCharacter(config, state, 0), 0);
  };
  media.addEventListener('change', restart);
  document.addEventListener('visibilitychange', restart);
  if (interactive) {
    interactionTarget.addEventListener('pointermove', move, { passive: true });
    interactionTarget.addEventListener('pointerleave', leave);
  }
  let observer;
  if (
    config.accessibility.pauseOffscreen &&
    typeof IntersectionObserver !== 'undefined'
  ) {
    observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      restart();
    });
    observer.observe(element);
  }
  restart();
  return () => {
    disposed = true;
    cancelAnimationFrame(raf);
    observer?.disconnect();
    media.removeEventListener('change', restart);
    document.removeEventListener('visibilitychange', restart);
    interactionTarget.removeEventListener('pointermove', move);
    interactionTarget.removeEventListener('pointerleave', leave);
  };
}
`,Le=`const CASE_SENSITIVE_SVG_ATTRIBUTES = new Set([
  'gradientTransform',
  'gradientUnits',
  'preserveAspectRatio',
  'viewBox',
]);

export function svgAttributeName(name) {
  if (CASE_SENSITIVE_SVG_ATTRIBUTES.has(name)) return name;
  return name.replace(/[A-Z]/g, (letter) => \`-\${letter.toLowerCase()}\`);
}
`,Re={idle:`Repos`,happy:`Joie`,thinking:`Réflexion`,surprised:`Surprise`,sad:`Peur`,error:`Colère`,success:`Succès`,loading:`Chargement`,sleeping:`Sommeil`,singing:`Chant`};function ze(e){let t=u(e);if(t.length)throw Error(t.join(`
`));return i(e)}function Z(e){return e.replace(/^\s*\/\/.*(?:\r?\n|$)/gm,``).replace(/\/\*[\s\S]*?\*\//g,``).replace(/\n{3,}/g,`

`).trim()}function Be(e){return String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function Ve(e){return`const VALID_STATES = new Set(${JSON.stringify([...Object.keys(Re)])});

export const resolveState = (state) => VALID_STATES.has(state) ? state : 'idle';

export const preset = ${JSON.stringify(e,null,2)};
`}function He(e){return`'use client';

import { createElement, useEffect, useRef, useState } from 'react';
import { preset, resolveState } from './preset.js';
import { renderParts } from './render.js';
import { mountCharacter, reactionDuration } from './motion.js';
import './${e.componentName}.css';

export function ${e.componentName}({
  state = preset.defaultState,
  size = preset.size,
  playing = true,
  interactive = true,
  ...props
}) {
  const ref = useRef(null);
  const [poked, setPoked] = useState(false);
  const reaction = poked ? 'happy' : resolveState(state);

  useEffect(
    () => mountCharacter(ref.current, preset, reaction, playing, interactive),
    [reaction, playing, interactive],
  );

  useEffect(() => {
    if (!poked) return undefined;
    const timer = setTimeout(() => setPoked(false), reactionDuration('happy'));
    return () => clearTimeout(timer);
  }, [poked]);

  function react() {
    if (interactive) setPoked(true);
  }

  return (
    <svg
      ref={ref}
      className="wobbi-character"
      viewBox="-16 -16 288 288"
      width={size}
      height={size}
      role={interactive ? 'button' : 'img'}
      tabIndex={interactive ? 0 : undefined}
      aria-label={preset.accessibility.label}
      data-state={reaction}
      data-respect-motion={preset.accessibility.respectReducedMotion}
      onClick={react}
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                react();
              }
            }
          : undefined
      }
      {...props}
    >
      {renderParts(createElement, preset, reaction)}
    </svg>
  );
}
`}var Ue=`function animationPlan(motion, reduced = false) {
  if (reduced) return [];
  const enabled = (motion.movements || []).filter((move) => move.enabled);
  const strength = motion.intensity / 100;
  const transforms = {
    bounce: \`translateY(\${-18 * strength}px)\`,
    squash: \`scale(\${1 + 0.18 * strength}, \${1 - 0.16 * strength})\`,
    tilt: \`rotate(\${10 * strength}deg)\`,
    shake: \`translateX(\${9 * strength}px)\`,
    blink: \`scaleY(\${1 - 0.94 * strength})\`,
    'eye-movement': \`translate(\${7 * strength}px, \${-4 * strength}px)\`,
    mouth: \`scale(\${1 + 0.4 * strength}, \${1 + 0.3 * strength})\`,
  };
  return enabled.map((move, index) => ({
    type: move.type,
    target: move.type === 'blink' || move.type === 'eye-movement'
      ? 'eyes'
      : move.type === 'mouth'
        ? 'mouth'
        : move.type,
    keyframes: [
      { transform: 'none', offset: 0 },
      { transform: transforms[move.type], offset: 0.5 / enabled.length },
      { transform: 'none', offset: 1 / enabled.length },
      ...(enabled.length > 1 ? [{ transform: 'none', offset: 1 }] : []),
    ],
    options: {
      duration: motion.duration,
      delay: (index * motion.duration) / enabled.length,
      easing: motion.easing,
      iterations: motion.playback === 'loop' ? Infinity : 1,
      fill: 'none',
    },
  }));
}`;function We(e){return`${Ue}\n\n${Z(e.replace(/^import\s+[^;]+;\s*/gm,``))}\n`}var Ge=`.wobbi-character {
  display: block;
  overflow: visible;
}

.wobbi-character [data-eye] {
  transform-box: fill-box;
  transform-origin: center;
}

.wobbi-character:focus-visible {
  border-radius: 20px;
  outline: 2px solid #9270ff;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .wobbi-character * {
    transition: none !important;
  }
}
`;function Ke(e,t){let n=ze(e),r=n.componentName;return{[`${r}.jsx`]:He(n),[`${r}.css`]:Ge,"preset.js":Ve(n),"custom-shape.js":`${Z(t.customShape)}\n`,"render-model.js":`${Z(t.renderModel)}\n`,"render-effects.js":`${Z(t.renderEffects)}\n`,"render.js":`${Z(t.render)}\n`,"motion.js":We(t.motion),"index.js":`export { ${r} } from './${r}.jsx';\n`}}function qe(e){return`<script>
import { computed, defineComponent, h, onBeforeUnmount, ref, watchEffect } from 'vue';
import { preset, resolveState } from './preset.js';
import { renderParts } from './render.js';
import { mountCharacter, reactionDuration } from './motion.js';

export default defineComponent({
  name: '${e.componentName}',
  inheritAttrs: false,
  props: {
    state: { type: String, default: () => preset.defaultState },
    size: { type: Number, default: () => preset.size },
    playing: { type: Boolean, default: true },
    interactive: { type: Boolean, default: true },
  },
  setup(props, { attrs }) {
    const element = ref(null);
    const poked = ref(false);
    const reaction = computed(() => poked.value ? 'happy' : resolveState(props.state));
    let timer;

    watchEffect((onCleanup) => {
      if (!element.value) return;
      const dispose = mountCharacter(
        element.value,
        preset,
        reaction.value,
        props.playing,
        props.interactive,
      );
      onCleanup(dispose);
    });

    onBeforeUnmount(() => clearTimeout(timer));

    function react() {
      if (!props.interactive) return;
      clearTimeout(timer);
      poked.value = true;
      timer = setTimeout(() => { poked.value = false; }, reactionDuration('happy'));
    }

    function onKeydown(event) {
      if (!props.interactive || !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      react();
    }

    return () => h(
      'svg',
      {
        ...attrs,
        ref: element,
        class: ['wobbi-character', attrs.class],
        viewBox: '-16 -16 288 288',
        width: props.size,
        height: props.size,
        role: props.interactive ? 'button' : 'img',
        tabindex: props.interactive ? 0 : undefined,
        'aria-label': attrs['aria-label'] || preset.accessibility.label,
        'data-state': reaction.value,
        'data-respect-motion': preset.accessibility.respectReducedMotion,
        onClick: react,
        onKeydown,
      },
      renderParts(
        (tag, attributes, ...children) =>
          h(
            tag,
            attributes,
            children.length === 1 ? children[0] : children,
          ),
        preset,
        reaction.value,
      ),
    );
  },
});
<\/script>

<style src="./${e.componentName}.css"></style>
`}function Je(e,t){let n=ze(e),r=n.componentName;return{[`${r}.vue`]:qe(n),[`${r}.css`]:Ge,"preset.js":Ve(n),"custom-shape.js":`${Z(t.customShape)}\n`,"render-model.js":`${Z(t.renderModel)}\n`,"render-effects.js":`${Z(t.renderEffects)}\n`,"render.js":`${Z(t.render)}\n`,"motion.js":We(t.motion),"index.js":`export { default as ${r} } from './${r}.vue';\n`}}var Ye=`:root {
  color: #171321;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  background: #f4f1ff;
}

* { box-sizing: border-box; }

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
}

button { font: inherit; }

.preview-shell {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(260px, 360px);
  min-height: 100vh;
}

.preview-stage {
  display: grid;
  place-items: center;
  min-height: 520px;
  padding: 40px;
  background: #f1edff;
}

.preview-panel {
  padding: 36px 28px;
  background: white;
  box-shadow: -12px 0 32px rgb(38 24 74 / 8%);
}

.preview-panel h1 { margin: 0 0 8px; font-size: 28px; }
.preview-panel p { margin: 0 0 24px; color: #716980; line-height: 1.5; }
.preview-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }

.preview-actions button,
.play-toggle {
  min-height: 42px;
  border: 1px solid #ded7ec;
  border-radius: 10px;
  color: #322744;
  background: white;
  cursor: pointer;
  transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.preview-actions button:hover,
.play-toggle:hover { border-color: #9270ff; background: #f5f1ff; }
.preview-actions button:active,
.play-toggle:active { transform: scale(.96); }
.preview-actions button[aria-pressed='true'] { border-color: #7650db; color: #6842cf; background: #eee7ff; }
.play-toggle { width: 100%; margin-top: 16px; }

@media (max-width: 720px) {
  .preview-shell { grid-template-columns: 1fr; }
  .preview-stage { min-height: 390px; padding: 24px; }
  .preview-panel { box-shadow: 0 -12px 32px rgb(38 24 74 / 8%); }
}
`;function Xe(e,t){let n=ze(e),r=Object.entries(Re).map(([e,t])=>`    <button data-state="${e}"${e===`idle`?` aria-pressed="true"`:``}>${t}</button>`).join(`
`),i=e=>e.replace(/^import\s+[^;]+;\s*/gm,``).replace(/\bexport\s+(?=(const|let|var|function|class)\b)/g,``),a=`(() => {
'use strict';

${i(Ve(n))}

window.WobbiConfig = { preset, resolveState };
})();
`,o=`(() => {
'use strict';

${i(Z(t.customShape))}

${i(Z(t.renderModel))}

${i(Z(t.renderEffects))}

${i(Z(t.render))}

window.WobbiRenderer = { renderParts };
})();
`,s=`(() => {
'use strict';

${i(We(t.motion))}

window.WobbiMotion = { mountCharacter, reactionDuration };
})();
`,c=`(() => {
'use strict';

const { preset, resolveState } = window.WobbiConfig;
const { renderParts } = window.WobbiRenderer;
const { mountCharacter, reactionDuration } = window.WobbiMotion;
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

${i(Z(t.svgAttributes))}

function node(tag, props, ...children) {
  const element = document.createElementNS(SVG_NAMESPACE, tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (key === 'key' || value == null) continue;
    if (key === 'style') {
      Object.assign(element.style, value);
      continue;
    }
    element.setAttribute(svgAttributeName(key), String(value));
  }
  for (const child of children.flat(Infinity)) {
    if (child != null) element.append(child);
  }
  return element;
}

function createMascot(container, options = {}) {
  let { size = preset.size, playing = true, interactive = true, state = 'idle' } = options;
  const svg = node('svg', {
    class: 'wobbi-character',
    viewBox: '-16 -16 288 288',
    width: size,
    height: size,
    role: interactive ? 'button' : 'img',
    'aria-label': preset.accessibility.label,
  });
  if (interactive) svg.setAttribute('tabindex', '0');
  container.append(svg);

  let cleanup = () => {};
  let timer;
  let disposed = false;
  let current = resolveState(state);
  let base = current;

  function render(next) {
    cleanup();
    current = resolveState(next);
    svg.replaceChildren(renderParts(node, preset, current));
    svg.setAttribute('data-state', current);
    cleanup = mountCharacter(svg, preset, current, playing, interactive);
  }

  function react() {
    if (!interactive) return;
    clearTimeout(timer);
    render('happy');
    timer = setTimeout(() => {
      if (!disposed) render(base);
    }, reactionDuration('happy'));
  }

  function onKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      react();
    }
  }

  svg.addEventListener('click', react);
  svg.addEventListener('keydown', onKeyDown);
  render(current);

  return {
    element: svg,
    setState(next) {
      if (disposed) return;
      clearTimeout(timer);
      base = resolveState(next);
      render(base);
    },
    setPlaying(next) {
      if (disposed) return;
      playing = Boolean(next);
      render(current);
    },
    destroy() {
      disposed = true;
      clearTimeout(timer);
      cleanup();
      svg.removeEventListener('click', react);
      svg.removeEventListener('keydown', onKeyDown);
      svg.remove();
    },
  };
}

window.WobbiMascot = { createMascot, preset };
})();
`;return{"index.html":`<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${Be(n.name)} — aperçu Wobbi</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="config.js" defer><\/script>
    <script src="renderer.js" defer><\/script>
    <script src="animations.js" defer><\/script>
    <script src="mascot.js" defer><\/script>
    <script src="preview.js" defer><\/script>
  </head>
  <body>
    <main class="preview-shell">
      <section class="preview-stage" aria-label="Aperçu de la mascotte" data-gaze-zone>
        <div id="mascot"></div>
      </section>
      <aside class="preview-panel">
        <h1 id="mascot-name"></h1>
        <p>Testez toutes les réactions. Cliquez aussi directement sur la mascotte.</p>
        <div class="preview-actions">
${r}
        </div>
        <button class="play-toggle" id="play-toggle">Mettre en pause</button>
      </aside>
    </main>
  </body>
</html>
`,"styles.css":`${Ge}\n${Ye}`,"config.js":a,"renderer.js":o,"animations.js":s,"mascot.js":c,"preview.js":`(() => {
'use strict';

const { createMascot, preset } = window.WobbiMascot;
const mascot = createMascot(document.querySelector('#mascot'), { size: 320 });
const buttons = [...document.querySelectorAll('[data-state]')];
const playButton = document.querySelector('#play-toggle');
const previewStage = document.querySelector('.preview-stage');
let playing = true;

document.querySelector('#mascot-name').textContent = preset.name;
previewStage.style.backgroundColor =
  preset.background.type === 'transparent'
    ? 'transparent'
    : preset.background.color;
for (const button of buttons) {
  button.addEventListener('click', () => {
    mascot.setState(button.dataset.state);
    for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
  });
}
playButton.addEventListener('click', () => {
  playing = !playing;
  mascot.setPlaying(playing);
  playButton.textContent = playing ? 'Mettre en pause' : 'Reprendre les animations';
});

window.mascot = mascot;
})();
`,"README.md":`# ${n.name} — aperçu JavaScript\n\nOuvrez directement \`index.html\` dans un navigateur : aucun serveur, paquet ou outil de build n’est nécessaire. Les responsabilités sont séparées entre \`config.js\`, \`renderer.js\`, \`animations.js\`, \`mascot.js\` et \`preview.js\`. \`mascot.js\` expose \`window.WobbiMascot.createMascot\` pour intégrer la mascotte ailleurs.\n`}}var Ze={config:je,customShape:Me,renderModel:Ne,renderEffects:Pe,render:Fe,motion:Ie,svgAttributes:Le},Qe=e=>Xe(e,Ze),$e=e=>Ke(e,Ze),et=e=>Je(e,Ze);function tt(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}var nt=new Set([`gradientTransform`,`gradientUnits`,`preserveAspectRatio`,`viewBox`]);function rt(e){return nt.has(e)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}var it=_((e=>{var t=Object.defineProperty;(e=>t(e,`__esModule`,{value:!0}))(e),((e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:!0})})(e,{GIFEncoder:()=>A,applyPalette:()=>S,default:()=>R,nearestColor:()=>k,nearestColorIndex:()=>D,nearestColorIndexWithDistance:()=>O,prequantize:()=>x,quantize:()=>_,snapColorsToPalette:()=>T});var n={signature:`GIF`,version:`89a`,trailer:59,extensionIntroducer:33,applicationExtensionLabel:255,graphicControlExtensionLabel:249,imageSeparator:44,signatureSize:3,versionSize:3,globalColorTableFlagMask:128,colorResolutionMask:112,sortFlagMask:8,globalColorTableSizeMask:7,applicationIdentifierSize:8,applicationAuthCodeSize:3,disposalMethodMask:28,userInputFlagMask:2,transparentColorFlagMask:1,localColorTableFlagMask:128,interlaceFlagMask:64,idSortFlagMask:32,localColorTableSizeMask:7};function r(e=256){let t=0,n=new Uint8Array(e);return{get buffer(){return n.buffer},reset(){t=0},bytesView(){return n.subarray(0,t)},bytes(){return n.slice(0,t)},writeByte(e){r(t+1),n[t]=e,t++},writeBytes(e,i=0,a=e.length){r(t+a);for(let r=0;r<a;r++)n[t++]=e[r+i]},writeBytesView(e,i=0,a=e.byteLength){r(t+a),n.set(e.subarray(i,i+a),t),t+=a}};function r(e){var r=n.length;if(r>=e)return;e=Math.max(e,r*(r<1048576?2:1.125)>>>0),r!=0&&(e=Math.max(e,256));let i=n;n=new Uint8Array(e),t>0&&n.set(i.subarray(0,t),0)}}var i=12,a=5003,o=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function s(e,t,n,s,c=r(512),l=new Uint8Array(256),u=new Int32Array(a),d=new Int32Array(a)){let f=u.length,p=Math.max(2,s);l.fill(0),d.fill(0),u.fill(-1);let m=0,h=0,g=p+1,_=g,v=!1,y=_,b=(1<<y)-1,x=1<<g-1,S=x+1,C=x+2,w=0,T=n[0],E=0;for(let e=f;e<65536;e*=2)++E;E=8-E,c.writeByte(p),O(x);let D=n.length;for(let e=1;e<D;e++)next_block:{let t=n[e],r=(t<<i)+T,a=t<<E^T;if(u[a]===r){T=d[a];break next_block}let o=a===0?1:f-a;for(;u[a]>=0;)if(a-=o,a<0&&(a+=f),u[a]===r){T=d[a];break next_block}O(T),T=t,C<1<<i?(d[a]=C++,u[a]=r):(u.fill(-1),C=x+2,v=!0,O(x))}return O(T),O(S),c.writeByte(0),c.bytesView();function O(e){for(m&=o[h],h>0?m|=e<<h:m=e,h+=y;h>=8;)l[w++]=m&255,w>=254&&(c.writeByte(w),c.writeBytesView(l,0,w),w=0),m>>=8,h-=8;if((C>b||v)&&(v?(y=_,b=(1<<y)-1,v=!1):(++y,b=y===i?1<<y:(1<<y)-1)),e==S){for(;h>0;)l[w++]=m&255,w>=254&&(c.writeByte(w),c.writeBytesView(l,0,w),w=0),m>>=8,h-=8;w>0&&(c.writeByte(w),c.writeBytesView(l,0,w),w=0)}}}var c=s;function l(e,t,n){return e<<8&63488|t<<2&992|n>>3}function u(e,t,n,r){return e>>4|t&240|(n&240)<<4|(r&240)<<8}function d(e,t,n){return e>>4<<8|t&240|n>>4}function f(e,t,n){return e<t?t:e>n?n:e}function p(e){return e*e}function m(e,t,n){var r=0,i=1e100;let a=e[t],o=a.cnt,s=a.ac,c=a.rc,l=a.gc,u=a.bc;for(var d=a.fw;d!=0;d=e[d].fw){let t=e[d],a=t.cnt,m=o*a/(o+a);if(!(m>=i)){var f=0;n&&(f+=m*p(t.ac-s),f>=i)||(f+=m*p(t.rc-c),!(f>=i)&&(f+=m*p(t.gc-l),!(f>=i)&&(f+=m*p(t.bc-u),!(f>=i)&&(i=f,r=d))))}}a.err=i,a.nn=r}function h(){return{ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0}}function g(e,t){let n=Array(t===`rgb444`?4096:65536),r=e.length;if(t===`rgba4444`)for(let t=0;t<r;++t){let r=e[t],i=r>>24&255,a=r>>16&255,o=r>>8&255,s=r&255,c=u(s,o,a,i),l=c in n?n[c]:n[c]=h();l.rc+=s,l.gc+=o,l.bc+=a,l.ac+=i,l.cnt++}else if(t===`rgb444`)for(let t=0;t<r;++t){let r=e[t],i=r>>16&255,a=r>>8&255,o=r&255,s=d(o,a,i),c=s in n?n[s]:n[s]=h();c.rc+=o,c.gc+=a,c.bc+=i,c.cnt++}else for(let t=0;t<r;++t){let r=e[t],i=r>>16&255,a=r>>8&255,o=r&255,s=l(o,a,i),c=s in n?n[s]:n[s]=h();c.rc+=o,c.gc+=a,c.bc+=i,c.cnt++}return n}function _(e,t,n={}){let{format:r=`rgb565`,clearAlpha:i=!0,clearAlphaColor:a=0,clearAlphaThreshold:o=0,oneBitAlpha:s=!1}=n;if(!e||!e.buffer||!(e instanceof Uint8Array)&&!(e instanceof Uint8ClampedArray))throw Error(`quantize() expected RGBA Uint8Array data`);let c=new Uint32Array(e.buffer),l=n.useSqrt!==!1,u=r===`rgba4444`,d=g(c,r),h=d.length,_=h-1,y=new Uint32Array(h+1);for(var b=0,x=0;x<h;++x){let e=d[x];if(e!=null){var S=1/e.cnt;u&&(e.ac*=S),e.rc*=S,e.gc*=S,e.bc*=S,d[b++]=e}}p(t)/b<.022&&(l=!1);for(var x=0;x<b-1;++x)d[x].fw=x+1,d[x+1].bk=x,l&&(d[x].cnt=Math.sqrt(d[x].cnt));l&&(d[x].cnt=Math.sqrt(d[x].cnt));var C,w,T;for(x=0;x<b;++x){m(d,x,!1);var E=d[x].err;for(w=++y[0];w>1&&(T=w>>1,!(d[C=y[T]].err<=E));w=T)y[w]=C;y[w]=x}var D=b-t;for(x=0;x<D;){for(var O;;){var k=y[1];if(O=d[k],O.tm>=O.mtm&&d[O.nn].mtm<=O.tm)break;O.mtm==_?k=y[1]=y[y[0]--]:(m(d,k,!1),O.tm=x);var E=d[k].err;for(w=1;(T=w+w)<=y[0]&&(T<y[0]&&d[y[T]].err>d[y[T+1]].err&&T++,!(E<=d[C=y[T]].err));w=T)y[w]=C;y[w]=k}var A=d[O.nn],j=O.cnt,M=A.cnt,S=1/(j+M);u&&(O.ac=S*(j*O.ac+M*A.ac)),O.rc=S*(j*O.rc+M*A.rc),O.gc=S*(j*O.gc+M*A.gc),O.bc=S*(j*O.bc+M*A.bc),O.cnt+=A.cnt,O.mtm=++x,d[A.bk].fw=A.fw,d[A.fw].bk=A.bk,A.mtm=_}let N=[];var P=0;for(x=0;;++P){let e=f(Math.round(d[x].rc),0,255),t=f(Math.round(d[x].gc),0,255),n=f(Math.round(d[x].bc),0,255),r=255;u&&(r=f(Math.round(d[x].ac),0,255),s&&(r=r<=(typeof s==`number`?s:127)?0:255),i&&r<=o&&(e=t=n=a,r=0));let c=u?[e,t,n,r]:[e,t,n];if(v(N,c)||N.push(c),(x=d[x].fw)==0)break}return N}function v(e,t){for(let n=0;n<e.length;n++){let r=e[n],i=r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2],a=r.length>=4&&t.length>=4?r[3]===t[3]:!0;if(i&&a)return!0}return!1}function y(e,t){for(var n=0,r=0;r<e.length;r++){let i=e[r]-t[r];n+=i*i}return n}function b(e,t){return t>1?Math.round(e/t)*t:e}function x(e,{roundRGB:t=5,roundAlpha:n=10,oneBitAlpha:r=null}={}){let i=new Uint32Array(e.buffer);for(let e=0;e<i.length;e++){let a=i[e],o=a>>24&255,s=a>>16&255,c=a>>8&255,l=a&255;o=b(o,n),r&&(o=o<=(typeof r==`number`?r:127)?0:255),l=b(l,t),c=b(c,t),s=b(s,t),i[e]=o<<24|s<<16|c<<8|l<<0}}function S(e,t,n=`rgb565`){if(!e||!e.buffer||!(e instanceof Uint8Array)&&!(e instanceof Uint8ClampedArray))throw Error(`quantize() expected RGBA Uint8Array data`);if(t.length>256)throw Error(`applyPalette() only works with 256 colors or less`);let r=new Uint32Array(e.buffer),i=r.length,a=n===`rgb444`?4096:65536,o=new Uint8Array(i),s=Array(a);if(n===`rgba4444`)for(let e=0;e<i;e++){let n=r[e],i=n>>24&255,a=n>>16&255,c=n>>8&255,l=n&255,d=u(l,c,a,i),f=d in s?s[d]:s[d]=C(l,c,a,i,t);o[e]=f}else{let e=n===`rgb444`?d:l;for(let n=0;n<i;n++){let i=r[n],a=i>>16&255,c=i>>8&255,l=i&255,u=e(l,c,a),d=u in s?s[u]:s[u]=w(l,c,a,t);o[n]=d}}return o}function C(e,t,n,r,i){let a=0,o=1e100;for(let s=0;s<i.length;s++){let c=i[s],l=c[3],u=E(l-r);if(u>o)continue;let d=c[0];if(u+=E(d-e),u>o)continue;let f=c[1];if(u+=E(f-t),u>o)continue;let p=c[2];u+=E(p-n),!(u>o)&&(o=u,a=s)}return a}function w(e,t,n,r){let i=0,a=1e100;for(let o=0;o<r.length;o++){let s=r[o],c=s[0],l=E(c-e);if(l>a)continue;let u=s[1];if(l+=E(u-t),l>a)continue;let d=s[2];l+=E(d-n),!(l>a)&&(a=l,i=o)}return i}function T(e,t,n=5){if(!e.length||!t.length)return;let r=e.map(e=>e.slice(0,3)),i=n*n,a=e[0].length;for(let n=0;n<t.length;n++){let o=t[n];o=o.length<a?[o[0],o[1],o[2],255]:o.length>a?o.slice(0,3):o.slice();let s=O(r,o.slice(0,3),y),c=s[0],l=s[1];l>0&&l<=i&&(e[c]=o)}}function E(e){return e*e}function D(e,t,n=y){let r=1/0,i=-1;for(let a=0;a<e.length;a++){let o=e[a],s=n(t,o);s<r&&(r=s,i=a)}return i}function O(e,t,n=y){let r=1/0,i=-1;for(let a=0;a<e.length;a++){let o=e[a],s=n(t,o);s<r&&(r=s,i=a)}return[i,r]}function k(e,t,n=y){return e[D(e,t,n)]}function A(e={}){let{initialCapacity:t=4096,auto:i=!0}=e,a=r(t),o=5003,s=new Uint8Array(256),c=new Int32Array(o),l=new Int32Array(o),u=!1;return{reset(){a.reset(),u=!1},finish(){a.writeByte(n.trailer)},bytes(){return a.bytes()},bytesView(){return a.bytesView()},get buffer(){return a.buffer},get stream(){return a},writeHeader:d,writeFrame(e,t,n,r={}){let{transparent:o=!1,transparentIndex:f=0,delay:p=0,palette:m=null,repeat:h=0,colorDepth:g=8,dispose:_=-1}=r,v=!1;if(i?u||=(v=!0,d(),!0):v=!!r.first,t=Math.max(0,Math.floor(t)),n=Math.max(0,Math.floor(n)),v){if(!m)throw Error(`First frame must include a { palette } option`);M(a,t,n,m,g),P(a,m),h>=0&&N(a,h)}let y=Math.round(p/10);j(a,_,y,o,f);let b=!!m&&!v;ee(a,t,n,b?m:null),b&&P(a,m),te(a,e,t,n,g,s,c,l)}};function d(){I(a,`GIF89a`)}}function j(e,t,n,r,i){e.writeByte(33),e.writeByte(249),e.writeByte(4),i<0&&(i=0,r=!1);var a,o;r?(a=1,o=2):(a=0,o=0),t>=0&&(o=t&7),o<<=2,e.writeByte(o|0|a),F(e,n),e.writeByte(i||0),e.writeByte(0)}function M(e,t,n,r,i=8){let a=L(r.length)-1,o=i-1<<4|128|a;F(e,t),F(e,n),e.writeBytes([o,0,0])}function N(e,t){e.writeByte(33),e.writeByte(255),e.writeByte(11),I(e,`NETSCAPE2.0`),e.writeByte(3),e.writeByte(1),F(e,t),e.writeByte(0)}function P(e,t){let n=1<<L(t.length);for(let r=0;r<n;r++){let n=[0,0,0];r<t.length&&(n=t[r]),e.writeByte(n[0]),e.writeByte(n[1]),e.writeByte(n[2])}}function ee(e,t,n,r){if(e.writeByte(44),F(e,0),F(e,0),F(e,t),F(e,n),r){let t=L(r.length)-1;e.writeByte(128|t)}else e.writeByte(0)}function te(e,t,n,r,i=8,a,o,s){c(n,r,t,i,e,a,o,s)}function F(e,t){e.writeByte(t&255),e.writeByte(t>>8&255)}function I(e,t){for(var n=0;n<t.length;n++)e.writeByte(t.charCodeAt(n))}function L(e){return Math.max(Math.ceil(Math.log2(e)),1)}var R=A}))();function at(e,t,...n){let r=document.createElementNS(`http://www.w3.org/2000/svg`,e);for(let[e,n]of Object.entries(t||{}))if(e!==`key`&&n!=null){if(e===`style`){Object.assign(r.style,n);continue}r.setAttribute(rt(e),String(n))}return n.flat(1/0).forEach(e=>{e!=null&&r.append(e)}),r}function ot(e,t=`idle`,{size:n=512,transparent:i=!0,time:a=0}={}){let o=at(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`-16 -16 288 288`,width:n,height:n,role:`img`,"aria-label":e.accessibility.label});return i||o.append(at(`rect`,{x:-16,y:-16,width:288,height:288,fill:e.background.color})),o.append(l(at,e,t)),p(o,r(e,t,a),a),new XMLSerializer().serializeToString(o)}async function st(e,t,n,r){let i=new Blob([ot(t,n,r)],{type:`image/svg+xml`}),a=URL.createObjectURL(i);try{let t=new Image;t.src=a,await t.decode(),e.clearRect(0,0,r.size,r.size),e.drawImage(t,0,0,r.size,r.size)}finally{URL.revokeObjectURL(a)}}async function ct(e,t,n){let r=document.createElement(`canvas`);return r.width=r.height=n.size,await st(r.getContext(`2d`),e,t,n),new Promise((e,t)=>r.toBlob(n=>n?e(n):t(Error(`Impossible de créer cette image.`)),`image/png`))}function lt(e){if(e?.aborted)throw new DOMException(`Export annulé`,`AbortError`)}var ut=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];function dt(e,t){let n=new Uint8Array(e),r=[];for(let e=0;e<n.length;e+=4){if(n[e+3]<128)n[e]=1,n[e+1]=255,n[e+2]=1;else{r.push(n[e],n[e+1],n[e+2],255);let i=e/4,a=(ut[Math.floor(i/t)%4][i%t%4]-7.5)*.62;n[e]=Math.max(0,Math.min(255,n[e]+a)),n[e+1]=Math.max(0,Math.min(255,n[e+1]+a)),n[e+2]=Math.max(0,Math.min(255,n[e+2]+a))}n[e+3]=255}let i=[[1,255,1],...(0,it.quantize)(new Uint8Array(r),255,{format:`rgb565`})];return{indexed:(0,it.applyPalette)(n,i,`rgb565`),palette:i,transparentIndex:0}}async function ft(e,t,n,r,i){let a=n.size,o=document.createElement(`canvas`);o.width=o.height=a;let s=o.getContext(`2d`,{willReadFrequently:!0}),c=(0,it.GIFEncoder)();for(let o=0;o<54;o++){lt(i),await st(s,e,t,{...n,transparent:n.transparent,time:o/15});let{data:l}=s.getImageData(0,0,a,a),{indexed:u,palette:d,transparentIndex:f}=dt(l,a);c.writeFrame(u,a,a,{palette:d,delay:1e3/15,repeat:0,transparent:!0,transparentIndex:f}),r((o+1)/54),await new Promise(e=>setTimeout(e,0))}return lt(i),c.finish(),new Blob([c.bytes()],{type:`image/gif`})}function pt(){return typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(`video/webm`)&&typeof HTMLCanvasElement.prototype.captureStream==`function`}async function mt(e,t,n,r,i){if(!pt())throw Error(`Ce navigateur ne permet pas cet export vidéo. Choisissez GIF.`);let a=document.createElement(`canvas`);a.width=a.height=n.size;let o=a.getContext(`2d`);await st(o,e,t,{...n,transparent:n.transparent,time:0}),lt(i);let s=a.captureStream(30),c=[],l=MediaRecorder.isTypeSupported(`video/webm;codecs=vp9`)?`video/webm;codecs=vp9`:`video/webm`,u=new MediaRecorder(s,{mimeType:l,videoBitsPerSecond:6e6}),d=new Promise((e,t)=>{u.ondataavailable=e=>{e.data.size&&c.push(e.data)},u.onstop=()=>e(new Blob(c,{type:`video/webm`})),u.onerror=()=>t(Error(`L’encodage vidéo a échoué.`))});u.start();try{let a=performance.now();for(;performance.now()-a<3600;){lt(i);let s=(performance.now()-a)/1e3;await st(o,e,t,{...n,transparent:n.transparent,time:s}),r(Math.min(1,s/3.6)),await new Promise(e=>setTimeout(e,16))}u.stop();let s=await d;return r(1),s}catch(e){throw u.state!==`inactive`&&u.stop(),await d.catch(()=>void 0),e}finally{u.state!==`inactive`&&u.stop(),s.getTracks().forEach(e=>e.stop())}}var Q=d(),ht=[[`code`,`Site ou application`,`Une mascotte interactive`,x],[`image`,`Image`,`PNG ou SVG`,k],[`animation`,`Animation`,`GIF ou vidéo`,o],[`project`,`Projet Wobbi`,`Pour la modifier plus tard`,D],[`link`,`Lien à partager`,`Ouvert dans Wobbi`,j]];function gt(e){let t=e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-zA-Z0-9]+/g,` `).trim().split(` `).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(``);return/^[A-Z]/.test(t)?t:`Mon`+(t||`Wobbi`)}function _t(e){return new Blob([Ae(Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Ee(t)])))],{type:`application/zip`})}async function vt(e){if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(e);return}let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select(),document.execCommand(`copy`),t.remove()}var $=`./brand/`;function yt(e){return e.endsWith(`.jsx`)?`${$}react.svg`:e.endsWith(`.vue`)?`${$}vue.svg`:e.endsWith(`.html`)?`${$}html.svg`:e.endsWith(`.css`)?`${$}css.svg`:e.endsWith(`.js`)?`${$}javascript.svg`:`${$}document.svg`}function bt({config:n,onClose:r,notify:o}){let l=(0,M.useRef)(null),d=(0,M.useRef)(null),p=(0,M.useRef)(null),[g,_]=(0,M.useState)(`code`),[v,b]=(0,M.useState)(`react`),[x,S]=(0,M.useState)(()=>gt(n.name)),[w,E]=(0,M.useState)(`idle`),[D,O]=(0,M.useState)(512),[k,A]=(0,M.useState)(`src/components/mascot`),[j,N]=(0,M.useState)(``),[P,ee]=(0,M.useState)(``),[te,F]=(0,M.useState)(!1),[I,L]=(0,M.useState)(!1),[R,ne]=(0,M.useState)(!1),[re,z]=(0,M.useState)(0),[B,V]=(0,M.useState)(``),H=(0,M.useMemo)(()=>i({...n,name:n.name.trim()||`Wobbi`,slug:a(n.name)||`wobbi`,componentName:x,export:{...n.export,folder:k,framework:v===`vue`?`vue`:`react`}}),[n,k,v,x]),U=u(H),W=(0,M.useMemo)(()=>g!==`code`||U.length?{}:v===`javascript`?Qe(H):v===`vue`?et(H):$e(H),[H,v,g,U.length]),G=(0,M.useMemo)(()=>g===`link`&&!U.length?m(H):``,[H,g,U.length]),K=Object.keys(W),q=K.includes(j)?j:K[0]||``;(0,M.useEffect)(()=>{let e=l.current;return e.showModal(),()=>{d.current?.abort(),window.clearTimeout(p.current),e.open&&e.close()}},[]);function ie(e){_(e),b({code:`react`,image:`png`,animation:`gif`,project:`json`,link:`link`}[e]),V(``),e===`animation`&&O(256)}function ae(){d.current?.abort(),l.current.open&&l.current.close(),r()}async function oe({textToCopy:e,setCopiedIndicator:t,copiedIndicatorValue:n,idleIndicatorValue:r,successMessage:i,failureMessage:a}){try{await vt(e),t(n),o(i),window.clearTimeout(p.current),p.current=window.setTimeout(()=>t(r),1600)}catch{V(a)}}async function se(){q&&await oe({textToCopy:W[q],setCopiedIndicator:ee,copiedIndicatorValue:q,idleIndicatorValue:``,successMessage:`${q} copié.`,failureMessage:`Impossible de copier ce fichier. Vous pouvez sélectionner son contenu.`})}async function J(){G&&await oe({textToCopy:G,setCopiedIndicator:F,copiedIndicatorValue:!0,idleIndicatorValue:!1,successMessage:`Lien copié.`,failureMessage:`Impossible de copier ce lien. Vous pouvez le sélectionner.`})}async function Y(){V(``),L(!0),z(0),d.current=new AbortController;try{if(U.length)throw Error(`Vérifiez le nom du composant et le dossier dans les options avancées.`);let e=H.slug,t=H.background.type===`transparent`,n,r;if(g===`code`?(n=_t(W),r=`zip`):g===`project`?(n=new Blob([JSON.stringify(H,null,2)],{type:`application/json`}),r=`json`):g===`image`?(r=v,n=v===`svg`?new Blob([ot(H,w,{size:D,transparent:t})],{type:`image/svg+xml`}):await ct(H,w,{size:D,transparent:t})):(r=v===`gif`?`gif`:`webm`,n=await(v===`gif`?ft:mt)(H,w,{size:D,transparent:t},z,d.current.signal)),d.current.signal.aborted)return;tt(n,`${e}.${r}`),o(g===`project`?`Projet enregistré. Vous pourrez le rouvrir dans Wobbi.`:`Votre mascotte est prête !`)}catch(e){e.name!==`AbortError`&&V(e.message||`L’export a échoué. Vous pouvez réessayer.`)}finally{L(!1)}}let ce=g===`code`?[[`react`,`React`,`${$}react.svg`],[`vue`,`Vue.js`,`${$}vue.svg`],[`javascript`,`JavaScript`,`${$}javascript.svg`]]:g===`image`?[[`png`,`PNG`],[`svg`,`SVG`]]:[[`gif`,`GIF`],[`webm`,`Vidéo · WebM`]],le={react:`Composant React réutilisable, également compatible avec un composant client Next.js.`,vue:`Composant Vue réutilisable et modules associés, prêts à importer dans une application existante.`,javascript:`Démo HTML autonome : ouvrez index.html directement, même sans serveur local.`}[v];return(0,Q.jsx)(`dialog`,{className:`export-dialog`,ref:l,"aria-labelledby":`export-title`,onCancel:e=>{e.preventDefault(),ae()},onClick:e=>{e.target===e.currentTarget&&ae()},children:(0,Q.jsxs)(`div`,{className:`export-shell`,children:[(0,Q.jsxs)(`header`,{className:`dialog-heading`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h2`,{id:`export-title`,children:`Exporter votre mascotte`}),(0,Q.jsx)(`p`,{children:`Choisissez comment vous voulez l’utiliser.`})]}),(0,Q.jsx)(`button`,{type:`button`,className:`icon-button`,"aria-label":`Fermer l’export`,onClick:ae,children:(0,Q.jsx)(s,{size:21})})]}),(0,Q.jsxs)(`div`,{className:`dialog-body`,children:[(0,Q.jsx)(`div`,{className:`export-kinds`,children:ht.map(([e,t,n,r])=>(0,Q.jsxs)(`button`,{type:`button`,className:`export-kind`,"aria-pressed":g===e,onClick:()=>ie(e),disabled:I,children:[(0,Q.jsx)(r,{}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:t}),(0,Q.jsx)(`small`,{children:n})]}),g===e&&(0,Q.jsx)(y,{className:`selected-check`})]},e))}),(0,Q.jsxs)(`div`,{className:`export-options ${g===`code`?`is-code`:``}`,children:[(0,Q.jsxs)(`div`,{children:[g!==`project`&&g!==`link`&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`h2`,{children:`Format`}),(0,Q.jsx)(`div`,{className:`format-options`,children:ce.map(([e,t,n])=>(0,Q.jsxs)(`button`,{type:`button`,"aria-pressed":v===e,disabled:I||e===`webm`&&!pt(),onClick:()=>b(e),children:[n&&(0,Q.jsx)(`img`,{src:n,alt:``,"aria-hidden":`true`}),t]},e))})]}),g===`code`?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`label`,{children:[`Nom du composant`,(0,Q.jsx)(`input`,{value:x,disabled:I,onChange:e=>S(e.target.value),maxLength:50})]}),(0,Q.jsx)(`p`,{className:`export-help`,children:le}),(0,Q.jsxs)(`div`,{className:`export-advanced`,children:[(0,Q.jsxs)(`button`,{type:`button`,className:`export-advanced-trigger`,"aria-expanded":R,"aria-controls":`export-advanced-options`,onClick:()=>ne(e=>!e),children:[`Options avancées`,(0,Q.jsx)(e,{size:14,"aria-hidden":`true`})]}),(0,Q.jsx)(c,{open:R,id:`export-advanced-options`,children:(0,Q.jsxs)(`label`,{children:[`Dossier conseillé`,(0,Q.jsx)(`input`,{value:k,disabled:I,onChange:e=>A(e.target.value)})]})})]})]}):g===`project`?(0,Q.jsx)(`p`,{className:`export-help`,children:`Conservez les formes, couleurs, accessoires et réactions de votre création pour la reprendre plus tard dans Wobbi.`}):g===`link`?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`p`,{className:`export-help`,children:`Ouvert dans un navigateur, ce lien recharge exactement cette création dans Wobbi.`}),(0,Q.jsxs)(`div`,{className:`share-link-row`,children:[(0,Q.jsx)(`input`,{type:`text`,readOnly:!0,value:G,"aria-label":`Lien à partager`,onFocus:e=>e.target.select()}),(0,Q.jsxs)(`button`,{type:`button`,onClick:J,disabled:!G,children:[te?(0,Q.jsx)(y,{size:15,"aria-hidden":`true`}):(0,Q.jsx)(C,{size:15,"aria-hidden":`true`}),te?`Copié`:`Copier`]})]})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`label`,{children:[g===`image`?`Expression`:`Réaction à enregistrer`,(0,Q.jsx)(`select`,{value:w,disabled:I,onChange:e=>E(e.target.value),children:h.map(e=>(0,Q.jsx)(`option`,{value:e,children:f[e]},e))})]}),(0,Q.jsxs)(`label`,{children:[`Dimensions`,(0,Q.jsx)(`select`,{value:D,disabled:I,onChange:e=>O(Number(e.target.value)),children:(g===`animation`?[256,512]:[256,512,1024]).map(e=>(0,Q.jsxs)(`option`,{value:e,children:[e,` × `,e,` px`]},e))})]}),(0,Q.jsx)(`p`,{className:`export-help`,children:g===`image`?n.background.type===`transparent`?`Le fichier conserve le fond transparent choisi dans le studio.`:`Le fichier conserve la couleur de fond choisie dans le studio.`:n.background.type===`transparent`?`Séquence de 3,6 secondes sur fond transparent. Le GIF se répète.`:`Séquence de 3,6 secondes avec le fond du studio. Le GIF se répète.`})]})]}),g!==`code`&&(0,Q.jsxs)(`div`,{className:`export-preview ${n.background.type===`transparent`?`checkerboard`:``}`,style:{backgroundColor:n.background.type===`solid`?n.background.color:void 0},children:[(0,Q.jsx)(t,{config:n,state:w,size:170,playing:g!==`image`}),(0,Q.jsx)(`p`,{children:g===`project`?`Votre création, rééditable`:g===`link`?`Votre création, partagée telle quelle`:g===`image`?`La pose sélectionnée`:`Aperçu de la réaction`})]})]}),g===`code`&&K.length>0&&(0,Q.jsxs)(`section`,{className:`code-delivery`,"aria-label":`Code exporté`,children:[(0,Q.jsxs)(`nav`,{className:`code-file-tree`,"aria-label":`Fichiers exportés`,children:[(0,Q.jsx)(`h3`,{children:`Fichiers`}),(0,Q.jsx)(`ul`,{children:K.map(e=>(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`button`,{type:`button`,"aria-pressed":q===e,onClick:()=>N(e),children:[(0,Q.jsx)(`img`,{src:yt(e),alt:``,"aria-hidden":`true`}),(0,Q.jsx)(`span`,{children:e})]})},e))})]}),(0,Q.jsxs)(`div`,{className:`code-preview`,children:[(0,Q.jsxs)(`div`,{className:`code-preview-heading`,children:[(0,Q.jsx)(`strong`,{children:q}),(0,Q.jsxs)(`button`,{type:`button`,onClick:se,disabled:!q,children:[P===q?(0,Q.jsx)(y,{size:15,"aria-hidden":`true`}):(0,Q.jsx)(C,{size:15,"aria-hidden":`true`}),P===q?`Copié`:`Copier`]})]}),(0,Q.jsx)(`pre`,{tabIndex:`0`,children:(0,Q.jsx)(`code`,{children:W[q]})})]})]}),B&&(0,Q.jsx)(`p`,{className:`export-error`,role:`alert`,children:B})]}),(0,Q.jsxs)(`footer`,{className:`dialog-footer`,children:[(0,Q.jsxs)(`div`,{className:`footer-status`,children:[I&&(0,Q.jsx)(`progress`,{className:`export-progress`,"aria-label":`Progression de l’export`,value:re,max:`1`}),(0,Q.jsx)(`span`,{className:`dialog-note`,children:`Votre création vous appartient.`})]}),(0,Q.jsx)(`button`,{type:`button`,className:`text-button`,onClick:ae,children:`Annuler`}),g===`link`?(0,Q.jsxs)(`button`,{type:`button`,className:`primary`,disabled:!G,onClick:J,children:[te?(0,Q.jsx)(y,{size:17}):(0,Q.jsx)(C,{size:17}),te?`Lien copié`:`Copier le lien`]}):(0,Q.jsxs)(`button`,{type:`button`,className:`primary`,disabled:I,onClick:Y,children:[(0,Q.jsx)(T,{size:17}),I?`Préparation…`:{code:`Télécharger les fichiers`,image:`Télécharger l’image`,animation:`Télécharger l’animation`,project:`Enregistrer le projet`}[g]]})]})]})})}export{bt as ExportDialog};