(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-684b"],{"3790e":function(n,t){n.exports="在 `D2 Crud` 组件中传入 `loading-options` ，即可自定义表格加载状态。代码如下：\n"},"97da":function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("d2-container",[a("template",{slot:"header"},[n._v("自定义加载状态")]),a("el-button",{on:{click:n.handleLoading}},[n._v("点我切换加载状态")]),a("d2-crud",{staticStyle:{"margin-top":"10px"},attrs:{columns:n.columns,data:n.data,loading:n.loading,"loading-options":n.loadingOptions}}),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-markdown",{attrs:{source:n.doc}})],1),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-highlight",{attrs:{code:n.code}})],1),a("template",{slot:"footer"},[a("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],o=(a("cadf"),a("551c"),a("097d"),a("3790e")),s=a.n(o),i="<template>\n  <div>\n  <d2-crud\n    :columns=\"columns\"\n    :data=\"data\"\n    :loading=\"loading\"\n    :loading-options=\"loadingOptions\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      loading: true,\n      loadingOptions: {\n        text: '拼命加载中',\n        spinner: 'el-icon-loading',\n        background: 'rgba(0, 0, 0, 0.8)'\n      }\n    }\n  }\n}\n<\/script>",l={data:function(){return{doc:s.a,code:i,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],loading:!0,loadingOptions:{text:"拼命加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.8)"}}},methods:{handleLoading:function(){this.loading=!this.loading}}},r=l,c=a("2877"),u=Object(c["a"])(r,e,d,!1,null,null,null);u.options.__file="index.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-684b.8f260b8d.js.map