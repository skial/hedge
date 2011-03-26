/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.events.FocusEvent;
import hedge.events.KeyboardEvent;
import hedge.events.MouseEvent;

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
		untyped __ele__.onclick = onHedgeClick;
		untyped __ele__.ondblclick = onHedgeDoubleClick;
		untyped __ele__.onfocus = onHedgeFocusIn;
		untyped __ele__.onblur = onHedgeFocusOut;
		untyped __ele__.onkeydown = onHedgeKeyDown;
		// TODO keyFocusChange
		untyped __ele__.onkeyup = onHedgeKeyUp;
		untyped __ele__.onmousedown = onHedgeMouseDown;
		// TODO mouseFocusChange
		untyped __ele__.onmousemove = onHedgeMouseMove;
		untyped __ele__.onmouseout = onHedgeMouseOut;
		untyped __ele__.onmouseover = onHedgeMouseOver;
		untyped __ele__.onmouseup = onHedgeMouseUp;
		// TODO mouseWheel
		// TODO rollOut same as mouseOut ?
		// TODO rollOver same as mouseOver ?
		// TODO tabChildrenChange
		// TODO tabEnabledChange
		// TODO tabIndexChange
	}
	
	private function onHedgeClick(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.CLICK, true, false, e.layerX, e.layerY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		event.target = this;
		// TODO event.stageX
		// TODO event.stageY
		dispatchEvent(event);
	}
	
	private function onHedgeDoubleClick(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.DOUBLE_CLICK, true, false, e.layerX, e.layerY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		event.target = this;
		// TODO event.stageX
		// TODO event.stageY
		dispatchEvent(event);
	}
	
	private function onHedgeFocusIn(e):Void {
		var event:FocusEvent = new FocusEvent(FocusEvent.FOCUS_IN, true, false, null, false, 0);
		event.target = this;
		// TODO relatedObject
		dispatchEvent(event);
	}
	
	private function onHedgeFocusOut(e):Void {
		var event:FocusEvent = new FocusEvent(FocusEvent.FOCUS_OUT, true, false, null, false, 0);
		event.target = this;
		// TODO relatedObject
		dispatchEvent(event);
	}
	
	private function onHedgeKeyDown(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_DOWN, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		dispatchEvent(event);
	}
	
	private function onHedgeKeyUp(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_UP, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		dispatchEvent(event);
	}
	
	private function onHedgeMouseDown(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_DOWN, true, false, e.layerX, e.layerY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		// TODO event.stageX
		// TODO event.stageY
		event.target = this;
		dispatchEvent(event);
	}
	
	private function onHedgeMouseMove(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_MOVE, true, false, e.layerX, e.layerY, null, e.ctrlKey, e.altKey, e.shiftKey, false, 0);
		// TODO event.stageX
		// TODO event.stageY
		event.target = this;
		dispatchEvent(event);
	}
	
	private function onHedgeMouseOut(e):Void {
		untyped __ele__.removeAttribute('tabindex');
		__ele__.blur();
		
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_OUT, true, false, e.layerX, e.layerY, null, e.ctrlKey, e.altKey, e.shiftKey, false, 0);
		// TODO event.stageX
		// TODO event.stageY
		// TODO relatedObject
		event.target = this;
		dispatchEvent(event);
	}
	
	private function onHedgeMouseOver(e):Void {
		__ele__.setAttribute('tabindex', '0');
		__ele__.focus();
		
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_OVER, true, false, e.layerX, e.layerY, null, e.ctrlKey, e.altKey, e.shiftKey, false, 0);
		// TODO event.stageX
		// TODO event.stageY
		// TODO relatedObject
		event.target = this;
		dispatchEvent(event);
	}
	
	private function onHedgeMouseUp(e):Void {
		var event:MouseEvent = new MouseEvent(MouseEvent.MOUSE_UP, true, false, e.layerX, e.layerY, null, e.ctrlKey, e.altKey, e.shiftKey, true, 0);
		// TODO event.stageX
		// TODO event.stageY
		event.target = this;
		dispatchEvent(event);
	}
	
}