import{F as le,S as ee,i as te,s as se,e as p,k as L,G as w,t as z,c as h,a as v,d as c,m as A,H as C,h as F,b as e,I as M,g as G,J as a,n as W,K as oe,L as ne,x as ce,y as ie,z as ve,M as ue,N as _e,O as fe,r as X,p as Y,C as pe}from"../chunks/index-9ff21ff5.js";const he=()=>{const l=le("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},de={subscribe(l){return he().page.subscribe(l)}};function me(l){let t,_,i,r,u,o,s,n,m,b,B,D,g,$,N,S,E,x,V,Z,y,k,q,j;return{c(){t=p("header"),_=p("div"),i=L(),r=p("nav"),u=w("svg"),o=w("path"),s=L(),n=p("ul"),m=p("li"),b=p("a"),B=z("Home"),D=L(),g=p("li"),$=p("a"),N=z("About me"),S=L(),E=p("li"),x=p("a"),V=z("My project"),Z=L(),y=w("svg"),k=w("path"),q=L(),j=p("div"),this.h()},l(d){t=h(d,"HEADER",{class:!0});var f=v(t);_=h(f,"DIV",{class:!0});var ae=v(_);ae.forEach(c),i=A(f),r=h(f,"NAV",{class:!0});var I=v(r);u=C(I,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var J=v(u);o=C(J,"path",{d:!0,class:!0}),v(o).forEach(c),J.forEach(c),s=A(I),n=h(I,"UL",{class:!0});var H=v(n);m=h(H,"LI",{class:!0});var K=v(m);b=h(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var O=v(b);B=F(O,"Home"),O.forEach(c),K.forEach(c),D=A(H),g=h(H,"LI",{class:!0});var R=v(g);$=h(R,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var U=v($);N=F(U,"About me"),U.forEach(c),R.forEach(c),S=A(H),E=h(H,"LI",{class:!0});var P=v(E);x=h(P,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=v(x);V=F(Q,"My project"),Q.forEach(c),P.forEach(c),H.forEach(c),Z=A(I),y=C(I,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var T=v(y);k=C(T,"path",{d:!0,class:!0}),v(k).forEach(c),T.forEach(c),I.forEach(c),q=A(f),j=h(f,"DIV",{class:!0});var re=v(j);re.forEach(c),f.forEach(c),this.h()},h(){e(_,"class","corner svelte-15v1box"),e(o,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(o,"class","svelte-15v1box"),e(u,"viewBox","0 0 2 3"),e(u,"aria-hidden","true"),e(u,"class","svelte-15v1box"),e(b,"sveltekit:prefetch",""),e(b,"href","/"),e(b,"class","svelte-15v1box"),e(m,"class","svelte-15v1box"),M(m,"active",l[0].url.pathname==="/"),e($,"sveltekit:prefetch",""),e($,"href","/about"),e($,"class","svelte-15v1box"),e(g,"class","svelte-15v1box"),M(g,"active",l[0].url.pathname==="/about"),e(x,"sveltekit:prefetch",""),e(x,"href","/projects"),e(x,"class","svelte-15v1box"),e(E,"class","svelte-15v1box"),M(E,"active",l[0].url.pathname==="/projects"),e(n,"class","svelte-15v1box"),e(k,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(k,"class","svelte-15v1box"),e(y,"viewBox","0 0 2 3"),e(y,"aria-hidden","true"),e(y,"class","svelte-15v1box"),e(r,"class","svelte-15v1box"),e(j,"class","corner svelte-15v1box"),e(t,"class","svelte-15v1box")},m(d,f){G(d,t,f),a(t,_),a(t,i),a(t,r),a(r,u),a(u,o),a(r,s),a(r,n),a(n,m),a(m,b),a(b,B),a(n,D),a(n,g),a(g,$),a($,N),a(n,S),a(n,E),a(E,x),a(x,V),a(r,Z),a(r,y),a(y,k),a(t,q),a(t,j)},p(d,[f]){f&1&&M(m,"active",d[0].url.pathname==="/"),f&1&&M(g,"active",d[0].url.pathname==="/about"),f&1&&M(E,"active",d[0].url.pathname==="/projects")},i:W,o:W,d(d){d&&c(t)}}}function be(l,t,_){let i;return oe(l,de,r=>_(0,i=r)),[i]}class ge extends ee{constructor(t){super(),te(this,t,be,me,se,{})}}function $e(l){let t,_,i,r;t=new ge({});const u=l[1].default,o=ne(u,l,l[0],null);return{c(){ce(t.$$.fragment),_=L(),i=p("main"),o&&o.c(),this.h()},l(s){ie(t.$$.fragment,s),_=A(s),i=h(s,"MAIN",{class:!0});var n=v(i);o&&o.l(n),n.forEach(c),this.h()},h(){e(i,"class","svelte-frf2tm")},m(s,n){ve(t,s,n),G(s,_,n),G(s,i,n),o&&o.m(i,null),r=!0},p(s,[n]){o&&o.p&&(!r||n&1)&&ue(o,u,s,s[0],r?fe(u,s[0],n,null):_e(s[0]),null)},i(s){r||(X(t.$$.fragment,s),X(o,s),r=!0)},o(s){Y(t.$$.fragment,s),Y(o,s),r=!1},d(s){pe(t,s),s&&c(_),s&&c(i),o&&o.d(s)}}}function Ee(l,t,_){let{$$slots:i={},$$scope:r}=t;return l.$$set=u=>{"$$scope"in u&&_(0,r=u.$$scope)},[r,i]}class ye extends ee{constructor(t){super(),te(this,t,Ee,$e,se,{})}}export{ye as default};
