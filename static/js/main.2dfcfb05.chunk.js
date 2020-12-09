(this["webpackJsonpprojet-pays"]=this["webpackJsonpprojet-pays"]||[]).push([[0],{31:function(e,t,n){e.exports={styleTitre:"titre_styleTitre__3ZRf_"}},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(30),r=n.n(i),l=(n(38),n(9)),o=n(12),j=n(13),d=n(16),h=n(15),b=n(31),u=n.n(b),p=function(e){var t="".concat(u.a.styleTitre," border border-dark p-2 m-2 text-white text-center bg-primary rounded ");return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h1",{className:t,children:e.children})})},m=function(e){var t="btn ".concat(e.classNameBouton," ").concat(e.styleCss);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:t,onClick:e.clic,style:e.estSelectionner?{opacity:1}:{opacity:.7},children:e.children})})},g=n(14),x=n.n(g),O=n(8),v=function(e){var t="";return t=e.solo?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:["Monnaie : ",e.currencies[0].name]}),Object(a.jsxs)("div",{children:["Nombre Habitants : ",e.population]}),Object(a.jsx)("div",{children:e.languages.length>1?Object(a.jsx)(a.Fragment,{children:e.languages.map((function(e,t){return Object(a.jsxs)("div",{children:["Langues-",t," :",e.name]},t)}))}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:["Langues : ",e.languages[0].name]})})}),Object(a.jsx)("div",{children:Object(a.jsx)(O.b,{to:"/pays",className:"nav-link text-right font-italic",children:"Retour Liste Pays"})})]}):Object(a.jsx)(O.b,{to:"/pays/".concat(e.nom),className:"nav-link",children:"Voir la fiche du Pays"}),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"row no-gutters border m-2 p-2",children:[Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("img",{src:e.drapeau,width:"100%",className:"p-2",alt:e.nom})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsxs)("h3",{children:["Nom : ",e.nomFrench]}),Object(a.jsxs)("div",{children:["Capital : ",e.capital]}),Object(a.jsxs)("div",{children:["R\xe9gion : ",e.region]})]}),e.solo?Object(a.jsx)("div",{className:"col-6",children:t}):Object(a.jsx)("div",{children:t})]})})]})})},f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={listesPays:[],loading:!1,regionSelectionner:null,pageSelectionner:1},e.componentDidMount=function(){e.handleFilterContinent("all")},e.handleFilterContinent=function(t){var n="";n="all"===t?"all":"region/".concat(t),e.setState({loading:!0}),x.a.get("https://restcountries.eu/rest/v2/".concat(n)).then((function(n){var a=n.data.map((function(e){return{nom:e.name,nomFrench:e.translations.fr,capital:e.capital,region:e.region,drapeau:e.flag}}));console.log(a),e.setState({listesPays:a,loading:!1,regionSelectionner:t,pageSelectionner:1})})).catch((function(t){console.log(t),e.setState({loading:!1})}))},e.handleFilterPagination=function(t){console.log(t),e.setState({pageSelectionner:t})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=[],n="";if(this.state.listesPays){var s=this.state.listesPays.length/10;this.state.listesPays.length%10!==0&&s++;for(var c=function(n){t.push(Object(a.jsx)(m,{classNameBouton:"btn-info",clic:function(){return e.handleFilterPagination(n)},estSelectionner:e.state.pageSelectionner===n,children:n},n))},i=1;i<=s;i++)c(i);var r=10*(this.state.pageSelectionner-1),o=10*this.state.pageSelectionner;n=this.state.listesPays.slice(r,o).map((function(t,n){return console.log(t),Object(a.jsx)("div",{className:"col-12 col-md-6",children:Object(a.jsx)(v,Object(l.a)(Object(l.a)({},t),e.props))},n)}))}return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(p,{children:"Liste des Pays du Monde"}),Object(a.jsx)(m,{classNameBouton:"btn-info",clic:function(){return e.handleFilterContinent("all")},estSelectionner:"all"===this.state.regionSelectionner,children:"Tous"}),Object(a.jsx)(m,{classNameBouton:"btn-info",clic:function(){return e.handleFilterContinent("Africa")},estSelectionner:"Africa"===this.state.regionSelectionner,children:"Afrique"}),Object(a.jsx)(m,{classNameBouton:"btn-info",clic:function(){return e.handleFilterContinent("Americas")},estSelectionner:"Americas"===this.state.regionSelectionner,children:"Am\xe9rique"}),Object(a.jsx)(m,{classNameBouton:"btn-info",clic:function(){return e.handleFilterContinent("Asia")},estSelectionner:"Asia"===this.state.regionSelectionner,children:"Asie"}),Object(a.jsx)(m,{classNameBouton:"btn-info",clic:function(){return e.handleFilterContinent("Europe")},estSelectionner:"Europe"===this.state.regionSelectionner,children:"Europe"}),Object(a.jsx)(m,{classNameBouton:"btn-info",clic:function(){return e.handleFilterContinent("Oceania")},estSelectionner:"Oceania"===this.state.regionSelectionner,children:"Oceania"}),"Nombre de Pays : ",Object(a.jsx)("span",{className:"badge badge-success",children:this.state.listesPays.length}),Object(a.jsx)("div",{children:this.state.loading?Object(a.jsx)("div",{children:"Chargement API... "}):Object(a.jsx)("div",{className:"row no-gutters",children:n})}),Object(a.jsx)("div",{children:t})]})})}}]),n}(s.Component),y=n(2),N=function(e){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(O.b,{to:"/",exact:!0,className:"nav-link",children:"Accueil"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(O.b,{to:"/pays",exact:!0,className:"nav-link",children:"Les Pays"})})]})})]})},S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={pays:null,loading:!1},e.componentDidMount=function(){e.setState({loading:!0}),x.a.get("https://restcountries.eu/rest/v2/name/".concat(e.props.match.params.id,"?fullText=true")).then((function(t){console.log(t.data),e.setState({pays:t.data[0],loading:!1})})).catch((function(t){console.log(t),e.setState({loading:!1})}))},e}return Object(j.a)(n,[{key:"render",value:function(){return this.state.pays&&console.log(this.state.pays.flag),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:this.state.loading?Object(a.jsx)("h1",{children:"Chargement en Cour ..."}):Object(a.jsx)(a.Fragment,{children:this.state.pays&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(p,{children:["Page du Pays ",this.state.pays.translations.fr," "]}),Object(a.jsx)(v,Object(l.a)({drapeau:this.state.pays.flag,capital:this.state.pays.capital,region:this.state.pays.region,nomFrench:this.state.pays.translations.fr,nom:this.state.pays.name,solo:!0},this.state.pays))]})})})})}}]),n}(s.Component),F=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"alert alert-danger text-center",children:e.children})})},C=n.p+"static/media/error404.076dc4fc.png",P=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:C,alt:"erreur404",width:"500px"}),Object(a.jsx)("h1",{children:"La Page n'existe pas"})]})},A=function(e){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("h1",{className:"display-3",children:"Bienvenu dans mon application React"}),Object(a.jsxs)("p",{className:"lead",children:["Ce site est fait \xe0 100% avec React. Le code source du projet se trouve l\xe0 (",Object(a.jsx)("a",{className:"btn btn-outline-primary",href:"https://github.com/oldlepa/projet-pays",target:"_blank",rel:"noopener noreferrer",children:"Github"}),"). Faites-moi vos recommandations pour des \xe9volutions en ajoutant un commentaire en bas de la page.                "]}),Object(a.jsx)("hr",{className:"my-4"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Les technologies utilis\xe9es pour r\xe9aliser cette appplication REACT sont :"}),Object(a.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(a.jsx)("li",{class:"list-group-item",children:"React"}),Object(a.jsx)("li",{class:"list-group-item",children:"Axios"}),Object(a.jsx)("li",{class:"list-group-item",children:"Bootstrap"}),Object(a.jsx)("li",{class:"list-group-item",children:"React router dom"}),Object(a.jsxs)("li",{class:"list-group-item",children:["API countries (",Object(a.jsx)("a",{className:"btn btn-outline-primary",href:"https://restcountries.eu/",target:"_blank",rel:"noopener noreferrer",children:"API"}),")"]})]})]})]})})};n(61);var k=function(){return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(N,{}),Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{path:"/",exact:!0,render:A}),Object(a.jsx)(y.a,{path:"/pays",exact:!0,component:f}),Object(a.jsx)(y.a,{path:"/pays/:id",exact:!0,render:function(e){return Object(a.jsx)(S,Object(l.a)({},e))}}),Object(a.jsx)(y.a,{render:function(){return Object(a.jsx)(F,{children:Object(a.jsx)(P,{})})}})]})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2dfcfb05.chunk.js.map