(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/spinner.235b9b3e.gif"},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(4),r=t.n(l),c=(t(12),t(1)),o=(t(13),function(e){var a=e.setpais;e.pais;return s.a.createElement("div",null,s.a.createElement("nav",null,s.a.createElement("div",{className:"Titulo"},s.a.createElement("h1",{className:"Covid"},"COVID-19 TRACKER"),s.a.createElement("h1",{className:"Sud"},"Sudam\xe9rica")),s.a.createElement("ul",{className:"nav-links"},s.a.createElement("li",{className:"Links",onMouseOver:function(){a(6)}},"Argentina"),s.a.createElement("li",{className:"Links",onMouseOver:function(){a(20)}},"Bolivia"),s.a.createElement("li",{className:"Links",onMouseOver:function(){a(178)}},"Uruguay"),s.a.createElement("li",{className:"Links",onMouseOver:function(){a(34)}},"Chile"),s.a.createElement("li",{className:"Links",onMouseOver:function(){a(130)}},"Paraguay"),s.a.createElement("li",{className:"Links",onMouseOver:function(){a(23)}},"Brasil"))))}),i=(t(14),t(15),function(e){var a=e.datos,t=e.pais,n=100*a.Countries[t].TotalRecovered/a.Countries[t].TotalConfirmed,l=100*a.Countries[t].TotalDeaths/a.Countries[t].TotalConfirmed;return s.a.createElement("div",{className:"Estadisticas"},s.a.createElement("h3",null,"Estadisticas:"),s.a.createElement("div",{className:"WrapperEstad"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"wrapperTasas"},s.a.createElement("h5",{className:"TituloTasas"},"Tasa Fallecidos:"),s.a.createElement("h5",{className:"numeromuerte"},l.toFixed(2))),s.a.createElement("div",{className:"wrapperTasas"},s.a.createElement("h5",{className:"TituloTasas"},"Tasa Recuperados:"),s.a.createElement("h5",{className:"numeromuerte"},n.toFixed(2))))))}),m=function(e){var a=e.pais,t=e.datos;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"DatosWrapper"},s.a.createElement("div",{className:"pais"},s.a.createElement("h1",null,t.Countries[a].Country),s.a.createElement("br",null),s.a.createElement("div",{className:"items-casos"},s.a.createElement("h3",null,"Nuevos Casos: "),s.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].NewConfirmed)),s.a.createElement("div",{className:"items-casos"},s.a.createElement("h3",null,"Total de Casos: "),s.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalConfirmed)),s.a.createElement("div",{className:"items-casos"},s.a.createElement("h3",null,"Total Fallecidos: "),s.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalDeaths)),s.a.createElement("div",{className:"items-casos"},s.a.createElement("h3",null,"En Recuperacion: "),s.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalConfirmed-t.Countries[a].TotalRecovered)),s.a.createElement("div",{className:"items-casos"},s.a.createElement("h3",null,"Total Recuperados: "),s.a.createElement("h2",{className:"item-casos-nro"},t.Countries[a].TotalRecovered))),s.a.createElement(i,{datos:t,pais:a})))},u=(t(16),function(e){var a=e.datos;return s.a.createElement("div",null,s.a.createElement("div",{className:"mundo"},s.a.createElement("h1",null,"Mundo"),s.a.createElement("br",null),s.a.createElement("h4",null,"Nuevos Casos: ",a.Global.NewConfirmed),s.a.createElement("h4",null,"Total Casos: ",a.Global.TotalConfirmed),s.a.createElement("h4",null,"Total Fallecidos: ",a.Global.TotalDeaths),s.a.createElement("h4",null,"Total Recuperados: ",a.Global.TotalRecovered)))}),d=t(2),E=t.n(d),v=t(5),p=function(){var e=Object(v.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19api.com/summary",e.next=3,fetch("https://api.covid19api.com/summary");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=t(6),f=t.n(h),N=(t(18),function(){return s.a.createElement("div",{className:"spinner"},s.a.createElement("img",{src:f.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Cargando"}),s.a.createElement("p",null,"Cargando..."))}),C=function(){var e=function(){var e=Object(n.useState)({data:[],Loading:!0}),a=Object(c.a)(e,2),t=a[0],s=a[1];return Object(n.useEffect)((function(){p().then((function(e){s({data:e,Loading:!1})}))}),[]),t}(),a=e.data,t=e.Loading,l=Object(n.useState)(6),r=Object(c.a)(l,2),i=r[0],d=r[1];return t?s.a.createElement(N,null):s.a.createElement(s.a.Fragment,null,s.a.createElement(o,{setpais:d,pais:i}),s.a.createElement(u,{datos:a}),s.a.createElement(m,{datos:a,pais:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.611c5b2b.chunk.js.map