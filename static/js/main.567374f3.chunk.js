(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),c=a.n(r),l=(a(20),a(4)),s=a(5),m=a(8),i=a(6),d=a(9),u=a(33),h=a(35),b=a(34),v=(a(22),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={continue:!1,headerRemove:!1,showModal:!1,switch:"off"},a.componentDidMount=function(){window.addEventListener("scroll",a.resizeHeaderOnScroll)},a.resizeHeaderOnScroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.innerHeight,n=document.getElementById("Home-header-name-id"),o=document.getElementById("Home-header-id"),r=document.getElementById("Home-header-text-id"),c=document.getElementById("buttons-line-container-id"),l=document.getElementById("Home-nav-buttons-after-id");e>t?(n.classList.add("Home-content-name-smaller"),n.classList.remove("Home-content-name"),o.classList.add("Home-header-remove"),o.classList.remove("Home-header"),r.classList.add("Home-header-text-remove"),r.classList.remove("Home-header-text"),c.classList.add("buttons-line-container-smaller"),c.classList.remove("buttons-line-container"),l.classList.add("Home-nav-buttons-after-remove"),l.classList.remove("Home-nav-buttons-after"),a.setState({headerRemove:!0})):(n.classList.remove("Home-content-name-smaller"),n.classList.add("Home-content-name"),o.classList.remove("Home-header-remove"),o.classList.add("Home-header"),r.classList.remove("Home-header-text-remove"),r.classList.add("Home-header-text"),c.classList.remove("buttons-line-container-smaller"),c.classList.add("buttons-line-container"),l.classList.remove("Home-nav-buttons-after-remove"),l.classList.add("Home-nav-buttons-after"),a.setState({headerRemove:!1}))},a.closeModal=function(){a.setState({showModal:!1,switch:"off"})},a.contact=function(){a.setState({showModal:!0,switch:"on"})},a.handle=function(){a.props.history.push("/info")},a.resume=function(){a.props.history.push("/resume")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"Home-content-name",id:"Home-header-name-id"},o.a.createElement("div",{className:"header-wrapper",id:"header-wrapper-id"},o.a.createElement("div",{className:"Home-header",id:"Home-header-id"},o.a.createElement("div",{className:"Home-header-text",id:"Home-header-text-id"},"ALL VALLEY DEALER RECOVERY")),o.a.createElement("div",{className:"buttons-line-container",id:"buttons-line-container-id"},o.a.createElement("a",{href:"/",rel:"noopener noreferrer"},o.a.createElement("button",{className:"Home-nav-buttons-after",id:"Home-nav-buttons-after-id"},o.a.createElement("span",null,"Home"))),o.a.createElement("button",{onClick:function(){return e.handle()},className:"Home-nav-buttons-after",id:"Home-nav-buttons-after-id"},o.a.createElement("span",null,"Info")),o.a.createElement("a",{href:"/contact",rel:"noopener noreferrer"},o.a.createElement("button",{className:"Home-nav-buttons-after",id:"Home-nav-buttons-after-id"},o.a.createElement("span",null,"Contact")))))))}}]),t}(o.a.Component)),f=(a(24),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement("div",{className:"home-screen"}),o.a.createElement("div",{className:"pic-block"}),o.a.createElement("div",{className:"bottom-block"},o.a.createElement("div",{className:"description"},"hello Dave"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null)))}}]),t}(o.a.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null))}}]),t}(o.a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null))}}]),t}(o.a.Component),H=(a(26),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"background-image-app"}),o.a.createElement(u.a,{basename:"https://ananun.github.io/avdr"},o.a.createElement(h.a,null,o.a.createElement(b.a,{exact:!0,path:"/",component:f}),o.a.createElement(b.a,{exact:!0,path:"/info",component:E}),o.a.createElement(b.a,{exact:!0,path:"/contact",component:p}),o.a.createElement(b.a,{component:function(){return o.a.createElement("div",null,"404 Not found ")}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.567374f3.chunk.js.map