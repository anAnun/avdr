(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(20),a(4)),s=a(5),m=a(8),i=a(6),d=a(9),u=a(33),h=a(35),v=a(34),b=(a(22),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={continue:!1,headerRemove:!1,showModal:!1,switch:"off"},a.componentDidMount=function(){window.addEventListener("scroll",a.resizeHeaderOnScroll)},a.resizeHeaderOnScroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.innerHeight,n=document.getElementById("Home-header-name-id"),r=document.getElementById("Home-header-id"),o=document.getElementById("Home-header-text-id"),c=document.getElementById("buttons-line-container-id"),l=document.getElementById("Home-nav-buttons-after-id");e>t?(n.classList.add("Home-content-name-smaller"),n.classList.remove("Home-content-name"),r.classList.add("Home-header-remove"),r.classList.remove("Home-header"),o.classList.add("Home-header-text-remove"),o.classList.remove("Home-header-text"),c.classList.add("buttons-line-container-smaller"),c.classList.remove("buttons-line-container"),l.classList.add("Home-nav-buttons-after-remove"),l.classList.remove("Home-nav-buttons-after"),a.setState({headerRemove:!0})):(n.classList.remove("Home-content-name-smaller"),n.classList.add("Home-content-name"),r.classList.remove("Home-header-remove"),r.classList.add("Home-header"),o.classList.remove("Home-header-text-remove"),o.classList.add("Home-header-text"),c.classList.remove("buttons-line-container-smaller"),c.classList.add("buttons-line-container"),l.classList.remove("Home-nav-buttons-after-remove"),l.classList.add("Home-nav-buttons-after"),a.setState({headerRemove:!1}))},a.closeModal=function(){a.setState({showModal:!1,switch:"off"})},a.contact=function(){a.setState({showModal:!0,switch:"on"})},a.resume=function(){a.props.history.push("/resume")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"Home-content-name",id:"Home-header-name-id"},r.a.createElement("div",{className:"header-wrapper",id:"header-wrapper-id"},r.a.createElement("div",{className:"Home-header",id:"Home-header-id"},r.a.createElement("div",{className:"Home-header-text",id:"Home-header-text-id"},"ALL VALLEY DEALER RECOVERY")),r.a.createElement("div",{className:"buttons-line-container",id:"buttons-line-container-id"},r.a.createElement("a",{href:"/avdr/",rel:"noopener noreferrer"},r.a.createElement("button",{className:"Home-nav-buttons-after",id:"Home-nav-buttons-after-id"},r.a.createElement("span",null,"Home"))),r.a.createElement("a",{href:"/avdr/info",rel:"noopener noreferrer"},r.a.createElement("button",{className:"Home-nav-buttons-after",id:"Home-nav-buttons-after-id"},r.a.createElement("span",null,"Info"))),r.a.createElement("a",{href:"/avdr/contact",rel:"noopener noreferrer"},r.a.createElement("button",{className:"Home-nav-buttons-after",id:"Home-nav-buttons-after-id"},r.a.createElement("span",null,"Contact")))))))}}]),t}(r.a.Component)),f=(a(24),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"home-screen"}),r.a.createElement("div",{className:"pic-block"}),r.a.createElement("div",{className:"bottom-block"},r.a.createElement("div",{className:"description"},"hello Dave"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null))}}]),t}(r.a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null))}}]),t}(r.a.Component),H=(a(26),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background-image-app"}),r.a.createElement(u.a,{basename:"https://ananun.github.io/avdr"},r.a.createElement(h.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:f}),r.a.createElement(v.a,{exact:!0,path:"/avdr/",component:f}),r.a.createElement(v.a,{exact:!0,path:"/avdr/info",component:E}),r.a.createElement(v.a,{exact:!0,path:"/avdr/contact",component:p}),r.a.createElement(v.a,{component:function(){return r.a.createElement("div",null,"404 Not found ")}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.018f0d7b.chunk.js.map