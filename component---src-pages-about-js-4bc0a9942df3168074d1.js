(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+NU8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,n){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(n):e.style[n]},i=function(e){return r(e,"overflow")+r(e,"overflow-y")+r(e,"overflow-x")};n.default=function(e){if(!(e instanceof HTMLElement))return window;for(var n=e;n&&n!==document.body&&n!==document.documentElement&&n.parentNode;){if(/(scroll|auto)/.test(i(n)))return n;n=n.parentNode}return window}},"9/5/":function(e,n,t){(function(n){var t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),c=Object.prototype.toString,d=Math.max,s=Math.min,p=function(){return f.Date.now()};function m(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var l=i.test(e);return l||a.test(e)?o(e.slice(2),l?2:8):r.test(e)?NaN:+e}e.exports=function(e,n,t){var r,i,a,o,l,u,f=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(n){var t=r,a=i;return r=i=void 0,f=n,o=e.apply(a,t)}function y(e){return f=e,l=setTimeout(w,n),c?x(e):o}function g(e){var t=e-u;return void 0===u||t>=n||t<0||v&&e-f>=a}function w(){var e=p();if(g(e))return E(e);l=setTimeout(w,function(e){var t=n-(e-u);return v?s(t,a-(e-f)):t}(e))}function E(e){return l=void 0,b&&r?x(e):(r=i=void 0,o)}function j(){var e=p(),t=g(e);if(r=arguments,i=this,u=e,t){if(void 0===l)return y(u);if(v)return l=setTimeout(w,n),x(u)}return void 0===l&&(l=setTimeout(w,n)),o}return n=h(n)||0,m(t)&&(c=!!t.leading,a=(v="maxWait"in t)?d(h(t.maxWait)||0,n):a,b="trailing"in t?!!t.trailing:b),j.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=u=i=l=void 0},j.flush=function(){return void 0===l?o:E(p())},j}}).call(this,t("yLpj"))},AJuI:function(e,n,t){e.exports=t.p+"static/real2-d48640ccacedc2b9f94e88d82111afdd.png"},HVci:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=e.getBoundingClientRect();return{top:n.top+window.pageYOffset,left:n.left+window.pageXOffset}}},JeI0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t("q1tI"),a=p(i),o=p(t("17x9")),l=t("i8i4"),u=t("UxbX"),f=p(t("9/5/")),c=p(t("hKI/")),d=p(t("+NU8")),s=p(t("pxCl"));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.lazyLoadHandler=t.lazyLoadHandler.bind(t),e.throttle>0&&(e.debounce?t.lazyLoadHandler=(0,f.default)(t.lazyLoadHandler,e.throttle):t.lazyLoadHandler=(0,c.default)(t.lazyLoadHandler,e.throttle)),t.state={visible:!1},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"componentDidMount",value:function(){this._mounted=!0;var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),(0,u.add)(window,"resize",this.lazyLoadHandler),(0,u.add)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.add)(window,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,n){return n.visible}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return(0,d.default)((0,l.findDOMNode)(this))}},{key:"getOffset",value:function(){var e=this.props,n=e.offset,t=e.offsetVertical,r=e.offsetHorizontal,i=e.offsetTop,a=e.offsetBottom,o=e.offsetLeft,l=e.offsetRight,u=e.threshold||n,f=t||u,c=r||u;return{top:i||f,bottom:a||f,left:o||c,right:l||c}}},{key:"lazyLoadHandler",value:function(){if(this._mounted){var e=this.getOffset(),n=(0,l.findDOMNode)(this),t=this.getEventNode();if((0,s.default)(n,t,e)){var r=this.props.onContentVisible;this.setState({visible:!0},(function(){r&&r()})),this.detachListeners()}}}},{key:"detachListeners",value:function(){var e=this.getEventNode();(0,u.remove)(window,"resize",this.lazyLoadHandler),(0,u.remove)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.remove)(window,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.className,r=e.height,o=e.width,l=this.state.visible,u={height:r,width:o},f="LazyLoad"+(l?" is-visible":"")+(t?" "+t:"");return a.default.createElement(this.props.elementType,{className:f,style:u},l&&i.Children.only(n))}}]),n}(i.Component);n.default=m,m.propTypes={children:o.default.node.isRequired,className:o.default.string,debounce:o.default.bool,elementType:o.default.string,height:o.default.oneOfType([o.default.string,o.default.number]),offset:o.default.number,offsetBottom:o.default.number,offsetHorizontal:o.default.number,offsetLeft:o.default.number,offsetRight:o.default.number,offsetTop:o.default.number,offsetVertical:o.default.number,threshold:o.default.number,throttle:o.default.number,width:o.default.oneOfType([o.default.string,o.default.number]),onContentVisible:o.default.func},m.defaultProps={elementType:"div",debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250}},UxbX:function(e,n,t){var r,i;void 0===(i="function"==typeof(r=function(){function e(e,n){return function(t,r,i,a){t[e]?t[e](r,i,a):t[n]&&t[n]("on"+r,i)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})?r.call(n,t,n,e):r)||(e.exports=i)},"dF/s":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),i=t.n(r),a=(t("uSmJ"),t("AJuI")),o=t.n(a),l=t("MUpH"),u=t("vOnD"),f=t("JeI0"),c=t.n(f);function d(){var e=Object(l.a)(["\nheight: 16px;\nwidth: 16px;\nborder-radius: 5px;\nbackground-color: #FADD08;\nmargin-right: 5px;\n"]);return d=function(){return e},e}function s(){var e=Object(l.a)(["\npadding-top: 25px;\n// padding-bottom: 20px;\ndisplay: inline-flex;\nwidth: 100%;\njustify-content: center;\n@media screen and (max-width: 340px) {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n> span {\n    display: inline-flex;\n    padding: 0px 10px;\n    @media screen and (max-width: 340px) {\n        flex: 1 1 100%;\n    }\n}\n\n > span > div {\n    margin-right: 5px;\n}\n\n> span:nth-of-type(1){\n    @media screen and (max-width: 340px) {\n        padding-bottom: 10px;;\n    }\n}"]);return s=function(){return e},e}function p(){var e=Object(l.a)(['\nflex: 0 1 50%;\ncolor: white;\nalign-self: center;\n// padding-bottom: 40px;\nfont-weight: bold;\n@media screen and (max-width: 760px) {\n    flex: 1 1 100%;\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n@media screen and (max-width: 600px) {\n    flex: 1 1 100%;\n    padding-top: 40px;\n    padding-bottom: 0;\n}\n\n> ul > li {\n    font-size: 25px;\n    padding-bottom: 15px;\n    position: relative;\n    font-weight: normal;\n}\n\n> ul > li > span {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n> ul > li > div {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 25px;\n    width: 25px;\n    border-radius: 5px;\n    background-color: #FADD08;\n}\n\n> h1 {\n    font-size: 50px;\n    text-align: center;\n    padding-bottom: 5px;\n    margin: 0 auto;\n    margin-bottom: 35px;\n    border-bottom: 3px solid #DFF959;\n    width: fit-content;\n    font-family: "Montserrat";\n    @media screen and (max-width: 835px) {\n        font-size: 40px;\n    }\n}\n']);return p=function(){return e},e}function m(){var e=Object(l.a)(["\n    filter: none;\n    -webkit-filter: none;"]);return m=function(){return e},e}function h(){var e=Object(l.a)(["\nheight: 178px;\nwidth: 200px;\nfilter: blur(5px);\n-webkit-filter: blur(5px);\nmargin-right: 15px;\n\n> img {\n    border-radius: 5px;\n}\n\n",""]);return h=function(){return e},e}function v(){var e=Object(l.a)(["\ncolor: white;\nfont-size: 25px;\nline-height: 40px;"]);return v=function(){return e},e}function b(){var e=Object(l.a)(["\npadding-top: 30px;\nwidth: 80%;\nmax-width: 1350px;\nmargin: 0 auto;"]);return b=function(){return e},e}function x(){var e=Object(l.a)(["\nflex: 0 1 50%;\n@media screen and (max-width: 760px) {\n    flex: 1 1 100%;\n}"]);return x=function(){return e},e}function y(){var e=Object(l.a)(['\ndisplay: flex;\npadding: 20px;\nfont-family: "Montserrat";\nmax-width: 1350px;\n@media screen and (max-width: 760px) {\n    flex-wrap: wrap;\n    padding-bottom: 0;\n    padding-top: 40px;\n}\n;']);return y=function(){return e},e}var g=u.d.div(y()),w=u.d.div(x()),E=u.d.div(b()),j=u.d.span(v()),O=Object(u.d)(c.a)(h(),(function(e){return e.isVisible&&Object(u.c)(m())})),L=u.d.div(p()),H=u.d.div(s()),z=u.d.div(d()),T=function(){var e=Object(r.useState)(!1),n=e[0],t=e[1];return i.a.createElement(g,null,i.a.createElement(w,null,i.a.createElement(O,{width:200,height:178,isVisible:n},i.a.createElement("img",{src:o.a,onLoad:function(){return t(!0)}})),i.a.createElement(E,null,i.a.createElement(j,null,"Hi, I'm Drake McGarrah. I am a full-stack web developer primarily experienced with the MERN (MongoDB, Express, React, Node.js) stack. For me it's all about the code - I enjoy taking people's designs and web page ideas and turning them into reality."))),i.a.createElement(L,null,i.a.createElement("h1",null,"Technical Specs"),i.a.createElement("ul",null,i.a.createElement("li",null,"HTML",i.a.createElement("span",null,"✅")),i.a.createElement("li",null,"CSS",i.a.createElement("span",null,"✅")),i.a.createElement("li",null,"JavaScript",i.a.createElement("span",null,"✅")),i.a.createElement("li",null,"React",i.a.createElement("span",null,"✅")),i.a.createElement("li",null,"Node.js",i.a.createElement("span",null,"✅")),i.a.createElement("li",null,"Express",i.a.createElement("span",null,"✅")),i.a.createElement("li",null,"MongoDB",i.a.createElement("span",null,"✅")),i.a.createElement("li",null,"GraphQL",i.a.createElement("div",null)),i.a.createElement("li",null,"Redux",i.a.createElement("div",null)),i.a.createElement("li",null,"SQL",i.a.createElement("div",null))),i.a.createElement(H,null,i.a.createElement("span",null,i.a.createElement("div",null,"✅"),"= Firm Grasp"),i.a.createElement("span",null,i.a.createElement(z,null),"= Some Experience"))))},k=t("g7kG");n.default=function(){return i.a.createElement(k.a,null,i.a.createElement(T,null))}},g7kG:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("MUpH"),o=t("vOnD");function l(){var e=Object(a.a)(["\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 80px;\n    @media screen and (max-width: 600px) {\n      padding-bottom: 40px;\n  }\n    "]);return l=function(){return e},e}function u(){var e=Object(a.a)(["\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    background-color: #070707;\n  "]);return u=function(){return e},e}var f=o.d.div(u()),c=o.d.main(l()),d=t("WlUB"),s=t.n(d),p=t("DTAH"),m=t("L+y5");n.a=function(e){var n=e.children;return i.a.createElement(o.a,{theme:s.a},i.a.createElement(p.a,null),i.a.createElement(f,null,i.a.createElement(c,null,n),i.a.createElement(m.a,null)))}},"hKI/":function(e,n,t){(function(n){var t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),c=Object.prototype.toString,d=Math.max,s=Math.min,p=function(){return f.Date.now()};function m(e,n,t){var r,i,a,o,l,u,f=0,c=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(n){var t=r,a=i;return r=i=void 0,f=n,o=e.apply(a,t)}function y(e){return f=e,l=setTimeout(w,n),c?x(e):o}function g(e){var t=e-u;return void 0===u||t>=n||t<0||m&&e-f>=a}function w(){var e=p();if(g(e))return E(e);l=setTimeout(w,function(e){var t=n-(e-u);return m?s(t,a-(e-f)):t}(e))}function E(e){return l=void 0,b&&r?x(e):(r=i=void 0,o)}function j(){var e=p(),t=g(e);if(r=arguments,i=this,u=e,t){if(void 0===l)return y(u);if(m)return l=setTimeout(w,n),x(u)}return void 0===l&&(l=setTimeout(w,n)),o}return n=v(n)||0,h(t)&&(c=!!t.leading,a=(m="maxWait"in t)?d(v(t.maxWait)||0,n):a,b="trailing"in t?!!t.trailing:b),j.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=u=i=l=void 0},j.flush=function(){return void 0===l?o:E(p())},j}function h(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var l=i.test(e);return l||a.test(e)?o(e.slice(2),l?2:8):r.test(e)?NaN:+e}e.exports=function(e,n,t){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),m(e,n,{leading:r,maxWait:n,trailing:i})}}).call(this,t("yLpj"))},pxCl:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function e(n,t,r){if(function(e){return null===e.offsetParent}(n))return!1;var i=void 0,o=void 0,l=void 0,u=void 0;if(void 0===t||t===window)i=window.pageYOffset,l=window.pageXOffset,o=i+window.innerHeight,u=l+window.innerWidth;else{if(!e(t,window,r))return!1;var f=(0,a.default)(t);i=f.top,l=f.left,o=i+t.offsetHeight,u=l+t.offsetWidth}var c=(0,a.default)(n);return i<=c.top+n.offsetHeight+r.top&&o>=c.top-r.bottom&&l<=c.left+n.offsetWidth+r.left&&u>=c.left-r.right};var r,i=t("HVci"),a=(r=i)&&r.__esModule?r:{default:r}},uSmJ:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("MUpH"),o=t("vOnD");function l(){var e=Object(a.a)(["\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    // max-height: calc(100vh - 80px);\n    // max-width: 1350px;\n    "]);return l=function(){return e},e}function u(){var e=Object(a.a)(["\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    max-height: 100vh;\n    background-color: #070707;\n  "]);return u=function(){return e},e}var f=o.d.div(u()),c=o.d.main(l()),d=t("WlUB"),s=t.n(d),p=t("DTAH"),m=t("L+y5");n.a=function(e){var n=e.children;return i.a.createElement(o.a,{theme:s.a},i.a.createElement(p.a,null),i.a.createElement(f,null,i.a.createElement(c,null,n),i.a.createElement(m.a,{extraPadding:!0})))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"==typeof window&&(t=window)}e.exports=t}}]);
//# sourceMappingURL=component---src-pages-about-js-4bc0a9942df3168074d1.js.map