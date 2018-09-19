(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e29c"],{"047b":function(n,t,e){"use strict";e.r(t);var d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("d2-container",[e("template",{slot:"header"},[n._v("固定列")]),e("d2-crud",{attrs:{columns:n.columns,data:n.data}}),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-markdown",{attrs:{source:n.doc}})],1),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-highlight",{attrs:{code:n.code}})],1),e("template",{slot:"footer"},[e("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},i=[],a=(e("cadf"),e("551c"),e("097d"),e("95e0")),c=e.n(a),s="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180',\n          fixed: true\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '省份',\n          key: 'province',\n          width: '300'\n        },\n        {\n          title: '市区',\n          key: 'city',\n          width: '300'\n        },\n        {\n          title: '地址',\n          key: 'address',\n          width: '300'\n        },\n        {\n          title: '邮编',\n          key: 'zip',\n          fixed: 'right'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        }\n      ]\n    }\n  }\n}\n<\/script>",r={data:function(){return{doc:c.a,code:s,columns:[{title:"日期",key:"date",width:"180",fixed:!0},{title:"姓名",key:"name",width:"180"},{title:"省份",key:"province",width:"300"},{title:"市区",key:"city",width:"300"},{title:"地址",key:"address",width:"300"},{title:"邮编",key:"zip",fixed:"right"}],data:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}},o=r,l=e("2877"),p=Object(l["a"])(o,d,i,!1,null,null,null);p.options.__file="index.vue";t["default"]=p.exports},"95e0":function(n,t){n.exports="固定列需要在 `columns` 对象数组中给需要固定的列传入 `fixed` 属性，它接受 `Boolean` 值或者 `left` `right` ，表示左边固定还是右边固定。代码如下：\n"}}]);
//# sourceMappingURL=chunk-e29c.42b54fb2.js.map