(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=(a(97),a(28)),c=a(22),m=a(41),s=a(42),u=a(45),d=a(34),p=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"About page")}}]),t}(r.a.Component),g=a(11),h=a(52),E=a(65),b=a.n(E),f=a(24),x=a(146),v=a(147),y=a(148),j=a(149),w=a(109),k=a(163),S=a(162),O=a(150),C=a(151),I=a(165),T=a(152),A=a(143),N=a(63),W=a.n(N),B=Object(A.a)((function(e){return{card:{boxShadow:"0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",transform:"scale(0.91)",margin:"10px",backgroundColor:"#fbfbfb"},container:{minHeight:"100vh"},fab:{marginLeft:"auto"}}})),P={name:"",email:"",subject:"",message:"",copyEmailStatus:!1};var H=function(e){var t=B(),a=Object(n.useState)(P),l=Object(f.a)(a,2),o=l[0],i=l[1],c=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;if("checkbox"===e.target.type)console.log("event is a checkbox"),i((function(e){return Object(h.a)({},e,{copyEmailStatus:t})}));else{var a=e.target,n=a.name,r=a.value;i((function(e){return Object(h.a)({},e,Object(g.a)({},n,r))}))}};return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{className:t.container},r.a.createElement(v.a,{container:!0,justify:"center",spacing:2},r.a.createElement(v.a,{item:!0,md:12}),r.a.createElement(v.a,{item:!0,md:8},r.a.createElement(y.a,{className:t.card},r.a.createElement(j.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),alert("An email has been sent to Abdul Rehman"),console.log(o);var t=Object.assign({},o);!function(){var e;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(fetch("https://us-central1-microservices-264117.cloudfunctions.net/sendMessage",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:e=a.sent,console.log(e);case 4:case"end":return a.stop()}}))}(),i(P)}},r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,sm:12,xs:12,md:12},r.a.createElement(w.a,{variant:"h3",gutterBottom:!0},r.a.createElement(k.a,{fontWeight:"fontWeightLight"},"Don't be a lurker, get in touch!")),r.a.createElement("hr",null)),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:3},r.a.createElement(S.a,{value:o.name,fullWidth:!0,id:"name-input","aria-describedby":"name-helper-text",name:"name",label:"Name",onChange:c}),r.a.createElement(O.a,{id:"name-helper-text"},"Your name (Optional)")),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:3},r.a.createElement(S.a,{fullWidth:!0,id:"email-input","aria-describedby":"email-helper-text",name:"email",label:"Email",value:o.email,onChange:c}),r.a.createElement(O.a,{id:"email-helper-text"},"Your email (Optional)")),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(S.a,{value:o.subject,id:"subject-input",variant:"outlined","aria-describedby":"my-helper-text",name:"subject",fullWidth:!0,label:"Subject",onChange:c}),r.a.createElement(O.a,{id:"subject-helper-text"},"Email Subject (Required)")),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(S.a,{value:o.message,id:"message-input",rows:"15",multiline:!0,"aria-describedby":"message-helper-text",fullWidth:!0,variant:"outlined",label:"Message",name:"message",onChange:c}),r.a.createElement(O.a,{id:"message-helper-text"},"Required.")),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(C.a,{control:r.a.createElement(I.a,{color:"primary",name:"copyEmailStatus",checked:o.copyEmailStatus,disabled:!0,onChange:c,value:"yes"}),label:"Send me a copy of the email (Temp disabled)"})),r.a.createElement(v.a,{item:!0,className:t.fab,md:3},r.a.createElement(T.a,{variant:"extended",size:"medium",color:"primary",type:"submit",value:"submit"},"send message",r.a.createElement(W.a,{fontSize:"small"})))))))))))},F=(a(103),a(72)),L=a.n(F),R=a(73),z=a.n(R),D=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(m.a)(this,Object(s.a)(t).call(this,e)),console.log("updated"),console.log("/dummy-profolio-website"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{spacing:0,container:!0,wrap:"wrap",justify:"space-evenly",direction:"row"},r.a.createElement(v.a,{item:!0,sm:12,xs:12,md:12,lg:12,xl:12},r.a.createElement("div",{id:"landingOverlay"},r.a.createElement("div",{id:"landing"},r.a.createElement(v.a,{spacing:0,container:!0,justify:"flex-start",direction:"column"},r.a.createElement(v.a,{item:!0,md:3},r.a.createElement("h1",null,"Welcome!")),r.a.createElement(v.a,{item:!0,md:6},r.a.createElement("h4",null,"...Building cool stuff is my passion"))))))),r.a.createElement(x.a,{maxWidth:"lg"},r.a.createElement(v.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(v.a,{item:!0,md:8},r.a.createElement("h2",null,"A bit about me..")),r.a.createElement(v.a,{item:!0,md:12},r.a.createElement(v.a,{container:!0,direction:"row",spacing:6,justify:"center",alignItems:"center"},r.a.createElement(v.a,{item:!0,md:4,sm:12,xs:12},r.a.createElement("h3",null,"Passion for development"),r.a.createElement("p",null,"I love building cool apps. I enjoy the challenge of seeing a complex problem and breaking it down into individual components to overcome said problem. I enjoy the thrill of having a concept, and then turning that concept into a working product.")),r.a.createElement(v.a,{item:!0,md:4,className:"img-container"},r.a.createElement("img",{src:L.a,alt:"banner_image_1 failed to load",height:"250px"})))),r.a.createElement(v.a,{item:!0,md:12},r.a.createElement(v.a,{container:!0,direction:"row",spacing:6,justify:"center",alignItems:"center"},r.a.createElement(v.a,{item:!0,md:4,className:"img-container"},r.a.createElement("img",{src:z.a,alt:"banner_image_2 failed to load",height:"250px"})),r.a.createElement(v.a,{item:!0,md:4,sm:12,xs:12},r.a.createElement("h3",null,"Team Collaboration"),r.a.createElement("p",null,"Working as a team towards a common goal is always more engaging. Having worked in an agile team has only re-enforced my love for working in a collaborative team environment")))))))}}]),t}(r.a.Component),M=a(74),G=a(153),J=a(111),_=a(154),q=a(155),U=a(156),K=Object(A.a)((function(e){return{root:{flexGrow:1},content:{padding:"10px"},listItem:{marginBottom:"70px"},debugStyle:{borderStyle:"solid",padding:"10px"},paper:{borderRadius:"2em",maxHeight:"100%",maxWidth:"100%",textAlign:"center",backgroundColor:"#FFFFFF",boxShadow:"5px 5px 10px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)","&:hover":{boxShadow:"1px 8px 17px grey",transform:" translate(-4px, -4px)",transition:"all .4s ease"}},paperContent:{maxHeight:"300px",maxWidth:"auto",padding:"25px",borderRadius:"2em"},tagButton:{fontSize:"12px",color:"#39739d",backgroundColor:"#e1ecf4",borderColor:"#e1ecf4"},buttonGroup:{flexWrap:"wrap"}}}));var $=function(e){var t=K(),a=Object(n.useState)(!1),l=Object(f.a)(a,2),o=(l[0],l[1]);return r.a.createElement(n.Fragment,null,r.a.createElement(G.a,{className:t.listItem},r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{container:!0,spacing:10,direction:"row"},r.a.createElement(v.a,{item:!0,md:4,sm:12,xs:12},r.a.createElement("h4",null,e.project.tileTile.title),r.a.createElement("p",null,e.project.tileTile.description),r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0,className:t.content,md:12},r.a.createElement(v.a,{container:!0,direction:"row",spacing:3},r.a.createElement(v.a,{item:!0,md:6},r.a.createElement(J.a,{variant:"outlined",target:"_blank",href:e.project.tileTile.projectLink},"GitHub")),r.a.createElement(v.a,{item:!0,md:6},r.a.createElement(T.a,{href:e.project.tileTile.demoLink,target:"_blank",variant:"extended",size:"medium",color:"primary"},"Demo",r.a.createElement(W.a,{fontSize:"small"}))))))),r.a.createElement(v.a,{item:!0,md:8,sm:12,xs:12},r.a.createElement(y.a,{className:t.paper},r.a.createElement(_.a,{onClick:function(e){o((function(e){return!e}))}},r.a.createElement(q.a,{component:"img",alt:"card image failed to load",height:"100%",image:"/dummy-profolio-website"+e.project.tileTile.gif})))),r.a.createElement(v.a,{item:!0,md:12},r.a.createElement(U.a,{className:t.buttonGroup,size:"small","aria-label":"small outlined button group"},e.project.tileTile.tags.map((function(e,a){return r.a.createElement("div",null,0===a?r.a.createElement("span",null,"Tech tags: "):null,r.a.createElement(J.a,{className:t.tagButton,key:a},e))}))))))),e.renderHR&&r.a.createElement("hr",null))},Q=a(4),V=a(167),Y=a(157),X=a(158),Z=Object(Q.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(V.a),ee=Object(Q.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(Y.a),te=Object(Q.a)((function(e){return{root:{padding:e.spacing(2)}}}))(X.a);function ae(){var e=r.a.useState("panel1"),t=Object(f.a)(e,2),a=t[0],n=t[1],l=function(e){return function(t,a){n(!!a&&e)}};return r.a.createElement("div",null,r.a.createElement("p",null,"Worked in an agile devops team as a systems developer, hands-on automation experience with PowerShell and C#"),r.a.createElement(Z,{square:!0,expanded:"panel1"===a,onChange:l("panel1")},r.a.createElement(ee,{"aria-controls":"panel1d-content",id:"panel1d-header"},r.a.createElement(w.a,null,r.a.createElement("li",null,"Researched, built an MVP, and setup production version of the microservices architecture for our team"))),r.a.createElement(te,null,r.a.createElement(w.a,null,"Worked alongside other teammates to analyze various microservices architectural options. Build a minimum viable product using Azure Automation Runbooks and Azure Cloud Function App to meet the company's hybrid infrastructure requirements. Setup production pipeline from Azure DevOps to automate build and release pipeline for our production setup, including setting up automated Postman API testing."))),r.a.createElement(Z,{square:!0,expanded:"panel2"===a,onChange:l("panel2")},r.a.createElement(ee,{"aria-controls":"panel2d-content",id:"panel2d-header"},r.a.createElement(w.a,null,r.a.createElement("li",null,"Built an automated service uptime tracking script"))),r.a.createElement(te,null,r.a.createElement(w.a,null,"Built an automation script using C# and Selenium to track uptime of a company site. Script checks for performance degradation and sends alert via SMTP to team members. Logs each instance to help track potential problems using log4net"))),r.a.createElement(Z,{square:!0,expanded:"panel3"===a,onChange:l("panel3")},r.a.createElement(ee,{"aria-controls":"panel3d-content",id:"panel3d-header"},r.a.createElement(w.a,null,r.a.createElement("li",null,"Worked with Microsoft Graph API to automate InTune security alerts"))),r.a.createElement(te,null,r.a.createElement(w.a,null,"Used ",r.a.createElement("a",{target:"_blank",href:"https://github.com/microsoft/Intune-PowerShell-SDK"},"Intune PowerShell SDK")," to work with Intune's Graph API to automate client communications about security alerts. Script filters clients based on provided OS version criteria and automatically alerts users about potential security vulnerabilities"))))}var ne=Object(A.a)((function(e){return{container:{backgroundColor:"rgba(238,238,238,0.2)"}}}));var re=function(e){var t=M.project,a=ne();return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{className:a.container},r.a.createElement(v.a,{justify:"space-around",container:!0,direction:"rows",alignItems:"flex-start"},r.a.createElement(v.a,{item:!0,md:10,sm:12},r.a.createElement(w.a,{variant:"h3",gutterBottom:!0},r.a.createElement(k.a,{paddingTop:"50px",fontWeight:"fontWeightLight"},"Work Experience"))),r.a.createElement(v.a,{item:!0,md:10,sm:12},r.a.createElement("h3",null,"Systems Developer (co-op) - Healthcare of Ontario Pension Plan")),r.a.createElement(v.a,{item:!0,md:10,sm:12},r.a.createElement(ae,null))),r.a.createElement(v.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(v.a,{item:!0,md:12},r.a.createElement(w.a,{variant:"h3",gutterBottom:!0},r.a.createElement(k.a,{paddingTop:"50px",paddingBottom:"20px",fontWeight:"fontWeightLight"},"Cool things that I've built recently..."))),r.a.createElement(v.a,{item:!0,md:10},t.map((function(e,a){return t.length===a?r.a.createElement($,{key:a,project:e,renderHR:!1}):r.a.createElement($,{key:a,project:e,renderHR:!0})}))))))},le=a(75),oe=a.n(le),ie=a(77),ce=a.n(ie),me=a(76),se=a.n(me),ue=(a(104),Object(A.a)((function(e){return{icon:{},grid:{backgroundColor:"#8BC6EC",backgroundImage:"linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",height:80,padding:10,boxShadow:"0 3px 5px 2px rgba(139, 198, 236, .8)"},gridItem:{textAlign:"center"},footerGrid:{height:"10vh"},para:{backgroundColor:"#8BC6EC"}}})));function de(){var e=ue();return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{container:!0,spacing:0,className:e.grid,justify:"center",alignItems:"baseline",wrap:"wrap"},r.a.createElement(v.a,{item:!0},r.a.createElement("p",null,"follow me on: ")),r.a.createElement(v.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement("a",{href:"https://github.com/Abdul-Sen"}," ",r.a.createElement(T.a,{variant:"round",size:"small",color:"primary"},r.a.createElement(oe.a,null)))),r.a.createElement(v.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement("a",{href:"https://www.linkedin.com/in/abdul-r/"},r.a.createElement(T.a,{variant:"round",size:"small",color:"primary"},r.a.createElement(se.a,null)))),r.a.createElement(v.a,{item:!0,md:1,sm:1,xs:2,className:e.gridItem},r.a.createElement("a",{href:"https://twitter.com/AbdulRe47817062"},r.a.createElement(T.a,{variant:"round",size:"small",color:"primary"},r.a.createElement(ce.a,null))))))}var pe=a(160),ge=a(161),he=a(112),Ee="/",be="/projects",fe="/contact",xe=a(33),ve=a(110),ye=a(61);function je(){return r.a.createElement(ve.a,{"aria-label":"delete"},r.a.createElement(ye.a,null,r.a.createElement("path",{d:"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"})))}function we(e){return r.a.createElement(n.Fragment,null,r.a.createElement(xe.b,{to:Ee},"desktop"===e.display?r.a.createElement(je,null):r.a.createElement(xe.b,{to:Ee},r.a.createElement(J.a,null,"Home"))),r.a.createElement(k.a,{width:"2em"}),r.a.createElement(xe.b,{to:be},r.a.createElement(J.a,null,"Work/Projects")),r.a.createElement(k.a,{width:"2em"}),r.a.createElement(xe.b,{to:fe},r.a.createElement(J.a,null,"Contact")))}var ke=a(166),Se=a(159),Oe=a(79),Ce=a.n(Oe),Ie=Object(A.a)({list:{width:240},menuIcon:{padding:"10px"}});function Te(){var e,t=Ie(),a=r.a.useState({left:!1}),n=Object(f.a)(a,2),l=n[0],o=n[1],i=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(Object(h.a)({},l,Object(g.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(J.a,{onClick:i("left",!0)},r.a.createElement(Ce.a,{className:t.menuIcon})),r.a.createElement(ke.a,{open:l.left,onClose:i("left",!1)},(e="left",r.a.createElement("div",{className:t.list,role:"presentation",onClick:i(e,!1),onKeyDown:i(e,!1)},r.a.createElement(we,{display:"mobile"}),r.a.createElement(Se.a,null)))))}var Ae=Object(he.a)((function(e){return{}}));function Ne(){Ae();var e=Object(pe.a)("(min-width:600px)");return r.a.createElement(ge.a,null,r.a.createElement(k.a,{display:"flex",justifyContent:"flex-start",m:0,alignItems:"center"},e?r.a.createElement(we,{display:"desktop"}):r.a.createElement(Te,null)))}var We=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ne,null),r.a.createElement(k.a,{height:"40px"}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(d.a,{exact:!0,path:"/Projects",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(d.a,{exact:!0,path:"/Contact",render:function(){return r.a.createElement(H,null)}}),r.a.createElement(d.a,{exact:!0,path:"/About",render:function(){return r.a.createElement(p,null)}}),r.a.createElement(d.a,{render:function(){return r.a.createElement("h1",null,"Not Found")}})),r.a.createElement(de,null))}}]),t}(r.a.Component);o.a.render(r.a.createElement(xe.a,{basename:"/dummy-profolio-website"},r.a.createElement(We,null)),document.getElementById("root"))},72:function(e,t,a){e.exports=a.p+"static/media/Coding.4ef40d95.png"},73:function(e,t,a){e.exports=a.p+"static/media/Coding2.89b1fd79.png"},74:function(e){e.exports=JSON.parse('{"project":[{"tileTile":{"gif":"/images/recipeApp.gif","title":"Recipe Web App","projectLink":"https://github.com/Abdul-Sen/Recipe-application","demoLink":"https://vast-ravine-81065.herokuapp.com/","description":"Hungry and don\'t know what to cook? Fear not! This app will help you find random recipes and through the power of CRUD, you can add your personal touch to the recipes. This app was build to help me understand good vs bad RESTful API desgin, and to work with cool APIs in the process.","tags":["nodeJs","bootstrap 4.0","handlebars","mongoDB","PostgreSQL"]}},{"tileTile":{"gif":"/images/web322.gif","projectLink":"https://github.com/Abdul-Sen/Employee-Management-System","demoLink":"https://mysterious-fjord-83697.herokuapp.com/","title":"Employee Management CRUD app","description":"Term project for WEB322- Server-side w/ NodeJS. This app is hosted on Heroku free tier so it will take a few seconds to boot up.","tags":["nodeJs","bootstrap 4.0","handlebars","mongoDB","PostgreSQL"]}},{"tileTile":{"gif":"/images/profolioSite.gif","projectLink":"https://github.com/Abdul-Sen/dummy-profolio-website","demoLink":"https://abdul-sen.github.io/dummy-profolio-website/","title":"This site!","description":"So why am I not using any one of the many readily available static profolio templates? To practice react ofcourse! This project allowed me to work with the new Hooks API for react.","tags":["react","material UI","Google Cloud Functions","Github Pages"]}}]}')},92:function(e,t,a){e.exports=a(107)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.aaa8e1ac.chunk.js.map