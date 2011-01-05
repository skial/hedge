$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof hedge=='undefined') hedge = {}
hedge.Object = function(p) { if( p === $_ ) return; {
	$s.push("hedge.Object::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
hedge.Object.__name__ = ["hedge","Object"];
hedge.Object.prototype.__jq__ = null;
hedge.Object.prototype.__class__ = hedge.Object;
if(!hedge.events) hedge.events = {}
hedge.events.IEventDispatcher = function() { }
hedge.events.IEventDispatcher.__name__ = ["hedge","events","IEventDispatcher"];
hedge.events.IEventDispatcher.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	$s.push("hedge.events.IEventDispatcher::addEventListener");
	var $spos = $s.length;
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	$s.pop();
}
hedge.events.IEventDispatcher.prototype.dispatchEvent = function(event) {
	$s.push("hedge.events.IEventDispatcher::dispatchEvent");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.events.IEventDispatcher.prototype.hasEventListener = function(type) {
	$s.push("hedge.events.IEventDispatcher::hasEventListener");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.events.IEventDispatcher.prototype.removeEventListener = function(type,listener,useCapture) {
	$s.push("hedge.events.IEventDispatcher::removeEventListener");
	var $spos = $s.length;
	if(useCapture == null) useCapture = false;
	$s.pop();
}
hedge.events.IEventDispatcher.prototype.willTrigger = function(type) {
	$s.push("hedge.events.IEventDispatcher::willTrigger");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.events.IEventDispatcher.prototype.__class__ = hedge.events.IEventDispatcher;
hedge.events.EventDispatcher = function(target) { if( target === $_ ) return; {
	$s.push("hedge.events.EventDispatcher::new");
	var $spos = $s.length;
	hedge.Object.call(this);
	$s.pop();
}}
hedge.events.EventDispatcher.__name__ = ["hedge","events","EventDispatcher"];
hedge.events.EventDispatcher.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.EventDispatcher.prototype[k] = hedge.Object.prototype[k];
hedge.events.EventDispatcher.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	$s.push("hedge.events.EventDispatcher::addEventListener");
	var $spos = $s.length;
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	if(type != hedge.events.Event.ENTER_FRAME) {
		this.__jq__.bind(type,{ },listener);
	}
	else {
		hedge.jquery.events.EnterFrame.addListener(this.__originalName__,listener);
	}
	$s.pop();
}
hedge.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	$s.push("hedge.events.EventDispatcher::dispatchEvent");
	var $spos = $s.length;
	event.target = event.target == null?this:event.target;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.events.EventDispatcher.prototype.hasEventListener = function(type) {
	$s.push("hedge.events.EventDispatcher::hasEventListener");
	var $spos = $s.length;
	var events = this.__jq__.data("events");
	{
		var $tmp = Reflect.hasField(events,type);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.events.EventDispatcher.prototype.removeEventListener = function(type,listener,useCapture) {
	$s.push("hedge.events.EventDispatcher::removeEventListener");
	var $spos = $s.length;
	if(useCapture == null) useCapture = false;
	if(type != hedge.events.Event.ENTER_FRAME) {
		this.__jq__.unbind(type,listener);
	}
	else {
		hedge.jquery.events.EnterFrame.removeListener(this.__originalName__,listener);
	}
	$s.pop();
}
hedge.events.EventDispatcher.prototype.willTrigger = function(type) {
	$s.push("hedge.events.EventDispatcher::willTrigger");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.events.EventDispatcher.prototype.__class__ = hedge.events.EventDispatcher;
hedge.events.EventDispatcher.__interfaces__ = [hedge.events.IEventDispatcher];
if(!hedge.display) hedge.display = {}
hedge.display.DisplayObject = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.DisplayObject::new");
	var $spos = $s.length;
	hedge.events.EventDispatcher.call(this);
	hedge.Setup.__storage__.append(this.__jq__ = new $("<div>"));
	this.__originalName__ = this.setName(hedge.Setup.generateInstanceName());
	this.__jq__.attr("id",this.getName()).css(hedge.Setup.__attr__({ width : "0px", height : "0px", left : "0px", top : "0px"}));
	this.__jq__.attr("data-originalName",this.__originalName__);
	this.setParent(hedge.Setup.__default__);
	$s.pop();
}}
hedge.display.DisplayObject.__name__ = ["hedge","display","DisplayObject"];
hedge.display.DisplayObject.__super__ = hedge.events.EventDispatcher;
for(var k in hedge.events.EventDispatcher.prototype ) hedge.display.DisplayObject.prototype[k] = hedge.events.EventDispatcher.prototype[k];
hedge.display.DisplayObject.prototype.__originalName__ = null;
hedge.display.DisplayObject.prototype.alpha = null;
hedge.display.DisplayObject.prototype.blendMode = null;
hedge.display.DisplayObject.prototype.cacheAsBitmap = null;
hedge.display.DisplayObject.prototype.getAlpha = function() {
	$s.push("hedge.display.DisplayObject::getAlpha");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.css("opacity");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getBackground = function() {
	$s.push("hedge.display.DisplayObject::getBackground");
	var $spos = $s.length;
	{
		var $tmp = this.opaqueBackground;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getBlendMode = function() {
	$s.push("hedge.display.DisplayObject::getBlendMode");
	var $spos = $s.length;
	{
		var $tmp = this.blendMode;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getCache = function() {
	$s.push("hedge.display.DisplayObject::getCache");
	var $spos = $s.length;
	{
		var $tmp = this.cacheAsBitmap;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getHeight = function() {
	$s.push("hedge.display.DisplayObject::getHeight");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.data("height") == null?this.__jq__.height():this.__jq__.data("height");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getMask = function() {
	$s.push("hedge.display.DisplayObject::getMask");
	var $spos = $s.length;
	{
		var $tmp = this.mask;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getMouseX = function() {
	$s.push("hedge.display.DisplayObject::getMouseX");
	var $spos = $s.length;
	{
		var $tmp = this.mouseX;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getMouseY = function() {
	$s.push("hedge.display.DisplayObject::getMouseY");
	var $spos = $s.length;
	{
		var $tmp = this.mouseY;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getName = function() {
	$s.push("hedge.display.DisplayObject::getName");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.attr("id");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getParent = function() {
	$s.push("hedge.display.DisplayObject::getParent");
	var $spos = $s.length;
	{
		var $tmp = this.parent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getRoot = function() {
	$s.push("hedge.display.DisplayObject::getRoot");
	var $spos = $s.length;
	{
		var $tmp = this.root;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getRotation = function() {
	$s.push("hedge.display.DisplayObject::getRotation");
	var $spos = $s.length;
	{
		var $tmp = this.rotation;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getScale9 = function() {
	$s.push("hedge.display.DisplayObject::getScale9");
	var $spos = $s.length;
	{
		var $tmp = this.scale9Grid;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getScaleX = function() {
	$s.push("hedge.display.DisplayObject::getScaleX");
	var $spos = $s.length;
	{
		var $tmp = this.scaleX;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getScaleY = function() {
	$s.push("hedge.display.DisplayObject::getScaleY");
	var $spos = $s.length;
	{
		var $tmp = this.scaleY;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getScrollRect = function() {
	$s.push("hedge.display.DisplayObject::getScrollRect");
	var $spos = $s.length;
	{
		var $tmp = this.scrollRect;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getStage = function() {
	$s.push("hedge.display.DisplayObject::getStage");
	var $spos = $s.length;
	{
		var $tmp = hedge.Setup.__stage__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getVisible = function() {
	$s.push("hedge.display.DisplayObject::getVisible");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.data("visible") == null?true:this.__jq__.data("visible");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getWidth = function() {
	$s.push("hedge.display.DisplayObject::getWidth");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.data("width") == null?this.__jq__.width():this.__jq__.data("width");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getX = function() {
	$s.push("hedge.display.DisplayObject::getX");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.position().left;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getY = function() {
	$s.push("hedge.display.DisplayObject::getY");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.position().top;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.height = null;
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
	$s.push("hedge.display.DisplayObject::setAlpha");
	var $spos = $s.length;
	this.__jq__.css("opacity",value);
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setBackground = function(value) {
	$s.push("hedge.display.DisplayObject::setBackground");
	var $spos = $s.length;
	this.opaqueBackground = value;
	{
		var $tmp = this.getBackground();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setBlendMode = function(value) {
	$s.push("hedge.display.DisplayObject::setBlendMode");
	var $spos = $s.length;
	this.blendMode = value;
	{
		var $tmp = this.getBlendMode();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setCache = function(value) {
	$s.push("hedge.display.DisplayObject::setCache");
	var $spos = $s.length;
	this.cacheAsBitmap = value;
	{
		var $tmp = this.getCache();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setHeight = function(value) {
	$s.push("hedge.display.DisplayObject::setHeight");
	var $spos = $s.length;
	this.__jq__.height(value);
	this.__jq__.data("height",value);
	{
		var $tmp = this.__jq__.data("height");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setMask = function(value) {
	$s.push("hedge.display.DisplayObject::setMask");
	var $spos = $s.length;
	this.mask = value;
	{
		var $tmp = this.getMask();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setName = function(value) {
	$s.push("hedge.display.DisplayObject::setName");
	var $spos = $s.length;
	this.__jq__.attr("id",value);
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setParent = function(value) {
	$s.push("hedge.display.DisplayObject::setParent");
	var $spos = $s.length;
	this.parent = value;
	{
		var $tmp = this.getParent();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setRotation = function(value) {
	$s.push("hedge.display.DisplayObject::setRotation");
	var $spos = $s.length;
	this.rotation = value;
	{
		var $tmp = this.getRotation();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setScale9 = function(value) {
	$s.push("hedge.display.DisplayObject::setScale9");
	var $spos = $s.length;
	this.scale9Grid = value;
	{
		var $tmp = this.getScale9();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setScaleX = function(value) {
	$s.push("hedge.display.DisplayObject::setScaleX");
	var $spos = $s.length;
	this.scaleX = value;
	{
		var $tmp = this.getScaleX();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setScaleY = function(value) {
	$s.push("hedge.display.DisplayObject::setScaleY");
	var $spos = $s.length;
	this.scaleY = value;
	{
		var $tmp = this.getScaleY();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setScrollRect = function(value) {
	$s.push("hedge.display.DisplayObject::setScrollRect");
	var $spos = $s.length;
	this.scrollRect = value;
	{
		var $tmp = this.getScrollRect();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setVisible = function(value) {
	$s.push("hedge.display.DisplayObject::setVisible");
	var $spos = $s.length;
	this.__jq__.css("display",value == false?"none":"block");
	this.__jq__.css("visibility",value == false?"hidden":"visible");
	this.__jq__.data("visible",value);
	{
		var $tmp = this.__jq__.data("visible");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setWidth = function(value) {
	$s.push("hedge.display.DisplayObject::setWidth");
	var $spos = $s.length;
	this.__jq__.width(value);
	this.__jq__.data("width",value);
	{
		var $tmp = this.__jq__.data("width");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setX = function(value) {
	$s.push("hedge.display.DisplayObject::setX");
	var $spos = $s.length;
	this.x = value;
	this.__jq__.css("left",("" + value) + "px");
	{
		var $tmp = this.getX();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.setY = function(value) {
	$s.push("hedge.display.DisplayObject::setY");
	var $spos = $s.length;
	this.y = value;
	this.__jq__.css("top",("" + value) + "px");
	{
		var $tmp = this.getY();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.stage = null;
hedge.display.DisplayObject.prototype.visible = null;
hedge.display.DisplayObject.prototype.width = null;
hedge.display.DisplayObject.prototype.x = null;
hedge.display.DisplayObject.prototype.y = null;
hedge.display.DisplayObject.prototype.__class__ = hedge.display.DisplayObject;
if(!hedge.geom) hedge.geom = {}
hedge.geom.Point = function(x,y) { if( x === $_ ) return; {
	$s.push("hedge.geom.Point::new");
	var $spos = $s.length;
	if(y == null) y = 0;
	if(x == null) x = 0;
	$s.pop();
}}
hedge.geom.Point.__name__ = ["hedge","geom","Point"];
hedge.geom.Point.prototype.x = null;
hedge.geom.Point.prototype.y = null;
hedge.geom.Point.prototype.__class__ = hedge.geom.Point;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	{
		var $tmp = function() {
			$s.push("Reflect::makeVarArgs@116");
			var $spos = $s.length;
			var a = new Array();
			{
				var _g1 = 0, _g = arguments.length;
				while(_g1 < _g) {
					var i = _g1++;
					a.push(arguments[i]);
				}
			}
			{
				var $tmp = f(a);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			(o2[f] = Reflect.field(o,f));
		}
	}
	{
		$s.pop();
		return o2;
	}
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	{
		var $tmp = (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	{
		var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = a == b?0:a > b?1:-1;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	{
		var $tmp = typeof(f) == "function" && f.__name__ == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
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
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
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
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	{
		var $tmp = func.apply(o,args);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
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
Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	{
		var $tmp = e[1];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	{
		var $tmp = e.slice(2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	{
		var $tmp = e[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		$s.pop();
		return true;
	}
	try {
		if(a[0] != b[0]) {
			$s.pop();
			return false;
		}
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) {
					$s.pop();
					return false;
				}
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) {
			$s.pop();
			return false;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":{
		{
			var $tmp = ValueType.TBool;
			$s.pop();
			return $tmp;
		}
	}break;
	case "string":{
		{
			var $tmp = ValueType.TClass(String);
			$s.pop();
			return $tmp;
		}
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) {
			var $tmp = ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
	}break;
	case "object":{
		if(v == null) {
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
	}break;
	case "function":{
		if(v.__name__ != null) {
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFunction;
			$s.pop();
			return $tmp;
		}
	}break;
	case "undefined":{
		{
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
	}break;
	default:{
		{
			var $tmp = ValueType.TUnknown;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	{
		var $tmp = e.__constructs__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.createEnumIndex = function(e,index,params) {
	$s.push("Type::createEnumIndex");
	var $spos = $s.length;
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	{
		var $tmp = Type.createEnum(e,c,params);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEnum = function(e,constr,params) {
	$s.push("Type::createEnum");
	var $spos = $s.length;
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw ("Constructor " + constr) + " need parameters";
		{
			var $tmp = f.apply(e,params);
			$s.pop();
			return $tmp;
		}
	}
	if(params != null && params.length != 0) throw ("Constructor " + constr) + " does not need parameters";
	{
		$s.pop();
		return f;
	}
	$s.pop();
}
Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	{
		var $tmp = new cl($_);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length <= 3) {
		var $tmp = new cl(args[0],args[1],args[2]);
		$s.pop();
		return $tmp;
	}
	if(args.length > 8) throw "Too many arguments";
	{
		var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return e;
	}
	$s.pop();
}
Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return cl;
	}
	$s.pop();
}
Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	var a = c.__name__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	{
		var $tmp = c.__super__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__enum__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClass = function(o) {
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	if(o.__enum__ != null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__class__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.prototype.__class__ = Type;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = i != null?((i.fileName + ":") + i.lineNumber) + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		{
			var $tmp = m.apply(o,arguments);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	f1.scope = o;
	f1.method = m;
	{
		$s.pop();
		return f1;
	}
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
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
				{
					var $tmp = str + ")";
					$s.pop();
					return $tmp;
				}
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			{
				$s.pop();
				return str;
			}
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					{
						$s.pop();
						return "???";
					}
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
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
		{
			$s.pop();
			return str;
		}
	}break;
	case "function":{
		{
			$s.pop();
			return "<function>";
		}
	}break;
	case "string":{
		{
			$s.pop();
			return o;
		}
	}break;
	default:{
		{
			var $tmp = String(o);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	{
		var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == Array) {
				var $tmp = (o.__enum__ == null);
				$s.pop();
				return $tmp;
			}
			{
				$s.pop();
				return true;
			}
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				if(cl == null) {
					$s.pop();
					return false;
				}
			}
		}
	}
	switch(cl) {
	case Int:{
		{
			var $tmp = Math.ceil(o%2147483648.0) === o;
			$s.pop();
			return $tmp;
		}
	}break;
	case Float:{
		{
			var $tmp = typeof(o) == "number";
			$s.pop();
			return $tmp;
		}
	}break;
	case Bool:{
		{
			var $tmp = o === true || o === false;
			$s.pop();
			return $tmp;
		}
	}break;
	case String:{
		{
			var $tmp = typeof(o) == "string";
			$s.pop();
			return $tmp;
		}
	}break;
	case Dynamic:{
		{
			$s.pop();
			return true;
		}
	}break;
	default:{
		if(o == null) {
			$s.pop();
			return false;
		}
		{
			var $tmp = o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = (typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null);
	js.Lib.isOpera = (typeof window!='undefined' && window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@205");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	}
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		$s.push("js.Boot::__init@208");
		var $spos = $s.length;
		var idx = this.indexOf(obj);
		if(idx == -1) {
			$s.pop();
			return false;
		}
		this.splice(idx,1);
		{
			$s.pop();
			return true;
		}
		$s.pop();
	}:function(obj) {
		$s.push("js.Boot::__init@213");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				{
					$s.pop();
					return true;
				}
			}
			i++;
		}
		{
			$s.pop();
			return false;
		}
		$s.pop();
	}
	Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@225");
		var $spos = $s.length;
		{
			var $tmp = { cur : 0, arr : this, hasNext : function() {
				$s.push("js.Boot::__init@225@229");
				var $spos = $s.length;
				{
					var $tmp = this.cur < this.arr.length;
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}, next : function() {
				$s.push("js.Boot::__init@225@232");
				var $spos = $s.length;
				{
					var $tmp = this.arr[this.cur++];
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}}
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@239");
		var $spos = $s.length;
		var x = this.cca(i);
		if(x != x) {
			$s.pop();
			return null;
		}
		{
			$s.pop();
			return x;
		}
		$s.pop();
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@246");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = (this.length + len) - pos;
		}
		{
			var $tmp = oldsub.apply(this,[pos,len]);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
if(typeof haxe=='undefined') haxe = {}
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.detect = function() {
	$s.push("haxe.Firebug::detect");
	var $spos = $s.length;
	try {
		{
			var $tmp = console != null && console.error != null;
			$s.pop();
			return $tmp;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
haxe.Firebug.redirectTraces = function() {
	$s.push("haxe.Firebug::redirectTraces");
	var $spos = $s.length;
	haxe.Log.trace = $closure(haxe.Firebug,"trace");
	js.Lib.setErrorHandler($closure(haxe.Firebug,"onError"));
	$s.pop();
}
haxe.Firebug.onError = function(err,stack) {
	$s.push("haxe.Firebug::onError");
	var $spos = $s.length;
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
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.Firebug.trace = function(v,inf) {
	$s.push("haxe.Firebug::trace");
	var $spos = $s.length;
	var type = inf != null && inf.customParams != null?inf.customParams[0]:null;
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = inf == null?"error":"log";
	console[type]((inf == null?"":((inf.fileName + ":") + inf.lineNumber) + " : ") + Std.string(v));
	$s.pop();
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
if(!hedge.jquery) hedge.jquery = {}
if(!hedge.jquery.events) hedge.jquery.events = {}
hedge.jquery.events.ResizeElement = function(p) { if( p === $_ ) return; {
	$s.push("hedge.jquery.events.ResizeElement::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
hedge.jquery.events.ResizeElement.__name__ = ["hedge","jquery","events","ResizeElement"];
hedge.jquery.events.ResizeElement.prototype.add = function(handleObj) {
	$s.push("hedge.jquery.events.ResizeElement::add");
	var $spos = $s.length;
	handleObj.handler = function(e,p) {
		$s.push("hedge.jquery.events.ResizeElement::add@27");
		var $spos = $s.length;
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
		$s.pop();
	}
	$s.pop();
}
hedge.jquery.events.ResizeElement.prototype.__class__ = hedge.jquery.events.ResizeElement;
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
hedge.Setup.init = function(_callback,fps,stageName) {
	$s.push("hedge.Setup::init");
	var $spos = $s.length;
	if(stageName == null) stageName = "Stage";
	if(fps == null) fps = 30;
	hedge.Setup.__jq__ = new $("div#Stage");
	hedge.Setup.__jq__.css(hedge.Setup.__attr__({ width : "100%", height : "100%", left : "0px", top : "0px", backgroundColor : hedge.Setup.RGB_to_String(16777215)}));
	hedge.Setup.__jq__.css("z-index",0);
	hedge.Setup.__jq__.attr(hedge.Setup.__data__({ version : 0.1, project : "jshx", haXe : "http://www.haxe.org"}));
	hedge.Setup.setFrameRate(fps);
	hedge.Setup.__storage__ = new $("<div>").attr("id","storage").css({ display : "none", width : "100%", height : "100%"});
	hedge.Setup.__jq__.append(hedge.Setup.__storage__);
	hedge.Setup.__stage__ = new hedge.display.Stage();
	hedge.Setup.__stage__.setName(stageName);
	hedge.Setup.__stage__.__jq__ = hedge.Setup.__jq__;
	hedge.Setup.__default__ = new hedge.display.DisplayObjectContainer();
	hedge.Setup.__default__.setName("default_parent_object");
	hedge.Setup.createJqueryEvents();
	_callback();
	$s.pop();
}
hedge.Setup.createJqueryEvents = function() {
	$s.push("hedge.Setup::createJqueryEvents");
	var $spos = $s.length;
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
			_event = ($.event.special[_name[_name.length - 1]] = { });
			{
				var _g2 = 0;
				while(_g2 < _fields.length) {
					var f = _fields[_g2];
					++_g2;
					(_event[f] = Reflect.field(_class,f));
				}
			}
		}
	}
	$s.pop();
}
hedge.Setup.getVersion = function() {
	$s.push("hedge.Setup::getVersion");
	var $spos = $s.length;
	{
		var $tmp = hedge.Setup.__jq__.attr("data-version");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.setVersion = function(value) {
	$s.push("hedge.Setup::setVersion");
	var $spos = $s.length;
	hedge.Setup.__jq__.attr("data-version",value);
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
hedge.Setup.getProject = function() {
	$s.push("hedge.Setup::getProject");
	var $spos = $s.length;
	{
		var $tmp = hedge.Setup.__jq__.attr("data-project");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.setProject = function(value) {
	$s.push("hedge.Setup::setProject");
	var $spos = $s.length;
	hedge.Setup.__jq__.attr("data-project",value);
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
hedge.Setup.getBackgroundColor = function() {
	$s.push("hedge.Setup::getBackgroundColor");
	var $spos = $s.length;
	{
		var $tmp = hedge.Setup.RGB_String_to_HEX(hedge.Setup.__jq__.css("background-color"));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.setBackgroundColor = function(value) {
	$s.push("hedge.Setup::setBackgroundColor");
	var $spos = $s.length;
	hedge.Setup.__jq__.css("background-color",hedge.Setup.RGB_to_String(value));
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
hedge.Setup.getFrameRate = function() {
	$s.push("hedge.Setup::getFrameRate");
	var $spos = $s.length;
	{
		var $tmp = hedge.Setup.__jq__.attr("data-frameRate");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.setFrameRate = function(value) {
	$s.push("hedge.Setup::setFrameRate");
	var $spos = $s.length;
	hedge.Setup.__jq__.attr("data-frameRate",value);
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
hedge.Setup.__data__ = function(values) {
	$s.push("hedge.Setup::__data__");
	var $spos = $s.length;
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
			(values["data-" + _n_] = _v_);
		}
	}
	{
		$s.pop();
		return values;
	}
	$s.pop();
}
hedge.Setup.__attr__ = function(values) {
	$s.push("hedge.Setup::__attr__");
	var $spos = $s.length;
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
				(_r_[n] = _t_);
			}
		}
	}
	{
		$s.pop();
		return _r_;
	}
	$s.pop();
}
hedge.Setup.generateInstanceName = function() {
	$s.push("hedge.Setup::generateInstanceName");
	var $spos = $s.length;
	{
		var $tmp = "instance" + (hedge.Setup.__counter__++ - 1);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.RGB_to_String = function(color) {
	$s.push("hedge.Setup::RGB_to_String");
	var $spos = $s.length;
	{
		var $tmp = ((((("rgb(" + (color >> 16 & 255)) + ", ") + (color >> 8 & 255)) + ", ") + (color & 255)) + ")";
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.canvas_RGBA_to_String = function(color) {
	$s.push("hedge.Setup::canvas_RGBA_to_String");
	var $spos = $s.length;
	{
		var $tmp = ((((((("rgba(" + (color >> 16 & 255)) + ", ") + (color >> 8 & 255)) + ", ") + (color & 255)) + ", ") + (color < 0?-(color >> 24) / 255:1)) + ")";
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.RGB_String_to_HEX = function(color) {
	$s.push("hedge.Setup::RGB_String_to_HEX");
	var $spos = $s.length;
	var values = color.substr(color.indexOf("rgb(") + 4,color.lastIndexOf(")") - 4).split(", ");
	{
		var $tmp = (((Std.parseInt(values[0]) << 16) | (Std.parseInt(values[1]) << 8)) | Std.parseInt(values[2]));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.prototype.__class__ = hedge.Setup;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	$s.push("haxe.Timer::new");
	var $spos = $s.length;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval(("haxe.Timer.arr[" + this.id) + "].run();",time_ms);
	$s.pop();
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.run = function() {
	$s.push("haxe.Timer::run");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.Timer.prototype.stop = function() {
	$s.push("haxe.Timer::stop");
	var $spos = $s.length;
	if(this.id == null) {
		$s.pop();
		return;
	}
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
	$s.pop();
}
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.__class__ = haxe.Timer;
hedge.events.Event = function(type,bubbles,cancelable) { if( type === $_ ) return; {
	$s.push("hedge.events.Event::new");
	var $spos = $s.length;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	hedge.Object.call(this);
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	$s.pop();
}}
hedge.events.Event.__name__ = ["hedge","events","Event"];
hedge.events.Event.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.Event.prototype[k] = hedge.Object.prototype[k];
hedge.events.Event.prototype.bubbles = null;
hedge.events.Event.prototype.cancelable = null;
hedge.events.Event.prototype.clone = function() {
	$s.push("hedge.events.Event::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.events.Event(this.type,this.bubbles,this.cancelable);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.events.Event.prototype.target = null;
hedge.events.Event.prototype.type = null;
hedge.events.Event.prototype.__class__ = hedge.events.Event;
StringBuf = function(p) { if( p === $_ ) return; {
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = new Array();
	$s.pop();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b[this.b.length] = x;
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	{
		var $tmp = this.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringBuf.prototype.__class__ = StringBuf;
hedge.display.BitmapData = function(width,height,transparent,fillColor,cssSelector) { if( width === $_ ) return; {
	$s.push("hedge.display.BitmapData::new");
	var $spos = $s.length;
	if(fillColor == null) fillColor = 16777215;
	if(transparent == null) transparent = true;
	this.width = width;
	this.height = height;
	this.transparent = transparent == null?true:transparent;
	this.__fillColor__ = fillColor == null?16777215:fillColor;
	this.__id__ = hedge.Setup.generateInstanceName();
	this.__source__ = cssSelector == null?null:new $(cssSelector);
	this.__canvas__ = new $("<canvas></canvas>").addClass("bitmapdata").attr("id",this.__id__).attr("width",width).attr("height",height);
	hedge.Setup.__storage__.append(this.__canvas__);
	this.__context__ = this.__canvas__[0].getContext("2d");
	if(cssSelector == null) {
		this.fillRect(new hedge.geom.Rectangle(0,0,width,height),this.__fillColor__);
	}
	else {
		this.__context__.drawImage(this.__source__[0],0,0);
	}
	$s.pop();
}}
hedge.display.BitmapData.__name__ = ["hedge","display","BitmapData"];
hedge.display.BitmapData.prototype.__canvas__ = null;
hedge.display.BitmapData.prototype.__context__ = null;
hedge.display.BitmapData.prototype.__fillColor__ = null;
hedge.display.BitmapData.prototype.__id__ = null;
hedge.display.BitmapData.prototype.__source__ = null;
hedge.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	$s.push("hedge.display.BitmapData::copyPixels");
	var $spos = $s.length;
	if(mergeAlpha == null) mergeAlpha = false;
	this.__context__.drawImage(sourceBitmapData.__canvas__[0],sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
	$s.pop();
}
hedge.display.BitmapData.prototype.fillRect = function(rect,color) {
	$s.push("hedge.display.BitmapData::fillRect");
	var $spos = $s.length;
	this.__context__.fillStyle = this.transparent == true?hedge.Setup.canvas_RGBA_to_String(color):hedge.Setup.RGB_to_String(color);
	this.__context__.fillRect(rect.x,rect.y,rect.width,rect.height);
	$s.pop();
}
hedge.display.BitmapData.prototype.getHeight = function() {
	$s.push("hedge.display.BitmapData::getHeight");
	var $spos = $s.length;
	{
		var $tmp = this.height;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.getWidth = function() {
	$s.push("hedge.display.BitmapData::getWidth");
	var $spos = $s.length;
	{
		var $tmp = this.width;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.height = null;
hedge.display.BitmapData.prototype.transparent = null;
hedge.display.BitmapData.prototype.width = null;
hedge.display.BitmapData.prototype.__class__ = hedge.display.BitmapData;
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getFields = function(t) {
	$s.push("haxe.rtti.Meta::getFields");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = meta == null?meta:meta.fields;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
hedge.Lib = function() { }
hedge.Lib.__name__ = ["hedge","Lib"];
hedge.Lib.attachToStage = function(displayobject) {
	$s.push("hedge.Lib::attachToStage");
	var $spos = $s.length;
	hedge.Setup.__stage__.addChild(displayobject);
	{
		var $tmp = hedge.Setup.__stage__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Lib.prototype.__class__ = hedge.Lib;
hedge.display.InteractiveObject = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.InteractiveObject::new");
	var $spos = $s.length;
	hedge.display.DisplayObject.call(this);
	$s.pop();
}}
hedge.display.InteractiveObject.__name__ = ["hedge","display","InteractiveObject"];
hedge.display.InteractiveObject.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.InteractiveObject.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.InteractiveObject.prototype.__class__ = hedge.display.InteractiveObject;
hedge.display.DisplayObjectContainer = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.DisplayObjectContainer::new");
	var $spos = $s.length;
	hedge.display.InteractiveObject.call(this);
	this.__jq__.bind(hedge.Setup.RESIZE_ELEMENT,{ },{ });
	$s.pop();
}}
hedge.display.DisplayObjectContainer.__name__ = ["hedge","display","DisplayObjectContainer"];
hedge.display.DisplayObjectContainer.__super__ = hedge.display.InteractiveObject;
for(var k in hedge.display.InteractiveObject.prototype ) hedge.display.DisplayObjectContainer.prototype[k] = hedge.display.InteractiveObject.prototype[k];
hedge.display.DisplayObjectContainer.prototype.addChild = function(child) {
	$s.push("hedge.display.DisplayObjectContainer::addChild");
	var $spos = $s.length;
	child.__jq__.appendTo(this.__jq__);
	child.setParent(this);
	this.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : child.getX(), y : child.getY(), w : child.getWidth(), h : child.getHeight(), p : this}]);
	{
		$s.pop();
		return child;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.getMouseChildren = function() {
	$s.push("hedge.display.DisplayObjectContainer::getMouseChildren");
	var $spos = $s.length;
	{
		var $tmp = this.mouseChildren;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.getNumChildren = function() {
	$s.push("hedge.display.DisplayObjectContainer::getNumChildren");
	var $spos = $s.length;
	{
		var $tmp = this.numChildren;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.getTabChildren = function() {
	$s.push("hedge.display.DisplayObjectContainer::getTabChildren");
	var $spos = $s.length;
	{
		var $tmp = this.tabChildren;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.getTextSnapshot = function() {
	$s.push("hedge.display.DisplayObjectContainer::getTextSnapshot");
	var $spos = $s.length;
	{
		var $tmp = this.textSnapshot;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.mouseChildren = null;
hedge.display.DisplayObjectContainer.prototype.numChildren = null;
hedge.display.DisplayObjectContainer.prototype.setMouseChildren = function(value) {
	$s.push("hedge.display.DisplayObjectContainer::setMouseChildren");
	var $spos = $s.length;
	this.mouseChildren = value;
	{
		var $tmp = this.getMouseChildren();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.setNumChildren = function(value) {
	$s.push("hedge.display.DisplayObjectContainer::setNumChildren");
	var $spos = $s.length;
	this.numChildren = value;
	{
		var $tmp = this.getNumChildren();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.setTabChildren = function(value) {
	$s.push("hedge.display.DisplayObjectContainer::setTabChildren");
	var $spos = $s.length;
	this.tabChildren = value;
	{
		var $tmp = this.getTabChildren();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.tabChildren = null;
hedge.display.DisplayObjectContainer.prototype.textSnapshot = null;
hedge.display.DisplayObjectContainer.prototype.__class__ = hedge.display.DisplayObjectContainer;
hedge.display.Sprite = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.Sprite::new");
	var $spos = $s.length;
	hedge.display.DisplayObjectContainer.call(this);
	this._g = new hedge.display.Graphics(this);
	$s.pop();
}}
hedge.display.Sprite.__name__ = ["hedge","display","Sprite"];
hedge.display.Sprite.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Sprite.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Sprite.prototype._g = null;
hedge.display.Sprite.prototype.buttonMode = null;
hedge.display.Sprite.prototype.dropTarget = null;
hedge.display.Sprite.prototype.getButtonMode = function() {
	$s.push("hedge.display.Sprite::getButtonMode");
	var $spos = $s.length;
	{
		var $tmp = this.buttonMode;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.getDropTarget = function() {
	$s.push("hedge.display.Sprite::getDropTarget");
	var $spos = $s.length;
	{
		var $tmp = this.dropTarget;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.getGraphics = function() {
	$s.push("hedge.display.Sprite::getGraphics");
	var $spos = $s.length;
	{
		var $tmp = this._g;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.getHandCursor = function() {
	$s.push("hedge.display.Sprite::getHandCursor");
	var $spos = $s.length;
	{
		var $tmp = this.useHandCursor;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.getHitArea = function() {
	$s.push("hedge.display.Sprite::getHitArea");
	var $spos = $s.length;
	{
		var $tmp = this.hitArea;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.graphics = null;
hedge.display.Sprite.prototype.hitArea = null;
hedge.display.Sprite.prototype.setButtonMode = function(value) {
	$s.push("hedge.display.Sprite::setButtonMode");
	var $spos = $s.length;
	this.buttonMode = value;
	{
		var $tmp = this.getButtonMode();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.setDropTarget = function(value) {
	$s.push("hedge.display.Sprite::setDropTarget");
	var $spos = $s.length;
	this.dropTarget = value;
	{
		var $tmp = this.getDropTarget();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.setHandCursor = function(value) {
	$s.push("hedge.display.Sprite::setHandCursor");
	var $spos = $s.length;
	this.useHandCursor = value;
	{
		var $tmp = this.getHandCursor();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.setHitArea = function(value) {
	$s.push("hedge.display.Sprite::setHitArea");
	var $spos = $s.length;
	this.hitArea = value;
	{
		var $tmp = this.getHitArea();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Sprite.prototype.useHandCursor = null;
hedge.display.Sprite.prototype.__class__ = hedge.display.Sprite;
hedge.display.Stage = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.Stage::new");
	var $spos = $s.length;
	null;
	this.__originalName__ = "Stage";
	this.__jq__ = new $("div#Stage");
	$s.pop();
}}
hedge.display.Stage.__name__ = ["hedge","display","Stage"];
hedge.display.Stage.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Stage.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Stage.prototype.__class__ = hedge.display.Stage;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
Hash = function(p) { if( p === $_ ) return; {
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
	$s.pop();
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		{
			var $tmp = this.hasOwnProperty.call(this.h,key);
			$s.pop();
			return $tmp;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h["$" + key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("Hash::iterator@81");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Hash::iterator@82");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref["$" + i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	(s.b[s.b.length] = "{");
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		(s.b[s.b.length] = i);
		(s.b[s.b.length] = " => ");
		(s.b[s.b.length] = Std.string(this.get(i)));
		if(it.hasNext()) (s.b[s.b.length] = ", ");
	}
	}}
	(s.b[s.b.length] = "}");
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.__class__ = Hash;
hedge.display.Shape = function() { }
hedge.display.Shape.__name__ = ["hedge","display","Shape"];
hedge.display.Shape.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.Shape.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.Shape.prototype._g = null;
hedge.display.Shape.prototype.getGraphics = function() {
	$s.push("hedge.display.Shape::getGraphics");
	var $spos = $s.length;
	{
		var $tmp = this._g;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Shape.prototype.graphics = null;
hedge.display.Shape.prototype.__class__ = hedge.display.Shape;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__instanceof(v,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__string_rec(s,"");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = Math.floor(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) {
		$s.pop();
		return null;
	}
	{
		var $tmp = v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	{
		var $tmp = parseFloat(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	{
		var $tmp = Math.floor(Math.random() * x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.prototype.__class__ = Std;
hedge.display.Graphics = function(parent) { if( parent === $_ ) return; {
	$s.push("hedge.display.Graphics::new");
	var $spos = $s.length;
	hedge.Object.call(this);
	this.parent = parent;
	this.path = "";
	parent.__jq__.append(this.__jq__ = new $("<div>"));
	this.__jq__.attr("id",parent.__originalName__ + "-graphics").css(hedge.Setup.__attr__({ width : "100%", height : "100%"})).css("background-color","transparent");
	this.__raphael__ = new Raphael(parent.__originalName__ + "-graphics","100%","100%");
	$s.pop();
}}
hedge.display.Graphics.__name__ = ["hedge","display","Graphics"];
hedge.display.Graphics.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.display.Graphics.prototype[k] = hedge.Object.prototype[k];
hedge.display.Graphics.prototype.__raphael__ = null;
hedge.display.Graphics.prototype.parent = null;
hedge.display.Graphics.prototype.path = null;
hedge.display.Graphics.prototype.__class__ = hedge.display.Graphics;
Main = function() { }
Main.__name__ = ["Main"];
Main.main = function() {
	$s.push("Main::main");
	var $spos = $s.length;
	if(haxe.Firebug.detect()) {
		haxe.Firebug.redirectTraces();
	}
	hedge.Setup.init($closure(Main,"launch"),15);
	$s.pop();
}
Main.launch = function() {
	$s.push("Main::launch");
	var $spos = $s.length;
	hedge.Lib.attachToStage(new Examples());
	$s.pop();
}
Main.prototype.__class__ = Main;
Examples = function(p) { if( p === $_ ) return; {
	$s.push("Examples::new");
	var $spos = $s.length;
	hedge.display.Sprite.call(this);
	var numBunniesTxt = new hedge.text.TextField();
	this.addChild(new BlitTest());
	this.addChild(numBunniesTxt);
	$s.pop();
}}
Examples.__name__ = ["Examples"];
Examples.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) Examples.prototype[k] = hedge.display.Sprite.prototype[k];
Examples.prototype.__class__ = Examples;
BlitTest = function(p) { if( p === $_ ) return; {
	$s.push("BlitTest::new");
	var $spos = $s.length;
	hedge.display.Sprite.call(this);
	this.bunnies = new Array();
	var bunnyAsset;
	bunnyAsset = new hedge.display.BitmapData(26,37,true,null,"img#wabbit_alpha");
	var bunny;
	{
		var _g1 = 0, _g = BlitTest.numBunnies;
		while(_g1 < _g) {
			var i = _g1++;
			bunny = { position : new hedge.geom.Point(), bitmapData : bunnyAsset, speedX : Math.random() * 10, speedY : (Math.random() * 10) - 5}
			this.bunnies[i] = bunny;
		}
	}
	this.bitmap = new hedge.display.Bitmap(new hedge.display.BitmapData(BlitTest.maxX,BlitTest.maxY,true));
	this.bitmap.setName("bitmapSkial");
	this.addChild(this.bitmap);
	this.addEventListener(hedge.events.Event.ENTER_FRAME,$closure(this,"onEnterFrame"));
	$s.pop();
}}
BlitTest.__name__ = ["BlitTest"];
BlitTest.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) BlitTest.prototype[k] = hedge.display.Sprite.prototype[k];
BlitTest.prototype.bitmap = null;
BlitTest.prototype.bunnies = null;
BlitTest.prototype.onEnterFrame = function(e) {
	$s.push("BlitTest::onEnterFrame");
	var $spos = $s.length;
	this.bitmap.getBitmapData().fillRect(new hedge.geom.Rectangle(0,0,BlitTest.maxX,BlitTest.maxY),16777215);
	var sourceRect = new hedge.geom.Rectangle(0,0,26,37);
	var bunny;
	{
		var _g1 = 0, _g = BlitTest.numBunnies;
		while(_g1 < _g) {
			var i = _g1++;
			bunny = this.bunnies[i];
			bunny.position.x += bunny.speedX;
			bunny.position.y += bunny.speedY;
			bunny.speedY += BlitTest.gravity;
			if(bunny.position.x > BlitTest.maxX) {
				bunny.speedX *= -1;
				bunny.position.x = BlitTest.maxX;
			}
			else if(bunny.position.x < BlitTest.minX) {
				bunny.speedX *= -1;
				bunny.position.x = BlitTest.minX;
			}
			if(bunny.position.y > BlitTest.maxY) {
				bunny.speedY *= -0.8;
				bunny.position.y = BlitTest.maxY;
				if(Math.random() > 0.5) {
					bunny.speedY -= Math.random() * 12;
				}
			}
			else if(bunny.position.y < BlitTest.minY) {
				bunny.speedY = 0;
				bunny.position.y = BlitTest.minY;
			}
			this.bitmap.getBitmapData().copyPixels(bunny.bitmapData,sourceRect,bunny.position,null,null,true);
		}
	}
	$s.pop();
}
BlitTest.prototype.__class__ = BlitTest;
if(!hedge.text) hedge.text = {}
hedge.text.TextField = function(p) { if( p === $_ ) return; {
	$s.push("hedge.text.TextField::new");
	var $spos = $s.length;
	hedge.display.InteractiveObject.call(this);
	this.__jq__.append(this.__ta__ = new $("<textarea></textarea>"));
	this.__ta__.css({ background : "none", border : "none", overflow : "none", resize : "none", outline : "none"}).css("border-width","0px").width("100%").height("100%");
	this.setWidth(this.setHeight(100));
	this.setType("dynamic");
	$s.pop();
}}
hedge.text.TextField.__name__ = ["hedge","text","TextField"];
hedge.text.TextField.__super__ = hedge.display.InteractiveObject;
for(var k in hedge.display.InteractiveObject.prototype ) hedge.text.TextField.prototype[k] = hedge.display.InteractiveObject.prototype[k];
hedge.text.TextField.prototype.__ta__ = null;
hedge.text.TextField.prototype.getText = function() {
	$s.push("hedge.text.TextField::getText");
	var $spos = $s.length;
	{
		var $tmp = this.textDependsOnType();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.getType = function() {
	$s.push("hedge.text.TextField::getType");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.attr("data-type");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.getWordWrap = function() {
	$s.push("hedge.text.TextField::getWordWrap");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.attr("data-wordWrap");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setText = function(value) {
	$s.push("hedge.text.TextField::setText");
	var $spos = $s.length;
	this.textDependsOnType(value);
	{
		var $tmp = this.textDependsOnType();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setType = function(value) {
	$s.push("hedge.text.TextField::setType");
	var $spos = $s.length;
	if(value == "dynamic") {
		this.__ta__.attr({ readonly : true});
	}
	else if(value == "input") {
		this.__ta__.attr({ readonly : false});
	}
	this.__jq__.attr("data-type",value);
	{
		var $tmp = this.__jq__.attr("data-type");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setWordWrap = function(value) {
	$s.push("hedge.text.TextField::setWordWrap");
	var $spos = $s.length;
	this.__jq__.css("white-space",value == true?"normal":"nowrap");
	this.__jq__.attr("data-wordWrap",value);
	{
		var $tmp = this.__jq__.attr("data-wordWrap");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.text = null;
hedge.text.TextField.prototype.textDependsOnType = null;
hedge.text.TextField.prototype.type = null;
hedge.text.TextField.prototype.wordWrap = null;
hedge.text.TextField.prototype.__class__ = hedge.text.TextField;
hedge.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) { if( bitmapData === $_ ) return; {
	$s.push("hedge.display.Bitmap::new");
	var $spos = $s.length;
	if(smoothing == null) smoothing = false;
	if(pixelSnapping == null) pixelSnapping = "auto";
	hedge.display.DisplayObject.call(this);
	this.setBitmapData(bitmapData);
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	$s.pop();
}}
hedge.display.Bitmap.__name__ = ["hedge","display","Bitmap"];
hedge.display.Bitmap.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.Bitmap.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.Bitmap.prototype.bitmapData = null;
hedge.display.Bitmap.prototype.getBitmapData = function() {
	$s.push("hedge.display.Bitmap::getBitmapData");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.data("bitmapdata");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.Bitmap.prototype.pixelSnapping = null;
hedge.display.Bitmap.prototype.setBitmapData = function(value) {
	$s.push("hedge.display.Bitmap::setBitmapData");
	var $spos = $s.length;
	this.setWidth(value.getWidth());
	this.setHeight(value.getHeight());
	this.__jq__.append(value.__canvas__);
	this.__jq__.data("bitmapdata",value);
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
hedge.display.Bitmap.prototype.smoothing = null;
hedge.display.Bitmap.prototype.__class__ = hedge.display.Bitmap;
hedge.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,controlKey,clickCount) { if( type === $_ ) return; {
	$s.push("hedge.events.MouseEvent::new");
	var $spos = $s.length;
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
	hedge.events.Event.call(this,this.type,this.bubbles,this.cancelable);
	$s.pop();
}}
hedge.events.MouseEvent.__name__ = ["hedge","events","MouseEvent"];
hedge.events.MouseEvent.__super__ = hedge.events.Event;
for(var k in hedge.events.Event.prototype ) hedge.events.MouseEvent.prototype[k] = hedge.events.Event.prototype[k];
hedge.events.MouseEvent.prototype.altKey = null;
hedge.events.MouseEvent.prototype.buttonDown = null;
hedge.events.MouseEvent.prototype.clone = function() {
	$s.push("hedge.events.MouseEvent::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.events.MouseEvent(this.type,this.bubbles,this.cancelable,this.localX,this.localY,this.relatedObject,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.controlKey,this.clickCount);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.events.MouseEvent.prototype.ctrlKey = null;
hedge.events.MouseEvent.prototype.delta = null;
hedge.events.MouseEvent.prototype.localX = null;
hedge.events.MouseEvent.prototype.localY = null;
hedge.events.MouseEvent.prototype.relatedObject = null;
hedge.events.MouseEvent.prototype.shiftKey = null;
hedge.events.MouseEvent.prototype.__class__ = hedge.events.MouseEvent;
hedge.geom.Rectangle = function(x,y,width,height) { if( x === $_ ) return; {
	$s.push("hedge.geom.Rectangle::new");
	var $spos = $s.length;
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	$s.pop();
}}
hedge.geom.Rectangle.__name__ = ["hedge","geom","Rectangle"];
hedge.geom.Rectangle.prototype.height = null;
hedge.geom.Rectangle.prototype.width = null;
hedge.geom.Rectangle.prototype.x = null;
hedge.geom.Rectangle.prototype.y = null;
hedge.geom.Rectangle.prototype.__class__ = hedge.geom.Rectangle;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.document = null;
js.Lib.window = null;
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
hedge.jquery.events.EnterFrame = function() { }
hedge.jquery.events.EnterFrame.__name__ = ["hedge","jquery","events","EnterFrame"];
hedge.jquery.events.EnterFrame.interval = null;
hedge.jquery.events.EnterFrame.timer = null;
hedge.jquery.events.EnterFrame.addListener = function(name,listener) {
	$s.push("hedge.jquery.events.EnterFrame::addListener");
	var $spos = $s.length;
	hedge.jquery.events.EnterFrame.data.set(name,listener);
	hedge.jquery.events.EnterFrame.events.push(name);
	if(hedge.jquery.events.EnterFrame.events.length != 0) {
		hedge.jquery.events.EnterFrame.running = true;
		hedge.jquery.events.EnterFrame.determineFrameRate();
		hedge.jquery.events.EnterFrame.timer = new haxe.Timer(hedge.jquery.events.EnterFrame.interval);
		hedge.jquery.events.EnterFrame.timer.run = $closure(hedge.jquery.events.EnterFrame,"runEnterFrame");
	}
	$s.pop();
}
hedge.jquery.events.EnterFrame.removeListener = function(name,listener) {
	$s.push("hedge.jquery.events.EnterFrame::removeListener");
	var $spos = $s.length;
	if(hedge.jquery.events.EnterFrame.data.exists(name) == true) {
		hedge.jquery.events.EnterFrame.data.remove(name);
		hedge.jquery.events.EnterFrame.events.remove(name);
		if(hedge.jquery.events.EnterFrame.events.length == 0) {
			hedge.jquery.events.EnterFrame.running = false;
			hedge.jquery.events.EnterFrame.timer.stop();
		}
	}
	$s.pop();
}
hedge.jquery.events.EnterFrame.determineFrameRate = function() {
	$s.push("hedge.jquery.events.EnterFrame::determineFrameRate");
	var $spos = $s.length;
	hedge.jquery.events.EnterFrame.interval = 1000 / hedge.Setup.getFrameRate();
	$s.pop();
}
hedge.jquery.events.EnterFrame.runEnterFrame = function() {
	$s.push("hedge.jquery.events.EnterFrame::runEnterFrame");
	var $spos = $s.length;
	if(hedge.jquery.events.EnterFrame.running == true) {
		{
			var _g = 0, _g1 = hedge.jquery.events.EnterFrame.events;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				(hedge.jquery.events.EnterFrame.data.get(i))("");
			}
		}
	}
	else {
		hedge.jquery.events.EnterFrame.timer.stop();
	}
	$s.pop();
}
hedge.jquery.events.EnterFrame.prototype.__class__ = hedge.jquery.events.EnterFrame;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
		$s.push("hedge.jquery.events.EnterFrame::runEnterFrame");
		var $spos = $s.length;
		try {
			{
				var $tmp = new ActiveXObject("Msxml2.XMLHTTP");
				$s.pop();
				return $tmp;
			}
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					try {
						{
							var $tmp = new ActiveXObject("Microsoft.XMLHTTP");
							$s.pop();
							return $tmp;
						}
					}
					catch( $e1 ) {
						{
							var e1 = $e1;
							{
								$e = [];
								while($s.length >= $spos) $e.unshift($s.pop());
								$s.push($e[0]);
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
		$s.pop();
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this));
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("hedge.jquery.events.EnterFrame::runEnterFrame");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("hedge.jquery.events.EnterFrame::runEnterFrame");
		var $spos = $s.length;
		{
			var $tmp = isNaN(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
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
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
hedge.jquery.events.ResizeElement.__meta__ = { fields : { add : { jquery : null}}}
hedge.Setup.__events__ = [hedge.jquery.events.ResizeElement];
hedge.Setup.RESIZE_ELEMENT = "ResizeElement";
haxe.Timer.arr = new Array();
hedge.events.Event.__meta__ = { statics : { ENTER_FRAME : { properties : ["bubbles","cancelable","currentTarget","target"]}}}
hedge.events.Event.ENTER_FRAME = "enterFrame";
BlitTest.numBunnies = 3000;
BlitTest.gravity = 3;
BlitTest.maxX = 640;
BlitTest.minX = 0;
BlitTest.maxY = 480;
BlitTest.minY = 0;
js.Lib.onerror = null;
hedge.jquery.events.EnterFrame.data = new Hash();
hedge.jquery.events.EnterFrame.events = new Array();
hedge.jquery.events.EnterFrame.running = false;
Main.main()