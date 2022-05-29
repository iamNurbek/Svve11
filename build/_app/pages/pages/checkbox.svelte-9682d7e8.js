import{S as El,i as xl,s as _l,e as l,k as h,t as n,c as o,m as d,a,h as r,d as t,b as i,g as _e,F as e,N as vl,j as yl,n as wt,x as hl,y as dl,f as fl,z as bl,r as ul,p as kl,C as ml}from"../../chunks/index-427cb11b.js";import{T as gl,t as Sl}from"../../chunks/tableStyles-b061a170.js";function Ll(p){let s,f,u,y,v,E,x,L,g;return{c(){s=l("input"),f=h(),u=l("label"),y=n(p[1]),v=h(),x=l("br"),this.h()},l(c){s=o(c,"INPUT",{style:!0,type:!0,id:!0,"aria-label":!0,name:!0}),f=d(c),u=o(c,"LABEL",{style:!0,for:!0});var k=a(u);y=r(k,p[1]),v=d(k),k.forEach(t),x=o(c,"BR",{}),this.h()},h(){i(s,"style",p[4]),i(s,"type","checkbox"),i(s,"id",p[2]),i(s,"aria-label",p[1]),i(s,"name","accessible-checkbox"),i(u,"style",E=p[5]+p[3]),i(u,"for",p[2])},m(c,k){_e(c,s,k),s.checked=p[0],_e(c,f,k),_e(c,u,k),e(u,y),e(u,v),_e(c,x,k),L||(g=vl(s,"change",p[6]),L=!0)},p(c,[k]){k&16&&i(s,"style",c[4]),k&4&&i(s,"id",c[2]),k&2&&i(s,"aria-label",c[1]),k&1&&(s.checked=c[0]),k&2&&yl(y,c[1]),k&40&&E!==(E=c[5]+c[3])&&i(u,"style",E),k&4&&i(u,"for",c[2])},i:wt,o:wt,d(c){c&&t(s),c&&t(f),c&&t(u),c&&t(x),L=!1,g()}}}function Il(p,s,f){let{checkBoxLabel:u}=s,{id:y}=s,{checked:v=!1}=s,{defaultStyle:E="display: inline-block; user-select: none;"}=s,{checkBoxStyle:x=""}=s,{checkBoxLabelStyle:L=""}=s;function g(){v=this.checked,f(0,v)}return p.$$set=c=>{"checkBoxLabel"in c&&f(1,u=c.checkBoxLabel),"id"in c&&f(2,y=c.id),"checked"in c&&f(0,v=c.checked),"defaultStyle"in c&&f(3,E=c.defaultStyle),"checkBoxStyle"in c&&f(4,x=c.checkBoxStyle),"checkBoxLabelStyle"in c&&f(5,L=c.checkBoxLabelStyle)},[v,u,y,E,x,L,g]}class Bl extends El{constructor(s){super(),xl(this,s,Il,Ll,_l,{checkBoxLabel:1,id:2,checked:0,defaultStyle:3,checkBoxStyle:4,checkBoxLabelStyle:5})}}function Cl(p){let s,f,u,y,v,E,x,L,g,c,k,U,Ie,z,Be,Ce,F,Ae,we,A,Y,w,Z,Ne,Pe,$,Te,De,T,ee,Re,He,te,I,Oe,G,Ue,ze,V,Fe,Ge,Ve,le,N,oe,We,je,ae,qe,Me,b,ce,Je,Ke,se,Qe,Xe,ne,D,Ye,Nt="<Checkbox {checkBoxLabel} {id} {checked} {checkBoxStyle} {checkBoxLabelStyle}/>",Ze,$e,et,re,tt,lt,_,ie,ot,at,he,ct,st,de,nt,rt,fe,it,ht,be,dt,ft,ue,bt,ut,ke,R,kt,Pt=`<Checkbox
                checkBoxLabel="checkbox number one"
                id="checkbox-1"
                checked={false}
                checkBoxStyle='height: 1.5em; width: 1.5em; vertical-align: middle;'
                checkBoxLabelStyle='font-size:1em; vertical-align: middle;'
              />`,mt,pt,Et,me,xt,_t,W,H,vt,pe,P,Ee,yt,gt,xe,St,Lt,B,O,ve;return H=new Bl({props:{checkBoxLabel:"checkbox number one",id:"checkbox-1",checked:!1,checkBoxStyle:"height: 1.5em; width: 1.5em; vertical-align: middle;",checkBoxLabelStyle:"font-size:1em; vertical-align: middle;"}}),O=new gl({props:{tableProps:p[0]}}),{c(){s=l("article"),f=l("header"),u=l("h1"),y=n(pl),v=h(),E=l("ul"),x=l("li"),L=n("Source: "),g=l("a"),c=n(Ct),k=h(),U=l("li"),Ie=n("WAI-ARIA: "),z=l("a"),Be=n(At),Ce=h(),F=l("p"),Ae=n(`A checkbox is a widget that enables users to select zero, one or many options from a list of
			options. This means that each checkbox is independent of the other checkboxes in the list.`),we=h(),A=l("main"),Y=l("section"),w=l("fieldset"),Z=l("legend"),Ne=n("Installation"),Pe=h(),$=l("h2"),Te=n("Installation"),De=h(),T=l("section"),ee=l("p"),Re=n("Import the component in the script section of your Svelte file:"),He=h(),te=l("pre"),I=l("code"),Oe=n(`
              import `),G=l("span"),Ue=n("\u2774"),ze=n(" Checkbox "),V=l("span"),Fe=n("\u2775"),Ge=n(` from 'svve11'
            `),Ve=h(),le=l("section"),N=l("fieldset"),oe=l("legend"),We=n("Usage"),je=h(),ae=l("h2"),qe=n("Usage"),Me=h(),b=l("section"),ce=l("h3"),Je=n("Creating a Checkbox"),Ke=h(),se=l("p"),Qe=n(`A checkbox instance can be created by placing the code below in the body of your Svelte
						file.`),Xe=h(),ne=l("pre"),D=l("code"),Ye=n(`
              `),Ze=n(Nt),$e=n(`
              `),et=h(),re=l("p"),tt=n("Each attribute should be defined as follows:"),lt=h(),_=l("ul"),ie=l("li"),ot=n("id (string): sets the id attribute of the checkbox component."),at=h(),he=l("li"),ct=n("checkBoxLabel (string): sets the aria-label attribute of the checkbox component."),st=h(),de=l("li"),nt=n(`checked (boolean): sets the initial state of the checkbox, where true will render a
							pre-checked box and false will render a non-checked checkbox.`),rt=h(),fe=l("li"),it=n("checkBoxStyle (string): sets the styling for the checkbox"),ht=h(),be=l("li"),dt=n("checkBoxLabelStyle (string): sets the styling for the checkbox label text."),ft=h(),ue=l("h4"),bt=n("Example Checkbox Code:"),ut=h(),ke=l("pre"),R=l("code"),kt=n(`
              `),mt=n(Pt),pt=n(`
              `),Et=h(),me=l("h4"),xt=n("Example Checkbox:"),_t=h(),W=l("div"),hl(H.$$.fragment),vt=h(),pe=l("section"),P=l("fieldset"),Ee=l("legend"),yt=n("Component API"),gt=h(),xe=l("h2"),St=n("Component API"),Lt=h(),B=l("div"),hl(O.$$.fragment),this.h()},l(S){s=o(S,"ARTICLE",{class:!0});var j=a(s);f=o(j,"HEADER",{});var q=a(f);u=o(q,"H1",{});var Tt=a(u);y=r(Tt,pl),Tt.forEach(t),v=d(q),E=o(q,"UL",{class:!0});var ye=a(E);x=o(ye,"LI",{});var It=a(x);L=r(It,"Source: "),g=o(It,"A",{href:!0});var Dt=a(g);c=r(Dt,Ct),Dt.forEach(t),It.forEach(t),k=d(ye),U=o(ye,"LI",{});var Bt=a(U);Ie=r(Bt,"WAI-ARIA: "),z=o(Bt,"A",{href:!0});var Rt=a(z);Be=r(Rt,At),Rt.forEach(t),Bt.forEach(t),ye.forEach(t),Ce=d(q),F=o(q,"P",{class:!0});var Ht=a(F);Ae=r(Ht,`A checkbox is a widget that enables users to select zero, one or many options from a list of
			options. This means that each checkbox is independent of the other checkboxes in the list.`),Ht.forEach(t),q.forEach(t),we=d(j),A=o(j,"MAIN",{});var M=a(A);Y=o(M,"SECTION",{});var Ot=a(Y);w=o(Ot,"FIELDSET",{});var J=a(w);Z=o(J,"LEGEND",{});var Ut=a(Z);Ne=r(Ut,"Installation"),Ut.forEach(t),Pe=d(J),$=o(J,"H2",{});var zt=a($);Te=r(zt,"Installation"),zt.forEach(t),De=d(J),T=o(J,"SECTION",{class:!0});var ge=a(T);ee=o(ge,"P",{});var Ft=a(ee);Re=r(Ft,"Import the component in the script section of your Svelte file:"),Ft.forEach(t),He=d(ge),te=o(ge,"PRE",{});var Gt=a(te);I=o(Gt,"CODE",{class:!0});var K=a(I);Oe=r(K,`
              import `),G=o(K,"SPAN",{class:!0});var Vt=a(G);Ue=r(Vt,"\u2774"),Vt.forEach(t),ze=r(K," Checkbox "),V=o(K,"SPAN",{class:!0});var Wt=a(V);Fe=r(Wt,"\u2775"),Wt.forEach(t),Ge=r(K,` from 'svve11'
            `),K.forEach(t),Gt.forEach(t),ge.forEach(t),J.forEach(t),Ot.forEach(t),Ve=d(M),le=o(M,"SECTION",{});var jt=a(le);N=o(jt,"FIELDSET",{});var Q=a(N);oe=o(Q,"LEGEND",{});var qt=a(oe);We=r(qt,"Usage"),qt.forEach(t),je=d(Q),ae=o(Q,"H2",{});var Mt=a(ae);qe=r(Mt,"Usage"),Mt.forEach(t),Me=d(Q),b=o(Q,"SECTION",{class:!0});var m=a(b);ce=o(m,"H3",{});var Jt=a(ce);Je=r(Jt,"Creating a Checkbox"),Jt.forEach(t),Ke=d(m),se=o(m,"P",{});var Kt=a(se);Qe=r(Kt,`A checkbox instance can be created by placing the code below in the body of your Svelte
						file.`),Kt.forEach(t),Xe=d(m),ne=o(m,"PRE",{});var Qt=a(ne);D=o(Qt,"CODE",{class:!0});var Se=a(D);Ye=r(Se,`
              `),Ze=r(Se,Nt),$e=r(Se,`
              `),Se.forEach(t),Qt.forEach(t),et=d(m),re=o(m,"P",{});var Xt=a(re);tt=r(Xt,"Each attribute should be defined as follows:"),Xt.forEach(t),lt=d(m),_=o(m,"UL",{class:!0});var C=a(_);ie=o(C,"LI",{});var Yt=a(ie);ot=r(Yt,"id (string): sets the id attribute of the checkbox component."),Yt.forEach(t),at=d(C),he=o(C,"LI",{});var Zt=a(he);ct=r(Zt,"checkBoxLabel (string): sets the aria-label attribute of the checkbox component."),Zt.forEach(t),st=d(C),de=o(C,"LI",{});var $t=a(de);nt=r($t,`checked (boolean): sets the initial state of the checkbox, where true will render a
							pre-checked box and false will render a non-checked checkbox.`),$t.forEach(t),rt=d(C),fe=o(C,"LI",{});var el=a(fe);it=r(el,"checkBoxStyle (string): sets the styling for the checkbox"),el.forEach(t),ht=d(C),be=o(C,"LI",{});var tl=a(be);dt=r(tl,"checkBoxLabelStyle (string): sets the styling for the checkbox label text."),tl.forEach(t),C.forEach(t),ft=d(m),ue=o(m,"H4",{});var ll=a(ue);bt=r(ll,"Example Checkbox Code:"),ll.forEach(t),ut=d(m),ke=o(m,"PRE",{});var ol=a(ke);R=o(ol,"CODE",{class:!0});var Le=a(R);kt=r(Le,`
              `),mt=r(Le,Pt),pt=r(Le,`
              `),Le.forEach(t),ol.forEach(t),Et=d(m),me=o(m,"H4",{});var al=a(me);xt=r(al,"Example Checkbox:"),al.forEach(t),_t=d(m),W=o(m,"DIV",{class:!0});var cl=a(W);dl(H.$$.fragment,cl),cl.forEach(t),m.forEach(t),Q.forEach(t),jt.forEach(t),vt=d(M),pe=o(M,"SECTION",{});var sl=a(pe);P=o(sl,"FIELDSET",{});var X=a(P);Ee=o(X,"LEGEND",{});var nl=a(Ee);yt=r(nl,"Component API"),nl.forEach(t),gt=d(X),xe=o(X,"H2",{});var rl=a(xe);St=r(rl,"Component API"),rl.forEach(t),Lt=d(X),B=o(X,"DIV",{role:!0,tabindex:!0,style:!0,class:!0});var il=a(B);dl(O.$$.fragment,il),il.forEach(t),X.forEach(t),sl.forEach(t),M.forEach(t),j.forEach(t),this.h()},h(){i(g,"href",Ct),i(z,"href",At),i(E,"class","resource-links-list"),i(F,"class","header-paragraph"),i(G,"class","curly-symbol"),i(V,"class","curly-symbol"),i(I,"class","code-block"),i(T,"class","content-section"),i(D,"class","code-block"),i(_,"class","options-object-list"),i(R,"class","code-block"),i(W,"class","example-checkbox"),i(b,"class","content-section"),i(B,"role","region"),i(B,"tabindex","0"),fl(B,"max-width","100%"),fl(B,"overflow","auto"),i(B,"class","props-table"),i(s,"class","page-component")},m(S,j){_e(S,s,j),e(s,f),e(f,u),e(u,y),e(f,v),e(f,E),e(E,x),e(x,L),e(x,g),e(g,c),e(E,k),e(E,U),e(U,Ie),e(U,z),e(z,Be),e(f,Ce),e(f,F),e(F,Ae),e(s,we),e(s,A),e(A,Y),e(Y,w),e(w,Z),e(Z,Ne),e(w,Pe),e(w,$),e($,Te),e(w,De),e(w,T),e(T,ee),e(ee,Re),e(T,He),e(T,te),e(te,I),e(I,Oe),e(I,G),e(G,Ue),e(I,ze),e(I,V),e(V,Fe),e(I,Ge),e(A,Ve),e(A,le),e(le,N),e(N,oe),e(oe,We),e(N,je),e(N,ae),e(ae,qe),e(N,Me),e(N,b),e(b,ce),e(ce,Je),e(b,Ke),e(b,se),e(se,Qe),e(b,Xe),e(b,ne),e(ne,D),e(D,Ye),e(D,Ze),e(D,$e),e(b,et),e(b,re),e(re,tt),e(b,lt),e(b,_),e(_,ie),e(ie,ot),e(_,at),e(_,he),e(he,ct),e(_,st),e(_,de),e(de,nt),e(_,rt),e(_,fe),e(fe,it),e(_,ht),e(_,be),e(be,dt),e(b,ft),e(b,ue),e(ue,bt),e(b,ut),e(b,ke),e(ke,R),e(R,kt),e(R,mt),e(R,pt),e(b,Et),e(b,me),e(me,xt),e(b,_t),e(b,W),bl(H,W,null),e(A,vt),e(A,pe),e(pe,P),e(P,Ee),e(Ee,yt),e(P,gt),e(P,xe),e(xe,St),e(P,Lt),e(P,B),bl(O,B,null),ve=!0},p:wt,i(S){ve||(ul(H.$$.fragment,S),ul(O.$$.fragment,S),ve=!0)},o(S){kl(H.$$.fragment,S),kl(O.$$.fragment,S),ve=!1},d(S){S&&t(s),ml(H),ml(O)}}}const pl="Checkbox",Ct="https://github.com/Svve11/",At="https://w3c.github.io/aria-practices/#checkbox";function Al(p){return[{id:"props-table-button",ariaLabel:"Button props table",ariaDescription:"This table describes the props that should be passed to the checkbox component",columnNames:["Prop","Type","Required","Default Value"],rowsContent:[["id","string","true","N/A"],["checkBoxLabel","string","true","N/A"],["checked","boolean","false","false"],["checkBoxStyle","string","false","N/A"],["checkBoxLabelStyle","string","false","N/A"]],styles:Sl}]}class Pl extends El{constructor(s){super(),xl(this,s,Al,Cl,_l,{})}}export{Pl as default};