import{d as i,u as l,r as n,s as u,A as d,x as D,n as g,o as f,c as b,b as h,B as _,j as m,y as s,O as B,E as p}from"./index.c5c10742.js";const j=i({__name:"list",setup(v){l().changeBreadcrumb([{label:"\u5185\u5BB9\u7BA1\u7406"},{label:"\u5217\u8868"}]);const c=n(!1),o=u(),a=d({tid:o.query.tid,loading:!1,searchData:{},tableData:{},dict:{}});return(()=>{a.tid&&(a.loading=!0,m("getFormById",{id:a.tid}).then(e=>{const t=e.data.data;t&&(t.searchData&&(a.searchData=s(t.searchData)),t.tableData&&(a.tableData=s(t.tableData)),a.dict=B(t.dict))}).catch(e=>{p.error(e.data||"\u8BF7\u6C42\u5F02\u5E38")}))})(),(e,t)=>{const r=D("loading");return g((f(),b("div",null,[h(_,{searchData:a.searchData,tableData:a.tableData,dict:a.dict},null,8,["searchData","tableData","dict"])])),[[r,c.value]])}}});export{j as default};
