import{d as l,u as i,r as n,s as u,A as d,x as D,n as f,o as g,c as b,b as h,B as _,j as m,y as s,E as B}from"./index.ca33bca9.js";const E=l({__name:"list",setup(p){i().changeBreadcrumb([{label:"\u5185\u5BB9\u7BA1\u7406"},{label:"\u5217\u8868"}]);const o=n(!1),r=u(),a=d({tid:r.query.tid,loading:!1,searchData:{},tableData:{}});return(()=>{a.tid&&(a.loading=!0,m("getFormById",{id:a.tid}).then(e=>{const t=e.data.data;t&&(t.searchData&&(a.searchData=s(t.searchData)),t.tableData&&(a.tableData=s(t.tableData)))}).catch(e=>{B.error(e.data||"\u8BF7\u6C42\u5F02\u5E38")}))})(),(e,t)=>{const c=D("loading");return f((g(),b("div",null,[h(_,{searchData:a.searchData,tableData:a.tableData},null,8,["searchData","tableData"])])),[[c,o.value]])}}});export{E as default};