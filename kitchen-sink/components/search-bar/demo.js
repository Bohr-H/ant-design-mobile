webpackJsonp([24,141],{6:function(n,a,s){"use strict";s(14),s(13),s(12)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(15),p=t(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,p["default"])(n)}},12:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=s(11);t(e)},13:function(n,a){},14:function(n,a){},15:function(n,a,s){n.exports={"default":s(16),__esModule:!0}},16:function(n,a,s){s(30),s(18),n.exports=s(20).Array.from},17:function(n,a,s){"use strict";var t=s(25),e=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},18:function(n,a,s){"use strict";var t=s(28),e=s(22),p=s(26),o=s(34),c=s(33),l=s(31),u=s(17),i=s(32);e(e.S+e.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),f="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,g=void 0!==h,m=0,v=i(k);if(g&&(h=t(h,d>2?arguments[2]:void 0,2)),void 0==v||f==Array&&c(v))for(a=l(k.length),s=new f(a);a>m;m++)u(s,m,g?h(k[m],m):k[m]);else for(r=v.call(k),s=new f;!(e=r.next()).done;m++)u(s,m,g?o(r,h,[e.value,m],!0):e.value);return s.length=m,s}})},23:function(n,a,s){"use strict";s(36)},27:function(n,a,s){"use strict";s(6),s(37)},36:function(n,a){},37:function(n,a){},42:function(n,a,s){"use strict";s(6),s(44)},43:function(n,a,s){"use strict";s(6),s(23),s(50)},44:function(n,a){},50:function(n,a){},51:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n,a,s,t){var e={};if(a&&a.antLocale&&a.antLocale[s])e=a.antLocale[s];else{var p=t();e=p["default"]||p}var o=(0,c["default"])({},e);return n.locale&&(o=(0,c["default"])({},o,n.locale),n.locale.lang&&(o.lang=(0,c["default"])({},e.lang,n.locale.lang))),o}function p(n){var a=n.antLocale&&n.antLocale.locale;return n.antLocale&&n.antLocale.exist&&!a?"zh-cn":a}Object.defineProperty(a,"__esModule",{value:!0});var o=s(2),c=t(o);a.getComponentLocale=e,a.getLocaleCode=p},79:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a["default"]},237:function(n,a){"use strict";function s(){}Object.defineProperty(a,"__esModule",{value:!0});a.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:s,onChange:s,onFocus:s,onBlur:s,onClear:s,showCancelButton:!1,disabled:!1}},238:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(10),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),f=t(k),d=s(1),h=t(d),g=s(7),m=t(g),v=s(237),y=s(79),b=t(y),C=s(49),B=t(C),w=s(51),S=function(n){function a(s){(0,u["default"])(this,a);var t=(0,r["default"])(this,n.call(this,s));t.onSubmit=function(n){n.preventDefault(),t.props.onSubmit&&t.props.onSubmit(t.state.value),t.inputRef.blur()},t.onChange=function(n){t.state.focus||t.setState({focus:!0});var a=n.target.value;"value"in t.props||t.setState({value:a}),t.props.onChange&&t.props.onChange(a)},t.onFocus=function(){t.setState({focus:!0}),t.firstFocus=!0,t.props.onFocus&&t.props.onFocus(),"input"===document.activeElement.tagName.toLowerCase()&&(t.scrollIntoViewTimeout=setTimeout(function(){try{document.activeElement.scrollIntoViewIfNeeded()}catch(n){}},100))},t.onBlur=function(){t.onBlurTimeout=setTimeout(function(){t.blurFromOnClear||document.activeElement!==t.inputRef&&t.setState({focus:!1}),t.blurFromOnClear=!1},50),t.props.onBlur&&t.props.onBlur()},t.onClear=function(){t.doClear()},t.doClear=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.blurFromOnClear=n,"value"in t.props||t.setState({value:""}),t.props.onClear&&t.props.onClear(""),t.props.onChange&&t.props.onChange(""),n&&t.focus()},t.onCancel=function(){t.props.onCancel?t.props.onCancel(t.state.value):t.doClear(!1)},t.focus=function(){t.inputRef.focus()};var e=void 0;return e="value"in s?s.value||"":"defaultValue"in s?s.defaultValue:"",t.state={value:e,focus:!1},t}return(0,f["default"])(a,n),a.prototype.componentDidMount=function(){var n=window.getComputedStyle(this.rightBtnRef);this.rightBtnInitMarginleft=n["margin-left"],this.componentDidUpdate()},a.prototype.componentDidUpdate=function(){var n=this.syntheticPhContainerRef.getBoundingClientRect().width;this.inputContainerRef.className.indexOf(this.props.prefixCls+"-start")>-1?(this.syntheticPhRef.style.width=Math.ceil(n)+"px",this.props.showCancelButton||(this.rightBtnRef.style.marginRight=0)):(this.syntheticPhRef.style.width="100%",this.props.showCancelButton||(this.rightBtnRef.style.marginRight="-"+(this.rightBtnRef.offsetWidth+parseInt(this.rightBtnInitMarginleft,10))+"px"))},a.prototype.componentWillReceiveProps=function(n){"value"in n&&n.value!==this.state.value&&this.setState({value:n.value})},a.prototype.componentWillUnmount=function(){this.scrollIntoViewTimeout&&(clearTimeout(this.scrollIntoViewTimeout),this.scrollIntoViewTimeout=null),this.onBlurTimeout&&(clearTimeout(this.onBlurTimeout),this.onBlurTimeout=null)},a.prototype.render=function(){var n,a=this,t=this.props,e=t.prefixCls,o=t.showCancelButton,l=t.disabled,u=t.placeholder,i=t.className,r=t.style,k=t.maxLength,f=(0,w.getComponentLocale)(this.props,this.context,"SearchBar",function(){return s(239)}),d=f.cancelText,g=this.state,v=g.value,y=g.focus,C=(0,m["default"])(e,i,(0,c["default"])({},e+"-start",!!(y||v&&v.length>0))),S=(0,m["default"])(e+"-clear",(0,c["default"])({},e+"-clear-show",!!(y&&v&&v.length>0))),x=(0,m["default"])(e+"-cancel",(n={},(0,c["default"])(n,e+"-cancel-show",o||y||v&&v.length>0),(0,c["default"])(n,e+"-cancel-anim",this.firstFocus),n));return h["default"].createElement("form",{onSubmit:this.onSubmit,className:C,style:r,ref:function(n){return a.inputContainerRef=n},action:"#"},h["default"].createElement("div",{className:e+"-input"},h["default"].createElement("div",{className:e+"-synthetic-ph",ref:function(n){return a.syntheticPhRef=n}},h["default"].createElement("span",{className:e+"-synthetic-ph-container",ref:function(n){return a.syntheticPhContainerRef=n}},h["default"].createElement("i",{className:e+"-synthetic-ph-icon"}),h["default"].createElement("span",{className:e+"-synthetic-ph-placeholder",style:{visibility:u&&!v?"visible":"hidden"}},u))),h["default"].createElement("input",(0,p["default"])({type:"search",className:e+"-value",value:v,disabled:l,placeholder:u,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(n){return a.inputRef=n},maxLength:k},(0,b["default"])(this.props))),h["default"].createElement(B["default"],{activeClassName:e+"-clear-active"},h["default"].createElement("a",{onClick:this.onClear,className:S}))),h["default"].createElement("div",{className:x,onClick:this.onCancel,ref:function(n){return a.rightBtnRef=n}},this.props.cancelText||d))},a}(h["default"].Component);a["default"]=S,S.defaultProps=v.defaultProps,n.exports=a["default"]},239:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={cancelText:"\u53d6\u6d88"},n.exports=a["default"]},240:function(n,a,s){"use strict";s(6),s(245)},245:function(n,a){},682:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/search-bar/demo/basic.md",id:"components-search-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchBar<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SearchBarExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>autoFocusInst<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange<span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  clear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  handleClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>manualFocusInst<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>AutoFocus when enter page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ref <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>autoFocusInst <span class="token operator">=</span> ref<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Focus by operation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span>\n        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ref <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>manualFocusInst <span class="token operator">=</span> ref<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>click to focus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show cancel button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onSubmit\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onClear\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onFocus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onBlur\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onCancel\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showCancelButton</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var o=s(1),c=(s(1),s(43),s(64)),l=n(c),u=(s(27),s(41)),i=n(u),r=(s(240),s(238)),k=n(r),f=(s(42),s(65)),d=n(f),h=function(n){function a(){var s,p,o;t(this,a);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return s=p=e(this,n.call.apply(n,[this].concat(l))),p.state={value:"\u7f8e\u98df"},p.onChange=function(n){p.setState({value:n})},p.clear=function(){p.setState({value:""})},p.handleClick=function(){p.manualFocusInst.focus()},o=s,e(p,o)}return p(a,n),a.prototype.componentDidMount=function(){this.autoFocusInst.focus()},a.prototype.render=function(){var n=this;return o.createElement("div",null,o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"Normal")),o.createElement(k["default"],{placeholder:"Search",maxLength:8}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"AutoFocus when enter page")),o.createElement(k["default"],{placeholder:"\u81ea\u52a8\u83b7\u53d6\u5149\u6807",ref:function(a){return n.autoFocusInst=a}}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"Focus by operation")),o.createElement(k["default"],{placeholder:"\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807",ref:function(a){return n.manualFocusInst=a}}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement(l["default"],{onClick:this.handleClick},"click to focus")),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"Show cancel button")),o.createElement(k["default"],{value:this.state.value,placeholder:"Search",onSubmit:function(n){return console.log(n,"onSubmit")},onClear:function(n){return console.log(n,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0,onChange:this.onChange}))},a}(o.Component);return o.createElement(h,null)},style:".am-search {\n  border-bottom: 1px solid #ddd;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.am-search</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#ddd</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},765:function(n,a,s){n.exports={basic:s(682)}}});