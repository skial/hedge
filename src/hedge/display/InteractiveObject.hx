/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.events.FocusEvent;
import hedge.events.KeyboardEvent;
import hedge.events.MouseEvent;
import hedge.Setup;
import jQuery.JQuery;
import js.Dom;
import js.Lib;

class InteractiveObject extends DisplayObject {
	
	//public var contextMenu:NativeMenu;
	public var doubleClickEnabled:Bool;
	public var focusRect:Dynamic;
	public var mouseEnabled:Bool;
	public var tabEnabled:Bool;
	public var tabIndex:Int;
	
	// both used to track mouseover and mouseout events triggered in onHedgeRollOver/Out.
	private var mouseEnter:Bool;
	private var timeout:Dynamic;

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
		this.__ele__.bind('focusin', onHedgeFocusIn);
		this.__ele__.bind('focusout', onHedgeFocusOut);
		this.__ele__.bind('keydown', onHedgeKeyDown);
		// TODO keyFocusChange
		this.__ele__.bind('keyup', onHedgeKeyUp);
		this.__ele__.bind('mousedown', onHedgeMouseDown);
		// TODO mouseFocusChange
		this.__ele__.bind('mousemove', onHedgeMouseMove);
		
		// removed due to constantly triggered by svg/vml elements. Moved into onHedgeRollOut/Over 
		// using requestTimeout and clearRequestTimeout found in hedge.Setup.
		/*this.__ele__.bind('mouseleave', onHedgeMouseOut);
		this.__ele__.bind('mouseenter', onHedgeMouseOver);*/
		
		this.__ele__.bind('mouseup', onHedgeMouseUp);
		this.__ele__.bind('mousewheel', onHedgeMouseWheel);
		this.__ele__.bind('mouseleave', onHedgeRollOut);
		this.__ele__.bind('mouseenter', onHedgeRollOver);
		// TODO tabChildrenChange
		// TODO tabEnabledChange
		// TODO tabIndexChange
	}
	
	private function onHedgeClick(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.CLICK, 
											true, 
											false, 
											e.layerX, 
											e.layerY, 
											new JQuery(e.relatedTarget).data('__self__'), 
											e.ctrlKey, 
											e.altKey, 
											e.shiftKey, 
											false, 
											0
							));
	}
	
	private function onHedgeDoubleClick(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.DOUBLE_CLICK, 
											true, 
											false, 
											e.layerX, 
											e.layerY, 
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											false,
											0
							));
	}
	
	private function onHedgeFocusIn(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new FocusEvent(
											FocusEvent.FOCUS_IN,
											true,
											false,
											new JQuery(e.relatedTarget).data('__self__'),
											e.shiftKey,
											0
							));
	}
	
	private function onHedgeFocusOut(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new FocusEvent(
											FocusEvent.FOCUS_OUT,
											true,
											false,
											new JQuery(e.relatedTarget).data('__self__'),
											e.shiftKey,
											0
							));
	}
	
	private function onHedgeKeyDown(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new KeyboardEvent(
												KeyboardEvent.KEY_DOWN,
												true,
												false,
												e.which, // TODO need to test - e.charCode
												e.which, // TODO need to test - e.keyCode
												e.which, // TODO not sure - key location on keyboard...
												e.ctrlKey,
												e.altKey,
												e.shiftKey
							));
	}
	
	private function onHedgeKeyUp(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new KeyboardEvent(
												KeyboardEvent.KEY_UP,
												true,
												false,
												e.which,
												e.which,
												e.which,
												e.ctrlKey,
												e.altKey,
												e.shiftKey
							));
	}
	
	private function onHedgeMouseDown(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.MOUSE_DOWN,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											0
							));
	}
	
	private function onHedgeMouseMove(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.MOUSE_MOVE,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											0
							));
	}
	
	private function onHedgeMouseOut(e:jQuery.Event):Void {
		//this.__ele__.removeAttr('tabindex').blur();
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.MOUSE_OUT,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											0
							));
	}
	
	private function onHedgeMouseOver(e:jQuery.Event):Void {
		//this.__ele__.attr('tabindex', 0).focus();
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.MOUSE_OVER,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											0
							));
	}
	
	private function onHedgeMouseUp(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.MOUSE_UP,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											0
							));
	}
	
	private function onHedgeMouseWheel(e:jQuery.Event, delta:Int, deltaX:Int, deltaY:Int):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.MOUSE_WHEEL,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											delta
							));
	}
	
	private function onHedgeRollOut(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		
		this.__ele__.removeAttr('tabIndex').blur();
		
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.ROLL_OUT,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											0
							));
		
		this.onHedgeMouseOut(e);
		this.mouseEnter ? untyped Lib.window.clearRequestTimeout(this.timeout) : return ;
		this.mouseEnter = false;
	}
	
	private function onHedgeRollOver(e:jQuery.Event):Void {
		e.stopImmediatePropagation();
		e.preventDefault();
		
		this.__ele__.attr('tabIndex', '-1').focus();
		
		this.__ele__.trigger(
							new MouseEvent(
											MouseEvent.ROLL_OVER,
											true,
											false,
											e.layerX,
											e.layerY,
											new JQuery(e.relatedTarget).data('__self__'),
											e.ctrlKey,
											e.altKey,
											e.shiftKey,
											Setup.PMBD,
											0
							));
		this.mouseEnter ? return : this.timeout = untyped Lib.window.requestTimeout(callback(onHedgeMouseOver, e), 100);
		this.mouseEnter = true;
	}
	
}