(this["webpackJsonpavl-ui"]=this["webpackJsonpavl-ui"]||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a.n(c),l=a(14),s=(a(39),a(6)),o=(a(40),a(16)),u=a.n(o),m=a(8),d=a(9),h=a(11),f=a(10),p=a(12),b=a(30),g=a.n(b).a.create({baseURL:"http://thesuperbrain.org/api",timeout:1e3}),v=(a(59),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Restaurant Search"),r.a.createElement("input",{type:"text",onChange:this.onInputChange}))))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],searchedData:[]},a.getCSVData=function(){var e,t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(g.get("/getCSVData"));case 2:e=n.sent,t=e.data,a.setState({data:t}),a.setState({searchedData:t});case 6:case"end":return n.stop()}}))},a.onTermSubmit=function(e){if(""!==e){var t=a.state.data.filter((function(t){if(t[Object.keys(t)[0]].indexOf(e)>-1)return t}));a.setState({searchedData:t})}else a.setState({searchedData:a.state.data})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getCSVData()}},{key:"renderList",value:function(){var e=this;return console.log("called",this.state.searchedData),this.state.searchedData.map((function(t,a){var n=t[Object.keys(t)[0]],c=t[Object.keys(t)[1]];return e.filterData(c)&&r.a.createElement("tr",{key:a},r.a.createElement("td",{"data-label":"Name"},n),r.a.createElement("td",{"data-label":"Time"},c))}))}},{key:"filterData",value:function(e){var t=this,a=(new Date).getDay(),n=(new Date).getHours().toString()+(new Date).getMinutes().toString(),r="",c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return""!==(r+=e.split("/").filter((function(e){if(e.indexOf(c[a])>-1){var r=e.split(" "),i=t.convertTimeInHrs("".concat(r[r.indexOf("am")-1]," AM")),l=t.convertTimeInHrs("".concat(r[r.indexOf("pm")-1]," PM"));if(i&&l&&i<=n&&n<=l)return e}})))}},{key:"convertTimeInHrs",value:function(e){var t=e.indexOf(":")>-1?Number(e.split(":")[0]):Number(e.split(" ")[0]),a=e.indexOf(":")>-1?Number(e.match(/:(\d+)/)[1]):0,n=e.match(/\s(.*)$/)[1];"PM"===n&&t<12&&(t+=12),"AM"===n&&12==t&&(t-=12);var r=t.toString(),c=a.toString();return t<10&&(r="0"+r),a<10&&(c="0"+c),r+c}},{key:"render",value:function(){return this.state.data&&r.a.createElement("div",{className:"ui container ui segment margin-top"},r.a.createElement(v,{onFormSubmit:this.onTermSubmit}),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("h2",{class:"ui header"},"List of Open Restaurant"))),r.a.createElement("table",{className:"ui celled table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Restaurant Name"),r.a.createElement("th",null,"Time"))),r.a.createElement("tbody",null,this.renderList())))}}]),t}(n.Component),O=a(31),S=a.n(O),y=(a(60),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a.responseGoogle=function(e){e.w3.U3&&a.setState({redirect:!0})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(s.a,{to:"/home"}):r.a.createElement("div",{class:"ui segment raised padded text container segment top-gap"},r.a.createElement("h1",{class:"ui header"},"Please login using google credentials"),r.a.createElement(S.a,{clientId:"398789350053-ic1gl83lsukfbsnna2cfeartp56iqq3a.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}))}}]),t}(n.Component));var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:y}),r.a.createElement(s.b,{exact:!0,path:"/home",component:E}))))};i.a.render(r.a.createElement(l.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.61847859.chunk.js.map