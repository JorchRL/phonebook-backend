(this.webpackJsonpstatefulcomponent=this.webpackJsonpstatefulcomponent||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(16),i=t.n(c),a=t(6),o=t(0),u=function(e){var n=e.personList,t=e.deleteHandler;return Object(o.jsxs)("div",{className:"NumberList",children:[Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsxs)("li",{children:[e.name," - ",void 0!==e.number?e.number:Object(o.jsx)("em",{children:'"Missing number!"'}),Object(o.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return t(e.id)},children:"Delete"})]},e.id)}))})]})},s=function(e){var n=e.addNameHandler;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Add new"}),Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{id:"name-input",type:"text",placeholder:"Add a new name..."}),Object(o.jsx)("br",{}),"number: ",Object(o.jsx)("input",{id:"number-input",type:"text",placeholder:"Add a new number..."})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})]})},d=t(3),l=t.n(d),f="/api/persons",b=function(){return l.a.get(f).then((function(e){return e.data}))},j=function(e){return l.a.post(f,{content:e}).then((function(e){return e.data}))},m=function(e){return l.a.delete("".concat(f,"/").concat(e)).then((function(e){return e}))},h=function(e,n){return l.a.put("".concat(f,"/").concat(n),{content:e}).then((function(e){return e.data}))},p=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(t),d=Object(a.a)(i,2),l=d[0],f=d[1],p=Object(r.useState)(""),x=Object(a.a)(p,2),g=x[0],w=x[1];Object(r.useEffect)((function(){b().then((function(e){c(e),f(e)}))}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(v,{message:g}),Object(o.jsx)(O,{personList:t,handler:function(e){f(e)}}),Object(o.jsx)(s,{addNameHandler:function(e){e.preventDefault();var n={name:e.target[0].value,number:e.target[1].value},r=void 0!==t.find((function(n){return n.name===e.target[0].value})),i=""!==n.number,a=""!==n.name;if(r){if(window.confirm("".concat(e.target[0].value," is already on the phonebook. Do you want to update their number?"))){var o=t.filter((function(e){return e.name===n.name}))[0].id;h(n,o).then((function(e){return c(t.filter((function(e){return e.id!==o})).concat(e)),f(l.filter((function(e){return e.id!==o})).concat(e)),e.name})).then((function(e){w("Modified ".concat(e,"'s entry on the phonebook!")),setTimeout((function(){w("")}),3e3)}))}}else i&&a?j(n).then((function(e){return c(t.concat(e)),f(l.concat(e)),e.name})).then((function(e){w("Added ".concat(e," to the phonebook!")),setTimeout((function(){w("")}),3e3)})).catch((function(e){return w(e.response.data.message),setTimeout((function(){w("")}),3e3),e.message})):i?alert("Please enter a name"):alert("Please include ".concat(n.name,"'s number'"));e.target[0].value="",e.target[1].value=""}}),Object(o.jsx)(u,{personList:l,deleteHandler:function(e){window.confirm("Delete ".concat(t.find((function(n){return n.id===e})).name,"?"))&&m(e).then((function(n){var r=t.filter((function(n){return n.id!==e}));c(r),f(r)})).then((function(){w("Deletion complete!"),setTimeout((function(){w("")}),3e3)})).catch((function(n){console.log("ERROR DELETING NUMBER: The number has already been deleted from the server"),w("".concat(t.find((function(n){return n.id===e})).name," has already been deleted from the server!")),setTimeout((function(){w("")}),3e3),c(t.filter((function(n){return n.id!==e}))),f(t.filter((function(n){return n.id!==e})))}))}})]})},O=function(e){var n=e.personList,t=e.handler;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:["filter shown with: ",Object(o.jsx)("input",{onChange:function(e){e.preventDefault();var r=n.filter((function(n){return""===e.target.value||RegExp("".concat(e.target.value),"i").test(n.name)}));t(r)}})]})})},v=function(e){var n=e.message;return""===n?null:Object(o.jsx)("div",{className:"notification",children:Object(o.jsx)("h3",{children:n})})};i.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.36b51e6e.chunk.js.map