import{d as j,i as k,B as y,m as p,J as O,L as V,j as R,o as n,c as M,a as v,e as C,q as N,w as S,g as G,M as h,k as _,N as c,O as b,x as u,h as f,G as J}from"./index.4bea5897.js";const A=j({__name:"content",setup(W){const m=J(),i=k(),a=y({searchData:[],tableData:[],dict:{},visible:!0,source:""}),D=p(()=>m.query.id),g=()=>{if(!D.value)return h.error("\u975E\u6CD5\u64CD\u4F5C..."),!1;const e={id:D.value};_("designById",e).then(s=>{const o=s.data;o&&Object.keys(o).length&&(a.searchData=c(o.data),a.tableData=c(o.listData),a.dict=b(o.dict),a.source=o.source,u(()=>{i.value.getListData()}),B())})};O(()=>{I()});const I=V(()=>m.query.id,()=>{g()},{}),r=k(),t=y({visible:!1,title:"",formType:1,formData:{},width:"",dict:{},editId:""}),l=p(()=>{var e;return a.source&&((e=a.tableData.config)==null?void 0:e.openType)==="dialog"}),B=()=>{var e;l.value&&(t.width=(e=a.tableData.config)==null?void 0:e.dialogWidth,_("designById",{id:a.source}).then(s=>{const o=s.data;o&&Object.keys(o).length&&(t.formData=c(o.data),t.dict=b(o.dict))}).catch(s=>{h.error(s.message||"\u975E\u6CD5\u64CD\u4F5C.")}))},E=(e,s)=>{var o;(e.key==="add"||e.key==="edit")&&l.value&&(t.visible=!0,t.title=e.key==="add"?"\u65B0\u589E":"\u7F16\u8F91",t.formType=e.key==="add"?1:2,t.editId=s&&s.id,e.key==="add"&&((o=t.formData.config)==null?void 0:o.addLoad)&&u(()=>{r.value.getData({formId:a.source})}),e.key==="edit"&&u(()=>{r.value.getData({formId:a.source,id:s.id})}))},F=e=>(e.formId=a.source,e.id=t.editId,e),L=e=>{e==="success"&&(d(),i.value.getListData())},w=e=>{(e==="reset"||e==="cancel")&&d()},q=e=>{d(),e&&e()},d=()=>{t.visible=!1,t.editId=""};return R(()=>{g()}),(e,s)=>{const o=f("ak-list"),x=f("ak-form"),T=f("el-dialog");return n(),M("div",null,[a.visible?(n(),v(o,{key:0,ref_key:"listEl",ref:i,searchData:a.searchData,tableData:a.tableData,dict:a.dict,formId:a.source,requestUrl:"getContentList",deleteUrl:"delFormContent",autoLoad:!1,onBtnClick:E},null,8,["searchData","tableData","dict","formId"])):C("",!0),N(l)?(n(),v(T,{key:1,"destroy-on-close":"",modelValue:t.visible,"onUpdate:modelValue":s[0]||(s[0]=U=>t.visible=U),title:t.title,width:t.width||"600px","before-close":q},{default:S(()=>[G(x,{ref_key:"formEl",ref:r,formData:t.formData,dict:t.dict,type:t.formType,requestUrl:"getFormContent",addUrl:"saveFormContent",editUrl:"editFormContent",beforeSubmit:F,afterSubmit:L,onBtnClick:w},null,8,["formData","dict","type"])]),_:1},8,["modelValue","title","width"])):C("",!0)])}}});export{A as default};
