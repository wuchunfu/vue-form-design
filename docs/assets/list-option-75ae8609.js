/* empty css                                                            */import{o as d,c as i,af as g,h as j,p as f,r as b,g as c,i as r,C as y}from"./index-3a3de0b7.js";const _={class:"marked-body"},k=g(`<h1 id="ak-list-配置手册">ak-list 配置手册</h1><p>配置数据由列表设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离列表设计器时可按此数据格式要求，直接使用<code>ak-list</code>列表，即<code>ak-list</code>列表组件可不依懒于列表设计器工作</p><h2 id="columns">columns</h2><p><code>table-column</code>所有参数。</p><h3 id="label">label</h3><p>列头名称</p><h3 id="prop">prop</h3><p>字段名称对应列内容的字段名。</p><p>其中，约定操作栏<code>prop=&quot;__control&quot;</code>以展示操作相关内置按钮及功能</p><p>prop值</p><h3 id="help">help</h3><p>问题帮助提示信息</p><h3 id="config">config</h3><h4 id="formatter">formatter</h4><p>预设的个性化快速设置，可对列进行时间格式化。常见格式如<code>{y}-{m}-{d} {h}:{i}:{s}</code>、<code>{y}-{m}-{d}</code> 。更多使用方式可查看<code>@/utils/index</code>中的<code>dateFormatting</code>格式化方法</p><h4 id="dictkey">dictKey</h4><p>string</p><p>预设快速设置功能：可匹配字典输出对应值，如列表返回的值为0,1这种格式。即可根据字典输出男或女</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> dict = {<span class="hljs-attr">sex</span>: {<span class="hljs-number">0</span>: <span class="hljs-string">&#39;男&#39;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&#39;女&#39;</span>}, ...}
</code></pre><h4 id="taglist">tagList</h4><p>预设快速设置功能：可对展示数据使用<code>tag</code>的形式展示，如列表数据返回0或1格式，或者是成功失败这类标识，可使用<code>tag</code>组件区分</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> tagList = {<span class="hljs-number">1</span>: <span class="hljs-string">&#39;success&#39;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&#39;info&#39;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&#39;warning&#39;</span>, <span class="hljs-number">4</span>: <span class="hljs-string">&#39;danger&#39;</span>}</code></pre><h3 id="imgwidth">imgWidth</h3><p>设置此值时列表将以图片的形式展示</p><h2 id="config-1">config</h2><h3 id="opentype">openType</h3><p>string</p><p>点击列表页新增或编辑时的找开方法，可选<code>dialog</code>和新页面打开(默认)<code>page</code></p><p>注意：此参数作用于通用数据列表页，不是<code>ak-list</code>组件本身的属性。当导出vue文件形式使用时，可在当前页面集成编辑功能，然后根据此参数展示编辑弹窗</p><h3 id="dialogwidth">dialogWidth</h3><p>string</p><p>打开新增或编辑时弹窗的宽度，<code>openType=&#39;dialog&#39;</code>时有效</p><h3 id="fixedbottomscroll">fixedBottomScroll</h3><p>boolean</p><p>列表横向滚动条是否固定在底部，即当列表列数比较多出现横向滚动条时，滚动条会固定在浏览底部</p><h3 id="columnssetting">columnsSetting</h3><p>boolean</p><p>是否展示列表列字段设置，可根据使用习惯显示所设置的表头列。</p><p>选择改变时，根据<code>url</code>为标识保存在<code>local Storage</code>。可根据实际情况保持于服务端。</p><p>注意：使用该功能时，需确保表头数据存在<code>prop</code>唯一值</p><h3 id="expand">expand</h3><p>boolean</p><p>列表上方搜索查询条件是否可折叠</p><h3 id="searchjump">searchJump</h3><p>boolean</p><p>列表条件搜索查询时，是否通过url跳转形式</p><h3 id="operatedropdown">operateDropdown</h3><p>number</p><p>表格列表右侧操作栏按钮过多时是否以下拉形式展示，大于设定个数的以下拉形式显示</p><h3 id="deleteurl">deleteUrl</h3><p>string</p><p>列表数据删除接口url</p><h3 id="delkey">delKey</h3><p>string 删除时的标识，默认为<code>id</code>。将根据配置的标识从数据列表中提取所需删除的数据提交删除接口</p><h2 id="treedata">treeData</h2><p>列表侧栏树配置相关，树所需的数据通过配置<code>requestUrl</code>单独从接口获取</p><h3 id="show">show</h3><p>boolean</p><p>是否显示侧栏搜索树组件</p><h3 id="treeprops">treeProps</h3><p>object</p><p>绑定在侧栏<code>tree</code>组件的参数，具体参数见ui</p><h3 id="name">name</h3><p>string</p><p>侧栏树的标识名称</p><h3 id="method">method</h3><p>string</p><p>接口数据请求方法，<code>get</code>和<code>post</code>两种</p><h3 id="requesturl">requestUrl</h3><p>string</p><p>接口数据请求url</p><h2 id="tableprops">tableProps</h2><p>object</p><p>绑定在<code>table</code>组件的<code>props</code>参数，具体参数见ui</p><h2 id="controlbtn">controlBtn</h2><p>列表左上方控制按钮，如新增、批量删除等，支持<code>button</code> ui的所有参数。</p><p>约定<code>key=&quot;add&quot;</code>、<code>key=&quot;del&quot;</code>、<code>key=&quot;import&quot;</code>为组件内置特殊值，根据配置的信息执行添加或删除等操作。<code>add、import</code>不适用于导出vue形式</p><h2 id="operatebtn">operateBtn</h2><p>类似于<code>controlBtn</code>，两个是一样的，只是显示位置不一样</p><p>约定<code>key=&quot;edit&quot;</code>和<code>key=&quot;del&quot;</code>。其中当为<code>del</code>可支持<code>tip</code>指定点击删除后的删除警告提示信息。<code>edit</code>不适用于导出vue形式</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> operateBtn = {
  <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;del&#39;</span>,
  <span class="hljs-attr">tip</span>: <span class="hljs-string">&#39;确定删除吗&#39;</span>,
  <span class="hljs-attr">visible</span>: <span class="hljs-string">&#39;$.status====1&#39;</span>, <span class="hljs-comment">// 根据条件是否显示当前行按钮，即行数据status=1时可显示查看</span>
  <span class="hljs-attr">click</span>: <span class="hljs-function">(<span class="hljs-params">row</span>) =&gt;</span> {
    <span class="hljs-comment">// 点击事件，row为当前行数据</span>
  },
  <span class="hljs-attr">permission</span>: <span class="hljs-string">&#39;权限标识&#39;</span>　<span class="hljs-comment">//　可通过在菜单中添加btn类型权限</span>
  <span class="hljs-comment">// 其他button所有props</span>
}</code></pre><h3 id="visible">visible</h3><p>表格列表操作按钮是否显示逻辑判断，适用于根据当前行数据状态判断是否展示该按钮。如当前设置为禁用时不显示编辑操作按钮。支持运算表达式，其中<code>$</code> 为当前行数据</p><pre class="language-javascript"><code class="hljs">{
  <span class="hljs-attr">visible</span>:<span class="hljs-string">&#39;$.status===1&#39;</span>
}</code></pre><h3 id="permission">permission</h3><p>string</p><p>权限标识，将根据接口菜单中的权限标识判断是否展示，可为菜单和按钮类型权限</p><h2 id="event">event</h2><h2 id="beforerequest">beforeRequest</h2><p>function(params, route)</p><p>获取数据发送接口请求前方法，可用于对请求的数据进行处理转换等操作，以提交符合接口的数据要求</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRequest</span> = (<span class="hljs-params">params, route</span>) =&gt; {
  <span class="hljs-comment">// 此处可对请求参数params进行修改处理后返回，route为当前路由信息</span>
  <span class="hljs-comment">// 如当路由参数name为true时，添加id参数</span>
  <span class="hljs-keyword">if</span> (route.<span class="hljs-property">query</span>.<span class="hljs-property">name</span>) {
    params.<span class="hljs-property">id</span> = route.<span class="hljs-property">query</span>.<span class="hljs-property">name</span>
  }
  <span class="hljs-keyword">return</span> params　<span class="hljs-comment">//　return false时将发不请求</span>
}</code></pre><h3 id="afterresponse">afterResponse</h3><p>function(result)|string</p><p>获取数据接口请求数据返回后方法，可用于对请求回来的数据进行处理转换等操作，以满足使用。</p><p>如果将表单生成数据保存于服务端时，当需要处理的数据比较复杂时，可使用字符串。如<code>afterResponse=&quot;afterResponse&quot;</code> 。此时可在<code>@/utils/formatResult.ts</code>中的<code>formatResult</code>方法进行处理。</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">afterResponse</span> = (<span class="hljs-params">result</span>) =&gt; {
  <span class="hljs-comment">//　这里是处理逻辑</span>
  <span class="hljs-keyword">return</span> result <span class="hljs-comment">// return false时不处理请求结果</span>
}</code></pre><h3 id="beforedelete">beforeDelete</h3><p>数据列表删除记录请求前方法，可对请求参数进行处理</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeDelete</span> = (<span class="hljs-params">params, route</span>) =&gt; {
  <span class="hljs-comment">// 此处可对请求参数params进行修改处理后返回，route为当前路由信息</span>
  <span class="hljs-keyword">return</span> params　<span class="hljs-comment">//　return false时将阻止发送请求</span>
}</code></pre>`,100),q=[k],v={__name:"listOption",setup(h){return(n,l)=>(d(),i("div",_,q))}};const w={class:"config-option"},R={class:"config-sidebar"},x={class:"config-content"},S={__name:"list-option",setup(h){const n={children:"children",label:"label"},l=s=>{const a=s.label.replace(/:\s.*$/,"").replace(/\[|\]/g,"");if(a){const e=a.toLowerCase().trim(),p=document.getElementById(e),o=document.querySelectorAll(`.${e}`).length;p&&o===1&&p.scrollIntoView({behavior:"smooth",block:"start"})}},u=j(()=>t(m)),m={columns:[{label:"多选",type:"selection"},{label:"序号",type:"index",width:"70px"},{label:"标题",prop:"title",help:""},{label:"图片",prop:"img",help:"",config:{imgWidth:80}},{prop:"date",label:"时间",config:{formatter:"{y}-{m}-{d}"}},{prop:"status",label:"状态",help:"",config:{dictKey:"sys-status",tagList:{1:"success"}}},{label:"操作",prop:"__control"}],config:{openType:"dialog",dialogWidth:"600",fixedBottomScroll:!0,columnsSetting:!0,expand:!0,searchJump:!0,operateDropdown:!0,requestUrl:"/get",deleteUrl:"/del",delKey:"id",imgWidth:80},treeData:{show:!0,treeProps:{},name:"唯一标识",method:"post",requestUrl:"",beforeRequest:(s,a)=>(console.log("beforeRequest",s),s),afterResponse:s=>(console.log("afterResponse",s),s)},tableProps:{},controlBtn:[{label:"新增",key:"add",type:"primary",size:"small",icon:"plus",permission:"权限标识",click:s=>{}}],operateBtn:[{label:"编辑",key:"edit",visible:"$.status===1",permission:"权限标识",click:s=>{}}],events:{beforeRequest:(s,a)=>(console.log("beforeRequest",s),s),afterResponse:s=>(console.log("afterResponse",s),s),beforeDelete:(s,a)=>(console.log("beforeRequest",s),s)}},t=(s,a=[])=>{for(const e in s){const p=Object.prototype.toString.call(s[e]);if(p==="[object Object]")a.push({label:`${e} : {...},`,children:t(s[e])});else if(p==="[object Array]"){const o=s[e].length===1?s[e][0]:s[e];a.push({label:`${e} : [{...}],`,children:t(o)})}else{let o=s[e];typeof o=="function"&&(o="..."),a.push({label:`${e} : "${o}",`})}}return a};return f(()=>{setTimeout(()=>{document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(a=>{const e=a.id.split("-")[0];e&&(a.className=e)})},500)}),(s,a)=>{const e=b("el-tree");return d(),i("div",w,[c("div",R,[r(e,{data:u.value,props:n,onNodeClick:l},null,8,["data"])]),c("div",x,[r(y(v))])])}}};export{S as default};
