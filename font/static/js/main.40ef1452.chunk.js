(this.webpackJsonpreader=this.webpackJsonpreader||[]).push([[0],{101:function(e,t,a){e.exports=a(164)},106:function(e,t,a){},107:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(28),r=a.n(l),c=(a(106),a(6)),i=a(5),s=a(8),m=a(7),h=a(9),u=(a(107),a(19),a(165)),d=a(3),p=a(29),g=a(42),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:{},userNameError:"",userName:"",password:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"usernameInputChange",value:function(e){this.setState({userName:e.target.value})}},{key:"passwordInputChange",value:function(e){this.setState({password:e.target.value})}},{key:"componentDidMount",value:function(){fetch("http://101.37.172.171:9000/login/info",{medod:"get"}).then((function(e){console.log(e.text())}))}},{key:"home",value:function(){this.props.history.push("/")}},{key:"login",value:function(){var e=this;fetch("http://101.37.172.171:9000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.userName,password:this.state.password})}).then((function(e){return e.json()})).then((function(t){"\u6210\u529f"==t.status&&(localStorage.setItem("token",t.token),console.log("\u767b\u5f55\u6210\u529f"),console.log(t.token),e.props.history.push("/"),window.location.reload()),console.log(t)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login-container"},o.a.createElement(g.a,{color:"#ff0000",type:"polygon",bg:!0}),o.a.createElement("form",null,o.a.createElement(u.a,{onChange:function(t){return e.usernameInputChange(t)},id:"username",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",type:"text",name:"username"}),this.state.userNameError,o.a.createElement(u.a,{onChange:function(t){return e.passwordInputChange(t)},style:{margin:"1vh 0 1vh 0"},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",name:"password",type:"password"})),o.a.createElement("button",{onClick:function(){return e.login()},style:{color:"white",height:"3vh",width:"40%",border:"none",backgroundColor:"green"}},"\u767b\u5f55"))}}]),t}(o.a.Component),b=a(33);function v(){return o.a.createElement("div",{className:"login-container"},o.a.createElement(g.a,Object(b.a)({color:"#ff0000",num:400,type:"lines",bg:!0},"color","white")),o.a.createElement("form",{action:"http://localhost:9000/register",method:"post"},o.a.createElement(u.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",type:"primary",name:"username"}),o.a.createElement(u.a,{style:{margin:"1vh 0 0 0"},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",name:"password",type:"primary"}),o.a.createElement(u.a,{style:{margin:"1vh 0 1vh 0"},placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1",name:"email",type:"email"}),o.a.createElement("button",{style:{height:"3vh",width:"40%",border:"none"},type:"submit"},"\u6ce8\u518c")))}var E=a(11),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{action:"http://localhost:9000/upload",encType:"multipart/form-data",method:"post",style:{width:"100%",height:"80vw",backgroundColor:"rgb(237,237,237)"}},o.a.createElement("div",{style:{margin:"0 auto",width:"95%",marginTop:"2vw",height:"50vw",backgroundColor:"#fff"}},o.a.createElement("div",{style:{float:"left",width:"100%",height:"8vw",backgroundColor:"rgb(248,248,248)"}},o.a.createElement("p",{style:{float:"left",fontSize:"1.9vw",fontWeight:"600",marginTop:"1vw",marginLeft:"1vw",color:"rgb(102,102,102)"}},"\u5206\u4eab\u4e66\u7c4d")),o.a.createElement("div",{style:{height:"80vw",width:"100%",backgroundColor:"#fff"}},o.a.createElement("input",{name:"bookname",type:"text",placeholder:" \u4e66\u7c4d\u540d\u79f0\uff1a",style:{border:"1px solid #0080ff",outline:"none",borderRadius:"1vw",marginLeft:"2vw",marginTop:"1vw",width:"40vw",height:"6vw"}}),o.a.createElement("br",null),o.a.createElement("select",{style:{width:"40vw",height:"6vw",marginLeft:"2vw",marginTop:"5vw"},name:"label",className:"select"},o.a.createElement("option",{selected:!0,value:"\u8d22\u7ecf"},"\u8d22\u7ecf"),o.a.createElement("option",{value:"\u6587\u5b66"},"\u6587\u5b66"),o.a.createElement("option",{value:"\u793e\u79d1"},"\u793e\u79d1"),o.a.createElement("option",{value:"\u5c11\u513f"},"\u5c11\u513f"),o.a.createElement("option",{value:"\u79d1\u6280"},"\u79d1\u6280")),o.a.createElement("br",null),o.a.createElement("input",{name:"shareLink",type:"text",placeholder:" \u8bf7\u8f93\u5165\u5206\u4eab\u94fe\u63a5\uff1a",style:{border:"1px solid #0080ff",outline:"none",borderRadius:"1vw",marginLeft:"2vw",marginTop:"5vw",width:"40vw",height:"6vw"}}),o.a.createElement("br",null),o.a.createElement("input",{name:"linkSecret",type:"text",placeholder:" \u8bf7\u8f93\u5165\u94fe\u63a5\u5bc6\u7801\uff1a",style:{border:"1px solid #0080ff",outline:"none",borderRadius:"1vw",marginLeft:"2vw",marginTop:"5vw",width:"40vw",height:"6vw"}}),o.a.createElement("br",null),o.a.createElement("input",{name:"detail",type:"text",placeholder:" \u4e66\u7684\u7b80\u4ecb\uff1a",style:{border:"1px solid #0080ff",outline:"none",borderRadius:"1vw",marginLeft:"2vw",marginTop:"5vw",width:"40vw",height:"6vw"}}),o.a.createElement("br",null),o.a.createElement("p",{style:{marginTop:"2vw",marginLeft:"2vw"}},"\u4e0a\u4f20\u5c01\u9762"),o.a.createElement("input",{name:"coverPic",type:"file",placeholder:" \u4e66\u7684\u7b80\u4ecb\uff1a",style:{outline:"none",borderRadius:"1vw",marginLeft:"2vw",marginTop:"1vw",width:"40vw",height:"6vw"}}),o.a.createElement("br",null),o.a.createElement("input",{hidden:!0,type:"text",name:"username",value:this.props.username}),o.a.createElement("input",{style:{backgroundColor:"#0080ff",color:"white",border:"none",marginTop:"1vw",width:"40vw",borderRadius:"1vw",height:"6vw",marginLeft:"2vw"},type:"submit"})))))}}]),t}(o.a.Component),w=Object(E.b)((function(e){return{username:e}}))(y),k=a(77),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:{},commit:"",commits:[],new:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://101.37.172.171:9000/getdetail?id=".concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t[0]})})),fetch("http://101.37.172.171:9000/getbookslist",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({new:t}),console.log(t)})),fetch("http://101.37.172.171:9000/commit/get?id=".concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({commits:t})}))}},{key:"commitChange",value:function(e){this.setState({commit:e.target.value})}},{key:"commitSubmit",value:function(){console.log("test"),fetch("http://101.37.172.171:9000/commit?bookId=".concat(this.props.match.params.id,"&username=").concat(this.props.username,"&commit=").concat(this.state.commit),{method:"get"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"mobile-detail",style:{float:"left",marginLeft:"5vw",borderRadius:"10px",textAlign:"center"}},o.a.createElement("div",{className:"detail-container",style:{borderRadius:"15px"}},o.a.createElement("div",{className:"detail-title"},o.a.createElement("h2",null,this.state.data.bookname)),o.a.createElement("img",{src:"http://101.37.172.171:9000/getbookslist/image?id=".concat(this.state.data.bookId).concat(this.state.data.extName)}),o.a.createElement("div",{style:{borderLeft:"5px solid yellow"}},o.a.createElement("h2",{style:{backgroundColor:"#515151",lineHeight:"30px",width:"100%"}},"\u4e66\u7c4d\u4ecb\u7ecd")),o.a.createElement("div",{style:{width:"55vw",margin:"0 auto",textAlign:"left"}},o.a.createElement("h3",{className:"book-detail"},this.state.data.detail)),o.a.createElement("div",{style:{borderLeft:"5px solid yellow"}},o.a.createElement("h2",{style:{backgroundColor:"#515151",width:"100%"}},"\u4e66\u7c4d\u4e0b\u8f7d")),o.a.createElement(k.a,{type:"primary",icon:"download",size:"large",onClick:function(){fetch("http://101.37.172.171:9000/markDownload?id=".concat(e.state.data.bookId,"&username=").concat(e.props.username,"&bookname=").concat(e.state.data.bookname),{method:"get"}),window.open(e.state.data.shareLink)}},"\u4e0b\u8f7d\u56fe\u4e66"),o.a.createElement("h3",{style:{paddingBottom:"30px"}},"\u5206\u4eab\u5bc6\u7801:",this.state.data.linkSecret)),o.a.createElement("div",{className:"detail-container"},o.a.createElement("div",{style:{borderLeft:"5px solid yellow"}},o.a.createElement("h2",{style:{backgroundColor:"#515151",width:"100%"}},"\u597d\u4e66\u63a8\u8350")),o.a.createElement("div",{style:{width:"100%",display:"block"}},o.a.createElement("img",{style:{width:"100px",height:"150px",marginLeft:"20px",float:"left"},src:"./imgs/1.jpg"}),o.a.createElement("img",{style:{width:"100px",height:"150px",marginLeft:"20px",float:"left"},src:"./imgs/2.jpg"}),o.a.createElement("img",{style:{width:"100px",height:"150px",marginLeft:"20px",float:"left"},src:"./imgs/3.jpg"}),o.a.createElement("img",{style:{width:"100px",height:"150px",marginLeft:"20px",float:"left"},src:"./imgs/4.jpg"}),o.a.createElement("img",{style:{width:"100px",height:"150px",marginLeft:"20px",float:"left"},src:"./imgs/5.jpg"})),o.a.createElement("div",null),o.a.createElement("br",null)),o.a.createElement("div",{className:"detail-container"},o.a.createElement("div",null,this.state.new.map((function(t){return o.a.createElement(d.b,{to:"/detail/".concat(t.bookId),onClick:function(){e.props.history.push("/detail/".concat(t.bookId)),window.location.reload()},style:{textAlign:"left"}},o.a.createElement("p",{style:{color:"black"}},t.bookname))})))),o.a.createElement("div",{className:"detail-container",style:{height:"500px",borderRadius:"15px"}},o.a.createElement("div",{className:"detail-title",palceHolder:"\u8bf4\u70b9\u4ec0\u4e48\u5427",style:{borderRadius:"15px"}},o.a.createElement("h2",null,"\u53d1\u8868\u6211\u7684\u8bc4\u8bba")),o.a.createElement("form",null,o.a.createElement("textarea",{style:{width:"90%"},name:"commit",onChange:function(t){return e.commitChange(t)}}),o.a.createElement("button",{style:{width:"100px",height:"40px",backgroundColor:"#ff5675",border:"none",borderRadius:"10px",color:"white",fontSize:"20px"},onClick:function(){return e.commitSubmit()}},"\u63d0\u4ea4")),o.a.createElement("div",Object(b.a)({style:{borderRadius:"10px"},className:"commit-container"},"style",{float:"left",marginLeft:"40px"}),this.state.commits.map((function(e){return o.a.createElement("div",{className:"commit-container"},o.a.createElement("span",{style:{fontSize:"15px",fontFamily:"\u9ed1\u4f53",textAlign:"left"}},"\u7528\u6237",e.username,":"),o.a.createElement("div",{style:{margin:"0 auto",paddingBottom:"10px",width:"200px",height:"30px",borderRadius:"10px",backgroundColor:"#019fde"}},o.a.createElement("span",{style:{color:"white",fontSize:"20px",lineHeight:"30px"}},e.detail)))})))))}}]),t}(o.a.Component),j=Object(E.b)((function(e){return{username:e}}))(x),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).showDetail=function(e){console.log(e.target.src);var t=e.target.src,n=t.slice(t.indexOf("=")+1,t.lastIndexOf("."));console.log(n),a.props.history.push("/detail/".concat(n))},a.state={new:[1,2]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://101.37.172.171:9000/getbookslist",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({new:t}),console.log(t)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"mobile-container"},o.a.createElement("div",{className:"shelf-container"},o.a.createElement("div",{className:"recently"},o.a.createElement("div",{className:"detail-title",style:{position:"relative"}},o.a.createElement("h2",{style:{marginLeft:"20px",color:"white"}}," \u6700\u65b0\u4e0a\u4f20 ")," ",o.a.createElement(k.a,{style:{position:"absolute",right:"10px",top:"12px"},type:"primary",href:"/#/upload"}," \u4e0a\u4f20 ")," "),o.a.createElement("div",{className:"shelf"}," ",this.state.new.map((function(t){return o.a.createElement("div",{className:"book",style:{position:"relative"}},o.a.createElement("img",{onClick:e.showDetail.bind(e),src:"http://101.37.172.171:9000/getbookslist/image?id=".concat(t.bookId).concat(t.extName)})," ",o.a.createElement("p",null," ",t.bookName," ")," ",o.a.createElement("div",{style:{position:"absolute",left:"5px",top:"5px"}}," ",o.a.createElement("a",{href:"http://localhost:3000/#/label/".concat(t.label),style:{fontSize:"20px",width:"300px",height:"30px",color:"white",backgroundColor:"black",opacity:"0.5"}}," ",t.label," ")))}))," ")," ")," ")," ")}}]),t}(o.a.Component),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id),fetch("http://101.37.172.171:9000/search?bookname=".concat(this.props.match.params.id),{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t}),console.log(e.state.data)}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;e==this.props||fetch("http://101.37.172.171:9000/search?bookname=".concat(this.props.match.params.id),{method:"get"}).then((function(e){return e.json()})).then((function(e){a.setState({data:e}),console.log(a.state.data)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"shelf-container"},o.a.createElement("div",{className:"recently"},o.a.createElement("div",{className:"detail-title"},o.a.createElement("h2",null,"\u641c\u7d22\u7ed3\u679c")),o.a.createElement("div",null,this.state.data.map((function(e){return o.a.createElement(d.b,{to:"/detail/".concat(e.bookId)},o.a.createElement("div",{className:"booklist"},o.a.createElement("div",{className:"booklist-cover"},o.a.createElement("img",{src:"http://101.37.172.171:9000/getbookslist/image?id=".concat(e.bookId).concat(e.extName)})),o.a.createElement("div",null,o.a.createElement("h1",{style:{paddingLeft:"10px",marginLeft:"10px"}},e.bookname))))})))))}}]),t}(o.a.Component),C=u.a.Search,S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:{}},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"deleteItem",value:function(){localStorage.removeItem("token"),window.location.reload()}}]),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.username)}},{key:"render",value:function(){var e=this;console.log(this.props.username);var t=this.props.username;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{height:"10vw",overflow:"hidden"}},o.a.createElement(d.b,{to:"/"},o.a.createElement("img",{style:{width:"100vw"},src:"./imgs/nav.jpg"}))),o.a.createElement("div",{className:"header"},o.a.createElement("ul",{className:"nav-label"},o.a.createElement(d.b,{to:"/"},o.a.createElement("a",null,o.a.createElement("li",null,"\u9996\u9875"))),o.a.createElement(d.b,{to:"/label/\u6587\u5b66"},o.a.createElement("a",null,o.a.createElement("li",null,"\u6587\u5b66"))),o.a.createElement(d.b,{to:"/label/\u793e\u79d1"},o.a.createElement("a",null,o.a.createElement("li",null,"\u793e\u79d1"))),o.a.createElement(d.b,{to:"/label/\u8d22\u7ecf"},o.a.createElement("a",null,o.a.createElement("li",null,"\u8d22\u7ecf"))),o.a.createElement(d.b,{to:"/label/\u5c11\u513f"},o.a.createElement("a",null,o.a.createElement("li",null,"\u5c11\u513f"))),o.a.createElement(d.b,{to:"/label/\u79d1\u6280"},o.a.createElement("a",null,o.a.createElement("li",null,"\u79d1\u6280")))),o.a.createElement(C,{style:{color:"white"},className:"search-input",placeholder:"\u641c\u7d22\u4f60\u8981\u7684\u4e66",size:"large",onSearch:function(t){e.props.history.push("/search/".concat(t))}}),o.a.createElement("div",{className:"login_register",style:{float:"right",paddingRight:"5px",width:"150px"}},"false"==this.props.username?o.a.createElement("div",null," ",o.a.createElement(d.b,{style:{color:"white"},to:"/login"},"\u767b\u5f55"),o.a.createElement("span",{style:{color:"grey",margin:"0 1vw 0 1vw"}},"|"),o.a.createElement(d.b,{style:{color:"white"},to:"/register"},"\u6ce8\u518c")):o.a.createElement("div",null,o.a.createElement(d.b,{to:"/my",style:{color:"white"}},t),"|",o.a.createElement("a",{style:{marginLeft:"5px",color:"white"},onClick:function(){e.deleteItem()}},"\u767b\u51fa")))))}}]),t}(o.a.Component),L=Object(E.b)((function(e){return{username:e}}))(S),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).showDetail=function(e){console.log(e.target.src);var t=e.target.src,n=t.slice(t.indexOf("=")+1,t.lastIndexOf("."));console.log(n),a.props.history.push("/detail/".concat(n))},a.state={data:[],label:"\u8d22\u7ecf"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;fetch("http://101.37.172.171:9000/getlabel?label=".concat(e.match.params.name),{method:"get"}).then((function(e){return e.json()})).then((function(e){t.setState({data:e}),console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.name);var t=this.props.match.params.name;this.setState({label:t}),fetch("http://101.37.172.171:9000/getlabel?label=".concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t}),console.log(t)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"label-container shelf-container"},o.a.createElement("div",{className:"recently"},o.a.createElement("div",{className:"detail-title"},o.a.createElement("h2",null,this.props.match.params.name)),o.a.createElement("div",{className:"shelf"},this.state.data.map((function(t){return o.a.createElement("div",{className:"book"},o.a.createElement("img",{onClick:e.showDetail.bind(e),src:"http://101.37.172.171:9000/getbookslist/image?id=".concat(t.bookId).concat(t.extName)}),o.a.createElement("p",null,t.bookname))})))))}}]),t}(o.a.Component),I=(a(163),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return o.a.createElement("div",{style:{height:"95vh",background:"#EAEDED",float:"left"}},o.a.createElement("div",{style:{height:"91vh",background:"#EAEDED",position:"absolute",marginLeft:"15vw",marginTop:"4vh",borderRadius:"15px 15px 7px 7px"}},o.a.createElement("div",{style:{width:"13vw",height:"20vh",backgroundColor:"#515151",float:"left",marginLeft:"0.4vw",borderRadius:"10px"}},o.a.createElement("h3",{style:{display:"block",position:"absolute",paddingLeft:"1vw",lineHeight:"20vh",fontSize:"17px",color:"white",margin:"0 auto"}},"\u6635\u79f0:",o.a.createElement(d.b,{style:{color:"white"}},this.props.username))),o.a.createElement("br",null),o.a.createElement("hr",{style:{position:"absolute",marginTop:"10vh"}}),o.a.createElement("div",{style:(e={width:"13vw",height:"63.7vh",backgroundColor:"#515151",opacity:1,position:"absolute",marginTop:"24vh",marginLeft:"0.4vw"},Object(b.a)(e,"height","400px"),Object(b.a)(e,"borderRadius","10px"),e)},o.a.createElement("ul",{className:"my"},o.a.createElement("li",null,o.a.createElement(d.b,{to:"/my/download/".concat(this.props.username)},o.a.createElement("a",null,"\u5df2\u4e0b\u8f7d\u7684\u4e66\u7c4d"))),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/my/upload/".concat(this.props.username)},o.a.createElement("a",null,"\u5df2\u4e0a\u4f20\u7684\u4e66\u7c4d")))))))}}]),t}(n.Component)),T=Object(E.b)((function(e){return{username:e}}))(I),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[1,2,3],username:"1234"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.username;console.log(t),fetch("http://localhost:9000/my/down?username=".concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(t){console.log(t),t&&e.setState({data:t}),console.log(e.state.data)}))}},{key:"render",value:function(){this.props.username;return o.a.createElement("div",{className:"download-container"},o.a.createElement("div",{className:"detail-title",style:{marginTop:"0"}},o.a.createElement("h2",null,"\u6211\u4e0b\u8f7d\u7684")),o.a.createElement("div",{className:"my-book"},this.state.data.map((function(e){return o.a.createElement(d.b,{to:"/detail/".concat(e.bookId)},o.a.createElement("a",{style:{display:"block",marginTop:"10px",fontSize:"20px",paddingLeft:"20px"}},e.bookname))}))))}}]),t}(o.a.Component),z=Object(E.b)((function(e){return{username:e}}))(R),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[1,2,3],username:"1234"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.username;console.log(t),fetch("http://101.37.172.171:9000/my/userList?username=".concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(t){console.log(t),t&&e.setState({data:t}),console.log(e.state.data)}))}},{key:"render",value:function(){this.props.username;return o.a.createElement("div",{className:"download-container"},o.a.createElement("div",{className:"detail-title",style:{marginTop:"0"}},o.a.createElement("h2",null,"\u6211\u4e0a\u4f20\u7684")),o.a.createElement("div",{className:"my-book"},this.state.data.map((function(e){return o.a.createElement(d.b,{to:"/detail/".concat(e.bookId)},o.a.createElement("a",{style:{display:"block",marginTop:"10px",fontSize:"20px",paddingLeft:"20px"}},e.bookname))}))))}}]),t}(o.a.Component),A=Object(E.b)((function(e){return{username:e}}))(M),B=function(){return o.a.createElement("div",{className:"download-container"},o.a.createElement("div",{className:"detail-title",style:{marginTop:"0"}},o.a.createElement("h2",null,"\u6b22\u8fce\u4f60\uff01")),o.a.createElement("h3",{style:{paddingLeft:"30px",paddingTop:"40px"}},"\u6b22\u8fce\u56de\u6765\uff01\u591a\u770b\u4e66\uff0c\u591a\u63d0\u5347\u81ea\u5df1\uff01\uff01"))},H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://101.37.172.171:9000/getbookslist",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t}),console.log(t)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"sideBar",style:{width:"25vw",float:"right",overflow:"hidden",marginRight:"5vw",marginTop:"30px"}},o.a.createElement("img",{style:{width:"25vw"},src:"./imgs/bar1.jpg"}),o.a.createElement("div",{className:"side-recent"},o.a.createElement("h2",null,"\u8fd1\u671f\u6587\u7ae0"),this.state.data.map((function(t){return o.a.createElement("div",{style:{height:"45px",borderBottom:"0.01px solid #DDDDDD"}},o.a.createElement("a",{onClick:function(){e.props.history.push("/detail/".concat(t.bookId)),window.location.reload()}},o.a.createElement("span",{style:{lineHeight:"45px"}},t.bookname)))}))),o.a.createElement("img",{style:{width:"25vw",marginTop:"20px"},src:"./imgs/bar2.jpg"}))}}]),t}(o.a.Component),W=(u.a.Search,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).searching=function(){},a.state={apiResponse:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.loginSuccess;console.log(localStorage.getItem("token"));var t=localStorage.getItem("token");console.log(t,"token"),t&&fetch("http://101.37.172.171:9000/login/token",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"token=".concat(t)}).then((function(e){return e.text()})).then((function(a){console.log(a);e(a,t)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"all"},o.a.createElement(d.a,null,o.a.createElement(p.a,{path:"/",component:L}),o.a.createElement(p.a,{exact:!0,path:"/",component:O}),o.a.createElement(p.a,{path:"/register",component:v}),o.a.createElement(p.a,{path:"/login",component:f}),o.a.createElement(p.a,{path:"/upload",component:w}),o.a.createElement(p.a,{path:"/detail/:id",component:j}),o.a.createElement(p.a,{path:"/search/:id",component:N}),o.a.createElement(p.a,{path:"/my",component:T}),o.a.createElement(p.a,{exact:!0,path:"/my",component:B}),o.a.createElement(p.a,{path:"/my/download/:username",component:z}),o.a.createElement(p.a,{path:"/my/upload/:username",component:A}),o.a.createElement(p.a,{path:"/label/:name",component:D}),o.a.createElement(p.a,{exact:!0,path:"/",component:H}),o.a.createElement(p.a,{path:"/detail",component:H}),o.a.createElement(p.a,{path:"/label",component:H})))}}]),t}(o.a.Component)),J=a(54);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=Object(J.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"false",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"\u767b\u5f55\u6210\u529f":return t.username;default:return e}}));var F=Object(E.b)((function(e){return{username:e}}),(function(e){return{loginSuccess:function(t,a){e({type:"\u767b\u5f55\u6210\u529f",token:a,username:t})}}}))(W);r.a.render(o.a.createElement(E.a,{store:P},o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},19:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.40ef1452.chunk.js.map