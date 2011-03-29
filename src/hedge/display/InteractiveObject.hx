/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.events.FocusEvent;
import hedge.events.KeyboardEvent;
import hedge.events.MouseEvent;
import js.Dom;

using clippings.Twig;

class InteractiveObject extends DisplayObject {
	
	//public var contextMenu:NativeMenu;
	public var doubleClickEnabled:Bool;
	public var focusRect:Dynamic;
	public var mouseEnabled:Bool;
	public var tabEnabled:Bool;
	public var tabIndex:Int;

	public function new() {
		super();
		//throw 'you cant create a new ineractiveobject';
	}
	
	//	OVERRIDE METHODS
	
	override private function initialize():Void 	{
		super.initialize();
		this.initializeInterativeObject();
	}
	
	//	INTERNAL METHODS
	
	private function initializeInterativeObject():Void {
		this.__ele__.bind('click', onHedgeClick);
		this.__ele__.bind('dblclick', onHedgeDoubleClick);
		this.__ele__.bind('focus', onHedgeFocusIn);
		this.__ele__.bind('blur', onHedgeFocusOut);
		this.__ele__.bind('keydown', onHedgeKeyDown);
		// TODO keyFocusChange
		this.__ele__.bind('keyup', onHedgeKeyUp);
		this.__ele__.bind('mousedown', onHedgeMouseDown);
		// TODO mouseFocusChange
		this.__ele__.bind('mousemove', onHedgeMouseMove);
		this.__ele__.bind('mouseout', onHedgeMouseOut);
		this.__ele__.bind('mouseover', onHedgeMouseOver);
		this.__ele__.bind('mouseup', onHedgeMouseUp);
		// TODO mouseWheel
		// TODO rollOut same as mouseOut ?
		// TODO rollOver same as mouseOver ?
		// TODO tabChildrenChange
		// TODO tabEnabledChange
		// TODO tabIndexChange
	}
	
	private function onHedgeClick(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.CLICK, true, false, e.offsetX, e.offsetY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		event.target = this;
		// TODO event.stageX
		// TODO event.stageY
		this.dispatchEvent(event);
	}
	
	private function onHedgeDoubleClick(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.DOUBLE_CLICK, true, false, e.offsetX, e.offsetY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		event.target = this;
		// TODO event.stageX
		// TODO event.stageY
		this.dispatchEvent(event);
	}
	
	private function onHedgeFocusIn(e):Void {
		var event:FocusEvent = new FocusEvent(FocusEvent.FOCUS_IN, true, false, null, false, 0);
		event.target = this;
		// TODO relatedObject
		this.dispatchEvent(event);
	}
	
	private function onHedgeFocusOut(e):Void {
		var event:FocusEvent = new FocusEvent(FocusEvent.FOCUS_OUT, true, false, null, false, 0);
		event.target = this;
		// TODO relatedObject
		this.dispatchEvent(event);
	}
	
	private function onHedgeKeyDown(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_DOWN, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		this.dispatchEvent(event);
	}
	
	private function onHedgeKeyUp(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_UP, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		this.dispatchEvent(event);
	}
	
	private function onHedgeMouseDown(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_DOWN, true, false, e.offsetX, e.offsetY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		// TODO event.stageX
		// TODO event.stageY
		event.target = this;
		this.dispatchEvent(event);
	}
	
	private function onHedgeMouseMove(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_MOVE, true, false, e.offsetX, e.offsetY, null, e.ctrlKey, e.altKey, e.shiftKey, false, 0);
		// TODO event.stageX
		// TODO event.stageY
		event.target = this;
		this.dispatchEvent(event);
	}
	
	private function onHedgeMouseOut(e):Void {
		untyped this.__ele__.removeAttribute('tabindex');
		this.__ele__.blur();
		
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_OUT, true, false, e.offsetX, e.offsetY, null, e.ctrlKey, e.altKey, e.shiftKey, false, 0);
		// TODO event.stageX
		// TODO event.stageY
		// TODO relatedObject
		event.target = this;
		this.dispatchEvent(event);
	}
	
	private function onHedgeMouseOver(e):Void {
		this.__ele__.setAttribute('tabindex', '0');
		this.__ele__.focus();
		
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_OVER, true, false, e.offsetX, e.offsetY, null, e.ctrlKey, e.altKey, e.shiftKey, false, 0);
		// TODO event.stageX
		// TODO event.stageY
		// TODO relatedObject
		event.target = this;
		this.dispatchEvent(event);
	}
	
	private function onHedgeMouseUp(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_UP, true, false, e.offsetX, e.offsetY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		// TODO event.stageX
		// TODO event.stageY
		event.target = this;
		this.dispatchEvent(event);
	}
	
}