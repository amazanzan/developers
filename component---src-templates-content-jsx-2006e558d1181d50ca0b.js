(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2],{736:function(e,t,n){"use strict";n.r(t);var a=n(134),i=n.n(a),o=n(2),r=n.n(o),c=n(741),s=n.n(c),l=n(738),d=n(827),p=n.n(d),m=(n(749),n(34),n(745)),h=n(746),g=n(747),u=n(791),x=n(742),f=n.n(x),y=n(792),b=n(793),w=n(794),E=n(750),v=n(795),I=n(768),C=e=>r.a.createElement("div",null,r.a.createElement(M,{to:e.url},r.a.createElement(N,null,e.prefix),r.a.createElement(k,null,e.title)));const N=l.c.span.withConfig({displayName:"PageLink__Prefix",componentId:"sc-1qj7yaw-0"})(["display:inline-block;font-size:0.9em;margin-right:5px;text-transform:uppercase;"]),k=l.c.span.withConfig({displayName:"PageLink__Title",componentId:"sc-1qj7yaw-1"})(["display:inline-block;font-size:1.1em;font-weight:800;"]),M=l.c.a.withConfig({displayName:"PageLink__Link",componentId:"sc-1qj7yaw-2"})(["background:#5c50ca;border:2px solid #5c50ca;border-radius:4px;color:#fff;display:block;font-weight:400;margin:20px auto 40px;max-width:95ch;padding:10px;text-align:center;text-decoration:none;width:100%"]);var j=n(796),T=n(739);n.d(t,"query",function(){return A});const L=l.c.div.withConfig({displayName:"content__BodyGrid",componentId:"sc-1a6jhyf-0"})(["height:100vh;display:grid;grid-template-rows:60px 1fr;",""],Object(T.g)("\n    display: flex;\n    flex-direction: column;\n    height: inherit;\n  ")),S=l.c.div.withConfig({displayName:"content__BodyContainer",componentId:"sc-1a6jhyf-1"})(["overflow:auto;justify-self:center;padding:",";padding-left:0;padding-right:0;width:100%;& > h1{color:",";}h2{margin-top:60px;}code{}"],e=>e.theme.sitePadding,e=>e.theme.accentDark),D=l.c.div.withConfig({displayName:"content__HeaderContainer",componentId:"sc-1a6jhyf-2"})(["background:",";width:100vw;.Grid{width:90vw;margin:0 auto;}"],e=>e.theme.brand),_=l.c.div.withConfig({displayName:"content__ToCContainer",componentId:"sc-1a6jhyf-3"})(["grid-area:1 / 1 / 2 / 4;",""],Object(T.g)("display: none;")),A="403043655";t.default=class extends r.a.Component{constructor(...e){super(...e),i()(this,"getContentWindow",()=>this.contentWindow)}render(){const{category:e,next:t,slug:n}=this.props.pageContext,a=this.props.data.allMarkdownRemark.edges,i=new p.a({createElement:r.a.createElement,components:{h2:b.a,ul:E.a,ol:w.a}}).Compiler,o=this.props.data.postBySlug,c=o.frontmatter,l=c.type,d=[];return a.forEach(e=>{d.push(e)}),c.id||(c.id=n),c.id||(c.category_id=f.a.postDefaultCategoryID),r.a.createElement(m.a,{location:this.props.location},r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,`${c.title} | ${f.a.siteTitle}`)),r.a.createElement(h.a,{postPath:n,postNode:o,postSEO:!0}),r.a.createElement(L,null,r.a.createElement(D,null,r.a.createElement(g.a,{activeType:l,location:this.props.location,types:this.props.data.navTypes})),r.a.createElement(S,{ref:e=>this.contentWindow=e},r.a.createElement(T.b,null,r.a.createElement(T.c,null,r.a.createElement(_,null,r.a.createElement(y.a,{types:d,post:c,headings:Object(j.a)(o.htmlAst),getContentWindow:this.getContentWindow})),r.a.createElement(T.d,{span:1}),r.a.createElement(T.a,{span:7},r.a.createElement(I.a,{data:this.props.data}),r.a.createElement(v.a,{to:`${c.source}`},"Edit"),r.a.createElement(T.c,{style:{width:"100%"}},r.a.createElement(T.a,{span:12,style:{width:"100%"}},r.a.createElement("div",{className:"docSearch-content"},i(o.htmlAst))))),r.a.createElement(T.d,{span:4}),r.a.createElement(T.a,{span:8},r.a.createElement(u.a,null),t?r.a.createElement(C,{prefix:"Next:",url:t.url,title:t.title}):null)))))))}}},745:function(e,t,n){"use strict";var a=n(134),i=n.n(a),o=n(2),r=n.n(o),c=n(194),s=n(741),l=n.n(s),d=n(738),p=n(742),m=n.n(p);n(763),n(764),n(765),n(754),n(766);var h={brand:"#5c50ca",secondaryBrand:"#827cff",brandHighlight:"#7958d8",tocAccent:"rgba(230, 224, 248)",accent:"#ADD2EB",accentDark:"#35495E",lightGrey:"#F6F6F6",darkGrey:"#91a2a3",ink:"black",errorRed:"#FF6666",codeEditBlue:"#2973b7",codeEditGreen:"#42b983",themedWhite:"#FFF",contentWidthLaptop:"95ch",contentWidthTablet:"65ch",contentWidthLargePhone:"50vw",sitePadding:"25px",bobbysLeftMarginPreference:"15%",gregsLeftMarginPreference:"5%"};var g=()=>window.getSelection?window.getSelection().toString():document.selection?document.selection.createRange().text:"",u=n(743);t.a=Object(c.b)(void 0,e=>({getFlags(){e({type:"GET_FEATURE_FLAGS"})}}))(class extends r.a.Component{constructor(...e){super(...e),i()(this,"trackTextSelection",()=>{const e=e=>{if(e&&e.target&&e.target.getAttribute("data-do-not-track-copy"))return;const t=g();t&&Object(u.a)("Text Selected",{value:t})};document.addEventListener("mouseup",e,!1),document.addEventListener("keyup",e=>{e.keyCode||e.which},!1)})}componentDidMount(){this.props.getFlags(),this.trackTextSelection()}getLocalTitle(){const e=m.a.pathPrefix?m.a.pathPrefix:"/",t=this.props.location.pathname.replace(e,"").replace("/","");let n="";if(""===t)n="Home";else if("categories/"===t)n="Categories";else if("about/"===t)n="About";else if(t.includes("categories/")){const e=t.replace("categories/","").replace("/","").replace("-"," ");n=`${a=e,a.charAt(0).toUpperCase()+a.slice(1)}`}var a;return n}render(){const{children:e}=this.props;return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("title",null,`${m.a.siteTitle} |  ${this.getLocalTitle()}`),r.a.createElement("meta",{name:"description",content:m.a.siteDescription}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),r.a.createElement(d.a,{theme:h},e))}})},746:function(e,t,n){"use strict";var a=n(2),i=n.n(a),o=n(741),r=n.n(o),c=n(742),s=n.n(c);t.a=class extends a.Component{render(){const{postNode:e,postPath:t,postSEO:n}=this.props;let a,o,c,l;if(n){const n=e.frontmatter;a=n.title,o=n.description?n.description:e.excerpt,l=s.a.siteUrl+s.a.pathPrefix+t}else a=s.a.siteTitle,o=s.a.siteDescription,c=s.a.siteLogo;const d="/"===s.a.pathPrefix?"":s.a.pathPrefix;c=s.a.siteUrl+d+c;const p=s.a.siteUrl+s.a.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:a,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:""}];return n&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:a,image:c}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:a,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:c},description:o}]),i.a.createElement(r.a,null,i.a.createElement("meta",{name:"description",content:o}),i.a.createElement("meta",{name:"image",content:c}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),i.a.createElement("meta",{property:"og:url",content:n?l:p}),n?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:a}),i.a.createElement("meta",{property:"og:description",content:o}),i.a.createElement("meta",{property:"og:image",content:c}),i.a.createElement("meta",{property:"fb:app_id",content:s.a.siteFBAppID?s.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter?s.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:a}),i.a.createElement("meta",{name:"twitter:description",content:o}),i.a.createElement("meta",{name:"twitter:image",content:c}))}}},748:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjQuNTMwMzMiIHkxPSI3LjQ2OTY3IiB4Mj0iOC41OTMyMSIgeTI9IjExLjUzMjYiIHN0cm9rZT0iIzVjNTBjYSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjE3LjUzMDMiIHkxPSIxLjUzMDMzIiB4Mj0iNy45NDIzOSIgeTI9IjExLjExODMiIHN0cm9rZT0iIzVjNTBjYSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41IDguNUMxNS41IDEyLjM2NiAxMi4zNjYyIDE1LjUgOC41IDE1LjVDNC42MzM3OSAxNS41IDEuNSAxMi4zNjYgMS41IDguNUMxLjUgNC42MzQwMyA0LjYzMzc5IDEuNSA4LjUgMS41QzkuOTA4NjkgMS41IDExLjIxOTcgMS45MTYwMiAxMi4zMTc5IDIuNjMxODRMMTMuMzk3NSAxLjU1MkMxMi4wMTMyIDAuNTc0MjE5IDEwLjMyMzcgMCA4LjUgMEMzLjgwNTY2IDAgMCAzLjgwNTY2IDAgOC41QzAgMTMuMTk0MyAzLjgwNTY2IDE3IDguNSAxN0MxMy4xOTQzIDE3IDE3IDEzLjE5NDMgMTcgOC41QzE3IDcuODYwODQgMTYuOTI5NyA3LjIzODI4IDE2Ljc5NTkgNi42Mzk0TDE1LjQ3OSA3Ljk1NTgxQzE1LjQ5MjcgOC4xMzUyNSAxNS41IDguMzE2ODkgMTUuNSA4LjVaIiBmaWxsPSIjNWM1MGNhIi8+Cjwvc3ZnPgo="},750:function(e,t,n){"use strict";var a=n(738),i=n(748),o=n.n(i);t.a=a.c.ul.withConfig({displayName:"UnorderedList",componentId:"sc-1pe5cia-0"})(["list-style:none;margin:0 0 10px 10px;padding:0;li{margin:0 0 20px;padding-left:20px;position:relative;}li::before{background-image:url(",');background-position:0 2px;background-repeat:no-repeat;background-size:contain;content:"";color:#62b482;height:20px;left:-10px;text-align:center;width:20px;position:absolute;top:0;}'],o.a)},763:function(e,t,n){},764:function(e,t,n){},765:function(e,t,n){},766:function(e,t,n){},768:function(e,t,n){"use strict";var a=n(134),i=n.n(a),o=n(2),r=n.n(o),c=n(749),s=n.n(c),l=n(738);t.a=class extends o.Component{constructor(){super(),i()(this,"init",()=>{const e=this.container.getBoundingClientRect();this.containerHeight=e.bottom-e.top,setTimeout(()=>{this.setState({expanded:!0})},1e3)}),i()(this,"dismiss",()=>{this.setState({expanded:!1}),setTimeout(()=>{this.setState({visible:!1})},200)}),this.state={expanded:!1,visible:!0}}componentDidMount(){this.container&&this.init()}componentDidUpdate(){this.container&&!this.containerHeight&&this.init()}render(){const{children:e,data:t={},type:n}=this.props,{visible:a,expanded:i}=this.state,{announcement:o}=t,c=[];return o&&o.edges.forEach((e,t)=>{c.push({content:r.a.createElement("h3",{key:t},r.a.createElement(s.a,{text:`${e.node.frontmatter.announcement}`,linkProps:{target:"_blank"}})),type:e.node.frontmatter.announcementType})}),a&&c.length?r.a.createElement(p,{ref:e=>this.container=e,expanded:i,type:c[c.length-1].type,_height:this.containerHeight},r.a.createElement("div",null,c[c.length-1].content),r.a.createElement(m,{onClick:this.dismiss},"×")):null}};const d={positive:"\n    background-color: #e1ebe7;\n    border-color: #3cba7f;\n    color: #3cba7f;\n  ",negative:"\n    background-color: #fbedf0;\n    border-color: #d63a59;\n    color: #d63a59;\n  "},p=l.c.aside.withConfig({displayName:"Announcement__Container",componentId:"sc-1gijrgp-0"})(["align-self:center;border:solid 1px;border-radius:0 0 4px 4px;border-top:none;display:grid;grid-template-columns:1fr 50px;margin:-85px 0 70px;@media screen and (max-width:768px){margin-bottom:30px;}overflow:hidden;text-align:center;transition:margin-top 0.2s,visibility 0.5s;visibility:hidden;"," "," ",""],e=>e._height?`\n      margin-top: -${e._height+25}px;\n      position: static;\n    `:"",e=>e.expanded?"\n      margin-top: -25px;\n      visibility: visible;\n    ":"",e=>d[e.type]||d.positive),m=l.c.button.withConfig({displayName:"Announcement__Dismiss",componentId:"sc-1gijrgp-1"})(["background-color:transparent;font-size:1.5em;"])},771:function(e,t,n){"use strict";function a(e){for(var t=0,n=e.length;t<n;t++)if(e.charCodeAt(t)>255)return e.substring(0,t);return e}n.d(t,"a",function(){return a})},772:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(134),i=n.n(a),o=n(2),r=n.n(o),c=n(6),s=n.n(c),l=n(34),d=n(738),p=n(739);class m extends r.a.Component{constructor(e){super(e),i()(this,"highlightActiveLink",()=>{const e=this.props.getContentWindow();if(!e)return;let t=this.props.headings.map(e=>({...e,id:e.id&&e.id.replace("uport-","u-port-").replace("--","-")}));for(let i=0;i<t.length;i++){const n=document.getElementById(t[i].id);if(!n)continue;const a=n.getBoundingClientRect();t[i].isInView=a.top>=0&&a.left>=0&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight),t[i].hasScrolledPast=n.offsetTop<e.scrollTop}let n=-1;for(let i=0;i<t.length;i++)if(t[i].isInView){t[i].active=!0,n=i;break}if(-1==n)for(let i=t.length-1;i>=0;i--)if(t[i].hasScrolledPast){t[i].active=!0,n=i;break}if(n>-1){let e=t[n].level;for(let a=n-1;a>=0;a--)t[a].level>=e?t[a].active=!1:(e=t[a].level,t[a].active=!0);for(let a=n+1;a<t.length;a++)t[a].active=!1}const a=t.filter(e=>e.active).map(e=>e.id);this.state.activeHeadings.join("|")!=a.join("|")&&this.setState({activeHeadings:a})}),this.state={activeHeadings:[]}}componentDidMount(){this.container.getBoundingClientRect().width&&(this.intv=setInterval(this.highlightActiveLink,200))}componentWillUnmount(){this.intv&&clearInterval(this.intv)}render(){const{listItems:e}=this.props,{activeHeadings:t}=this.state,n=e[0].text,a=e.map(e=>{const n=e.innerLinks.map(e=>{const n=Boolean(t.find(t=>t==e.headingId));return r.a.createElement("li",{key:e.text},r.a.createElement(x,null,r.a.createElement("a",{href:e.url},r.a.createElement("h6",{className:`${n?"active":""}`},e.text))))}),a=t.find(t=>t===e.headingId)||e.isPathMatch;return r.a.createElement("li",{key:`${e.url}`},r.a.createElement(l.Link,{to:`${e.url}`},r.a.createElement("span",null,r.a.createElement("h5",{className:`tocHeading ${a?"active":""}`},e.text))),n.length?r.a.createElement("ul",{className:"chapterItems"},n):null)});return r.a.createElement(h,{id:"toc",ref:e=>this.container=e},r.a.createElement(g,null,n),r.a.createElement(u,null,r.a.createElement("ul",null,a)))}}m.propTypes={getContentWindow:s.a.func.isRequired,headings:s.a.arrayOf(s.a.shape({id:s.a.string.isRequired,level:s.a.number.isRequired})).isRequired,listItems:s.a.arrayOf(s.a.shape({headingId:s.a.string.isRequired,text:s.a.string.isRequired,url:s.a.string.isRequired,isPathMatch:s.a.bool.isRequired,innerLinks:s.a.arrayOf(s.a.shape({headingId:s.a.string.isRequired,text:s.a.string.isRequired,url:s.a.string.isRequired,isPathMatch:s.a.bool.isRequired}))})).isRequired};const h=d.c.div.withConfig({displayName:"TableOfContentsUI__TableOfContentsContainer",componentId:"sc-14mamby-0"})(["padding:40px 0;position:fixed;ul{list-style:none;margin:0;padding:0;li{margin:0;}li::before{all:initial;background-image:none;list-style:none;}li:first-child .tocHeading{display:none;}}.chapterItems{list-style:none;padding:0;margin-left:40px;}a{text-decoration:none;}p,h6{display:inline-block;font-weight:400;font-size:14px;margin-bottom:8px;}h5{font-size:14px;font-weight:bold;padding-left:20px;}h5.active,.tocHeading.active{background-color:#D3D4F8;border-radius:4px;color:",";font-size:14px;font-weight:bold;padding:15px 20px;}h5:hover{color:",";}h6.active{color:",";}.tocHeading{font-weight:400;color:",";margin-top:25px;font-size:14px;}",""],e=>e.theme.brandHighlight,e=>e.theme.brandHighlight,e=>e.theme.secondaryBrand,e=>e.theme.darkGrey,Object(p.g)("display: none;")),g=d.c.div.withConfig({displayName:"TableOfContentsUI__Title",componentId:"sc-14mamby-1"})(["background-color:#F2F3F9;border-radius:4px 4px 0 0;color:#5C50CA;font-size:20px;font-weight:800;max-width:320px;padding:30px 20px 10px 40px;width:21vw;"]),u=d.c.div.withConfig({displayName:"TableOfContentsUI__Scrollpane",componentId:"sc-14mamby-2"})(["background-color:#F2F3F9;border:solid 4px #F2F3F9;border-radius:0 0 4px 4px;max-height:70vh;max-width:320px;overflow-x:hidden;overflow-y:auto;padding:10px 20px 30px;width:21vw;::-webkit-scrollbar{width:2px;}::-webkit-scrollbar-thumb{background:",";}"],e=>e.theme.tocAccent),x=d.c.div.withConfig({displayName:"TableOfContentsUI__ContentContainer",componentId:"sc-14mamby-3"})(["h6,p{color:",";}li{margin-left:-10px;}&:hover{li{span{border-bottom:1px solid ",";}}}"],e=>e.theme.darkGrey,e=>e.theme.tocAccent)},791:function(e,t,n){"use strict";var a=n(2),i=n.n(a),o=n(738);t.a=class extends a.Component{constructor(){super(),this.state={choice:null},this.handleChange=this.handleChange.bind(this)}handleChange(e){const t=`content-survey-${null!==this.state.choice?"updated":"taken"}`;switch(e.target.value){case"true":this.setState({choice:!0},()=>{window.analytics.track(t,this.state,{context:{ip:"0.0.0.0"}})});break;case"false":this.setState({choice:!1},()=>{window.analytics.track(t,this.state,{context:{ip:"0.0.0.0"}})});break;default:this.setState({choice:null})}}render(){return i.a.createElement(h,null,i.a.createElement(r,null,i.a.createElement(c,null),i.a.createElement(p,null,i.a.createElement(s,null,"Was this article helpful?"),i.a.createElement(m,null,i.a.createElement(d,null,i.a.createElement(l,{type:"radio",value:"true",name:"survey",onChange:this.handleChange}),"Yes")),i.a.createElement(m,null,i.a.createElement(d,null,i.a.createElement(l,{type:"radio",value:"false",name:"survey",onChange:this.handleChange}),"No")))))}};const r=o.c.form.withConfig({displayName:"Survey__Form",componentId:"sc-1gmxdso-0"})(["width:100%;"]),c=o.c.hr.withConfig({displayName:"Survey__HR",componentId:"sc-1gmxdso-1"})(["background-color:rgb(229,229,229);height:1px;"]),s=o.c.h5.withConfig({displayName:"Survey__H5",componentId:"sc-1gmxdso-2"})(["margin-bottom:10px;@media (min-width:768px){margin:auto;}padding-right:10px;"]),l=o.c.input.withConfig({displayName:"Survey__Input",componentId:"sc-1gmxdso-3"})(["margin:0 10px 0 0;padding-left:5px;"]),d=o.c.label.withConfig({displayName:"Survey__Label",componentId:"sc-1gmxdso-4"})(["font-weight:normal;margin:auto;padding:10px;text-transform:none;@media (min-width:768px){padding:0 5px;}"]),p=o.c.div.withConfig({displayName:"Survey__Row",componentId:"sc-1gmxdso-5"})(["@media (min-width:768px){display:flex;flex-direction:row;}max-width:25rem;"]),m=o.c.div.withConfig({displayName:"Survey__Column",componentId:"sc-1gmxdso-6"})(["margin:auto;"]),h=o.c.div.withConfig({displayName:"Survey__SurveyContainer",componentId:"sc-1gmxdso-7"})(["padding-bottom:20px;padding-top:20px;display:flex;margin:auto;"])},792:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(778),i=n.n(a),o=n(2),r=n.n(o),c=(n(34),n(772)),s=(n(739),n(771));const l=(e="")=>e.replace(/^\/overview\/overview$/,"/overview");class d extends r.a.Component{render(){const{headings:e,post:t,types:n,getContentWindow:a}=this.props;let o="",d="";"undefined"!=typeof window&&(o=window.location.hash.replace("#",""),d=window.location.pathname.replace(/\/$/,""));t.type;const p=[];n.forEach(e=>{const n={title:e.node.frontmatter.title,path:l(e.node.fields.slug),indexNumber:e.node.frontmatter.index,category:e.node.frontmatter.category,headings:e.node.headings};n.indexNumber||0===n.indexNumber?p.push(n):t.title==e.node.frontmatter.title&&p.push({title:e.node.frontmatter.title,path:l(e.node.fields.slug),indexNumber:0,category:e.node.frontmatter.category,headings:e.node.headings})});const m=[];return p.sort((e,t)=>e.indexNumber-t.indexNumber).forEach(e=>{const t=[];e.headings&&e.headings.forEach(n=>{if(2===n.depth){const a=Object(s.a)(i()(n.value));t.push({headingId:a,text:n.value,url:`${e.path}#${a}`,isPathMatch:e.path===d})}}),m.push({headingId:Object(s.a)(i()(e.title)),text:e.title.charAt(0).toUpperCase()+e.title.slice(1),url:e.path,innerLinks:t,isPathMatch:e.path===d})}),r.a.createElement(c.a,{headings:e,listItems:m,getContentWindow:a})}}},793:function(e,t,n){"use strict";var a=n(778),i=n.n(a),o=n(2),r=n.n(o),c=n(771);t.a=class extends o.Component{render(){let e="";switch(this.props.children[1].type){case"strong":e=this.props.children[1].props.children[0];break;case"em":e=this.props.children[1].props.children[0].props.children[0];break;case"a":e=this.props.children[2];break;default:e=this.props.children[1]}const t=this.props.children[0].props.children[0],n=Object(c.a)(i()(e));return r.a.createElement("h2",{id:n},r.a.createElement("a",{href:`#${n}`,"aria-hidden":"true",className:"anchor"},t),e)}}},794:function(e,t,n){"use strict";var a=n(738);n(748);t.a=a.c.ol.withConfig({displayName:"OrderedList",componentId:"jtuszo-0"})(["margin:0 0 10px 0;padding:0 0 0 40px;li{margin-top:0.4em;}"])},795:function(e,t,n){"use strict";var a=n(2),i=n.n(a),o=n(738);t.a=class extends a.Component{render(){const{children:e}=this.props;return i.a.createElement("a",{style:{border:"none"},href:this.props.to,target:"_blank"},i.a.createElement(r,null,e))}};const r=o.c.div.withConfig({displayName:"CtaButton__ButtonContainer",componentId:"kqm30l-0"})(["float:right;margin-right:320px;margin-top:22px;border:1px solid ",";border-radius:3px;padding:2px 6px 2px 6px;font-size:1rem;color:",";display:inline-block;transition:all .1s ease;&:hover{color:white;background:",";}@media screen and (max-width:600px){margin-top:0px;margin-bottom:10px;float:left;margin-left:52px;}"],e=>e.theme.brand,e=>e.theme.brand,e=>e.theme.brand)},796:function(e,t,n){"use strict";t.a=(e=>e.children.filter(e=>e.tagName&&e.tagName.match(/^h\d$/)).map(e=>({level:parseInt(e.tagName.slice(1),10),id:e.properties.id})))}}]);
//# sourceMappingURL=component---src-templates-content-jsx-2006e558d1181d50ca0b.js.map