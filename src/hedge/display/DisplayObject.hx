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
import js.Dom;

import jQuery.JQuery;

import hedge.Setup;
import hedge.events.internal.HedgeEnterFrame;
import hedge.events.internal.HedgeResizeDisplayEvent;

using Std;
using Reflect;

class DisplayObject extends EventDispatcher, implements IBitmapDrawable {
	
	//public var accessibilityProperties
	public var alpha(get_alpha,set_alpha):Float;
	public var blendMode(get_blendMode,set_blendMode):String;
	public var cacheAsBitmap(get_cache,set_cache):Bool;
	//public var loaderInfo(getLoader,null)										//read only
	public var mask(get_mask,set_mask):DisplayObject;
	public var mouseX(get_mouseX,null):Float;									//read only
	public var mouseY(get_mouseY,null):Float;									//read only
	public var name(default,set_name):String;
	public var opaqueBackground(get_opaqueBackground,set_opaqueBackground):Dynamic;
	public var parent:DisplayObjectContainer;									//read only
	public var root(get_root,null):DisplayObject;								//read only
	public var rotation(default,set_rotation):Float;
	public var rotationX(default,set_rotationX):Float;
	public var rotationY(default,set_rotationY):Float;
	public var rotationZ(default,set_rotationZ):Float;
	public var scale9Grid(get_scale9,set_scale9):Rectangle;
	public var scaleX(default, set_scaleX):Float;
	public var scaleY(default, set_scaleY):Float;
	public var scaleZ(default, set_scaleZ):Float;
	public var scrollRect(get_scrollRect,set_scrollRect):Rectangle;
	public var stage(get_stage,null):Stage;										//read only
	//public var transform
	public var visible(default, set_visible):Bool;
	public var height(default, set_height):Float;
	public var width(default, set_width):Float;
	public var x(default, set_x):Float;
	public var y(default, set_y):Float;
	public var z(default, set_z):Float;
	
	public var __originalName__:String;
	public var __ancestorPath__:Array<DisplayObject>;
	
	private var __originalWidth__:Float;
	private var __originalHeight__:Float;
	
	#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
	private var __mouseX__:Float;
	private var __mouseY__:Float;
	#end
	
	public var __skipResizeEvent__:Bool;
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
		
		this.__skipResizeEvent__ = false;
		
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
		this.rotation = this.rotationX = this.rotationY = this.rotationZ = this.x = this.y = this.z = 0;
		
		var s:Dynamic = {};
		s.setField('transform-origin', '0 0');
		s.setField('transform-style', 'preserves-3d');
		s.setField('perspective-origin', '0 0');
		s.setField('perspective', '0');
		s.setField('backface-visibility', 'visible');
		this.__ele__.css(Setup.cssPrefix(s));
		
		this.__originalWidth__ = this.__originalHeight__ = 0;
		
		// dont see why this needs creating from the get go...
		//this.__ancestorPath__ = Setup.createAncestorPath(this);
		
	}
	
	#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
	private function __hedgeOnDisplayObjectMouseMove__(e):Void {
		/*this.__mouseX__ = e.offsetX;
		this.__mouseY__ = e.offsetY;*/
		
		// jquery normalizes pageX across platform. Sub Stage x and y values.
		this.__mouseX__ = e.pageX - Setup.__stageX__;
		this.__mouseY__ = e.pageY - Setup.__stageY__;
	}
	#end
	
	private function __generateHedgeDisplayObjectElement__():Void {
		this.__node__ = Lib.document.createElement('div');
		
		if (Setup.__initialized__ == true) {
			Setup.__storage__.appendChild(this.__node__);
		} else {
			Setup.__creationQueue__.push(this);
		}
		
		this.__ele__ = new JQuery(this.__node__);
		this.__ele__.addClass('hDisplayObject');
	}
	
	private function get_mouseX():Float {
		#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
		return this.__mouseX__;
		#else
		return this.mouseX;
		#end
	}
	
	private function get_mouseY():Float {
		#if !DISABLE_HEDGE_DISPLAYOBJECT_MOUSEXY
		return this.__mouseY__;
		#else
		return this.mouseY;
		#end
	}
	
	private function get_root():DisplayObject {
		return root;
	}
	
	private function get_stage():Stage {
		return Setup.__stage__;
	}
	
	private function get_alpha():Float {
		return this.__ele__.css('opacity');
	}
	
	private function set_alpha(value:Float):Float {
		this.__ele__.css('opacity', value);
		this.alpha = value;
		return value;
	}
	
	private function get_blendMode():String {
		return blendMode;
	}
	
	private function set_blendMode(value:String):String {
		return blendMode;
	}
	
	private function get_cache():Bool {
		return cacheAsBitmap;
	}
	
	private function set_cache(value:Bool):Bool {
		return cacheAsBitmap;
	}
	
	private function get_mask():DisplayObject {
		return mask;
	}
	
	private function set_mask(value:DisplayObject):DisplayObject {
		return mask;
	}
	
	private function set_name(value:String):String {
		this.name = value;
		this.__ele__.attr('id', value);
		return value;
	}
	
	private function get_opaqueBackground():Dynamic {
		return opaqueBackground;
	}
	
	private function set_opaqueBackground(value:Dynamic):Dynamic {
		return opaqueBackground;
	}
	
	private function set_rotation(value:Float):Float {
		this.rotation = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function set_rotationX(value:Float):Float {
		this.rotationX = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function set_rotationY(value:Float):Float {
		this.rotationY = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function set_rotationZ(value:Float):Float {
		this.rotationZ = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function get_scale9():Rectangle {
		return scale9Grid;
	}
	
	private function set_scale9(value:Rectangle):Rectangle {
		return scale9Grid;
	}
	
	private function set_scaleX(value:Float):Float {
		this.scaleX = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function set_scaleY(value:Float):Float {
		this.scaleY = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function set_scaleZ(value:Float):Float {
		this.scaleZ = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function get_scrollRect():Rectangle {
		return scrollRect;
	}
	
	private function set_scrollRect(value:Rectangle):Rectangle {
		return scrollRect;
	}
	
	private function set_visible(value:Bool):Bool {
		this.visible = value;
		this.__ele__.css('visibility', value == true ? 'visible' : 'hidden');
		return value;
	}
	
	private function set_height(value:Float):Float {
		if (this.__ele__.children().length == 0) {
			return 0;
		} else {
			if (this.__ele__.children().length == 1 && this.__originalHeight__ == 0) {
				this.__originalHeight__ = value;
			}
			
			var _v = (value / this.__originalHeight__);
			_v != 1 ? this.scaleY = _v : '';
			
			this.height = value;
			this.__ele__.height(value);
			
			//this.__skipResizeEvent__ ? this.__skipResizeEvent__ = false : this.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT));
			return value;
		}
	}
	
	private function set_width(value:Float):Float {
		if (this.__ele__.children().length == 0) {
			return 0;
		} else {
			if (this.__ele__.children().length == 1 && this.__originalWidth__ == 0) {
				this.__originalWidth__ = value;
			}
			
			var _v = (value / this.__originalWidth__);
			_v != 1 ? this.scaleX = _v : '';
			
			this.width = value;
			this.__ele__.width(value);
			
			//this.__skipResizeEvent__ ? this.__skipResizeEvent__ = false : this.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT));
			return value;
		}
	}
	
	private function set_x(value:Float):Float {
		this.x = value;
		//this.__ele__.css('left', value + 'px');
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function set_y(value:Float):Float {
		this.y = value;
		//this.__ele__.css('top', value + 'px');
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
	private function set_z(value:Float):Float {
		this.z = value;
		this.__ele__.css(Setup.cssPrefix( { transform:Setup.cssTransform(rotation, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, x, y, z, __ele__) } ));
		return value;
	}
	
}