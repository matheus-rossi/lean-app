(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d238090"],{fe50:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app-container"}},[e("q-card",{staticClass:"q-ma-xs"},[e("q-card-section",{staticClass:"bg-primary text-white text-center"},[e("div",{staticClass:"text-h6"},[t._v("GPT - Gestão do Posto de Trabalho")])]),e("q-card-section",[e("div",{staticClass:"q-pa-xs"},[t._v("Insira as informações solicitadas abaixo:")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("q-input",{staticClass:"q-pa-xs",attrs:{filled:"",label:"Código"},model:{value:t.code,callback:function(a){t.code=a},expression:"code"}})],1),e("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 col-xs-12"},[e("q-input",{staticClass:"q-pa-xs",attrs:{filled:"",type:"number",min:0,label:"Qtd peças OK"},model:{value:t.qtdOk,callback:function(a){t.qtdOk=t._n(a)},expression:"qtdOk"}})],1),e("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 col-xs-12"},[e("q-input",{staticClass:"q-pa-xs",attrs:{filled:"",type:"number",min:0,label:"Qtd peças NOK"},model:{value:t.qtdNok,callback:function(a){t.qtdNok=t._n(a)},expression:"qtdNok"}})],1),e("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 col-xs-12"},[e("q-input",{staticClass:"q-pa-xs",attrs:{filled:"",mask:"time",rules:["time"],label:"Hora Inicio"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-time",{model:{value:t.timeBegin,callback:function(a){t.timeBegin=a},expression:"timeBegin"}})],1)],1)]},proxy:!0}]),model:{value:t.timeBegin,callback:function(a){t.timeBegin=a},expression:"timeBegin"}})],1),e("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 col-xs-12"},[e("q-input",{staticClass:"q-pa-xs",attrs:{filled:"",mask:"time",rules:["time"],label:"Hora Fim"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-time",{model:{value:t.timeEnd,callback:function(a){t.timeEnd=a},expression:"timeEnd"}})],1)],1)]},proxy:!0}]),model:{value:t.timeEnd,callback:function(a){t.timeEnd=a},expression:"timeEnd"}})],1)]),e("br"),e("div",{staticClass:"button-obc"},[e("q-btn",{staticClass:"q-ma-xs",attrs:{color:"primary"},on:{click:t.addActivity}},[t._v("Adicionar Operação")]),e("q-btn",{staticClass:"q-ma-xs",attrs:{color:"primary"},on:{click:t.cleanData}},[t._v("Limpar Dados")]),e("q-btn",{staticClass:"q-ma-xs",attrs:{color:"primary"},on:{click:function(a){return t.$refs.importFile.$el.click()}}},[e("form",{attrs:{id:"form"}},[e("q-input",{ref:"importFile",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onChangeXlsx}})],1),t._v("\n          Importar Dados\n        ")])],1)]),e("q-card-section",[e("ProgressGpt",{directives:[{name:"show",rawName:"v-show",value:t.showGpt,expression:"showGpt"}],attrs:{gainMin:t.gainMin,gainPercent:t.gainPercent}}),e("div",{staticClass:"q-pa-xs"},[e("q-table",{attrs:{title:"Lista de Apontamentos",data:t.gptList,columns:t.columns,pagination:t.pagination,"pagination-label":t.getPaginationLabel,"rows-per-page-options":[0,25,50,100],"row-key":"activity","no-data-label":"Sem Dados","rows-per-page-label":"Linhas por Página"},on:{"update:pagination":function(a){t.pagination=a}}})],1)],1)],1)],1)},i=[],n=(e("34ef"),e("1146")),o=e.n(n),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-sm-12 col-xs-12 q-pa-xs"},[e("q-card",{staticClass:"col",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("Ganho em Percentual")]),e("q-separator",{attrs:{inset:""}}),e("p",{staticClass:"text-h6"},[t._v("\n          "+t._s(t.gainPercent)+" %\n        ")])],1)],1)],1),e("div",{staticClass:"col-md-3 col-sm-12 col-xs-12 q-pa-xs"},[e("q-card",{attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("Ganho em Tempo")]),e("q-separator",{attrs:{inset:""}}),e("p",{staticClass:"text-h6"},[t._v("\n          "+t._s(t.gainMin)+"Min\n        ")])],1)],1)],1),e("div",{staticClass:"col-md-6 col-sm-12 col-xs-12 q-pa-xs"},[e("q-list",{staticClass:"bg-light-blue-1",staticStyle:{height:"100%"},attrs:{bordered:""}},[e("q-item",[e("q-item-section",[t._v("A partir das informações registradas na lista de apontamento, e coletadas via check-list, estes são os ganhos possíveis com a aplicação da GPT.")])],1),e("q-item",[e("q-item-section",[t._v("Análise feita levando em consideração, a eliminação de atividades que não agregam valor.")])],1)],1)],1)])},c=[],r={name:"progressTrf",props:["gainMin","gainPercent"],data:function(){return{}}},d=r,m=e("2877"),p=Object(m["a"])(d,l,c,!1,null,null,null),u=p.exports,g={components:{ProgressGpt:u},data:function(){return{code:"",qtdOk:"",qtdNok:"",timeBegin:"",timeEnd:"",gptList:[],importFile:"",gainMin:0,gainPercent:0,showGpt:!1,pagination:{rowsPerPage:0},columns:[{name:"code",label:"Código",field:"code",align:"left",sortable:!0},{name:"qtdOk",label:"Qtd OK",field:"qtdOk",sortable:!0},{name:"qtdNok",label:"Qtd NOK",field:"qtdNok",sortable:!0},{name:"timeBegin",label:"Hora Inicio",field:"timeBegin",sortable:!0},{name:"timeEnd",label:"Hora Fim",field:"timeEnd",sortable:!0}]}},methods:{addActivity:function(){if(null===this.code||null===this.qtdOk||""===this.qtdNok||""===this.timeBegin||null===this.timeEnd)return alert("Campos Obrigatórios Vazios");var t={code:this.code,timeBegin:this.timeBegin,timeEnd:this.timeEnd,qtdOk:this.qtdOk,qtdNok:this.qtdNok};this.gptList.push(t),this.calculateGpt()},onChangeXlsx:function(t){var a=t.target.files,e=a[0],s=new FileReader,i=this;s.onload=function(t){var a=new Uint8Array(t.target.result),e=o.a.read(a,{type:"array"}),s=o.a.utils.sheet_to_json(e.Sheets.Planilha1);i.gptList=s,i.calculateGpt()},s.readAsArrayBuffer(e)},getPaginationLabel:function(t,a,e){return"".concat(t,"-").concat(a," de ").concat(e)},calculateGpt:function(){this.showGpt=!0},cleanData:function(){this.code="",this.timeBegin="",this.timeEnd="",this.qtdOk="",this.qtdNok="",this.gptList=[],this.importFile="",this.gainMin=0,this.gainPercent=0,this.showGpt=!1,document.getElementById("form").reset()}}},q=g,h=Object(m["a"])(q,s,i,!1,null,null,null);a["default"]=h.exports}}]);