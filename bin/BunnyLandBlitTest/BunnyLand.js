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
	if(type != "enterFrame") {
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
	if(type != "enterFrame") {
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
	this.initialize();
	$s.pop();
}}
hedge.display.DisplayObject.__name__ = ["hedge","display","DisplayObject"];
hedge.display.DisplayObject.__super__ = hedge.events.EventDispatcher;
for(var k in hedge.events.EventDispatcher.prototype ) hedge.display.DisplayObject.prototype[k] = hedge.events.EventDispatcher.prototype[k];
hedge.display.DisplayObject.prototype.__originalName__ = null;
hedge.display.DisplayObject.prototype.alpha = null;
hedge.display.DisplayObject.prototype.blendMode = null;
hedge.display.DisplayObject.prototype.cacheAsBitmap = null;
hedge.display.DisplayObject.prototype.generateJQuery = function() {
	$s.push("hedge.display.DisplayObject::generateJQuery");
	var $spos = $s.length;
	hedge.Setup.__storage__.append(this.__jq__ = new $("<div>"));
	$s.pop();
}
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
hedge.display.DisplayObject.prototype.getOpaqueBackground = function() {
	$s.push("hedge.display.DisplayObject::getOpaqueBackground");
	var $spos = $s.length;
	{
		var $tmp = this.opaqueBackground;
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
hedge.display.DisplayObject.prototype.initialize = function() {
	$s.push("hedge.display.DisplayObject::initialize");
	var $spos = $s.length;
	this.generateJQuery();
	this.__originalName__ = this.setName(hedge.Setup.generateInstanceName());
	this.__jq__.attr("id",this.getName()).css(hedge.Setup.__attr__({ width : "0px", height : "0px", left : "0px", top : "0px"}));
	this.__jq__.attr("data-originalName",this.__originalName__);
	this.setParent(hedge.Setup.__default__);
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
hedge.display.DisplayObject.prototype.setOpaqueBackground = function(value) {
	$s.push("hedge.display.DisplayObject::setOpaqueBackground");
	var $spos = $s.length;
	this.opaqueBackground = value;
	{
		var $tmp = this.getOpaqueBackground();
		$s.pop();
		return $tmp;
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
hedge.display.InteractiveObject = function(p) { if( p === $_ ) return; {
	$s.push("hedge.display.InteractiveObject::new");
	var $spos = $s.length;
	hedge.display.DisplayObject.call(this);
	this.addEventListener("keydown",$closure(this,"onKeyDown"));
	this.addEventListener("keyup",$closure(this,"onKeyUp"));
	$s.pop();
}}
hedge.display.InteractiveObject.__name__ = ["hedge","display","InteractiveObject"];
hedge.display.InteractiveObject.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.InteractiveObject.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.InteractiveObject.prototype.onKeyDown = function(e) {
	$s.push("hedge.display.InteractiveObject::onKeyDown");
	var $spos = $s.length;
	null;
	$s.pop();
}
hedge.display.InteractiveObject.prototype.onKeyUp = function(e) {
	$s.push("hedge.display.InteractiveObject::onKeyUp");
	var $spos = $s.length;
	null;
	$s.pop();
}
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
if(typeof demo=='undefined') demo = {}
if(!demo.bunnyBlitTest) demo.bunnyBlitTest = {}
demo.bunnyBlitTest.BlitTest = function() { }
demo.bunnyBlitTest.BlitTest.__name__ = ["demo","bunnyBlitTest","BlitTest"];
demo.bunnyBlitTest.BlitTest.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) demo.bunnyBlitTest.BlitTest.prototype[k] = hedge.display.Sprite.prototype[k];
demo.bunnyBlitTest.BlitTest.prototype.__class__ = demo.bunnyBlitTest.BlitTest;
List = function() { }
List.__name__ = ["List"];
List.prototype.length = null;
List.prototype.__class__ = List;
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
hedge.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) { if( type === $_ ) return; {
	$s.push("hedge.events.KeyboardEvent::new");
	var $spos = $s.length;
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyLocationValue == null) keyLocationValue = 0;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	this.keyLocation = keyLocationValue;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	hedge.events.Event.call(this,this.type,this.bubbles,this.cancelable);
	$s.pop();
}}
hedge.events.KeyboardEvent.__name__ = ["hedge","events","KeyboardEvent"];
hedge.events.KeyboardEvent.__super__ = hedge.events.Event;
for(var k in hedge.events.Event.prototype ) hedge.events.KeyboardEvent.prototype[k] = hedge.events.Event.prototype[k];
hedge.events.KeyboardEvent.prototype.altKey = null;
hedge.events.KeyboardEvent.prototype.charCode = null;
hedge.events.KeyboardEvent.prototype.clone = function() {
	$s.push("hedge.events.KeyboardEvent::clone");
	var $spos = $s.length;
	{
		var $tmp = new hedge.events.KeyboardEvent(this.type,this.bubbles,this.cancelable,this.charCode,this.keyCode,this.keyLocation,this.ctrlKey,this.altKey,this.shiftKey);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.events.KeyboardEvent.prototype.ctrlKey = null;
hedge.events.KeyboardEvent.prototype.keyCode = null;
hedge.events.KeyboardEvent.prototype.keyLocation = null;
hedge.events.KeyboardEvent.prototype.shiftKey = null;
hedge.events.KeyboardEvent.prototype.__class__ = hedge.events.KeyboardEvent;
if(!hedge.geom) hedge.geom = {}
hedge.geom.Point = function(x,y) { if( x === $_ ) return; {
	$s.push("hedge.geom.Point::new");
	var $spos = $s.length;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	$s.pop();
}}
hedge.geom.Point.__name__ = ["hedge","geom","Point"];
hedge.geom.Point.prototype.x = null;
hedge.geom.Point.prototype.y = null;
hedge.geom.Point.prototype.__class__ = hedge.geom.Point;
if(!demo.bunnyLandBlitTest) demo.bunnyLandBlitTest = {}
demo.bunnyLandBlitTest.BlitBunny = function(p) { if( p === $_ ) return; {
	$s.push("demo.bunnyLandBlitTest.BlitBunny::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
demo.bunnyLandBlitTest.BlitBunny.__name__ = ["demo","bunnyLandBlitTest","BlitBunny"];
demo.bunnyLandBlitTest.BlitBunny.prototype.angle = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.bitmapData = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.drawPosition = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.speed = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.speedX = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.speedY = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.speedZ = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.x = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.y = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.z = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.__class__ = demo.bunnyLandBlitTest.BlitBunny;
demo.bunnyLandBlitTest.BunnyLandBlitTest = function(p) { if( p === $_ ) return; {
	$s.push("demo.bunnyLandBlitTest.BunnyLandBlitTest::new");
	var $spos = $s.length;
	hedge.display.Sprite.call(this);
	this.cameraRect = new hedge.geom.Rectangle(0,0,demo.bunnyLandBlitTest.BunnyLandBlitTest.screenWidth,demo.bunnyLandBlitTest.BunnyLandBlitTest.screenHeight);
	this.maxX = demo.bunnyLandBlitTest.BunnyLandBlitTest.columns * demo.bunnyLandBlitTest.BunnyLandBlitTest.tileSize;
	this.maxY = demo.bunnyLandBlitTest.BunnyLandBlitTest.rows * demo.bunnyLandBlitTest.BunnyLandBlitTest.tileSize;
	this.ground = new hedge.display.BitmapData(this.maxX,this.maxY);
	this.grassAsset = new hedge.display.BitmapData(32,32,false,null,"img#outdoor");
	var sourceRect = new hedge.geom.Rectangle(0,0,32,32);
	var destPoint = new hedge.geom.Point();
	{
		var _g1 = 0, _g = demo.bunnyLandBlitTest.BunnyLandBlitTest.rows;
		while(_g1 < _g) {
			var r = _g1++;
			{
				var _g3 = 0, _g2 = demo.bunnyLandBlitTest.BunnyLandBlitTest.columns;
				while(_g3 < _g2) {
					var c = _g3++;
					destPoint.x = c * demo.bunnyLandBlitTest.BunnyLandBlitTest.tileSize;
					destPoint.y = r * demo.bunnyLandBlitTest.BunnyLandBlitTest.tileSize;
					this.ground.copyPixels(this.grassAsset,sourceRect,destPoint);
				}
			}
		}
	}
	this.bunnyAsset = new hedge.display.BitmapData(26,37,false,null,"img#wabbit_alpha");
	this.bunnies = new Array();
	var bunny;
	var bunnyRows = Std["int"](Math.sqrt(demo.bunnyLandBlitTest.BunnyLandBlitTest.numBunnies));
	var spacingX = this.maxX / bunnyRows;
	var spacingY = this.maxY / bunnyRows;
	var column;
	var row;
	{
		var _g1 = 0, _g = demo.bunnyLandBlitTest.BunnyLandBlitTest.numBunnies;
		while(_g1 < _g) {
			var i = _g1++;
			column = i % bunnyRows;
			row = i / bunnyRows;
			bunny = new demo.bunnyLandBlitTest.BlitBunny();
			bunny.bitmapData = this.bunnyAsset;
			bunny.x = column * spacingX;
			bunny.y = row * spacingY;
			bunny.angle = Math.random() * Math.PI * 2;
			bunny.speed = (Math.random() * 5) + 0.5;
			bunny.speedX = Math.sin(bunny.angle) * bunny.speed;
			bunny.speedY = Math.cos(bunny.angle) * bunny.speed;
			bunny.speedZ = -1;
			bunny.drawPosition = new hedge.geom.Point();
			this.bunnies[i] = bunny;
		}
	}
	this.bitmap = new hedge.display.Bitmap(new hedge.display.BitmapData(this.maxX,this.maxY));
	this.addChild(this.bitmap);
	this.gamepad = new demo.gamepad.Gamepad(this.getStage(),true);
	this.gamepad.useWASD();
	this.addEventListener("enterFrame",$closure(this,"onEnterFrame"));
	$s.pop();
}}
demo.bunnyLandBlitTest.BunnyLandBlitTest.__name__ = ["demo","bunnyLandBlitTest","BunnyLandBlitTest"];
demo.bunnyLandBlitTest.BunnyLandBlitTest.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype[k] = hedge.display.Sprite.prototype[k];
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.bitmap = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.bunnies = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.bunnyAsset = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.cameraRect = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.gamepad = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.grassAsset = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.ground = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.maxX = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.maxY = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.minX = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.minY = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.onEnterFrame = function(e) {
	$s.push("demo.bunnyLandBlitTest.BunnyLandBlitTest::onEnterFrame");
	var $spos = $s.length;
	demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedX = this.gamepad.getX() * 10;
	demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedY = this.gamepad.getY() * 10;
	this.cameraRect.x += demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedX;
	this.cameraRect.y += demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedY;
	if(this.cameraRect.x > this.maxX - demo.bunnyLandBlitTest.BunnyLandBlitTest.screenWidth) {
		this.cameraRect.x = this.maxX - demo.bunnyLandBlitTest.BunnyLandBlitTest.screenWidth;
		demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedX *= -1;
	}
	else if(this.cameraRect.x < 0) {
		this.cameraRect.x = 0;
		demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedX *= -1;
	}
	if(this.cameraRect.y > this.maxY - demo.bunnyLandBlitTest.BunnyLandBlitTest.screenHeight) {
		this.cameraRect.y = this.maxY - demo.bunnyLandBlitTest.BunnyLandBlitTest.screenHeight;
		demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedY *= -1;
	}
	else if(this.cameraRect.y < 0) {
		this.cameraRect.y = 0;
		demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedY *= -1;
	}
	this.bitmap.getBitmapData().copyPixels(this.ground,this.cameraRect,new hedge.geom.Point());
	var sourceRect = new hedge.geom.Rectangle(0,0,26,37);
	var bunny;
	var drawableBunnies = new Array();
	{
		var _g1 = 0, _g = demo.bunnyLandBlitTest.BunnyLandBlitTest.numBunnies;
		while(_g1 < _g) {
			var i = _g1++;
			bunny = this.bunnies[i];
			bunny.x += bunny.speedX;
			bunny.y += bunny.speedY;
			if(bunny.x > this.maxX) {
				bunny.speedX *= -1;
				bunny.x = this.maxX;
			}
			else if(bunny.x < this.minX) {
				bunny.speedX *= -1;
				bunny.x = this.minX;
			}
			if(bunny.y > this.maxY) {
				bunny.speedY *= -1;
				bunny.y = this.maxY;
			}
			else if(bunny.y < this.minY) {
				bunny.speedY *= -1;
				bunny.y = this.minY;
			}
			bunny.z += bunny.speedZ;
			bunny.speedZ += demo.bunnyLandBlitTest.BunnyLandBlitTest.gravity;
			if(bunny.z > demo.bunnyLandBlitTest.BunnyLandBlitTest.maxZ) {
				bunny.speedZ *= -0.5;
				bunny.z = demo.bunnyLandBlitTest.BunnyLandBlitTest.maxZ;
				if(Math.random() > 0.1) {
					bunny.speedZ -= Math.random();
				}
			}
			else if(bunny.z < demo.bunnyLandBlitTest.BunnyLandBlitTest.minZ) {
				bunny.speedZ = 0;
				bunny.z = demo.bunnyLandBlitTest.BunnyLandBlitTest.minZ;
			}
			var drawPosition = bunny.drawPosition;
			drawPosition.x = bunny.x - this.cameraRect.x;
			drawPosition.y = (bunny.y + bunny.z) - this.cameraRect.y;
			if(drawPosition.x <= demo.bunnyLandBlitTest.BunnyLandBlitTest.screenWidth && drawPosition.x > -sourceRect.width) {
				if(drawPosition.y <= demo.bunnyLandBlitTest.BunnyLandBlitTest.screenHeight && drawPosition.y > -sourceRect.height) {
					drawableBunnies.push(bunny);
				}
			}
		}
	}
	drawableBunnies.sort($closure(this,"sortDepths"));
	var numDrawableBunnies = drawableBunnies.length;
	{
		var _g = 0;
		while(_g < numDrawableBunnies) {
			var i = _g++;
			bunny = drawableBunnies[i];
			this.bitmap.getBitmapData().copyPixels(bunny.bitmapData,sourceRect,bunny.drawPosition,null,null,true);
		}
	}
	$s.pop();
}
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.sortDepths = function(bunny1,bunny2) {
	$s.push("demo.bunnyLandBlitTest.BunnyLandBlitTest::sortDepths");
	var $spos = $s.length;
	if(bunny1.y < bunny2.y) {
		$s.pop();
		return -1;
	}
	if(bunny1.y > bunny2.y) {
		$s.pop();
		return 1;
	}
	{
		$s.pop();
		return 0;
	}
	$s.pop();
}
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.__class__ = demo.bunnyLandBlitTest.BunnyLandBlitTest;
if(!demo.gamepad) demo.gamepad = {}
demo.gamepad.GamepadInput = function(keyCode) { if( keyCode === $_ ) return; {
	$s.push("demo.gamepad.GamepadInput::new");
	var $spos = $s.length;
	if(keyCode == null) keyCode = -1;
	this._downTicks = this._upTicks = -1;
	this.mappedKeys = (keyCode > -1) == true?[keyCode]:[];
	$s.pop();
}}
demo.gamepad.GamepadInput.__name__ = ["demo","gamepad","GamepadInput"];
demo.gamepad.GamepadInput.prototype._downTicks = null;
demo.gamepad.GamepadInput.prototype._isDown = null;
demo.gamepad.GamepadInput.prototype._isPressed = null;
demo.gamepad.GamepadInput.prototype._isReleased = null;
demo.gamepad.GamepadInput.prototype._upTicks = null;
demo.gamepad.GamepadInput.prototype.getDownTicks = function() {
	$s.push("demo.gamepad.GamepadInput::getDownTicks");
	var $spos = $s.length;
	{
		var $tmp = this._downTicks;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.getIsDown = function() {
	$s.push("demo.gamepad.GamepadInput::getIsDown");
	var $spos = $s.length;
	{
		var $tmp = this._isDown;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.getIsPressed = function() {
	$s.push("demo.gamepad.GamepadInput::getIsPressed");
	var $spos = $s.length;
	{
		var $tmp = this._isPressed;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.getIsReleased = function() {
	$s.push("demo.gamepad.GamepadInput::getIsReleased");
	var $spos = $s.length;
	{
		var $tmp = this._isReleased;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.getUpTicks = function() {
	$s.push("demo.gamepad.GamepadInput::getUpTicks");
	var $spos = $s.length;
	{
		var $tmp = this._upTicks;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.keyDown = function(keyCode) {
	$s.push("demo.gamepad.GamepadInput::keyDown");
	var $spos = $s.length;
	if(Lambda.has(this.mappedKeys,keyCode) != false) this._isDown = true;
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.keyUp = function(keyCode) {
	$s.push("demo.gamepad.GamepadInput::keyUp");
	var $spos = $s.length;
	if(Lambda.has(this.mappedKeys,keyCode) != false) this._isDown = false;
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.mapKey = function(keyCode,replaceExisting) {
	$s.push("demo.gamepad.GamepadInput::mapKey");
	var $spos = $s.length;
	if(replaceExisting == null) replaceExisting = false;
	if(replaceExisting) {
		this.mappedKeys = [keyCode];
	}
	else if(Lambda.has(this.mappedKeys,keyCode) == false) {
		this.mappedKeys.push(keyCode);
	}
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.mappedKeys = null;
demo.gamepad.GamepadInput.prototype.update = function() {
	$s.push("demo.gamepad.GamepadInput::update");
	var $spos = $s.length;
	if(this.getIsDown()) {
		this._isPressed = this.getDownTicks() == -1;
		this._isReleased = false;
		this._downTicks++;
		this._upTicks = -1;
	}
	else {
		this._isReleased = this.getUpTicks() == -1;
		this._isPressed = false;
		this._upTicks++;
		this._downTicks = -1;
	}
	$s.pop();
}
demo.gamepad.GamepadInput.prototype.__class__ = demo.gamepad.GamepadInput;
demo.gamepad.GamepadMultiInput = function(inputs,isOr) { if( inputs === $_ ) return; {
	$s.push("demo.gamepad.GamepadMultiInput::new");
	var $spos = $s.length;
	this._downTicks = this._upTicks = -1;
	this.inputs = inputs;
	this.isOr = isOr;
	$s.pop();
}}
demo.gamepad.GamepadMultiInput.__name__ = ["demo","gamepad","GamepadMultiInput"];
demo.gamepad.GamepadMultiInput.prototype._downTicks = null;
demo.gamepad.GamepadMultiInput.prototype._isDown = null;
demo.gamepad.GamepadMultiInput.prototype._isPressed = null;
demo.gamepad.GamepadMultiInput.prototype._isReleased = null;
demo.gamepad.GamepadMultiInput.prototype._upTicks = null;
demo.gamepad.GamepadMultiInput.prototype.getDownTicks = function() {
	$s.push("demo.gamepad.GamepadMultiInput::getDownTicks");
	var $spos = $s.length;
	{
		var $tmp = this._downTicks;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadMultiInput.prototype.getIsDown = function() {
	$s.push("demo.gamepad.GamepadMultiInput::getIsDown");
	var $spos = $s.length;
	{
		var $tmp = this._isDown;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadMultiInput.prototype.getIsPressed = function() {
	$s.push("demo.gamepad.GamepadMultiInput::getIsPressed");
	var $spos = $s.length;
	{
		var $tmp = this._isPressed;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadMultiInput.prototype.getIsReleased = function() {
	$s.push("demo.gamepad.GamepadMultiInput::getIsReleased");
	var $spos = $s.length;
	{
		var $tmp = this._isReleased;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadMultiInput.prototype.getUpTicks = function() {
	$s.push("demo.gamepad.GamepadMultiInput::getUpTicks");
	var $spos = $s.length;
	{
		var $tmp = this._upTicks;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.GamepadMultiInput.prototype.inputs = null;
demo.gamepad.GamepadMultiInput.prototype.isOr = null;
demo.gamepad.GamepadMultiInput.prototype.update = function() {
	$s.push("demo.gamepad.GamepadMultiInput::update");
	var $spos = $s.length;
	if(this.isOr) {
		this._isDown = false;
		{
			var _g1 = 0, _g = this.inputs.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.inputs[i].getIsDown()) {
					this._isDown = true;
					break;
				}
			}
		}
	}
	else {
		this._isDown = true;
		{
			var _g1 = 0, _g = this.inputs.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!this.inputs[i].getIsDown()) {
					this._isDown = false;
					break;
				}
			}
		}
	}
	if(this.getIsDown()) {
		this._isPressed = this.getDownTicks() == -1;
		this._isReleased = false;
		this._downTicks++;
		this._upTicks = -1;
	}
	else {
		this._isReleased = this.getUpTicks() == -1;
		this._isPressed = false;
		this._upTicks++;
		this._downTicks = -1;
	}
	$s.pop();
}
demo.gamepad.GamepadMultiInput.prototype.__class__ = demo.gamepad.GamepadMultiInput;
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
	hedge.Setup.__jq__ = new $("div#" + stageName);
	hedge.Setup.__jq__.css(hedge.Setup.__attr__({ width : "100%", height : "100%", left : "0px", top : "0px", position : "relative"})).css("background-color",hedge.Setup.RGB_to_String(16777215)).css("z-index",0);
	hedge.Setup.__jq__.attr(hedge.Setup.__data__({ version : 0.1, project : "hedge", haXe : "http://www.haxe.org"}));
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
	this.__canvas__ = new $("<canvas></canvas>").addClass("bitmapdata").attr({ id : this.__id__, width : width, height : height});
	this.__canvas__.bind("mouseenter",$closure(this,"onCanvasEnter"));
	this.__canvas__.bind("mouseleave",$closure(this,"onCanvasLeave"));
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
hedge.display.BitmapData.prototype.onCanvasEnter = function(e) {
	$s.push("hedge.display.BitmapData::onCanvasEnter");
	var $spos = $s.length;
	this.__canvas__.attr({ tabindex : 0}).focus();
	$s.pop();
}
hedge.display.BitmapData.prototype.onCanvasLeave = function(e) {
	$s.push("hedge.display.BitmapData::onCanvasLeave");
	var $spos = $s.length;
	this.__canvas__.removeAttr("tabindex").blur();
	$s.pop();
}
hedge.display.BitmapData.prototype.transparent = null;
hedge.display.BitmapData.prototype.width = null;
hedge.display.BitmapData.prototype.__class__ = hedge.display.BitmapData;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.has = function(it,elt,cmp) {
	$s.push("Lambda::has");
	var $spos = $s.length;
	if(cmp == null) {
		{ var $it0 = it.iterator();
		while( $it0.hasNext() ) { var x = $it0.next();
		if(x == elt) {
			$s.pop();
			return true;
		}
		}}
	}
	else {
		{ var $it1 = it.iterator();
		while( $it1.hasNext() ) { var x = $it1.next();
		if(cmp(x,elt)) {
			$s.pop();
			return true;
		}
		}}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Lambda.prototype.__class__ = Lambda;
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
if(!hedge.ui) hedge.ui = {}
hedge.ui.Keyboard = function() { }
hedge.ui.Keyboard.__name__ = ["hedge","ui","Keyboard"];
hedge.ui.Keyboard.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.ui.Keyboard.prototype[k] = hedge.Object.prototype[k];
hedge.ui.Keyboard.capsLock = null;
hedge.ui.Keyboard.numLock = null;
hedge.ui.Keyboard.getCapsLock = function() {
	$s.push("hedge.ui.Keyboard::getCapsLock");
	var $spos = $s.length;
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
hedge.ui.Keyboard.getNumLock = function() {
	$s.push("hedge.ui.Keyboard::getNumLock");
	var $spos = $s.length;
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
hedge.ui.Keyboard.prototype.__class__ = hedge.ui.Keyboard;
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
hedge.display.GradientType = function() { }
hedge.display.GradientType.__name__ = ["hedge","display","GradientType"];
hedge.display.GradientType.prototype.__class__ = hedge.display.GradientType;
demo.gamepad.Gamepad = function(stage,isCircle,ease,autoStep) { if( stage === $_ ) return; {
	$s.push("demo.gamepad.Gamepad::new");
	var $spos = $s.length;
	if(autoStep == null) autoStep = true;
	if(ease == null) ease = 0.2;
	haxe.Log.trace("Remember to hit \"Control > Disable Keyboard Shorcuts\" in the Flash IDE & stand-alone Flash player!",{ fileName : "Gamepad.hx", lineNumber : 51, className : "demo.gamepad.Gamepad", methodName : "new"});
	this.setX(this.setY(this._targetX = this._targetY = this._angle = this._rotation = this._magnitude = 0));
	this.isCircle = isCircle;
	this.ease = ease;
	this._up = new demo.gamepad.GamepadInput();
	this._down = new demo.gamepad.GamepadInput();
	this._left = new demo.gamepad.GamepadInput();
	this._right = new demo.gamepad.GamepadInput();
	this._fire1 = new demo.gamepad.GamepadInput();
	this._fire2 = new demo.gamepad.GamepadInput();
	this._inputs = [this.getUp(),this.getDown(),this.getLeft(),this.getRight(),this.getFire1(),this.getFire2()];
	this._upLeft = new demo.gamepad.GamepadMultiInput([this.getUp(),this.getLeft()],false);
	this._upRight = new demo.gamepad.GamepadMultiInput([this.getUp(),this.getRight()],false);
	this._downLeft = new demo.gamepad.GamepadMultiInput([this.getDown(),this.getLeft()],false);
	this._downRight = new demo.gamepad.GamepadMultiInput([this.getDown(),this.getRight()],false);
	this._anyDirection = new demo.gamepad.GamepadMultiInput([this.getUp(),this.getDown(),this.getLeft(),this.getRight()],true);
	this._multiInputs = [this.getUpLeft(),this.getUpRight(),this.getDownLeft(),this.getDownRight(),this.getAnyDirection()];
	this.useArrows();
	this.useControlSpace();
	stage.addEventListener("keydown",$closure(this,"onKeyDown"));
	stage.addEventListener("keyup",$closure(this,"onKeyUp"));
	if(autoStep) {
		stage.addEventListener("enterFrame",$closure(this,"onEnterFrame"));
	}
	$s.pop();
}}
demo.gamepad.Gamepad.__name__ = ["demo","gamepad","Gamepad"];
demo.gamepad.Gamepad.prototype._angle = null;
demo.gamepad.Gamepad.prototype._anyDirection = null;
demo.gamepad.Gamepad.prototype._down = null;
demo.gamepad.Gamepad.prototype._downLeft = null;
demo.gamepad.Gamepad.prototype._downRight = null;
demo.gamepad.Gamepad.prototype._fire1 = null;
demo.gamepad.Gamepad.prototype._fire2 = null;
demo.gamepad.Gamepad.prototype._inputs = null;
demo.gamepad.Gamepad.prototype._left = null;
demo.gamepad.Gamepad.prototype._magnitude = null;
demo.gamepad.Gamepad.prototype._multiInputs = null;
demo.gamepad.Gamepad.prototype._right = null;
demo.gamepad.Gamepad.prototype._rotation = null;
demo.gamepad.Gamepad.prototype._targetX = null;
demo.gamepad.Gamepad.prototype._targetY = null;
demo.gamepad.Gamepad.prototype._up = null;
demo.gamepad.Gamepad.prototype._upLeft = null;
demo.gamepad.Gamepad.prototype._upRight = null;
demo.gamepad.Gamepad.prototype._x = null;
demo.gamepad.Gamepad.prototype._y = null;
demo.gamepad.Gamepad.prototype.ease = null;
demo.gamepad.Gamepad.prototype.getAngle = function() {
	$s.push("demo.gamepad.Gamepad::getAngle");
	var $spos = $s.length;
	{
		var $tmp = this._angle;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getAnyDirection = function() {
	$s.push("demo.gamepad.Gamepad::getAnyDirection");
	var $spos = $s.length;
	{
		var $tmp = this._anyDirection;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getDown = function() {
	$s.push("demo.gamepad.Gamepad::getDown");
	var $spos = $s.length;
	{
		var $tmp = this._down;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getDownLeft = function() {
	$s.push("demo.gamepad.Gamepad::getDownLeft");
	var $spos = $s.length;
	{
		var $tmp = this._downLeft;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getDownRight = function() {
	$s.push("demo.gamepad.Gamepad::getDownRight");
	var $spos = $s.length;
	{
		var $tmp = this._downRight;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getFire1 = function() {
	$s.push("demo.gamepad.Gamepad::getFire1");
	var $spos = $s.length;
	{
		var $tmp = this._fire1;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getFire2 = function() {
	$s.push("demo.gamepad.Gamepad::getFire2");
	var $spos = $s.length;
	{
		var $tmp = this._fire2;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getLeft = function() {
	$s.push("demo.gamepad.Gamepad::getLeft");
	var $spos = $s.length;
	{
		var $tmp = this._left;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getMagnitude = function() {
	$s.push("demo.gamepad.Gamepad::getMagnitude");
	var $spos = $s.length;
	{
		var $tmp = this._magnitude;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getRight = function() {
	$s.push("demo.gamepad.Gamepad::getRight");
	var $spos = $s.length;
	{
		var $tmp = this._right;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getRotation = function() {
	$s.push("demo.gamepad.Gamepad::getRotation");
	var $spos = $s.length;
	{
		var $tmp = this._rotation;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getUp = function() {
	$s.push("demo.gamepad.Gamepad::getUp");
	var $spos = $s.length;
	{
		var $tmp = this._up;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getUpLeft = function() {
	$s.push("demo.gamepad.Gamepad::getUpLeft");
	var $spos = $s.length;
	{
		var $tmp = this._upLeft;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getUpRight = function() {
	$s.push("demo.gamepad.Gamepad::getUpRight");
	var $spos = $s.length;
	{
		var $tmp = this._upRight;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getX = function() {
	$s.push("demo.gamepad.Gamepad::getX");
	var $spos = $s.length;
	{
		var $tmp = this._x;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.getY = function() {
	$s.push("demo.gamepad.Gamepad::getY");
	var $spos = $s.length;
	{
		var $tmp = this._y;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.isCircle = null;
demo.gamepad.Gamepad.prototype.mapDirection = function(up,down,left,right,replaceExisting) {
	$s.push("demo.gamepad.Gamepad::mapDirection");
	var $spos = $s.length;
	if(replaceExisting == null) replaceExisting = false;
	this.getUp().mapKey(up,replaceExisting);
	this.getDown().mapKey(down,replaceExisting);
	this.getLeft().mapKey(left,replaceExisting);
	this.getRight().mapKey(right,replaceExisting);
	$s.pop();
}
demo.gamepad.Gamepad.prototype.mapFireButtons = function(fire1,fire2,replaceExisting) {
	$s.push("demo.gamepad.Gamepad::mapFireButtons");
	var $spos = $s.length;
	if(replaceExisting == null) replaceExisting = false;
	this.getFire1().mapKey(fire1,replaceExisting);
	this.getFire2().mapKey(fire2,replaceExisting);
	$s.pop();
}
demo.gamepad.Gamepad.prototype.onEnterFrame = function(event) {
	$s.push("demo.gamepad.Gamepad::onEnterFrame");
	var $spos = $s.length;
	this.step();
	$s.pop();
}
demo.gamepad.Gamepad.prototype.onKeyDown = function(event) {
	$s.push("demo.gamepad.Gamepad::onKeyDown");
	var $spos = $s.length;
	{
		var _g1 = 0, _g = this._inputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._inputs[i].keyDown(event.keyCode);
		}
	}
	this.updateState();
	$s.pop();
}
demo.gamepad.Gamepad.prototype.onKeyUp = function(event) {
	$s.push("demo.gamepad.Gamepad::onKeyUp");
	var $spos = $s.length;
	{
		var _g1 = 0, _g = this._inputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._inputs[i].keyUp(event.keyCode);
		}
	}
	this.updateState();
	$s.pop();
}
demo.gamepad.Gamepad.prototype.setX = function(value) {
	$s.push("demo.gamepad.Gamepad::setX");
	var $spos = $s.length;
	this._x = value;
	this._targetX = value;
	this._angle = Math.atan2(this.getX(),this.getY());
	this._rotation = this.getAngle() * 57.29577951308232;
	{
		var $tmp = this.getX();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.setY = function(value) {
	$s.push("demo.gamepad.Gamepad::setY");
	var $spos = $s.length;
	this._y = value;
	this._targetY = value;
	this._angle = Math.atan2(this.getX(),this.getY());
	this._rotation = this.getAngle() * 57.29577951308232;
	{
		var $tmp = this.getY();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.step = function() {
	$s.push("demo.gamepad.Gamepad::step");
	var $spos = $s.length;
	{
		var _g = this;
		_g.setX(_g.getX() + (this._targetX - this.getX()) * this.ease);
	}
	{
		var _g = this;
		_g.setY(_g.getY() + (this._targetY - this.getY()) * this.ease);
	}
	this._magnitude = Math.sqrt((this.getX() * this.getX()) + (this.getY() * this.getY()));
	this._angle = Math.atan2(this.getX(),this.getY());
	this._rotation = this.getAngle() * 57.29577951308232;
	{
		var _g1 = 0, _g = this._inputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._inputs[i].update();
		}
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.updateState = function() {
	$s.push("demo.gamepad.Gamepad::updateState");
	var $spos = $s.length;
	{
		var _g1 = 0, _g = this._multiInputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._multiInputs[i].update();
		}
	}
	if(this.getUp().getIsDown()) {
		this._targetY = -1;
	}
	else if(this.getDown().getIsDown()) {
		this._targetY = 1;
	}
	else {
		this._targetY = 0;
	}
	if(this.getLeft().getIsDown()) {
		this._targetX = -1;
	}
	else if(this.getRight().getIsDown()) {
		this._targetX = 1;
	}
	else {
		this._targetX = 0;
	}
	var _targetAngle = Math.atan2(this._targetX,this._targetY);
	if(this.isCircle && this.getAnyDirection().getIsDown()) {
		this._targetX = Math.sin(_targetAngle);
		this._targetY = Math.cos(_targetAngle);
	}
	$s.pop();
}
demo.gamepad.Gamepad.prototype.useArrows = function(replaceExisting) {
	$s.push("demo.gamepad.Gamepad::useArrows");
	var $spos = $s.length;
	if(replaceExisting == null) replaceExisting = false;
	this.mapDirection(38,40,37,39,replaceExisting);
	$s.pop();
}
demo.gamepad.Gamepad.prototype.useControlSpace = function(replaceExisting) {
	$s.push("demo.gamepad.Gamepad::useControlSpace");
	var $spos = $s.length;
	if(replaceExisting == null) replaceExisting = false;
	this.mapFireButtons(17,32,replaceExisting);
	$s.pop();
}
demo.gamepad.Gamepad.prototype.useWASD = function(replaceExisting) {
	$s.push("demo.gamepad.Gamepad::useWASD");
	var $spos = $s.length;
	if(replaceExisting == null) replaceExisting = false;
	this.mapDirection(87,83,65,68,replaceExisting);
	$s.pop();
}
demo.gamepad.Gamepad.prototype.__class__ = demo.gamepad.Gamepad;
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
hedge.display.Graphics.prototype.__element__ = null;
hedge.display.Graphics.prototype.__raphael__ = null;
hedge.display.Graphics.prototype.beginFill = function(color,alpha) {
	$s.push("hedge.display.Graphics::beginFill");
	var $spos = $s.length;
	if(alpha == null) alpha = 1.0;
	this.fill_color = color;
	this.fill_alpha = alpha;
	this.fillType = "flood";
	$s.pop();
}
hedge.display.Graphics.prototype.checkFill = function() {
	$s.push("hedge.display.Graphics::checkFill");
	var $spos = $s.length;
	this.fillType = this.fillType == null?"flood":this.fillType;
	switch(this.fillType) {
	case "bitmapdata":{
		throw "beginBitmapFill is not implemented";
	}break;
	case "flood":{
		this.__element__.attr("fill",this.fill_color == null?"#ffffff":hedge.Setup.RGB_to_String(this.fill_color));
		this.__element__.attr("opacity",this.fill_alpha == null?1.0:this.fill_alpha);
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
	this.lineType = this.lineType == null?"plain":this.lineType;
	switch(this.lineType) {
	case "gradient":{
		null;
	}break;
	case "plain":{
		this.__element__.attr("stroke-width",this.line_thickness == null?1.0:this.line_thickness);
		this.__element__.attr("stroke",this.line_color == null?"none":hedge.Setup.RGB_to_String(this.line_color));
		this.__element__.attr("stroke-opacity",this.line_alpha == null?1.0:this.line_alpha);
		this.__element__.attr("stroke-linecap",this.line_caps == null?"butt":this.line_caps = this.line_caps == "none"?"butt":this.line_caps);
		this.__element__.attr("stroke-linejoin",this.line_joints == null?"miter":this.line_joints);
		this.__element__.attr("stroke-miterlimit",this.line_limit == null?3.0:this.line_limit);
	}break;
	default:{
		null;
	}break;
	}
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
hedge.display.Graphics.prototype.fill_gradient_colors = null;
hedge.display.Graphics.prototype.fill_gradient_ratios = null;
hedge.display.Graphics.prototype.fill_gradient_type = null;
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
hedge.display.Graphics.prototype.lineType = null;
hedge.display.Graphics.prototype.line_alpha = null;
hedge.display.Graphics.prototype.line_caps = null;
hedge.display.Graphics.prototype.line_color = null;
hedge.display.Graphics.prototype.line_joints = null;
hedge.display.Graphics.prototype.line_limit = null;
hedge.display.Graphics.prototype.line_thickness = null;
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
	hedge.Setup.init($closure(Main,"launch"),15,"bunnyLand");
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
	this.bunnyOne = new demo.bunnyLandBlitTest.BunnyLandBlitTest();
	this.bunnyOne.name = "blit";
	this.bunnyClass = demo.bunnyLandBlitTest.BunnyLandBlitTest;
	this.bunnyAmount = new hedge.text.TextField();
	this.bunnyAmount.setType("input");
	this.bunnyAmount.setBackground(true);
	this.bunnyAmount.setBorder(true);
	this.bunnyAmount.setWidth(50);
	this.bunnyAmount.setHeight(20);
	this.bunnyAmount.setText("3000");
	this.bunnyAmount.setName("bunnyAmount");
	this.submitAmount = new hedge.display.Sprite();
	this.submitAmount.getGraphics().beginFill(40940);
	this.submitAmount.getGraphics().lineStyle(1,0);
	this.submitAmount.getGraphics().drawRect(0,0,98,20);
	this.submitAmount.getGraphics().endFill();
	this.submitAmount.setName("submitAmount");
	this.submitText = new hedge.text.TextField();
	this.submitText.setText("submit");
	this.submitText.setName("submitText");
	this.submitAmount.setX(640 - (this.submitAmount.getWidth() + 5));
	this.submitAmount.setY(480 - (this.submitAmount.getHeight() + 5));
	this.bunnyAmount.setX((640 - (this.submitAmount.getWidth() + 5)) - (this.bunnyAmount.getWidth() + 5));
	this.bunnyAmount.setY(480 - (this.submitAmount.getHeight() + 5));
	this.submitText.setX(25);
	this.submitText.setY(2);
	this.submitAmount.addEventListener("click",$closure(this,"onBunnyClick"));
	this.addChild(this.bunnyOne);
	this.addChild(this.bunnyAmount);
	this.addChild(this.submitAmount);
	this.submitAmount.addChild(this.submitText);
	$s.pop();
}}
Examples.__name__ = ["Examples"];
Examples.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) Examples.prototype[k] = hedge.display.Sprite.prototype[k];
Examples.prototype.bunnyAmount = null;
Examples.prototype.bunnyClass = null;
Examples.prototype.bunnyOne = null;
Examples.prototype.onBunnyClick = function(e) {
	$s.push("Examples::onBunnyClick");
	var $spos = $s.length;
	if(this.bunnyAmount.getText() == null) {
		this.bunnyAmount.setText("3000");
	}
	var amount = Std.parseInt(this.bunnyAmount.getText());
	if(amount > 3000) {
		this.bunnyAmount.setText("3000");
	}
	if(amount < 0) {
		this.bunnyAmount.setText("1");
	}
	demo.bunnyBlitTest.BlitTest.numBunnies = Std.parseInt(this.bunnyAmount.getText());
	$s.pop();
}
Examples.prototype.submitAmount = null;
Examples.prototype.submitText = null;
Examples.prototype.__class__ = Examples;
if(!hedge.text) hedge.text = {}
hedge.text.TextField = function(p) { if( p === $_ ) return; {
	$s.push("hedge.text.TextField::new");
	var $spos = $s.length;
	hedge.display.InteractiveObject.call(this);
	this.__jq__.css({ overflow : "none", padding : "0px", resize : "none", outline : "none"}).css("border-width","1px");
	this.setBackground(false);
	this.setBorder(false);
	this.setWordWrap(false);
	this.setType("dynamic");
	this.setWidth(this.setHeight(100));
	$s.pop();
}}
hedge.text.TextField.__name__ = ["hedge","text","TextField"];
hedge.text.TextField.__super__ = hedge.display.InteractiveObject;
for(var k in hedge.display.InteractiveObject.prototype ) hedge.text.TextField.prototype[k] = hedge.display.InteractiveObject.prototype[k];
hedge.text.TextField.prototype.background = null;
hedge.text.TextField.prototype.backgroundColor = null;
hedge.text.TextField.prototype.border = null;
hedge.text.TextField.prototype.borderColor = null;
hedge.text.TextField.prototype.generateJQuery = function() {
	$s.push("hedge.text.TextField::generateJQuery");
	var $spos = $s.length;
	hedge.Setup.__storage__.append(this.__jq__ = new $("<textarea>"));
	$s.pop();
}
hedge.text.TextField.prototype.getBackground = function() {
	$s.push("hedge.text.TextField::getBackground");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.attr("data-background");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.getBackgroundColor = function() {
	$s.push("hedge.text.TextField::getBackgroundColor");
	var $spos = $s.length;
	{
		var $tmp = this.getBackground() == true?hedge.Setup.RGB_String_to_HEX(this.__jq__.css("background-color")):-1;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.getBorder = function() {
	$s.push("hedge.text.TextField::getBorder");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.attr("data-border");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.getBorderColor = function() {
	$s.push("hedge.text.TextField::getBorderColor");
	var $spos = $s.length;
	{
		var $tmp = this.getBorder() == true?hedge.Setup.RGB_String_to_HEX(this.__jq__.css("border-color")):-16777216;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.getText = function() {
	$s.push("hedge.text.TextField::getText");
	var $spos = $s.length;
	{
		var $tmp = this.__jq__.val();
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
hedge.text.TextField.prototype.setBackground = function(value) {
	$s.push("hedge.text.TextField::setBackground");
	var $spos = $s.length;
	this.__jq__.attr("data-background",value);
	this.__jq__.css("background",value == true?"" + hedge.Setup.RGB_to_String(16777215):"none");
	{
		var $tmp = this.__jq__.attr("data-background");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setBackgroundColor = function(value) {
	$s.push("hedge.text.TextField::setBackgroundColor");
	var $spos = $s.length;
	if(this.getBackground() == true) {
		this.__jq__.css("background-color",hedge.Setup.RGB_to_String(value));
	}
	{
		var $tmp = this.getBackgroundColor();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setBorder = function(value) {
	$s.push("hedge.text.TextField::setBorder");
	var $spos = $s.length;
	this.__jq__.attr("data-border",value);
	this.__jq__.css("border",value == true?"1px solid " + hedge.Setup.RGB_to_String(0):"0px none");
	{
		var $tmp = this.__jq__.attr("data-border");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setBorderColor = function(value) {
	$s.push("hedge.text.TextField::setBorderColor");
	var $spos = $s.length;
	if(this.getBorder() == true) {
		this.__jq__.css("border-color",hedge.Setup.RGB_to_String(value));
	}
	{
		var $tmp = this.getBorderColor();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setHeight = function(value) {
	$s.push("hedge.text.TextField::setHeight");
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
hedge.text.TextField.prototype.setText = function(value) {
	$s.push("hedge.text.TextField::setText");
	var $spos = $s.length;
	this.__jq__.val(value);
	{
		var $tmp = this.__jq__.val();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setType = function(value) {
	$s.push("hedge.text.TextField::setType");
	var $spos = $s.length;
	if(value == "dynamic") {
		this.__jq__.attr({ readonly : "readonly"});
	}
	else if(value == "input") {
		this.__jq__.removeAttr("readonly");
	}
	this.__jq__.attr("data-type",value);
	{
		var $tmp = this.__jq__.attr("data-type");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hedge.text.TextField.prototype.setWidth = function(value) {
	$s.push("hedge.text.TextField::setWidth");
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
demo.bunnyBlitTest.BlitTest.numBunnies = 3000;
demo.bunnyLandBlitTest.BunnyLandBlitTest.numBunnies = 3000;
demo.bunnyLandBlitTest.BunnyLandBlitTest.gravity = 1;
demo.bunnyLandBlitTest.BunnyLandBlitTest.maxZ = 0;
demo.bunnyLandBlitTest.BunnyLandBlitTest.minZ = -10000;
demo.bunnyLandBlitTest.BunnyLandBlitTest.screenWidth = 640;
demo.bunnyLandBlitTest.BunnyLandBlitTest.screenHeight = 480;
demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedX = 4;
demo.bunnyLandBlitTest.BunnyLandBlitTest.cameraSpeedY = 5;
demo.bunnyLandBlitTest.BunnyLandBlitTest.columns = 127;
demo.bunnyLandBlitTest.BunnyLandBlitTest.rows = 127;
demo.bunnyLandBlitTest.BunnyLandBlitTest.tileSize = 32;
hedge.jquery.events.ResizeElement.__meta__ = { fields : { add : { jquery : null}}}
hedge.Setup.__events__ = [hedge.jquery.events.ResizeElement];
hedge.Setup.RESIZE_ELEMENT = "ResizeElement";
haxe.Timer.arr = new Array();
hedge.display.GradientType.LINEAR = "linear";
hedge.display.GradientType.RADIAL = "radial";
js.Lib.onerror = null;
hedge.jquery.events.EnterFrame.data = new Hash();
hedge.jquery.events.EnterFrame.events = new Array();
hedge.jquery.events.EnterFrame.running = false;
Main.main()