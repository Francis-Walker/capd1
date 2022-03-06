"use strict";(self["webpackChunkboiz_sugar"]=self["webpackChunkboiz_sugar"]||[]).push([[443],{8428:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("div",{staticClass:"form_box class ='p-3'"},[o("b-row",{staticClass:"pt-3",attrs:{"align-h":"center"}},[o("b-col",{attrs:{cols:"8"}},[o("b-row",[o("h1",[o("strong",[e._v("Login")])])])],1)],1),o("b-row",{attrs:{"align-h":"center"}},[o("b-col",{attrs:{cols:"8"}},[o("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[o("b-form-group",[o("b-form-input",{staticClass:"m-3",attrs:{id:"username_input",placeholder:"Enter Username",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),o("b-form-input",{staticClass:"m-3",attrs:{id:"password_input",placeholder:"Enter Password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),o("p",[e._v(" Don't have an account? "),o("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),o("b-button",{staticClass:"m-3",attrs:{pill:"",type:"submit",variant:"success"}},[e._v("Login")])],1)],1)],1)],1)])},r=[],a=(o(8309),o(8132)),i={name:"LoginView",components:{},data:function(){return{form:{name:"",password:""}}},methods:{onSubmit:function(e){e.preventDefault(),a.Z.push({path:"/dashboard"})},onReset:function(e){e.preventDefault(),this.form.email="",this.form.name="",this.form.password=""}}},n=i,l=o(1001),m=(0,l.Z)(n,s,r,!1,null,null,null),u=m.exports},6538:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("div",{staticClass:"form_box class ='p-3'"},[o("b-row",{staticClass:"pt-3",attrs:{"align-h":"center"}},[o("b-col",{attrs:{cols:"8"}},[o("b-row",[o("h1",[o("strong",[e._v("Register")])])])],1)],1),o("b-row",{attrs:{"align-h":"center"}},[o("b-col",{attrs:{cols:"8"}},[o("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[o("b-form-group",[o("b-form-input",{staticClass:"m-3",attrs:{id:"email_input",type:"email",placeholder:"Enter email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),o("b-form-input",{staticClass:"m-3",attrs:{id:"username_input",placeholder:"Enter Username",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),o("b-form-input",{staticClass:"m-3",attrs:{id:"password_input",placeholder:"Enter Password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),o("b-form-input",{staticClass:"m-3",attrs:{id:"password_input",placeholder:"Confirm Password",type:"password",required:""},model:{value:e.form.confirm_password,callback:function(t){e.$set(e.form,"confirm_password",t)},expression:"form.confirm_password"}}),e._v(" I confirm I have read, understand and accept the "),o("br"),o("a",{attrs:{href:""}},[e._v("Privacy Policy")]),e._v(", "),o("a",{attrs:{href:""}},[e._v("Data Usage Policy")]),e._v(" and "),o("a",{attrs:{href:""}},[e._v("Cookie Policy")]),o("b-form-checkbox",{staticClass:"m-1",attrs:{id:"checkbox-1",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted",switch:""},model:{value:e.form.privacy_policy,callback:function(t){e.$set(e.form,"privacy_policy",t)},expression:"form.privacy_policy"}})],1),o("b-button",{staticClass:"m-3",attrs:{type:"submit",variant:"success"}},[e._v("Register")]),o("b-button",{staticClass:"m-3",attrs:{type:"reset",variant:"danger"}},[e._v("Reset Form")]),o("p",[e._v(" Already have an account? "),o("router-link",{attrs:{to:"/"}},[e._v("Login")])],1)],1)],1)],1)],1)])},r=[],a=(o(8309),o(8132)),i={name:"RegisterView",components:{},data:function(){return{form:{email:"",name:"",password:"",privacy_policy:!1,data_policy:!1,cookie_policy:!1,confirm_password:""}}},methods:{onSubmit:function(e){e.preventDefault(),a.Z.push({path:"/"})},onReset:function(e){e.preventDefault(),this.form.email="",this.form.name="",this.form.password=""}}},n=i,l=o(1001),m=(0,l.Z)(n,s,r,!1,null,null,null),u=m.exports},2499:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"h1"},[o("b-row",{attrs:{"align-h":"center"}},[o("b-col",{staticClass:"dash",attrs:{cols:"6"}},[o("h1",[e._v("Dashboard")]),o("b-row",[o("b-col",[o("router-link",{attrs:{to:"/admin"}},[o("b-icon-gear-fill"),o("h6",[e._v("Admin")])],1)],1),o("b-col",[o("router-link",{attrs:{to:"/grower"}},[o("b-icon-person-fill"),o("h6",[e._v("Grower")])],1)],1)],1),o("b-row",[o("b-col",[o("router-link",{attrs:{to:"/mill"}},[o("b-icon-house-door-fill"),o("h6",[e._v("Mill")])],1)],1),o("b-col",[o("router-link",{attrs:{to:"/growers"}},[o("b-icon-people-fill"),o("h6",[e._v("Growers")])],1)],1)],1)],1)],1)],1)])},r=[],a={name:"DashBoard",components:{}},i=a,n=o(1001),l=(0,n.Z)(i,s,r,!1,null,null,null),m=l.exports},1509:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("h1",[e._v("Admin")]),o("div",{attrs:{id:"chart"}},[o("apexChart",{attrs:{type:"area",height:"350",options:e.chartOptions,series:e.series}})],1),o("p",[e._v(" What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")])])},r=[],a={data:function(){return{series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:{chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}}},i=a,n=o(1001),l=(0,n.Z)(i,s,r,!1,null,null,null),m=l.exports},9790:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("h1",[e._v("Grower")]),o("div",{attrs:{id:"chart"}},[o("apexChart",{attrs:{type:"area",height:"350",options:e.chartOptions,series:e.series}})],1),o("p",[e._v(" What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")])])},r=[],a={data:function(){return{series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:{chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}}},i=a,n=o(1001),l=(0,n.Z)(i,s,r,!1,null,null,null),m=l.exports},3378:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("h1",[e._v("Growers")]),o("div",{attrs:{id:"chart"}},[o("apexChart",{attrs:{type:"area",height:"350",options:e.chartOptions,series:e.series}})],1),o("p",[e._v(" What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")])])},r=[],a={data:function(){return{series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:{chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}}},i=a,n=o(1001),l=(0,n.Z)(i,s,r,!1,null,null,null),m=l.exports},1272:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("h1",[e._v("Mill")]),o("div",{attrs:{id:"chart"}},[o("apexChart",{attrs:{type:"area",height:"350",options:e.chartOptions,series:e.series}})],1),o("p",[e._v(" What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")])])},r=[],a={data:function(){return{series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:{chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}}},i=a,n=o(1001),l=(0,n.Z)(i,s,r,!1,null,null,null),m=l.exports}}]);
//# sourceMappingURL=about.8ec6bb5b.js.map