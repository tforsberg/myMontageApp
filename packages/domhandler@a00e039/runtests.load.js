montageDefine("a00e039","runtests",{dependencies:["fs","path","assert","htmlparser2","./"],factory:function(e){function t(e,n){if(r.equal(typeof e,typeof n,"types didn't match"),"object"!=typeof e||null===e)r.strictEqual(e,n,"result doesn't equal expected");else for(var i in e)r.ok(i in n,"result didn't contain property "+i),t(e[i],n[i])}var n=e("fs"),i=e("path"),r=e("assert"),a=e("htmlparser2").Parser,s=e("./"),o=i.resolve(__dirname,"tests"),l=5;n.readdirSync(o).filter(RegExp.prototype.test,/\.json$/).map(function(e){return i.resolve(o,e)}).map(e).forEach(function(e){console.log("Testing:",e.name);for(var n=new s(function(n,i){r.ifError(n),t(e.expected,i)},e.options.handler),i=e.html,o=new a(n,e.options.parser),c=0;i.length>c;c+=l)o.write(i.substring(c,c+l));o.done(),o.parseComplete(i)}),console.log("\nAll tests passed!")}});