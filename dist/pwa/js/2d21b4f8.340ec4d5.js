(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21b4f8"],{bedc:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row"},[s("q-card",{staticClass:"q-ma-xs col"},[s("q-card-section",{staticClass:"bg-primary text-center text-white q-pa-xs"},[s("div",{staticClass:"text-h6"},[e._v("\n          OEE - Overall Equipment Effiency\n        ")])]),s("q-card-section",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[s("div",{staticClass:"text-h6"},[e._v("Disponibilidade (min)")]),s("q-input",{attrs:{type:"number",label:"Tempo total disponível para produzir",min:0},model:{value:e.avaliableTime,callback:function(t){e.avaliableTime=e._n(t)},expression:"avaliableTime"}}),s("q-input",{attrs:{type:"number",label:"Tempo parado programado (5S, Reuniões)",min:0},model:{value:e.plannedTime,callback:function(t){e.plannedTime=e._n(t)},expression:"plannedTime"}}),s("q-input",{attrs:{type:"number",label:"Tempo parado não programado (Quebras, Falta Peças)",min:0},model:{value:e.downTime,callback:function(t){e.downTime=e._n(t)},expression:"downTime"}})],1),s("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[s("div",{staticClass:"text-h6"},[e._v("Performance (min)")]),s("q-input",{attrs:{type:"number",label:"Tempo de ciclo",min:0},model:{value:e.processCycleTime,callback:function(t){e.processCycleTime=e._n(t)},expression:"processCycleTime"}}),s("q-input",{attrs:{type:"number",label:"Quantidade total produzida",min:0},model:{value:e.totalProduced,callback:function(t){e.totalProduced=e._n(t)},expression:"totalProduced"}})],1),s("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[s("div",{staticClass:"text-h6"},[e._v("Qualidade")]),s("q-input",{attrs:{type:"number",label:"Qtd peças não conformes",min:0},model:{value:e.defectiveParts,callback:function(t){e.defectiveParts=e._n(t)},expression:"defectiveParts"}})],1),s("div",{staticClass:"col-12"},[s("q-btn",{staticClass:"btn-right-drawer items-center col",attrs:{color:"primary",label:"Calcular"},on:{click:e.calculateOee}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showResult,expression:"showResult"}],staticClass:"col q-pa-sm"},[s("div",{staticClass:"text-h6",attrs:{id:"focusResult"}},[e._v("Resultado")]),s("ProgressOee",{attrs:{oeeCalculed:e.oee}})],1)])])],1)],1)])},i=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-md-6 col-sm-12 q-pa-md"},[s("div",{staticClass:"row justify-center"},[s("q-circular-progress",{staticClass:"q-ma-md",attrs:{"show-value":"",value:e.oeeCalculed,size:"10em",thickness:.22,color:"teal","track-color":"grey-3"}},[e._v(" "+e._s(e.oeeCalculed)+"%\n      ")])],1)]),s("div",{staticClass:"col-md-6 col-sm-12 q-pa-md"},[s("q-list",{attrs:{bordered:"",separator:""}},[s("q-item",{attrs:{active:e.step1,"active-class":"bg-teal-2 text-grey-9"}},[s("q-item-section",[e._v("De 0 até 30% "),s("br"),e._v(" Sistema de produção com performance baixa")])],1),s("q-item",{attrs:{active:e.step2,"active-class":"bg-teal-2 text-grey-9"}},[s("q-item-section",[e._v("Acima de 30 até 60% "),s("br"),e._v(" Sistema de produção com performance normal")])],1),s("q-item",{attrs:{active:e.step3,"active-class":"bg-teal-2 text-grey-9"}},[s("q-item-section",[e._v("Acima de 60% até 90% "),s("br"),e._v(" Sistema de produção com performance alta")])],1),s("q-item",{attrs:{active:e.step4,"active-class":"bg-teal-2 text-grey-9"}},[s("q-item-section",[e._v("Maior que 90% "),s("br"),e._v(" Sistema de produção com performance excelente")])],1)],1)],1)])},o=[],c={name:"oeeGraph",props:["oeeCalculed"],data:function(){return{step1:!1,step2:!1,step3:!1,step4:!1,vShow:!1}},watch:{oeeCalculed:function(e){this.oeeCalculed<=30?(this.step1=!0,this.step2=this.step3=this.step4=!1):this.oeeCalculed<=60?(this.step2=!0,this.step1=this.step3=this.step4=!1):this.oeeCalculed<=90?(this.step3=!0,this.step1=this.step2=this.step4=!1):(this.step4=!0,this.step1=this.step2=this.step3=!1)}}},r=c,n=s("2877"),d=Object(n["a"])(r,l,o,!1,null,null,null),m=d.exports,u={data:function(){return{avaliableTime:560,plannedTime:40,downTime:30,processCycleTime:55,totalProduced:8,defectiveParts:2,oee:0,showResult:!1,buttonReset:!1}},components:{ProgressOee:m},methods:{calculateOee:function(){if(this.showResultFunc(),""===this.avaliableTime||""===this.plannedTime||""===this.downTime||""===this.processCycleTime||""===this.totalProduced||""===this.defectiveParts)return alert("Dialog Here");var e=this.avaliableTime-this.plannedTime,t=(e-this.downTime)/e,s=e-this.downTime,a=this.totalProduced/(s/this.processCycleTime),i=this.defectiveParts/this.totalProduced;this.oee=Math.floor(t*a*(1-i)*100),this.focusResult()},focusResult:function(){document.getElementById("focusResult").scrollIntoView()},showResultFunc:function(){this.showResult=!0}}},p=u,v=Object(n["a"])(p,a,i,!1,null,null,null);t["default"]=v.exports}}]);