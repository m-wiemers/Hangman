(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{24:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var i,a,c,o,r,l,s,b,u,d,j,h,p,v,x,O,f,g,m,w,k,y,C=t(1),E=t(12),S=t(16),z=t(4),U=t(2),W=(t(24),t(3)),A=t(0),D=W.a.div(i||(i=Object(U.a)(["\n  background-color: black;\n  width: 3px;\n  height: ",";\n  visibility: ",";\n  transform: rotate(\n    ","\n  );\n"])),(function(e){var n=e.height;return n&&"".concat(n,"px")}),(function(e){return e.visible?"inherit":"hidden"}),(function(e){var n=e.rotate;return n?"".concat(n,"deg"):"rotate(0deg)"})),I=function(e){var n=e.height,t=e.visible,i=e.rotate;return Object(A.jsx)(D,{height:n,visible:t,rotate:i})},J=W.a.div(a||(a=Object(U.a)(["\n  visibility: ",";\n"])),(function(e){return e.visible?"inherit":"hidden"})),K=W.a.div(c||(c=Object(U.a)(["\n  position: relative;\n  height: 75px;\n  width: 75px;\n  background-color: black;\n  border-radius: 50%;\n"]))),L=W.a.div(o||(o=Object(U.a)(["\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  height: 70px;\n  width: 70px;\n  background-color: white;\n  border-radius: 50%;\n"]))),N=W.a.div(r||(r=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 20px;\n  height: 5px;\n  width: 5px;\n  background-color: black;\n  border-radius: 50%;\n"])),(function(e){return e.right?"50px":"15px"})),X=W.a.div(l||(l=Object(U.a)(["\n  position: absolute;\n  left: 20px;\n  top: 50px;\n  height: 5px;\n  width: 30px;\n  background-color: black;\n"]))),B=W.a.p(s||(s=Object(U.a)(["\n  font-weight: bold;\n  position: absolute;\n  left: ",";\n  top: 20px;\n  margin: 0;\n"])),(function(e){return e.right?"46px":"13px"})),H=function(e){var n=e.visible,t=e.dead;return Object(A.jsx)(J,{visible:n,children:Object(A.jsx)(K,{children:Object(A.jsxs)(L,{children:[t?Object(A.jsx)(B,{children:"X"}):Object(A.jsx)(N,{}),t?Object(A.jsx)(B,{right:!0,children:"X"}):Object(A.jsx)(N,{right:!0}),Object(A.jsx)(X,{})]})})})},M=W.a.div(b||(b=Object(U.a)(["\n  height: 250px;\n"]))),R=W.a.div(u||(u=Object(U.a)(["\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n  width: max-content;\n"]))),V=W.a.div(d||(d=Object(U.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n"]))),Z=Object(W.a)(D)(j||(j=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 70px;\n"])),(function(e){return e.right?"55px":"18px"})),F=Object(W.a)(D)(h||(h=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 135px;\n"])),(function(e){return e.right?"55px":"18px"})),G=Object(W.a)(D)(p||(p=Object(U.a)(["\n  position: absolute;\n  top: -30%;\n  left: -20px;\n"]))),P=Object(W.a)(D)(v||(v=Object(U.a)(["\n  position: absolute;\n  top: 35%;\n  left: -70px;\n"]))),Q=Object(W.a)(D)(x||(x=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 168px;\n"])),(function(e){return e.right?"-52px":"-88px"})),T=function(e){var n=e.visibleIndex,t=e.dead;return Object(A.jsx)(M,{children:Object(A.jsxs)(R,{children:[Object(A.jsx)(Q,{visible:n<10,height:50,rotate:45}),Object(A.jsx)(Q,{right:n<9,visible:n<9,height:50,rotate:-45}),Object(A.jsx)(P,{visible:n<8,height:150}),Object(A.jsx)(G,{visible:n<7,height:100,rotate:90}),Object(A.jsx)(H,{dead:t,visible:n<6}),Object(A.jsx)(V,{children:Object(A.jsx)(I,{visible:n<5,height:70})}),Object(A.jsx)(Z,{visible:n<4,height:50,rotate:45}),Object(A.jsx)(Z,{right:n<3,visible:n<3,height:50,rotate:-45}),Object(A.jsx)(F,{visible:n<2,height:50,rotate:45}),Object(A.jsx)(F,{right:n<1,visible:n<1,height:50,rotate:-45})]})})},Y=W.a.button(O||(O=Object(U.a)(["\n  border: black solid 1px;\n  width: 40px;\n  border-bottom: red solid 2px;\n  background-color: ",";\n  font-size: 24px;\n  font-weight: bold;\n  color: ",";\n  margin: 2px;\n"])),(function(e){return e.disabled?"white":"black"}),(function(e){return e.disabled?"red":"white"})),q=function(e){var n=e.value,t=e.onClick,i=e.disabled;return Object(A.jsx)(Y,{disabled:i,onClick:t,children:n})},$=W.a.p(f||(f=Object(U.a)(["\n  font-size: 12px;\n  width: 12px;\n  margin-bottom: 5px;\n  margin-top: 0;\n  color: ",";\n  border-bottom: black solid 2px;\n\n  ::selection {\n    background: transparent;\n    visibility: hidden;\n  }\n"])),(function(e){return e.visible?"black":"transparent"})),_=W.a.div(g||(g=Object(U.a)(["\n  display: flex;\n  background-color: green;\n  justify-content: center;\n  align-items: flex-end;\n  column-gap: 5px;\n  height: 60px;\n"]))),ee=function(e){var n=e.winWord,t=e.finalWord,i=Object(C.useState)([]),a=Object(z.a)(i,2),c=a[0],o=a[1];Object(C.useEffect)((function(){var e=Object.assign([],n);o(e)}),[n]);var r=c.map((function(e,n){return Object(A.jsx)($,{visible:t.includes(e.toUpperCase()),children:e.toUpperCase()},n)}));return Object(A.jsx)(_,{children:r})},ne=[{value:"Q",line:1},{value:"W",line:1},{value:"E",line:1},{value:"R",line:1},{value:"T",line:1},{value:"Z",line:1},{value:"U",line:1},{value:"I",line:1},{value:"O",line:1},{value:"P",line:1},{value:"\xdc",line:1},{value:"A",line:2},{value:"S",line:2},{value:"D",line:2},{value:"F",line:2},{value:"G",line:2},{value:"H",line:2},{value:"J",line:2},{value:"K",line:2},{value:"L",line:2},{value:"\xd6",line:2},{value:"\xc4",line:2},{value:"Y",line:3},{value:"X",line:3},{value:"C",line:3},{value:"V",line:3},{value:"B",line:3},{value:"N",line:3},{value:"M",line:3}],te=["\xc4","\xe4","\xd6","\xf6","\xdc","\xfc"],ie=function(e){return!!te.includes(e)},ae=W.a.div(m||(m=Object(U.a)([""]))),ce=W.a.div(w||(w=Object(U.a)(["\n  width: 90%;\n"]))),oe=W.a.div(k||(k=Object(U.a)(["\n  position: absolute;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  height: 90vh;\n  width: 90%;\n  font-size: 40px;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n  row-gap: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  @media only screen and (min-width: 768px) {\n    opacity: 0.9;\n  }\n"]))),re=W.a.button(y||(y=Object(U.a)(["\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 1.5rem;\n  border-radius: 10px;\n  padding: 0.5rem 1rem;\n"])));function le(){var e=Object(C.useState)(""),n=Object(z.a)(e,2),t=n[0],i=n[1],a=Object(C.useState)(10),c=Object(z.a)(a,2),o=c[0],r=c[1],l=Object(C.useState)([]),s=Object(z.a)(l,2),b=s[0],u=s[1],d=Object(C.useState)(""),j=Object(z.a)(d,2),h=j[0],p=j[1],v=Object(C.useState)(!1),x=Object(z.a)(v,2),O=x[0],f=x[1],g=Object(C.useState)("Aktiengesellschaft"),m=Object(z.a)(g,2),w=m[0],k=m[1],y=Object(C.useState)([]),E=Object(z.a)(y,2),U=E[0],W=E[1],D=function(){k("Aktiengesellschaft");var e=Object.assign([],w);W(e)};Object(C.useEffect)((function(){D()}),[w]);var I=Object(C.useCallback)((function(e){var n=e.key;b.includes(n.toUpperCase())||(null!==w&&void 0!==w&&w.includes(n.toUpperCase())||r(o-1),n.match("[A-Za-z]")&&e.code.includes("Key")||ie(n)?i(n.toUpperCase()):i(""))}),[o,b,w]);Object(C.useEffect)((function(){0!==U.length&&U.every((function(e){return b.includes(e)}))&&p("Du hast gewonnen!")}),[b,U]),Object(C.useEffect)((function(){0===o&&(f(!0),p("Du hast verloren! Das Wort war: ".concat(w)))}),[o]),Object(C.useEffect)((function(){u((function(e){return[t].concat(Object(S.a)(e))}))}),[t]),Object(C.useEffect)((function(){return window&&window.addEventListener("keydown",I),function(){window.removeEventListener("keydown",I)}}),[I]);var J=function(e){return ne.map((function(n){return e===n.line&&Object(A.jsx)(q,{disabled:b.includes(n.value),onClick:function(){return e=n.value,console.log(w),null!==w&&void 0!==w&&w.includes(e)||r(o-1),void i(e);var e},value:n.value})}))};return Object(A.jsxs)("div",{className:"App",children:[h&&Object(A.jsxs)(oe,{children:[h,Object(A.jsx)(re,{onClick:function(){r(10),D(),p(""),u([]),i(""),f(!1)},children:"Noch mal"})]}),Object(A.jsx)("h1",{children:"Hangman"}),Object(A.jsx)("div",{style:{height:"min-content"},children:Object(A.jsx)(T,{visibleIndex:o,dead:O})}),Object(A.jsxs)(ce,{children:[Object(A.jsx)(ae,{children:J(1)}),Object(A.jsx)(ae,{children:J(2)}),Object(A.jsx)(ae,{children:J(3)})]}),Object(A.jsx)(ee,{winWord:w||"Kompromiss",finalWord:b}),Object(A.jsxs)("p",{children:["Du hast noch ",o," Versuche"]})]})}var se=document.getElementById("root");E.createRoot(se).render(Object(A.jsx)(C.StrictMode,{children:Object(A.jsx)(le,{})}))}},[[29,1,2]]]);
//# sourceMappingURL=main.8a2788cc.chunk.js.map