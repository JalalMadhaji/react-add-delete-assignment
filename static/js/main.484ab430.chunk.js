(this.webpackJsonpm=this.webpackJsonpm||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),s=a.n(r),u=(a(15),a(7)),c=a(3),m=a(4),i=a(5),d=a(8),o=a(6),h=a(9),E=(a(16),function(e){return l.a.createElement("fieldset",null,l.a.createElement("legend",null,"New User"),l.a.createElement("form",{onSubmit:e.handleSubmit,autoComplete:"off"},l.a.createElement("input",{name:"name",value:e.name,onChange:e.handleChange,placeholder:"name"}),l.a.createElement("input",{name:"email",value:e.email,onChange:e.handleChange,placeholder:"Email"}),l.a.createElement("input",{name:"address",value:e.address,onChange:e.handleChange,placeholder:"Address"}),l.a.createElement("button",null,"Save")))});function f(e){return l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Users"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.address),l.a.createElement("td",null,l.a.createElement("button",{className:"deleteBtn",onClick:function(){return e.handleDelete(t.id)}},"X")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4"},"No Users Yet!")))))}var g=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(o.a)(t).call(this))).handleDelete=function(t){var a=e.state.users.filter((function(e){return t!==e.id}));e.setState({users:a})},e.handleChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.name.length>0&&e.setState({users:[].concat(Object(u.a)(e.state.users),[{name:e.state.name,email:e.state.email,address:e.state.address,id:e.state.users.length}])})},e.state={name:"",email:"",address:"",users:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,name:this.state.name,email:this.state.email,address:this.state.address}),l.a.createElement(f,{users:this.state.users,handleDelete:this.handleDelete}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.484ab430.chunk.js.map