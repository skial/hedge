/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.events.Event;
import hedge.events.EventDispatcher;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.events.EventPhase;
import js.Lib;

import jQuery.JQuery;

import hedge.Setup;
import hedge.events.internal.HedgeEnterFrame;
import hedge.events.internal.HedgeResizeDisplayEvent;

using Std;
using Reflect;
using clippings.Twig;

class DisplayObject extends EventDispatcher, implements IBitmapDrawable {
	
	//public var accessibilityProperties
	public var alpha(getAlpha,setAlpha):Float;
	public var blendMode(getBlendMode,setBlendMode):String;
	public var cacheAsBitmap(getCache,setCache):Bool;
	//public var loaderInfo(getLoader,null)										//read only
	public var mask(getMask,setMask):DisplayObject;
	public var mouseX(getMouseX,null):Float;									//read only
	public var mouseY(getMouseY,null):Float;									//read only
	public var name(getName,setName):String;
	public var opaqueBackground(getOpaqueBackground,setOpaqueBackground):Dynamic;
	public var parent:DisplayObjectContainer;									//read only
	public var root(getRoot,null):DisplayObject;								//read only
	public var rotation(default,setRotation):Float;
	public var rotationX(default,setRotationX):Float;
	public var rotationY(default,setRotationY):Float;
	public var rotationZ(default,setRotationZ):Float;
	public var scale9Grid(getScale9,setScale9):Rectangle;
	public var scaleX(default,setScaleX):Float;
	public var scaleY(default, setScaleY):Float;
	public var scaleZ(default, setScaleZ):Float;
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
	
	#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
	private var __mouseX__:Float;
	private var __mouseY__:Float;
	#end
	
	public var __originalRectangle__:Rectangle;

	public function new() {
		super(null);
	}
	
	public function getBounds(targetCoordinateSpace:DisplayObject):Rectangle {
		return new Rectangle(this.x - targetCoordinateSpace.x - this.x, this.y - targetCoordinateSpace.y - this.y,	this.width, this.height);
	}
	
	public function getRect(targetCoordinateSpace:DisplayObject):Rectangle {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}
	
	public function hitTestObject(obj:DisplayObject):Bool {
		return true;
	}
	
	public function hitTestPoint(x:Float, y:Float, shapeFlag:Bool = false):Bool {
		return true;
	}
	
	public function localToGlobal(point:Point):Point {
		return point;
	}
	
	/* OVERRIDE FUNCTIONS */
	
	override private function initialize():Void {
		super.initialize();
		this.initializeDisplayObject();
	}
	
	/* INTERNAL FUNCTIONS */
	
	public function initializeDisplayObject():Void {
		
		#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
		this.__mouseX__ = 0;
		this.__mouseY__ = 0;
		#end
		
		this.__generateHedgeDisplayObjectElement__();
		this.__originalName__ = this.name = Setup.generateInstanceName();
		
		this.parent = this.stage = Setup.__stage__;
		
		this.__node__.setAttribute('id', this.name);
		this.__node__.setAttribute('data-originalName', this.__originalName__);
		
		this.__ele__.data('__self__', this);
		
		#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
		this.__ele__.bind('mousemove', __hedgeOnDisplayObjectMouseMove__);
		#end
		this.__ele__.bind(Setup.PREFIX + HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, HedgeResizeDisplayEvent.resizeDisplayObject);
		
		this.scaleX = this.scaleY = this.scaleZ = 1;
		this.rotation = this.rotationX = this.rotationY = this.rotationZ = 0;
		
		var s:Dynamic = {};
		s.setField('transform-origin', '0 0');
		s.setField('transform-style', 'preserves-3d');
		s.setField('perspective-origin', '0 0');
		s.setField('perspective', '0');
		s.setField('backface-visibility', 'visible');
		this.__ele__.css(Setup.cssPrefix(s));
		
		this.__ancestorPath__ = Setup.createAncestorPath(this);
		
	}
	
	#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
	private function __hedgeOnDisplayObjectMouseMove__(e):Void {
		this.__mouseX__ = e.offsetX;
		this.__mouseY__ = e.offsetY;
	}
	#end
	
	private function __generateHedgeDisplayObjectElement__():Void {
		this.__node__ = Lib.document.createElement('div');
		
		Setup.__storage__.appendChild(this.__node__);
		
		this.__ele__ = new JQuery(this.__node__);
		this.__ele__.addClass('hDisplayObject');
	}
	
	private function getMouseX():Float {
		#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
		return this.__mouseX__;
		#else
		return this.mouseX;
		#end
	}
	
	private inline function getMouseY():Float {
		#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
		return this.__mouseY__;
		#else
		return this.mouseY;
		#end
	}
	
	private function getRoot():DisplayObject {
		return root;
	}
	
	private function getStage():Stage {
		return Setup.__stage__;
	}
	
	private inline function getAlpha():Float {
		return this.__ele__.css('opacity');
	}
	
	private inline function setAlpha(value:Float):Float {
		this.__ele__.css('opacity', value);
		this.alpha = value;
		return value;
	}
	
	private function getBlendMode():String {
		return blendMode;
	}
	
	private function setBlendMode(value:String):String {
		return blendMode;
	}
	
	private function getCache():Bool {
		return cacheAsBitmap;
	}
	
	private function setCache(value:Bool):Bool {
		return cacheAsBitmap;
	}
	
	private function getMask():DisplayObject {
		return mask;
	}
	
	private function setMask(value:DisplayObject):DisplayObject {
		return mask;
	}
	
	private inline function getName():String {
		return this.__ele__.attr('id');
	}
	
	private inline function setName(value:String):String {
		this.__ele__.attr('id', value);
		this.name = value;
		return value;
	}
	
	private function getOpaqueBackground():Dynamic {
		return opaqueBackground;
	}
	
	private function setOpaqueBackground(value:Dynamic):Dynamic {
		return opaqueBackground;
	}
	
	private function setRotation(value:Float):Float {
		this.rotation = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) } ));
		return value;
	}
	
	private function setRotationX(value:Float):Float {
		this.rotationX = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) } ));
		return value;
	}
	
	private function setRotationY(value:Float):Float {
		this.rotationY = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) } ));
		return value;
	}
	
	private function setRotationZ(value:Float):Float {
		this.rotationZ = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) } ));
		return value;
	}
	
	private function getScale9():Rectangle {
		return scale9Grid;
	}
	
	private function setScale9(value:Rectangle):Rectangle {
		return scale9Grid;
	}
	
	private function setScaleX(value:Float):Float {
		this.scaleX = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) } ));
		return value;
	}
	
	private function setScaleY(value:Float):Float {
		this.scaleY = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) } ));
		return value;
	}
	
	private function setScaleZ(value:Float):Float {
		this.scaleZ = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) } ));
		return value;
	}
	
	private function getScrollRect():Rectangle {
		return scrollRect;
	}
	
	private function setScrollRect(value:Rectangle):Rectangle {
		return scrollRect;
	}
	
	private inline function getVisible():Bool {
		return this.__ele__.css('display') == 'none' ? false : true;
	}
	
	private inline function setVisible(value:Bool):Bool {
		this.__ele__.css('display', 'none');
		return value;
	}
	
	private inline function getHeight():Float {
		return this.__ele__.height();
	}
	
	private inline function setHeight(value:Float):Float {
		this.__ele__.height(value);
		this.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
		return value;
	}
	
	private inline function getWidth():Float {
		return this.__ele__.width();
	}
	
	private inline function setWidth(value:Float):Float {
		this.__ele__.width(value);
		this.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
		return value;
	}
	
	private inline function getX():Float {
		return this.__ele__.position().left;
	}
	
	private inline function setX(value:Float):Float {
		this.__ele__.css('left', value + 'px');
		return value;
	}
	
	private inline function getY():Float {
		return this.__ele__.position().top;
	}
	
	private inline function setY(value:Float):Float {
		this.__ele__.css('top', value + 'px');
		return value;
	}
	
}