(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{bbf1:function(t,a,s){"use strict";var i=s("fb83"),e=s.n(i);e.a},ddab:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app-container"}},[s("q-card",{staticClass:"q-ma-xs"},[s("q-card-section",{staticClass:"bg-primary text-white text-center"},[s("div",{staticClass:"text-h6"},[t._v("IT - Instruções de Trabalho")])]),s("q-card-section",[s("div",{staticClass:"q-pa-xs"},[t._v("Insira as informações solicitadas abaixo:")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 col-xs-12"},[s("q-input",{staticClass:"q-pa-xs",attrs:{filled:"",label:"Instrução Trabalho"},model:{value:t.itCode,callback:function(a){t.itCode=a},expression:"itCode"}}),s("div",{staticClass:"q-pa-xs"},[s("q-btn",{staticClass:"full-width q-ma-xs",attrs:{color:"primary",label:"Abrir IT"},on:{click:function(a){return t.openPdf(t.itCode)}}})],1)],1),s("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 col-xs-12"},[s("q-input",{staticClass:"q-pa-xs",attrs:{filled:"",type:"text",label:"Código do Produto"},model:{value:t.productCode,callback:function(a){t.productCode=a},expression:"productCode"}}),s("div",{staticClass:"q-pa-xs"},[s("q-btn",{staticClass:"full-width q-ma-xs",attrs:{color:"primary",label:"Abrir Projeto"},on:{click:function(a){return t.openPdf(t.productCode)}}})],1)],1)]),s("div",[s("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("q-card",[s("q-bar",{staticClass:"bg-primary text-white"},[s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t._v(" \n                Fechar\n              ")])],1),s("iframe",{staticClass:"iframe-height full-width",attrs:{src:this.link,type:"application/pdf",framborder:"0",scrolling:"no"}})],1)],1)],1)])],1)],1)},e=[],o={data(){return{itCode:"itModel",productCode:"project",dialog:!1,maximizedToggle:"",link:""}},methods:{openPdf(t){const a="https://leanapp.com.br/";this.link=a.concat(t).concat(".pdf"),this.dialog=!0}}},l=o,c=(s("bbf1"),s("2877")),r=s("f09f"),n=s("a370"),d=s("27f9"),p=s("9c40"),u=s("24e8"),f=s("d847"),b=s("2c91"),m=s("7f67"),C=s("eebe"),x=s.n(C),v=Object(c["a"])(l,i,e,!1,null,null,null);a["default"]=v.exports;x()(v,"components",{QCard:r["a"],QCardSection:n["a"],QInput:d["a"],QBtn:p["a"],QDialog:u["a"],QBar:f["a"],QSpace:b["a"]}),x()(v,"directives",{ClosePopup:m["a"]})},fb83:function(t,a,s){}}]);