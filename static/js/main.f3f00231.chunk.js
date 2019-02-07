(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(t,e,n){t.exports=n(285)},144:function(t,e,n){},146:function(t,e,n){},285:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(64),s=n.n(c),r=(n(144),n(21)),i=n(22),l=n(24),u=n(23),d=n(25),p=(n(146),n(292)),h=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){console.log("TOP MOUNT",this.props.coords)}},{key:"componentDidUpdate",value:function(){console.log("TOP UPDATED",this.state)}},{key:"componentWillReceiveProps",value:function(t){console.log("NEW PROPS BRO, TOP",t),this.setState({coords:t.coords})}},{key:"render",value:function(){var t,e;return console.log("TOP RENDER",this.state),this.state.coords?(t="".concat(this.state.coords.longitude),e="".concat(this.state.coords.latitude,", ")):(t="LOADING",e="LOADING, "),a.a.createElement("h1",null,"ISS POSITION: ",e," ",t)}}]),e}(o.Component),m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){console.log("BODY MOUNT",this.props.coords),this.setState({current:window.L.map("mapid")})}},{key:"componentDidUpdate",value:function(){console.log("BODY UPDATE",this.props.coords)}},{key:"componentWillReceiveProps",value:function(t){console.log("NEW PROPS BRO",t),this.setState({coords:t.coords}),this.state.coords&&this.mapRender()}},{key:"mapRender",value:function(){this.state.current.setView([parseInt(this.state.coords.latitude),parseInt(this.state.coords.longitude)],3),this.state.current.scrollWheelZoom.disable(),this.state.current.dragging.disable(),this.state.current.removeControl(this.state.current.zoomControl),window.L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.state.current),window.L.marker([parseInt(this.state.coords.latitude),parseInt(this.state.coords.longitude)]).addTo(this.state.current)}},{key:"render",value:function(){return a.a.createElement("div",{id:"mapid"})}}]),e}(o.Component),g=n(69),O=n.n(g),f=n(291),v=n(293),b=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).getDay=function(t,e){return O.a.get("https://limitless-reaches-72958.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=".concat(t,"&lon=").concat(e)).then(function(t){var e=t.data.response[0].risetime,o=new Date(1e3*e),a=o.getDate(),c=o.getMonth()+1,s=o.getFullYear(),r=o.getHours(),i=o.getMinutes(),l=o.getSeconds(),u="".concat(a,"/").concat(c,"/").concat(s),d="".concat(r,":").concat(i,":").concat(l);n.setState({rend:{date:u,time:d,city:n.state.search}}),console.log(n.state)}).catch(function(t){console.log("ERROR",t)})},n.handleChange=function(t){t.preventDefault(),console.log(t.target.value);var e=t.target.value;n.setState({search:e})},n.subClick=function(t){t.preventDefault(),console.log("CLICK",t.target.value);var e=n.state.search;n.getCoords(e)},n.state={},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"getCoords",value:function(t){var e=this;return O.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(t,".json?access_token=pk.eyJ1IjoicmFnbGFrcyIsImEiOiJjanJzYWR5c2gyODdiNDltdXJpMTdpaXJiIn0.V3oelv81YX6BtLqbeO1SZg")).then(function(t){console.log("NO EDITS PLACE",t.data);var n=t.data.features[0].center;console.log("RESULT FROM MAPBOX",n),e.getDay(n[1],n[0])})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f.a,{type:"text",placeholder:"NAME YOUR CITY",onChange:this.handleChange},a.a.createElement("input",null),a.a.createElement(v.a,{type:"submit",onClick:this.subClick},"Search")),a.a.createElement("div",null,a.a.createElement(function(t){return t.disp?a.a.createElement("h1",{style:{color:"red",textTransform:"uppercase"}},"THE ISS WILL FLY OVER ",t.disp.city," ON: ",t.disp.date,", AT ",t.disp.time):a.a.createElement("span",null)},{disp:this.state.rend})))}}]),e}(o.Component),y=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval(function(){t.getIss()},5e3)}},{key:"getIss",value:function(){var t=this;return O.a.get("https://limitless-reaches-72958.herokuapp.com/http://api.open-notify.org/iss-now.json").then(function(e){console.log(e.data),t.setState({coords:e.data.iss_position})})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidUpdate",value:function(){console.log("COMPONENT UPDATED:",this.state)}},{key:"render",value:function(){return a.a.createElement(p.a,{textAlign:"center"},a.a.createElement(h,{coords:this.state.coords}),a.a.createElement(m,{coords:this.state.coords}),a.a.createElement("br",null),a.a.createElement(b,null))}}]),e}(o.Component),E=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement(y,null)}}]),e}(o.Component);s.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[139,2,1]]]);
//# sourceMappingURL=main.f3f00231.chunk.js.map