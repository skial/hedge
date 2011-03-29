/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.display.DisplayObject;
import hedge.display.DisplayObjectContainer;
import hedge.geom.Rectangle;
import hedge.Setup;

class Sprite extends DisplayObjectContainer {
	
	public var buttonMode(getButtonMode,setButtonMode):Bool;
	public var dropTarget(getDropTarget,setDropTarget):DisplayObject;
	public var graphics(getGraphics,null):Graphics;							// read only
	public var hitArea(getHitArea,setHitArea):Sprite;
	//public var soundTransform:SoundTransform;
	public var useHandCursor(getHandCursor, setHandCursor):Bool;
	
	/* INTERNAL VARIABLES */
	
	private var __graphics__:Graphics;
	
	public var __graphicRectangle__:Rectangle;

	public function new() {
		super();
	}
	
	public function startDrag(lockCenter:Bool = false, bounds:Rectangle = null) {
		
	}
	
	public function stopDrag() {
		
	}
	
	/* OVERRIDE FUNCTIONS */
	
	override private function setHeight(value:Float):Float {
		this.__displayObjectRectangle__.height = value;
		this.__ele__.style.height = '' + (this.__graphicRectangle__.height > this.__displayObjectRectangle__.height ? value + (this.__graphicRectangle__.height - value) : value) + 'px';
		return value;
	}
	
	override private function setWidth(value:Float):Float {
		this.__displayObjectRectangle__.width = value;
		this.__ele__.style.width = '' + (this.__graphicRectangle__.width > this.__displayObjectRectangle__.width ? value + (this.__graphicRectangle__.width - value) : value) + 'px';
		return value;
	}
	
	override private function setX(value:Float):Float {
		this.__displayObjectRectangle__.x = value;
		this.__ele__.style.left = '' + (this.__graphicRectangle__.x < this.__displayObjectRectangle__.x && this.__graphicRectangle__.x != 0 ? this.__graphicRectangle__.x : value) + 'px';
		return value;
	}
	
	override private function setY(value:Float):Float {
		this.__displayObjectRectangle__.y = value;
		this.__ele__.style.top = '' + (this.__graphicRectangle__.y < this.__displayObjectRectangle__.y && this.__graphicRectangle__.y != 0 ? this.__graphicRectangle__.y : value ) + 'px';
		return value;
	}
	
	/* INTERNAL FUNCTIONS */
	
	override private function initialize():Void {
		super.initialize();
		this.initializeSprite();
	}
	
	private function initializeSprite():Void {
		this.__graphics__ = new Graphics(this);
		this.__graphics__.__raphael__.setSize(this.width, this.height);
		this.__graphicRectangle__ = new Rectangle(this.x, this.y, this.width, this.height);
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
	
	private function getGraphics():Graphics {
		//return _g == null ? _g = new Graphics(this) : _g;
		return this.__graphics__;
	}
	
	private function getHitArea():Sprite {
		return hitArea;
	}
	
	private function setHitArea(value:Sprite):Sprite {
		hitArea = value;
		return hitArea;
	}
	
	private function getHandCursor():Bool {
		return useHandCursor;
	}
	
	private function setHandCursor(value:Bool):Bool {
		useHandCursor = value;
		return useHandCursor;
	}
	
}