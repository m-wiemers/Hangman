(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{24:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var i,a,c,r,o,l,s,b,u,d,j,h,v,p,O,x,f,g,m,w,k,y=t(1),C=t(12),E=t(16),S=t(4),U=t(2),W=(t(24),t(3)),z=t(0),B=W.a.div(i||(i=Object(U.a)(["\n  background-color: black;\n  width: 3px;\n  height: ",";\n  visibility: ",";\n  transform: rotate(\n    ","\n  );\n"])),(function(e){var n=e.height;return n&&"".concat(n,"px")}),(function(e){return e.visible?"inherit":"hidden"}),(function(e){var n=e.rotate;return n?"".concat(n,"deg"):"rotate(0deg)"})),D=function(e){var n=e.height,t=e.visible,i=e.rotate;return Object(z.jsx)(B,{height:n,visible:t,rotate:i})},I=W.a.div(a||(a=Object(U.a)(["\n  visibility: ",";\n"])),(function(e){return e.visible?"inherit":"hidden"})),K=W.a.div(c||(c=Object(U.a)(["\n  position: relative;\n  height: 75px;\n  width: 75px;\n  background-color: black;\n  border-radius: 50%;\n"]))),M=W.a.div(r||(r=Object(U.a)(["\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  height: 70px;\n  width: 70px;\n  background-color: white;\n  border-radius: 50%;\n"]))),A=W.a.div(o||(o=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 20px;\n  height: 5px;\n  width: 5px;\n  background-color: black;\n  border-radius: 50%;\n"])),(function(e){return e.right?"50px":"15px"})),H=W.a.div(l||(l=Object(U.a)(["\n  position: absolute;\n  left: 20px;\n  top: 50px;\n  height: 5px;\n  width: 30px;\n  background-color: black;\n"]))),J=W.a.p(s||(s=Object(U.a)(["\n  font-weight: bold;\n  position: absolute;\n  left: ",";\n  top: 20px;\n  margin: 0;\n"])),(function(e){return e.right?"46px":"13px"})),L=function(e){var n=e.visible,t=e.dead;return Object(z.jsx)(I,{visible:n,children:Object(z.jsx)(K,{children:Object(z.jsxs)(M,{children:[t?Object(z.jsx)(J,{children:"X"}):Object(z.jsx)(A,{}),t?Object(z.jsx)(J,{right:!0,children:"X"}):Object(z.jsx)(A,{right:!0}),Object(z.jsx)(H,{})]})})})},N=W.a.div(b||(b=Object(U.a)(["\n  height: 250px;\n"]))),X=W.a.div(u||(u=Object(U.a)(["\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n  width: max-content;\n"]))),P=W.a.div(d||(d=Object(U.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n"]))),R=Object(W.a)(B)(j||(j=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 70px;\n"])),(function(e){return e.right?"55px":"18px"})),T=Object(W.a)(B)(h||(h=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 135px;\n"])),(function(e){return e.right?"55px":"18px"})),V=Object(W.a)(B)(v||(v=Object(U.a)(["\n  position: absolute;\n  top: -30%;\n  left: -20px;\n"]))),Z=Object(W.a)(B)(p||(p=Object(U.a)(["\n  position: absolute;\n  top: 35%;\n  left: -70px;\n"]))),F=Object(W.a)(B)(O||(O=Object(U.a)(["\n  position: absolute;\n  left: ",";\n  top: 168px;\n"])),(function(e){return e.right?"-52px":"-88px"})),G=function(e){var n=e.visibleIndex,t=e.dead;return Object(z.jsx)(N,{children:Object(z.jsxs)(X,{children:[Object(z.jsx)(F,{visible:n<10,height:50,rotate:45}),Object(z.jsx)(F,{right:n<9,visible:n<9,height:50,rotate:-45}),Object(z.jsx)(Z,{visible:n<8,height:150}),Object(z.jsx)(V,{visible:n<7,height:100,rotate:90}),Object(z.jsx)(L,{dead:t,visible:n<6}),Object(z.jsx)(P,{children:Object(z.jsx)(D,{visible:n<5,height:70})}),Object(z.jsx)(R,{visible:n<4,height:50,rotate:45}),Object(z.jsx)(R,{right:n<3,visible:n<3,height:50,rotate:-45}),Object(z.jsx)(T,{visible:n<2,height:50,rotate:45}),Object(z.jsx)(T,{right:n<1,visible:n<1,height:50,rotate:-45})]})})},Q=W.a.button(x||(x=Object(U.a)(["\n  border: black solid 1px;\n  width: 40px;\n  border-bottom: red solid 2px;\n  background-color: ",";\n  font-size: 24px;\n  font-weight: bold;\n  color: ",";\n  margin: 2px;\n"])),(function(e){return e.disabled?"white":"black"}),(function(e){return e.disabled?"red":"white"})),Y=function(e){var n=e.value,t=e.onClick,i=e.disabled;return Object(z.jsx)(Q,{disabled:i,onClick:t,children:n})},q=W.a.p(f||(f=Object(U.a)(["\n  font-size: 40px;\n  width: 40px;\n  margin-bottom: 5px;\n  margin-top: 0;\n  color: ",";\n  border-bottom: black solid 2px;\n\n  ::selection {\n    background: transparent;\n    visibility: hidden;\n  }\n"])),(function(e){return e.visible?"black":"transparent"})),$=W.a.div(g||(g=Object(U.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: flex-end;\n  column-gap: 10px;\n  height: 60px;\n"]))),_=function(e){var n=e.winWord,t=e.finalWord,i=Object(y.useState)([]),a=Object(S.a)(i,2),c=a[0],r=a[1];Object(y.useEffect)((function(){var e=Object.assign([],n);r(e)}),[n]);var o=c.map((function(e,n){return Object(z.jsx)(q,{visible:t.includes(e.toUpperCase()),children:e.toUpperCase()},n)}));return Object(z.jsx)($,{children:o})},ee=[{value:"Q",line:1},{value:"W",line:1},{value:"E",line:1},{value:"R",line:1},{value:"T",line:1},{value:"Z",line:1},{value:"U",line:1},{value:"I",line:1},{value:"O",line:1},{value:"P",line:1},{value:"\xdc",line:1},{value:"A",line:2},{value:"S",line:2},{value:"D",line:2},{value:"F",line:2},{value:"G",line:2},{value:"H",line:2},{value:"J",line:2},{value:"K",line:2},{value:"L",line:2},{value:"\xd6",line:2},{value:"\xc4",line:2},{value:"Y",line:3},{value:"X",line:3},{value:"C",line:3},{value:"V",line:3},{value:"B",line:3},{value:"N",line:3},{value:"M",line:3}],ne=["\xc4","\xe4","\xd6","\xf6","\xdc","\xfc"],te=function(e){return!!ne.includes(e)},ie=["Bordstein","Programmieren","Territorium","Wanduhr","Haushaltskasse","Batman","Kinofilm"],ae=function(){var e=Math.floor(Math.random()*ie.length);return ie[e]},ce=W.a.div(m||(m=Object(U.a)([""]))),re=W.a.div(w||(w=Object(U.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  background-color: gray;\n  height: 100vh;\n  width: 90%;\n  font-size: 40px;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n"]))),oe=W.a.button(k||(k=Object(U.a)(["\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 1.5rem;\n  border-radius: 10px;\n  padding: 0.5rem 1rem;\n"])));function le(){var e=Object(y.useState)(""),n=Object(S.a)(e,2),t=n[0],i=n[1],a=Object(y.useState)(10),c=Object(S.a)(a,2),r=c[0],o=c[1],l=Object(y.useState)([]),s=Object(S.a)(l,2),b=s[0],u=s[1],d=Object(y.useState)(""),j=Object(S.a)(d,2),h=j[0],v=j[1],p=Object(y.useState)(!1),O=Object(S.a)(p,2),x=O[0],f=O[1],g=Object(y.useState)(),m=Object(S.a)(g,2),w=m[0],k=m[1],C=Object(y.useState)([]),U=Object(S.a)(C,2),W=U[0],B=U[1],D=function(){var e=ae().toUpperCase();k(e);var n=Object.assign([],w);B(n)};Object(y.useEffect)((function(){D()}),[w]);var I=Object(y.useCallback)((function(e){var n=e.key;b.includes(n.toUpperCase())||(null!==w&&void 0!==w&&w.includes(n.toUpperCase())||o(r-1),n.match("[A-Za-z]")&&e.code.includes("Key")||te(n)?i(n.toUpperCase()):i(""))}),[r,b,w]);Object(y.useEffect)((function(){0!==W.length&&W.every((function(e){return b.includes(e)}))&&v("Du hast gewonnen!")}),[b,W]),Object(y.useEffect)((function(){0===r&&(f(!0),v("Du hast verloren"))}),[r]),Object(y.useEffect)((function(){u((function(e){return[t].concat(Object(E.a)(e))}))}),[t]),Object(y.useEffect)((function(){return window&&window.addEventListener("keydown",I),function(){window.removeEventListener("keydown",I)}}),[I]);var K=function(e){return ee.map((function(n){return e===n.line&&Object(z.jsx)(Y,{disabled:b.includes(n.value),onClick:function(){return e=n.value,console.log(w),null!==w&&void 0!==w&&w.includes(e)||o(r-1),void i(e);var e},value:n.value})}))};return Object(z.jsxs)("div",{className:"App",children:[h&&Object(z.jsxs)(re,{children:[h,Object(z.jsx)(oe,{onClick:function(){o(10),D(),v(""),u([]),i(""),f(!1)},children:"Noch mal"})]}),Object(z.jsx)("h1",{children:"Hangman"}),Object(z.jsx)("div",{style:{height:"min-content"},children:Object(z.jsx)(G,{visibleIndex:r,dead:x})}),Object(z.jsx)(ce,{children:K(1)}),Object(z.jsx)(ce,{children:K(2)}),Object(z.jsx)(ce,{children:K(3)}),Object(z.jsx)(_,{winWord:w||"Kompromiss",finalWord:b}),Object(z.jsxs)("p",{children:["Du hast noch ",r," Versuche"]})]})}var se=document.getElementById("root");C.createRoot(se).render(Object(z.jsx)(y.StrictMode,{children:Object(z.jsx)(le,{})}))}},[[29,1,2]]]);
//# sourceMappingURL=main.b508bd34.chunk.js.map