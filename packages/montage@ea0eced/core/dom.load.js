montageDefine("ea0eced","core/dom",{dependencies:["./geometry/point"],factory:function(e,t){var n=e("./geometry/point").Point,r=Node.prototype,i=Element.prototype;Object.defineProperty(i,"set",{value:function(e,t,n){var r,i,a,o,s,u=e.indexOf(".",n);n=n||0,i=e.substring(n,-1===u?e.length:u),-1===u?this.setAttribute(i,t):(a=e.lastIndexOf("."),"style"===i?(o=e.substring(u+1,e.length),this.style[o]=t):"classList"===i?(s=e.substring(u+1,e.length),t?this.classList.add(s):this.classList.remove(s)):(r=this.get(e.substring(0,a)))&&(r[e.substring(a+1,e.length)]=t))},enumerable:!1}),r.get=function(e){return this.getAttribute(e)||this[e]},Object.getPrototypeOf(document).addRule=function(e,t){var n,r;if(null==(n=document.styleSheets[0])){var i=document.createElement("style");i.type="text/css",document.head.appendChild(i),n=document.styleSheets[0]}else r=document.getRule(e,n);r||n.insertRule(e+" "+t,n.cssRules.length)},Object.getPrototypeOf(document).getRule=function(e,t){var n;if(t.cssRules)for(var r=0;n=t.cssRules[r];r++){if(n.name&&n.name===e)return n;if(n.selectorText===e)return n}},"undefined"!=typeof Element&&function(){var e="classList";if(!Element.prototype.hasOwnProperty(e)){var t=/^\s+|\s+$/g,n=function(e,t){e.setAttribute("class",t.join(" "))},r=function(e,t){if(""===t)throw"SYNTAX_ERR";if(/\s/.test(t))throw"INVALID_CHARACTER_ERR";return e.indexOf(t)},i=function(){var e=this,i=e.getAttribute("class")||"";return i=i.replace(t,"").split(/\s+/),{length:i.length,item:function(e){return i[e]||null},contains:function(e){return-1!==r(i,e)},add:function(t){-1===r(i,t)&&(i.push(t),this.length=i.length,n(e,i))},remove:function(t){var a=r(i,t);-1!==a&&(i.splice(a,1),this.length=i.length,n(e,i))},toggle:function(e){-1===r(i,e)?this.add(e):this.remove(e)},toString:function(){return e.getAttribute("class")||""}}};Object.defineProperty?Object.defineProperty(Element.prototype,e,{get:i,enumerable:!0}):Object.prototype.__defineGetter__&&Element.prototype.__defineGetter__(e,i)}}(),r.parentOf=function(e){for(;(e=e.parentNode)&&e!==this;);return e?!0:!1};var a=function(e){var t,n,r,i,a=e.ownerDocument;if(e&&a){if(n=a.documentElement,r=a.body,i=a.defaultView,e!==r){if(t=e.getBoundingClientRect(),n.parentOf(e)){var o=n.clientTop||r.clientTop||0,s=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop||r.scrollTop,l=i.pageXOffset||n.scrollLeft||r.scrollLeft,c=t.top+u-o,h=t.left+l-s;return{top:c,left:h}}return{top:t.top,left:t.left}}return{top:r.offsetTop,left:r.offsetLeft}}return null},o=null;try{o=new WebKitPoint(0,0)}catch(s){}var u=function(){t.convertPointFromNodeToPage=function(e,t){return t?(o.x=t.x,o.y=t.y):(o.x=0,o.y=0),t=webkitConvertPointFromNodeToPage(e,o),t?(new n).init(t.x,t.y):null},t.convertPointFromPageToNode=function(e,t){return t?(o.x=t.x,o.y=t.y):(o.x=0,o.y=0),t=webkitConvertPointFromPageToNode(e,o),t?(new n).init(t.x,t.y):null}},l=function(){t.convertPointFromNodeToPage=function(e,t){if(!e||e.x!==void 0)return null;var r;return(r=a(e))?(new n).init((t?t.x:0)+r.left,(t?t.y:0)+r.top):(new n).init(t?t.x:0,t?t.y:0)},t.convertPointFromPageToNode=function(e,t){if(!e||e.x!==void 0)return null;var r;return(r=a(e))?(new n).init((t?t.x:0)-r.left,(t?t.y:0)-r.top):(new n).init(t?t.x:0,t?t.y:0)}};o?u():l()}});