montageDefine("bc228c7","ui/autocomplete/result-item.reel/result-item",{dependencies:["montage/ui/component","montage/ui/text.reel"],factory:function(e,t){var n=(e("montage/ui/component").Component,e("montage/ui/text.reel").Text);t.ResultItem=n.specialize({textPropertyPath:{value:null},_object:{value:null},object:{get:function(){return this._object},set:function(e){e&&(this._object=e),this._object&&(this.value=this.textPropertyPath?this._object[this.textPropertyPath]:this._object)}}})}});