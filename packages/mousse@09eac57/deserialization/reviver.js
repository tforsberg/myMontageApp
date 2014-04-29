(function(e){function t(){}function n(e){var n=t.prototype.getCustomObjectTypeOf;return function(t){return e(t)||n(t)}}var i=function(){return this}(),r=require("q");Object.defineProperties(t.prototype,{_createAssignValueFunction:{value:function(e,t){return function(n){e[t]=n}}},getTypeOf:{value:function(e){var t=typeof e;return null===e?"null":Array.isArray(e)?"array":"object"===t&&1===Object.keys(e).length?"@"in e?"reference":"/"in e?"regexp":"object":t}},getCustomObjectTypeOf:{writable:!0,value:function(){}},reviveRootObject:{value:function(e,t,n){var i;return e.debugger,"value"in e?t.hasUserObject(n)?(i=t.getUserObject(n),t.setObjectLabel(i,n),i):this.reviveValue(e.value,t,n):0===Object.keys(e).length?t.hasUserObject(n)?(i=t.getUserObject(n),t.setObjectLabel(i,n),i):this.reviveExternalObject(e,t,n):this.reviveCustomObject(e,t,n)}},reviveValue:{value:function(e,t,n){var i=this.getTypeOf(e);return"string"===i||"number"===i||"boolean"===i||"null"===i||"undefined"===i?this.reviveNativeValue(e,t,n):"regexp"===i?this.reviveRegExp(e,t,n):"reference"===i?this.reviveObjectReference(e,t,n):"array"===i?this.reviveArray(e,t,n):"object"===i?this.reviveObjectLiteral(e,t,n):this._callReviveMethod("revive"+i,e,t,n)}},reviveNativeValue:{value:function(e,t,n){return n&&t.setObjectLabel(e,n),e}},reviveObjectLiteral:{value:function(e,t,n){var i,a=[];n&&t.setObjectLabel(e,n);for(var s in e)i=this.reviveValue(e[s],t),r.isPromise(i)?a.push(i.then(this._createAssignValueFunction(e,s))):e[s]=i;return 0===a.length?e:r.all(a).then(function(){return e})}},reviveRegExp:{value:function(e,t,n){var e=e["/"],i=RegExp(e.source,e.flags);return n&&t.setObjectLabel(i,n),i}},reviveObjectReference:{value:function(e,t){var e=e["@"],n=t.getObject(e);return n}},reviveArray:{value:function(e,t,n){var i,a=[];n&&t.setObjectLabel(e,n);for(var s=0,o=e.length;o>s;s++)i=this.reviveValue(e[s],t),r.isPromise(i)?a.push(i.then(this._createAssignValueFunction(e,s))):e[s]=i;return 0===a.length?e:r.all(a).then(function(){return e})}},reviveCustomObject:{value:function(e,t,n){var s=this.getCustomObjectTypeOf(e),o=a["revive"+s];return s?o.call(i,e,t,n):r.reject(Error("Object's type is unknown: "+JSON.stringify(e)))}},reviveExternalObject:{value:function(e,t,n){return r.reject(Error("External object '"+n+"' not found in user objects."))}},_callReviveMethod:{value:function(e,t,n,i){return this[e](t,n,i)}}});var a=Object.create(null);t.addCustomObjectReviver=function(e){for(var t in e)if("getTypeOf"!==t&&"function"==typeof e[t]&&/^revive/.test(t)){if(void 0!==a[t])return Error("Reviver '"+t+"' is already registered.");a[t]=e[t].bind(e)}this.prototype.getCustomObjectTypeOf=n(e.getTypeOf)},t.resetCustomObjectRevivers=function(){a=Object.create(null),this.prototype.getCustomObjectTypeOf=function(){}},e.Reviver=t})(exports),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});