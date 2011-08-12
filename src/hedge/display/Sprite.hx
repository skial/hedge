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
	
	public var buttonMode(getButtonMode,setButtonMode):Bool;
	public var dropTarget(getDropTarget,setDropTarget):DisplayObject;
	public var graphics(getGraphics,null):Graphics;							// read only
	public var hitArea(getHitArea,setHitArea):Sprite;
	//public var soundTransform:SoundTransform;
	public var useHandCursor(getHandCursor, setHandCursor):Bool;
	
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
	
	/* INTERNAL FUNCTIONS */
	
	override private function initialize():Void {
		super.initialize();
		this.initializeSprite();
	}
	
	private function initializeSprite():Void {
		this.__graphic__ = new Graphics(this);
	}
	
	private function getButtonMode():Bool {
		return buttonMode;
	}
	
	private function setButtonMode(value:Bool):Bool {
		buttonMode = value;
		return buttonMode;
	}
	
	private function getDropTarget():DisplayObject {
		return dropTarget;
	}
	
	private function setDropTarget(value:DisplayObject):DisplayObject {
		dropTarget = value;
		return dropTarget;
	}
	
	private inline function getGraphics():Graphics {
		return this.__graphic__;
	}
	
	private function getHitArea():Sprite {
		return hitArea;
	}
	
	private function setHitArea(value:Sprite):Sprite {
		hitArea = value;
		return hitArea;
	}
	
	private function getHandCursor():Bool {
		return true;
	}
	
	private function setHandCursor(value:Bool):Bool {
		return value;
	}
	
}