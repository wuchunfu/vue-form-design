import{r as l,a,o as m,c as f,b as s,w as p,d}from"./index.61393f5e.js";const b=d("\u63D0\u4EA4"),y={__name:"test",setup(_){const r=l({list:[{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u6027\u522B",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6E38\u620F",value:"1"},{label:"\u8D2D\u7269",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:"",linkKey:!0,linkValue:"$.radio==='1'",linkResult:"disabled"},item:{label:"\u5174\u8DA3\u7231\u597D",showLabel:!1}},{name:"input1637189604237",type:"input",control:{modelValue:"",placeholder:"\u6027\u522B\u4E3A\u7537\u6027\u6216\u5174\u8DA3\u7231\u597D\u4E3A\u6E38\u620F\u65F6\u663E\u793A"},slot:{},config:{linkKey:!0,linkValue:"$.radio==='1'||$.select==='1'"},item:{label:"\u6E38\u620F\u9879\u76EE",showLabel:!1},rules:[],customRules:[]},{name:"input1637198443468",type:"input",control:{modelValue:"",placeholder:"\u6027\u522B\u4E3A\u5973\u6027\u6216\u5174\u8DA3\u7231\u597D\u4E3A\u8D2D\u7269\u65F6\u663E\u793A"},slot:{},config:{linkKey:!0,linkValue:"$.radio==='2'&&$.select==='2'"},item:{label:"\u8D2D\u7269\u9879\u76EE",showLabel:!1},rules:[],customRules:[]}],form:{labelWidth:"",class:"",size:"default",name:"form1660728166875"}}),n=l(!1),o=l(),u=()=>{o.value.validate((e,t)=>{if(console.log(e),console.log(t),e)alert("submit");else return console.log("error submit"),!1})};return(e,t)=>{const i=a("ak-form"),c=a("el-button");return m(),f("div",null,[s(i,{formData:r.value,ref_key:"formName",ref:o,submitUrl:n.value},null,8,["formData","submitUrl"]),s(c,{type:"primary",onClick:u},{default:p(()=>[b]),_:1})])}}};export{y as default};
