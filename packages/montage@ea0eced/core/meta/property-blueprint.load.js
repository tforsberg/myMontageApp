montageDefine("ea0eced","core/meta/property-blueprint",{dependencies:["../core","../enum","../logger"],factory:function(e,t){"use strict";var n=e("../core").Montage,r=e("../enum").Enum;e("../logger").logger("blueprint"),(new r).initWithMembers("string","number","boolean","date","enum","url","object"),(new r).initWithMembers("list","set","map");var i={name:"default",cardinality:1,mandatory:!1,readOnly:!1,denyDelete:!1,valueType:"string",collectionValueType:"list",valueObjectPrototypeName:"",valueObjectModuleId:"",enumValues:[],helpKey:""};t.PropertyBlueprint=n.specialize({constructor:{value:function(){this.superForValue("constructor")()}},initWithNameBlueprintAndCardinality:{value:function(e,t,n){return this._name=null!==e?e:i.name,this._owner=t,this.cardinality=n>0?n:i.cardinality,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this._owner,"reference"),1/0===this.cardinality?e.setProperty("cardinality",-1):this._setPropertyWithDefaults(e,"cardinality",this.cardinality),this._setPropertyWithDefaults(e,"mandatory",this.mandatory),this._setPropertyWithDefaults(e,"readOnly",this.readOnly),this._setPropertyWithDefaults(e,"denyDelete",this.denyDelete),this._setPropertyWithDefaults(e,"valueType",this.valueType),this._setPropertyWithDefaults(e,"collectionValueType",this.collectionValueType),this._setPropertyWithDefaults(e,"valueObjectPrototypeName",this.valueObjectPrototypeName),this._setPropertyWithDefaults(e,"valueObjectModuleId",this.valueObjectModuleId),this.enumValues.length>0&&this._setPropertyWithDefaults(e,"enumValues",this.enumValues),this._setPropertyWithDefaults(e,"helpKey",this.helpKey)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("blueprint"),this.cardinality=this._getPropertyWithDefaults(e,"cardinality"),-1===this.cardinality&&(this.cardinality=1/0),this.mandatory=this._getPropertyWithDefaults(e,"mandatory"),this.readOnly=this._getPropertyWithDefaults(e,"readOnly"),this.denyDelete=this._getPropertyWithDefaults(e,"denyDelete"),this.valueType=this._getPropertyWithDefaults(e,"valueType"),this.collectionValueType=this._getPropertyWithDefaults(e,"collectionValueType"),this.valueObjectPrototypeName=this._getPropertyWithDefaults(e,"valueObjectPrototypeName"),this.valueObjectModuleId=this._getPropertyWithDefaults(e,"valueObjectModuleId"),this.enumValues=this._getPropertyWithDefaults(e,"enumValues"),this.helpKey=this._getPropertyWithDefaults(e,"helpKey")}},_setPropertyWithDefaults:{value:function(e,t,n){n!=i[t]&&e.setProperty(t,n)}},_getPropertyWithDefaults:{value:function(e,t){var n=e.getProperty(t);return n?n:i[t]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},cardinality:{value:i.cardinality},mandatory:{value:i.mandatory},denyDelete:{value:i.denyDelete},readOnly:{value:i.readOnly},isAssociationBlueprint:{get:function(){return!1}},isToMany:{get:function(){return 1/0===this.cardinality||this.cardinality>1}},isDerived:{get:function(){return!1}},valueType:{value:i.valueType},collectionValueType:{value:i.collectionValueType},valueObjectPrototypeName:{value:i.valueObjectPrototypeName},valueObjectModuleId:{value:i.valueObjectModuleId},_enumValues:{value:null},enumValues:{get:function(){return this._enumValues?this._enumValues:[]},set:function(e){Array.isArray(e)&&(this._enumValues=e)}},helpKey:{value:i.helpKey},blueprintModuleId:e("../core")._blueprintModuleIdDescriptor,blueprint:e("../core")._blueprintDescriptor})}});