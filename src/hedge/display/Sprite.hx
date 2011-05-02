/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.display.DisplayObject;
import hedge.display.DisplayObjectContainer;
import hedge.events.internal.HedgeResizeDisplayEvent;
import hedge.geom.Rectangle;
import hedge.Setup;
import js.Lib;

class Sprite extends DisplayObjectContainer {
	
	public var buttonMode(getButtonMode,setButtonMode):Bool;
	public var dropTarget(getDropTarget,setDropTarget):DisplayObject;
	public var graphics(getGraphics,null):Graphics;							// read only
	public var hitArea(getHitArea,setHitArea):Sprite;
	//public var soundTransform:SoundTransform;
	public var useHandCursor(getHandCursor, setHandCursor):Bool;
	
	/* INTERNAL VARIABLES */
	
	private var __graphics__:Graphics;
	
	//public var __graphicRectangle__:Rectangle;

	public function new() {
		super();
	}
	
	public function startDrag(lockCenter:Bool = false, bounds:Rectangle = null) {
		
	}
	
	public function stopDrag() {
		
	}
	
	/* OVERRIDE FUNCTIONS */
	
	override private function __generateHedgeDisplayObjectElement__():Void {
		this.__ele__ = Lib.document.createElement('div');
		//Setup.__graphicStorage__.appendChild(__ele__);
		Setup.__storage__.appendChild(__ele__);
	}
	
	override public function removeChild(child:DisplayObject):DisplayObject {
		//Setup.__graphicStorage__.appendChild(child.__ele__);
		Setup.__storage__.appendChild(child.__ele__);
		return child;
	}
	
	override private function initializeDisplayObjectContainer():Void {
		//super.initializeDisplayObjectContainer();
		this.addEventListener(HedgeResizeDisplayEvent.RESIZE_ELEMENT, HedgeResizeDisplayEvent.resizeDisplayObject);
	}
	
	/* INTERNAL FUNCTIONS */
	
	override private function initialize():Void {
		super.initialize();
		this.initializeSprite();
	}
	
	private function initializeSprite():Void {
		this.__graphics__ = new Graphics(this);
		this.__graphics__.__raphael__.setSize(this.width, this.height);
		//this.__graphicRectangle__ = new Rectangle(this.x, this.y, this.width, this.height);
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