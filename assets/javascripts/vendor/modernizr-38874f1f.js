window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(C.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+N.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?s(o,t):(o=(e+" "+k.join(r+" ")+r).split(" "),c(o,t,n))}function l(){h.input=function(n){for(var r=0,o=n.length;o>r;r++)D[n[r]]=!!(n[r]in x);return D.list&&(D.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),D}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,o,i,a=0,s=e.length;s>a;a++)x.setAttribute("type",o=e[a]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&x.style.WebkitAppearance!==n?(g.appendChild(x),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),A[e[a]]=!!r;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,p,d="2.7.1",h={},m=!0,g=t.documentElement,y="modernizr",v=t.createElement(y),b=v.style,x=t.createElement("input"),w=":)",T={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",N=E.split(" "),k=E.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},j={},A={},D={},L=[],H=L.slice,_=function(e,n,r,o){var i,a,s,c,u=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:y+(r+1),u.appendChild(s);return i=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),u.id=y,(l?u:f).innerHTML+=i,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(u,e),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),g.style.overflow=c),!!a},M=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty;p=i(F,"undefined")||i(F.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=H.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(H.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(H.call(arguments)))};return r}),j.flexbox=function(){return u("flexWrap")},j.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},j.canvastext=function(){return!(!h.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},j.webgl=function(){return!!e.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:_(["@media (",C.join("touch-enabled),("),y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!e.postMessage},j.websqldatabase=function(){return!!e.openDatabase},j.indexedDB=function(){return!!u("indexedDB",e)},j.hashchange=function(){return M("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},j.history=function(){return!(!e.history||!history.pushState)},j.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},j.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},j.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},j.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},j.backgroundsize=function(){return u("backgroundSize")},j.borderimage=function(){return u("borderImage")},j.borderradius=function(){return u("borderRadius")},j.boxshadow=function(){return u("boxShadow")},j.textshadow=function(){return""===t.createElement("div").style.textShadow},j.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},j.cssanimations=function(){return u("animationName")},j.csscolumns=function(){return u("columnCount")},j.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},j.cssreflections=function(){return u("boxReflect")},j.csstransforms=function(){return!!u("transform")},j.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&_("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},j.csstransitions=function(){return u("transition")},j.fontface=function(){var e;return _('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},j.generatedcontent=function(){var e;return _(["#",y,"{font:0/0 a}#",y,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},j.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},j.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},j.localstorage=function(){try{return localStorage.setItem(y,y),localStorage.removeItem(y),!0}catch(e){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(y,y),sessionStorage.removeItem(y),!0}catch(e){return!1}},j.webworkers=function(){return!!e.Worker},j.applicationcache=function(){return!!e.applicationCache},j.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},j.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},j.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(T.call(t.createElementNS(S.svg,"animate")))},j.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(T.call(t.createElementNS(S.svg,"clipPath")))};for(var O in j)p(j,O)&&(f=O.toLowerCase(),h[f]=j[O](),L.push((h[f]?"":"no-")+f));return h.input||l(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)p(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),v=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[m]];return t||(t={},g++,e[m]=g,y[g]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||d.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),c=s.length;c>a;a++)i.createElement(s[a]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var r=o(e);return!v.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(e,r),e}var u,l,f="3.7.0",p=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var v={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:l,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};e.html5=v,c(t)}(this,t),h._version=d,h._prefixes=C,h._domPrefixes=k,h._cssomPrefixes=N,h.hasEvent=M,h.testProp=function(e){return s([e])},h.testAllProps=u,h.testStyles=_,h.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+L.join(" "):""),h}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=y.shift();v=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):v=0}function c(e,n,r,o,i,c,u){function l(t){if(!d&&a(f.readyState)&&(b.r=d=1,!v&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in k[n])k[n].hasOwnProperty(r)&&k[n][r].onload()}}var u=u||p.errorTimeout,f=t.createElement(e),d=0,g=0,b={t:r,s:n,e:i,a:c,x:u};1===k[n]&&(g=1,k[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,g)},y.splice(o,0,b),"img"!=e&&(g||2===k[n]?(w.insertBefore(f,x?null:m),h(l,u)):k[n].push(f))}function u(e,t,n,r,i){return v=0,t=t||"j",o(e)?c("c"==t?C:T,e,t,this.i++,n,r,i):(y.splice(this.i++,0,e),1==y.length&&s()),this}function l(){var e=p;return e.loader={load:u,i:0},e}var f,p,d=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,b="MozAppearance"in d.style,x=b&&!!t.createRange().compareNode,w=x?d:m.parentNode,d=e.opera&&"[object Opera]"==g.call(e.opera),d=!!t.attachEvent&&!d,T=b?"object":d?"script":"img",C=d?"script":T,E=Array.isArray||function(e){return"[object Array]"==g.call(e)},N=[],k={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),o=N.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=S[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=N[n](i);return i}function a(e,o,i,a,s){var c=t(e),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,i,a,s):(k[c.url]?c.noexec=!0:k[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(u))&&i.load(function(){l(),o&&o(c.origUrl,s,a),u&&u(c.origUrl,s,a),k[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),a(e,f,t,0,u);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[c])),a(e[c],f,t,c,u))}else!n&&d()}var s,c,u=!!e.test,l=e.load||e.both,f=e.callback||i,p=f,d=e.complete||i;n(u?e.yep:e.nope,!!l),l&&n(l)}var c,u,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(E(e))for(c=0;c<e.length;c++)u=e[c],o(u)?a(u,0,f,0):E(u)?p(u):Object(u)===u&&s(u,f);else Object(e)===e&&s(e,f)},p.addPrefix=function(e,t){S[e]=t},p.addFilter=function(e){N.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,o,c,u){var l,f,d=t.createElement("script"),o=o||p.errorTimeout;d.src=e;for(f in r)d.setAttribute(f,r[f]);n=u?s:n||i,d.onreadystatechange=d.onload=function(){!l&&a(d.readyState)&&(l=1,n(),d.onload=d.onreadystatechange=null)},h(function(){l||(l=1,n(1))},o),c?d.onload():m.parentNode.insertBefore(d,m)},e.yepnope.injectCss=function(e,n,r,o,a,c){var u,o=t.createElement("link"),n=c?s:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};