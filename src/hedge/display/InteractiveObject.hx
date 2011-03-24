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
	
	
	//	INTERNAL METHODS
	
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
		untyped console.log(e);
		var event:FocusEvent = new FocusEvent();
	}
	
	private function onHedgeFocusOut(e):Void {
		
	}
	
	private function onHedgeKeyDown(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_DOWN, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		cast(this, DisplayObject).dispatchEvent(event);
	}
	
	private function onHedgeKeyUp(e):Void {
		var event:KeyboardEvent = new KeyboardEvent(KeyboardEvent.KEY_UP, true, false, e.charCode, e.keyCode, e.keyLocation, e.ctrlKey, e.altKey, e.shiftKey);
		event.target = this;
		cast(this, DisplayObject).dispatchEvent(event);
	}
	
	private function onHedgeMouseDown(e):Void {
		
	}
	
	private function onHedgeMouseMove(e):Void {
		
	}
	
	private function onHedgeMouseOut(e):Void {
		untyped __ele__.removeAttribute('tabindex');
		__ele__.blur();
	}
	
	private function onHedgeMouseOver(e):Void {
		__ele__.setAttribute('tabindex', '0');
		__ele__.focus();
	}
	
	private function onHedgeMouseUp(e):Void {
		
	}
	
}