/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.events.Event;
import hedge.events.EventDispatcher;
import hedge.geom.Rectangle;
import hedge.Setup;
import hedge.events.EventPhase;
import js.Lib;

using clippings.Twig;
using Std;

class DisplayObject extends EventDispatcher, implements IBitmapDrawable {
	
	//public var accessibilityProperties
	public var alpha(getAlpha,setAlpha):Float;
	public var blendMode(getBlendMode,setBlendMode):String;
	public var cacheAsBitmap(getCache,setCache):Bool;
	//public var loaderInfo(getLoader,null)									//read only
	public var mask(getMask,setMask):DisplayObject;
	public var mouseX(getMouseX,null):Float;									//read only
	public var mouseY(getMouseY,null):Float;									//read only
	public var name(getName,setName):String;
	public var opaqueBackground(getOpaqueBackground,setOpaqueBackground):Dynamic;
	public var parent(getParent,setParent):DisplayObjectContainer;		//read only | CHANGED - was read only
	public var root(getRoot,null):DisplayObject;								//read only
	public var rotation(getRotation,setRotation):Float;
	public var scale9Grid(getScale9,setScale9):Rectangle;
	public var scaleX(getScaleX,setScaleX):Float;
	public var scaleY(getScaleY,setScaleY):Float;
	public var scrollRect(getScrollRect,setScrollRect):Rectangle;
	public var stage(getStage,null):Stage;										//read only
	//public var transform
	public var visible(getVisible,setVisible):Bool;
	public var height(getHeight,setHeight):Float;
	public var width(getWidth,setWidth):Float;
	public var x(getX,setX):Float;
	public var y(getY, setY):Float;
	
	public var __originalName__:String;
	public var __ancestorPath__:Array<DisplayObject>;

	public function new() {
		super(null);
	}
	
	public function getBounds(targetCoordinateSpace:DisplayObject):Rectangle {
		return new Rectangle();
	}
	
	public function getRect(targetCoordinateSpace:DisplayObject):Dynamic {
		return 'rectangle';
	}
	
	public function hitTestObject(obj:DisplayObject):Bool {
		return true;
	}
	
	public function hitTestPoint(x:Float, y:Float, shapeFlag:Bool = false):Bool {
		return true;
	}
	
	public function localToGlobal(point:Dynamic):Dynamic {
		return 'point';
	}
	
	/* OVERRIDE FUNCTIONS */
	
	override private function initialize():Void {
		super.initialize();
		this.initializeDisplayObject();
	}
	
	/* INTERNAL FUNCTIONS */
	
	public function initializeDisplayObject():Void {
		//this.generateJQuery();
		this.generateElement();
		this.__originalName__ = this.name = Setup.generateInstanceName();
		// width and height need to be set to 0
		/*this.__jq__.attr('id', this.name).cssMap( Setup.__attr__( { width:'0px', height:'0px', left:'0px', top:'0px' } ) )
					  .attr('data-originalName', this.__originalName__);
		
		this.parent = Setup.__default__;
		this.__jq__.data('__self__', this);*/
		
		this.stage = Setup.__stage__;
		this.parent = Setup.__stage__;
		
		this.__ele__.setAttribute('id', this.name);
		this.__ele__.setAttribute('data-originalName', this.__originalName__);
		this.__ele__.style.cssText = 'overflow:hidden; visibility:visible; position:absolute; width:0px; height:0px; left:0px; top:0px;';
		this.__ele__.data('__self__', this);
		
		this.__ancestorPath__ = Setup.createAncestorPath(this);
	}
	
	// provide to be overriden
	/*private function generateJQuery():Void {
		//Setup.__storage__.append(this.__jq__ = new JQuery('<div>'));
		Setup.__storage__.append(this.__jq__ = new Twig('div', TwigType.CREATE_ELEMENT));
	}*/
	
	private function generateElement():Void {
		__ele__ = Lib.document.createElement('div');
		Setup.__storage__.appendChild(__ele__);
	}
	
	private function getMouseX():Float {
		return mouseX;
	}
	
	private function getMouseY():Float {
		return mouseY;
	}
	
	private function getRoot():DisplayObject {
		return root;
	}
	
	private function getStage():Stage {
		return Setup.__stage__;
	}
	
	private function getParent():DisplayObjectContainer {
		return parent;
	}
	
	private function setParent(value:DisplayObjectContainer):DisplayObjectContainer {
		parent = value;
		return parent;
	}
	
	private function getAlpha():Float {
		//return __jq__.css('opacity');
		return untyped __ele__.style.opacity;
	}
	
	private function setAlpha(value:Float):Float {
		//__jq__.css('opacity', value);
		untyped __ele__.style.opacity = value;
		return value;
	}
	
	private function getBlendMode():String {
		return blendMode;
	}
	
	private function setBlendMode(value:String):String {
		blendMode = value;
		return blendMode;
	}
	
	private function getCache():Bool {
		return cacheAsBitmap;
	}
	
	private function setCache(value:Bool):Bool {
		cacheAsBitmap = value;
		return cacheAsBitmap;
	}
	
	private function getMask():DisplayObject {
		return mask;
	}
	
	private function setMask(value:DisplayObject):DisplayObject {
		mask = value;
		return mask;
	}
	
	private function getName():String {
		//return __jq__.attr('class');
		return __ele__.getAttribute('id');
	}
	
	private function setName(value:String):String {
		//__jq__.attr('class', value);
		__ele__.setAttribute('id', value);
		return value;
	}
	
	private function getOpaqueBackground():Dynamic {
		return opaqueBackground;
	}
	
	private function setOpaqueBackground(value:Dynamic):Dynamic {
		opaqueBackground = value;
		return opaqueBackground;
	}
	
	private function getRotation():Float {
		return rotation;
	}
	
	private function setRotation(value:Float):Float {
		rotation = value;
		return rotation;
	}
	
	private function getScale9():Rectangle {
		return scale9Grid;
	}
	
	private function setScale9(value:Rectangle):Rectangle {
		scale9Grid = value;
		return scale9Grid;
	}
	
	private function getScaleX():Float {
		return scaleX;
	}
	
	private function setScaleX(value:Float):Float {
		scaleX = value;
		return scaleX;
	}
	
	private function getScaleY():Float {
		return scaleY;
	}
	
	private function setScaleY(value:Float):Float {
		scaleY = value;
		return scaleY;
	}
	
	private function getScrollRect():Rectangle {
		return scrollRect;
	}
	
	private function setScrollRect(value:Rectangle):Rectangle {
		scrollRect = value;
		return scrollRect;
	}
	
	private function getVisible():Bool {
		//return __jq__.data('visible') == null ? true : __jq__.data('visible');
		// TODO replace __ele__ with this displayobject
		return __ele__.data('visible') == null ? true : __ele__.data('visible');
	}
	
	private function setVisible(value:Bool):Bool {
		/*__jq__.css('display', value == false ? 'none' : 'block')
				.css('visibility', value == false ? 'hidden' : 'visible')
				.data('visible', value);
		return __jq__.data('visible');*/
		__ele__.style.display = value == false ? 'none' : 'block';
		__ele__.style.visibility = value == false ? 'hidden' : 'visible';
		__ele__.data('visible', value);
		return value;
	}
	
	private function getHeight():Float {
		//return __jq__.data('height') == null ? __jq__.height() : __jq__.data('height');
		return __ele__.style.height.parseFloat();
	}
	
	private function setHeight(value:Float):Float {
		//__jq__.height(value);
		__ele__.style.height = '' + value + 'px';
		return value;
	}
	
	private function getWidth():Float {
		//return __jq__.width();
		return __ele__.style.width.parseFloat();
	}
	
	private function setWidth(value:Float):Float {
		//__jq__.width(value);
		__ele__.style.width = '' + value + 'px';
		return value;
	}
	
	private function getX():Float {
		//return __jq__.position().left;
		//return __jq__.left();
		return __ele__.style.left.parseFloat();
	}
	
	private function setX(value:Float):Float {
		//__jq__.css('left', '' + value + 'px');
		__ele__.style.left = '' + value + 'px';
		return value;
	}
	
	private function getY():Float {
		//return __jq__.position().top;
		//return __jq__.top();
		return __ele__.style.top.parseFloat();
	}
	
	private function setY(value:Float):Float {
		//__jq__.css('top', '' + value + 'px');
		__ele__.style.top = '' + value + 'px';
		return value;
	}
	
	//	INTERNAL METHODS
	
	private function onDisplayMouseEnter(e):Void {
		this.__ele__.setAttribute('tabindex', '0');
		this.__ele__.focus();
	}
	
	private function onDisplayMouseLeave(e):Void {
		untyped this.__ele__.removeAttribute('tabindex');
		this.__ele__.blur();
	}
	
	// OVERRIDE METHODS
	
	override public function addEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = false):Void 	{
		
		super.addEventListener(type, listener, useCapture, priority, useWeakReference);
		
		/*
			
			-----------------------------------------------------------------
			| type | listener | ?useCapture | ?priority | ?useWeakReference |
			-----------------------------------------------------------------
				|			|				|				TODO				 TODO
				V			V				V
			---------------------------------		array ------------------------------ reverse if ?useCapture is true
			|	event containter	|	 path	  | --->	|	this	|	this.parent	|	parent.parent	|	...  |	stage/root	|
			---------------------------------		-------------------------------------------------------------------
								|
								V
			---------------------------------
			|				CACHE					  |
			---------------------------------		---------------------------------------------------------------------
			|	       eventType_c		 	  | ---> |	This depends on ?useCapture. Only one event can exist for each	  |
			---------------------------------		|	event phase (capture or target/bubbling). Currently thinking if  |
			|			 eventType_t			  | ---> |	I should allow you to overwrite a event or stay strict to flash. |
			---------------------------------		---------------------------------------------------------------------
			
		 */
		
		var _event:EventStructure = {
			listener:listener,
			target:this
		}
		
		var _temp = this;
		
		var _access = type + '_' + (useCapture?'c':'t');
		var _type = this.__ele__.data(_access);
		
		if (_type == null) {
			this.__ele__.data(_access, _event);
		} else {
			throw '_event[' + type + '] already set - you need to remove the previous event';
		}
		
		#if HEDGE_EVENT_DEBUG
		trace(' | ADDED EVENT');
		trace(' | name : ' + this.name);
		trace(' | type : ' + type);
		trace('---');
		#end
		
	}
	
	override public function removeEventListener(type:String, listener:Dynamic, ?useCapture:Bool = false):Void {
		
		// TODO make sure removeEventListener is working correctly
		super.removeEventListener(type, listener, useCapture);
		
		var _access = type + '_' + (useCapture?'c':'t');
		var _type = this.__ele__.data(_access);
		
		if (_type == null) {
			return;
		} else {
			this.__ele__.removeData(_access);
		}
		
	}
	
	override public function dispatchEvent(event:Event):Bool {
		
		/*
			
			----------------------------------------------------------------------------------------
			|	Only Event.ACTIVATE .DEACTIVATE .ENTER_FRAME and .RENDER have a target phase only.	|
			|	All other events targeting the display list have a capture and target phase and		|
			|	might have a bubbling phase.																			|
			----------------------------------------------------------------------------------------
			
		*/
		
		var _data:EventStructure = null;
		var _access = null;
		var _temp = null;
		
		event.target = event.target == null ? this : event.target;
		
		if (__ancestorPath__ == null) {
			return false;
		}
		
		#if INCLUDE_HEDGE_EVENT_CAPTURE
		
		if (event.useCapture) {
			#if HEDGE_EVENT_DEBUG
			trace(' | event phase : CAPTURE');
			#end
			
			event.eventPhase = EventPhase.CAPTURING_PHASE;
			
			_access = event.type + '_c';
			_data = untyped this.__ele__.data(_access);
			
			var _array:Array<DisplayObject> = __ancestorPath__;
			_array.reverse();
			
			for (n in _array) {
				
				_temp = n.__ele__.data(_access);
				
				if (_temp != null) {
					
					event.currentTarget = n;
					
					_temp.listener(event);
					
				}
				
			}
			
		}
		#end
		
		_access = event.type + '_t';
		_data = untyped this.__ele__.data(_access);
		
		#if HEDGE_EVENT_DEBUG
		trace(' | event phase : TARGET');
		#end
		
		event.eventPhase = EventPhase.AT_TARGET;
		
		_temp = this.__ele__.data(_access);
		
		if (_temp != null) {
			
			event.currentTarget = this;
			
			_temp.listener(event);
			
		}
		
		#if !EXCLUDE_HEDGE_EVENT_BUBBLE
		
		#if HEDGE_EVENT_DEBUG
		trace(' | event phase : BUBBLE');
		#end
		
		for (n in __ancestorPath__) {
			
			_temp = cast(n, DisplayObject).__ele__.data(_access);
			
			if (_temp != null) {
				
				event.eventPhase = EventPhase.BUBBLING_PHASE;
				event.currentTarget = n;
				
				_temp.listener(event);
				
			}
			
		}
		
		#end
		
		#if HEDGE_EVENT_DEBUG
		trace(' | DISPATCH EVENT');
		trace(' | event type : ' + event.type);
		trace(' | name : ' + this.name);
		trace(' | target name : ' + cast(event.target, DisplayObject).name);
		trace('---');
		#end
		
		return true;
	}
	
}