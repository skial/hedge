$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof hedge=='undefined') hedge = {}
hedge.Object = function(p) { if( p === $_ ) return; {
	$s.push("hedge.Object::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
hedge.Object.__name__ = ["hedge","Object"];
hedge.Object.constructor = null;
hedge.Object.prototype.__jq__ = null;
hedge.Object.prototype.hasOwnProperty = function(name) {
	$s.push("hedge.Object::hasOwnProperty");
	var $spos = $s.length;
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
hedge.Object.prototype.isPrototypeOf = function(theClass) {
	$s.push("hedge.Object::isPrototypeOf");
	var $spos = $s.length;
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
hedge.Object.prototype.propertyIsEnumerable = function(name) {
	$s.push("hedge.Object::propertyIsEnumerable");
	var $spos = $s.length;
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
hedge.Object.prototype.setPropertyIsEnumerable = function(name,isEnum) {
	$s.push("hedge.Object::setPropertyIsEnumerable");
	var $spos = $s.length;
	if(isEnum == null) isEnum = true;
	$s.pop();
}
hedge.Object.prototype.valueOf = function() {
	$s.push("hedge.Object::valueOf");
	var $spos = $s.length;
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
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
	hedge.Object.apply(this,[]);
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
	this.__jq__.bind(type,{ },listener);
	$s.pop();
}
hedge.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	$s.push("hedge.events.EventDispatcher::dispatchEvent");
	var $spos = $s.length;
	event.target = (event.target == null?this:event.target);
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
	this.__jq__.unbind(type,listener);
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
hedge.display.IBitmapDrawable = function() { }
hedge.display.IBitmapDrawable.__name__ = ["hedge","display","IBitmapDrawable"];
hedge.display.IBitmapDrawable.prototype.__class__ = hedge.display.IBitmapDrawable;
hedge.display.DisplayObject = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.DisplayObject::new");
	var $spos = $s.length;
	hedge.events.EventDispatcher.apply(this,[]);
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
hedge.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	$s.push("hedge.display.DisplayObject::getBounds");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Rectangle();
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
		var $tmp = (this.__jq__.data("height") == null?this.__jq__.height():this.__jq__.data("height"));
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
hedge.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	$s.push("hedge.display.DisplayObject::getRect");
	var $spos = $s.length;
	{
		$s.pop();
		return "rectangle";
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
		var $tmp = (this.__jq__.data("visible") == null?true:this.__jq__.data("visible"));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.getWidth = function() {
	$s.push("hedge.display.DisplayObject::getWidth");
	var $spos = $s.length;
	{
		var $tmp = (this.__jq__.data("width") == null?this.__jq__.width():this.__jq__.data("width"));
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
hedge.display.DisplayObject.prototype.hitTestObject = function(obj) {
	$s.push("hedge.display.DisplayObject::hitTestObject");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.hitTestPoint = function(x,y,shapeFlag) {
	$s.push("hedge.display.DisplayObject::hitTestPoint");
	var $spos = $s.length;
	if(shapeFlag == null) shapeFlag = false;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.display.DisplayObject.prototype.localToGlobal = function(point) {
	$s.push("hedge.display.DisplayObject::localToGlobal");
	var $spos = $s.length;
	{
		$s.pop();
		return "point";
	}
	$s.pop();
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
	this.__jq__.css("display",(value == false?"none":"block"));
	this.__jq__.css("visibility",(value == false?"hidden":"visible"));
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
hedge.display.DisplayObject.__interfaces__ = [hedge.display.IBitmapDrawable];
hedge.display.InteractiveObject = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.InteractiveObject::new");
	var $spos = $s.length;
	hedge.display.DisplayObject.apply(this,[]);
	$s.pop();
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
	$s.push("hedge.display.DisplayObjectContainer::new");
	var $spos = $s.length;
	hedge.display.InteractiveObject.apply(this,[]);
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
hedge.display.DisplayObjectContainer.prototype.addChildAt = function(child,index) {
	$s.push("hedge.display.DisplayObjectContainer::addChildAt");
	var $spos = $s.length;
	{
		var $tmp = new hedge.display.DisplayObject();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.areInaccessibleObjectsUnderPoint = function(point) {
	$s.push("hedge.display.DisplayObjectContainer::areInaccessibleObjectsUnderPoint");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.contains = function(child) {
	$s.push("hedge.display.DisplayObjectContainer::contains");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	$s.push("hedge.display.DisplayObjectContainer::getChildAt");
	var $spos = $s.length;
	{
		var $tmp = new hedge.display.DisplayObject();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.getChildByName = function(name) {
	$s.push("hedge.display.DisplayObjectContainer::getChildByName");
	var $spos = $s.length;
	{
		var $tmp = new hedge.display.DisplayObject();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	$s.push("hedge.display.DisplayObjectContainer::getChildIndex");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
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
hedge.display.DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point) {
	$s.push("hedge.display.DisplayObjectContainer::getObjectsUnderPoint");
	var $spos = $s.length;
	{
		var $tmp = [0,0];
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
hedge.display.DisplayObjectContainer.prototype.onChildAdded = function(e) {
	$s.push("hedge.display.DisplayObjectContainer::onChildAdded");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.onChildRemoved = function(e) {
	$s.push("hedge.display.DisplayObjectContainer::onChildRemoved");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	$s.push("hedge.display.DisplayObjectContainer::removeChild");
	var $spos = $s.length;
	{
		var $tmp = new hedge.display.DisplayObject();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.removeChildAt = function(index) {
	$s.push("hedge.display.DisplayObjectContainer::removeChildAt");
	var $spos = $s.length;
	{
		var $tmp = new hedge.display.DisplayObject();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.setChildIndex = function(child,index) {
	$s.push("hedge.display.DisplayObjectContainer::setChildIndex");
	var $spos = $s.length;
	null;
	$s.pop();
}
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
hedge.display.DisplayObjectContainer.prototype.swapChildren = function(child1,child2) {
	$s.push("hedge.display.DisplayObjectContainer::swapChildren");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.swapChildrenAt = function(index1,index2) {
	$s.push("hedge.display.DisplayObjectContainer::swapChildrenAt");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.DisplayObjectContainer.prototype.tabChildren = null;
hedge.display.DisplayObjectContainer.prototype.textSnapshot = null;
hedge.display.DisplayObjectContainer.prototype.__class__ = hedge.display.DisplayObjectContainer;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	{
		var $tmp = encodeURIComponent(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	{
		var $tmp = decodeURIComponent(s.split("+").join(" "));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	{
		var $tmp = (s.length >= start.length && s.substr(0,start.length) == start);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	{
		var $tmp = (slen >= elen && s.substr(slen - elen,elen) == end);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	{
		var $tmp = (c >= 9 && c <= 13) || c == 32;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	}
	else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,(l - r) - 1)) {
		r++;
	}
	if(r > 0) {
		{
			var $tmp = s.substr(0,l - r);
			$s.pop();
			return $tmp;
		}
	}
	else {
		{
			$s.pop();
			return s;
		}
	}
	$s.pop();
}
StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	{
		var $tmp = StringTools.ltrim(StringTools.rtrim(s));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
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
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		$s.pop();
		return s;
	}
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
	{
		var $tmp = ns + s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	{
		var $tmp = s.split(sub).join(by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.prototype.__class__ = StringTools;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
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
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
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
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = ((a == b)?0:((((a) > (b))?1:-1)));
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
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	{
		$s.pop();
		return o2;
	}
	$s.pop();
}
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
Reflect.prototype.__class__ = Reflect;
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
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
if(!hedge.filters) hedge.filters = {}
hedge.filters.BitmapFilter = function(p) { if( p === $_ ) return; {
	$s.push("hedge.filters.BitmapFilter::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
hedge.filters.BitmapFilter.__name__ = ["hedge","filters","BitmapFilter"];
hedge.filters.BitmapFilter.prototype.clone = function() {
	$s.push("hedge.filters.BitmapFilter::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.filters.BitmapFilter();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.filters.BitmapFilter.prototype.__class__ = hedge.filters.BitmapFilter;
hedge.display.GradientType = function() { }
hedge.display.GradientType.__name__ = ["hedge","display","GradientType"];
hedge.display.GradientType.prototype.__class__ = hedge.display.GradientType;
if(!hedge.utils) hedge.utils = {}
hedge.utils.ByteArray = function(p) { if( p === $_ ) return; {
	$s.push("hedge.utils.ByteArray::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
hedge.utils.ByteArray.__name__ = ["hedge","utils","ByteArray"];
hedge.utils.ByteArray.prototype.bytesAvailable = null;
hedge.utils.ByteArray.prototype.compress = function(algorithm) {
	$s.push("hedge.utils.ByteArray::compress");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.defaultObjectEncoding = null;
hedge.utils.ByteArray.prototype.endian = null;
hedge.utils.ByteArray.prototype.length = null;
hedge.utils.ByteArray.prototype.objectEncoding = null;
hedge.utils.ByteArray.prototype.position = null;
hedge.utils.ByteArray.prototype.readBoolean = function() {
	$s.push("hedge.utils.ByteArray::readBoolean");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readByte = function() {
	$s.push("hedge.utils.ByteArray::readByte");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readBytes = function(bytes,offset,length) {
	$s.push("hedge.utils.ByteArray::readBytes");
	var $spos = $s.length;
	if(length == null) length = 0;
	if(offset == null) offset = 0;
	$s.pop();
}
hedge.utils.ByteArray.prototype.readDouble = function() {
	$s.push("hedge.utils.ByteArray::readDouble");
	var $spos = $s.length;
	{
		$s.pop();
		return 12.0;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readFloat = function() {
	$s.push("hedge.utils.ByteArray::readFloat");
	var $spos = $s.length;
	{
		$s.pop();
		return 12.0;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readInt = function() {
	$s.push("hedge.utils.ByteArray::readInt");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readMultiByte = function(length,charSet) {
	$s.push("hedge.utils.ByteArray::readMultiByte");
	var $spos = $s.length;
	{
		$s.pop();
		return "";
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readObject = function() {
	$s.push("hedge.utils.ByteArray::readObject");
	var $spos = $s.length;
	{
		$s.pop();
		return "";
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readShort = function() {
	$s.push("hedge.utils.ByteArray::readShort");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readUTF = function() {
	$s.push("hedge.utils.ByteArray::readUTF");
	var $spos = $s.length;
	{
		$s.pop();
		return "";
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readUTFBytes = function(length) {
	$s.push("hedge.utils.ByteArray::readUTFBytes");
	var $spos = $s.length;
	{
		$s.pop();
		return "";
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readUnsignedByte = function() {
	$s.push("hedge.utils.ByteArray::readUnsignedByte");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readUnsignedInt = function() {
	$s.push("hedge.utils.ByteArray::readUnsignedInt");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.readUnsignedShort = function() {
	$s.push("hedge.utils.ByteArray::readUnsignedShort");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.utils.ByteArray.prototype.uncompress = function(algorith) {
	$s.push("hedge.utils.ByteArray::uncompress");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeBoolean = function(value) {
	$s.push("hedge.utils.ByteArray::writeBoolean");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeByte = function(value) {
	$s.push("hedge.utils.ByteArray::writeByte");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeBytes = function(bytes,offset,length) {
	$s.push("hedge.utils.ByteArray::writeBytes");
	var $spos = $s.length;
	if(length == null) length = 0;
	if(offset == null) offset = 0;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeDouble = function(value) {
	$s.push("hedge.utils.ByteArray::writeDouble");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeFloat = function(value) {
	$s.push("hedge.utils.ByteArray::writeFloat");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeInt = function(value) {
	$s.push("hedge.utils.ByteArray::writeInt");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeMultiByte = function(value,charSet) {
	$s.push("hedge.utils.ByteArray::writeMultiByte");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeObject = function(object) {
	$s.push("hedge.utils.ByteArray::writeObject");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeShort = function(value) {
	$s.push("hedge.utils.ByteArray::writeShort");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeUTF = function(value) {
	$s.push("hedge.utils.ByteArray::writeUTF");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	$s.push("hedge.utils.ByteArray::writeUTFBytes");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	$s.push("hedge.utils.ByteArray::writeUnsignedInt");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.utils.ByteArray.prototype.__class__ = hedge.utils.ByteArray;
if(!hedge.geom) hedge.geom = {}
hedge.geom.Matrix = function(a,b,c,d,tx,ty) { if( a === $_ ) return; {
	$s.push("hedge.geom.Matrix::new");
	var $spos = $s.length;
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	$s.pop();
}}
hedge.geom.Matrix.__name__ = ["hedge","geom","Matrix"];
hedge.geom.Matrix.prototype.a = null;
hedge.geom.Matrix.prototype.b = null;
hedge.geom.Matrix.prototype.c = null;
hedge.geom.Matrix.prototype.clone = function() {
	$s.push("hedge.geom.Matrix::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Matrix();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Matrix.prototype.concat = function(m) {
	$s.push("hedge.geom.Matrix::concat");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Matrix.prototype.createBox = function(scaleX,scaleY,rotation,tx,ty) {
	$s.push("hedge.geom.Matrix::createBox");
	var $spos = $s.length;
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(rotation == null) rotation = 0;
	$s.pop();
}
hedge.geom.Matrix.prototype.createGradientBox = function(width,height,rotation,tx,ty) {
	$s.push("hedge.geom.Matrix::createGradientBox");
	var $spos = $s.length;
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(rotation == null) rotation = 0;
	$s.pop();
}
hedge.geom.Matrix.prototype.d = null;
hedge.geom.Matrix.prototype.deltaTransformPoint = function(point) {
	$s.push("hedge.geom.Matrix::deltaTransformPoint");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Point();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Matrix.prototype.identity = function() {
	$s.push("hedge.geom.Matrix::identity");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Matrix.prototype.invert = function() {
	$s.push("hedge.geom.Matrix::invert");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Matrix.prototype.rotate = function(angle) {
	$s.push("hedge.geom.Matrix::rotate");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Matrix.prototype.scale = function(sx,sy) {
	$s.push("hedge.geom.Matrix::scale");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Matrix.prototype.transformPoint = function(point) {
	$s.push("hedge.geom.Matrix::transformPoint");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Point();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Matrix.prototype.translate = function(dx,dy) {
	$s.push("hedge.geom.Matrix::translate");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Matrix.prototype.tx = null;
hedge.geom.Matrix.prototype.ty = null;
hedge.geom.Matrix.prototype.__class__ = hedge.geom.Matrix;
hedge.geom.Point = function(x,y) { if( x === $_ ) return; {
	$s.push("hedge.geom.Point::new");
	var $spos = $s.length;
	if(y == null) y = 0;
	if(x == null) x = 0;
	$s.pop();
}}
hedge.geom.Point.__name__ = ["hedge","geom","Point"];
hedge.geom.Point.prototype.add = function(v) {
	$s.push("hedge.geom.Point::add");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Point();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Point.prototype.clone = function() {
	$s.push("hedge.geom.Point::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Point();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Point.prototype.distance = function(pt1,pt2) {
	$s.push("hedge.geom.Point::distance");
	var $spos = $s.length;
	{
		$s.pop();
		return 12.0;
	}
	$s.pop();
}
hedge.geom.Point.prototype.equals = function(toCompare) {
	$s.push("hedge.geom.Point::equals");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.geom.Point.prototype.interpolate = function(pt1,pt2,f) {
	$s.push("hedge.geom.Point::interpolate");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Point();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Point.prototype.length = null;
hedge.geom.Point.prototype.normalize = function(thickness) {
	$s.push("hedge.geom.Point::normalize");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Point.prototype.offset = function(dx,dy) {
	$s.push("hedge.geom.Point::offset");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Point.prototype.polar = function(len,angle) {
	$s.push("hedge.geom.Point::polar");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Point();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Point.prototype.subtract = function(v) {
	$s.push("hedge.geom.Point::subtract");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Point();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Point.prototype.x = null;
hedge.geom.Point.prototype.y = null;
hedge.geom.Point.prototype.__class__ = hedge.geom.Point;
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
		$s.push("hedge.jquery.events.ResizeElement::add@26");
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
hedge.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) { if( redMultiplier === $_ ) return; {
	$s.push("hedge.geom.ColorTransform::new");
	var $spos = $s.length;
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1.0;
	if(blueMultiplier == null) blueMultiplier = 1.0;
	if(greenMultiplier == null) greenMultiplier = 1.0;
	if(redMultiplier == null) redMultiplier = 1.0;
	$s.pop();
}}
hedge.geom.ColorTransform.__name__ = ["hedge","geom","ColorTransform"];
hedge.geom.ColorTransform.prototype.alphaMultiplier = null;
hedge.geom.ColorTransform.prototype.alphaOffset = null;
hedge.geom.ColorTransform.prototype.blueMultiplier = null;
hedge.geom.ColorTransform.prototype.blueOffset = null;
hedge.geom.ColorTransform.prototype.color = null;
hedge.geom.ColorTransform.prototype.concat = function(second) {
	$s.push("hedge.geom.ColorTransform::concat");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.ColorTransform.prototype.greenMultiplier = null;
hedge.geom.ColorTransform.prototype.greenOffset = null;
hedge.geom.ColorTransform.prototype.redMultiplier = null;
hedge.geom.ColorTransform.prototype.redOffset = null;
hedge.geom.ColorTransform.prototype.__class__ = hedge.geom.ColorTransform;
hedge.events.Event = function(type,bubbles,cancelable) { if( type === $_ ) return; {
	$s.push("hedge.events.Event::new");
	var $spos = $s.length;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	hedge.Object.apply(this,[]);
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
hedge.events.Event.prototype.currentTarget = null;
hedge.events.Event.prototype.eventPhase = null;
hedge.events.Event.prototype.formatToString = function(className,arguments) {
	$s.push("hedge.events.Event::formatToString");
	var $spos = $s.length;
	{
		$s.pop();
		return "";
	}
	$s.pop();
}
hedge.events.Event.prototype.isDefaultPrevented = function() {
	$s.push("hedge.events.Event::isDefaultPrevented");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.events.Event.prototype.stopImmediatePropagation = function() {
	$s.push("hedge.events.Event::stopImmediatePropagation");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.events.Event.prototype.stopPropagation = function() {
	$s.push("hedge.events.Event::stopPropagation");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.events.Event.prototype.target = null;
hedge.events.Event.prototype.type = null;
hedge.events.Event.prototype.__class__ = hedge.events.Event;
hedge.display.BitmapData = function(width,height,transparent,fillColor,canvasID) { if( width === $_ ) return; {
	$s.push("hedge.display.BitmapData::new");
	var $spos = $s.length;
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
	$s.pop();
}}
hedge.display.BitmapData.__name__ = ["hedge","display","BitmapData"];
hedge.display.BitmapData.prototype.__canvasID__ = null;
hedge.display.BitmapData.prototype.__canvas__ = null;
hedge.display.BitmapData.prototype.__context__ = null;
hedge.display.BitmapData.prototype.__fillColor__ = null;
hedge.display.BitmapData.prototype.__id__ = null;
hedge.display.BitmapData.prototype.applyFilter = function(sourceBitmapData,sourceRect,destPoint,filter) {
	$s.push("hedge.display.BitmapData::applyFilter");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.clone = function() {
	$s.push("hedge.display.BitmapData::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.display.BitmapData(this.getWidth(),this.getHeight(),this.transparent,this.__fillColor__,this.__canvasID__ + "_clone");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.colorTransform = function(rect,colorTransform) {
	$s.push("hedge.display.BitmapData::colorTransform");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.compare = function(otherBitmapData) {
	$s.push("hedge.display.BitmapData::compare");
	var $spos = $s.length;
	{
		var $tmp = Dynamic;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.copyChannel = function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
	$s.push("hedge.display.BitmapData::copyChannel");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	$s.push("hedge.display.BitmapData::copyPixels");
	var $spos = $s.length;
	if(mergeAlpha == null) mergeAlpha = false;
	$s.pop();
}
hedge.display.BitmapData.prototype.dispose = function() {
	$s.push("hedge.display.BitmapData::dispose");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.draw = function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
	$s.push("hedge.display.BitmapData::draw");
	var $spos = $s.length;
	if(smoothing == null) smoothing = false;
	$s.pop();
}
hedge.display.BitmapData.prototype.fillRect = function(rect,color) {
	$s.push("hedge.display.BitmapData::fillRect");
	var $spos = $s.length;
	this.__context__.fillStyle = hedge.Setup.RGB_to_String(color);
	this.__context__.fillRect(rect.x,rect.y,rect.width,rect.height);
	$s.pop();
}
hedge.display.BitmapData.prototype.floodFill = function(x,y,color) {
	$s.push("hedge.display.BitmapData::floodFill");
	var $spos = $s.length;
	this.__context__.fillStyle = hedge.Setup.RGB_to_String(color);
	this.__context__.fillRect(x,y,this.getWidth(),this.getHeight());
	$s.pop();
}
hedge.display.BitmapData.prototype.generateFilterRect = function(sourceRect,filter) {
	$s.push("hedge.display.BitmapData::generateFilterRect");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.getColorBoundsRect = function(mask,color,findColor) {
	$s.push("hedge.display.BitmapData::getColorBoundsRect");
	var $spos = $s.length;
	if(findColor == null) findColor = true;
	{
		var $tmp = new hedge.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
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
hedge.display.BitmapData.prototype.getPixel = function(x,y) {
	$s.push("hedge.display.BitmapData::getPixel");
	var $spos = $s.length;
	var values = this.__context__.getImageData(x,y,x + 1,y + 1).data;
	{
		var $tmp = hedge.Setup.RGB_String_to_HEX(((((("rgb(" + values[0]) + ", ") + values[1]) + ", ") + values[2]) + ")");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.getPixel32 = function(x,y) {
	$s.push("hedge.display.BitmapData::getPixel32");
	var $spos = $s.length;
	var values = this.__context__.getImageData(x,y,x + 1,y + 1).data;
	{
		var $tmp = hedge.Setup.ARGB_String_to_HEX(((((((("argb(" + values[3]) + ", ") + values[0]) + ", ") + values[1]) + ", ") + values[2]) + ")");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.getPixels = function(rect) {
	$s.push("hedge.display.BitmapData::getPixels");
	var $spos = $s.length;
	{
		var $tmp = new hedge.utils.ByteArray();
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
hedge.display.BitmapData.prototype.hitTest = function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
	$s.push("hedge.display.BitmapData::hitTest");
	var $spos = $s.length;
	if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.lock = function() {
	$s.push("hedge.display.BitmapData::lock");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.merge = function(sourceBitmapData,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	$s.push("hedge.display.BitmapData::merge");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.noise = function(randomSeed,low,high,channelOptions,grayScale) {
	$s.push("hedge.display.BitmapData::noise");
	var $spos = $s.length;
	if(grayScale == null) grayScale = false;
	if(channelOptions == null) channelOptions = 7;
	if(high == null) high = 255;
	if(low == null) low = 0;
	$s.pop();
}
hedge.display.BitmapData.prototype.paletteMap = function(sourceBitmapData,sourceRect,destPoint,redArray,greenArray,blueArray,alphaArray) {
	$s.push("hedge.display.BitmapData::paletteMap");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.perlinNoise = function(baseX,baseY,numOctaves,randomSeed,stitch,fractalNoise,channelOptions,grayScale,offsets) {
	$s.push("hedge.display.BitmapData::perlinNoise");
	var $spos = $s.length;
	if(grayScale == null) grayScale = false;
	if(channelOptions == null) channelOptions = 7;
	$s.pop();
}
hedge.display.BitmapData.prototype.pixelDissolve = function(sourceBitmapData,sourceRect,destPoint,randomSeed,numPixels,fillColor) {
	$s.push("hedge.display.BitmapData::pixelDissolve");
	var $spos = $s.length;
	if(fillColor == null) fillColor = 0;
	if(numPixels == null) numPixels = 0;
	if(randomSeed == null) randomSeed = 0;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.rect = null;
hedge.display.BitmapData.prototype.scroll = function(x,y) {
	$s.push("hedge.display.BitmapData::scroll");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.setHeight = function(value) {
	$s.push("hedge.display.BitmapData::setHeight");
	var $spos = $s.length;
	this.height = value;
	{
		var $tmp = this.getHeight();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.setPixel = function(x,y,color) {
	$s.push("hedge.display.BitmapData::setPixel");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.setPixel32 = function(x,y,color) {
	$s.push("hedge.display.BitmapData::setPixel32");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.setPixels = function(rect,inputByteArray) {
	$s.push("hedge.display.BitmapData::setPixels");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.setWidth = function(value) {
	$s.push("hedge.display.BitmapData::setWidth");
	var $spos = $s.length;
	this.width = value;
	{
		var $tmp = this.getWidth();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.threshold = function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
	$s.push("hedge.display.BitmapData::threshold");
	var $spos = $s.length;
	if(copySource == null) copySource = false;
	if(mask == null) mask = -1;
	if(color == null) color = 0;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.display.BitmapData.prototype.transparent = null;
hedge.display.BitmapData.prototype.unlock = function(changeRect) {
	$s.push("hedge.display.BitmapData::unlock");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.BitmapData.prototype.width = null;
hedge.display.BitmapData.prototype.__class__ = hedge.display.BitmapData;
hedge.display.BitmapData.__interfaces__ = [hedge.display.IBitmapDrawable];
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
	var type = (inf != null && inf.customParams != null?inf.customParams[0]:null);
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = (inf == null?"error":"log");
	console[type](((inf == null?"":((inf.fileName + ":") + inf.lineNumber) + " : ")) + Std.string(v));
	$s.pop();
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
IntIter = function(min,max) { if( min === $_ ) return; {
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	{
		var $tmp = this.min < this.max;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	{
		var $tmp = this.min++;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
hedge.display.Sprite = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.Sprite::new");
	var $spos = $s.length;
	hedge.display.DisplayObjectContainer.apply(this,[]);
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
hedge.display.Sprite.prototype.startDrag = function(lockCenter,bounds) {
	$s.push("hedge.display.Sprite::startDrag");
	var $spos = $s.length;
	if(lockCenter == null) lockCenter = false;
	$s.pop();
}
hedge.display.Sprite.prototype.stopDrag = function() {
	$s.push("hedge.display.Sprite::stopDrag");
	var $spos = $s.length;
	null;
	$s.pop();
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
	var v = parseInt(x);
	if(Math.isNaN(v)) {
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
Type.prototype.__class__ = Type;
if(typeof js=='undefined') js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	{
		var $tmp = eval(code);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
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
	var msg = (i != null?((i.fileName + ":") + i.lineNumber) + ": ":"");
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
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
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
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
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
	});
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
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@239");
		var $spos = $s.length;
		var x = cca.call(this,i);
		if(isNaN(x)) {
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
	hedge.events.Event.apply(this,[this.type,this.bubbles,this.cancelable]);
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
hedge.events.MouseEvent.prototype.stageX = null;
hedge.events.MouseEvent.prototype.stageY = null;
hedge.events.MouseEvent.prototype.updateAfterEvent = function() {
	$s.push("hedge.events.MouseEvent::updateAfterEvent");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.events.MouseEvent.prototype.__class__ = hedge.events.MouseEvent;
hedge.display.Shape = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.Shape::new");
	var $spos = $s.length;
	hedge.display.DisplayObject.apply(this,[]);
	this.__jq__.bind(hedge.Setup.RESIZE_ELEMENT,{ },{ });
	this._g = new hedge.display.Graphics(this);
	$s.pop();
}}
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
hedge.geom.Rectangle = function(x,y,width,height) { if( x === $_ ) return; {
	$s.push("hedge.geom.Rectangle::new");
	var $spos = $s.length;
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	$s.pop();
}}
hedge.geom.Rectangle.__name__ = ["hedge","geom","Rectangle"];
hedge.geom.Rectangle.prototype.bottom = null;
hedge.geom.Rectangle.prototype.bottomRight = null;
hedge.geom.Rectangle.prototype.clone = function() {
	$s.push("hedge.geom.Rectangle::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.contains = function(x,y) {
	$s.push("hedge.geom.Rectangle::contains");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.containsPoint = function(point) {
	$s.push("hedge.geom.Rectangle::containsPoint");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.containsRect = function(rect) {
	$s.push("hedge.geom.Rectangle::containsRect");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.equals = function(toCompare) {
	$s.push("hedge.geom.Rectangle::equals");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.height = null;
hedge.geom.Rectangle.prototype.inflate = function(dx,dy) {
	$s.push("hedge.geom.Rectangle::inflate");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Rectangle.prototype.inflatePoint = function(point) {
	$s.push("hedge.geom.Rectangle::inflatePoint");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Rectangle.prototype.intersection = function(toIntersect) {
	$s.push("hedge.geom.Rectangle::intersection");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.intersects = function(toIntersect) {
	$s.push("hedge.geom.Rectangle::intersects");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.isEmpty = function() {
	$s.push("hedge.geom.Rectangle::isEmpty");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.left = null;
hedge.geom.Rectangle.prototype.offset = function(dx,dy) {
	$s.push("hedge.geom.Rectangle::offset");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Rectangle.prototype.offsetPoint = function(point) {
	$s.push("hedge.geom.Rectangle::offsetPoint");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Rectangle.prototype.right = null;
hedge.geom.Rectangle.prototype.setEmpty = function() {
	$s.push("hedge.geom.Rectangle::setEmpty");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.geom.Rectangle.prototype.size = null;
hedge.geom.Rectangle.prototype.top = null;
hedge.geom.Rectangle.prototype.topLeft = null;
hedge.geom.Rectangle.prototype.union = function(toUnion) {
	$s.push("hedge.geom.Rectangle::union");
	var $spos = $s.length;
	{
		var $tmp = new hedge.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.geom.Rectangle.prototype.width = null;
hedge.geom.Rectangle.prototype.x = null;
hedge.geom.Rectangle.prototype.y = null;
hedge.geom.Rectangle.prototype.__class__ = hedge.geom.Rectangle;
haxe.Md5 = function(p) { if( p === $_ ) return; {
	$s.push("haxe.Md5::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
haxe.Md5.__name__ = ["haxe","Md5"];
haxe.Md5.encode = function(s) {
	$s.push("haxe.Md5::encode");
	var $spos = $s.length;
	{
		var $tmp = haxe.Md5.inst.doEncode(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.addme = function(x,y) {
	$s.push("haxe.Md5::addme");
	var $spos = $s.length;
	var lsw = (x & 65535) + (y & 65535);
	var msw = ((x >> 16) + (y >> 16)) + (lsw >> 16);
	{
		var $tmp = (msw << 16) | (lsw & 65535);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.bitAND = function(a,b) {
	$s.push("haxe.Md5::bitAND");
	var $spos = $s.length;
	var lsb = (a & 1) & (b & 1);
	var msb31 = (a >>> 1) & (b >>> 1);
	{
		var $tmp = (msb31 << 1) | lsb;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.bitOR = function(a,b) {
	$s.push("haxe.Md5::bitOR");
	var $spos = $s.length;
	var lsb = (a & 1) | (b & 1);
	var msb31 = (a >>> 1) | (b >>> 1);
	{
		var $tmp = (msb31 << 1) | lsb;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.bitXOR = function(a,b) {
	$s.push("haxe.Md5::bitXOR");
	var $spos = $s.length;
	var lsb = (a & 1) ^ (b & 1);
	var msb31 = (a >>> 1) ^ (b >>> 1);
	{
		var $tmp = (msb31 << 1) | lsb;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.cmn = function(q,a,b,x,s,t) {
	$s.push("haxe.Md5::cmn");
	var $spos = $s.length;
	{
		var $tmp = this.addme(this.rol((this.addme(this.addme(a,q),this.addme(x,t))),s),b);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.doEncode = function(str) {
	$s.push("haxe.Md5::doEncode");
	var $spos = $s.length;
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
	{
		var $tmp = ((this.rhex(a) + this.rhex(b)) + this.rhex(c)) + this.rhex(d);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.ff = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::ff");
	var $spos = $s.length;
	{
		var $tmp = this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND((~b),d)),a,b,x,s,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.gg = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::gg");
	var $spos = $s.length;
	{
		var $tmp = this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,(~d))),a,b,x,s,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.hh = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::hh");
	var $spos = $s.length;
	{
		var $tmp = this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.ii = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::ii");
	var $spos = $s.length;
	{
		var $tmp = this.cmn(this.bitXOR(c,this.bitOR(b,(~d))),a,b,x,s,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.rhex = function(num) {
	$s.push("haxe.Md5::rhex");
	var $spos = $s.length;
	var str = "";
	var hex_chr = "0123456789abcdef";
	{
		var _g = 0;
		while(_g < 4) {
			var j = _g++;
			str += hex_chr.charAt((num >> (j * 8 + 4)) & 15) + hex_chr.charAt((num >> (j * 8)) & 15);
		}
	}
	{
		$s.pop();
		return str;
	}
	$s.pop();
}
haxe.Md5.prototype.rol = function(num,cnt) {
	$s.push("haxe.Md5::rol");
	var $spos = $s.length;
	{
		var $tmp = (num << cnt) | (num >>> (32 - cnt));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Md5.prototype.str2blks = function(str) {
	$s.push("haxe.Md5::str2blks");
	var $spos = $s.length;
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
	{
		$s.pop();
		return blks;
	}
	$s.pop();
}
haxe.Md5.prototype.__class__ = haxe.Md5;
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	$s.push("haxe.rtti.Meta::getType");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = ((meta == null)?meta:meta.obj);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.getStatics = function(t) {
	$s.push("haxe.rtti.Meta::getStatics");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = ((meta == null)?meta:meta.statics);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.getFields = function(t) {
	$s.push("haxe.rtti.Meta::getFields");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = ((meta == null)?meta:meta.fields);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
hedge.display.LineType = function() { }
hedge.display.LineType.__name__ = ["hedge","display","LineType"];
hedge.display.LineType.prototype.__class__ = hedge.display.LineType;
hedge.display.Graphics = function(parent) { if( parent === $_ ) return; {
	$s.push("hedge.display.Graphics::new");
	var $spos = $s.length;
	hedge.Object.apply(this,[]);
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
hedge.display.Graphics.prototype.__element__ = null;
hedge.display.Graphics.prototype.__raphael__ = null;
hedge.display.Graphics.prototype.beginBitmapFill = function(bitmap,matrix,repeat,smooth) {
	$s.push("hedge.display.Graphics::beginBitmapFill");
	var $spos = $s.length;
	if(smooth == null) smooth = false;
	if(repeat == null) repeat = true;
	this.fillType = "bitmapdata";
	this.bitmapdata_source = bitmap;
	this.bitmapdata_matrix = matrix;
	this.bitmapdata_repeat = repeat;
	this.bitmapdata_smooth = smooth;
	$s.pop();
}
hedge.display.Graphics.prototype.beginFill = function(color,alpha) {
	$s.push("hedge.display.Graphics::beginFill");
	var $spos = $s.length;
	if(alpha == null) alpha = 1.0;
	this.fill_color = color;
	this.fill_alpha = alpha;
	this.fillType = "flood";
	$s.pop();
}
hedge.display.Graphics.prototype.beginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	$s.push("hedge.display.Graphics::beginGradientFill");
	var $spos = $s.length;
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
	$s.pop();
}
hedge.display.Graphics.prototype.bitmapdata_matrix = null;
hedge.display.Graphics.prototype.bitmapdata_repeat = null;
hedge.display.Graphics.prototype.bitmapdata_smooth = null;
hedge.display.Graphics.prototype.bitmapdata_source = null;
hedge.display.Graphics.prototype.checkFill = function() {
	$s.push("hedge.display.Graphics::checkFill");
	var $spos = $s.length;
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
	$s.pop();
}
hedge.display.Graphics.prototype.checkLineStyle = function() {
	$s.push("hedge.display.Graphics::checkLineStyle");
	var $spos = $s.length;
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
	$s.pop();
}
hedge.display.Graphics.prototype.clear = function() {
	$s.push("hedge.display.Graphics::clear");
	var $spos = $s.length;
	this.__raphael__.clear();
	$s.pop();
}
hedge.display.Graphics.prototype.curveTo = function(controlX,controlY,anchorX,anchorY) {
	$s.push("hedge.display.Graphics::curveTo");
	var $spos = $s.length;
	this.path += (((((("Q" + controlX) + " ") + controlY) + " ") + anchorX) + " ") + anchorY;
	$s.pop();
}
hedge.display.Graphics.prototype.drawCircle = function(x,y,radius) {
	$s.push("hedge.display.Graphics::drawCircle");
	var $spos = $s.length;
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	this.__element__ = this.__raphael__.circle(x,y,radius);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : radius + this.line_thickness, h : radius + this.line_thickness, p : this.parent}]);
	$s.pop();
}
hedge.display.Graphics.prototype.drawEllipse = function(x,y,width,height) {
	$s.push("hedge.display.Graphics::drawEllipse");
	var $spos = $s.length;
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	width = Math.round(width / 2) - this.line_thickness;
	height = Math.round(height / 2) - this.line_thickness;
	this.__element__ = this.__raphael__.ellipse(x + width,y + height,width,height);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : (width * 2) + this.line_thickness, h : (height * 2) + this.line_thickness, p : this.parent}]);
	$s.pop();
}
hedge.display.Graphics.prototype.drawRect = function(x,y,width,height) {
	$s.push("hedge.display.Graphics::drawRect");
	var $spos = $s.length;
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	width = width - this.line_thickness;
	height = height - this.line_thickness;
	this.__element__ = this.__raphael__.rect(x,y,width,height);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : width + this.line_thickness, h : height + this.line_thickness, p : this.parent}]);
	$s.pop();
}
hedge.display.Graphics.prototype.drawRoundRect = function(x,y,width,height,radius) {
	$s.push("hedge.display.Graphics::drawRoundRect");
	var $spos = $s.length;
	x = x + this.line_thickness;
	y = y + this.line_thickness;
	width = width - this.line_thickness;
	height = height - this.line_thickness;
	this.__element__ = this.__raphael__.rect(x,y,width,height,radius);
	this.checkFill();
	this.checkLineStyle();
	this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : x, y : y, w : width + this.line_thickness, h : height - this.line_thickness, p : this.parent}]);
	$s.pop();
}
hedge.display.Graphics.prototype.endFill = function() {
	$s.push("hedge.display.Graphics::endFill");
	var $spos = $s.length;
	if(this.path != "" || this.path == null) {
		this.__element__ = this.__raphael__.path(this.path += " z");
		this.checkFill();
		this.checkLineStyle();
		this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : this.__element__.getBBox().x, y : this.__element__.getBBox().y, w : this.__element__.getBBox().width, h : this.__element__.getBBox().height, p : this.parent}]);
	}
	$s.pop();
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
	$s.push("hedge.display.Graphics::lineGradientStyle");
	var $spos = $s.length;
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
	$s.pop();
}
hedge.display.Graphics.prototype.lineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
	$s.push("hedge.display.Graphics::lineStyle");
	var $spos = $s.length;
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
	$s.pop();
}
hedge.display.Graphics.prototype.lineTo = function(x,y) {
	$s.push("hedge.display.Graphics::lineTo");
	var $spos = $s.length;
	this.path += (("L" + x) + " ") + y;
	$s.pop();
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
	$s.push("hedge.display.Graphics::moveTo");
	var $spos = $s.length;
	this.path += (("M" + x) + " ") + y;
	$s.pop();
}
hedge.display.Graphics.prototype.parent = null;
hedge.display.Graphics.prototype.path = null;
hedge.display.Graphics.prototype.__class__ = hedge.display.Graphics;
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
hedge.display.Stage.prototype.align = null;
hedge.display.Stage.prototype.displayState = null;
hedge.display.Stage.prototype.focus = null;
hedge.display.Stage.prototype.frameRate = null;
hedge.display.Stage.prototype.fullScreenHeight = null;
hedge.display.Stage.prototype.fullScreenSourceRect = null;
hedge.display.Stage.prototype.fullScreenWidth = null;
hedge.display.Stage.prototype.invalidate = function() {
	$s.push("hedge.display.Stage::invalidate");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.Stage.prototype.isFocusInaccessible = function() {
	$s.push("hedge.display.Stage::isFocusInaccessible");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
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
	$s.push("hedge.text.TextSnapshot::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
hedge.text.TextSnapshot.__name__ = ["hedge","text","TextSnapshot"];
hedge.text.TextSnapshot.prototype.charCount = null;
hedge.text.TextSnapshot.prototype.findText = function(beginIndex,textToFind,caseSensitive) {
	$s.push("hedge.text.TextSnapshot::findText");
	var $spos = $s.length;
	{
		$s.pop();
		return 1;
	}
	$s.pop();
}
hedge.text.TextSnapshot.prototype.getSelected = function(beginIndex,endIndex) {
	$s.push("hedge.text.TextSnapshot::getSelected");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
hedge.text.TextSnapshot.prototype.getSelectedText = function(includeLineEndings) {
	$s.push("hedge.text.TextSnapshot::getSelectedText");
	var $spos = $s.length;
	if(includeLineEndings == null) includeLineEndings = false;
	{
		$s.pop();
		return "";
	}
	$s.pop();
}
hedge.text.TextSnapshot.prototype.getText = function(beginIndex,endIndex,includeLineEndings) {
	$s.push("hedge.text.TextSnapshot::getText");
	var $spos = $s.length;
	if(includeLineEndings == null) includeLineEndings = false;
	{
		$s.pop();
		return "";
	}
	$s.pop();
}
hedge.text.TextSnapshot.prototype.getTextRunInfo = function(beginIndex,endIndex) {
	$s.push("hedge.text.TextSnapshot::getTextRunInfo");
	var $spos = $s.length;
	{
		var $tmp = [1];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextSnapshot.prototype.hitTestTextNearPos = function(x,y,maxDistance) {
	$s.push("hedge.text.TextSnapshot::hitTestTextNearPos");
	var $spos = $s.length;
	if(maxDistance == null) maxDistance = 0;
	{
		$s.pop();
		return 12.0;
	}
	$s.pop();
}
hedge.text.TextSnapshot.prototype.setSelectColor = function(hexColor) {
	$s.push("hedge.text.TextSnapshot::setSelectColor");
	var $spos = $s.length;
	if(hexColor == null) hexColor = 16776960;
	$s.pop();
}
hedge.text.TextSnapshot.prototype.setSelected = function(beginIndex,endIndex,select) {
	$s.push("hedge.text.TextSnapshot::setSelected");
	var $spos = $s.length;
	null;
	$s.pop();
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
	$s.push("hedge.Setup::init");
	var $spos = $s.length;
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
			values["data-" + _n_] = _v_;
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
				_r_[n] = _t_;
			}
		}
	}
	{
		$s.pop();
		return _r_;
	}
	$s.pop();
}
hedge.Setup.generateListenerName = function(type) {
	$s.push("hedge.Setup::generateListenerName");
	var $spos = $s.length;
	{
		var $tmp = (("eventListener_" + type) + "_") + haxe.Md5.encode((Date.now().getTime() + "_") + Math.random());
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.generateEventName = function(type) {
	$s.push("hedge.Setup::generateEventName");
	var $spos = $s.length;
	{
		var $tmp = (((hedge.Setup.getProject() + "_") + type) + ".") + hedge.Setup.__stage__.getName();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.generateInstanceName = function() {
	$s.push("hedge.Setup::generateInstanceName");
	var $spos = $s.length;
	{
		var $tmp = "instance" + ((hedge.Setup.__counter__++) - 1);
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
hedge.Setup.ARGB_to_String = function(color) {
	$s.push("hedge.Setup::ARGB_to_String");
	var $spos = $s.length;
	{
		var $tmp = ((((((("argb(" + (color >> 24 & 255)) + ", ") + (color >> 16 & 255)) + ", ") + (color >> 8 & 255)) + ", ") + (color & 255)) + ")";
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
		var $tmp = ((((Std.parseInt(values[0])) << 16) | ((Std.parseInt(values[1])) << 8)) | ((Std.parseInt(values[2]))));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.ARGB_String_to_HEX = function(color) {
	$s.push("hedge.Setup::ARGB_String_to_HEX");
	var $spos = $s.length;
	var values = color.substr(color.indexOf("argb(") + 5,color.lastIndexOf(")") - 5).split(", ");
	{
		var $tmp = (((((Std.parseInt(values[3])) << 24) | ((Std.parseInt(values[0])) << 16)) | ((Std.parseInt(values[1])) << 8)) | ((Std.parseInt(values[2]))));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.Setup.prototype.__class__ = hedge.Setup;
hedge.display.JointStyle = function() { }
hedge.display.JointStyle.__name__ = ["hedge","display","JointStyle"];
hedge.display.JointStyle.prototype.__class__ = hedge.display.JointStyle;
Main = function() { }
Main.__name__ = ["Main"];
Main.main = function() {
	$s.push("Main::main");
	var $spos = $s.length;
	if(haxe.Firebug.detect()) {
		haxe.Firebug.redirectTraces();
	}
	hedge.Setup.init($closure(Main,"launch"));
	$s.pop();
}
Main.something = function(e) {
	$s.push("Main::something");
	var $spos = $s.length;
	haxe.Log.trace(e.target,{ fileName : "Main.hx", lineNumber : 46, className : "Main", methodName : "something"});
	haxe.Log.trace(e.type,{ fileName : "Main.hx", lineNumber : 47, className : "Main", methodName : "something"});
	haxe.Log.trace(e.currentTarget + " : has been clicked",{ fileName : "Main.hx", lineNumber : 48, className : "Main", methodName : "something"});
	$s.pop();
}
Main.launch = function() {
	$s.push("Main::launch");
	var $spos = $s.length;
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
	sp3.getGraphics().clear();
	hedge.Lib.attachToStage(ball);
	hedge.Lib.attachToStage(sp3);
	sp3.addChild(tri);
	{
		var _g = tri;
		_g.setScaleX(_g.getScaleX() * 2);
	}
	$s.pop();
}
Main.prototype.__class__ = Main;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	var d = Date;
	d.now = function() {
		$s.push("@Main::new@117");
		var $spos = $s.length;
		{
			var $tmp = new Date();
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	d.fromTime = function(t) {
		$s.push("@Main::new@120");
		var $spos = $s.length;
		var d1 = new Date();
		d1["setTime"](t);
		{
			$s.pop();
			return d1;
		}
		$s.pop();
	}
	d.fromString = function(s) {
		$s.push("@Main::new@129");
		var $spos = $s.length;
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			{
				$s.pop();
				return d1;
			}
		}break;
		case 10:{
			var k = s.split("-");
			{
				var $tmp = new Date(k[0],k[1] - 1,k[2],0,0,0);
				$s.pop();
				return $tmp;
			}
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			{
				var $tmp = new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
		$s.pop();
	}
	d.prototype["toString"] = function() {
		$s.push("@Main::new@158");
		var $spos = $s.length;
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		{
			var $tmp = (((((((((date.getFullYear() + "-") + ((m < 10?"0" + m:"" + m))) + "-") + ((d1 < 10?"0" + d1:"" + d1))) + " ") + ((h < 10?"0" + h:"" + h))) + ":") + ((mi < 10?"0" + mi:"" + mi))) + ":") + ((s < 10?"0" + s:"" + s));
			$s.pop();
			return $tmp;
		}
		$s.pop();
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
		$s.push("@Main::new@69");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("@Main::new@81");
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
{
	js["XMLHttpRequest"] = (window.XMLHttpRequest?XMLHttpRequest:(window.ActiveXObject?function() {
		$s.push("@Main::new@53");
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
