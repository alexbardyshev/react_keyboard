(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),r=s(4),c=s(5),i=s(7),o=s(6),p=s(1),d=s(0),y=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handleKeyPress=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("p",{className:"App__message",children:[""===this.state.pressedKey&&"Nothing was pressed yet"," "===this.state.pressedKey&&"The last pressed key is [Space]",""!==this.state.pressedKey&&" "!==this.state.pressedKey&&"The last pressed key is [".concat(e,"]")]})})}}]),s}(p.Component);s(13);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3acfdf07.chunk.js.map