(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),s=t.n(l),c=(t(11),t(1)),o=(t(12),function(e){var a=e.setpais;return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"Titulo"},r.a.createElement("h1",{className:"Covid"},"COVID-19 TRACKER"),r.a.createElement("h1",{className:"Sud"},"Sudam\xe9rica")),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{className:"Links",onMouseOver:function(){a(6)}},"Argentina"),r.a.createElement("li",{className:"Links",onMouseOver:function(){a(20)}},"Bolivia"),r.a.createElement("li",{className:"Links",onMouseOver:function(){a(178)}},"Uruguay"),r.a.createElement("li",{className:"Links",onMouseOver:function(){a(34)}},"Chile"),r.a.createElement("li",{className:"Links",onMouseOver:function(){a(130)}},"Paraguay"),r.a.createElement("li",{className:"Links",onMouseOver:function(){a(23)}},"Brasil"))))}),m=(t(13),t(14),function(e){var a=e.datos,t=e.pais,n=100*a.Countries[t].TotalRecovered/a.Countries[t].TotalConfirmed,l=100*a.Countries[t].TotalDeaths/a.Countries[t].TotalConfirmed;return r.a.createElement("div",{className:"Estadisticas"},r.a.createElement("h3",null,"Estadisticas:"),r.a.createElement("div",{className:"WrapperEstad"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapperTasas"},r.a.createElement("h5",{className:"TituloTasas"},"Tasa Fallecidos:"),r.a.createElement("h5",{className:"numeromuerte"},l.toFixed(2))),r.a.createElement("div",{className:"wrapperTasas"},r.a.createElement("h5",{className:"TituloTasas"},"Tasa Recuperados:"),r.a.createElement("h5",{className:"numeromuerte"},n.toFixed(2))))))}),i=function(e){var a=e.pais,t=e.datos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"DatosWrapper"},r.a.createElement("div",{className:"pais"},r.a.createElement("h1",null,t.Countries[a].Country),r.a.createElement("br",null),r.a.createElement("div",{className:"items-casos"},r.a.createElement("h3",null,"Nuevos Casos: "),r.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].NewConfirmed)),r.a.createElement("div",{className:"items-casos"},r.a.createElement("h3",null,"Total de Casos: "),r.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalConfirmed)),r.a.createElement("div",{className:"items-casos"},r.a.createElement("h3",null,"Total Fallecidos: "),r.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalDeaths)),r.a.createElement("div",{className:"items-casos"},r.a.createElement("h3",null,"En Recuperacion: "),r.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalConfirmed-t.Countries[a].TotalRecovered)),r.a.createElement("div",{className:"items-casos"},r.a.createElement("h3",null,"Total Recuperados: "),r.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalRecovered))),r.a.createElement(m,{datos:t,pais:a})))},u=(t(15),function(e){var a=e.datos;return r.a.createElement("div",null,r.a.createElement("div",{className:"mundo"},r.a.createElement("h1",null,"Mundo"),r.a.createElement("br",null),r.a.createElement("h4",null,"Nuevos Casos: ",a.Global.NewConfirmed),r.a.createElement("h4",null,"Total Casos: ",a.Global.TotalConfirmed),r.a.createElement("h4",null,"Total Fallecidos: ",a.Global.TotalDeaths),r.a.createElement("h4",null,"Total Recuperados: ",a.Global.TotalRecovered)))}),E=t(2),d=t.n(E),f=t(5),p=function(){var e=Object(f.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19api.com/summary",e.next=3,fetch("https://api.covid19api.com/summary");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=(t(17),function(){return r.a.createElement("section",{className:"loader"},r.a.createElement("div",{className:"spinner"},r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 1))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 2))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 3))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 4))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 5))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 6))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 7))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 8))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 9))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 10))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 11))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 12))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 13))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 14))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 15))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 16))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 17))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 18))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 19))"}}),r.a.createElement("span",{style:{transform:"rotate(calc(18deg * 20))"}})),r.a.createElement("p",null,"Cargando..."))}),h=(t(18),function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Creado por Matias Narvaez- 2020"))}),N=function(){var e=function(){var e=Object(n.useState)({data:[],Loading:!0}),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){p().then((function(e){r({data:e,Loading:!1})}))}),[]),t}(),a=e.data,t=e.Loading,l=Object(n.useState)(6),s=Object(c.a)(l,2),m=s[0],E=s[1];return t?r.a.createElement(v,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{setpais:E}),r.a.createElement(u,{datos:a}),r.a.createElement(i,{datos:a,pais:m}),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.1fa37c56.chunk.js.map