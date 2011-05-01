$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof hedge=='undefined') hedge = {}
if(!hedge.events) hedge.events = {}
hedge.events.EventPhase = function() { }
hedge.events.EventPhase.__name__ = ["hedge","events","EventPhase"];
hedge.events.EventPhase.prototype.__class__ = hedge.events.EventPhase;
hedge.Object = function(p) {
	if( p === $_ ) return;
	this.initialize();
}
hedge.Object.__name__ = ["hedge","Object"];
hedge.Object.prototype.__ele__ = null;
hedge.Object.prototype.initialize = function() {
}
hedge.Object.prototype.__class__ = hedge.Object;
hedge.events.Event = function(type,bubbles,cancelable) {
	if( type === $_ ) return;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	hedge.Object.call(this);
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
}
hedge.events.Event.__name__ = ["hedge","events","Event"];
hedge.events.Event.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.Event.prototype[k] = hedge.Object.prototype[k];
hedge.events.Event.prototype.bubbles = null;
hedge.events.Event.prototype.cancelable = null;
hedge.events.Event.prototype.currentTarget = null;
hedge.events.Event.prototype.eventPhase = null;
hedge.events.Event.prototype.target = null;
hedge.events.Event.prototype.type = null;
hedge.events.Event.prototype.clone = function() {
	return new hedge.events.Event(this.type,this.bubbles,this.cancelable);
}
hedge.events.Event.prototype.__class__ = hedge.events.Event;
hedge.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue) {
	if( type === $_ ) return;
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
}
hedge.events.KeyboardEvent.__name__ = ["hedge","events","KeyboardEvent"];
hedge.events.KeyboardEvent.__super__ = hedge.events.Event;
for(var k in hedge.events.Event.prototype ) hedge.events.KeyboardEvent.prototype[k] = hedge.events.Event.prototype[k];
hedge.events.KeyboardEvent.prototype.altKey = null;
hedge.events.KeyboardEvent.prototype.charCode = null;
hedge.events.KeyboardEvent.prototype.ctrlKey = null;
hedge.events.KeyboardEvent.prototype.keyCode = null;
hedge.events.KeyboardEvent.prototype.keyLocation = null;
hedge.events.KeyboardEvent.prototype.shiftKey = null;
hedge.events.KeyboardEvent.prototype.clone = function() {
	return new hedge.events.KeyboardEvent(this.type,this.bubbles,this.cancelable,this.charCode,this.keyCode,this.keyLocation,this.ctrlKey,this.altKey,this.shiftKey);
}
hedge.events.KeyboardEvent.prototype.__class__ = hedge.events.KeyboardEvent;
if(!hedge.events.internal) hedge.events.internal = {}
hedge.events.internal.HedgeEnterFrame = function() { }
hedge.events.internal.HedgeEnterFrame.__name__ = ["hedge","events","internal","HedgeEnterFrame"];
hedge.events.internal.HedgeEnterFrame.timer = null;
hedge.events.internal.HedgeEnterFrame.interval = null;
hedge.events.internal.HedgeEnterFrame.init = function() {
	hedge.events.internal.HedgeEnterFrame.event.eventPhase = 2;
}
hedge.events.internal.HedgeEnterFrame.add = function(efes) {
	hedge.events.internal.HedgeEnterFrame.array.push(efes);
	hedge.events.internal.HedgeEnterFrame.length = hedge.events.internal.HedgeEnterFrame.array.length;
	if(hedge.events.internal.HedgeEnterFrame.length == 0) {
		hedge.events.internal.HedgeEnterFrame.interval = 1000 / hedge.Setup.getFrameRate();
		hedge.events.internal.HedgeEnterFrame.timer = setInterval(hedge.events.internal.HedgeEnterFrame.runEnterFrame,hedge.events.internal.HedgeEnterFrame.interval);
	}
}
hedge.events.internal.HedgeEnterFrame.remove = function(efes) {
	var kill = null;
	var _g = 0, _g1 = hedge.events.internal.HedgeEnterFrame.array;
	while(_g < _g1.length) {
		var n = _g1[_g];
		++_g;
		if(n == efes) {
			kill = n;
			break;
		}
	}
	hedge.events.internal.HedgeEnterFrame.array.remove(kill);
}
hedge.events.internal.HedgeEnterFrame.determineFrameRate = function() {
	hedge.events.internal.HedgeEnterFrame.interval = 1000 / hedge.Setup.getFrameRate();
}
hedge.events.internal.HedgeEnterFrame.runEnterFrame = function() {
	var _g = 0, _g1 = hedge.events.internal.HedgeEnterFrame.array;
	while(_g < _g1.length) {
		var n = _g1[_g];
		++_g;
		hedge.events.internal.HedgeEnterFrame.event.currentTarget = hedge.events.internal.HedgeEnterFrame.event.target = n.target;
		n.listener(hedge.events.internal.HedgeEnterFrame.event);
	}
}
hedge.events.internal.HedgeEnterFrame.prototype.__class__ = hedge.events.internal.HedgeEnterFrame;
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
hedge.events.EventDispatcher = function(target) {
	if( target === $_ ) return;
	hedge.Object.call(this);
}
hedge.events.EventDispatcher.__name__ = ["hedge","events","EventDispatcher"];
hedge.events.EventDispatcher.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.EventDispatcher.prototype[k] = hedge.Object.prototype[k];
hedge.events.EventDispatcher.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
}
hedge.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	return true;
}
hedge.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return true;
}
hedge.events.EventDispatcher.prototype.removeEventListener = function(type,listener,useCapture) {
	if(useCapture == null) useCapture = false;
}
hedge.events.EventDispatcher.prototype.willTrigger = function(type) {
	return true;
}
hedge.events.EventDispatcher.prototype.__class__ = hedge.events.EventDispatcher;
hedge.events.EventDispatcher.__interfaces__ = [hedge.events.IEventDispatcher];
if(!hedge.display) hedge.display = {}
hedge.display.DisplayObject = function(p) {
	if( p === $_ ) return;
	hedge.events.EventDispatcher.call(this,null);
}
hedge.display.DisplayObject.__name__ = ["hedge","display","DisplayObject"];
hedge.display.DisplayObject.__super__ = hedge.events.EventDispatcher;
for(var k in hedge.events.EventDispatcher.prototype ) hedge.display.DisplayObject.prototype[k] = hedge.events.EventDispatcher.prototype[k];
hedge.display.DisplayObject.prototype.alpha = null;
hedge.display.DisplayObject.prototype.blendMode = null;
hedge.display.DisplayObject.prototype.cacheAsBitmap = null;
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
hedge.display.DisplayObject.prototype.stage = null;
hedge.display.DisplayObject.prototype.visible = null;
hedge.display.DisplayObject.prototype.height = null;
hedge.display.DisplayObject.prototype.width = null;
hedge.display.DisplayObject.prototype.x = null;
hedge.display.DisplayObject.prototype.y = null;
hedge.display.DisplayObject.prototype.__originalName__ = null;
hedge.display.DisplayObject.prototype.__ancestorPath__ = null;
hedge.display.DisplayObject.prototype.__mouseX__ = null;
hedge.display.DisplayObject.prototype.__mouseY__ = null;
hedge.display.DisplayObject.prototype.__originalRectangle__ = null;
hedge.display.DisplayObject.prototype.__offsetX__ = null;
hedge.display.DisplayObject.prototype.__offsetY__ = null;
hedge.display.DisplayObject.prototype.initialize = function() {
	hedge.events.EventDispatcher.prototype.initialize.call(this);
	this.initializeDisplayObject();
}
hedge.display.DisplayObject.prototype.initializeDisplayObject = function() {
	this.__mouseX__ = 0;
	this.__mouseY__ = 0;
	this.__originalRectangle__ = new hedge.geom.Rectangle(0,0,0,0);
	this.__generateHedgeDisplayObjectElement__();
	this.__originalName__ = this.setName(hedge.Setup.generateInstanceName());
	this.set__OffsetX__(this.set__OffsetY__(0));
	this.stage = hedge.Setup.__stage__;
	this.setParent(hedge.Setup.__stage__);
	this.__ele__.setAttribute("id",this.getName());
	this.__ele__.setAttribute("data-originalName",this.__originalName__);
	this.__ele__.style.cssText = "overflow:hidden; display:block; visibility:visible; position:absolute; width:0px; height:0px; left:0px; top:0px;";
	clippings.Twig.data(this.__ele__,"__self__",this);
	clippings.Twig.bind(this.__ele__,"mousemove",$closure(this,"__hedgeOnDisplayObjectMouseMove__"));
	this.__ancestorPath__ = hedge.Setup.createAncestorPath(this);
}
hedge.display.DisplayObject.prototype.__hedgeOnDisplayObjectMouseMove__ = function(e) {
	this.__mouseX__ = e.offsetX;
	this.__mouseY__ = e.offsety;
}
hedge.display.DisplayObject.prototype.__generateHedgeDisplayObjectElement__ = function() {
	this.__ele__ = js.Lib.document.createElement("div");
	hedge.Setup.__normalStorage__.appendChild(this.__ele__);
}
hedge.display.DisplayObject.prototype.__triggerResize__ = function(reference) {
	var _event = new hedge.events.internal.HedgeResizeDisplayEvent("hedgeResizeDisplay",true,true,reference);
	_event.target = this;
	this.dispatchEvent(_event);
}
hedge.display.DisplayObject.prototype.getMouseX = function() {
	return this.__mouseX__;
}
hedge.display.DisplayObject.prototype.getMouseY = function() {
	return this.__mouseY__;
}
hedge.display.DisplayObject.prototype.getRoot = function() {
	return this.root;
}
hedge.display.DisplayObject.prototype.getStage = function() {
	return hedge.Setup.__stage__;
}
hedge.display.DisplayObject.prototype.getParent = function() {
	return this.parent;
}
hedge.display.DisplayObject.prototype.setParent = function(value) {
	this.parent = value;
	return this.getParent();
}
hedge.display.DisplayObject.prototype.getAlpha = function() {
	return this.__ele__.style.opacity;
}
hedge.display.DisplayObject.prototype.setAlpha = function(value) {
	this.__ele__.style.opacity = value;
	return value;
}
hedge.display.DisplayObject.prototype.getBlendMode = function() {
	return this.blendMode;
}
hedge.display.DisplayObject.prototype.setBlendMode = function(value) {
	this.blendMode = value;
	return this.getBlendMode();
}
hedge.display.DisplayObject.prototype.getCache = function() {
	return this.cacheAsBitmap;
}
hedge.display.DisplayObject.prototype.setCache = function(value) {
	this.cacheAsBitmap = value;
	return this.getCache();
}
hedge.display.DisplayObject.prototype.getMask = function() {
	return this.mask;
}
hedge.display.DisplayObject.prototype.setMask = function(value) {
	this.mask = value;
	return this.getMask();
}
hedge.display.DisplayObject.prototype.getName = function() {
	return this.__ele__.getAttribute("id");
}
hedge.display.DisplayObject.prototype.setName = function(value) {
	this.__ele__.setAttribute("id",value);
	return value;
}
hedge.display.DisplayObject.prototype.getOpaqueBackground = function() {
	return this.opaqueBackground;
}
hedge.display.DisplayObject.prototype.setOpaqueBackground = function(value) {
	this.opaqueBackground = value;
	return this.getOpaqueBackground();
}
hedge.display.DisplayObject.prototype.getRotation = function() {
	return this.rotation;
}
hedge.display.DisplayObject.prototype.setRotation = function(value) {
	this.rotation = value;
	return this.getRotation();
}
hedge.display.DisplayObject.prototype.getScale9 = function() {
	return this.scale9Grid;
}
hedge.display.DisplayObject.prototype.setScale9 = function(value) {
	this.scale9Grid = value;
	return this.getScale9();
}
hedge.display.DisplayObject.prototype.getScaleX = function() {
	return this.scaleX;
}
hedge.display.DisplayObject.prototype.setScaleX = function(value) {
	this.scaleX = value;
	return this.getScaleX();
}
hedge.display.DisplayObject.prototype.getScaleY = function() {
	return this.scaleY;
}
hedge.display.DisplayObject.prototype.setScaleY = function(value) {
	this.scaleY = value;
	return this.getScaleY();
}
hedge.display.DisplayObject.prototype.getScrollRect = function() {
	return this.scrollRect;
}
hedge.display.DisplayObject.prototype.setScrollRect = function(value) {
	this.scrollRect = value;
	return this.getScrollRect();
}
hedge.display.DisplayObject.prototype.getVisible = function() {
	return clippings.Twig.data(this.__ele__,"visible") == null?true:clippings.Twig.data(this.__ele__,"visible");
}
hedge.display.DisplayObject.prototype.setVisible = function(value) {
	this.__ele__.style.display = value == false?"none":"block";
	this.__ele__.style.visibility = value == false?"hidden":"visible";
	clippings.Twig.data(this.__ele__,"visible",value);
	return value;
}
hedge.display.DisplayObject.prototype.getHeight = function() {
	return this.__originalRectangle__.height;
}
hedge.display.DisplayObject.prototype.setHeight = function(value) {
	var t = Std.parseInt(clippings.Twig.getStyle(this.__ele__,"border-top-width"));
	t = t == null?0:t;
	this.__originalRectangle__.height = value;
	this.__ele__.style.height = "" + (value + this.__offsetY__ - t * 2) + "px";
	return value;
}
hedge.display.DisplayObject.prototype.getWidth = function() {
	return this.__originalRectangle__.width;
}
hedge.display.DisplayObject.prototype.setWidth = function(value) {
	var t = Std.parseInt(clippings.Twig.getStyle(this.__ele__,"border-top-width"));
	t = t == null?0:t;
	this.__originalRectangle__.width = value;
	this.__ele__.style.width = "" + (value + this.__offsetX__ - t * 2) + "px";
	return value;
}
hedge.display.DisplayObject.prototype.getX = function() {
	return this.__originalRectangle__.x;
}
hedge.display.DisplayObject.prototype.setX = function(value) {
	this.__originalRectangle__.x = value;
	this.__ele__.style.left = "" + (value - this.__offsetX__) + "px";
	return value;
}
hedge.display.DisplayObject.prototype.getY = function() {
	return this.__originalRectangle__.y;
}
hedge.display.DisplayObject.prototype.setY = function(value) {
	this.__originalRectangle__.y = value;
	this.__ele__.style.top = "" + (value - this.__offsetY__) + "px";
	return value;
}
hedge.display.DisplayObject.prototype.set__OffsetX__ = function(value) {
	this.__offsetX__ = value;
	var _g = this;
	_g.setWidth(_g.getWidth() + value);
	return value;
}
hedge.display.DisplayObject.prototype.set__OffsetY__ = function(value) {
	this.__offsetY__ = value;
	var _g = this;
	_g.setHeight(_g.getHeight() + value);
	return value;
}
hedge.display.DisplayObject.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	if(type == "enterFrame") {
		var efes = { target : (function($this) {
			var $r;
			var $t = $this;
			if(Std["is"]($t,hedge.display.DisplayObject)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)), listener : listener};
		hedge.events.internal.HedgeEnterFrame.add(efes);
		return;
	}
	var _event = { listener : listener, target : this};
	var _temp = this;
	var _access = type + "_" + (useCapture?"c":"t");
	var _type = clippings.Twig.data(this.__ele__,_access);
	if(_type == null) clippings.Twig.data(this.__ele__,_access,_event); else throw "_event[" + type + "] already set - you need to remove the previous event";
}
hedge.display.DisplayObject.prototype.removeEventListener = function(type,listener,useCapture) {
	if(useCapture == null) useCapture = false;
	if(type == "enterFrame") {
		var efes = { target : (function($this) {
			var $r;
			var $t = $this;
			if(Std["is"]($t,hedge.display.DisplayObject)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)), listener : listener};
		hedge.events.internal.HedgeEnterFrame.remove(efes);
		return;
	}
	var _access = type + "_" + (useCapture?"c":"t");
	var _type = clippings.Twig.data(this.__ele__,_access);
	if(_type == null) return; else clippings.Twig.removeData(this.__ele__,_access);
}
hedge.display.DisplayObject.prototype.dispatchEvent = function(event) {
	var _data = null;
	var _access = null;
	var _temp = null;
	event.target = event.target == null?this:event.target;
	if(this.__ancestorPath__ == null) return false;
	_access = event.type + "_t";
	_data = clippings.Twig.data(this.__ele__,_access);
	event.eventPhase = 2;
	_temp = clippings.Twig.data(this.__ele__,_access);
	if(_temp != null) {
		event.currentTarget = this;
		_temp.listener(event);
	}
	var _g = 0, _g1 = this.__ancestorPath__;
	while(_g < _g1.length) {
		var n = _g1[_g];
		++_g;
		_temp = clippings.Twig.data(((function($this) {
			var $r;
			var $t = n;
			if(Std["is"]($t,hedge.display.DisplayObject)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).__ele__,_access);
		if(_temp != null) {
			event.eventPhase = 3;
			event.currentTarget = n;
			_temp.listener(event);
		}
	}
	return true;
}
hedge.display.DisplayObject.prototype.__class__ = hedge.display.DisplayObject;
hedge.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if( type === $_ ) return;
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.relatedObject = relatedObject;
	this.shiftKey = shiftKey;
	this.keyCode = keyCode;
	hedge.events.Event.call(this,this.type,this.bubbles,this.cancelable);
}
hedge.events.FocusEvent.__name__ = ["hedge","events","FocusEvent"];
hedge.events.FocusEvent.__super__ = hedge.events.Event;
for(var k in hedge.events.Event.prototype ) hedge.events.FocusEvent.prototype[k] = hedge.events.Event.prototype[k];
hedge.events.FocusEvent.prototype.keyCode = null;
hedge.events.FocusEvent.prototype.relatedObject = null;
hedge.events.FocusEvent.prototype.shiftKey = null;
hedge.events.FocusEvent.prototype.__class__ = hedge.events.FocusEvent;
hedge.display.InteractiveObject = function(p) {
	if( p === $_ ) return;
	hedge.display.DisplayObject.call(this);
}
hedge.display.InteractiveObject.__name__ = ["hedge","display","InteractiveObject"];
hedge.display.InteractiveObject.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.InteractiveObject.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.InteractiveObject.prototype.initialize = function() {
	hedge.display.DisplayObject.prototype.initialize.call(this);
	this.initializeInterativeObject();
}
hedge.display.InteractiveObject.prototype.initializeInterativeObject = function() {
	clippings.Twig.bind(this.__ele__,"click",$closure(this,"onHedgeClick"));
	clippings.Twig.bind(this.__ele__,"dblclick",$closure(this,"onHedgeDoubleClick"));
	clippings.Twig.bind(this.__ele__,"focus",$closure(this,"onHedgeFocusIn"));
	clippings.Twig.bind(this.__ele__,"blur",$closure(this,"onHedgeFocusOut"));
	clippings.Twig.bind(this.__ele__,"keydown",$closure(this,"onHedgeKeyDown"));
	clippings.Twig.bind(this.__ele__,"keyup",$closure(this,"onHedgeKeyUp"));
	clippings.Twig.bind(this.__ele__,"mousedown",$closure(this,"onHedgeMouseDown"));
	clippings.Twig.bind(this.__ele__,"mousemove",$closure(this,"onHedgeMouseMove"));
	clippings.Twig.bind(this.__ele__,"mouseout",$closure(this,"onHedgeMouseOut"));
	clippings.Twig.bind(this.__ele__,"mouseover",$closure(this,"onHedgeMouseOver"));
	clippings.Twig.bind(this.__ele__,"mouseup",$closure(this,"onHedgeMouseUp"));
}
hedge.display.InteractiveObject.prototype.onHedgeClick = function(e) {
	var event = new hedge.events.MouseEvent("click",true,false,e.offsetX,e.offsetY,null,e.ctrlKey,e.altKey,e.shiftKey,true,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeDoubleClick = function(e) {
	var event = new hedge.events.MouseEvent("doubleClick",true,false,e.offsetX,e.offsetY,null,e.ctrlKey,e.altKey,e.shiftKey,true,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeFocusIn = function(e) {
	var event = new hedge.events.FocusEvent("focusIn",true,false,null,false,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeFocusOut = function(e) {
	var event = new hedge.events.FocusEvent("focusOut",true,false,null,false,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeKeyDown = function(e) {
	var event = new hedge.events.KeyboardEvent("keyDown",true,false,e.charCode,e.keyCode,e.keyLocation,e.ctrlKey,e.altKey,e.shiftKey);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeKeyUp = function(e) {
	var event = new hedge.events.KeyboardEvent("keyUp",true,false,e.charCode,e.keyCode,e.keyLocation,e.ctrlKey,e.altKey,e.shiftKey);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeMouseDown = function(e) {
	var event = new hedge.events.MouseEvent("mouseDown",true,false,e.offsetX,e.offsetY,null,e.ctrlKey,e.altKey,e.shiftKey,true,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeMouseMove = function(e) {
	var event = new hedge.events.MouseEvent("mouseMove",true,false,e.offsetX,e.offsetY,null,e.ctrlKey,e.altKey,e.shiftKey,false,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeMouseOut = function(e) {
	this.__ele__.removeAttribute("tabindex");
	this.__ele__.blur();
	var event = new hedge.events.MouseEvent("mouseOut",true,false,e.offsetX,e.offsetY,null,e.ctrlKey,e.altKey,e.shiftKey,false,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeMouseOver = function(e) {
	this.__ele__.setAttribute("tabindex","0");
	this.__ele__.focus();
	var event = new hedge.events.MouseEvent("mouseOver",true,false,e.offsetX,e.offsetY,null,e.ctrlKey,e.altKey,e.shiftKey,false,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.onHedgeMouseUp = function(e) {
	var event = new hedge.events.MouseEvent("mouseUp",true,false,e.offsetX,e.offsetY,null,e.ctrlKey,e.altKey,e.shiftKey,true,0);
	event.target = this;
	this.dispatchEvent(event);
}
hedge.display.InteractiveObject.prototype.__class__ = hedge.display.InteractiveObject;
hedge.display.DisplayObjectContainer = function(p) {
	if( p === $_ ) return;
	hedge.display.InteractiveObject.call(this);
}
hedge.display.DisplayObjectContainer.__name__ = ["hedge","display","DisplayObjectContainer"];
hedge.display.DisplayObjectContainer.__super__ = hedge.display.InteractiveObject;
for(var k in hedge.display.InteractiveObject.prototype ) hedge.display.DisplayObjectContainer.prototype[k] = hedge.display.InteractiveObject.prototype[k];
hedge.display.DisplayObjectContainer.prototype.mouseChildren = null;
hedge.display.DisplayObjectContainer.prototype.numChildren = null;
hedge.display.DisplayObjectContainer.prototype.tabChildren = null;
hedge.display.DisplayObjectContainer.prototype.textSnapshot = null;
hedge.display.DisplayObjectContainer.prototype.addChild = function(child) {
	this.__ele__.appendChild(child.__ele__);
	child.setParent(this);
	this.__triggerResize__(child.__originalRectangle__);
	return child;
}
hedge.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	hedge.Setup.__normalStorage__.appendChild(child.__ele__);
	return child;
}
hedge.display.DisplayObjectContainer.prototype.getMouseChildren = function() {
	return this.mouseChildren;
}
hedge.display.DisplayObjectContainer.prototype.setMouseChildren = function(value) {
	this.mouseChildren = value;
	return this.getMouseChildren();
}
hedge.display.DisplayObjectContainer.prototype.getNumChildren = function() {
	return this.numChildren;
}
hedge.display.DisplayObjectContainer.prototype.setNumChildren = function(value) {
	this.numChildren = value;
	return this.getNumChildren();
}
hedge.display.DisplayObjectContainer.prototype.getTabChildren = function() {
	return this.tabChildren;
}
hedge.display.DisplayObjectContainer.prototype.setTabChildren = function(value) {
	this.tabChildren = value;
	return this.getTabChildren();
}
hedge.display.DisplayObjectContainer.prototype.getTextSnapshot = function() {
	return this.textSnapshot;
}
hedge.display.DisplayObjectContainer.prototype.initialize = function() {
	hedge.display.InteractiveObject.prototype.initialize.call(this);
	this.initializeDisplayObjectContainer();
}
hedge.display.DisplayObjectContainer.prototype.initializeDisplayObjectContainer = function() {
	this.addEventListener("hedgeResizeDisplay",hedge.events.internal.HedgeResizeDisplayEvent.resizeDisplayObject);
}
hedge.display.DisplayObjectContainer.prototype.__class__ = hedge.display.DisplayObjectContainer;
hedge.display.Sprite = function(p) {
	if( p === $_ ) return;
	hedge.display.DisplayObjectContainer.call(this);
}
hedge.display.Sprite.__name__ = ["hedge","display","Sprite"];
hedge.display.Sprite.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Sprite.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Sprite.prototype.buttonMode = null;
hedge.display.Sprite.prototype.dropTarget = null;
hedge.display.Sprite.prototype.graphics = null;
hedge.display.Sprite.prototype.hitArea = null;
hedge.display.Sprite.prototype.useHandCursor = null;
hedge.display.Sprite.prototype.__graphics__ = null;
hedge.display.Sprite.prototype.__generateHedgeDisplayObjectElement__ = function() {
	this.__ele__ = js.Lib.document.createElement("div");
	hedge.Setup.__graphicStorage__.appendChild(this.__ele__);
}
hedge.display.Sprite.prototype.removeChild = function(child) {
	hedge.Setup.__graphicStorage__.appendChild(child.__ele__);
	return child;
}
hedge.display.Sprite.prototype.initializeDisplayObjectContainer = function() {
	this.addEventListener("hedgeResizeDisplay",hedge.events.internal.HedgeResizeDisplayEvent.resizeDisplayObject);
}
hedge.display.Sprite.prototype.initialize = function() {
	hedge.display.DisplayObjectContainer.prototype.initialize.call(this);
	this.initializeSprite();
}
hedge.display.Sprite.prototype.initializeSprite = function() {
	this.__graphics__ = new hedge.display.Graphics(this);
	this.__graphics__.__raphael__.setSize(this.getWidth(),this.getHeight());
}
hedge.display.Sprite.prototype.getButtonMode = function() {
	return this.buttonMode;
}
hedge.display.Sprite.prototype.setButtonMode = function(value) {
	this.buttonMode = value;
	return this.getButtonMode();
}
hedge.display.Sprite.prototype.getDropTarget = function() {
	return this.dropTarget;
}
hedge.display.Sprite.prototype.setDropTarget = function(value) {
	this.dropTarget = value;
	return this.getDropTarget();
}
hedge.display.Sprite.prototype.getGraphics = function() {
	return this.__graphics__;
}
hedge.display.Sprite.prototype.getHitArea = function() {
	return this.hitArea;
}
hedge.display.Sprite.prototype.setHitArea = function(value) {
	this.hitArea = value;
	return this.getHitArea();
}
hedge.display.Sprite.prototype.getHandCursor = function() {
	return this.useHandCursor;
}
hedge.display.Sprite.prototype.setHandCursor = function(value) {
	this.useHandCursor = value;
	return this.getHandCursor();
}
hedge.display.Sprite.prototype.__class__ = hedge.display.Sprite;
if(typeof demo=='undefined') demo = {}
if(!demo.basicTextField) demo.basicTextField = {}
demo.basicTextField.BasicTextField = function(p) {
	if( p === $_ ) return;
	hedge.display.Sprite.call(this);
	var txt = new hedge.text.TextField();
	var input = new hedge.text.TextField();
	txt.setBorder(input.setBorder(true));
	txt.setText("This is a non-editable textfield");
	input.setType("input");
	input.setText("This is a editable textfield - click to edit this textfield");
	txt.setY(input.setY(100));
	input.setX(250);
	this.addChild(txt);
	this.addChild(input);
}
demo.basicTextField.BasicTextField.__name__ = ["demo","basicTextField","BasicTextField"];
demo.basicTextField.BasicTextField.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) demo.basicTextField.BasicTextField.prototype[k] = hedge.display.Sprite.prototype[k];
demo.basicTextField.BasicTextField.main = function() {
	haxe.Firebug.redirectTraces();
	hedge.Setup.init(demo.basicTextField.BasicTextField.run,30);
}
demo.basicTextField.BasicTextField.run = function() {
	hedge.Lib.current.addChild(new demo.basicTextField.BasicTextField());
}
demo.basicTextField.BasicTextField.prototype.__class__ = demo.basicTextField.BasicTextField;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
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
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
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
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
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
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
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
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
if(typeof haxe=='undefined') haxe = {}
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.redirectTraces = function() {
	haxe.Log.trace = haxe.Firebug.trace;
	js.Lib.setErrorHandler(haxe.Firebug.onError);
}
haxe.Firebug.onError = function(err,stack) {
	var buf = err + "\n";
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		buf += "Called from " + s + "\n";
	}
	haxe.Firebug.trace(buf,null);
	return true;
}
haxe.Firebug.trace = function(v,inf) {
	var type = inf != null && inf.customParams != null?inf.customParams[0]:null;
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = inf == null?"error":"log";
	console[type]((inf == null?"":inf.fileName + ":" + inf.lineNumber + " : ") + Std.string(v));
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
hedge.Setup = function() { }
hedge.Setup.__name__ = ["hedge","Setup"];
hedge.Setup.backgroundColor = null;
hedge.Setup.frameRate = null;
hedge.Setup.__version__ = null;
hedge.Setup.__project__ = null;
hedge.Setup.__ele__ = null;
hedge.Setup.__normalStorage__ = null;
hedge.Setup.__graphicStorage__ = null;
hedge.Setup.__stage__ = null;
hedge.Setup.init = function(_callback,fps,stageName) {
	if(stageName == null) stageName = "Stage";
	if(fps == null) fps = 30;
	hedge.Setup.__graphicStorage__ = js.Lib.document.createElement("div");
	hedge.Setup.__graphicStorage__.setAttribute("id","graphicStorage");
	hedge.Setup.__graphicStorage__.style.cssText = "position:absolute; width:100%; height:100%; left:-10000px;";
	hedge.Setup.__normalStorage__ = js.Lib.document.createDocumentFragment();
	hedge.Setup.__ele__ = js.Lib.document.getElementById(stageName);
	hedge.Setup.__ele__.setAttribute("data-version",Std.string(0.1));
	hedge.Setup.__ele__.setAttribute("data-project","hedge");
	hedge.Setup.__ele__.setAttribute("data-haXe","http://www.haxe.org/");
	hedge.Setup.__ele__.style.cssText = "overflow:hidden; visibility:visible; width:100%; height:100%; left:0px; top:0px; position:relative; background-color:" + hedge.Setup.RGB_to_String(16777215) + "; z-index:0;";
	hedge.Setup.__ele__.appendChild(hedge.Setup.__graphicStorage__);
	hedge.Setup.__stage__ = new hedge.display.Stage();
	hedge.Setup.__stage__.setName(stageName);
	hedge.Setup.__stage__.setParent(null);
	hedge.Setup.__stage__.removeEventListener("hedgeResizeDisplay",hedge.events.internal.HedgeResizeDisplayEvent.resizeDisplayObject);
	hedge.Lib.current = hedge.Setup.__stage__;
	hedge.events.internal.HedgeEnterFrame.init();
	_callback();
}
hedge.Setup.getVersion = function() {
	return Std.parseFloat(hedge.Setup.__ele__.getAttribute("data-version"));
}
hedge.Setup.setVersion = function(value) {
	hedge.Setup.__ele__.setAttribute("data-version",Std.string(value));
	return value;
}
hedge.Setup.getProject = function() {
	return hedge.Setup.__ele__.getAttribute("data-project");
}
hedge.Setup.setProject = function(value) {
	hedge.Setup.__ele__.setAttribute("data-project",value);
	return value;
}
hedge.Setup.getBackgroundColor = function() {
	return hedge.Setup.RGB_String_to_HEX(hedge.Setup.__ele__.style.backgroundColor);
}
hedge.Setup.setBackgroundColor = function(value) {
	hedge.Setup.__ele__.style.backgroundColor = hedge.Setup.RGB_to_String(value);
	return value;
}
hedge.Setup.getFrameRate = function() {
	return Std.parseInt(hedge.Setup.__ele__.getAttribute("data-frameRate"));
}
hedge.Setup.setFrameRate = function(value) {
	hedge.Setup.__ele__.setAttribute("data-frameRate",Std.string(value));
	return value;
}
hedge.Setup.generateInstanceName = function() {
	return "instance" + hedge.Setup.__counter__++;
}
hedge.Setup.RGB_to_String = function(color) {
	return "rgb(" + (color >> 16 & 255) + ", " + (color >> 8 & 255) + ", " + (color & 255) + ")";
}
hedge.Setup.RGB_String_to_HEX = function(color) {
	var values = color.substr(color.indexOf("rgb(") + 4,color.lastIndexOf(")") - 4).split(", ");
	return Std.parseInt(values[0]) << 16 | Std.parseInt(values[1]) << 8 | Std.parseInt(values[2]);
}
hedge.Setup.createAncestorPath = function(target) {
	var _temp = target;
	var _array = new Array();
	if(_temp.__originalName__ == "Stage") {
		_array.push(_temp);
		return _array;
	}
	while(true) {
		_temp = _temp.getParent();
		if(_temp.__originalName__ == "Stage") {
			_array.push(_temp);
			break;
		}
	}
	return _array;
}
hedge.Setup.prototype.__class__ = hedge.Setup;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
if(!hedge.text) hedge.text = {}
hedge.text.TextFieldType = function() { }
hedge.text.TextFieldType.__name__ = ["hedge","text","TextFieldType"];
hedge.text.TextFieldType.prototype.__class__ = hedge.text.TextFieldType;
hedge.display.BitmapData = function() { }
hedge.display.BitmapData.__name__ = ["hedge","display","BitmapData"];
hedge.display.BitmapData.prototype.height = null;
hedge.display.BitmapData.prototype.width = null;
hedge.display.BitmapData.prototype.__canvas__ = null;
hedge.display.BitmapData.prototype.getHeight = function() {
	return this.height;
}
hedge.display.BitmapData.prototype.getWidth = function() {
	return this.width;
}
hedge.display.BitmapData.prototype.__class__ = hedge.display.BitmapData;
if(typeof clippings=='undefined') clippings = {}
clippings.Twig = function() { }
clippings.Twig.__name__ = ["clippings","Twig"];
clippings.Twig.data = function(element,key,value) {
	if(!Reflect.hasField(element,"TWIG_ID")) {
		element["TWIG_ID"] = clippings.Twig.CACHE_COUNTER;
		clippings.Twig.CACHE_ID = clippings.Twig.CACHE_COUNTER;
		clippings.Twig.CACHE.insert(clippings.Twig.CACHE_ID,{ });
		++clippings.Twig.CACHE_COUNTER;
	} else clippings.Twig.CACHE_ID = Reflect.field(element,"TWIG_ID");
	if(value == null) return Reflect.field(clippings.Twig.CACHE[clippings.Twig.CACHE_ID],key); else {
		clippings.Twig.CACHE[clippings.Twig.CACHE_ID][key] = value;
		return value;
	}
}
clippings.Twig.removeData = function(element,key) {
	clippings.Twig.CACHE_ID = Reflect.field(element,"TWIG_ID");
	if(key == null) clippings.Twig.CACHE[clippings.Twig.CACHE_ID] = null; else Reflect.deleteField(clippings.Twig.CACHE[clippings.Twig.CACHE_ID],key);
}
clippings.Twig.bind = function(element,event,handler) {
	if(js.Lib.isIE) element.attachEvent("on" + event,handler); else element.addEventListener(event,handler,false);
}
clippings.Twig.camelize = function(value) {
	return value.replace(/-+(.)?/g, function(match, chr) { return chr ? chr.toUpperCase() : ''; });;
}
clippings.Twig.getStyle = function(element,style) {
	var value = "SNAPPED TWIG";
	var search = style;
	var defaultView = element.ownerDocument.defaultView;
	if(defaultView && defaultView.getComputedStyle) {
		search = new EReg("([A-Z])","g").replace(search,"$1").toLowerCase();
		value = defaultView.getComputedStyle(element,null).getPropertyValue(search);
	} else if(element.currentStyle) {
		haxe.Log.trace(clippings.Twig.camelize(search),{ fileName : "Twig.hx", lineNumber : 133, className : "clippings.Twig", methodName : "getStyle"});
		search = clippings.Twig.camelize(search);
		value = element.currentStyle[search];
		if(new EReg("^\\d+(em|pt|%|ex)?$","i").match(value)) {
			var oldLeft = element.style.left;
			var oldRsLeft = element.runtimeStyle.left;
			element.runtimeStyle.left = element.currentStyle.left;
			element.style.left = value || 0;
			value = element.style.pixelLeft + "px";
			element.style.left = oldLeft;
			element.runtimeStyle.left = oldRsLeft;
		}
	}
	if(!value || value == "auto") {
		search = style == "float"?"cssFloat":clippings.Twig.camelize(style);
		value = element.style[search];
	}
	return value == "auto"?null:value;
}
clippings.Twig.prototype.__class__ = clippings.Twig;
hedge.Lib = function() { }
hedge.Lib.__name__ = ["hedge","Lib"];
hedge.Lib.current = null;
hedge.Lib.prototype.__class__ = hedge.Lib;
hedge.display.Stage = function(p) {
	if( p === $_ ) return;
	hedge.display.DisplayObjectContainer.call(this);
}
hedge.display.Stage.__name__ = ["hedge","display","Stage"];
hedge.display.Stage.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Stage.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Stage.prototype.initialize = function() {
	this.initializeStage();
	this.__ancestorPath__ = hedge.Setup.createAncestorPath(this);
	this.initializeInterativeObject();
	this.initializeDisplayObjectContainer();
}
hedge.display.Stage.prototype.initializeStage = function() {
	this.__ele__ = hedge.Setup.__ele__;
	this.__originalName__ = "Stage";
}
hedge.display.Stage.prototype.__class__ = hedge.display.Stage;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.prototype.__class__ = haxe.Log;
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
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
hedge.display.Graphics = function(__holder__) {
	if( __holder__ === $_ ) return;
	this.__holder__ = __holder__;
	hedge.Object.call(this);
}
hedge.display.Graphics.__name__ = ["hedge","display","Graphics"];
hedge.display.Graphics.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.display.Graphics.prototype[k] = hedge.Object.prototype[k];
hedge.display.Graphics.prototype.__raphael__ = null;
hedge.display.Graphics.prototype.__rectangle__ = null;
hedge.display.Graphics.prototype.__set__ = null;
hedge.display.Graphics.prototype.__holder__ = null;
hedge.display.Graphics.prototype.path = null;
hedge.display.Graphics.prototype.initialize = function() {
	hedge.Object.prototype.initialize.call(this);
	this.initializeGraphics();
}
hedge.display.Graphics.prototype.initializeGraphics = function() {
	this.path = "";
	this.__rectangle__ = new hedge.geom.Rectangle(this.__holder__.getX(),this.__holder__.getY(),this.__holder__.getWidth(),this.__holder__.getHeight());
	this.__raphael__ = new Raphael(this.__holder__.__ele__,"100%","100%");
	this.__set__ = this.__raphael__.set();
}
hedge.display.Graphics.prototype.__class__ = hedge.display.Graphics;
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
hedge.text.TextField = function(p) {
	if( p === $_ ) return;
	hedge.display.InteractiveObject.call(this);
	this.setBackground(false);
	this.setBorder(false);
	this.setWordWrap(false);
	this.setType("dynamic");
	this.setWidth(this.setHeight(100));
}
hedge.text.TextField.__name__ = ["hedge","text","TextField"];
hedge.text.TextField.__super__ = hedge.display.InteractiveObject;
for(var k in hedge.display.InteractiveObject.prototype ) hedge.text.TextField.prototype[k] = hedge.display.InteractiveObject.prototype[k];
hedge.text.TextField.prototype.background = null;
hedge.text.TextField.prototype.backgroundColor = null;
hedge.text.TextField.prototype.border = null;
hedge.text.TextField.prototype.borderColor = null;
hedge.text.TextField.prototype.text = null;
hedge.text.TextField.prototype.type = null;
hedge.text.TextField.prototype.wordWrap = null;
hedge.text.TextField.prototype.getBackground = function() {
	return this.__ele__.getAttribute("data-background");
}
hedge.text.TextField.prototype.setBackground = function(value) {
	this.__ele__.setAttribute("data-background",Std.string(value));
	this.__ele__.style.background = value == true?hedge.Setup.RGB_to_String(16777215):"none";
	return value;
}
hedge.text.TextField.prototype.getBackgroundColor = function() {
	return this.getBackground() == true?hedge.Setup.RGB_String_to_HEX(this.__ele__.style.backgroundColor):-1;
}
hedge.text.TextField.prototype.setBackgroundColor = function(value) {
	if(this.getBackground() == true) this.__ele__.style.backgroundColor = hedge.Setup.RGB_to_String(value);
	return this.getBackgroundColor();
}
hedge.text.TextField.prototype.getBorder = function() {
	return this.__ele__.getAttribute("data-border");
}
hedge.text.TextField.prototype.setBorder = function(value) {
	this.__ele__.setAttribute("data-border",Std.string(value));
	this.__ele__.style.border = value == true?"1px solid black":"0 none";
	this.setWidth(this.getWidth());
	this.setHeight(this.getHeight());
	return value;
}
hedge.text.TextField.prototype.getBorderColor = function() {
	return this.getBorder() == true?hedge.Setup.RGB_String_to_HEX(this.__ele__.style.borderColor):-16777216;
}
hedge.text.TextField.prototype.setBorderColor = function(value) {
	if(this.getBorder() == true) this.__ele__.style.borderColor = hedge.Setup.RGB_to_String(value);
	return value;
}
hedge.text.TextField.prototype.getText = function() {
	return this.__ele__.innerHTML;
}
hedge.text.TextField.prototype.setText = function(value) {
	this.__ele__.innerHTML = value;
	return value;
}
hedge.text.TextField.prototype.getType = function() {
	return this.__ele__.getAttribute("data-type");
}
hedge.text.TextField.prototype.setType = function(value) {
	switch(value) {
	case "dynamic":
		break;
	case "input":
		this.__ele__.setAttribute("contentEditable","true");
		break;
	default:
	}
	this.__ele__.setAttribute("data-type",value);
	return value;
}
hedge.text.TextField.prototype.getWordWrap = function() {
	return true;
}
hedge.text.TextField.prototype.setWordWrap = function(value) {
	return true;
}
hedge.text.TextField.prototype.__class__ = hedge.text.TextField;
hedge.display.Bitmap = function() { }
hedge.display.Bitmap.__name__ = ["hedge","display","Bitmap"];
hedge.display.Bitmap.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.Bitmap.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.Bitmap.prototype.bmd = null;
hedge.display.Bitmap.prototype.bitmapData = null;
hedge.display.Bitmap.prototype.initialize = function() {
	hedge.display.DisplayObject.prototype.initialize.call(this);
	this.initializeBitmap();
}
hedge.display.Bitmap.prototype.initializeBitmap = function() {
	this.__ele__.className = "bitmap ";
}
hedge.display.Bitmap.prototype.getBitmapData = function() {
	return this.bmd;
}
hedge.display.Bitmap.prototype.setBitmapData = function(value) {
	this.setWidth(value.getWidth());
	this.setHeight(value.getHeight());
	this.__ele__.appendChild(value.__canvas__);
	this.bmd = value;
	return value;
}
hedge.display.Bitmap.prototype.__class__ = hedge.display.Bitmap;
hedge.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta) {
	if( type === $_ ) return;
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
	hedge.events.Event.call(this,this.type,this.bubbles,this.cancelable);
}
hedge.events.MouseEvent.__name__ = ["hedge","events","MouseEvent"];
hedge.events.MouseEvent.__super__ = hedge.events.Event;
for(var k in hedge.events.Event.prototype ) hedge.events.MouseEvent.prototype[k] = hedge.events.Event.prototype[k];
hedge.events.MouseEvent.prototype.altKey = null;
hedge.events.MouseEvent.prototype.buttonDown = null;
hedge.events.MouseEvent.prototype.ctrlKey = null;
hedge.events.MouseEvent.prototype.delta = null;
hedge.events.MouseEvent.prototype.localX = null;
hedge.events.MouseEvent.prototype.localY = null;
hedge.events.MouseEvent.prototype.relatedObject = null;
hedge.events.MouseEvent.prototype.shiftKey = null;
hedge.events.MouseEvent.prototype.clone = function() {
	return new hedge.events.MouseEvent(this.type,this.bubbles,this.cancelable,this.localX,this.localY,this.relatedObject,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta);
}
hedge.events.MouseEvent.prototype.__class__ = hedge.events.MouseEvent;
hedge.events.internal.HedgeResizeDisplayEvent = function(type,bubbles,cancelable,rectangle) {
	if( type === $_ ) return;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	hedge.events.Event.call(this,this.type,this.bubbles,this.cancelable);
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.rectangle = rectangle;
}
hedge.events.internal.HedgeResizeDisplayEvent.__name__ = ["hedge","events","internal","HedgeResizeDisplayEvent"];
hedge.events.internal.HedgeResizeDisplayEvent.__super__ = hedge.events.Event;
for(var k in hedge.events.Event.prototype ) hedge.events.internal.HedgeResizeDisplayEvent.prototype[k] = hedge.events.Event.prototype[k];
hedge.events.internal.HedgeResizeDisplayEvent.resizeDisplayObject = function(e) {
	var target = (function($this) {
		var $r;
		var $t = e.target;
		if(Std["is"]($t,hedge.display.Sprite)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var rect = e.rectangle;
	var noffsetX = 0;
	var noffsetY = 0;
	var newWidth = 0;
	var newHeight = 0;
	noffsetX = rect.x < 0?-rect.x + 1:0;
	noffsetY = rect.y < 0?-rect.y + 1:0;
	target.set__OffsetX__(noffsetX > target.__offsetX__?noffsetX:target.__offsetX__);
	target.set__OffsetY__(noffsetY > target.__offsetY__?noffsetY:target.__offsetY__);
	if(target.getGraphics() != null) target.getGraphics().__set__.translate(noffsetX,noffsetY);
	newWidth = rect.width + target.__offsetX__ + (rect.x > 0?rect.x:0);
	newHeight = rect.height + target.__offsetY__ + (rect.y > 0?rect.y:0);
	if(target.getWidth() < newWidth) target.setWidth(target.getWidth() + (newWidth - target.getWidth()));
	if(target.getHeight() < newHeight) target.setHeight(target.getHeight() + (newHeight - target.getHeight()));
}
hedge.events.internal.HedgeResizeDisplayEvent.prototype.rectangle = null;
hedge.events.internal.HedgeResizeDisplayEvent.prototype.__class__ = hedge.events.internal.HedgeResizeDisplayEvent;
if(!hedge.geom) hedge.geom = {}
hedge.geom.Rectangle = function(x,y,width,height) {
	if( x === $_ ) return;
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}
hedge.geom.Rectangle.__name__ = ["hedge","geom","Rectangle"];
hedge.geom.Rectangle.prototype.height = null;
hedge.geom.Rectangle.prototype.width = null;
hedge.geom.Rectangle.prototype.y = null;
hedge.geom.Rectangle.prototype.x = null;
hedge.geom.Rectangle.prototype.__class__ = hedge.geom.Rectangle;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
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
hedge.events.EventPhase.AT_TARGET = 2;
hedge.events.EventPhase.BUBBLING_PHASE = 3;
hedge.events.Event.ENTER_FRAME = "enterFrame";
hedge.events.KeyboardEvent.KEY_DOWN = "keyDown";
hedge.events.KeyboardEvent.KEY_UP = "keyUp";
hedge.events.internal.HedgeEnterFrame.array = new Array();
hedge.events.internal.HedgeEnterFrame.length = 0;
hedge.events.internal.HedgeEnterFrame.event = new hedge.events.Event("enterFrame",false,false);
hedge.events.FocusEvent.FOCUS_IN = "focusIn";
hedge.events.FocusEvent.FOCUS_OUT = "focusOut";
hedge.Setup.__counter__ = 0;
hedge.text.TextFieldType.DYNAMIC = "dynamic";
hedge.text.TextFieldType.INPUT = "input";
clippings.Twig.CACHE = new Array();
clippings.Twig.CACHE_COUNTER = 0;
clippings.Twig.CACHE_ID = 0;
clippings.Twig.TWIG_ID = "TWIG_ID";
hedge.events.MouseEvent.CLICK = "click";
hedge.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
hedge.events.MouseEvent.MOUSE_DOWN = "mouseDown";
hedge.events.MouseEvent.MOUSE_MOVE = "mouseMove";
hedge.events.MouseEvent.MOUSE_OUT = "mouseOut";
hedge.events.MouseEvent.MOUSE_OVER = "mouseOver";
hedge.events.MouseEvent.MOUSE_UP = "mouseUp";
hedge.events.internal.HedgeResizeDisplayEvent.RESIZE_ELEMENT = "hedgeResizeDisplay";
js.Lib.onerror = null;
demo.basicTextField.BasicTextField.main()