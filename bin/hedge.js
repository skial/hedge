$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof hedge=='undefined') hedge = {}
hedge.Object = function(p) { if( p === $_ ) return; {
	null;
}}
hedge.Object.__name__ = ["hedge","Object"];
hedge.Object.constructor = null;
hedge.Object.prototype.__jq__ = null;
hedge.Object.prototype.hasOwnProperty = function(name) {
	return false;
}
hedge.Object.prototype.isPrototypeOf = function(theClass) {
	return false;
}
hedge.Object.prototype.propertyIsEnumerable = function(name) {
	return false;
}
hedge.Object.prototype.setPropertyIsEnumerable = function(name,isEnum) {
	if(isEnum == null) isEnum = true;
}
hedge.Object.prototype.valueOf = function() {
	return this;
}
hedge.Object.prototype.__class__ = hedge.Object;
if(!hedge.events) hedge.events = {}
hedge.events.IEventDispatcher = function() { }
hedge.events.IEventDispatcher.__name__ = ["hedge","events","IEventDispatcher"];
hedge.events.IEventDispatcher.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
}
hedge.events.IEventDispatcher.prototype.dispatchEvent = function(event) {
	return true;
}
hedge.events.IEventDispatcher.prototype.hasEventListener = function(type) {
	return true;
}
hedge.events.IEventDispatcher.prototype.removeEventListener = function(type,listener,useCapture) {
	if(useCapture == null) useCapture = false;
}
hedge.events.IEventDispatcher.prototype.willTrigger = function(type) {
	return true;
}
hedge.events.IEventDispatcher.prototype.__class__ = hedge.events.IEventDispatcher;
hedge.events.EventDispatcher = function(target) { if( target === $_ ) return; {
	hedge.Object.apply(this,[]);
}}
hedge.events.EventDispatcher.__name__ = ["hedge","events","EventDispatcher"];
hedge.events.EventDispatcher.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.EventDispatcher.prototype[k] = hedge.Object.prototype[k];
hedge.events.EventDispatcher.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	this.__jq__.bind(type,{ },listener);
}
hedge.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	event.target = (event.target == null?this:event.target);
	return true;
}
hedge.events.EventDispatcher.prototype.hasEventListener = function(type) {
	var events = this.__jq__.data("events");
	return Reflect.hasField(events,type);
}
hedge.events.EventDispatcher.prototype.removeEventListener = function(type,listener,useCapture) {
	if(useCapture == null) useCapture = false;
	this.__jq__.unbind(type,listener);
}
hedge.events.EventDispatcher.prototype.willTrigger = function(type) {
	return true;
}
hedge.events.EventDispatcher.prototype.__class__ = hedge.events.EventDispatcher;
hedge.events.EventDispatcher.__interfaces__ = [hedge.events.IEventDispatcher];
if(!hedge.display) hedge.display = {}
hedge.display.IBitmapDrawable = function() { }
hedge.display.IBitmapDrawable.__name__ = ["hedge","display","IBitmapDrawable"];
hedge.display.IBitmapDrawable.prototype.__class__ = hedge.display.IBitmapDrawable;
hedge.display.DisplayObject = function(p) { if( p === $_ ) return; {
	hedge.events.EventDispatcher.apply(this,[]);
	hedge.Setup.__storage__.append(this.__jq__ = new $("<div>"));
	this.__originalName__ = this.setName(hedge.Setup.generateInstanceName());
	this.__jq__.attr("id",this.getName()).css(hedge.Setup.__attr__({ width : "0px", height : "0px", left : "0px", top : "0px"}));
	this.__jq__.attr("data-originalName",this.__originalName__);
	this.setParent(hedge.Setup.__default__);
}}
hedge.display.DisplayObject.__name__ = ["hedge","display","DisplayObject"];
hedge.display.DisplayObject.__super__ = hedge.events.EventDispatcher;
for(var k in hedge.events.EventDispatcher.prototype ) hedge.display.DisplayObject.prototype[k] = hedge.events.EventDispatcher.prototype[k];
hedge.display.DisplayObject.prototype.__originalName__ = null;
hedge.display.DisplayObject.prototype.alpha = null;
hedge.display.DisplayObject.prototype.blendMode = null;
hedge.display.DisplayObject.prototype.cacheAsBitmap = null;
hedge.display.DisplayObject.prototype.getAlpha = function() {
	return this.__jq__.css("opacity");
}
hedge.display.DisplayObject.prototype.getBackground = function() {
	return this.opaqueBackground;
}
hedge.display.DisplayObject.prototype.getBlendMode = function() {
	return this.blendMode;
}
hedge.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	return new hedge.geom.Rectangle();
}
hedge.display.DisplayObject.prototype.getCache = function() {
	return this.cacheAsBitmap;
}
hedge.display.DisplayObject.prototype.getHeight = function() {
	return (this.__jq__.data("height") == null?this.__jq__.height():this.__jq__.data("height"));
}
hedge.display.DisplayObject.prototype.getMask = function() {
	return this.mask;
}
hedge.display.DisplayObject.prototype.getMouseX = function() {
	return this.mouseX;
}
hedge.display.DisplayObject.prototype.getMouseY = function() {
	return this.mouseY;
}
hedge.display.DisplayObject.prototype.getName = function() {
	return this.__jq__.attr("id");
}
hedge.display.DisplayObject.prototype.getParent = function() {
	return this.parent;
}
hedge.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	return "rectangle";
}
hedge.display.DisplayObject.prototype.getRoot = function() {
	return this.root;
}
hedge.display.DisplayObject.prototype.getRotation = function() {
	return this.rotation;
}
hedge.display.DisplayObject.prototype.getScale9 = function() {
	return this.scale9Grid;
}
hedge.display.DisplayObject.prototype.getScaleX = function() {
	return this.scaleX;
}
hedge.display.DisplayObject.prototype.getScaleY = function() {
	return this.scaleY;
}
hedge.display.DisplayObject.prototype.getScrollRect = function() {
	return this.scrollRect;
}
hedge.display.DisplayObject.prototype.getStage = function() {
	return hedge.Setup.__stage__;
}
hedge.display.DisplayObject.prototype.getVisible = function() {
	return (this.__jq__.data("visible") == null?true:this.__jq__.data("visible"));
}
hedge.display.DisplayObject.prototype.getWidth = function() {
	return (this.__jq__.data("width") == null?this.__jq__.width():this.__jq__.data("width"));
}
hedge.display.DisplayObject.prototype.getX = function() {
	return this.__jq__.position().left;
}
hedge.display.DisplayObject.prototype.getY = function() {
	return this.__jq__.position().top;
}
hedge.display.DisplayObject.prototype.height = null;
hedge.display.DisplayObject.prototype.hitTestObject = function(obj) {
	return true;
}
hedge.display.DisplayObject.prototype.hitTestPoint = function(x,y,shapeFlag) {
	if(shapeFlag == null) shapeFlag = false;
	return true;
}
hedge.display.DisplayObject.prototype.localToGlobal = function(point) {
	return "point";
}
hedge.display.DisplayObject.prototype.mask = null;
hedge.display.DisplayObject.prototype.mouseX = null;
hedge.display.DisplayObject.prototype.mouseY = null;
hedge.display.DisplayObject.prototype.name = null;
hedge.display.DisplayObject.prototype.opaqueBackground = null;
hedge.display.DisplayObject.prototype.parent = null;
hedge.display.DisplayObject.prototype.root = null;
hedge.display.DisplayObject.prototype.rotation = null;
hedge.display.DisplayObject.prototype.scale9Grid = null;
hedge.display.DisplayObject.prototype.scaleX = null;
hedge.display.DisplayObject.prototype.scaleY = null;
hedge.display.DisplayObject.prototype.scrollRect = null;
hedge.display.DisplayObject.prototype.setAlpha = function(value) {
	this.__jq__.css("opacity",value);
	return value;
}
hedge.display.DisplayObject.prototype.setBackground = function(value) {
	this.opaqueBackground = value;
	return this.getBackground();
}
hedge.display.DisplayObject.prototype.setBlendMode = function(value) {
	this.blendMode = value;
	return this.getBlendMode();
}
hedge.display.DisplayObject.prototype.setCache = function(value) {
	this.cacheAsBitmap = value;
	return this.getCache();
}
hedge.display.DisplayObject.prototype.setHeight = function(value) {
	this.__jq__.height(value);
	this.__jq__.data("height",value);
	return this.__jq__.data("height");
}
hedge.display.DisplayObject.prototype.setMask = function(value) {
	this.mask = value;
	return this.getMask();
}
hedge.display.DisplayObject.prototype.setName = function(value) {
	this.__jq__.attr("id",value);
	return value;
}
hedge.display.DisplayObject.prototype.setParent = function(value) {
	this.parent = value;
	return this.getParent();
}
hedge.display.DisplayObject.prototype.setRotation = function(value) {
	this.rotation = value;
	return this.getRotation();
}
hedge.display.DisplayObject.prototype.setScale9 = function(value) {
	this.scale9Grid = value;
	return this.getScale9();
}
hedge.display.DisplayObject.prototype.setScaleX = function(value) {
	this.scaleX = value;
	return this.getScaleX();
}
hedge.display.DisplayObject.prototype.setScaleY = function(value) {
	this.scaleY = value;
	return this.getScaleY();
}
hedge.display.DisplayObject.prototype.setScrollRect = function(value) {
	this.scrollRect = value;
	return this.getScrollRect();
}
hedge.display.DisplayObject.prototype.setVisible = function(value) {
	this.__jq__.css("display",(value == false?"none":"block"));
	this.__jq__.css("visibility",(value == false?"hidden":"visible"));
	this.__jq__.data("visible",value);
	return this.__jq__.data("visible");
}
hedge.display.DisplayObject.prototype.setWidth = function(value) {
	this.__jq__.width(value);
	this.__jq__.data("width",value);
	return this.__jq__.data("width");
}
hedge.display.DisplayObject.prototype.setX = function(value) {
	this.x = value;
	this.__jq__.css("left",("" + value) + "px");
	return this.getX();
}
hedge.display.DisplayObject.prototype.setY = function(value) {
	this.y = value;
	this.__jq__.css("top",("" + value) + "px");
	return this.getY();
}
hedge.display.DisplayObject.prototype.stage = null;
hedge.display.DisplayObject.prototype.visible = null;
hedge.display.DisplayObject.prototype.width = null;
hedge.display.DisplayObject.prototype.x = null;
hedge.display.DisplayObject.prototype.y = null;
hedge.display.DisplayObject.prototype.__class__ = hedge.display.DisplayObject;
hedge.display.DisplayObject.__interfaces__ = [hedge.display.IBitmapDrawable];
hedge.display.InteractiveObject = function(p) { if( p === $_ ) return; {
	hedge.display.DisplayObject.apply(this,[]);
}}
hedge.display.InteractiveObject.__name__ = ["hedge","display","InteractiveObject"];
hedge.display.InteractiveObject.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.InteractiveObject.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.InteractiveObject.prototype.doubleClickEnabled = null;
hedge.display.InteractiveObject.prototype.focusRect = null;
hedge.display.InteractiveObject.prototype.mouseEnabled = null;
hedge.display.InteractiveObject.prototype.tabEnabled = null;
hedge.display.InteractiveObject.prototype.tabIndex = null;
hedge.display.InteractiveObject.prototype.__class__ = hedge.display.InteractiveObject;
hedge.display.DisplayObjectContainer = function(p) { if( p === $_ ) return; {
	hedge.display.InteractiveObject.apply(this,[]);
	this.__jq__.bind(hedge.Setup.RESIZE_ELEMENT,{ },{ });
}}
hedge.display.DisplayObjectContainer.__name__ = ["hedge","display","DisplayObjectContainer"];
hedge.display.DisplayObjectContainer.__super__ = hedge.display.InteractiveObject;
for(var k in hedge.display.InteractiveObject.prototype ) hedge.display.DisplayObjectContainer.prototype[k] = hedge.display.InteractiveObject.prototype[k];
hedge.display.DisplayObjectContainer.prototype.addChild = function(child) {
	child.__jq__.appendTo(this.__jq__);
	child.setParent(this);
	this.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : child.getX(), y : child.getY(), w : child.getWidth(), h : child.getHeight(), p : this}]);
	return child;
}
hedge.display.DisplayObjectContainer.prototype.addChildAt = function(child,index) {
	return new hedge.display.DisplayObject();
}
hedge.display.DisplayObjectContainer.prototype.areInaccessibleObjectsUnderPoint = function(point) {
	return true;
}
hedge.display.DisplayObjectContainer.prototype.contains = function(child) {
	return true;
}
hedge.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	return new hedge.display.DisplayObject();
}
hedge.display.DisplayObjectContainer.prototype.getChildByName = function(name) {
	return new hedge.display.DisplayObject();
}
hedge.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	return 1;
}
hedge.display.DisplayObjectContainer.prototype.getMouseChildren = function() {
	return this.mouseChildren;
}
hedge.display.DisplayObjectContainer.prototype.getNumChildren = function() {
	return this.numChildren;
}
hedge.display.DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point) {
	return [0,0];
}
hedge.display.DisplayObjectContainer.prototype.getTabChildren = function() {
	return this.tabChildren;
}
hedge.display.DisplayObjectContainer.prototype.getTextSnapshot = function() {
	return this.textSnapshot;
}
hedge.display.DisplayObjectContainer.prototype.mouseChildren = null;
hedge.display.DisplayObjectContainer.prototype.numChildren = null;
hedge.display.DisplayObjectContainer.prototype.onChildAdded = function(e) {
	null;
}
hedge.display.DisplayObjectContainer.prototype.onChildRemoved = function(e) {
	null;
}
hedge.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	return new hedge.display.DisplayObject();
}
hedge.display.DisplayObjectContainer.prototype.removeChildAt = function(index) {
	return new hedge.display.DisplayObject();
}
hedge.display.DisplayObjectContainer.prototype.setChildIndex = function(child,index) {
	null;
}
hedge.display.DisplayObjectContainer.prototype.setMouseChildren = function(value) {
	this.mouseChildren = value;
	return this.getMouseChildren();
}
hedge.display.DisplayObjectContainer.prototype.setNumChildren = function(value) {
	this.numChildren = value;
	return this.getNumChildren();
}
hedge.display.DisplayObjectContainer.prototype.setTabChildren = function(value) {
	this.tabChildren = value;
	return this.getTabChildren();
}
hedge.display.DisplayObjectContainer.prototype.swapChildren = function(child1,child2) {
	null;
}
hedge.display.DisplayObjectContainer.prototype.swapChildrenAt = function(index1,index2) {
	null;
}
hedge.display.DisplayObjectContainer.prototype.tabChildren = null;
hedge.display.DisplayObjectContainer.prototype.textSnapshot = null;
hedge.display.DisplayObjectContainer.prototype.__class__ = hedge.display.DisplayObjectContainer;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return (s.length >= start.length && s.substr(0,start.length) == start);
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return (slen >= elen && s.substr(slen - elen,elen) == end);
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return (c >= 9 && c <= 13) || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,(l - r) - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.prototype.__class__ = StringTools;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
hedge.Lib = function() { }
hedge.Lib.__name__ = ["hedge","Lib"];
hedge.Lib.attachToStage = function(displayobject) {
	hedge.Setup.__stage__.addChild(displayobject);
	return hedge.Setup.__stage__;
}
hedge.Lib.prototype.__class__ = hedge.Lib;
if(!hedge.filters) hedge.filters = {}
hedge.filters.BitmapFilter = function(p) { if( p === $_ ) return; {
	null;
}}
hedge.filters.BitmapFilter.__name__ = ["hedge","filters","BitmapFilter"];
hedge.filters.BitmapFilter.prototype.clone = function() {
	return new hedge.filters.BitmapFilter();
}
hedge.filters.BitmapFilter.prototype.__class__ = hedge.filters.BitmapFilter;
hedge.display.GradientType = function() { }
hedge.display.GradientType.__name__ = ["hedge","display","GradientType"];
hedge.display.GradientType.prototype.__class__ = hedge.display.GradientType;
if(!hedge.utils) hedge.utils = {}
hedge.utils.ByteArray = function(p) { if( p === $_ ) return; {
	null;
}}
hedge.utils.ByteArray.__name__ = ["hedge","utils","ByteArray"];
hedge.utils.ByteArray.prototype.bytesAvailable = null;
hedge.utils.ByteArray.prototype.compress = function(algorithm) {
	null;
}
hedge.utils.ByteArray.prototype.defaultObjectEncoding = null;
hedge.utils.ByteArray.prototype.endian = null;
hedge.utils.ByteArray.prototype.length = null;
hedge.utils.ByteArray.prototype.objectEncoding = null;
hedge.utils.ByteArray.prototype.position = null;
hedge.utils.ByteArray.prototype.readBoolean = function() {
	return true;
}
hedge.utils.ByteArray.prototype.readByte = function() {
	return 1;
}
hedge.utils.ByteArray.prototype.readBytes = function(bytes,offset,length) {
	if(length == null) length = 0;
	if(offset == null) offset = 0;
}
hedge.utils.ByteArray.prototype.readDouble = function() {
	return 12.0;
}
hedge.utils.ByteArray.prototype.readFloat = function() {
	return 12.0;
}
hedge.utils.ByteArray.prototype.readInt = function() {
	return 1;
}
hedge.utils.ByteArray.prototype.readMultiByte = function(length,charSet) {
	return "";
}
hedge.utils.ByteArray.prototype.readObject = function() {
	return "";
}
hedge.utils.ByteArray.prototype.readShort = function() {
	return 1;
}
hedge.utils.ByteArray.prototype.readUTF = function() {
	return "";
}
hedge.utils.ByteArray.prototype.readUTFBytes = function(length) {
	return "";
}
hedge.utils.ByteArray.prototype.readUnsignedByte = function() {
	return 1;
}
hedge.utils.ByteArray.prototype.readUnsignedInt = function() {
	return 1;
}
hedge.utils.ByteArray.prototype.readUnsignedShort = function() {
	return 1;
}
hedge.utils.ByteArray.prototype.uncompress = function(algorith) {
	null;
}
hedge.utils.ByteArray.prototype.writeBoolean = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeByte = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeBytes = function(bytes,offset,length) {
	if(length == null) length = 0;
	if(offset == null) offset = 0;
}
hedge.utils.ByteArray.prototype.writeDouble = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeFloat = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeInt = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeMultiByte = function(value,charSet) {
	null;
}
hedge.utils.ByteArray.prototype.writeObject = function(object) {
	null;
}
hedge.utils.ByteArray.prototype.writeShort = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeUTF = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	null;
}
hedge.utils.ByteArray.prototype.__class__ = hedge.utils.ByteArray;
if(!hedge.geom) hedge.geom = {}
hedge.geom.Matrix = function(a,b,c,d,tx,ty) { if( a === $_ ) return; {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
}}
hedge.geom.Matrix.__name__ = ["hedge","geom","Matrix"];
hedge.geom.Matrix.prototype.a = null;
hedge.geom.Matrix.prototype.b = null;
hedge.geom.Matrix.prototype.c = null;
hedge.geom.Matrix.prototype.clone = function() {
	return new hedge.geom.Matrix();
}
hedge.geom.Matrix.prototype.concat = function(m) {
	null;
}
hedge.geom.Matrix.prototype.createBox = function(scaleX,scaleY,rotation,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(rotation == null) rotation = 0;
}
hedge.geom.Matrix.prototype.createGradientBox = function(width,height,rotation,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(rotation == null) rotation = 0;
}
hedge.geom.Matrix.prototype.d = null;
hedge.geom.Matrix.prototype.deltaTransformPoint = function(point) {
	return new hedge.geom.Point();
}
hedge.geom.Matrix.prototype.identity = function() {
	null;
}
hedge.geom.Matrix.prototype.invert = function() {
	null;
}
hedge.geom.Matrix.prototype.rotate = function(angle) {
	null;
}
hedge.geom.Matrix.prototype.scale = function(sx,sy) {
	null;
}
hedge.geom.Matrix.prototype.transformPoint = function(point) {
	return new hedge.geom.Point();
}
hedge.geom.Matrix.prototype.translate = function(dx,dy) {
	null;
}
hedge.geom.Matrix.prototype.tx = null;
hedge.geom.Matrix.prototype.ty = null;
hedge.geom.Matrix.prototype.__class__ = hedge.geom.Matrix;
hedge.geom.Point = function(x,y) { if( x === $_ ) return; {
	if(y == null) y = 0;
	if(x == null) x = 0;
}}
hedge.geom.Point.__name__ = ["hedge","geom","Point"];
hedge.geom.Point.prototype.add = function(v) {
	return new hedge.geom.Point();
}
hedge.geom.Point.prototype.clone = function() {
	return new hedge.geom.Point();
}
hedge.geom.Point.prototype.distance = function(pt1,pt2) {
	return 12.0;
}
hedge.geom.Point.prototype.equals = function(toCompare) {
	return true;
}
hedge.geom.Point.prototype.interpolate = function(pt1,pt2,f) {
	return new hedge.geom.Point();
}
hedge.geom.Point.prototype.length = null;
hedge.geom.Point.prototype.normalize = function(thickness) {
	null;
}
hedge.geom.Point.prototype.offset = function(dx,dy) {
	null;
}
hedge.geom.Point.prototype.polar = function(len,angle) {
	return new hedge.geom.Point();
}
hedge.geom.Point.prototype.subtract = function(v) {
	return new hedge.geom.Point();
}
hedge.geom.Point.prototype.x = null;
hedge.geom.Point.prototype.y = null;
hedge.geom.Point.prototype.__class__ = hedge.geom.Point;
if(!hedge.jquery) hedge.jquery = {}
if(!hedge.jquery.events) hedge.jquery.events = {}
hedge.jquery.events.ResizeElement = function(p) { if( p === $_ ) return; {
	null;
}}
hedge.jquery.events.ResizeElement.__name__ = ["hedge","jquery","events","ResizeElement"];
hedge.jquery.events.ResizeElement.prototype.add = function(handleObj) {
	handleObj.handler = function(e,p) {
		var __jq__ = new $(e.target);
		var nw = p.w + p.x;
		var nh = p.h + p.y;
		var parent = p.p;
		if(parent.getWidth() < nw) {
			parent.setWidth(parent.getWidth() + (nw - parent.getWidth()));
		}
		if(parent.getHeight() < nh) {
			parent.setHeight(parent.getHeight() + (nh - parent.getHeight()));
		}
	}
}
hedge.jquery.events.ResizeElement.prototype.__class__ = hedge.jquery.events.ResizeElement;
hedge.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) { if( redMultiplier === $_ ) return; {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1.0;
	if(blueMultiplier == null) blueMultiplier = 1.0;
	if(greenMultiplier == null) greenMultiplier = 1.0;
	if(redMultiplier == null) redMultiplier = 1.0;
}}
hedge.geom.ColorTransform.__name__ = ["hedge","geom","ColorTransform"];
hedge.geom.ColorTransform.prototype.alphaMultiplier = null;
hedge.geom.ColorTransform.prototype.alphaOffset = null;
hedge.geom.ColorTransform.prototype.blueMultiplier = null;
hedge.geom.ColorTransform.prototype.blueOffset = null;
hedge.geom.ColorTransform.prototype.color = null;
hedge.geom.ColorTransform.prototype.concat = function(second) {
	null;
}
hedge.geom.ColorTransform.prototype.greenMultiplier = null;
hedge.geom.ColorTransform.prototype.greenOffset = null;
hedge.geom.ColorTransform.prototype.redMultiplier = null;
hedge.geom.ColorTransform.prototype.redOffset = null;
hedge.geom.ColorTransform.prototype.__class__ = hedge.geom.ColorTransform;
hedge.events.Event = function(type,bubbles,cancelable) { if( type === $_ ) return; {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	hedge.Object.apply(this,[]);
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
}}
hedge.events.Event.__name__ = ["hedge","events","Event"];
hedge.events.Event.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.Event.prototype[k] = hedge.Object.prototype[k];
hedge.events.Event.prototype.bubbles = null;
hedge.events.Event.prototype.cancelable = null;
hedge.events.Event.prototype.clone = function() {
	return new hedge.events.Event(this.type,this.bubbles,this.cancelable);
}
hedge.events.Event.prototype.currentTarget = null;
hedge.events.Event.prototype.eventPhase = null;
hedge.events.Event.prototype.formatToString = function(className,arguments) {
	return "";
}
hedge.events.Event.prototype.isDefaultPrevented = function() {
	return true;
}
hedge.events.Event.prototype.stopImmediatePropagation = function() {
	null;
}
hedge.events.Event.prototype.stopPropagation = function() {
	null;
}
hedge.events.Event.prototype.target = null;
hedge.events.Event.prototype.type = null;
hedge.events.Event.prototype.__class__ = hedge.events.Event;
hedge.display.BitmapData = function(width,height,transparent,fillColor,canvasID) { if( width === $_ ) return; {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.setWidth(width);
	this.setHeight(height);
	this.transparent = transparent;
	this.__fillColor__ = fillColor;
	this.__canvasID__ = canvasID;
	this.__id__ = (((canvasID == null))?hedge.Setup.generateInstanceName():this.__canvasID__);
	this.__canvas__ = new $("<canvas></canvas>").attr("id",this.__id__).attr("width",width).attr("height",height);
	hedge.Setup.__storage__.append(this.__canvas__);
	this.__context__ = this.__canvas__[0].getContext("2d");
	this.__context__.fillStyle = hedge.Setup.RGB_to_String(this.__fillColor__);
	this.__context__.fillRect(0,0,width,height);
}}
hedge.display.BitmapData.__name__ = ["hedge","display","BitmapData"];
hedge.display.BitmapData.prototype.__canvasID__ = null;
hedge.display.BitmapData.prototype.__canvas__ = null;
hedge.display.BitmapData.prototype.__context__ = null;
hedge.display.BitmapData.prototype.__fillColor__ = null;
hedge.display.BitmapData.prototype.__id__ = null;
hedge.display.BitmapData.prototype.applyFilter = function(sourceBitmapData,sourceRect,destPoint,filter) {
	null;
}
hedge.display.BitmapData.prototype.clone = function() {
	return new hedge.display.BitmapData(this.getWidth(),this.getHeight(),this.transparent,this.__fillColor__,this.__canvasID__ + "_clone");
}
hedge.display.BitmapData.prototype.colorTransform = function(rect,colorTransform) {
	null;
}
hedge.display.BitmapData.prototype.compare = function(otherBitmapData) {
	return Dynamic;
}
hedge.display.BitmapData.prototype.copyChannel = function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
	null;
}
hedge.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
}
hedge.display.BitmapData.prototype.dispose = function() {
	null;
}
hedge.display.BitmapData.prototype.draw = function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
	if(smoothing == null) smoothing = false;
}
hedge.display.BitmapData.prototype.fillRect = function(rect,color) {
	this.__context__.fillStyle = hedge.Setup.RGB_to_String(color);
	this.__context__.fillRect(rect.x,rect.y,rect.width,rect.height);
}
hedge.display.BitmapData.prototype.floodFill = function(x,y,color) {
	this.__context__.fillStyle = hedge.Setup.RGB_to_String(color);
	this.__context__.fillRect(x,y,this.getWidth(),this.getHeight());
}
hedge.display.BitmapData.prototype.generateFilterRect = function(sourceRect,filter) {
	return new hedge.geom.Rectangle();
}
hedge.display.BitmapData.prototype.getColorBoundsRect = function(mask,color,findColor) {
	if(findColor == null) findColor = true;
	return new hedge.geom.Rectangle();
}
hedge.display.BitmapData.prototype.getHeight = function() {
	return this.height;
}
hedge.display.BitmapData.prototype.getPixel = function(x,y) {
	var values = this.__context__.getImageData(x,y,x + 1,y + 1).data;
	return hedge.Setup.RGB_String_to_HEX(((((("rgb(" + values[0]) + ", ") + values[1]) + ", ") + values[2]) + ")");
}
hedge.display.BitmapData.prototype.getPixel32 = function(x,y) {
	var values = this.__context__.getImageData(x,y,x + 1,y + 1).data;
	return hedge.Setup.ARGB_String_to_HEX(((((((("argb(" + values[3]) + ", ") + values[0]) + ", ") + values[1]) + ", ") + values[2]) + ")");
}
hedge.display.BitmapData.prototype.getPixels = function(rect) {
	return new hedge.utils.ByteArray();
}
hedge.display.BitmapData.prototype.getWidth = function() {
	return this.width;
}
hedge.display.BitmapData.prototype.height = null;
hedge.display.BitmapData.prototype.hitTest = function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
	if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
	return true;
}
hedge.display.BitmapData.prototype.lock = function() {
	null;
}
hedge.display.BitmapData.prototype.merge = function(sourceBitmapData,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	null;
}
hedge.display.BitmapData.prototype.noise = function(randomSeed,low,high,channelOptions,grayScale) {
	if(grayScale == null) grayScale = false;
	if(channelOptions == null) channelOptions = 7;
	if(high == null) high = 255;
	if(low == null) low = 0;
}
hedge.display.BitmapData.prototype.paletteMap = function(sourceBitmapData,sourceRect,destPoint,redArray,greenArray,blueArray,alphaArray) {
	null;
}
hedge.display.BitmapData.prototype.perlinNoise = function(baseX,baseY,numOctaves,randomSeed,stitch,fractalNoise,channelOptions,grayScale,offsets) {
	if(grayScale == null) grayScale = false;
	if(channelOptions == null) channelOptions = 7;
}
hedge.display.BitmapData.prototype.pixelDissolve = function(sourceBitmapData,sourceRect,destPoint,randomSeed,numPixels,fillColor) {
	if(fillColor == null) fillColor = 0;
	if(numPixels == null) numPixels = 0;
	if(randomSeed == null) randomSeed = 0;
	return 1;
}
hedge.display.BitmapData.prototype.rect = null;
hedge.display.BitmapData.prototype.scroll = function(x,y) {
	null;
}
hedge.display.BitmapData.prototype.setHeight = function(value) {
	this.height = value;
	return this.getHeight();
}
hedge.display.BitmapData.prototype.setPixel = function(x,y,color) {
	null;
}
hedge.display.BitmapData.prototype.setPixel32 = function(x,y,color) {
	null;
}
hedge.display.BitmapData.prototype.setPixels = function(rect,inputByteArray) {
	null;
}
hedge.display.BitmapData.prototype.setWidth = function(value) {
	this.width = value;
	return this.getWidth();
}
hedge.display.BitmapData.prototype.threshold = function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
	if(copySource == null) copySource = false;
	if(mask == null) mask = -1;
	if(color == null) color = 0;
	return 1;
}
hedge.display.BitmapData.prototype.transparent = null;
hedge.display.BitmapData.prototype.unlock = function(changeRect) {
	null;
}
hedge.display.BitmapData.prototype.width = null;
hedge.display.BitmapData.prototype.__class__ = hedge.display.BitmapData;
hedge.display.BitmapData.__interfaces__ = [hedge.display.IBitmapDrawable];
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.detect = function() {
	try {
		return console != null && console.error != null;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
}
haxe.Firebug.redirectTraces = function() {
	haxe.Log.trace = $closure(haxe.Firebug,"trace");
	js.Lib.setErrorHandler($closure(haxe.Firebug,"onError"));
}
haxe.Firebug.onError = function(err,stack) {
	var buf = err + "\n";
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			buf += ("Called from " + s) + "\n";
		}
	}
	haxe.Firebug.trace(buf,null);
	return true;
}
haxe.Firebug.trace = function(v,inf) {
	var type = (inf != null && inf.customParams != null?inf.customParams[0]:null);
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = (inf == null?"error":"log");
	console[type](((inf == null?"":((inf.fileName + ":") + inf.lineNumber) + " : ")) + Std.string(v));
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
hedge.display.Sprite = function(p) { if( p === $_ ) return; {
	hedge.display.DisplayObjectContainer.apply(this,[]);
	this._g = new hedge.display.Graphics(this);
}}
hedge.display.Sprite.__name__ = ["hedge","display","Sprite"];
hedge.display.Sprite.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Sprite.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Sprite.prototype._g = null;
hedge.display.Sprite.prototype.buttonMode = null;
hedge.display.Sprite.prototype.dropTarget = null;
hedge.display.Sprite.prototype.getButtonMode = function() {
	return this.buttonMode;
}
hedge.display.Sprite.prototype.getDropTarget = function() {
	return this.dropTarget;
}
hedge.display.Sprite.prototype.getGraphics = function() {
	return this._g;
}
hedge.display.Sprite.prototype.getHandCursor = function() {
	return this.useHandCursor;
}
hedge.display.Sprite.prototype.getHitArea = function() {
	return this.hitArea;
}
hedge.display.Sprite.prototype.graphics = null;
hedge.display.Sprite.prototype.hitArea = null;
hedge.display.Sprite.prototype.setButtonMode = function(value) {
	this.buttonMode = value;
	return this.getButtonMode();
}
hedge.display.Sprite.prototype.setDropTarget = function(value) {
	this.dropTarget = value;
	return this.getDropTarget();
}
hedge.display.Sprite.prototype.setHandCursor = function(value) {
	this.useHandCursor = value;
	return this.getHandCursor();
}
hedge.display.Sprite.prototype.setHitArea = function(value) {
	this.hitArea = value;
	return this.getHitArea();
}
hedge.display.Sprite.prototype.startDrag = function(lockCenter,bounds) {
	if(lockCenter == null) lockCenter = false;
}
hedge.display.Sprite.prototype.stopDrag = function() {
	null;
}
hedge.display.Sprite.prototype.useHandCursor = null;
hedge.display.Sprite.prototype.__class__ = hedge.display.Sprite;
hedge.display.FillType = function() { }
hedge.display.FillType.__name__ = ["hedge","display","FillType"];
hedge.display.FillType.prototype.__class__ = hedge.display.FillType;
hedge.display.CapsStyle = function() { }
hedge.display.CapsStyle.__name__ = ["hedge","display","CapsStyle"];
hedge.display.CapsStyle.prototype.__class__ = hedge.display.CapsStyle;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw ("Constructor " + constr) + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw ("Constructor " + constr) + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
if(typeof js=='undefined') js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?((i.fileName + ":") + i.lineNumber) + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += ((s + k) + " : ") + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += ("\n" + s) + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = (typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null);
	js.Lib.isOpera = (typeof window!='undefined' && window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	});
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = (this.length + len) - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
hedge.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,controlKey,clickCount) { if( type === $_ ) return; {
	if(clickCount == null) clickCount = 0;
	if(controlKey == null) controlKey = false;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.localX = localX;
	this.localY = localY;
	this.relatedObject = relatedObject;
	this.ctrlKey = ctrlKey;
	this.altKey = altKey;
	this.shiftKey = shiftKey;
	this.buttonDown = buttonDown;
	this.delta = delta;
	this.commandKey = commandKey;
	this.controlKey = controlKey;
	this.clickCount = clickCount;
	hedge.events.Event.apply(this,[this.type,this.bubbles,this.cancelable]);
}}
hedge.events.MouseEvent.__name__ = ["hedge","events","MouseEvent"];
hedge.events.MouseEvent.__super__ = hedge.events.Event;
for(var k in hedge.events.Event.prototype ) hedge.events.MouseEvent.prototype[k] = hedge.events.Event.prototype[k];
hedge.events.MouseEvent.prototype.altKey = null;
hedge.events.MouseEvent.prototype.buttonDown = null;
hedge.events.MouseEvent.prototype.clone = function() {
	return new hedge.events.MouseEvent(this.type,this.bubbles,this.cancelable,this.localX,this.localY,this.relatedObject,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.controlKey,this.clickCount);
}
hedge.events.MouseEvent.prototype.ctrlKey = null;
hedge.events.MouseEvent.prototype.delta = null;
hedge.events.MouseEvent.prototype.localX = null;
hedge.events.MouseEvent.prototype.localY = null;
hedge.events.MouseEvent.prototype.relatedObject = null;
hedge.events.MouseEvent.prototype.shiftKey = null;
hedge.events.MouseEvent.prototype.stageX = null;
hedge.events.MouseEvent.prototype.stageY = null;
hedge.events.MouseEvent.prototype.updateAfterEvent = function() {
	null;
}
hedge.events.MouseEvent.prototype.__class__ = hedge.events.MouseEvent;
hedge.display.Shape = function(p) { if( p === $_ ) return; {
	hedge.display.DisplayObject.apply(this,[]);
	this.__jq__.bind(hedge.Setup.RESIZE_ELEMENT,{ },{ });
	this._g = new hedge.display.Graphics(this);
}}
hedge.display.Shape.__name__ = ["hedge","display","Shape"];
hedge.display.Shape.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.Shape.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.Shape.prototype._g = null;
hedge.display.Shape.prototype.getGraphics = function() {
	return this._g;
}
hedge.display.Shape.prototype.graphics = null;
hedge.display.Shape.prototype.__class__ = hedge.display.Shape;
hedge.geom.Rectangle = function(x,y,width,height) { if( x === $_ ) return; {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
}}
hedge.geom.Rectangle.__name__ = ["hedge","geom","Rectangle"];
hedge.geom.Rectangle.prototype.bottom = null;
hedge.geom.Rectangle.prototype.bottomRight = null;
hedge.geom.Rectangle.prototype.clone = function() {
	return new hedge.geom.Rectangle();
}
hedge.geom.Rectangle.prototype.contains = function(x,y) {
	return true;
}
hedge.geom.Rectangle.prototype.containsPoint = function(point) {
	return true;
}
hedge.geom.Rectangle.prototype.containsRect = function(rect) {
	return true;
}
hedge.geom.Rectangle.prototype.equals = function(toCompare) {
	return true;
}
hedge.geom.Rectangle.prototype.height = null;
hedge.geom.Rectangle.prototype.inflate = function(dx,dy) {
	null;
}
hedge.geom.Rectangle.prototype.inflatePoint = function(point) {
	null;
}
hedge.geom.Rectangle.prototype.intersection = function(toIntersect) {
	return new hedge.geom.Rectangle();
}
hedge.geom.Rectangle.prototype.intersects = function(toIntersect) {
	return true;
}
hedge.geom.Rectangle.prototype.isEmpty = function() {
	return true;
}
hedge.geom.Rectangle.prototype.left = null;
hedge.geom.Rectangle.prototype.offset = function(dx,dy) {
	null;
}
hedge.geom.Rectangle.prototype.offsetPoint = function(point) {
	null;
}
hedge.geom.Rectangle.prototype.right = null;
hedge.geom.Rectangle.prototype.setEmpty = function() {
	null;
}
hedge.geom.Rectangle.prototype.size = null;
hedge.geom.Rectangle.prototype.top = null;
hedge.geom.Rectangle.prototype.topLeft = null;
hedge.geom.Rectangle.prototype.union = function(toUnion) {
	return new hedge.geom.Rectangle();
}
hedge.geom.Rectangle.prototype.width = null;
hedge.geom.Rectangle.prototype.x = null;
hedge.geom.Rectangle.prototype.y = null;
hedge.geom.Rectangle.prototype.__class__ = hedge.geom.Rectangle;
haxe.Md5 = function(p) { if( p === $_ ) return; {
	null;
}}
haxe.Md5.__name__ = ["haxe","Md5"];
haxe.Md5.encode = function(s) {
	return haxe.Md5.inst.doEncode(s);
}
haxe.Md5.prototype.addme = function(x,y) {
	var lsw = (x & 65535) + (y & 65535);
	var msw = ((x >> 16) + (y >> 16)) + (lsw >> 16);
	return (msw << 16) | (lsw & 65535);
}
haxe.Md5.prototype.bitAND = function(a,b) {
	var lsb = (a & 1) & (b & 1);
	var msb31 = (a >>> 1) & (b >>> 1);
	return (msb31 << 1) | lsb;
}
haxe.Md5.prototype.bitOR = function(a,b) {
	var lsb = (a & 1) | (b & 1);
	var msb31 = (a >>> 1) | (b >>> 1);
	return (msb31 << 1) | lsb;
}
haxe.Md5.prototype.bitXOR = function(a,b) {
	var lsb = (a & 1) ^ (b & 1);
	var msb31 = (a >>> 1) ^ (b >>> 1);
	return (msb31 << 1) | lsb;
}
haxe.Md5.prototype.cmn = function(q,a,b,x,s,t) {
	return this.addme(this.rol((this.addme(this.addme(a,q),this.addme(x,t))),s),b);
}
haxe.Md5.prototype.doEncode = function(str) {
	var x = this.str2blks(str);
	var a = 1732584193;
	var b = -271733879;
	var c = -1732584194;
	var d = 271733878;
	var step;
	var i = 0;
	while(i < x.length) {
		var olda = a;
		var oldb = b;
		var oldc = c;
		var oldd = d;
		step = 0;
		a = this.ff(a,b,c,d,x[i],7,-680876936);
		d = this.ff(d,a,b,c,x[i + 1],12,-389564586);
		c = this.ff(c,d,a,b,x[i + 2],17,606105819);
		b = this.ff(b,c,d,a,x[i + 3],22,-1044525330);
		a = this.ff(a,b,c,d,x[i + 4],7,-176418897);
		d = this.ff(d,a,b,c,x[i + 5],12,1200080426);
		c = this.ff(c,d,a,b,x[i + 6],17,-1473231341);
		b = this.ff(b,c,d,a,x[i + 7],22,-45705983);
		a = this.ff(a,b,c,d,x[i + 8],7,1770035416);
		d = this.ff(d,a,b,c,x[i + 9],12,-1958414417);
		c = this.ff(c,d,a,b,x[i + 10],17,-42063);
		b = this.ff(b,c,d,a,x[i + 11],22,-1990404162);
		a = this.ff(a,b,c,d,x[i + 12],7,1804603682);
		d = this.ff(d,a,b,c,x[i + 13],12,-40341101);
		c = this.ff(c,d,a,b,x[i + 14],17,-1502002290);
		b = this.ff(b,c,d,a,x[i + 15],22,1236535329);
		a = this.gg(a,b,c,d,x[i + 1],5,-165796510);
		d = this.gg(d,a,b,c,x[i + 6],9,-1069501632);
		c = this.gg(c,d,a,b,x[i + 11],14,643717713);
		b = this.gg(b,c,d,a,x[i],20,-373897302);
		a = this.gg(a,b,c,d,x[i + 5],5,-701558691);
		d = this.gg(d,a,b,c,x[i + 10],9,38016083);
		c = this.gg(c,d,a,b,x[i + 15],14,-660478335);
		b = this.gg(b,c,d,a,x[i + 4],20,-405537848);
		a = this.gg(a,b,c,d,x[i + 9],5,568446438);
		d = this.gg(d,a,b,c,x[i + 14],9,-1019803690);
		c = this.gg(c,d,a,b,x[i + 3],14,-187363961);
		b = this.gg(b,c,d,a,x[i + 8],20,1163531501);
		a = this.gg(a,b,c,d,x[i + 13],5,-1444681467);
		d = this.gg(d,a,b,c,x[i + 2],9,-51403784);
		c = this.gg(c,d,a,b,x[i + 7],14,1735328473);
		b = this.gg(b,c,d,a,x[i + 12],20,-1926607734);
		a = this.hh(a,b,c,d,x[i + 5],4,-378558);
		d = this.hh(d,a,b,c,x[i + 8],11,-2022574463);
		c = this.hh(c,d,a,b,x[i + 11],16,1839030562);
		b = this.hh(b,c,d,a,x[i + 14],23,-35309556);
		a = this.hh(a,b,c,d,x[i + 1],4,-1530992060);
		d = this.hh(d,a,b,c,x[i + 4],11,1272893353);
		c = this.hh(c,d,a,b,x[i + 7],16,-155497632);
		b = this.hh(b,c,d,a,x[i + 10],23,-1094730640);
		a = this.hh(a,b,c,d,x[i + 13],4,681279174);
		d = this.hh(d,a,b,c,x[i],11,-358537222);
		c = this.hh(c,d,a,b,x[i + 3],16,-722521979);
		b = this.hh(b,c,d,a,x[i + 6],23,76029189);
		a = this.hh(a,b,c,d,x[i + 9],4,-640364487);
		d = this.hh(d,a,b,c,x[i + 12],11,-421815835);
		c = this.hh(c,d,a,b,x[i + 15],16,530742520);
		b = this.hh(b,c,d,a,x[i + 2],23,-995338651);
		a = this.ii(a,b,c,d,x[i],6,-198630844);
		d = this.ii(d,a,b,c,x[i + 7],10,1126891415);
		c = this.ii(c,d,a,b,x[i + 14],15,-1416354905);
		b = this.ii(b,c,d,a,x[i + 5],21,-57434055);
		a = this.ii(a,b,c,d,x[i + 12],6,1700485571);
		d = this.ii(d,a,b,c,x[i + 3],10,-1894986606);
		c = this.ii(c,d,a,b,x[i + 10],15,-1051523);
		b = this.ii(b,c,d,a,x[i + 1],21,-2054922799);
		a = this.ii(a,b,c,d,x[i + 8],6,1873313359);
		d = this.ii(d,a,b,c,x[i + 15],10,-30611744);
		c = this.ii(c,d,a,b,x[i + 6],15,-1560198380);
		b = this.ii(b,c,d,a,x[i + 13],21,1309151649);
		a = this.ii(a,b,c,d,x[i + 4],6,-145523070);
		d = this.ii(d,a,b,c,x[i + 11],10,-1120210379);
		c = this.ii(c,d,a,b,x[i + 2],15,718787259);
		b = this.ii(b,c,d,a,x[i + 9],21,-343485551);
		a = this.addme(a,olda);
		b = this.addme(b,oldb);
		c = this.addme(c,oldc);
		d = this.addme(d,oldd);
		i += 16;
	}
	return ((this.rhex(a) + this.rhex(b)) + this.rhex(c)) + this.rhex(d);
}
haxe.Md5.prototype.ff = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND((~b),d)),a,b,x,s,t);
}
haxe.Md5.prototype.gg = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,(~d))),a,b,x,s,t);
}
haxe.Md5.prototype.hh = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
}
haxe.Md5.prototype.ii = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitXOR(c,this.bitOR(b,(~d))),a,b,x,s,t);
}
haxe.Md5.prototype.rhex = function(num) {
	var str = "";
	var hex_chr = "0123456789abcdef";
	{
		var _g = 0;
		while(_g < 4) {
			var j = _g++;
			str += hex_chr.charAt((num >> (j * 8 + 4)) & 15) + hex_chr.charAt((num >> (j * 8)) & 15);
		}
	}
	return str;
}
haxe.Md5.prototype.rol = function(num,cnt) {
	return (num << cnt) | (num >>> (32 - cnt));
}
haxe.Md5.prototype.str2blks = function(str) {
	var nblk = ((str.length + 8) >> 6) + 1;
	var blks = new Array();
	{
		var _g1 = 0, _g = (nblk * 16);
		while(_g1 < _g) {
			var i = _g1++;
			blks[i] = 0;
		}
	}
	var i = 0;
	while(i < str.length) {
		blks[i >> 2] |= str.charCodeAt(i) << (((str.length * 8 + i) % 4) * 8);
		i++;
	}
	blks[i >> 2] |= 128 << (((str.length * 8 + i) % 4) * 8);
	var l = str.length * 8;
	var k = nblk * 16 - 2;
	blks[k] = (l & 255);
	blks[k] |= ((l >>> 8) & 255) << 8;
	blks[k] |= ((l >>> 16) & 255) << 16;
	blks[k] |= ((l >>> 24) & 255) << 24;
	return blks;
}
haxe.Md5.prototype.__class__ = haxe.Md5;
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	return ((meta == null)?meta:meta.obj);
}
haxe.rtti.Meta.getStatics = function(t) {
	var meta = t.__meta__;
	return ((meta == null)?meta:meta.statics);
}
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	return ((meta == null)?meta:meta.fields);
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
hedge.display.LineType = function() { }
hedge.display.LineType.__name__ = ["hedge","display","LineType"];
hedge.display.LineType.prototype.__class__ = hedge.display.LineType;
hedge.display.Graphics = function(parent) { if( parent === $_ ) return; {
	hedge.Object.apply(this,[]);
	this.parent = parent;
	this.path = "";
	parent.__jq__.append(this.__jq__ = new $("<div>"));
	this.__jq__.attr("id",parent.__originalName__ + "-graphics").css(hedge.Setup.__attr__({ width : "100%", height : "100%"})).css("background-color","transparent");
	this.__raphael__ = new Raphael(parent.__originalName__ + "-graphics","100%","100%");
}}
hedge.display.Graphics.__name__ = ["hedge","display","Graphics"];
hedge.display.Graphics.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.display.Graphics.prototype[k] = hedge.Object.prototype[k];
hedge.display.Graphics.prototype.__element__ = null;
hedge.display.Graphics.prototype.__raphael__ = null;
hedge.display.Graphics.prototype.beginBitmapFill = function(bitmap,matrix,repeat,smooth) {
	if(smooth == null) smooth = false;
	if(repeat == null) repeat = true;
	this.fillType = "bitmapdata";
	this.bitmapdata_source = bitmap;
	this.bitmapdata_matrix = matrix;
	this.bitmapdata_repeat = repeat;
	this.bitmapdata_smooth = smooth;
}
hedge.display.Graphics.prototype.beginFill = function(color,alpha) {
	if(alpha == null) alpha = 1.0;
	this.fill_color = color;
	this.fill_alpha = alpha;
	this.fillType = "flood";
}
hedge.display.Graphics.prototype.beginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	if(interpolationMethod == null) interpolationMethod = "rgb";
	if(spreadMethod == null) spreadMethod = "pad";
	this.fillType = "gradient";
	this.fill_gradient_type = type;
	this.fill_gradient_colors = colors;
	this.fill_gradient_alphas = alphas;
	this.fill_gradient_ratios = ratios;
	this.fill_gradient_matrix = matrix;
	this.fill_gradient_spread = spreadMethod;
	this.fill_gradient_interpolation = interpolationMethod;
	this.fill_gradient_focal = focalPointRatio;
	throw "This method is not complete - not recommend to use";
	if(this.fill_gradient_colors.length != this.fill_gradient_alphas.length) {
		throw "You must have an alpha value for each color value.";
	}
	if(this.fill_gradient_colors.length != this.fill_gradient_ratios.length) {
		throw "You must have an ratio value for each color value.";
	}
}
hedge.display.Graphics.prototype.bitmapdata_matrix = null;
hedge.display.Graphics.prototype.bitmapdata_repeat = null;
hedge.display.Graphics.prototype.bitmapdata_smooth = null;
hedge.display.Graphics.prototype.bitmapdata_source = null;
hedge.display.Graphics.prototype.checkFill = function() {
	this.fillType = (this.fillType == null?"flood":this.fillType);
	switch(this.fillType) {
	case "bitmapdata":{
		throw "beginBitmapFill is not implemented";
	}break;
	case "flood":{
		this.__element__.attr("fill",(this.fill_color == null?"#ffffff":hedge.Setup.RGB_to_String(this.fill_color)));
		this.__element__.attr("opacity",(this.fill_alpha == null?1.0:this.fill_alpha));
	}break;
	case "gradient":{
		var color_alpha = "";
		{
			var _g1 = 0, _g = this.gradient_colors.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(i == 0) {
					color_alpha += hedge.Setup.RGB_to_String(this.fill_gradient_colors[i]);
				}
				else {
					color_alpha += "-" + hedge.Setup.RGB_to_String(this.fill_gradient_colors[i]);
				}
				color_alpha += ":" + ((this.fill_gradient_ratios[i] / 255) * 100);
			}
		}
		switch(this.fill_gradient_type) {
		case hedge.display.GradientType.LINEAR:{
			this.__element__.attr("fill","0-" + color_alpha);
		}break;
		case hedge.display.GradientType.RADIAL:{
			throw "Gradient.RADIAL is not supported by RaphaelJS on any thing not a circle or ellipse";
			this.__element__.attr("fill","r" + color_alpha);
		}break;
		}
	}break;
	default:{
		null;
	}break;
	}
}
hedge.display.Graphics.prototype.checkLineStyle = function() {
	this.lineType = (this.lineType == null?"plain":this.lineType);
	switch(this.lineType) {
	case "gradient":{
		null;
	}break;
	case "plain":{
		this.__element__.attr("stroke-width",(this.line_thickness == null?1.0:this.line_thickness));
		this.__element__.attr("stroke",(this.line_color == null?"none":hedge.Setup.RGB_to_String(this.line_color)));
		this.__element__.attr("stroke-opacity",(this.line_alpha == null?1.0:this.line_alpha));
		this.__element__.attr("stroke-linecap",(this.line_caps == null?"butt":this.line_caps = (this.line_caps == "none"?"butt":this.line_caps)));
		this.__element__.attr("stroke-linejoin",(this.line_joints == null?"miter":this.line_joints));
		this.__element__.attr("stroke-miterlimit",(this.line_limit == null?3.0:this.line_limit));
	}break;
	default:{
		null;
	}break;
	}
}
hedge.display.Graphics.prototype.clear = function() {
	this.__raphael__.clear();
}
hedge.display.Graphics.prototype.curveTo = function(controlX,controlY,anchorX,anchorY) {
	this.path += (((((("Q" + controlX) + " ") + controlY) + " ") + anchorX) + " ") + anchorY;
}
hedge.display.Graphics.prototype.drawCircle = function(x,y,radius) {
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	this.__element__ = this.__raphael__.circle(x,y,radius);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : radius + this.line_thickness, h : radius + this.line_thickness, p : this.parent}]);
}
hedge.display.Graphics.prototype.drawEllipse = function(x,y,width,height) {
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	width = Math.round(width / 2) - this.line_thickness;
	height = Math.round(height / 2) - this.line_thickness;
	this.__element__ = this.__raphael__.ellipse(x + width,y + height,width,height);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : (width * 2) + this.line_thickness, h : (height * 2) + this.line_thickness, p : this.parent}]);
}
hedge.display.Graphics.prototype.drawRect = function(x,y,width,height) {
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	width = width - this.line_thickness;
	height = height - this.line_thickness;
	this.__element__ = this.__raphael__.rect(x,y,width,height);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : width + this.line_thickness, h : height + this.line_thickness, p : this.parent}]);
}
hedge.display.Graphics.prototype.drawRoundRect = function(x,y,width,height,radius) {
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	width = width - this.line_thickness;
	height = height - this.line_thickness;
	this.__element__ = this.__raphael__.rect(x,y,width,height,radius);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : width + this.line_thickness, h : height - this.line_thickness, p : this.parent}]);
}
hedge.display.Graphics.prototype.endFill = function() {
	if(this.path != "" || this.path == null) {
		this.__element__ = this.__raphael__.path(this.path += " z");
		this.checkFill();
		this.checkLineStyle();
		this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : this.__element__.getBBox().x, y : this.__element__.getBBox().y, w : this.__element__.getBBox().width, h : this.__element__.getBBox().height, p : this.parent}]);
	}
}
hedge.display.Graphics.prototype.fillType = null;
hedge.display.Graphics.prototype.fill_alpha = null;
hedge.display.Graphics.prototype.fill_color = null;
hedge.display.Graphics.prototype.fill_gradient_alphas = null;
hedge.display.Graphics.prototype.fill_gradient_colors = null;
hedge.display.Graphics.prototype.fill_gradient_focal = null;
hedge.display.Graphics.prototype.fill_gradient_interpolation = null;
hedge.display.Graphics.prototype.fill_gradient_matrix = null;
hedge.display.Graphics.prototype.fill_gradient_ratios = null;
hedge.display.Graphics.prototype.fill_gradient_spread = null;
hedge.display.Graphics.prototype.fill_gradient_type = null;
hedge.display.Graphics.prototype.lineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focusPointRatio) {
	if(focusPointRatio == null) focusPointRatio = 0;
	if(interpolationMethod == null) interpolationMethod = "rgb";
	if(spreadMethod == null) spreadMethod = "pad";
	this.lineType = "gradient";
	this.line_gradient_type = type;
	this.line_gradient_colors = colors;
	this.line_gradient_alphas = alphas;
	this.line_gradient_ratios = ratios;
	this.line_gradient_matrix = matrix;
	this.line_gradient_spread = spreadMethod;
	this.line_gradient_interpolation = interpolationMethod;
	this.line_gradient_focus = focusPointRatio;
}
hedge.display.Graphics.prototype.lineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
	if(miterLimit == null) miterLimit = 3;
	if(joints == null) joints = "miter";
	if(caps == null) caps = "none";
	if(scaleMode == null) scaleMode = "normal";
	if(pixelHinting == null) pixelHinting = false;
	if(alpha == null) alpha = 1.0;
	if(color == null) color = 16777215;
	this.lineType = "plain";
	this.line_thickness = thickness;
	this.line_color = color;
	this.line_alpha = alpha;
	this.line_caps = caps;
	this.line_joints = joints;
	this.line_limit = miterLimit;
}
hedge.display.Graphics.prototype.lineTo = function(x,y) {
	this.path += (("L" + x) + " ") + y;
}
hedge.display.Graphics.prototype.lineType = null;
hedge.display.Graphics.prototype.line_alpha = null;
hedge.display.Graphics.prototype.line_caps = null;
hedge.display.Graphics.prototype.line_color = null;
hedge.display.Graphics.prototype.line_gradient_alphas = null;
hedge.display.Graphics.prototype.line_gradient_colors = null;
hedge.display.Graphics.prototype.line_gradient_focus = null;
hedge.display.Graphics.prototype.line_gradient_interpolation = null;
hedge.display.Graphics.prototype.line_gradient_matrix = null;
hedge.display.Graphics.prototype.line_gradient_ratios = null;
hedge.display.Graphics.prototype.line_gradient_spread = null;
hedge.display.Graphics.prototype.line_gradient_type = null;
hedge.display.Graphics.prototype.line_joints = null;
hedge.display.Graphics.prototype.line_limit = null;
hedge.display.Graphics.prototype.line_thickness = null;
hedge.display.Graphics.prototype.moveTo = function(x,y) {
	this.path += (("M" + x) + " ") + y;
}
hedge.display.Graphics.prototype.parent = null;
hedge.display.Graphics.prototype.path = null;
hedge.display.Graphics.prototype.__class__ = hedge.display.Graphics;
hedge.display.Stage = function(p) { if( p === $_ ) return; {
	null;
	this.__originalName__ = "Stage";
	this.__jq__ = new $("div#Stage");
}}
hedge.display.Stage.__name__ = ["hedge","display","Stage"];
hedge.display.Stage.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Stage.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Stage.prototype.align = null;
hedge.display.Stage.prototype.displayState = null;
hedge.display.Stage.prototype.focus = null;
hedge.display.Stage.prototype.frameRate = null;
hedge.display.Stage.prototype.fullScreenHeight = null;
hedge.display.Stage.prototype.fullScreenSourceRect = null;
hedge.display.Stage.prototype.fullScreenWidth = null;
hedge.display.Stage.prototype.invalidate = function() {
	null;
}
hedge.display.Stage.prototype.isFocusInaccessible = function() {
	return true;
}
hedge.display.Stage.prototype.quality = null;
hedge.display.Stage.prototype.scaleMode = null;
hedge.display.Stage.prototype.showDefaultContextMenu = null;
hedge.display.Stage.prototype.stageFocusRect = null;
hedge.display.Stage.prototype.stageHeight = null;
hedge.display.Stage.prototype.stageWidth = null;
hedge.display.Stage.prototype.__class__ = hedge.display.Stage;
if(!hedge.text) hedge.text = {}
hedge.text.TextSnapshot = function(p) { if( p === $_ ) return; {
	null;
}}
hedge.text.TextSnapshot.__name__ = ["hedge","text","TextSnapshot"];
hedge.text.TextSnapshot.prototype.charCount = null;
hedge.text.TextSnapshot.prototype.findText = function(beginIndex,textToFind,caseSensitive) {
	return 1;
}
hedge.text.TextSnapshot.prototype.getSelected = function(beginIndex,endIndex) {
	return true;
}
hedge.text.TextSnapshot.prototype.getSelectedText = function(includeLineEndings) {
	if(includeLineEndings == null) includeLineEndings = false;
	return "";
}
hedge.text.TextSnapshot.prototype.getText = function(beginIndex,endIndex,includeLineEndings) {
	if(includeLineEndings == null) includeLineEndings = false;
	return "";
}
hedge.text.TextSnapshot.prototype.getTextRunInfo = function(beginIndex,endIndex) {
	return [1];
}
hedge.text.TextSnapshot.prototype.hitTestTextNearPos = function(x,y,maxDistance) {
	if(maxDistance == null) maxDistance = 0;
	return 12.0;
}
hedge.text.TextSnapshot.prototype.setSelectColor = function(hexColor) {
	if(hexColor == null) hexColor = 16776960;
}
hedge.text.TextSnapshot.prototype.setSelected = function(beginIndex,endIndex,select) {
	null;
}
hedge.text.TextSnapshot.prototype.__class__ = hedge.text.TextSnapshot;
hedge.Setup = function() { }
hedge.Setup.__name__ = ["hedge","Setup"];
hedge.Setup.backgroundColor = null;
hedge.Setup.frameRate = null;
hedge.Setup.__version__ = null;
hedge.Setup.__project__ = null;
hedge.Setup.__jq__ = null;
hedge.Setup.__storage__ = null;
hedge.Setup.__stage__ = null;
hedge.Setup.__default__ = null;
hedge.Setup.__counter__ = null;
hedge.Setup.init = function(_callback,stageName) {
	if(stageName == null) stageName = "Stage";
	hedge.Setup.__jq__ = new $("div#Stage");
	hedge.Setup.__jq__.css(hedge.Setup.__attr__({ width : "100%", height : "100%", left : "0px", top : "0px", backgroundColor : hedge.Setup.RGB_to_String(16777215)}));
	hedge.Setup.__jq__.css("z-index",0);
	hedge.Setup.__jq__.attr(hedge.Setup.__data__({ version : 0.1, project : "jshx", haXe : "http://www.haxe.org", frameRate : 30}));
	hedge.Setup.__storage__ = new $("<div>").attr("id","storage").css({ display : "none", width : "100%", height : "100%"});
	hedge.Setup.__jq__.append(hedge.Setup.__storage__);
	hedge.Setup.__stage__ = new hedge.display.Stage();
	hedge.Setup.__stage__.setName(stageName);
	hedge.Setup.__stage__.__jq__ = hedge.Setup.__jq__;
	hedge.Setup.__default__ = new hedge.display.DisplayObjectContainer();
	hedge.Setup.__default__.setName("default_parent_object");
	hedge.Setup.createJqueryEvents();
	_callback();
}
hedge.Setup.createJqueryEvents = function() {
	var _class;
	var _meta;
	var _fields;
	var _event;
	var _name;
	{
		var _g = 0, _g1 = hedge.Setup.__events__;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			_class = Type.createInstance(e,[]);
			_name = Type.getClassName(e).split(".");
			_meta = haxe.rtti.Meta.getFields(e);
			_fields = Reflect.fields(_meta);
			_event = $.event.special[_name[_name.length - 1]] = { }
			{
				var _g2 = 0;
				while(_g2 < _fields.length) {
					var f = _fields[_g2];
					++_g2;
					_event[f] = Reflect.field(_class,f);
				}
			}
		}
	}
}
hedge.Setup.getVersion = function() {
	return hedge.Setup.__jq__.attr("data-version");
}
hedge.Setup.setVersion = function(value) {
	hedge.Setup.__jq__.attr("data-version",value);
	return value;
}
hedge.Setup.getProject = function() {
	return hedge.Setup.__jq__.attr("data-project");
}
hedge.Setup.setProject = function(value) {
	hedge.Setup.__jq__.attr("data-project",value);
	return value;
}
hedge.Setup.getBackgroundColor = function() {
	return hedge.Setup.RGB_String_to_HEX(hedge.Setup.__jq__.css("background-color"));
}
hedge.Setup.setBackgroundColor = function(value) {
	hedge.Setup.__jq__.css("background-color",hedge.Setup.RGB_to_String(value));
	return value;
}
hedge.Setup.getFrameRate = function() {
	return hedge.Setup.__jq__.attr("data-frameRate");
}
hedge.Setup.setFrameRate = function(value) {
	hedge.Setup.__jq__.attr("data-frameRate",value);
	return value;
}
hedge.Setup.__data__ = function(values) {
	Reflect.deleteField(values,"__name__");
	var _n_ = "";
	var _v_ = { }
	{
		var _g = 0, _g1 = Reflect.fields(values);
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			_n_ = n;
			_v_ = Reflect.field(values,n);
			Reflect.deleteField(values,n);
			values["data-" + _n_] = _v_;
		}
	}
	return values;
}
hedge.Setup.__attr__ = function(values) {
	var _r_ = { overflow : "hidden", position : "absolute", visibility : "visible"}
	var _t_ = { }
	Reflect.deleteField(values,"__name__");
	Reflect.deleteField(_r_,"__name__");
	{
		var _g = 0, _g1 = Reflect.fields(values);
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			_t_ = Reflect.field(values,n);
			if(_t_ != null) {
				_r_[n] = _t_;
			}
		}
	}
	return _r_;
}
hedge.Setup.generateListenerName = function(type) {
	return (("eventListener_" + type) + "_") + haxe.Md5.encode((Date.now().getTime() + "_") + Math.random());
}
hedge.Setup.generateEventName = function(type) {
	return (((hedge.Setup.getProject() + "_") + type) + ".") + hedge.Setup.__stage__.getName();
}
hedge.Setup.generateInstanceName = function() {
	return "instance" + ((hedge.Setup.__counter__++) - 1);
}
hedge.Setup.RGB_to_String = function(color) {
	return ((((("rgb(" + (color >> 16 & 255)) + ", ") + (color >> 8 & 255)) + ", ") + (color & 255)) + ")";
}
hedge.Setup.ARGB_to_String = function(color) {
	return ((((((("argb(" + (color >> 24 & 255)) + ", ") + (color >> 16 & 255)) + ", ") + (color >> 8 & 255)) + ", ") + (color & 255)) + ")";
}
hedge.Setup.RGB_String_to_HEX = function(color) {
	var values = color.substr(color.indexOf("rgb(") + 4,color.lastIndexOf(")") - 4).split(", ");
	return ((((Std.parseInt(values[0])) << 16) | ((Std.parseInt(values[1])) << 8)) | ((Std.parseInt(values[2]))));
}
hedge.Setup.ARGB_String_to_HEX = function(color) {
	var values = color.substr(color.indexOf("argb(") + 5,color.lastIndexOf(")") - 5).split(", ");
	return (((((Std.parseInt(values[3])) << 24) | ((Std.parseInt(values[0])) << 16)) | ((Std.parseInt(values[1])) << 8)) | ((Std.parseInt(values[2]))));
}
hedge.Setup.prototype.__class__ = hedge.Setup;
hedge.display.JointStyle = function() { }
hedge.display.JointStyle.__name__ = ["hedge","display","JointStyle"];
hedge.display.JointStyle.prototype.__class__ = hedge.display.JointStyle;
Main = function() { }
Main.__name__ = ["Main"];
Main.main = function() {
	if(haxe.Firebug.detect()) {
		haxe.Firebug.redirectTraces();
	}
	hedge.Setup.init($closure(Main,"launch"));
}
Main.something = function(e) {
	haxe.Log.trace(e.target,{ fileName : "Main.hx", lineNumber : 46, className : "Main", methodName : "something"});
	haxe.Log.trace(e.type,{ fileName : "Main.hx", lineNumber : 47, className : "Main", methodName : "something"});
	haxe.Log.trace(e.currentTarget + " : has been clicked",{ fileName : "Main.hx", lineNumber : 48, className : "Main", methodName : "something"});
}
Main.launch = function() {
	haxe.Log.trace("Stage Width: " + hedge.Setup.__stage__.getWidth(),{ fileName : "Main.hx", lineNumber : 53, className : "Main", methodName : "launch"});
	haxe.Log.trace("Stage Height: " + hedge.Setup.__stage__.getHeight(),{ fileName : "Main.hx", lineNumber : 54, className : "Main", methodName : "launch"});
	haxe.Log.trace("Stage Name: " + hedge.Setup.__stage__.getName(),{ fileName : "Main.hx", lineNumber : 55, className : "Main", methodName : "launch"});
	var tri = new hedge.display.Shape();
	tri.setName("tri");
	tri.getGraphics().beginFill(16711808);
	tri.getGraphics().moveTo(0,0);
	tri.getGraphics().lineTo(100,0);
	tri.getGraphics().lineTo(50,100);
	tri.getGraphics().lineTo(0,0);
	tri.getGraphics().endFill();
	tri.setX(400);
	tri.setY(75);
	haxe.Log.trace("created tri",{ fileName : "Main.hx", lineNumber : 72, className : "Main", methodName : "launch"});
	var ball = new hedge.display.Sprite();
	ball.getGraphics().beginFill(65433);
	ball.getGraphics().drawCircle(200,200,100);
	ball.getGraphics().beginFill(65280);
	ball.getGraphics().moveTo(250,0);
	ball.getGraphics().curveTo(300,0,300,50);
	ball.getGraphics().curveTo(300,100,250,100);
	ball.getGraphics().curveTo(200,0,250,0);
	ball.getGraphics().endFill();
	ball.setName("ball");
	haxe.Log.trace("created ball",{ fileName : "Main.hx", lineNumber : 84, className : "Main", methodName : "launch"});
	var bmd1 = new hedge.display.BitmapData(100,100,true,16711808);
	var bmd2 = new hedge.display.BitmapData(100,100,true,33023);
	var sp3 = new hedge.display.Sprite();
	haxe.Log.trace("created sp3",{ fileName : "Main.hx", lineNumber : 91, className : "Main", methodName : "launch"});
	sp3.setName("skialbainn");
	sp3.getGraphics().beginFill(16711680,1);
	sp3.getGraphics().lineStyle(3,0,1.0);
	sp3.getGraphics().drawRect(0,0,300,300);
	sp3.getGraphics().drawCircle(350,10,10);
	sp3.getGraphics().drawRoundRect(320,75,85,100,5);
	sp3.getGraphics().drawEllipse(600,10,60,70);
	haxe.Log.trace("changed sp3 x, y, width and height",{ fileName : "Main.hx", lineNumber : 100, className : "Main", methodName : "launch"});
	sp3.setX(100);
	sp3.setY(150);
	hedge.Lib.attachToStage(ball);
	hedge.Lib.attachToStage(sp3);
	sp3.addChild(tri);
	haxe.Log.trace(tri.getAlpha(),{ fileName : "Main.hx", lineNumber : 117, className : "Main", methodName : "launch"});
	haxe.Log.trace(ball.getAlpha(),{ fileName : "Main.hx", lineNumber : 118, className : "Main", methodName : "launch"});
	haxe.Log.trace(sp3.getAlpha(),{ fileName : "Main.hx", lineNumber : 119, className : "Main", methodName : "launch"});
}
Main.prototype.__class__ = Main;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	var d = Date;
	d.now = function() {
		return new Date();
	}
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	}
	d.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return (((((((((date.getFullYear() + "-") + ((m < 10?"0" + m:"" + m))) + "-") + ((d1 < 10?"0" + d1:"" + d1))) + " ") + ((h < 10?"0" + h:"" + h))) + ":") + ((mi < 10?"0" + mi:"" + mi))) + ":") + ((s < 10?"0" + s:"" + s));
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	js["XMLHttpRequest"] = (window.XMLHttpRequest?XMLHttpRequest:(window.ActiveXObject?function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					try {
						return new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch( $e1 ) {
						{
							var e1 = $e1;
							{
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this))));
}
hedge.display.GradientType.LINEAR = "linear";
hedge.display.GradientType.RADIAL = "radial";
hedge.jquery.events.ResizeElement.__meta__ = { fields : { add : { jquery : null}}}
hedge.events.Event.__meta__ = { statics : { ACTIVATE : { properties : ["bubbles","cancelable","currentTarget","target"]}, ADDED : { properties : ["bubbles","cancelable","currentTarget","target"]}, ADDED_TO_STAGE : { properties : ["bubbles","cancelable","currentTarget","target"]}, CANCEL : { properties : ["bubbles","cancelable","currentTarget","target"]}, CHANGE : { properties : ["bubbles","cancelable","currentTarget","target"]}, CLOSE : { properties : ["bubbles","cancelable","currentTarget","target"]}, COMPLETE : { properties : ["bubbles","cancelable","currentTarget","target"]}, CONNECT : { properties : ["bubbles","cancelable","currentTarget","target"]}, DEACTIVATE : { properties : ["bubbles","cancelable","currentTarget","target"]}, DISPLAYING : { properties : ["bubbles","cancelable","currentTarget","target"]}, ENTER_FRAME : { properties : ["bubbles","cancelable","currentTarget","target"]}, FULLSCREEN : { properties : ["bubbles","cancelable","currentTarget","target"]}, ID3 : { properties : ["bubbles","cancelable","currentTarget","target"]}, INIT : { properties : ["bubbles","cancelable","currentTarget","target"]}, MOUSE_LEAVE : { properties : ["bubbles","cancelable","currentTarget","target"]}, OPEN : { properties : ["bubbles","cancelable","currentTarget","target"]}, REMOVED : { properties : ["bubbles","cancelable","currentTarget","target"]}, REMOVED_FROM_STAGE : { properties : ["bubbles","cancelable","currentTarget","target"]}, RENDER : { properties : ["bubbles","cancelable","currentTarget","target"]}, RESIZE : { properties : ["bubbles","cancelable","currentTarget","target"]}, SCROLL : { properties : ["bubbles","cancelable","currentTarget","target"]}, SELECT : { properties : ["bubbles","cancelable","currentTarget","target"]}, SOUND_COMPLETE : { properties : ["bubbles","cancelable","currentTarget","target"]}, TAB_CHILDREN_CHANGE : { properties : ["bubbles","cancelable","currentTarget","target"]}, TAB_ENABLED_CHANGE : { properties : ["bubbles","cancelable","currentTarget","target"]}, TAB_INDEX_CHANGE : { properties : ["bubbles","cancelable","currentTarget","target"]}, UNLOAD : { properties : ["bubbles","cancelable","currentTarget","target"]}}}
hedge.events.Event.ACTIVATE = "activate";
hedge.events.Event.ADDED = "added";
hedge.events.Event.ADDED_TO_STAGE = "addedToStage";
hedge.events.Event.CANCEL = "cancel";
hedge.events.Event.CHANGE = "change";
hedge.events.Event.CLOSE = "close";
hedge.events.Event.COMPLETE = "complete";
hedge.events.Event.CONNECT = "connect";
hedge.events.Event.DEACTIVATE = "deactivate";
hedge.events.Event.DISPLAYING = "displaying";
hedge.events.Event.ENTER_FRAME = "enterFrame";
hedge.events.Event.FULLSCREEN = "fullScreen";
hedge.events.Event.ID3 = "id3";
hedge.events.Event.INIT = "init";
hedge.events.Event.MOUSE_LEAVE = "mouseLeave";
hedge.events.Event.OPEN = "open";
hedge.events.Event.REMOVED = "removed";
hedge.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
hedge.events.Event.RENDER = "render";
hedge.events.Event.RESIZE = "resize";
hedge.events.Event.SCROLL = "scroll";
hedge.events.Event.SELECT = "select";
hedge.events.Event.SOUND_COMPLETE = "soundComplete";
hedge.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
hedge.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
hedge.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
hedge.events.Event.UNLOAD = "unload";
hedge.display.FillType.FLOOD = "flood";
hedge.display.FillType.BITMAPDATA = "bitmapdata";
hedge.display.FillType.GRADIENT = "gradient";
hedge.display.CapsStyle.NONE = "none";
hedge.display.CapsStyle.ROUND = "round";
hedge.display.CapsStyle.SQUARE = "square";
js.Lib.onerror = null;
hedge.events.MouseEvent.__meta__ = { statics : { CLICK : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","localX","localY","shiftKey","commandKey","controlKey","stageX","stageY","target"]}, DOUBLE_CLICK : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","localX","localY","shiftKey","commandKey","controlKey","stageX","stageY","target"]}, MOUSE_DOWN : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","localX","localY","shiftKey","commandKey","controlKey","clickCount","stageX","stageY","target"]}, MOUSE_MOVE : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","localX","localY","shiftKey","stageX","stageY","target"]}, MOUSE_OUT : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","relatedObject","localX","localY","shiftKey","stageX","stageY","target"]}, MOUSE_OVER : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","relatedObject","localX","localY","shiftKey","stageX","stageY","target"]}, MOUSE_UP : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","localX","localY","shiftKey","commandKey","controlKey","clickCount","stageX","stageY","target"]}, MOUSE_WHEEL : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","delta","localX","localY","shiftKey","stageX","stageY","target"]}, ROLL_OUT : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","relatedObject","localX","localY","shiftKey","stageX","stageY","target"]}, ROLL_OVER : { properties : ["bubbles","buttonDown","cancelable","ctrlKey","currentTarget","relatedObject","localX","localY","shiftKey","stageX","stageY","target"]}}}
hedge.events.MouseEvent.CLICK = "click";
hedge.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
hedge.events.MouseEvent.MOUSE_DOWN = "mouseDown";
hedge.events.MouseEvent.MOUSE_MOVE = "mouseMove";
hedge.events.MouseEvent.MOUSE_OUT = "mouseOut";
hedge.events.MouseEvent.MOUSE_OVER = "mouseOver";
hedge.events.MouseEvent.MOUSE_UP = "mouseUp";
hedge.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
hedge.events.MouseEvent.ROLL_OUT = "rollOut";
hedge.events.MouseEvent.ROLL_OVER = "rollOver";
haxe.Md5.inst = new haxe.Md5();
hedge.display.LineType.PLAIN = "plain";
hedge.display.LineType.GRADIENT = "gradient";
hedge.Setup.__events__ = [hedge.jquery.events.ResizeElement];
hedge.Setup.RESIZE_ELEMENT = "ResizeElement";
hedge.display.JointStyle.MITER = "miter";
hedge.display.JointStyle.ROUND = "round";
hedge.display.JointStyle.BEVEL = "bevel";
$Main.init = Main.main();
