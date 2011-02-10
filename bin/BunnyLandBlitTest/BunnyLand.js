$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof demo=='undefined') demo = {}
if(!demo.cheezeworld) demo.cheezeworld = {}
if(!demo.cheezeworld.utils) demo.cheezeworld.utils = {}
demo.cheezeworld.utils.KeyCode = function() { }
demo.cheezeworld.utils.KeyCode.__name__ = ["demo","cheezeworld","utils","KeyCode"];
demo.cheezeworld.utils.KeyCode.prototype.__class__ = demo.cheezeworld.utils.KeyCode;
if(typeof hedge=='undefined') hedge = {}
if(!hedge.display) hedge.display = {}
hedge.display.JointStyle = function() { }
hedge.display.JointStyle.__name__ = ["hedge","display","JointStyle"];
hedge.display.JointStyle.prototype.__class__ = hedge.display.JointStyle;
hedge.Object = function(p) { if( p === $_ ) return; {
	null;
}}
hedge.Object.__name__ = ["hedge","Object"];
hedge.Object.prototype.__jq__ = null;
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
	hedge.Object.call(this);
}}
hedge.events.EventDispatcher.__name__ = ["hedge","events","EventDispatcher"];
hedge.events.EventDispatcher.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.EventDispatcher.prototype[k] = hedge.Object.prototype[k];
hedge.events.EventDispatcher.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	if(type != "enterFrame") {
		this.__jq__.bind(type,{ },listener);
	}
	else {
		hedge.jquery.events.EnterFrame.addListener(this.__originalName__,listener);
	}
}
hedge.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	event.target = event.target == null?this:event.target;
	return true;
}
hedge.events.EventDispatcher.prototype.hasEventListener = function(type) {
	var events = this.__jq__.data("events");
	return Reflect.hasField(events,type);
}
hedge.events.EventDispatcher.prototype.removeEventListener = function(type,listener,useCapture) {
	if(useCapture == null) useCapture = false;
	if(type != "enterFrame") {
		this.__jq__.unbind(type,listener);
	}
	else {
		hedge.jquery.events.EnterFrame.removeListener(this.__originalName__,listener);
	}
}
hedge.events.EventDispatcher.prototype.willTrigger = function(type) {
	return true;
}
hedge.events.EventDispatcher.prototype.__class__ = hedge.events.EventDispatcher;
hedge.events.EventDispatcher.__interfaces__ = [hedge.events.IEventDispatcher];
hedge.display.DisplayObject = function(p) { if( p === $_ ) return; {
	hedge.events.EventDispatcher.call(this);
	this.initialize();
}}
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
hedge.display.DisplayObject.prototype.initialize = function() {
	this.generateJQuery();
	this.__originalName__ = this.setName(hedge.Setup.generateInstanceName());
	this.__jq__.attr("id",this.getName()).css(hedge.Setup.__attr__({ width : "0px", height : "0px", left : "0px", top : "0px"})).attr("data-originalName",this.__originalName__);
	this.setParent(hedge.Setup.__default__);
}
hedge.display.DisplayObject.prototype.generateJQuery = function() {
	hedge.Setup.__storage__.append(this.__jq__ = new $("<div>"));
}
hedge.display.DisplayObject.prototype.getMouseX = function() {
	return this.mouseX;
}
hedge.display.DisplayObject.prototype.getMouseY = function() {
	return this.mouseY;
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
	return this.__jq__.css("opacity");
}
hedge.display.DisplayObject.prototype.setAlpha = function(value) {
	this.__jq__.css("opacity",value);
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
	return this.__jq__.attr("id");
}
hedge.display.DisplayObject.prototype.setName = function(value) {
	this.__jq__.attr("id",value);
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
	return this.__jq__.data("visible") == null?true:this.__jq__.data("visible");
}
hedge.display.DisplayObject.prototype.setVisible = function(value) {
	this.__jq__.css("display",value == false?"none":"block").css("visibility",value == false?"hidden":"visible").data("visible",value);
	return this.__jq__.data("visible");
}
hedge.display.DisplayObject.prototype.getHeight = function() {
	return this.__jq__.data("height") == null?this.__jq__.height():this.__jq__.data("height");
}
hedge.display.DisplayObject.prototype.setHeight = function(value) {
	this.__jq__.height(value);
	return value;
}
hedge.display.DisplayObject.prototype.getWidth = function() {
	return this.__jq__.width();
}
hedge.display.DisplayObject.prototype.setWidth = function(value) {
	this.__jq__.width(value);
	return value;
}
hedge.display.DisplayObject.prototype.getX = function() {
	return this.__jq__.position().left;
}
hedge.display.DisplayObject.prototype.setX = function(value) {
	this.__jq__.css("left","" + value + "px");
	return value;
}
hedge.display.DisplayObject.prototype.getY = function() {
	return this.__jq__.position().top;
}
hedge.display.DisplayObject.prototype.setY = function(value) {
	this.__jq__.css("top","" + value + "px");
	return value;
}
hedge.display.DisplayObject.prototype.__class__ = hedge.display.DisplayObject;
hedge.display.InteractiveObject = function(p) { if( p === $_ ) return; {
	hedge.display.DisplayObject.call(this);
	this.addEventListener("keydown",$closure(this,"onKeyDown"));
	this.addEventListener("keyup",$closure(this,"onKeyUp"));
}}
hedge.display.InteractiveObject.__name__ = ["hedge","display","InteractiveObject"];
hedge.display.InteractiveObject.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.InteractiveObject.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.InteractiveObject.prototype.onKeyDown = function(e) {
	null;
}
hedge.display.InteractiveObject.prototype.onKeyUp = function(e) {
	null;
}
hedge.display.InteractiveObject.prototype.__class__ = hedge.display.InteractiveObject;
hedge.display.DisplayObjectContainer = function(p) { if( p === $_ ) return; {
	hedge.display.InteractiveObject.call(this);
	this.__jq__.bind(hedge.Setup.RESIZE_ELEMENT,{ },{ });
}}
hedge.display.DisplayObjectContainer.__name__ = ["hedge","display","DisplayObjectContainer"];
hedge.display.DisplayObjectContainer.__super__ = hedge.display.InteractiveObject;
for(var k in hedge.display.InteractiveObject.prototype ) hedge.display.DisplayObjectContainer.prototype[k] = hedge.display.InteractiveObject.prototype[k];
hedge.display.DisplayObjectContainer.prototype.mouseChildren = null;
hedge.display.DisplayObjectContainer.prototype.numChildren = null;
hedge.display.DisplayObjectContainer.prototype.tabChildren = null;
hedge.display.DisplayObjectContainer.prototype.textSnapshot = null;
hedge.display.DisplayObjectContainer.prototype.addChild = function(child) {
	child.__jq__.appendTo(this.__jq__);
	child.setParent(this);
	this.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : child.getX(), y : child.getY(), w : child.getWidth(), h : child.getHeight(), p : this}]);
	return child;
}
hedge.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	return new hedge.display.DisplayObject();
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
hedge.display.DisplayObjectContainer.prototype.__class__ = hedge.display.DisplayObjectContainer;
hedge.display.Sprite = function(p) { if( p === $_ ) return; {
	hedge.display.DisplayObjectContainer.call(this);
}}
hedge.display.Sprite.__name__ = ["hedge","display","Sprite"];
hedge.display.Sprite.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Sprite.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Sprite.prototype.buttonMode = null;
hedge.display.Sprite.prototype.dropTarget = null;
hedge.display.Sprite.prototype.graphics = null;
hedge.display.Sprite.prototype.hitArea = null;
hedge.display.Sprite.prototype.useHandCursor = null;
hedge.display.Sprite.prototype._g = null;
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
	return this._g == null?this._g = new hedge.display.Graphics(this):this._g;
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
if(!demo.wizardry) demo.wizardry = {}
demo.wizardry.Gamepad = function() { }
demo.wizardry.Gamepad.__name__ = ["demo","wizardry","Gamepad"];
demo.wizardry.Gamepad.__super__ = hedge.events.EventDispatcher;
for(var k in hedge.events.EventDispatcher.prototype ) demo.wizardry.Gamepad.prototype[k] = hedge.events.EventDispatcher.prototype[k];
demo.wizardry.Gamepad.prototype.any = null;
demo.wizardry.Gamepad.prototype.angle = null;
demo.wizardry.Gamepad.prototype.__class__ = demo.wizardry.Gamepad;
hedge.display.MovieClip = function(p) { if( p === $_ ) return; {
	hedge.display.Sprite.call(this);
	{
		var _g = 0, _g1 = hedge.Setup.__movieclips__;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.movieclipLink == Type.getClassName(Type.getClass(this))) {
				this.__movieclip__ = { movieclipLink : null, movieclipLayers : new Array()};
				this.__movieclip__ = i;
				this.__layers__ = this.__movieclip__.movieclipLayers;
				this.__frames__ = this.__movieclip__.movieclipLayers[0].labelFrames;
				break;
			}
		}
	}
	if(this.__movieclip__ != null) {
		this.__timers__ = new Array();
		{
			var _g = 0, _g1 = this.__layers__;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				var __self__ = [this];
				var mclb = [{ labelName : i.labelName, labelFrames : i.labelFrames, labelBitmap : new hedge.display.Bitmap(new hedge.display.BitmapData(new $(i.labelFrames[0].frameData).width(),new $(i.labelFrames[0].frameData).height(),true,-16777216)), labelTimerPosition : null}];
				this.addChild(mclb[0].labelBitmap);
				mclb[0].labelTimerPosition = this.__timers__.push(setTimeout(function(mclb,__self__) {
					return function() {
						__self__[0].__updateRender__(mclb[0]);
					}
				}(mclb,__self__),i.labelFrames[0].framePause)) - 1;
			}
		}
	}
	this.__running__ = false;
	this.__counter__ = 0;
}}
hedge.display.MovieClip.__name__ = ["hedge","display","MovieClip"];
hedge.display.MovieClip.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) hedge.display.MovieClip.prototype[k] = hedge.display.Sprite.prototype[k];
hedge.display.MovieClip.prototype.currentFrame = null;
hedge.display.MovieClip.prototype.__running__ = null;
hedge.display.MovieClip.prototype.__timers__ = null;
hedge.display.MovieClip.prototype.__counter__ = null;
hedge.display.MovieClip.prototype.__movieclip__ = null;
hedge.display.MovieClip.prototype.__frames__ = null;
hedge.display.MovieClip.prototype.__layers__ = null;
hedge.display.MovieClip.prototype.gotoAndStop = function(frame,scene) {
	null;
}
hedge.display.MovieClip.prototype.play = function() {
	null;
}
hedge.display.MovieClip.prototype.stop = function() {
	null;
}
hedge.display.MovieClip.prototype.__updateRender__ = function(layer) {
	haxe.Log.trace(layer.labelName,{ fileName : "MovieClip.hx", lineNumber : 133, className : "hedge.display.MovieClip", methodName : "__updateRender__"});
	haxe.Log.trace(layer.labelTimerPosition,{ fileName : "MovieClip.hx", lineNumber : 134, className : "hedge.display.MovieClip", methodName : "__updateRender__"});
}
hedge.display.MovieClip.prototype.__class__ = hedge.display.MovieClip;
demo.wizardry.Entity = function(p) { if( p === $_ ) return; {
	hedge.display.MovieClip.call(this);
	this.radius = 16;
}}
demo.wizardry.Entity.__name__ = ["demo","wizardry","Entity"];
demo.wizardry.Entity.__super__ = hedge.display.MovieClip;
for(var k in hedge.display.MovieClip.prototype ) demo.wizardry.Entity.prototype[k] = hedge.display.MovieClip.prototype[k];
demo.wizardry.Entity.prototype.radius = null;
demo.wizardry.Entity.prototype.kinGroup = null;
demo.wizardry.Entity.prototype.isDestroyed = null;
demo.wizardry.Entity.prototype.setPosition = function(x,y) {
	this.setX(x);
	this.setY(y);
}
demo.wizardry.Entity.prototype.destroy = function() {
	this.isDestroyed = true;
	demo.wizardry.Game.instance.removeEntity(this);
}
demo.wizardry.Entity.prototype.update = function() {
	this.render();
}
demo.wizardry.Entity.prototype.render = function() {
	null;
}
demo.wizardry.Entity.prototype.__class__ = demo.wizardry.Entity;
demo.wizardry.Person = function() { }
demo.wizardry.Person.__name__ = ["demo","wizardry","Person"];
demo.wizardry.Person.__super__ = demo.wizardry.Entity;
for(var k in demo.wizardry.Entity.prototype ) demo.wizardry.Person.prototype[k] = demo.wizardry.Entity.prototype[k];
demo.wizardry.Person.prototype.speed = null;
demo.wizardry.Person.prototype.angle = null;
demo.wizardry.Person.prototype.speedX = null;
demo.wizardry.Person.prototype.speedY = null;
demo.wizardry.Person.prototype.north = null;
demo.wizardry.Person.prototype.south = null;
demo.wizardry.Person.prototype.east = null;
demo.wizardry.Person.prototype.west = null;
demo.wizardry.Person.prototype.currentAnimation = null;
demo.wizardry.Person.prototype.destroy = function() {
	demo.wizardry.Game.instance.createExplosion(this.getX(),this.getY());
	demo.wizardry.Entity.prototype.destroy.call(this);
}
demo.wizardry.Person.prototype.showAnimation = function(animation) {
	if(this.currentAnimation != null) {
		this.removeChild(this.currentAnimation);
		this.currentAnimation.stop();
	}
	this.addChild(animation);
	animation.play();
	this.currentAnimation = animation;
}
demo.wizardry.Person.prototype.showStill = function(animation,frameNum) {
	if(frameNum == null) frameNum = 1;
	if(this.currentAnimation != null) {
		this.removeChild(this.currentAnimation);
		this.currentAnimation.stop();
	}
	this.addChild(animation);
	animation.gotoAndStop(frameNum);
	this.currentAnimation = animation;
}
demo.wizardry.Person.prototype.showWalk = function() {
	this.angle = demo.wizardry.MathHelper.limitRadians(this.angle);
	if(this.angle >= demo.wizardry.MathHelper.EIGHTH_CIRCLE - 0.01 && this.angle <= demo.wizardry.MathHelper.EIGHTH_CIRCLE * 3) {
		this.showAnimation(this.east);
	}
	else if(this.angle <= -demo.wizardry.MathHelper.EIGHTH_CIRCLE + 0.02 && this.angle >= -demo.wizardry.MathHelper.EIGHTH_CIRCLE * 3 - 0.02) {
		this.showAnimation(this.west);
	}
	else if(this.angle > -demo.wizardry.MathHelper.EIGHTH_CIRCLE && this.angle < demo.wizardry.MathHelper.EIGHTH_CIRCLE) {
		this.showAnimation(this.south);
	}
	else {
		this.showAnimation(this.north);
	}
}
demo.wizardry.Person.prototype.showIdle = function() {
	this.showStill(this.currentAnimation,this.currentAnimation.currentFrame);
}
demo.wizardry.Person.prototype.render = function() {
	var totalSpeed = demo.wizardry.MathHelper.magnitude(this.speedX,this.speedY);
	if(totalSpeed < 1) {
		this.showIdle();
	}
	else {
		this.showWalk();
	}
	demo.wizardry.Entity.prototype.render.call(this);
}
demo.wizardry.Person.prototype.__class__ = demo.wizardry.Person;
List = function() { }
List.__name__ = ["List"];
List.prototype.length = null;
List.prototype.__class__ = List;
hedge.display.CapsStyle = function() { }
hedge.display.CapsStyle.__name__ = ["hedge","display","CapsStyle"];
hedge.display.CapsStyle.prototype.__class__ = hedge.display.CapsStyle;
hedge.events.Event = function(type,bubbles,cancelable) { if( type === $_ ) return; {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	hedge.Object.call(this);
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
}}
hedge.events.Event.__name__ = ["hedge","events","Event"];
hedge.events.Event.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.events.Event.prototype[k] = hedge.Object.prototype[k];
hedge.events.Event.prototype.bubbles = null;
hedge.events.Event.prototype.cancelable = null;
hedge.events.Event.prototype.target = null;
hedge.events.Event.prototype.type = null;
hedge.events.Event.prototype.clone = function() {
	return new hedge.events.Event(this.type,this.bubbles,this.cancelable);
}
hedge.events.Event.prototype.__class__ = hedge.events.Event;
hedge.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) { if( type === $_ ) return; {
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
}}
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
demo.wizardry.Game = function() { }
demo.wizardry.Game.__name__ = ["demo","wizardry","Game"];
demo.wizardry.Game.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) demo.wizardry.Game.prototype[k] = hedge.display.Sprite.prototype[k];
demo.wizardry.Game.instance = null;
demo.wizardry.Game.prototype.entities = null;
demo.wizardry.Game.prototype.scene = null;
demo.wizardry.Game.prototype.createExplosion = function(x,y) {
	var explosion = new demo.wizardry.Explosion();
	explosion.setX(x);
	explosion.setY(y);
	this.addEntity(explosion);
}
demo.wizardry.Game.prototype.addEntity = function(entity) {
	this.entities.push(entity);
	this.scene.addChild(entity);
}
demo.wizardry.Game.prototype.removeEntity = function(entity) {
	demo.wizardry.ArrayHelper.removeFromArray(entity,this.entities);
	if(entity.kinGroup != null) demo.wizardry.ArrayHelper.removeFromArray(entity,entity.kinGroup);
	this.scene.removeChild(entity);
}
demo.wizardry.Game.prototype.__class__ = demo.wizardry.Game;
if(!hedge.geom) hedge.geom = {}
hedge.geom.Point = function(x,y) { if( x === $_ ) return; {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
}}
hedge.geom.Point.__name__ = ["hedge","geom","Point"];
hedge.geom.Point.prototype.x = null;
hedge.geom.Point.prototype.y = null;
hedge.geom.Point.prototype.__class__ = hedge.geom.Point;
if(!demo.bunnyLandBlitTest) demo.bunnyLandBlitTest = {}
demo.bunnyLandBlitTest.BlitBunny = function(p) { if( p === $_ ) return; {
	null;
}}
demo.bunnyLandBlitTest.BlitBunny.__name__ = ["demo","bunnyLandBlitTest","BlitBunny"];
demo.bunnyLandBlitTest.BlitBunny.prototype.speedX = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.speedY = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.speedZ = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.bitmapData = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.x = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.y = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.z = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.angle = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.speed = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.drawPosition = null;
demo.bunnyLandBlitTest.BlitBunny.prototype.__class__ = demo.bunnyLandBlitTest.BlitBunny;
demo.bunnyLandBlitTest.BunnyLandBlitTest = function(p) { if( p === $_ ) return; {
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
			bunny.speed = Math.random() * 5 + 0.5;
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
	this.ground.__canvas__.attr({ id : "bitmapdataGround"});
	this.grassAsset.__canvas__.attr({ id : "bitmapdataGrassAsset"});
	this.bunnyAsset.__canvas__.attr({ id : "bitmapdataBunnyAsset"});
}}
demo.bunnyLandBlitTest.BunnyLandBlitTest.__name__ = ["demo","bunnyLandBlitTest","BunnyLandBlitTest"];
demo.bunnyLandBlitTest.BunnyLandBlitTest.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype[k] = hedge.display.Sprite.prototype[k];
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.bunnies = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.maxX = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.minX = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.maxY = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.minY = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.bitmap = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.cameraRect = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.ground = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.gamepad = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.bunnyAsset = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.grassAsset = null;
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.onEnterFrame = function(e) {
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
	var i = demo.bunnyLandBlitTest.BunnyLandBlitTest.numBunnies - 1;
	while(i > 0) {
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
		drawPosition.y = bunny.y + bunny.z - this.cameraRect.y;
		if(drawPosition.x <= demo.bunnyLandBlitTest.BunnyLandBlitTest.screenWidth && drawPosition.x > -sourceRect.width) {
			if(drawPosition.y <= demo.bunnyLandBlitTest.BunnyLandBlitTest.screenHeight && drawPosition.y > -sourceRect.height) {
				drawableBunnies.push(bunny);
			}
		}
		i--;
	}
	var numDrawableBunnies = drawableBunnies.length;
	i = numDrawableBunnies - 1;
	while(i > 0) {
		bunny = drawableBunnies[i];
		this.bitmap.getBitmapData().copyPixels(bunny.bitmapData,sourceRect,bunny.drawPosition,null,null,true);
		i--;
	}
}
demo.bunnyLandBlitTest.BunnyLandBlitTest.prototype.__class__ = demo.bunnyLandBlitTest.BunnyLandBlitTest;
if(!demo.gamepad) demo.gamepad = {}
demo.gamepad.GamepadInput = function(keyCode) { if( keyCode === $_ ) return; {
	if(keyCode == null) keyCode = -1;
	this._downTicks = this._upTicks = -1;
	this.mappedKeys = keyCode > -1 == true?[keyCode]:[];
}}
demo.gamepad.GamepadInput.__name__ = ["demo","gamepad","GamepadInput"];
demo.gamepad.GamepadInput.prototype._isDown = null;
demo.gamepad.GamepadInput.prototype._isPressed = null;
demo.gamepad.GamepadInput.prototype._isReleased = null;
demo.gamepad.GamepadInput.prototype._downTicks = null;
demo.gamepad.GamepadInput.prototype._upTicks = null;
demo.gamepad.GamepadInput.prototype.mappedKeys = null;
demo.gamepad.GamepadInput.prototype.mapKey = function(keyCode,replaceExisting) {
	if(replaceExisting == null) replaceExisting = false;
	if(replaceExisting) {
		this.mappedKeys = [keyCode];
	}
	else if(Lambda.has(this.mappedKeys,keyCode) == false) {
		this.mappedKeys.push(keyCode);
	}
}
demo.gamepad.GamepadInput.prototype.update = function() {
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
}
demo.gamepad.GamepadInput.prototype.keyDown = function(keyCode) {
	if(Lambda.has(this.mappedKeys,keyCode) != false) this._isDown = true;
}
demo.gamepad.GamepadInput.prototype.keyUp = function(keyCode) {
	if(Lambda.has(this.mappedKeys,keyCode) != false) this._isDown = false;
}
demo.gamepad.GamepadInput.prototype.getIsDown = function() {
	return this._isDown;
}
demo.gamepad.GamepadInput.prototype.getIsPressed = function() {
	return this._isPressed;
}
demo.gamepad.GamepadInput.prototype.getIsReleased = function() {
	return this._isReleased;
}
demo.gamepad.GamepadInput.prototype.getDownTicks = function() {
	return this._downTicks;
}
demo.gamepad.GamepadInput.prototype.getUpTicks = function() {
	return this._upTicks;
}
demo.gamepad.GamepadInput.prototype.__class__ = demo.gamepad.GamepadInput;
demo.gamepad.GamepadMultiInput = function(inputs,isOr) { if( inputs === $_ ) return; {
	this._downTicks = this._upTicks = -1;
	this.inputs = inputs;
	this.isOr = isOr;
}}
demo.gamepad.GamepadMultiInput.__name__ = ["demo","gamepad","GamepadMultiInput"];
demo.gamepad.GamepadMultiInput.prototype._isDown = null;
demo.gamepad.GamepadMultiInput.prototype._isPressed = null;
demo.gamepad.GamepadMultiInput.prototype._isReleased = null;
demo.gamepad.GamepadMultiInput.prototype._downTicks = null;
demo.gamepad.GamepadMultiInput.prototype._upTicks = null;
demo.gamepad.GamepadMultiInput.prototype.isOr = null;
demo.gamepad.GamepadMultiInput.prototype.inputs = null;
demo.gamepad.GamepadMultiInput.prototype.update = function() {
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
}
demo.gamepad.GamepadMultiInput.prototype.getIsDown = function() {
	return this._isDown;
}
demo.gamepad.GamepadMultiInput.prototype.getIsPressed = function() {
	return this._isPressed;
}
demo.gamepad.GamepadMultiInput.prototype.getIsReleased = function() {
	return this._isReleased;
}
demo.gamepad.GamepadMultiInput.prototype.getDownTicks = function() {
	return this._downTicks;
}
demo.gamepad.GamepadMultiInput.prototype.getUpTicks = function() {
	return this._upTicks;
}
demo.gamepad.GamepadMultiInput.prototype.__class__ = demo.gamepad.GamepadMultiInput;
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
demo.wizardry.Explosion = function(p) { if( p === $_ ) return; {
	demo.wizardry.Entity.call(this);
}}
demo.wizardry.Explosion.__name__ = ["demo","wizardry","Explosion"];
demo.wizardry.Explosion.__super__ = demo.wizardry.Entity;
for(var k in demo.wizardry.Entity.prototype ) demo.wizardry.Explosion.prototype[k] = demo.wizardry.Entity.prototype[k];
demo.wizardry.Explosion.prototype.update = function() {
	if(this.currentFrame == this.totalFrames) this.destroy();
	demo.wizardry.Entity.prototype.update.call(this);
}
demo.wizardry.Explosion.prototype.__class__ = demo.wizardry.Explosion;
hedge.display.PixelSnapping = function() { }
hedge.display.PixelSnapping.__name__ = ["hedge","display","PixelSnapping"];
hedge.display.PixelSnapping.prototype.__class__ = hedge.display.PixelSnapping;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
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
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
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
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
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
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
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
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
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
			if(cl == Array) return o.__enum__ == null;
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
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
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
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
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
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
if(typeof haxe=='undefined') haxe = {}
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
			buf += "Called from " + s + "\n";
		}
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
demo.wizardry.Wizard = function() { }
demo.wizardry.Wizard.__name__ = ["demo","wizardry","Wizard"];
demo.wizardry.Wizard.__super__ = demo.wizardry.Person;
for(var k in demo.wizardry.Person.prototype ) demo.wizardry.Wizard.prototype[k] = demo.wizardry.Person.prototype[k];
demo.wizardry.Wizard.prototype.spellCharge = null;
demo.wizardry.Wizard.prototype.chargeToFire = null;
demo.wizardry.Wizard.prototype.targets = null;
demo.wizardry.Wizard.prototype.addFireball = function() {
	var fireBall = new demo.wizardry.FireBall();
	fireBall.setPosition(this.getX(),this.getY());
	fireBall.angle = this.angle;
	fireBall.targets = this.targets;
	demo.wizardry.Game.instance.addEntity(fireBall);
}
demo.wizardry.Wizard.prototype.attemptFire = function() {
	if(this.spellCharge < this.chargeToFire == false) {
		this.addFireball();
		this.spellCharge = 0;
	}
}
demo.wizardry.Wizard.prototype.update = function() {
	this.spellCharge++;
	demo.wizardry.Person.prototype.update.call(this);
}
demo.wizardry.Wizard.prototype.__class__ = demo.wizardry.Wizard;
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
	if(stageName == null) stageName = "Stage";
	if(fps == null) fps = 30;
	hedge.Setup.__storage__ = new $("<div>").attr("id","storage").css({ display : "block", width : "100%", height : "100%"});
	hedge.Setup.__jq__ = new $("div#" + stageName);
	hedge.Setup.__jq__.css(hedge.Setup.__attr__({ width : "100%", height : "100%", left : "0px", top : "0px", position : "relative"})).css("background-color",hedge.Setup.RGB_to_String(16777215)).css("z-index",0).attr(hedge.Setup.__data__({ version : 0.1, project : "hedge", haXe : "http://www.haxe.org"})).append(hedge.Setup.__storage__);
	hedge.Setup.setFrameRate(fps);
	hedge.Setup.__stage__ = new hedge.display.Stage();
	hedge.Setup.__stage__.setName(stageName);
	hedge.Setup.__stage__.__jq__ = hedge.Setup.__jq__;
	hedge.Setup.__default__ = new hedge.display.DisplayObjectContainer();
	hedge.Setup.__default__.setName("default_parent_object");
	hedge.Setup.getAllMovieClips();
	hedge.Setup.createJqueryEvents();
	_callback();
}
hedge.Setup.getAllMovieClips = function() {
	var movieclips = new $("div.movieclip_timeline");
	var tmp;
	var movieclip;
	var layers;
	var frames;
	{
		var _g1 = 0, _g = movieclips.length;
		while(_g1 < _g) {
			var i = _g1++;
			var mcs = { movieclipLink : null, movieclipLayers : new Array()};
			movieclip = new $(movieclips[i]);
			layers = movieclip.children("div");
			mcs.movieclipLink = movieclip.attr("data-link");
			{
				var _g3 = 0, _g2 = layers.length;
				while(_g3 < _g2) {
					var j = _g3++;
					var mcl = { labelName : null, labelFrames : new Array()};
					tmp = new $(layers[j]);
					mcl.labelName = tmp.attr("class");
					frames = tmp.children("img");
					{
						var _g5 = 0, _g4 = frames.length;
						while(_g5 < _g4) {
							var k = _g5++;
							var mcf = { frameName : null, frameData : null, framePause : null};
							tmp = new $(frames[k]);
							mcf.frameName = tmp.attr("class");
							mcf.framePause = tmp.attr("data-pause");
							mcf.frameData = tmp[0];
							mcl.labelFrames.push(mcf);
						}
					}
					mcs.movieclipLayers.push(mcl);
				}
			}
			hedge.Setup.__movieclips__.push(mcs);
		}
	}
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
			_event = $.event.special[_name[_name.length - 1]] = { };
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
	var _v_ = { };
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
	var _r_ = { overflow : "hidden", position : "absolute", visibility : "visible"};
	var _t_ = { };
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
hedge.Setup.generateInstanceName = function() {
	return "instance" + (hedge.Setup.__counter__++ - 1);
}
hedge.Setup.RGB_to_String = function(color) {
	return "rgb(" + (color >> 16 & 255) + ", " + (color >> 8 & 255) + ", " + (color & 255) + ")";
}
hedge.Setup.canvas_RGBA_to_String = function(color) {
	return "rgba(" + (color >> 16 & 255) + ", " + (color >> 8 & 255) + ", " + (color & 255) + ", " + (color < 0?-(color >> 24) / 255:1) + ")";
}
hedge.Setup.RGB_String_to_HEX = function(color) {
	var values = color.substr(color.indexOf("rgb(") + 4,color.lastIndexOf(")") - 4).split(", ");
	return Std.parseInt(values[0]) << 16 | Std.parseInt(values[1]) << 8 | Std.parseInt(values[2]);
}
hedge.Setup.prototype.__class__ = hedge.Setup;
demo.wizardry.FireBall = function(p) { if( p === $_ ) return; {
	demo.wizardry.Entity.call(this);
	this.strength = 10;
	this.speed = 6;
	this.radius = 5;
}}
demo.wizardry.FireBall.__name__ = ["demo","wizardry","FireBall"];
demo.wizardry.FireBall.__super__ = demo.wizardry.Entity;
for(var k in demo.wizardry.Entity.prototype ) demo.wizardry.FireBall.prototype[k] = demo.wizardry.Entity.prototype[k];
demo.wizardry.FireBall.prototype.speed = null;
demo.wizardry.FireBall.prototype.angle = null;
demo.wizardry.FireBall.prototype.speedX = null;
demo.wizardry.FireBall.prototype.speedY = null;
demo.wizardry.FireBall.prototype.strength = null;
demo.wizardry.FireBall.prototype.ball = null;
demo.wizardry.FireBall.prototype.targets = null;
demo.wizardry.FireBall.prototype.update = function() {
	this.move();
	if(this.checkForCollisions() == false) {
		this.checkOutOfBounds();
		demo.wizardry.Entity.prototype.update.call(this);
	}
}
demo.wizardry.FireBall.prototype.checkForCollisions = function() {
	{
		var _g = 0, _g1 = this.targets;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(this.checkCollision(i)) {
				i.hit(this.strength);
				this.destroy();
				return true;
			}
		}
	}
	return false;
}
demo.wizardry.FireBall.prototype.move = function() {
	this.speedX = Math.sin(this.angle) * this.speed;
	this.speedY = Math.cos(this.angle) * this.speed;
	{
		var _g = this;
		_g.setX(_g.getX() + this.speedX);
	}
	{
		var _g = this;
		_g.setY(_g.getY() + this.speedY);
	}
	this.ball.setRotation(-this.angle * demo.wizardry.MathHelper.RADIANS_TO_DEGREES);
}
demo.wizardry.FireBall.prototype.checkOutOfBounds = function() {
	if(this.getX() < demo.wizardry.Config.leftBound || this.getX() > demo.wizardry.Config.rightBound || this.getY() < demo.wizardry.Config.topBound || this.getY() > demo.wizardry.Config.bottomBound) {
		this.destroy();
	}
}
demo.wizardry.FireBall.prototype.__class__ = demo.wizardry.FireBall;
demo.wizardry.PlayerWizard = function() { }
demo.wizardry.PlayerWizard.__name__ = ["demo","wizardry","PlayerWizard"];
demo.wizardry.PlayerWizard.__super__ = demo.wizardry.Wizard;
for(var k in demo.wizardry.Wizard.prototype ) demo.wizardry.PlayerWizard.prototype[k] = demo.wizardry.Wizard.prototype[k];
demo.wizardry.PlayerWizard.prototype.gamepad = null;
demo.wizardry.PlayerWizard.prototype.moveTargetX = null;
demo.wizardry.PlayerWizard.prototype.moveTargetY = null;
demo.wizardry.PlayerWizard.prototype.setPosition = function(x,y) {
	this.setX(this.moveTargetX = x);
	this.setY(this.moveTargetY = y);
}
demo.wizardry.PlayerWizard.prototype.update = function() {
	if(this.gamepad != null) {
		if(this.gamepad.any) {
			this.moveTargetX += Math.sin(this.gamepad.angle) * this.speed;
			this.moveTargetY += Math.cos(this.gamepad.angle) * this.speed;
			this.moveTargetX = demo.wizardry.MathHelper.constrain(this.moveTargetX,demo.wizardry.Config.leftBound,demo.wizardry.Config.rightBound);
			this.moveTargetY = demo.wizardry.MathHelper.constrain(this.moveTargetY,demo.wizardry.Config.topBound,demo.wizardry.Config.bottomBound);
		}
		if(this.gamepad._fire1) {
			this.attemptFire();
		}
	}
	this.speedX = (this.moveTargetX - this.getX()) * 0.2;
	this.speedY = (this.moveTargetY - this.getY()) * 0.2;
	{
		var _g = this;
		_g.setX(_g.getX() + this.speedX);
	}
	{
		var _g = this;
		_g.setY(_g.getY() + this.speedY);
	}
	if(this.gamepad != null && this.gamepad.any) {
		this.angle = Math.atan2(this.speedX,this.speedY);
	}
	demo.wizardry.Wizard.prototype.update.call(this);
}
demo.wizardry.PlayerWizard.prototype.__class__ = demo.wizardry.PlayerWizard;
hedge.display.FillType = function() { }
hedge.display.FillType.__name__ = ["hedge","display","FillType"];
hedge.display.FillType.prototype.__class__ = hedge.display.FillType;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
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
hedge.display.BitmapData = function(width,height,transparent,fillColor,cssSelector) { if( width === $_ ) return; {
	if(fillColor == null) fillColor = 16777215;
	if(transparent == null) transparent = true;
	this.width = width;
	this.height = height;
	this.transparent = transparent == null?true:transparent;
	this.__fillColor__ = fillColor == null?16777215:fillColor;
	this.__id__ = hedge.Setup.generateInstanceName();
	this.__source__ = cssSelector == null?null:new $(cssSelector);
	this.__canvas__ = new $("<canvas>").addClass("bitmapdata").attr({ id : this.__id__, width : width, height : height});
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
}}
hedge.display.BitmapData.__name__ = ["hedge","display","BitmapData"];
hedge.display.BitmapData.prototype.height = null;
hedge.display.BitmapData.prototype.transparent = null;
hedge.display.BitmapData.prototype.width = null;
hedge.display.BitmapData.prototype.__canvas__ = null;
hedge.display.BitmapData.prototype.__context__ = null;
hedge.display.BitmapData.prototype.__id__ = null;
hedge.display.BitmapData.prototype.__fillColor__ = null;
hedge.display.BitmapData.prototype.__source__ = null;
hedge.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	this.__context__.drawImage(sourceBitmapData.__canvas__[0],sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
}
hedge.display.BitmapData.prototype.fillRect = function(rect,color) {
	this.__context__.fillStyle = this.transparent == true?hedge.Setup.canvas_RGBA_to_String(color):hedge.Setup.RGB_to_String(color);
	this.__context__.fillRect(rect.x,rect.y,rect.width,rect.height);
}
hedge.display.BitmapData.prototype.getHeight = function() {
	return this.height;
}
hedge.display.BitmapData.prototype.getWidth = function() {
	return this.width;
}
hedge.display.BitmapData.prototype.onCanvasEnter = function(e) {
	this.__canvas__.attr({ tabindex : 0}).focus();
}
hedge.display.BitmapData.prototype.onCanvasLeave = function(e) {
	this.__canvas__.removeAttr("tabindex").blur();
}
hedge.display.BitmapData.prototype.__class__ = hedge.display.BitmapData;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it0 = it.iterator();
		while( $it0.hasNext() ) { var x = $it0.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it1 = it.iterator();
		while( $it1.hasNext() ) { var x = $it1.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.prototype.__class__ = Lambda;
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	return meta == null?meta:meta.fields;
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
	return false;
}
hedge.ui.Keyboard.getNumLock = function() {
	return false;
}
hedge.ui.Keyboard.prototype.__class__ = hedge.ui.Keyboard;
hedge.Lib = function() { }
hedge.Lib.__name__ = ["hedge","Lib"];
hedge.Lib.attachToStage = function(displayobject) {
	hedge.Setup.__stage__.addChild(displayobject);
	return hedge.Setup.__stage__;
}
hedge.Lib.prototype.__class__ = hedge.Lib;
hedge.display.GradientType = function() { }
hedge.display.GradientType.__name__ = ["hedge","display","GradientType"];
hedge.display.GradientType.prototype.__class__ = hedge.display.GradientType;
demo.gamepad.Gamepad = function(stage,isCircle,ease,autoStep) { if( stage === $_ ) return; {
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
}}
demo.gamepad.Gamepad.__name__ = ["demo","gamepad","Gamepad"];
demo.gamepad.Gamepad.prototype._up = null;
demo.gamepad.Gamepad.prototype._down = null;
demo.gamepad.Gamepad.prototype._left = null;
demo.gamepad.Gamepad.prototype._right = null;
demo.gamepad.Gamepad.prototype._fire1 = null;
demo.gamepad.Gamepad.prototype._fire2 = null;
demo.gamepad.Gamepad.prototype._inputs = null;
demo.gamepad.Gamepad.prototype._upLeft = null;
demo.gamepad.Gamepad.prototype._downLeft = null;
demo.gamepad.Gamepad.prototype._upRight = null;
demo.gamepad.Gamepad.prototype._downRight = null;
demo.gamepad.Gamepad.prototype._anyDirection = null;
demo.gamepad.Gamepad.prototype._multiInputs = null;
demo.gamepad.Gamepad.prototype._x = null;
demo.gamepad.Gamepad.prototype._y = null;
demo.gamepad.Gamepad.prototype._targetX = null;
demo.gamepad.Gamepad.prototype._targetY = null;
demo.gamepad.Gamepad.prototype._angle = null;
demo.gamepad.Gamepad.prototype._rotation = null;
demo.gamepad.Gamepad.prototype._magnitude = null;
demo.gamepad.Gamepad.prototype.isCircle = null;
demo.gamepad.Gamepad.prototype.ease = null;
demo.gamepad.Gamepad.prototype.mapDirection = function(up,down,left,right,replaceExisting) {
	if(replaceExisting == null) replaceExisting = false;
	this.getUp().mapKey(up,replaceExisting);
	this.getDown().mapKey(down,replaceExisting);
	this.getLeft().mapKey(left,replaceExisting);
	this.getRight().mapKey(right,replaceExisting);
}
demo.gamepad.Gamepad.prototype.useArrows = function(replaceExisting) {
	if(replaceExisting == null) replaceExisting = false;
	this.mapDirection(38,40,37,39,replaceExisting);
}
demo.gamepad.Gamepad.prototype.useWASD = function(replaceExisting) {
	if(replaceExisting == null) replaceExisting = false;
	this.mapDirection(87,83,65,68,replaceExisting);
}
demo.gamepad.Gamepad.prototype.mapFireButtons = function(fire1,fire2,replaceExisting) {
	if(replaceExisting == null) replaceExisting = false;
	this.getFire1().mapKey(fire1,replaceExisting);
	this.getFire2().mapKey(fire2,replaceExisting);
}
demo.gamepad.Gamepad.prototype.useControlSpace = function(replaceExisting) {
	if(replaceExisting == null) replaceExisting = false;
	this.mapFireButtons(17,32,replaceExisting);
}
demo.gamepad.Gamepad.prototype.step = function() {
	{
		var _g = this;
		_g.setX(_g.getX() + (this._targetX - this.getX()) * this.ease);
	}
	{
		var _g = this;
		_g.setY(_g.getY() + (this._targetY - this.getY()) * this.ease);
	}
	this._magnitude = Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY());
	this._angle = Math.atan2(this.getX(),this.getY());
	this._rotation = this.getAngle() * 57.29577951308232;
	{
		var _g1 = 0, _g = this._inputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._inputs[i].update();
		}
	}
}
demo.gamepad.Gamepad.prototype.setX = function(value) {
	this._x = value;
	this._targetX = value;
	this._angle = Math.atan2(this.getX(),this.getY());
	this._rotation = this.getAngle() * 57.29577951308232;
	return this.getX();
}
demo.gamepad.Gamepad.prototype.setY = function(value) {
	this._y = value;
	this._targetY = value;
	this._angle = Math.atan2(this.getX(),this.getY());
	this._rotation = this.getAngle() * 57.29577951308232;
	return this.getY();
}
demo.gamepad.Gamepad.prototype.getAngle = function() {
	return this._angle;
}
demo.gamepad.Gamepad.prototype.getX = function() {
	return this._x;
}
demo.gamepad.Gamepad.prototype.getY = function() {
	return this._y;
}
demo.gamepad.Gamepad.prototype.getUp = function() {
	return this._up;
}
demo.gamepad.Gamepad.prototype.getDown = function() {
	return this._down;
}
demo.gamepad.Gamepad.prototype.getLeft = function() {
	return this._left;
}
demo.gamepad.Gamepad.prototype.getRight = function() {
	return this._right;
}
demo.gamepad.Gamepad.prototype.getUpLeft = function() {
	return this._upLeft;
}
demo.gamepad.Gamepad.prototype.getDownLeft = function() {
	return this._downLeft;
}
demo.gamepad.Gamepad.prototype.getUpRight = function() {
	return this._upRight;
}
demo.gamepad.Gamepad.prototype.getDownRight = function() {
	return this._downRight;
}
demo.gamepad.Gamepad.prototype.getFire1 = function() {
	return this._fire1;
}
demo.gamepad.Gamepad.prototype.getFire2 = function() {
	return this._fire2;
}
demo.gamepad.Gamepad.prototype.getAnyDirection = function() {
	return this._anyDirection;
}
demo.gamepad.Gamepad.prototype.getMagnitude = function() {
	return this._magnitude;
}
demo.gamepad.Gamepad.prototype.getRotation = function() {
	return this._rotation;
}
demo.gamepad.Gamepad.prototype.onEnterFrame = function(event) {
	this.step();
}
demo.gamepad.Gamepad.prototype.onKeyDown = function(event) {
	{
		var _g1 = 0, _g = this._inputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._inputs[i].keyDown(event.keyCode);
		}
	}
	this.updateState();
}
demo.gamepad.Gamepad.prototype.onKeyUp = function(event) {
	{
		var _g1 = 0, _g = this._inputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._inputs[i].keyUp(event.keyCode);
		}
	}
	this.updateState();
}
demo.gamepad.Gamepad.prototype.updateState = function() {
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
}
demo.gamepad.Gamepad.prototype.__class__ = demo.gamepad.Gamepad;
DemoMain = function() { }
DemoMain.__name__ = ["DemoMain"];
DemoMain.main = function() {
	if(haxe.Firebug.detect()) {
		haxe.Firebug.redirectTraces();
	}
	hedge.Setup.init($closure(DemoMain,"launch"),15,"bunnyLand");
}
DemoMain.launch = function() {
	hedge.Lib.attachToStage(new Examples());
}
DemoMain.prototype.__class__ = DemoMain;
Examples = function(p) { if( p === $_ ) return; {
	hedge.display.Sprite.call(this);
	this.bunnyOne = new demo.bunnyLandBlitTest.BunnyLandBlitTest();
	this.max = 34000;
	this.bunnyOne.name = "blit";
	this.bunnyClass = demo.bunnyLandBlitTest.BunnyLandBlitTest;
	this.bunnyAmount = new hedge.text.TextField();
	this.bunnyAmount.setType("input");
	this.bunnyAmount.setBackground(true);
	this.bunnyAmount.setBorder(true);
	this.bunnyAmount.setWidth(50);
	this.bunnyAmount.setHeight(20);
	this.bunnyAmount.setText("" + this.max);
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
	this.bunnyAmount.setX(640 - (this.submitAmount.getWidth() + 5) - (this.bunnyAmount.getWidth() + 5));
	this.bunnyAmount.setY(480 - (this.submitAmount.getHeight() + 5));
	this.submitText.setX(25);
	this.submitText.setY(2);
	this.submitAmount.addEventListener("click",$closure(this,"onBunnyClick"));
	this.addChild(this.bunnyOne);
	this.addChild(this.bunnyAmount);
	this.addChild(this.submitAmount);
	this.submitAmount.addChild(this.submitText);
}}
Examples.__name__ = ["Examples"];
Examples.__super__ = hedge.display.Sprite;
for(var k in hedge.display.Sprite.prototype ) Examples.prototype[k] = hedge.display.Sprite.prototype[k];
Examples.prototype.bunnyAmount = null;
Examples.prototype.submitAmount = null;
Examples.prototype.submitText = null;
Examples.prototype.bunnyOne = null;
Examples.prototype.bunnyClass = null;
Examples.prototype.max = null;
Examples.prototype.onBunnyClick = function(e) {
	if(this.bunnyAmount.getText() == null) {
		this.bunnyAmount.setText("" + this.max);
	}
	var amount = Std.parseInt(this.bunnyAmount.getText());
	if(amount > this.max) {
		this.bunnyAmount.setText("" + this.max);
	}
	if(amount < 0) {
		this.bunnyAmount.setText("1");
	}
	this.bunnyClass.numBunnies = Std.parseInt(this.bunnyAmount.getText());
}
Examples.prototype.__class__ = Examples;
hedge.display.Stage = function(p) { if( p === $_ ) return; {
	null;
	this.__originalName__ = "Stage";
	this.__jq__ = new $("div#Stage");
}}
hedge.display.Stage.__name__ = ["hedge","display","Stage"];
hedge.display.Stage.__super__ = hedge.display.DisplayObjectContainer;
for(var k in hedge.display.DisplayObjectContainer.prototype ) hedge.display.Stage.prototype[k] = hedge.display.DisplayObjectContainer.prototype[k];
hedge.display.Stage.prototype.__class__ = hedge.display.Stage;
demo.wizardry.Villager = function() { }
demo.wizardry.Villager.__name__ = ["demo","wizardry","Villager"];
demo.wizardry.Villager.__super__ = demo.wizardry.Person;
for(var k in demo.wizardry.Person.prototype ) demo.wizardry.Villager.prototype[k] = demo.wizardry.Person.prototype[k];
demo.wizardry.Villager.prototype.moveTargetX = null;
demo.wizardry.Villager.prototype.moveTargetY = null;
demo.wizardry.Villager.prototype.setRandomPosition = function() {
	this.moveTargetX = demo.wizardry.MathHelper.random(demo.wizardry.Config.leftBound,demo.wizardry.Config.rightBound);
	this.moveTargetY = demo.wizardry.MathHelper.random(demo.wizardry.Config.topBound,demo.wizardry.Config.bottomBound);
}
demo.wizardry.Villager.prototype.update = function() {
	this.angle = demo.wizardry.MathHelper.getAngle(this.moveTargetX,this.moveTargetY,this.getX(),this.getY());
	this.speedX = Math.sin(this.angle) * this.speed;
	this.speedY = Math.cos(this.angle) * this.speed;
	{
		var _g = this;
		_g.setX(_g.getX() + this.speedX);
	}
	{
		var _g = this;
		_g.setY(_g.getY() + this.speedY);
	}
	if(demo.wizardry.MathHelper.getDistance(this.getX(),this.getY(),this.moveTargetX,this.moveTargetY) < 15) {
		this.setRandomPosition();
	}
	demo.wizardry.Person.prototype.update.call(this);
}
demo.wizardry.Villager.prototype.__class__ = demo.wizardry.Villager;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.prototype.__class__ = haxe.Log;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
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
hedge.display.Graphics = function(parent) { if( parent === $_ ) return; {
	hedge.Object.call(this);
	this.parent = parent;
	this.path = "";
	parent.__jq__.append(this.__jq__ = new $("<div>"));
	this.__jq__.attr("id",parent.__originalName__ + "-graphics").css(hedge.Setup.__attr__({ width : "100%", height : "100%"})).css("background-color","transparent");
	this.__raphael__ = new Raphael(parent.__originalName__ + "-graphics","100%","100%");
}}
hedge.display.Graphics.__name__ = ["hedge","display","Graphics"];
hedge.display.Graphics.__super__ = hedge.Object;
for(var k in hedge.Object.prototype ) hedge.display.Graphics.prototype[k] = hedge.Object.prototype[k];
hedge.display.Graphics.prototype.__raphael__ = null;
hedge.display.Graphics.prototype.__element__ = null;
hedge.display.Graphics.prototype.parent = null;
hedge.display.Graphics.prototype.path = null;
hedge.display.Graphics.prototype.fill_color = null;
hedge.display.Graphics.prototype.fill_alpha = null;
hedge.display.Graphics.prototype.lineType = null;
hedge.display.Graphics.prototype.line_thickness = null;
hedge.display.Graphics.prototype.line_color = null;
hedge.display.Graphics.prototype.line_alpha = null;
hedge.display.Graphics.prototype.line_caps = null;
hedge.display.Graphics.prototype.line_joints = null;
hedge.display.Graphics.prototype.line_limit = null;
hedge.display.Graphics.prototype.fillType = null;
hedge.display.Graphics.prototype.fill_gradient_type = null;
hedge.display.Graphics.prototype.fill_gradient_colors = null;
hedge.display.Graphics.prototype.fill_gradient_ratios = null;
hedge.display.Graphics.prototype.beginFill = function(color,alpha) {
	if(alpha == null) alpha = 1.0;
	this.fill_color = color;
	this.fill_alpha = alpha;
	this.fillType = "flood";
}
hedge.display.Graphics.prototype.checkFill = function() {
	this.fillType = this.fillType == null?"flood":this.fillType;
	switch(this.fillType) {
	case "bitmapdata":{
		throw "beginBitmapFill is not implemented";
	}break;
	case "flood":{
		this.__element__.attr("fill",this.fill_color == null?"#ffffff":hedge.Setup.RGB_to_String(this.fill_color)).attr("opacity",this.fill_alpha == null?1.0:this.fill_alpha);
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
				color_alpha += ":" + this.fill_gradient_ratios[i] / 255 * 100;
			}
		}
		switch(this.fill_gradient_type) {
		case hedge.display.GradientType.LINEAR:{
			this.__element__.attr("fill","0-" + color_alpha);
		}break;
		case hedge.display.GradientType.RADIAL:{
			throw "Gradient.RADIAL is not supported by Raphael__jq__ on any thing not a circle or ellipse";
			this.__element__.attr("fill","r" + color_alpha);
		}break;
		}
	}break;
	default:{
		null;
	}break;
	}
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
hedge.display.Graphics.prototype.endFill = function() {
	if(this.path != "" || this.path == null) {
		this.__element__ = this.__raphael__.path(this.path += " z");
		this.checkFill();
		this.checkLineStyle();
		this.parent.__jq__.trigger(hedge.Setup.RESIZE_ELEMENT,[{ x : this.__element__.getBBox().x, y : this.__element__.getBBox().y, w : this.__element__.getBBox().width, h : this.__element__.getBBox().height, p : this.parent}]);
	}
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
hedge.display.Graphics.prototype.checkLineStyle = function() {
	this.lineType = this.lineType == null?"plain":this.lineType;
	switch(this.lineType) {
	case "gradient":{
		null;
	}break;
	case "plain":{
		this.__element__.attr("stroke-width",this.line_thickness == null?1.0:this.line_thickness).attr("stroke",this.line_color == null?"none":hedge.Setup.RGB_to_String(this.line_color)).attr("stroke-opacity",this.line_alpha == null?1.0:this.line_alpha).attr("stroke-linecap",this.line_caps == null?"butt":this.line_caps = this.line_caps == "none"?"butt":this.line_caps).attr("stroke-linejoin",this.line_joints == null?"miter":this.line_joints).attr("stroke-miterlimit",this.line_limit == null?3.0:this.line_limit);
	}break;
	default:{
		null;
	}break;
	}
}
hedge.display.Graphics.prototype.__class__ = hedge.display.Graphics;
hedge.text.TextField = function(p) { if( p === $_ ) return; {
	hedge.display.InteractiveObject.call(this);
	this.__jq__.css({ overflow : "none", padding : "0px", resize : "none", outline : "none"}).css("border-width","1px");
	this.setBackground(false);
	this.setBorder(false);
	this.setWordWrap(false);
	this.setType("dynamic");
	this.setWidth(this.setHeight(100));
}}
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
	return this.__jq__.attr("data-background");
}
hedge.text.TextField.prototype.setBackground = function(value) {
	this.__jq__.attr("data-background",value);
	this.__jq__.css("background",value == true?"" + hedge.Setup.RGB_to_String(16777215):"none");
	return this.__jq__.attr("data-background");
}
hedge.text.TextField.prototype.getBackgroundColor = function() {
	return this.getBackground() == true?hedge.Setup.RGB_String_to_HEX(this.__jq__.css("background-color")):-1;
}
hedge.text.TextField.prototype.setBackgroundColor = function(value) {
	if(this.getBackground() == true) {
		this.__jq__.css("background-color",hedge.Setup.RGB_to_String(value));
	}
	return this.getBackgroundColor();
}
hedge.text.TextField.prototype.getBorder = function() {
	return this.__jq__.attr("data-border");
}
hedge.text.TextField.prototype.setBorder = function(value) {
	this.__jq__.attr("data-border",value);
	this.__jq__.css("border",value == true?"1px solid " + hedge.Setup.RGB_to_String(0):"0px none");
	return this.__jq__.attr("data-border");
}
hedge.text.TextField.prototype.getBorderColor = function() {
	return this.getBorder() == true?hedge.Setup.RGB_String_to_HEX(this.__jq__.css("border-color")):-16777216;
}
hedge.text.TextField.prototype.setBorderColor = function(value) {
	if(this.getBorder() == true) {
		this.__jq__.css("border-color",hedge.Setup.RGB_to_String(value));
	}
	return this.getBorderColor();
}
hedge.text.TextField.prototype.getText = function() {
	return this.__jq__.val();
}
hedge.text.TextField.prototype.setText = function(value) {
	this.__jq__.val(value);
	return this.__jq__.val();
}
hedge.text.TextField.prototype.getType = function() {
	return this.__jq__.attr("data-type");
}
hedge.text.TextField.prototype.setType = function(value) {
	if(value == "dynamic") {
		this.__jq__.attr({ readonly : "readonly"});
	}
	else if(value == "input") {
		this.__jq__.removeAttr("readonly");
	}
	this.__jq__.attr("data-type",value);
	return this.__jq__.attr("data-type");
}
hedge.text.TextField.prototype.getWordWrap = function() {
	return this.__jq__.attr("data-wordWrap");
}
hedge.text.TextField.prototype.setWordWrap = function(value) {
	this.__jq__.css("white-space",value == true?"normal":"nowrap");
	this.__jq__.attr("data-wordWrap",value);
	return this.__jq__.attr("data-wordWrap");
}
hedge.text.TextField.prototype.generateJQuery = function() {
	hedge.Setup.__storage__.append(this.__jq__ = new $("<textarea>"));
}
hedge.text.TextField.prototype.setWidth = function(value) {
	this.__jq__.width(value);
	this.__jq__.data("width",value);
	return this.__jq__.data("width");
}
hedge.text.TextField.prototype.setHeight = function(value) {
	this.__jq__.height(value);
	this.__jq__.data("height",value);
	return this.__jq__.data("height");
}
hedge.text.TextField.prototype.__class__ = hedge.text.TextField;
hedge.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) { if( bitmapData === $_ ) return; {
	if(smoothing == null) smoothing = false;
	if(pixelSnapping == null) pixelSnapping = "auto";
	hedge.display.DisplayObject.call(this);
	this.setBitmapData(bitmapData);
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
}}
hedge.display.Bitmap.__name__ = ["hedge","display","Bitmap"];
hedge.display.Bitmap.__super__ = hedge.display.DisplayObject;
for(var k in hedge.display.DisplayObject.prototype ) hedge.display.Bitmap.prototype[k] = hedge.display.DisplayObject.prototype[k];
hedge.display.Bitmap.prototype.bmd = null;
hedge.display.Bitmap.prototype.bitmapData = null;
hedge.display.Bitmap.prototype.pixelSnapping = null;
hedge.display.Bitmap.prototype.smoothing = null;
hedge.display.Bitmap.prototype.getBitmapData = function() {
	return this.bmd;
}
hedge.display.Bitmap.prototype.setBitmapData = function(value) {
	this.setWidth(value.getWidth());
	this.setHeight(value.getHeight());
	this.__jq__.append(value.__canvas__);
	this.bmd = value;
	return value;
}
hedge.display.Bitmap.prototype.__class__ = hedge.display.Bitmap;
demo.wizardry.Config = function() { }
demo.wizardry.Config.__name__ = ["demo","wizardry","Config"];
demo.wizardry.Config.prototype.__class__ = demo.wizardry.Config;
hedge.display.LineType = function() { }
hedge.display.LineType.__name__ = ["hedge","display","LineType"];
hedge.display.LineType.prototype.__class__ = hedge.display.LineType;
demo.wizardry.ArrayHelper = function() { }
demo.wizardry.ArrayHelper.__name__ = ["demo","wizardry","ArrayHelper"];
demo.wizardry.ArrayHelper.removeFromArray = function(object,array) {
	array.remove(object);
}
demo.wizardry.ArrayHelper.prototype.__class__ = demo.wizardry.ArrayHelper;
demo.wizardry.MathHelper = function() { }
demo.wizardry.MathHelper.__name__ = ["demo","wizardry","MathHelper"];
demo.wizardry.MathHelper.random = function(from,to) {
	if(to == null) to = 1;
	if(from == null) from = 0;
	return Math.random() * (to - from) + from;
}
demo.wizardry.MathHelper.randomInt = function(equalOrGreaterThan,lessThan) {
	if(lessThan == null) lessThan = 1;
	if(equalOrGreaterThan == null) equalOrGreaterThan = 0;
	return Math.floor(demo.wizardry.MathHelper.random(equalOrGreaterThan,lessThan));
}
demo.wizardry.MathHelper.getDistance = function(x1,y1,x2,y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	return Math.sqrt(dx * dx + dy * dy);
}
demo.wizardry.MathHelper.constrain = function(value,min,max) {
	if(max == null) max = 1;
	if(min == null) min = 0;
	if(value > max) {
		return max;
	}
	else if(value < min) {
		return min;
	}
	return value;
}
demo.wizardry.MathHelper.limitRadians = function(angle) {
	if(angle >= 0) {
		while(angle > Math.PI) {
			angle -= demo.wizardry.MathHelper.TWO_PI;
		}
	}
	else {
		while(angle < -Math.PI) {
			angle += demo.wizardry.MathHelper.TWO_PI;
		}
	}
	return angle;
}
demo.wizardry.MathHelper.getAngle = function(x1,y1,x2,y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	return Math.atan2(dx,dy);
}
demo.wizardry.MathHelper.magnitude = function(dx,dy) {
	return Math.sqrt(dx * dx + dy * dy);
}
demo.wizardry.MathHelper.prototype.__class__ = demo.wizardry.MathHelper;
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
	hedge.events.Event.call(this,this.type,this.bubbles,this.cancelable);
}}
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
	return new hedge.events.MouseEvent(this.type,this.bubbles,this.cancelable,this.localX,this.localY,this.relatedObject,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.controlKey,this.clickCount);
}
hedge.events.MouseEvent.prototype.__class__ = hedge.events.MouseEvent;
hedge.geom.Rectangle = function(x,y,width,height) { if( x === $_ ) return; {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}}
hedge.geom.Rectangle.__name__ = ["hedge","geom","Rectangle"];
hedge.geom.Rectangle.prototype.height = null;
hedge.geom.Rectangle.prototype.width = null;
hedge.geom.Rectangle.prototype.y = null;
hedge.geom.Rectangle.prototype.x = null;
hedge.geom.Rectangle.prototype.__class__ = hedge.geom.Rectangle;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.document = null;
js.Lib.window = null;
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
demo.wizardry.EvilWizard = function() { }
demo.wizardry.EvilWizard.__name__ = ["demo","wizardry","EvilWizard"];
demo.wizardry.EvilWizard.__super__ = demo.wizardry.Wizard;
for(var k in demo.wizardry.Wizard.prototype ) demo.wizardry.EvilWizard.prototype[k] = demo.wizardry.Wizard.prototype[k];
demo.wizardry.EvilWizard.prototype.targetVillager = null;
demo.wizardry.EvilWizard.prototype.findTargetVillager = function() {
	this.targetVillager = demo.wizardry.Game.instance.villiagers[demo.wizardry.MathHelper.randomInt(0,demo.wizardry.Game.instance.villiagers.length)];
}
demo.wizardry.EvilWizard.prototype.update = function() {
	if(this.targetVillager.isDestroyed) this.findTargetVillager();
	this.angle = demo.wizardry.MathHelper.getAngle(this.targetVillager.getX(),this.targetVillager.getY(),this.getX(),this.getY());
	this.speedX = Math.sin(this.angle) * this.speed;
	this.speedY = Math.cos(this.angle) * this.speed;
	{
		var _g = this;
		_g.setX(_g.getX() + this.speedX);
	}
	{
		var _g = this;
		_g.setY(_g.getY() + this.speedY);
	}
	this.attemptFire();
	demo.wizardry.Wizard.prototype.update.call(this);
}
demo.wizardry.EvilWizard.prototype.__class__ = demo.wizardry.EvilWizard;
hedge.jquery.events.EnterFrame = function() { }
hedge.jquery.events.EnterFrame.__name__ = ["hedge","jquery","events","EnterFrame"];
hedge.jquery.events.EnterFrame.interval = null;
hedge.jquery.events.EnterFrame.timer = null;
hedge.jquery.events.EnterFrame.addListener = function(name,listener) {
	hedge.jquery.events.EnterFrame.dataHash.set(name,hedge.jquery.events.EnterFrame.dataArray.push(listener));
	if(hedge.jquery.events.EnterFrame.dataArray.length != 0) {
		hedge.jquery.events.EnterFrame.interval = 1000 / hedge.Setup.getFrameRate();
		hedge.jquery.events.EnterFrame.timer = setInterval($closure(hedge.jquery.events.EnterFrame,"runEnterFrame"),hedge.jquery.events.EnterFrame.interval);
	}
	hedge.jquery.events.EnterFrame.eventLength = hedge.jquery.events.EnterFrame.dataArray.length;
}
hedge.jquery.events.EnterFrame.removeListener = function(name,listener) {
	if(hedge.jquery.events.EnterFrame.dataHash.exists(name) == true) {
		hedge.jquery.events.EnterFrame.dataArray.remove(listener);
		hedge.jquery.events.EnterFrame.dataHash.remove(name);
		if(hedge.jquery.events.EnterFrame.dataArray.length == 0) {
			clearInterval(hedge.jquery.events.EnterFrame.timer);
		}
		hedge.jquery.events.EnterFrame.eventLength = hedge.jquery.events.EnterFrame.dataArray.length;
	}
}
hedge.jquery.events.EnterFrame.determineFrameRate = function() {
	hedge.jquery.events.EnterFrame.interval = 1000 / hedge.Setup.getFrameRate();
}
hedge.jquery.events.EnterFrame.runEnterFrame = function() {
	if(hedge.jquery.events.EnterFrame.eventLength != 0) {
		hedge.jquery.events.EnterFrame.i = hedge.jquery.events.EnterFrame.eventLength;
		while(hedge.jquery.events.EnterFrame.i > 0) {
			hedge.jquery.events.EnterFrame.dataArray[hedge.jquery.events.EnterFrame.i - 1]("");
			hedge.jquery.events.EnterFrame.i--;
		}
	}
	else {
		clearInterval(hedge.jquery.events.EnterFrame.timer);
	}
}
hedge.jquery.events.EnterFrame.prototype.__class__ = hedge.jquery.events.EnterFrame;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
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
	}(this));
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
demo.cheezeworld.utils.KeyCode.A = 65;
demo.cheezeworld.utils.KeyCode.D = 68;
demo.cheezeworld.utils.KeyCode.S = 83;
demo.cheezeworld.utils.KeyCode.W = 87;
demo.cheezeworld.utils.KeyCode.CONTROL = 17;
demo.cheezeworld.utils.KeyCode.SPACEBAR = 32;
hedge.display.JointStyle.MITER = "miter";
hedge.display.CapsStyle.NONE = "none";
hedge.events.Event.ENTER_FRAME = "enterFrame";
hedge.events.KeyboardEvent.KEY_DOWN = "keydown";
hedge.events.KeyboardEvent.KEY_UP = "keyup";
demo.bunnyLandBlitTest.BunnyLandBlitTest.numBunnies = 24000;
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
hedge.display.PixelSnapping.AUTO = "auto";
hedge.jquery.events.ResizeElement.__meta__ = { fields : { add : { jquery : null}}};
hedge.Setup.__events__ = [hedge.jquery.events.ResizeElement];
hedge.Setup.__movieclips__ = new Array();
hedge.Setup.RESIZE_ELEMENT = "ResizeElement";
hedge.display.FillType.FLOOD = "flood";
hedge.display.FillType.BITMAPDATA = "bitmapdata";
hedge.display.FillType.GRADIENT = "gradient";
hedge.text.TextFieldType.DYNAMIC = "dynamic";
hedge.text.TextFieldType.INPUT = "input";
hedge.ui.Keyboard.DOWN = 40;
hedge.ui.Keyboard.LEFT = 37;
hedge.ui.Keyboard.RIGHT = 39;
hedge.ui.Keyboard.UP = 38;
hedge.display.GradientType.LINEAR = "linear";
hedge.display.GradientType.RADIAL = "radial";
demo.wizardry.Config.leftBound = 0;
demo.wizardry.Config.rightBound = 1000;
demo.wizardry.Config.topBound = 0;
demo.wizardry.Config.bottomBound = 700;
hedge.display.LineType.PLAIN = "plain";
hedge.display.LineType.GRADIENT = "gradient";
demo.wizardry.MathHelper.TWO_PI = Math.PI * 2;
demo.wizardry.MathHelper.EIGHTH_CIRCLE = Math.PI / 4;
demo.wizardry.MathHelper.RADIANS_TO_DEGREES = 180 / Math.PI;
hedge.events.MouseEvent.CLICK = "click";
js.Lib.onerror = null;
hedge.jquery.events.EnterFrame.dataHash = new Hash();
hedge.jquery.events.EnterFrame.dataArray = new Array();
hedge.jquery.events.EnterFrame.eventLength = 0;
hedge.jquery.events.EnterFrame.i = 0;
DemoMain.main()