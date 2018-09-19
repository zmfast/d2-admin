(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3014"],{"33db":function(n,e){n.exports="向 `columns` 的 `component` 对象的 `name` 传入自定义组件来进行渲染，如果是[全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)的自定义组件，只需传入组件名即可；如果是[局部注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)的组件，则需要传入`import` 的那个组件对象。自定义组件的写法需要符合[自定义组件使用v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)的写法，代码如下：\n"},6649:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("表格自定义组件")]),t("d2-crud",{ref:"d2Crud",attrs:{columns:n.columns,data:n.data},on:{"d2-data-change":n.handleDataChange}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("h4",[n._v("全局注册写法：")]),t("d2-highlight",{attrs:{code:n.codeOverall}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("h4",[n._v("局部注册写法：")]),t("d2-highlight",{attrs:{code:n.codePart}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("h4",[n._v("自定义组件 MyTag 代码：")]),t("d2-highlight",{attrs:{code:n.codeComponent}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],s=(t("cadf"),t("551c"),t("097d"),t("33db")),c=t.n(s),r="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        },\n        {\n          title: '检查状态（点击可修改）',\n          key: 'check',\n          component: {\n            name: 'my-tag'\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>",o="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nimport MyTag from './MyTag'\n\nexport default {\n  components: {\n    MyTag\n  },\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        },\n        {\n          title: '检查状态（点击可修改）',\n          key: 'check',\n          component: {\n            name: MyTag\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>",l="<template>\n  <div style=\"cursor: pointer\">\n    <el-tag :type=\"type\" @click.native=\"handleClick\">{{ text }}</el-tag>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: Boolean,\n      require: true\n    }\n  },\n  computed: {\n    type () {\n      return this.value ? 'success' : 'danger'\n    },\n    text () {\n      return this.value ? '是' : '否'\n    }\n  },\n  methods: {\n    handleClick () {\n      this.$emit('input', !this.value)\n    }\n  }\n}\n<\/script>",i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{cursor:"pointer"}},[t("el-tag",{attrs:{type:n.type},nativeOn:{click:function(e){return n.handleClick(e)}}},[n._v(n._s(n.text))])],1)},u=[],h={props:{value:{type:Boolean,require:!0}},computed:{type:function(){return this.value?"success":"danger"},text:function(){return this.value?"是":"否"}},methods:{handleClick:function(){this.$emit("input",!this.value)}}},m=h,p=t("2877"),v=Object(p["a"])(m,i,u,!1,null,null,null);v.options.__file="MyTag.vue";var g=v.exports,k={components:{MyTag:g},data:function(){return{doc:c.a,codeOverall:r,codePart:o,codeComponent:l,columns:[{title:"日期",key:"date",width:"180"},{title:"姓名",key:"name",width:"180"},{title:"地址",key:"address"},{title:"检查状态（点击可修改）",key:"check",component:{name:g}}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",check:!0},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",check:!1},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",check:!0},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",check:!0}]}},methods:{handleDataChange:function(n){console.log(n)}}},y=k,f=Object(p["a"])(y,a,d,!1,null,null,null);f.options.__file="index.vue";e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-3014.2908e600.js.map