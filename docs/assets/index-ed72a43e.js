import{_ as Ae,a as Ee}from"./headTools.vue_vue_type_script_setup_true_lang-bce72e3a.js";import{d as he,L as ve,o as i,c as h,g as w,F as P,a as z,m as S,t as de,n as _e,f as U,a6 as $e,l as oe,h as ae,G as Ie,H as Fe,r as $,b as _,w as o,i as t,C as H,O as Ce,x as pe,D as X,P as Be,a7 as Le,N as Pe,a8 as De,a2 as qe,$ as ee,a5 as ge,u as ze,k as je,A as He,V as Ke,p as Me,B as We,s as Ge,W as ye,Z as te,Y as me,a3 as xe,a4 as Ue,a9 as Qe,E as Te}from"./index-62047d8c.js";import{_ as Ye}from"./aceDrawer.vue_vue_type_script_setup_true_lang-0c160b12.js";const ke=[],fe={optionsType:0},Ne=[{title:"基础字段",children:[{type:"input",label:"单行文本",icon:"input",control:{modelValue:""},config:{}},{type:"textarea",label:"多行文本",icon:"textarea",control:{modelValue:""},config:{}},{type:"radio",label:"单选框组",icon:"radio",control:{modelValue:""},options:ke,config:fe},{type:"checkbox",label:"多选框组",icon:"checkbox",control:{modelValue:[]},options:ke,config:fe},{type:"select",label:"下拉选择框",icon:"select",control:{modelValue:"",appendToBody:!0},options:ke,config:fe},{type:"datePicker",label:"日期选择器",icon:"date",control:{modelValue:"",type:"date"},config:{}},{type:"timePicker",label:"时间选择器",icon:"time",control:{modelValue:""},config:{}},{type:"colorPicker",label:"取色器",icon:"color",control:{modelValue:""},config:{}},{type:"switch",label:"开关",icon:"switch",control:{modelValue:!1},config:{}},{type:"inputNumber",label:"计数器",icon:"number",control:{modelValue:0},config:{}},{type:"cascader",label:"级联选择器",icon:"cascader",control:{modelValue:[]},options:[],config:fe},{type:"rate",label:"评分",icon:"rate",control:{modelValue:0},config:{}},{type:"slider",label:"滑块",icon:"slider",control:{modelValue:0},config:{}},{type:"treeSelect",label:"树形控件",icon:"tree2",control:{modelValue:"",data:[],renderAfterExpand:!1},config:{optionsType:0}},{type:"txt",label:"文字",icon:"text",control:{modelValue:""},config:{}},{type:"title",label:"标题",icon:"title",control:{modelValue:"标题"},config:{}},{type:"button",label:"按钮",icon:"button",control:{label:"保存"},config:{}}]},{title:"高级字段",children:[{type:"table",label:"子表",icon:"table",list:[],tableData:[],control:{border:!0},config:{addBtnText:"添加一行"}},{type:"component",label:"自定义组件",icon:"component",control:{modelValue:""},config:{}},{type:"upload",label:"图片/文件",icon:"image",control:{modelValue:""},config:{}},{type:"chunkUpload",label:"选择上传",icon:"upload",control:{modelValue:""},config:{}},{type:"tinymce",label:"tinymce富文本",icon:"tinymce",control:{modelValue:""},config:{}}]},{title:"布局字段",children:[{type:"grid",label:"格栅布局",icon:"grid",columns:[{attr:{span:12},list:[]},{attr:{span:12},list:[]}],control:{},config:{}},{type:"tabs",label:"标签页",icon:"tabs",columns:[{label:"Tab1",list:[]}],control:{},config:{}},{type:"card",label:"卡片布局",icon:"card",list:[],control:{},config:{}},{type:"flex",label:"弹性布局",icon:"flex",list:[],tableData:[],control:{},config:{addBtnText:"添加一行"}},{type:"divider",label:"分割线",icon:"divider",control:{},config:{}},{type:"div",label:"div容器",icon:"div",control:{},config:{},list:[]}]},{title:"扩展组件",children:[{type:"expand-user",label:"选择用户",icon:"user",control:{modelValue:""},config:{}}]}],Ze=""+new URL("test-c644ce60.png",import.meta.url).href,Je=Ze,Xe="演示test",el={list:[{type:"input",control:{modelValue:""},config:{},name:"input1663920706618",formItem:{label:"单行文本"}}],form:{size:"default"},config:{}},ll=Object.freeze(Object.defineProperty({__proto__:null,formData:el,imgPath:Je,title:Xe},Symbol.toStringTag,{value:"Module"})),tl=""+new URL("test2-ab129ef2.png",import.meta.url).href,al=tl,ol="演示test2",nl={list:[{type:"input",control:{modelValue:""},config:{},name:"input",formItem:{label:"单行文本"}},{type:"radio",control:{modelValue:""},options:[{label:"标签1",value:"value1"},{label:"标签2",value:"value2"},{label:"标签3",value:"value3"}],config:{optionsType:0},name:"radio1667180102980",formItem:{label:"单选框组"}},{type:"checkbox",control:{modelValue:[]},options:[{label:"标签1",value:"value1"},{label:"标签2",value:"value2"},{label:"标签3",value:"value3"}],config:{optionsType:0},name:"checkbox1667180107698",formItem:{label:"多选框组",showLabel:!1}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"标签1",value:"value1"},{label:"标签2",value:"value2"},{label:"标签3",value:"value3"}],config:{optionsType:0},name:"select1667180110029",formItem:{label:"下拉选择框"}},{type:"datePicker",control:{modelValue:"",type:"date"},config:{},name:"datePicker1667180115571",formItem:{label:"日期选择器"}},{type:"switch",control:{modelValue:!1},config:{},name:"switch1667180126483",formItem:{label:"开关"}}],form:{labelWidth:"",class:"",size:"default",name:"form1663920704871"},config:{}},sl=Object.freeze(Object.defineProperty({__proto__:null,formData:nl,imgPath:al,title:ol},Symbol.toStringTag,{value:"Module"})),rl={key:0,class:"no-date"},il={key:1,class:"list"},cl=["onClick"],ul=["src"],dl=he({__name:"template",emits:["click"],setup(ne,{expose:Y,emit:I}){const T=ve({visible:!1,list:[]}),g=()=>{T.visible=!0,n()},n=()=>{const a=Object.assign({"./template/test.ts":ll,"./template/test2.ts":sl});T.list=[],Object.keys(a).forEach(A=>{const E=a[A];T.list.push({imgPath:E.imgPath,title:E.title,formData:E.formData})})},p=a=>{I("click",a.formData),T.visible=!1};return Y({open:g}),(a,A)=>T.visible?(i(),h("div",{key:0,class:_e(["use-template",{active:T.visible}])},[w("span",{class:"close icon-close",onClick:A[0]||(A[0]=E=>T.visible=!1)}),T.list.length===0?(i(),h("div",rl,"暂无可用模板")):(i(),h("div",il,[(i(!0),h(P,null,z(T.list,(E,Z)=>(i(),h("div",{class:"item",key:Z,onClick:le=>p(E)},[w("img",{src:E.imgPath,alt:""},null,8,ul),S(de(E.title),1)],8,cl))),128))]))],2)):U("",!0)}}),pl={class:"components-list"},ml={key:0},fl=w("div",{class:"title"},"快速选择表单字段",-1),vl={class:"content"},hl={class:"title"},bl=["title"],gl=he({__name:"dragControl",props:{formId:{}},emits:["clickCheck","click"],setup(ne,{emit:Y}){const I=ne,T=$e("formDesignType"),g=oe([]),n=["input","radio","checkbox","select","datePicker","timePicker","inputNumber","cascader","component","button"],p=ae(()=>T==="search"),a=ae(()=>{if(T==="search"){const D=[];return Ne.forEach(V=>{if(V.children){const N=V.children.filter(G=>n.includes(G.type));N&&N.length&&D.push({title:V.title,children:N})}}),D}else return Ne}),A=D=>Ce(D),E=Ie(()=>I.formId,D=>{D&&p.value&&Z(D)}),Z=D=>{pe("designById",{id:D}).then(V=>{const N=X(V.data.data);N&&N.list&&m(N.list)})},le=(D,V)=>{if(V){const N=Ce(D);delete N.rules,delete N.customRules,Y("clickCheck",N)}},m=D=>{D.forEach(V=>{V.type==="grid"||V.type==="tabs"?V.columns.forEach(N=>{m(N.list)}):V.type==="card"?m(V.list):n.includes(V.type)&&V.type!=="button"&&g.value.push(V)})},K=oe(),se=()=>{K.value.open()},J=D=>{Y("click",D)};return Fe(()=>{E()}),(D,V)=>{var G;const N=$("el-checkbox");return i(),h("div",pl,[p.value&&((G=g.value)!=null&&G.length)?(i(),h("div",ml,[fl,w("div",vl,[(i(!0),h(P,null,z(g.value,O=>(i(),_(N,{key:O.name,onChange:f=>le(O,f)},{default:o(()=>{var f;return[S(de((f=O.formItem)==null?void 0:f.label),1)]}),_:2},1032,["onChange"]))),128))])])):U("",!0),(i(!0),h(P,null,z(a.value,(O,f)=>(i(),h("div",{key:f},[w("div",hl,[S(de(O.title)+" ",1),f===0&&!p.value?(i(),h("div",{key:0,class:"template",onClick:se}," 使用模板 ")):U("",!0)]),t(H(Be),{itemKey:"key123",tag:"ul",modelValue:O.children,"onUpdate:modelValue":u=>O.children=u,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:A},{item:o(({element:u})=>[w("li",{class:_e([u.type])},[w("i",{class:_e(`icon-${u.icon}`)},null,2),w("span",{title:u.label},de(u.label),9,bl)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128)),p.value?U("",!0):(i(),_(dl,{key:1,ref_key:"useTemplateEl",ref:K,onClick:J},null,512))])}}}),yl={class:"sidebar-tools"},kl=w("div",{class:"h3"},[w("h3",null,"通用属性")],-1),_l=w("div",{class:"h3"},[w("h3",null,"标签配置项")],-1),wl=["onClick"],Vl={key:1},Sl=w("div",{class:"h3"},[w("h3",null,"选项配置")],-1),Cl={key:0},Dl=["onClick"],xl=w("div",{class:"h3"},[w("h3",null,"校验设置")],-1),Ul={key:0},Tl=["onClick"],Nl={key:3},$l=w("div",{class:"h3"},[w("h3",null,"其他属性")],-1),Il=w("div",{class:"h3"},[w("h3",null,"接口数据事件")],-1),Pl=he({__name:"formControlAttr",props:{formData:{},formConfig:{default:()=>({})},formOtherData:{default:()=>({})}},emits:["openDialog","update:formOtherData"],setup(ne,{expose:Y,emit:I}){const T=ne,{formConfig:g,formData:n}=Le(T),p=Pe(),a=ae(()=>p.controlAttr),A=oe([]),E=ae(()=>{var e;const s=m.isSearch;return[{label:"表单名称",placeholder:"用于保存的表单名称",value:T.formOtherData.formName,key:"formName",hide:s},{label:"数据源",placeholder:"请选择数据源",value:ge(T.formOtherData.source),type:"select",options:A.value,key:"source",hide:s||!((e=A.value)!=null&&e.length),clearable:!0},{label:"表单标识",value:n.value.name,placeholder:"表单唯一标识，可为空",key:"name",hide:s},{label:"表单标签宽度",value:n.value.labelWidth,placeholder:"表单label宽，如180px",key:"labelWidth"},{label:"表单样式名称",value:n.value.class,placeholder:"额外添加的表单class类名",key:"class",type:"select",options:[{label:"无样式",value:""},{label:"每行两列",value:"form-row-2"},{label:"每行三列",value:"form-row-3"},{label:"每行四列",value:"form-row-4"}],hide:s,clearable:!0},{label:"字段名后添加冒号",value:n.value.showColon,key:"showColon",type:"switch"},{label:"组件尺寸",value:n.value.size,type:"select",key:"size",options:[{label:"large",value:"large"},{label:"default",value:"default"},{label:"small",value:"small"}]},{label:"快速添加确定取消按钮",value:g.value.submitCancel,type:"switch",path:"config",key:"submitCancel"}]}),Z=ae(()=>{var s;if(Object.keys(a.value).length){const{control:e={},type:c,name:y,config:d={},formItem:b={},attr:v={}}=a.value;let q=!1;if(c==="table"){const R=(s=a.value)==null?void 0:s.list;R&&R.length>0&&(q=R[0].type==="index")}return[{label:"自定义Class",value:d.className,placeholder:"样式类名",path:"config.className"},{label:"字段标识",value:y,type:Object.keys(m.dataSourceList).length>0?"select":"text",placeholder:"字段唯一标识，对应数据库",dict:m.dataSourceList,path:"name",vHide:["grid","tabs","card","title","gridChild","tableColumn","divider","txt","div","button"],eventName:"filedNameKey"},{label:"占位内容",value:e.placeholder,placeholder:"placeholder",path:"control.placeholder",vShow:["password","input","textarea","select","date","number","datePicker","tinymce","timePicker","treeSelect"]},{label:"按钮类型",value:e.type,path:"control.type",type:"select",dict:{primary:"primary",success:"success",info:"info",warning:"warning",danger:"danger"},vShow:["button"],clearable:!0},{label:"按钮名称",value:e.label,path:"control.label",vShow:["button"]},{label:"按钮事件",value:e.key,path:"control.key",type:"select",dict:{submit:"提交表单",reset:"重置表单",cancel:"取消返回",none:"无动作(自定义)"},vShow:["button"]},{label:"label值",value:b.label,path:"formItem.label",vHide:["table","grid","tabs","title","gridChild","div","inputSlot","flex","button","txt"]},{label:"隐藏label",value:b.showLabel,path:"formItem.showLabel",type:"switch",vHide:["table","grid","tabs","title","gridChild","divider","card","div","inputSlot","flex","button","txt"]},{label:"显示类型",value:d.showType,path:"config.showType",type:"select",dict:{input:"文本选择框",img:"图片",btn:"上传按钮"},vShow:["chunkUpload"]},{label:"按钮文本",value:d.btnText,placeholder:"按钮文本，默认为选择文件",path:"config.btnText",vShow:["chunkUpload"],vIf:d.showType==="img"},{label:"可选数量",value:d.limit,placeholder:"可选择的个数，默认1个",path:"config.limit",vShow:["chunkUpload"]},{label:"接受的文件类型",value:d.accept,placeholder:"接受的文件类型，input原生属性",path:"config.accept",vShow:["chunkUpload"]},{label:"是否自动上传",value:d.auto,path:"config.auto",type:"switch",vShow:["chunkUpload"]},{label:"帮助信息",value:d.help,path:"config.help",vHide:["table","grid","tabs","gridChild","divider","div","inputSlot","flex","button","txt"]},{label:"表单栅格",value:d.span,placeholder:"表单区域栅格宽，0为自动宽",path:"config.span",vHide:["gridChild"],isNum:!0},{label:"文本值",value:e.modelValue,placeholder:"支持html",path:"control.modelValue",vShow:["txt"],inputStyle:"textarea"},{label:"设为密码",value:c,type:"select",dict:{input:"文本",password:"密码"},path:"type",vShow:["input","password"],vIf:m.isSearch},{label:"文本域高度",value:e.rows,placeholder:"输入框行数",path:"control.rows",vShow:["textarea"],isNum:!0},{label:"前缀",value:d.prepend,placeholder:"文本前缀",path:"config.prepend",vShow:["input","password"]},{label:"后缀",value:d.append,placeholder:"文本后缀",path:"config.append",vShow:["input","password"]},{label:"状态打开时的值",value:e.activeValue,placeholder:"状态打开时的值",path:"control.activeValue",vShow:["switch"],isNum:!0},{label:"状态关闭时的值",value:e.inactiveValue,placeholder:"状态关闭时的值",path:"control.inactiveValue",vShow:["switch"],isNum:!0},{label:"增加按钮文案",value:d.addBtnText,path:"config.addBtnText",type:"text",vShow:["flex","table"]},{label:"删除按钮文案",value:d.delBtnText,path:"config.delBtnText",type:"text",vShow:["flex","table"]},{label:"是否多选",value:e.multiple,path:"control.multiple",type:"switch",vShow:["select","treeSelect"],eventName:"selectMultiple"},{label:"可清空",value:e.clearable,path:"control.clearable",type:"switch",vShow:["select"]},{label:"是否禁用",value:e.disabled,path:"control.disabled",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload","rate","tinymce","treeSelect","datePicker","timePicker"],vIf:m.isSearch},{label:"是否禁用编辑",value:d.disabledEdit,path:"config.disabledEdit",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload","treeSelect","table","flex","datePicker","timePicker"],vIf:m.isSearch},{label:"添加页隐藏",value:d.displayAdd,path:"config.displayAdd",type:"switch",vIf:m.isSearch,vHide:["inputSlot"]},{label:"编辑页隐藏",value:d.displayEdit,path:"config.displayEdit",type:"switch",vIf:m.isSearch,vHide:["inputSlot"]},{label:"详情页隐藏",value:d.displayDetail,path:"config.displayDetail",type:"switch",vIf:m.isSearch,vHide:["inputSlot"]},{label:"设为Input输入框的前/后缀",value:c==="inputSlot",path:"",type:"switch",vShow:["select","inputSlot"],eventName:"setInputSlot"},{label:"标题",value:e.modelValue,path:"control.modelValue",vShow:["title"]},{label:"占据的列数span",value:v.span,path:"attr.span",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"左侧的间隔格数offset",value:v.offset,path:"attr.offset",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"向右移动格数push",value:v.push,path:"attr.push",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"向左移动格数pull",value:v.pull,path:"attr.pull",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"序号列",value:q,type:"switch",vShow:["table"],eventName:"tableColumn1"},{label:"组件名",value:d.componentName,placeholder:"全局注册的组件名称",path:"config.componentName",vShow:["component"]},{label:"上传地址",value:e.action,placeholder:"图片/文件上传地址,可不填有默认值",path:"control.action",vShow:["upload"]},{label:"文件字段名",value:e.name,placeholder:"上传的文件字段名,默认file",path:"control.name",vShow:["upload"]},{label:"提示文字",value:d.tip,placeholder:"提示说明文字",path:"config.tip",vShow:["upload"]},{label:"按钮文本",value:d.btnText,placeholder:"上传按钮文本",path:"config.btnText",vShow:["upload"]},{label:"direction",type:"select",dict:{horizontal:"horizontal",vertical:"vertical"},placeholder:"分割线方向，默认horizontal",value:e.direction,path:"control.direction",vShow:["divider"]},{label:"border-style",placeholder:"分隔符样式，默认solid",value:e.borderStyle,path:"control.borderStyle",vShow:["divider"]},{label:"content-position",type:"select",dict:{left:"left",right:"right",center:"center"},value:e.contentPosition,path:"control.contentPosition",vShow:["divider"]},{label:"最小值",value:e.min,path:"control.min",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"最大值",value:e.max,path:"control.max",vShow:["rate","slider"],eventName:"formatNumber",isNum:!0},{label:"步长",value:e.step,path:"control.step",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"type",value:e.type,path:"control.type",vShow:["datePicker"],type:"select",placeholder:"显示类型",dict:{year:"year",month:"month",date:"date",datetime:"datetime",week:"week",datetimerange:"datetimerange",daterange:"daterange",monthrange:"monthrange"}},{label:"format",value:e.format,path:"control.format",vShow:["datePicker","timePicker"],placeholder:"显示在输入框中的格式"},{label:"color-format",value:e.colorFormat,path:"control.colorFormat",type:"select",placeholder:"写入 v-model 的颜色的格式",dict:{hsl:"hsl",hsv:"hsv",hex:"hex",rgb:"rgb"},vShow:["colorPicker"]},{label:"文本高度",value:e.height,path:"control.height",placeholder:"文本高度(预览查看效果)",vShow:["tinymce"]},{label:"文本宽度",value:e.width,path:"control.width",placeholder:"文本宽度(预览查看效果)",vShow:["tinymce"]},{label:"图片上传地址",value:e.imgUrl,path:"control.imgUrl",placeholder:"图片上传地址",vShow:["tinymce"]},{label:"附件上传地址",value:e.blobUrl,path:"control.blobUrl",placeholder:"附件上传地址",vShow:["tinymce"]},{label:"显示模式",value:d.style,path:"config.style",placeholder:"显示风格(预览查看效果)",type:"select",dict:{default:"default",simple:"simple"},vShow:["tinymce"]},{label:"隐藏显示",value:d.hidden,path:"config.hidden",placeholder:"条件表达式，如$.name===1"},{label:"禁用显示",value:d.disabled,path:"config.disabled",placeholder:"条件表达式，如$.name===1",vHide:["txt","title","table","grid","tabs","card","flex","divider","div"]}].filter(R=>{let j=!0;return R.vShow&&(j=R.vShow.includes(c)),R.vHide&&(j=!R.vHide.includes(c)),R.vIf&&(j=!1),j})}else return[]}),le=$e("formDesignType"),m=ve({dataSourceList:{},customRulesList:[...De,{type:"rules",label:"自定义正则"},{type:"methods",label:"自定义方法"}],isSearch:le==="search",tooltip:{css:"当前表单应用页的样式，类似于.vue文件中的style scoped中的样式",dict:'数据字典，用于匹配多选组、下拉选择等，提供动态获取Options接口字典数据，一般不设置，从接口dict获取。json格式："sex":{"0":"男","1":"女"}',rules:"可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>",props:"可添加当前组件所有prop属性及事件方法"},tabsName:"second"});Ie(()=>p.activeKey,s=>{s&&(m.tabsName="first")});const K=(s,e)=>{switch(s.eventName){case"selectMultiple":a.value.control.modelValue=e?[]:"";break;case"tableColumn1":f(e);break;case"formatNumber":break;case"filedNameKey":s.type==="select"&&m.dataSourceList.forEach(c=>{c.name===e&&(a.value.formItem&&(a.value.formItem.label=c.label),a.value.name=c.label)});break;case"setInputSlot":e?(a.value.type="inputSlot",ee.success(`请在对应的Input输入框属性前后缀设置key:${a.value.name}`)):a.value.type="select";break}if(s.path){const c=s.isNum?ge(e):e;s.path&&se(a.value,s.path,c)}},se=(s,e,c)=>{let y=s;const d=e.split(".");let b=0;for(b;b<d.length-1;b++){const k=d[b];if(k in y)y=y[k];else throw new Error(`${k} is undefined`)}const v=d[b],q=y[d[b]];return c!==void 0&&(y[v]=c),{obj:y,key:v,value:q}},J=(s,e)=>{e==="tabs"?a.value.columns.splice(s,1):a.value.options.splice(s,1)},D=s=>{const e=a.value.type;e==="cascader"?V("cascader"):e==="treeSelect"?V("treeSelect","编辑组件下拉选项数据"):s==="tabs"?a.value.columns.push({label:"标签名称",list:[]}):a.value.options.push({label:"",value:""})},V=(s,e)=>{let c=a.value.control;const{type:y,config:d,options:b,control:v}=a.value;switch(y==="button"&&(c=d,s="button"),s){case"treeSelect":c=v.data;break;case"cascader":c=b;break;case"optionsParams":c=d.beforeFetch;break;case"optionsResult":c=d.afterResponse;break}I("openDialog",{content:c,title:e,type:s,direction:"ltr",callback:k=>{switch(s){case"treeSelect":a.value.control.data=k;break;case"cascader":a.value.options=k;break;case"optionsParams":a.value.config.beforeFetch=k;break;case"optionsResult":a.value.config.afterResponse=k;break;case"button":a.value.config=k;break;default:a.value.control={},Object.assign(a.value.control,k)}}})},N=s=>{var e;(e=a.value.formItem)!=null&&e.rules||(a.value.formItem.rules=[]),s?a.value.formItem.rules.push({required:!0,message:"必填项",trigger:"change"}):a.value.formItem.rules.splice(0,1)},G=s=>{var y;const e=(y=a.value.formItem)==null?void 0:y.rules;e||(a.value.formItem.rules=[]),I("openDialog",{content:e||[],title:s,direction:"ltr",callback:d=>{Object.assign(e||[],d)}})},O=(s,e)=>{if(s&&s.length===0||Object.keys(a.value).length===0)return!1;const c=s.indexOf(a.value.type);return e?c!==-1:c===-1},f=s=>{const e={name:"index",type:"index",item:{label:"序号"},control:{},config:{}};s?a.value.list.unshift(e):a.value.list.splice(0,1)},u=ae(()=>{var e,c;const s=(c=(e=a.value)==null?void 0:e.formItem)==null?void 0:c.rules;return s&&s.length>0}),C=()=>{a.value.customRules||(a.value.customRules=[]),a.value.customRules.push({type:"required",message:"必填项",trigger:"blur"})},B=s=>{var e;(e=a.value.customRules)==null||e.splice(s,1)},M=s=>{I("openDialog",{codeType:"css",direction:"ltr",type:"css",title:s})},W=s=>{I("openDialog",{type:"dict",direction:"ltr",codeType:"json",title:s})},L=(s,e)=>{if(m.isSearch)return;const c=s;c&&pe("sourceById",{id:c}).then(y=>{var b;const d=(b=y.data.result)==null?void 0:b.tableData;d&&d.length&&(m.dataSourceList=d.filter(v=>v.enterable)),e&&e(m.dataSourceList)}).catch(y=>{console.log(y)})},x=()=>{m.isSearch||pe("sourceList").then(s=>{A.value=s.data.list})},Q=(s,e)=>{if(s.key==="source"&&(L(s.value),p.setActiveKey(""),p.setControlAttr({})),["formName","source"].includes(s.key)){I("update:formOtherData",Object.assign(T.formOtherData,{[s.key]:s.value}));return}s.path==="config"?g.value[s.key]=s.value||e:n.value[s.key]=s.value},re=s=>{switch(s){case 1:return"数据源接口URL或api的key,可带参数";case 2:return"字典key，默认为字段标识"}return""},be=(s,e)=>{const c=De.filter(y=>y.type===e);c&&c.length&&(s.message=c[0].message)},ie=(s,e)=>{V(s,e)},ce=(s,e)=>{I("openDialog",{type:s,title:e,direction:"ltr"})};return x(),Y({getFormFieldBySource:L}),(s,e)=>{const c=$("el-option"),y=$("el-select"),d=$("el-switch"),b=$("el-input"),v=$("el-form-item"),q=$("el-col"),k=$("el-button"),R=$("QuestionFilled"),j=$("el-icon"),ue=$("el-tooltip"),Oe=$("el-checkbox"),we=$("el-form"),Ve=$("el-tab-pane"),Re=$("el-tabs");return i(),h("div",yl,[t(Re,{modelValue:m.tabsName,"onUpdate:modelValue":e[26]||(e[26]=l=>m.tabsName=l)},{default:o(()=>[t(Ve,{label:"字段配置",name:"first"},{default:o(()=>[t(we,{size:"small",class:"form"},{default:o(()=>[kl,(i(!0),h(P,null,z(Z.value,(l,F)=>(i(),_(v,{key:F,label:l.label},{default:o(()=>[l.type==="select"?(i(),_(y,{key:0,placeholder:l.placeholder,modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,filterable:l.path==="name","allow-create":l.path==="name",clearable:l.clearable,onChange:r=>K(l,r)},{default:o(()=>[(i(!0),h(P,null,z(l.dict,(r,Se)=>(i(),_(c,{key:Se,value:l.path==="name"?r.name:Se,label:l.path==="name"?`${r.label}(${r.name})`:r},null,8,["value","label"]))),128))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue","filterable","allow-create","clearable","onChange"])):l.type==="switch"?(i(),_(d,{key:1,modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,onChange:r=>K(l,r)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(i(),_(b,{key:2,type:l.inputStyle,modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,placeholder:l.placeholder,onInput:r=>K(l,r)},null,8,["type","modelValue","onUpdate:modelValue","placeholder","onInput"]))]),_:2},1032,["label"]))),128)),O(["tabs"],!0)?(i(),h(P,{key:0},[_l,(i(!0),h(P,null,z(a.value.columns,(l,F)=>(i(),_(v,{key:F},{default:o(()=>[t(q,{span:12},{default:o(()=>[t(b,{placeholder:"标签配置项",modelValue:l.label,"onUpdate:modelValue":r=>l.label=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(q,{span:2,offset:1},{default:o(()=>[w("i",{class:"icon-del",onClick:r=>J(F,"tabs")},null,8,wl)]),_:2},1024)]),_:2},1024))),128)),t(v,null,{default:o(()=>[t(k,{onClick:e[0]||(e[0]=l=>D("tabs"))},{default:o(()=>[S("增加标签")]),_:1})]),_:1})],64)):U("",!0),O(["radio","select","checkbox","cascader","inputSlot","treeSelect"],!0)?(i(),h("div",Vl,[Sl,O(["select"],!0)?(i(),_(v,{key:0,label:"添加全部项"},{default:o(()=>[t(b,{placeholder:"请输入全部项文案",modelValue:a.value.config.addAll,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.config.addAll=l)},null,8,["modelValue"])]),_:1})):U("",!0),t(v,{label:"选项数据源"},{default:o(()=>[t(y,{modelValue:a.value.config.optionsType,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value.config.optionsType=l),onChange:e[3]||(e[3]=l=>a.value.config.optionsFun="")},{default:o(()=>[t(c,{value:0,label:"固定选项"}),t(c,{value:1,label:"数据源"}),t(c,{value:2,label:"接口字典"})]),_:1},8,["modelValue"])]),_:1}),a.value.config.optionsType===0?(i(),h(P,{key:1},[a.value.type!=="cascader"?(i(),h("div",Cl,[(i(!0),h(P,null,z(a.value.options,(l,F)=>(i(),_(v,{key:F},{default:o(()=>[t(q,{span:10},{default:o(()=>[t(b,{placeholder:"选项标签",modelValue:l.label,"onUpdate:modelValue":r=>l.label=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(q,{span:10,offset:1},{default:o(()=>[t(b,{placeholder:"选项值",modelValue:l.value,"onUpdate:modelValue":r=>l.value=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(q,{span:2,offset:1},{default:o(()=>[w("i",{class:"icon-del",onClick:r=>J(F)},null,8,Dl)]),_:2},1024)]),_:2},1024))),128))])):U("",!0),t(v,null,{default:o(()=>[t(k,{onClick:D},{default:o(()=>[S(de(a.value.type==="cascader"?"编辑":"新增"),1)]),_:1})]),_:1})],64)):(i(),h(P,{key:2},[t(v,null,{default:o(()=>[t(b,{modelValue:a.value.config.optionsFun,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.config.optionsFun=l),placeholder:re(a.value.config.optionsType)},qe({_:2},[a.value.config.optionsType===1?{name:"prepend",fn:o(()=>[t(y,{modelValue:a.value.config.method,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value.config.method=l),style:{width:"80px"}},{default:o(()=>[t(c,{label:"get",value:"get"}),t(c,{label:"post",value:"post"})]),_:1},8,["modelValue"])]),key:"0"}:void 0]),1032,["modelValue","placeholder"])]),_:1}),a.value.config.optionsType===1?(i(),h(P,{key:0},[t(v,{label:"指定label属性值"},{default:o(()=>[t(b,{modelValue:a.value.config.label,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.config.label=l),placeholder:"返回数据中没有label时可设置"},null,8,["modelValue"])]),_:1}),t(v,{label:"指定value属性值"},{default:o(()=>[t(b,{modelValue:a.value.config.value,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value.config.value=l),placeholder:"返回数据中没有value时可设置"},null,8,["modelValue"])]),_:1})],64)):U("",!0),a.value.config.optionsType===1?(i(),_(v,{key:1},{default:o(()=>[t(k,{onClick:e[8]||(e[8]=l=>ie("optionsParams","请求前处理事件，参数(data,route,form) data请求参数,route页面路由,form表单值"))},{default:o(()=>[S("beforeFetch ")]),_:1}),t(k,{onClick:e[9]||(e[9]=l=>ie("optionsResult","请求返回结束处理；，也可为字符串，如opt=formatTest"))},{default:o(()=>[S("afterResponse ")]),_:1})]),_:1})):U("",!0)],64)),t(v,{label:"尝试转换value值为"},{default:o(()=>[t(y,{modelValue:a.value.config.transformData,"onUpdate:modelValue":e[10]||(e[10]=l=>a.value.config.transformData=l),placeholder:"默认为number"},{default:o(()=>[t(c,{value:"none"},{default:o(()=>[S("不转换")]),_:1}),t(c,{value:"number"},{default:o(()=>[S("number")]),_:1}),t(c,{value:"string"},{default:o(()=>[S("string")]),_:1})]),_:1},8,["modelValue"])]),_:1})])):U("",!0),!m.isSearch&&O(["txt","title","table","grid","tabs","card","switch","gridChild","tableColumn","divider","div","button"])?(i(),h(P,{key:2},[xl,O(["input","password","component"],!0)?(i(),h("div",Ul,[(i(!0),h(P,null,z(a.value.customRules,(l,F)=>(i(),_(v,{key:l.type},{default:o(()=>[t(b,{modelValue:l.message,"onUpdate:modelValue":r=>l.message=r,placeholder:"校验提示信息"},{prepend:o(()=>[t(y,{modelValue:l.type,"onUpdate:modelValue":r=>l.type=r,style:{width:"80px"},onChange:r=>be(l,r)},{default:o(()=>[(i(!0),h(P,null,z(m.customRulesList,r=>(i(),_(c,{key:r.type,label:r.label,value:r.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),append:o(()=>[w("i",{class:"icon-del",onClick:r=>B(F)},null,8,Tl)]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.type==="rules"?(i(),_(b,{key:0,placeholder:"正则表达式",modelValue:l.rules,"onUpdate:modelValue":r=>l.rules=r},null,8,["modelValue","onUpdate:modelValue"])):U("",!0),l.type==="methods"?(i(),_(b,{key:1,placeholder:"方法名称，此方法仅适用于导出vue文件",modelValue:l.methods,"onUpdate:modelValue":r=>l.methods=r},null,8,["modelValue","onUpdate:modelValue"])):U("",!0)]),_:2},1024))),128)),t(v,null,{default:o(()=>[t(k,{onClick:C},{default:o(()=>[S("快速添加")]),_:1}),t(k,{onClick:e[11]||(e[11]=l=>G(m.tooltip.rules))},{default:o(()=>[S("编写校验规则 "),t(ue,{content:m.tooltip.rules,placement:"top","raw-content":""},{default:o(()=>[t(j,null,{default:o(()=>[t(R)]),_:1})]),_:1},8,["content"])]),_:1})]),_:1})])):(i(),_(v,{key:1},{default:o(()=>{var l,F;return[t(Oe,{modelValue:u.value,onChange:N},{default:o(()=>[S("必填 ")]),_:1},8,["modelValue"]),(l=a.value.item)!=null&&l.rules&&((F=a.value.item)!=null&&F.rules[0])?(i(),_(b,{key:0,placeholder:"自定义必填错误提示",modelValue:a.value.item.rules[0].message,"onUpdate:modelValue":e[12]||(e[12]=r=>a.value.item.rules[0].message=r)},null,8,["modelValue"])):U("",!0)]}),_:1}))],64)):U("",!0),O(["grid","card","gridChild","divider","div"])?(i(),h("div",Nl,[$l,t(k,{size:"small",onClick:e[13]||(e[13]=l=>V("",m.tooltip.props))},{default:o(()=>[S("编辑属性 "),t(ue,{content:m.tooltip.props,placement:"top"},{default:o(()=>[t(j,null,{default:o(()=>[t(R)]),_:1})]),_:1},8,["content"])]),_:1})])):U("",!0)]),_:1})]),_:1}),t(Ve,{label:"表单配置",name:"second"},{default:o(()=>[t(we,{size:"small",class:"form"},{default:o(()=>[(i(!0),h(P,null,z(E.value.filter(l=>!l.hide),(l,F)=>(i(),_(v,{label:l.label,key:F},{default:o(()=>[l.type==="select"?(i(),_(y,{key:0,modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,filterable:l.key==="class","allow-create":l.key==="class",placeholder:l.placeholder,clearable:l.clearable,onChange:r=>Q(l)},{default:o(()=>[(i(!0),h(P,null,z(l.options,r=>(i(),_(c,{label:r.label||r.name,key:r.label||r.name,value:H(ge)(r.value??r.id)},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","filterable","allow-create","placeholder","clearable","onChange"])):l.type==="switch"?(i(),_(d,{key:1,modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,onInput:r=>Q(l,r)},null,8,["modelValue","onUpdate:modelValue","onInput"])):(i(),_(b,{key:2,modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,placeholder:l.placeholder,onInput:r=>Q(l)},null,8,["modelValue","onUpdate:modelValue","placeholder","onInput"]))]),_:2},1032,["label"]))),128)),m.isSearch?U("",!0):(i(),_(v,{key:0},{label:o(()=>[S("添加时获取请求 "),t(ue,{content:"新增表单数据时，从接口获取新增初始数据",placement:"top"},{default:o(()=>[t(j,null,{default:o(()=>[t(R)]),_:1})]),_:1})]),default:o(()=>[t(d,{modelValue:H(g).addLoad,"onUpdate:modelValue":e[14]||(e[14]=l=>H(g).addLoad=l),onChange:e[15]||(e[15]=l=>Q({key:"addLoad",path:"config"},l))},null,8,["modelValue"])]),_:1})),t(v,null,{default:o(()=>[t(k,{onClick:e[16]||(e[16]=l=>M(m.tooltip.css))},{default:o(()=>[S("编辑表单样式 "),t(ue,{content:m.tooltip.css,placement:"top"},{default:o(()=>[t(j,null,{default:o(()=>[t(R)]),_:1})]),_:1},8,["content"])]),_:1}),t(k,{onClick:e[17]||(e[17]=l=>W(m.tooltip.dict))},{default:o(()=>[S("设置数据字典 "),t(ue,{content:m.tooltip.dict,placement:"top"},{default:o(()=>[t(j,null,{default:o(()=>[t(R)]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),m.isSearch?U("",!0):(i(),h(P,{key:1},[Il,t(v,{label:"新增数据保存url"},{default:o(()=>[t(b,{placeholder:"表单提交的url，通用提交时可不设置",modelValue:H(g).submitUrl,"onUpdate:modelValue":e[18]||(e[18]=l=>H(g).submitUrl=l)},null,8,["modelValue"])]),_:1}),t(v,{label:"修改数据保存url"},{default:o(()=>[t(b,{placeholder:"修改提交的url，通用提交时可不设置",modelValue:H(g).editUrl,"onUpdate:modelValue":e[19]||(e[19]=l=>H(g).editUrl=l)},null,8,["modelValue"])]),_:1}),t(v,{label:"获取表单数据url"},{default:o(()=>[t(b,{placeholder:"获取表单数据url，通用提交时可不设置",modelValue:H(g).requestUrl,"onUpdate:modelValue":e[20]||(e[20]=l=>H(g).requestUrl=l)},null,8,["modelValue"])]),_:1}),t(v,{class:"event-btn"},{default:o(()=>[t(k,{onClick:e[21]||(e[21]=l=>ce("beforeFetch","获取表单初始数据前事件，可修改请求参数"))},{default:o(()=>[S("beforeFetch ")]),_:1}),t(k,{onClick:e[22]||(e[22]=l=>ce("afterResponse","获取表单初始数据后事件，可对请求返回数据进行处理；也可为字符串，如opt=formatTest"))},{default:o(()=>[S("afterResponse ")]),_:1}),t(k,{onClick:e[23]||(e[23]=l=>ce("beforeSubmit","表单数据提交前事件，可对提交数据进行处理；也可为字符串，如opt=formatTest"))},{default:o(()=>[S("beforeSubmit ")]),_:1}),t(k,{onClick:e[24]||(e[24]=l=>ce("afterSubmit","表单数据提交成功事件"))},{default:o(()=>[S("afterSubmit ")]),_:1}),t(k,{onClick:e[25]||(e[25]=l=>ce("change","表单组件值改变事件。当表单某值改变时，可修改其他组件的值；也可为字符串，如opt=formChange,字符串即为/utils/formChangeValue(name,model,key)中的key值"))},{default:o(()=>[S("表单组件改变事件change ")]),_:1})]),_:1})],64))]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),Ol={class:"design-container"},Rl={class:"main-body"},Al={class:"main-form"},El={key:0,class:"empty-tips"},Fl={class:"dialog-footer"},Bl=he({__name:"index",setup(ne){ze().changeBreadcrumb([{label:"系统工具"},{label:"表单设计"}]);const I=Pe(),T=je(),g=He().query||{},n=ve({formData:{list:[],form:{size:"default"},config:{}},editor:{},loading:!1,formDataPreview:{},previewVisible:!1,designType:g.type,formDict:{},formOtherData:{source:g.source||"",formName:"未命名表单"}}),p=ve({visible:!1,type:"",title:"",codeType:"",direction:void 0,callback:""}),a=oe(),A=oe();Ke("formDesignType",n.designType);const E=()=>{const f=g.id;f&&(n.loading=!0,pe("designById",{id:f}).then(u=>{const C=u.data;C.data&&(n.formData=X(C.data)),n.formDict=ye(C.dict),n.formOtherData.source=C.source,n.formOtherData.formName=C.name,C.source&&n.designType!=="search"&&A.value.getFormFieldBySource(C.source),n.loading=!1}).catch(u=>{ee.error(u.message||"加载异常"),n.loading=!1}))},Z=f=>{switch(f){case"del":n.formData={list:[],form:{size:"default"},config:{}},I.setActiveKey(""),I.setControlAttr({});break;case"eye":I.setActiveKey(""),I.setControlAttr({}),n.previewVisible=!0;let u=te(n.formData);const C=n.formData.form.name,B=new RegExp(`get${C}ControlByName`,"g");u=u.replace(B,`getPreview${C}ControlByName`),n.formDataPreview=X(u),n.formDataPreview.form.name=`Preview${C}`;break;case"json":K({direction:"rtl",content:n.formData,title:"可编辑修改或将已生成的脚本粘贴进来"});break;case"save":m();break;case"vue":a.value.open(n.formData);break}},le=f=>{try{if(typeof p.callback=="function"){const u=p.codeType==="json"?ye(f):X(f);p.callback(u)}else switch(p.type){case"css":n.formData.config||(n.formData.config={}),n.formData.config.style=f;break;case"dict":n.formDict=ye(f);break;case"beforeFetch":case"beforeSubmit":case"afterResponse":case"afterSubmit":case"change":n.formData.events||(n.formData.events={}),n.formData.events[p.type]=X(f);break;default:n.formData=X(f)}J()}catch{}},m=()=>{const{submitUrl:f,editUrl:u,requestUrl:C}=n.formData.config;if(!n.formOtherData.source&&(!f||!u||!C)&&n.designType!=="search"){ee.error("请选择数据源或配置接口url地址，否则表单无法提交保存");return}let B={data:te(n.formData),source:n.formOtherData.source,name:n.formOtherData.formName,type:1,dict:me(n.formDict)},M="designSave";g.id&&(Object.assign(B,{id:g.id}),M="designEdit"),n.designType==="search"&&(B={data:te(n.formData),dict:me(n.formDict),id:g.id}),n.loading=!0,pe(M,B).then(W=>{ee({message:W.message||"保存成功！",type:"success"});const L=g.redirect||"/design/form/list",x={};g.redirect&&g.redirect.indexOf("?")!==-1&&g.redirect.split("?")[1].split("&").forEach(be=>{const ie=be.split("=");x[ie[0]]=ie[1]}),T.push({path:L,query:x}),n.loading=!1}).catch(W=>{ee.error(W.message||"保存异常"),n.loading=!1}),I.setActiveKey(""),I.setControlAttr({})},K=f=>{var Q;const{type:u,direction:C,codeType:B,title:M,callback:W,content:L}=f;p.direction=C,p.type=u,p.codeType=B||"",p.title=M?`提示：${M}`:"",p.visible=!0,p.callback=W;let x=B==="json"?me(L,!0):te(L,!0);switch(u){case"css":x=((Q=n.formData.config)==null?void 0:Q.style)||"";break;case"dict":x=me(n.formDict,!0);break;case"beforeFetch":case"beforeSubmit":case"afterResponse":case"afterSubmit":case"change":const re=n.formData.events||{};re[u]?x=te(re[u],!0):["afterResponse","afterSubmit"].includes(u)?x=xe:u==="change"?x=Qe:x=Ue;break;case"optionsParams":L||(x=Ue);break;case"optionsResult":L||(x=xe);break}p.content=x},se=()=>{J()},J=()=>{p.visible=!1,p.type="",p.title="",p.codeType="",p.callback="",p.content=""},D=oe(),V=()=>{D.value.validate((f,u)=>{if(f)ee.success("校验通过"),console.log(u);else return ee.error("校验不通过"),!1})},N=f=>{n.formData=X(te(f))},G=f=>{n.formData.list.push(f)};E();const O=f=>{const u=[];f.forEach(C=>{u.push({type:"input",control:{modelValue:""},config:{},name:`${C.name}`,formItem:{label:`${C.label}`}})}),n.formData.list=u};return Me(()=>{g.source&&A.value.getFormFieldBySource(g.source,O)}),(f,u)=>{var L;const C=$("ak-form"),B=$("el-button"),M=$("el-dialog"),W=We("loading");return i(),h("div",Ol,[t(gl,{"form-id":n.formOtherData.source,onClickCheck:G,onClick:N},null,8,["form-id"]),w("div",Rl,[t(Ae,{onClick:Z}),Ge((i(),h("div",Al,[((L=n.formData.list)==null?void 0:L.length)===0?(i(),h("div",El," 从左侧拖拽来添加字段 ")):U("",!0),t(C,{type:5,data:n.formData,dict:n.formDict},null,8,["data","dict"])])),[[W,n.loading]])]),t(Pl,{ref_key:"formControlAttrEl",ref:A,"form-data":n.formData.form,"form-config":n.formData.config,"form-other-data":n.formOtherData,"onUpdate:formOtherData":u[0]||(u[0]=x=>n.formOtherData=x),onOpenDialog:K},null,8,["form-data","form-config","form-other-data"]),t(Ye,{modelValue:p.visible,"onUpdate:modelValue":u[1]||(u[1]=x=>p.visible=x),title:p.title,direction:p.direction,content:p.content,"code-type":p.codeType,onBeforeClose:se,onConfirm:le},null,8,["modelValue","title","direction","content","code-type"]),["search"].includes(n.designType)?U("",!0):(i(),_(Ee,{key:0,ref_key:"vueFileEl",ref:a},null,512)),t(M,{modelValue:n.previewVisible,"onUpdate:modelValue":u[3]||(u[3]=x=>n.previewVisible=x),title:"预览",fullscreen:!0},{footer:o(()=>[w("div",Fl,[t(B,{size:"small",type:"primary",onClick:V},{default:o(()=>[S(" 提交 ")]),_:1}),t(B,{size:"small",onClick:u[2]||(u[2]=x=>n.previewVisible=!1)},{default:o(()=>[S(" 取消 ")]),_:1})])]),default:o(()=>[n.previewVisible?(i(),_(C,{key:0,data:n.formDataPreview,dict:n.formDict,ref_key:"previewForm",ref:D},null,8,["data","dict"])):U("",!0)]),_:1},8,["modelValue"])])}}});typeof Te=="function"&&Te(Bl);export{Bl as default};
