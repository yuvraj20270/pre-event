(this["webpackJsonppre-event"]=this["webpackJsonppre-event"]||[]).push([[0],{110:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),l=n(19),a=n.n(l),i=(n(110),n(9)),r=n(4),c=n(71),d=n(72),u=n(105),b=n(104),x=n(73),j=n.n(x),h=n(102),p=n.n(h),m=n(8),g=(n(47),n(35)),f=n(13),O=n(1),v=["1","2","3","4","5","6","7","8"],y=[],w=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e,s;Object(c.a)(this,n);for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return(s=t.call.apply(t,[this].concat(l))).state=(e={value:0,previous:0,minEventPadding:20},Object(r.a)(e,"minEventPadding",30),Object(r.a)(e,"linePadding",50),Object(r.a)(e,"labelWidth",50),Object(r.a)(e,"fillingMotionStiffness",150),Object(r.a)(e,"fillingMotionDamping",25),Object(r.a)(e,"slidingMotionStiffness",150),Object(r.a)(e,"slidingMotionDamping",25),Object(r.a)(e,"stylesBackground","transparent"),Object(r.a)(e,"stylesForeground","#D4A661"),Object(r.a)(e,"stylesOutline","#D4A661"),Object(r.a)(e,"isTouchEnabled",!0),Object(r.a)(e,"isKeyboardEnabled",!0),Object(r.a)(e,"isOpenEnding",!1),Object(r.a)(e,"isOpenBeginning",!0),e),s}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state;return y.length<this.props.data.length&&(this.props.data.forEach((function(e){y.push(null)})),console.log(this.props.textQuestion)),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),Object(O.jsxs)("div",{className:"w-4/5 mx-auto h-28",children:[Object(O.jsx)("div",{className:"h-full mx-auto text-custom-yellow font-serif",children:Object(O.jsx)(j.a,{fillingMotion:{stiffness:t.fillingMotionStiffness,damping:t.fillingMotionDamping},index:this.state.value,indexClick:function(t){e.setState({value:t,previous:e.state.value})},getLabel:function(t){return"".concat(t,"/").concat(e.props.data.length)},isKeyboardEnabled:t.isKeyboardEnabled,isTouchEnabled:t.isTouchEnabled,labelWidth:t.labelWidth,linePadding:t.linePadding,minEventPadding:100,slidingMotion:{stiffness:t.slidingMotionStiffness,damping:t.slidingMotionDamping},styles:{background:t.stylesBackground,foreground:t.stylesForeground,outline:t.stylesOutline},values:v,isOpenEnding:!1,isOpenBeginning:!1})}),Object(O.jsxs)("div",{className:"text-center pt-8 mx-auto flex flex-col justify-center",children:[Object(O.jsx)(p.a,{index:this.state.value,onChangeIndex:function(t,n){e.setState({value:t,previous:n})},enableMouseEvents:!0,resistance:!0,children:this.props.data.map((function(t,n){return 7===n?Object(O.jsxs)("div",{className:"lg:w-2/5 w-full mx-auto",children:[Object(O.jsx)("div",{className:"border border-custom-yellow rounded-md text-custom-yellow h-36 lg:pt-7 pt-2 px-14",children:Object(O.jsxs)("p",{className:"",children:["Q.",e.props.textQuestion]})}),Object(O.jsxs)("div",{className:"flex flex-col justify-start mt-9 overflow-y-visible max-h-72",children:[Object(O.jsx)("div",{class:"md:w-full",children:Object(O.jsx)("div",{className:"mb-3 pt-0",children:Object(O.jsx)("input",{type:"text",placeholder:"Answer",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full",onChange:function(t){y[e.props.data.length-1]=t.target.value}})})}),Object(O.jsx)("button",{class:"bg-custom-yellow text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:function(){y.includes(null)?(console.log("Nope"),m.b.error("Some questions are unanswered",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})):(console.log("YES"),e.props.changeFormState(!e.props.formComplete),console.log(e.props.formComplete),setTimeout((function(){e.props.changeFormState(!e.props.formComplete)}),2e3))},children:"Submit form"})]})]}):Object(O.jsx)(k,{question:t.QUESTIONS,op1:t.OPTION1,op2:t.OPTION2,op3:t.OPTION3,op4:t.OPTION4,index:n})}))}),Object(O.jsxs)("div",{className:"md:flex hidden text-custom-yellow justify-between mt-8 mx-auto w-2/5",children:[Object(O.jsx)("button",{onClick:function(){return e.setState({value:0===e.state.value?e.props.data.length-1:e.state.value-1,previous:e.state.value})},children:Object(O.jsx)(g.a,{})}),Object(O.jsx)("button",{onClick:function(){return e.setState({value:e.state.value===e.props.data.length-1?0:e.state.value+1,previous:e.state.value})},children:Object(O.jsx)(g.b,{})})]})]})]})]})}}]),n}(o.a.Component);function k(e){var t=o.a.useState(),n=Object(i.a)(t,2)[1],s=o.a.useCallback((function(){return n({})}),[]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"lg:w-2/5 w-full mx-auto",children:[Object(O.jsx)("div",{className:"border border-custom-yellow rounded-md text-custom-yellow h-36 lg:pt-7 pt-2 px-14",children:Object(O.jsxs)("p",{className:"",children:["Q. ",e.question]})}),Object(O.jsxs)("div",{className:"flex flex-col justify-between mt-9 overflow-y-visible max-h-72",children:[Object(O.jsx)(N,{op:e.op1,index:e.index,optionIndex:0,onClick:function(){y[e.index]=0,s()}}),Object(O.jsx)(N,{op:e.op2,index:e.index,optionIndex:1,onClick:function(){y[e.index]=1,s()}}),Object(O.jsx)(N,{op:e.op3,index:e.index,optionIndex:2,onClick:function(){y[e.index]=2,s()}}),Object(O.jsx)(N,{op:e.op4,index:e.index,optionIndex:3,onClick:function(){y[e.index]=3,s()}})]})]})})}function N(e){var t=y[e.index]===e.optionIndex;return Object(O.jsx)("div",{className:"".concat(t?"bg-custom-yellow":"hover:bg-gray-600 bg-gray-900"," h-16 text-white flex flex-col justify-center rounded-md my-2"),onClick:e.onClick,children:e.op})}var C=n(33),S=n.n(C),E=(n.p,n(103)),P=n.n(E),I=n(34),T=n.n(I),F=null,M=null;function B(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(f.a)({apiKey:"AIzaSyC3UXeVVvk7nP0HNLkkeyohZEhWErkw4SE",sheetId:"1Aex4NcDCfKoY72FMqqTvbK7D82VIwP6ALLY5t7BWVUU"}),a=l.data;l.load,l.err;if(a&&a[0]){var r=Math.floor(Math.random()*a[0].data.length);F||(F=a[0].data[r].Name,M=a[0].data[r].link)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),Object(O.jsxs)("div",{className:"flex w-full justify-around h-full items-center lg:flex-row flex-col",children:[Object(O.jsx)(D,{character:F,link:M}),Object(O.jsxs)("div",{className:"flex flex-col items-center justify-around h-4/5 lg:w-1/3 w-4/5 rounded-md ",children:[Object(O.jsx)("p",{className:"lg:text-4xl font-semibold text-white text-center",children:"Post this on your story & Tag three of your friends"}),Object(O.jsx)("p",{className:"lg:text-3xl text-white text-center",children:"Are you ready to get exciting cash prizes and a sneak peek at CC\u2019s next event ?"}),Object(O.jsx)("input",{type:"text",placeholder:"Enter your email id",value:n,onChange:function(e){return o(e.target.value)},className:"w-3/4 placeholder-custom-yellow bg-transparent px-3 py-5 relative rounded text-2xl text-center text-custom-yellow border-2 border-custom-yellow shadow outline-none focus:outline-none focus:rin"}),Object(O.jsx)("button",{className:"bg-custom-yellow text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:function(e){if(""===n)m.b.error("Email empty!",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});else if(P.a.isEmail(n)){var t;m.b.info("Submitting",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),T.a.get("https://sheet.best/api/sheets/6ca34541-f0c8-4bc0-afaa-3d802475906b").then((function(e){t=e,console.log(t.data);var s=!1;t.data.forEach((function(e){e.email===n&&(s=!0)})),s?m.b.error("You are already registered",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}):T.a.post("https://sheet.best/api/sheets/6ca34541-f0c8-4bc0-afaa-3d802475906b",{Character:F,email:n}).then((function(e){m.b.success("Successfully registered",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),window.location.reload()}))}))}else m.b.error("Email not valid",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},children:"Submit"})]})]})]})}function D(e){var t;return e.link&&e.link.includes("drive")&&(t="https://drive.google.com/uc?id="+(t=(t=e.link.substring(e.link.indexOf("/d/")+3)).substring(0,t.indexOf("/")))),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"flex flex-col bg-white bg-opacity-5 lg:w-1/3 w-4/5 h-4/5 rounded-md justify-around items-center",children:[Object(O.jsx)("div",{className:"flex flex-wrap justify-center items-center relative lg:h-2/3 lg:w-3/4 h-2/3 w-3/4",children:Object(O.jsx)("img",{src:t,alt:"...",className:"object-cover absolute shadow w-full h-full align-middle border-8 border-custom-yellow rounded-full"})}),Object(O.jsx)("p",{className:"text-3xl text-white",children:"You are"}),Object(O.jsx)("p",{className:"lg:text-6xl text-3xl font-serif text-white",dangerouslySetInnerHTML:{__html:e.character}})]})})}var A=null;function L(){var e=Object(f.a)({apiKey:"AIzaSyC3UXeVVvk7nP0HNLkkeyohZEhWErkw4SE",sheetId:"1y8d5Rl7jn5IGm324wfR8UOTDU1wAIPNPIfL6KN5RMdc",sheetsNames:["questions"]}),t=e.data;e.loading,e.error;t&&t[0]&&(A||(A=t[0].data[t[0].data.length-1]));var n=Object(s.useState)(!1),o=Object(i.a)(n,2),l=o[0],a=o[1],r=Object(s.useState)(!1),c=Object(i.a)(r,2),d=c[0],u=c[1];return Object(O.jsx)(O.Fragment,{children:l?Object(O.jsxs)(O.Fragment,{children:[d?Object(O.jsx)(B,{}):Object(O.jsxs)("div",{className:"w-full h-screen flex flex-col justify-center items-center",children:[Object(O.jsx)(S.a,{type:"bubbles",color:"#D4A661"}),Object(O.jsx)("h1",{className:"text-custom-yellow text-xl",children:"Submitting.."}),setTimeout((function(){u(!d)}),3e3)]})," "]}):Object(O.jsxs)("div",{className:"",children:[t&&t[0]?Object(O.jsx)(w,{data:t[0].data,textQuestion:A.QUESTIONS,formComplete:l,changeFormState:a}):Object(O.jsxs)("div",{className:"w-full h-screen flex flex-col justify-center items-center",children:[Object(O.jsx)(S.a,{type:"bubbles",color:"#D4A661"}),Object(O.jsx)("h1",{className:"text-serif text-custom-yellow text-xl",children:"Loading questions"})]}),Object(O.jsx)("div",{className:"w-full flex justify-end absolute lg:bottom-2 lg:right-2 bottom-4 mx-auto",children:Object(O.jsxs)("p",{className:"text-gray-400",children:["Website designed by Prakhar Prasad and developed by ",Object(O.jsx)("a",{href:"https://www.linkedin.com/in/yuvraj-singh-296654190/",target:"_blank",className:"hover:text-white",children:"Yuvraj Singh"})]})})]})})}var H=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(O.jsx)("div",{className:"bg-gradient-to-r from-bg-blue to-bg-black w-screen h-screen",children:Object(O.jsx)("div",{className:"bg-smoke-element bg-center w-full h-full flex flex-col",children:n?Object(O.jsx)(L,{}):Object(O.jsxs)("div",{className:" w-full h-full flex justify-center items-center flex-col",children:[Object(O.jsx)("h1",{className:"font-serif text-custom-yellow text-8xl py-6 text-center",children:"Mystery Quiz"}),Object(O.jsx)("div",{className:"lg:w-1/2 w-2/3 pb-28",children:Object(O.jsx)("p",{className:"text-white text-center text-xl",children:"Do you want to play a little game with us ;)"})}),Object(O.jsx)("button",{onClick:function(){return o(!n)},children:Object(O.jsx)("div",{className:"border border-custom-yellow w-80 px-24 py-4 rounded-md hover:border-yellow-400 hover:text-yellow-400",children:Object(O.jsx)("p",{className:"text-base text-custom-yellow",children:"Take the Quiz"})})})]})})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),s(e),o(e),l(e),a(e)}))};a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(H,{})}),document.getElementById("root")),Q()}},[[253,1,2]]]);
//# sourceMappingURL=main.05c70e6b.chunk.js.map