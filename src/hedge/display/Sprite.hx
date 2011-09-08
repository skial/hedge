/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.display.DisplayObject;
import hedge.display.DisplayObjectContainer;
import hedge.geom.Rectangle;

import hedge.events.internal.HedgeResizeDisplayEvent;
import hedge.Setup;
import js.Lib;

class Sprite extends DisplayObjectContainer {
	
	public var buttonMode(dynamic,dynamic):Bool;
	public var dropTarget(dynamic,dynamic):DisplayObject;
	public var graphics(dynamic,null):Graphics;							// read only
	public var hitArea(dynamic,dynamic):Sprite;
	//public var soundTransform:SoundTransform;
	public var useHandCursor(dynamic, dynamic):Bool;
	
	private var __graphic__:Graphics;
	
	/* INTERNAL VARIABLES */
	
	public function new() {
		super();
	}
	
	public function startDrag(lockCenter:Bool = false, bounds:Rectangle = null) {
		
	}
	
	public function stopDrag() {
		
	}
	
	/* OVERRIDE FUNCTIONS */
	
	// INTERNAL FUNCTIONS
	
	override private function initialize():Void {
		super.initialize();
		this.initializeSprite();
	}
	
	private function initializeSprite():Void {
		this.__graphic__ = new Graphics(this);
	}
	
	private function get_buttonMode():Bool {
		return buttonMode;
	}
	
	private function set_buttonMode(value:Bool):Bool {
		buttonMode = value;
		return buttonMode;
	}
	
	private function get_dropTarget():DisplayObject {
		return dropTarget;
	}
	
	private function set_dropTarget(value:DisplayObject):DisplayObject {
		dropTarget = value;
		return dropTarget;
	}
	
	private function get_graphics():Graphics {
		return this.__graphic__;
	}
	
	private function get_hitArea():Sprite {
		return hitArea;
	}
	
	private function set_hitArea(value:Sprite):Sprite {
		hitArea = value;
		return hitArea;
	}
	
	private function get_handCursor():Bool {
		return true;
	}
	
	private function set_handCursor(value:Bool):Bool {
		return value;
	}
	
}