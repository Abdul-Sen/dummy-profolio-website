(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,a){e.exports=a(136)},118:function(e,t,a){},128:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=(a(118),a(35)),c=a(25),m=a(47),s=a(48),u=a(51),d=a(41),p=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"About page")}}]),t}(r.a.Component),g=a(7),E=a(39),h=a(52),b=a.n(h),f=a(24),x=a(181),y=a(172),v=a(175),k=a(138),j=a(191),w=a(139),S=a(93),O=a.n(S),C=a(95),I=a.n(C),A=a(94),W=a.n(A),B=a(69),T=a.n(B),L=a(70),N=a.n(L),F=a(71),R=a.n(F),z=a(29),H=a.n(z),D=function(e){return r.a.createElement(H.a,{left:!0},r.a.createElement(y.a,{container:!0,direction:"row",alignItems:"center",spacing:3},r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(k.a,{component:"span",variant:"h4"},r.a.createElement(j.a,{fontWeight:"fontWeightLight"},"About me"))),r.a.createElement(y.a,{item:!0,md:11},r.a.createElement(k.a,{component:"span",variant:"body1",gutterBottom:!0},r.a.createElement(j.a,null,"My name is Abdul Rehman, and I am a final semester computer programming student at Seneca College. I am actively searching for a place to work where I can learn and grow as a developer.",r.a.createElement("br",null),r.a.createElement("br",null),"I bring with myself an energetic personality and a love of learning and building modern web applications."))),r.a.createElement(y.a,{item:!0,md:12,sm:12,xs:12},r.a.createElement(k.a,{component:"span",variant:"h5"},r.a.createElement(j.a,{fontWeight:"fontWeightLight",paddingLeft:"20px"},"Contact"))),r.a.createElement(y.a,{item:!0,md:12,sm:12,xs:12},r.a.createElement(k.a,{component:"span",variant:"body2",style:{display:"flex",alignItems:"center"}},r.a.createElement(O.a,null)," \u2002 +1 437-928-1996")),r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(k.a,{variant:"body2",style:{display:"flex",alignItems:"center"}},r.a.createElement(W.a,null)," \u2002 Toronto, ON Canada")),r.a.createElement(y.a,{item:!0,md:12,sm:12},r.a.createElement(k.a,{component:"span",variant:"body2",style:{display:"flex",alignItems:"center"}},r.a.createElement(I.a,null)," \u2002 abdul-rehman@myseneca.ca")),r.a.createElement(y.a,{item:!0,md:12,sm:12},r.a.createElement(k.a,{component:"span",variant:"h5"},r.a.createElement(j.a,{fontWeight:"fontWeightLight",paddingLeft:"20px"},"Online presence"))),r.a.createElement(y.a,{item:!0,md:4,sm:3,xs:12},r.a.createElement(j.a,{textAlign:"center"},r.a.createElement(w.a,{size:"large",style:{textTransform:"lowercase"},href:"https://www.linkedin.com/in/abdul-r/",target:"_blank"},r.a.createElement(T.a,{color:"primary",fontSize:"large"})," Catch me on linkedIn"))),r.a.createElement(y.a,{item:!0,md:4,sm:3,xs:12},r.a.createElement(j.a,{textAlign:"center"},r.a.createElement(w.a,{size:"large",style:{textTransform:"lowercase"},href:"https://github.com/Abdul-Sen",target:"_blank"},r.a.createElement(N.a,{fontSize:"large"}),"\xa0 See how I code"))),r.a.createElement(y.a,{item:!0,md:4,sm:3,xs:12},r.a.createElement(j.a,{textAlign:"center"},r.a.createElement(w.a,{size:"large",style:{textTransform:"lowercase"},href:"https://twitter.com/AbdulRe47817062",target:"_blank"},r.a.createElement(R.a,{fontSize:"large",style:{color:"#00acee"}})," \xa0 Hear my thoughts"))),r.a.createElement(y.a,{item:!0,md:12,sm:12,xs:12},r.a.createElement(k.a,{variant:"caption"},"Illustration by ",r.a.createElement(j.a,{component:"a",href:"https://ls.graphics/",target:"_blank"}," Ls Graphics ")," \u2764\ufe0f"))))},P=a(176),G=a(177),M=a(190),J=a(178),U=a(179),_=a(193),q=a(180),Q=a(73),K=a.n(Q),V={name:"",email:"",subject:"",message:"",copyEmailStatus:!1},Z=Object(v.a)((function(e){return{card:{boxShadow:"0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",backgroundColor:"#fbfbfb"},fab:{marginLeft:"auto"}}}));var $=function(e){var t=Object(n.useState)(V),a=Object(f.a)(t,2),l=a[0],i=a[1],o=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;if("checkbox"===e.target.type)console.log("event is a checkbox"),i((function(e){return Object(E.a)({},e,{copyEmailStatus:t})}));else{var a=e.target,n=a.name,r=a.value;i((function(e){return Object(E.a)({},e,Object(g.a)({},n,r))}))}},c=Z();return r.a.createElement(H.a,{right:!0,cascade:!0},r.a.createElement(P.a,{className:c.card},r.a.createElement(G.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),alert("An email has been sent to Abdul Rehman"),console.log(l);var t=Object.assign({},l);!function(){var e;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(fetch("https://us-central1-microservices-264117.cloudfunctions.net/sendMessage",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:e=a.sent,console.log(e);case 4:case"end":return a.stop()}}))}(),i(V)}},r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,sm:12,xs:12,md:12},r.a.createElement(k.a,{component:"span",variant:"h4",gutterBottom:!0},r.a.createElement(j.a,{fontWeight:"fontWeightLight"},"Don't be a lurker, get in touch!")),r.a.createElement("hr",null)),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(M.a,{value:l.name,fullWidth:!0,id:"name-input","aria-describedby":"name-helper-text",name:"name",label:"Name",onChange:o}),r.a.createElement(J.a,{id:"name-helper-text"},"Your name (Optional)")),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(M.a,{fullWidth:!0,id:"email-input","aria-describedby":"email-helper-text",name:"email",label:"Email",value:l.email,onChange:o}),r.a.createElement(J.a,{id:"email-helper-text"},"Your email (Optional)")),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(M.a,{value:l.subject,id:"subject-input",variant:"outlined","aria-describedby":"my-helper-text",name:"subject",fullWidth:!0,label:"Subject",onChange:o}),r.a.createElement(J.a,{id:"subject-helper-text"},"Email Subject (Required)")),r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(M.a,{value:l.message,id:"message-input",rows:"15",multiline:!0,"aria-describedby":"message-helper-text",fullWidth:!0,variant:"outlined",label:"Message",name:"message",onChange:o}),r.a.createElement(J.a,{id:"message-helper-text"},"Required.")),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(U.a,{control:r.a.createElement(_.a,{color:"primary",name:"copyEmailStatus",checked:l.copyEmailStatus,disabled:!0,onChange:o,value:"yes"}),label:"Send me a copy of the email (Temp disabled)"})),r.a.createElement(y.a,{item:!0,className:c.fab,md:4},r.a.createElement(q.a,{variant:"extended",size:"large",color:"primary",type:"submit",value:"submit"},"send message",r.a.createElement(K.a,{fontSize:"small"}))))))))},Y=a(46),X=Object(v.a)((function(e){return{container:{minHeight:"100vh",padding:"50px"}}})),ee={name:"",email:"",subject:"",message:"",copyEmailStatus:!1};var te=function(e){var t=X(),a=Object(n.useState)(ee),l=Object(f.a)(a,2);return l[0],l[1],r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{id:"contactContainer",maxWidth:!1,className:t.container},r.a.createElement(y.a,{container:!0,justify:"center",spacing:5},r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(D,null)),r.a.createElement(y.a,{item:!0,md:6},r.a.createElement($,null)))))},ae=(a(128),function(e){function t(e){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{id:"home",maxWidth:!1,disableGutters:!0},r.a.createElement(y.a,{spacing:0,container:!0,wrap:"wrap",justify:"space-evenly",direction:"row"},r.a.createElement(y.a,{item:!0,sm:12,xs:12,md:12,lg:12,xl:12},r.a.createElement("div",{id:"landingOverlay"},r.a.createElement("div",{id:"landing"},r.a.createElement(y.a,{spacing:0,container:!0,justify:"flex-start",direction:"column"},r.a.createElement(y.a,{item:!0,md:6,id:"titleContainer"},r.a.createElement(k.a,{variant:"h3",id:"title"},"hello, I'm Abdul.")),r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(k.a,{variant:"h4",id:"sub"},"Fullstack web developer")))))))))}}]),t}(r.a.Component)),ne=a(97),re=a(182),le=a(183),ie=a(184),oe=a(192),ce=a(98),me=a.n(ce),se=Object(v.a)((function(e){var t;return{img:(t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -55%)",objectFit:"fill"},Object(g.a)(t,e.breakpoints.up("md"),{width:"90%",height:"90%",marginTop:15}),Object(g.a)(t,e.breakpoints.down("md"),{width:"90%",height:"60%"}),t)}}));var ue=function(e){var t=se();return r.a.createElement(oe.a,{open:!0,onClose:e.handler},r.a.createElement(me.a,{height:"90%",width:"70%",className:t.img,playing:!0,muted:!0,loop:!0,controls:!1,url:e.path}))};a(134);var de=function(e){var t=e.source;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{class:"video-thumbnail top-img"},r.a.createElement("img",{class:"thumbnail-img",src:t,alt:"Video thumbnail"}),r.a.createElement("div",{class:"overlay"},r.a.createElement("img",{id:"play-btn",src:"/portfolio/images/play.png"}))))},pe=Object(v.a)((function(e){return{root:{flexGrow:1},content:{padding:"10px"},listItem:{marginBottom:"70px"},debugStyle:{borderStyle:"solid",padding:"10px"},paper:{borderRadius:"2em",maxWidth:600,maxHeight:800,textAlign:"center",backgroundColor:"#FFFFFF",boxShadow:"5px 5px 10px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)","&:hover":{}},tagButton:{fontSize:"12px",color:"#39739d",backgroundColor:"#e1ecf4",borderColor:"#e1ecf4"},buttonGroup:{flexWrap:"wrap"},test:{objectFit:"fill",height:"350px"},playButton:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:0,"&:hover":{opacity:1}}}}));var ge=function(e){var t=pe(),a=Object(n.useState)(!1),l=Object(f.a)(a,2),i=l[0],o=l[1],c=function(e){o((function(e){return!e}))};return r.a.createElement(n.Fragment,null,r.a.createElement(re.a,{className:t.listItem},r.a.createElement("div",{className:t.root},i&&r.a.createElement(ue,{path:e.project.tileTile.media,handler:c}),r.a.createElement(y.a,{container:!0,spacing:10,direction:"row"},r.a.createElement(y.a,{item:!0,md:4,sm:12,xs:12},r.a.createElement("h4",null,e.project.tileTile.title),r.a.createElement("p",null,e.project.tileTile.description),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,className:t.content,md:12},r.a.createElement(y.a,{container:!0,direction:"row",spacing:3},r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(w.a,{variant:"outlined",target:"_blank",href:e.project.tileTile.projectLink},"GitHub")),r.a.createElement(y.a,{item:!0,md:6},r.a.createElement(q.a,{href:e.project.tileTile.demoLink,target:"_blank",variant:"extended",size:"medium",color:"primary"},"Demo",r.a.createElement(K.a,{fontSize:"small"}))))))),r.a.createElement(y.a,{item:!0,md:8,sm:12,xs:12},r.a.createElement(P.a,{className:t.paper},r.a.createElement(le.a,{onClick:c},r.a.createElement(de,{source:"/portfolio"+e.project.tileTile.thumbnail})))),r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(ie.a,{className:t.buttonGroup,size:"small","aria-label":"small outlined button group"},e.project.tileTile.tags.map((function(e,a){return r.a.createElement("div",{key:a},0===a?r.a.createElement("span",null,"Tech tags: "):null,r.a.createElement(w.a,{className:t.tagButton},e))}))))))),e.renderHR&&r.a.createElement("hr",null))},Ee=a(4),he=a(195),be=a(185),fe=a(186),xe=Object(Ee.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(he.a),ye=Object(Ee.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(be.a),ve=Object(Ee.a)((function(e){return{root:{padding:e.spacing(2)}}}))(fe.a);function ke(){var e=r.a.useState("panel1"),t=Object(f.a)(e,2),a=t[0],n=t[1],l=function(e){return function(t,a){n(!!a&&e)}};return r.a.createElement("div",null,r.a.createElement("p",null,"Worked in a DevOps team as a systems developer, automating backend systems using C# and PowerShell. Some highlights include:"),r.a.createElement(xe,{square:!0,expanded:"panel1"===a,onChange:l("panel1")},r.a.createElement(ye,{"aria-controls":"panel1d-content",id:"panel1d-header"},r.a.createElement(k.a,null,r.a.createElement("li",null,"Researching, building an MVP, and setting up the production version of microservices architecture for my team on Azure"))),r.a.createElement(ve,null,r.a.createElement(k.a,null,"Worked alongside other teammates to evaluate various microservices architectural options. Build a minimum viable product using Azure Automation Runbooks and Azure Cloud Function App to meet the company's hybrid infrastructure requirements. Setup production pipeline from Azure DevOps to automate build and release pipeline for our production setup, including setting up automated API testing using PostMan."))),r.a.createElement(xe,{square:!0,expanded:"panel2"===a,onChange:l("panel2")},r.a.createElement(ye,{"aria-controls":"panel2d-content",id:"panel2d-header"},r.a.createElement(k.a,null,r.a.createElement("li",null,"Building an automated service uptime tracking script"))),r.a.createElement(ve,null,r.a.createElement(k.a,null,"Built an automation script using C# and Selenium to track uptime of a company site. Script checked for performance degradation and sends alert via email to team members. Logs each instance to help track potential problems using log4net"))),r.a.createElement(xe,{square:!0,expanded:"panel3"===a,onChange:l("panel3")},r.a.createElement(ye,{"aria-controls":"panel3d-content",id:"panel3d-header"},r.a.createElement(k.a,null,r.a.createElement("li",null,"Working with Microsoft Graph API to automate InTune security alerts"))),r.a.createElement(ve,null,r.a.createElement(k.a,null,"Used ",r.a.createElement("a",{target:"_blank",style:{textDecoration:"none"},href:"https://github.com/microsoft/Intune-PowerShell-SDK"},"Intune PowerShell SDK")," to work with Intune's Graph API to automate company-wide client communication about security alerts. Script filters clients based on provided OS version criteria and automatically send alerts users about potential security vulnerabilities"))))}var je=function(e){var t=ne.project;return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{id:"projectsContainer",maxWidth:!1},r.a.createElement(y.a,{justify:"space-around",container:!0,direction:"row",alignItems:"flex-start"},r.a.createElement(y.a,{item:!0,md:10,sm:12},r.a.createElement(k.a,{variant:"h3",gutterBottom:!0},r.a.createElement(j.a,{paddingTop:"50px",fontWeight:"fontWeightLight"},"Work Experience"))),r.a.createElement(y.a,{item:!0,md:10,sm:12},r.a.createElement("h3",null,"Systems Developer (co-op) - Healthcare of Ontario Pension Plan")),r.a.createElement(y.a,{item:!0,md:10,sm:12},r.a.createElement(ke,null))),r.a.createElement(y.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(y.a,{item:!0,md:12},r.a.createElement(k.a,{variant:"h3",gutterBottom:!0},r.a.createElement(j.a,{paddingTop:"50px",paddingBottom:"20px",fontWeight:"fontWeightLight"},"Cool things that I've built recently..."))),r.a.createElement(y.a,{item:!0,md:10},r.a.createElement(H.a,{Bottom:!0},t.map((function(e,a){return t.length===a?r.a.createElement(ge,{key:a,project:e,renderHR:!1}):r.a.createElement(ge,{key:a,project:e,renderHR:!0})})))))))},we=(a(135),Object(v.a)((function(e){return{icon:{},grid:{backgroundColor:"#8BC6EC",backgroundImage:"linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",height:80,padding:10,boxShadow:"0 3px 5px 2px rgba(139, 198, 236, .8)"},gridItem:{textAlign:"center"},footerGrid:{height:"10vh"},para:{backgroundColor:"#8BC6EC"}}})));function Se(){var e=we();return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{container:!0,spacing:0,className:e.grid,justify:"center",alignItems:"baseline",wrap:"wrap"},r.a.createElement(y.a,{item:!0},r.a.createElement("p",null,"follow me on: ")),r.a.createElement(y.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement(q.a,{variant:"round",size:"small",color:"primary",href:"https://github.com/Abdul-Sen",target:"_blank"},r.a.createElement(N.a,null))),r.a.createElement(y.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement(q.a,{variant:"round",size:"small",color:"primary",href:"https://www.linkedin.com/in/abdul-r/",target:"_blank"},r.a.createElement(T.a,null))),r.a.createElement(y.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement(q.a,{variant:"round",size:"small",color:"primary",href:"https://twitter.com/AbdulRe47817062",target:"_blank"},r.a.createElement(R.a,null)))))}var Oe=a(188),Ce=a(189),Ie=a(141),Ae="/#home",We="#projectsContainer",Be="#contactContainer",Te="#skillsContainer",Le=a(140),Ne=a(99),Fe=a.n(Ne),Re=Object(v.a)((function(e){var t;return{container:{"& button":(t={},Object(g.a)(t,e.breakpoints.up("sm"),{color:"#ffffff",fontWeight:"370"}),Object(g.a)(t,"& #imgBtn",{width:"30px",height:"30px",marginTop:"auto",marginBottom:"auto"}),t)}}}));function ze(e){var t,a=Re();return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2,className:a.container},r.a.createElement(y.a,{item:!0,xs:12,sm:1,md:1,style:{textAlign:"center"}},r.a.createElement(Y.HashLink,{smooth:!0,to:Ae,style:{textDecoration:"none"}},"desktop"===e.display?r.a.createElement(Le.a,null,r.a.createElement("img",{id:"imgBtn",src:"/portfolio/home.svg"})):r.a.createElement(Y.HashLink,{to:Ae,smooth:!0,style:{textDecoration:"none"}},r.a.createElement(w.a,{fullWidth:!0},"Home")))),r.a.createElement(y.a,{item:!0,xs:12,sm:3,md:2,style:{textAlign:"center"}},r.a.createElement(Y.HashLink,{smooth:!0,to:Te,style:{textDecoration:"none"}},r.a.createElement(w.a,{fullWidth:!0},"Skills"))),r.a.createElement(y.a,{item:!0,xs:12,sm:3,md:2,style:{textAlign:"center"}},r.a.createElement(Y.HashLink,{smooth:!0,to:We,style:{textDecoration:"none"}},r.a.createElement(w.a,{fullWidth:!0},"Work"))),r.a.createElement(y.a,{item:!0,xs:12,sm:3,md:2,style:{textAlign:"center"}},r.a.createElement(Y.HashLink,{smooth:!0,to:Be,style:{textDecoration:"none"}},r.a.createElement(w.a,{fullWidth:!0},"Contact"))),r.a.createElement(y.a,(t={item:!0,xs:12,sm:2,md:2},Object(g.a)(t,"xs",!0),Object(g.a)(t,"style",{textAlign:"center",marginLeft:"auto"}),t),r.a.createElement(w.a,{style:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},href:"https://docs.google.com/uc?export=download&id=1mhjIkcNp9ZRiTo5x-ZORuTVArGkCOw3J"},r.a.createElement(Fe.a,null),"RESUM\xc9"))))}var He=a(194),De=a(187),Pe=a(100),Ge=a.n(Pe),Me=Object(v.a)({list:{width:240,paddingTop:"18px"},menuIcon:{padding:"10px"}});function Je(){var e,t=Me(),a=r.a.useState({left:!1}),l=Object(f.a)(a,2),i=l[0],o=l[1],c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(Object(E.a)({},i,Object(g.a)({},e,t)))}};return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{onClick:c("left",!0)},r.a.createElement(Ge.a,{className:t.menuIcon})),r.a.createElement(He.a,{open:i.left,onClose:c("left",!1)},(e="left",r.a.createElement("div",{className:t.list,role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1)},r.a.createElement(ze,{display:"mobile"}),r.a.createElement(De.a,null)))))}var Ue=Object(Ie.a)((function(e){return{}}));function _e(){Ue();var e=Object(Oe.a)("(min-width:600px)");return r.a.createElement(Ce.a,null,r.a.createElement(j.a,{display:"flex",justifyContent:"flex-start",m:0,alignItems:"center"},e?r.a.createElement(ze,{display:"desktop"}):r.a.createElement(Je,null)))}r.a.Component;var qe=Object(v.a)((function(e){return{root:{boxShadow:"0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",margin:"auto",maxWidth:"500px",minHeight:"700px"},title:{textAlign:"center"},body:{}}}));r.a.createElement("ul",null,"hello world?");var Qe=function(e){var t=e.children,a=e.title,l=qe();return r.a.createElement(n.Fragment,null,r.a.createElement(P.a,{className:l.root},r.a.createElement(G.a,null,r.a.createElement(k.a,{display:"block",component:"span",className:l.title,variant:"h4"},a),r.a.createElement(k.a,{component:"span",className:l.body},t))))},Ke=a(59);var Ve=function(e){var t=e.title,a=e.items,l=e.addHr;return console.log(a),r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{component:"span",variant:"h6"},t),r.a.createElement("ul",null,a.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),1==l?r.a.createElement("hr",null):"")};var Ze=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{spacing:2,justify:"space-around",container:!0,direction:"row",alignItems:"flex-start"},r.a.createElement(y.a,{item:!0,md:6,sm:12,xs:12},r.a.createElement(H.a,{left:!0},r.a.createElement(Qe,{title:"Frontend"},Object.entries(Ke.frontend).map((function(e,t){var a=Object.keys(Ke.frontend).length;return r.a.createElement(Ve,{key:t,title:e[0],items:e[1],addHr:a!=t+1})}))))),r.a.createElement(y.a,{item:!0,md:6,sm:12,xs:12},r.a.createElement(H.a,{right:!0},r.a.createElement(Qe,{title:"Backend"},Object.entries(Ke.backend).map((function(e,t){var a=Object.keys(Ke.frontend).length;return r.a.createElement(Ve,{key:t,title:e[0],items:e[1],addHr:a!=t+1})})))))))};var $e=function(e){return r.a.createElement(x.a,{maxWidth:!1,disableGutters:!1},r.a.createElement(y.a,{spacing:2,id:"skillsContainer",justify:"space-around",container:!0,direction:"row",alignItems:"flex-start"},r.a.createElement(y.a,{item:!0,md:10,sm:12},r.a.createElement(k.a,{variant:"h3",gutterBottom:!0},r.a.createElement(j.a,{paddingTop:"50px",fontWeight:"fontWeightLight"},"What I know"))),r.a.createElement(y.a,{item:!0,md:12,sm:12,xs:12},r.a.createElement(Ze,null)),r.a.createElement(y.a,{item:!0,md:10,sm:12,xl:10},r.a.createElement(k.a,{variant:"subtitle2",gutterBottom:!1},r.a.createElement(j.a,{display:"inline",color:"red"},"*\xa0"),r.a.createElement(j.a,{display:"inline"}," - Preferred tool")))))};var Ye=function(e){return r.a.createElement(x.a,{maxWidth:!1,disableGutters:!0},r.a.createElement(_e,null),r.a.createElement(ae,null),r.a.createElement($e,null),r.a.createElement(je,null),r.a.createElement(te,null),r.a.createElement(Se,null))},Xe=a(63);i.a.render(r.a.createElement(Xe.BrowserRouter,{basename:"/portfolio"},r.a.createElement(Ye,null)),document.getElementById("root"))},59:function(e){e.exports=JSON.parse('{"frontend":{"Core":["Modern ES6","CSS3","HTML5"],"Web frameworks":["React *","Flutter","Angular 7","jQuery"],"Styling":["Bootstrap 4","Material UI *","SASS"],"State management solutions":["Redux *","RxJS"]},"backend":{"languages":["Javascript *","C#"],"environments":["NodeJS w/ Express *",".NET Core 3.0"],"databases":["MongoDB *","PostgreSQL","Oracle SQL","MSSQL"],"tools":["Powershell","Git","Azure & Azure Devops","GCP functions","Azure automation runbooks & functions","Heroku"]}}')},97:function(e){e.exports=JSON.parse('{"project":[{"tileTile":{"thumbnail":"/images/devovaro.PNG","projectLink":"https://github.com/Abdul-Sen/Fullstack-redux-store-app","demoLink":"https://sleepy-sierra-88885.herokuapp.com/","media":"https://youtu.be/pDSheItqEys","title":"Dev Social Site","description":"Fullstack web app showcasing both frontend design & state management skills as well as building of backend server and database. Implemented API support for infinite scroll and utilization of that feature with React.","tags":["React/redux","Material UI","MongoDB","Node/Express","Heroku"]}},{"tileTile":{"thumbnail":"/images/portfolio.PNG","projectLink":"https://abdul-sen.github.io/portfolio/","demoLink":"https://abdul-sen.github.io/portfolio/","media":"https://youtu.be/MtE6bhzSR5E","title":"This site!","description":"Built with React and hosted on Github Pages, this site uses GCP functions to securely sends any messages from contact form","tags":["react","material UI","Google Cloud Functions","Github Pages"]}},{"tileTile":{"thumbnail":"/images/recipe.jpg","title":"Recipe Web App","projectLink":"https://github.com/Abdul-Sen/Recipe-application","demoLink":"https://vast-ravine-81065.herokuapp.com/","media":"https://youtu.be/kKf0EUvZC7g","description":"Hungry and don\'t know what to cook? Fear not! This app will help you find random recipes. This app uses server-side rendering for its views. Users can perform CRUD operations on recipes they add to their profile. Use `DemoUser` for username and password to login","tags":["nodeJs","bootstrap 4","handlebars","mongoDB","PostgreSQL"]}}]}')}},[[113,1,2]]]);
//# sourceMappingURL=main.22b2a796.chunk.js.map