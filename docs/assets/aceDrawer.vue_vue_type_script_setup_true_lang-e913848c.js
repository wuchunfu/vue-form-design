import{d as y,r as s,H as C,b,a5 as k,o as r,f as w,w as d,l as c,c as h,j as B,m as T,y as g,q as u,C as x,a6 as N}from"./index-8ad7f075.js";const E=["innerHTML"],H=["id"],M={class:"dialog-footer"},z=y({__name:"aceDrawer",props:{modelValue:{type:Boolean},title:null,direction:{default:"ltr"},content:{default:""},id:{default:"editJson"},codeType:null},emits:["beforeClose","confirm","update:modelValue"],setup(e,{emit:n}){const a=e,t=s({}),l=s(!1);C(()=>a.modelValue,o=>{l.value=o,o&&m()});const m=()=>{x(()=>{t.value=N(a.content,a.id,a.codeType)})},f=()=>{const o=t.value.getValue();n("confirm",o)},p=()=>{n("update:modelValue",!1),n("beforeClose")};return b(()=>{}),k(()=>{Object.keys(t.value).length!==0&&(t.value.destroy(),t.value.container.remove())}),(o,i)=>{const v=u("el-button"),V=u("el-drawer");return r(),w(V,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=_=>l.value=_),size:"60%",title:e.title,direction:e.direction,class:"ace-dialog","append-to-body":!0,"before-close":p},{header:d(()=>[c("div",{innerHTML:e.title},null,8,E)]),default:d(()=>[l.value?(r(),h("div",{key:0,id:e.id},null,8,H)):B("",!0),c("div",M,[T(v,{type:"primary",size:"small",onClick:f},{default:d(()=>[g(" 确定 ")]),_:1})])]),_:1},8,["modelValue","title","direction"])}}});export{z as _};
