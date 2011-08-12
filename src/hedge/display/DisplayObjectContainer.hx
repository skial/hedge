/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.events.Event;
import hedge.events.EventDispatcher;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.text.TextSnapshot;
import jQuery.JQuery;

import hedge.events.internal.HedgeResizeDisplayEvent;
import hedge.Setup;
import js.Lib;

using Std;

class DisplayObjectContainer extends InteractiveObject {
	
	public var mouseChildren(getMouseChildren,setMouseChildren):Bool;
	public var numChildren(getNumChildren,setNumChildren):Int;
	public var tabChildren(getTabChildren,setTabChildren):Bool;
	public var textSnapshot(getTextSnapshot,null):TextSnapshot;			//read only

	public function new() {
		super();
	}
	
	public function addChild(child:DisplayObject):DisplayObject {
		this.__ele__.append(child.__ele__);
		child.parent = this;
		child.__ele__.trigger(new Event(Event.ADDED, true, false));
		child.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
		return child;
	}
	
	public function addChildAt(child:DisplayObject, index:Int):DisplayObject {
		child.__ele__.trigger(new Event(Event.ADDED, true, false));
		child.__ele__.trigger(new HedgeResizeDisplayEvent(HedgeResizeDisplayEvent.RESIZE_DOM_ELEMENT, false, false));
		return new DisplayObject();
	}
	
	public function areInaccessibleObjectsUnderPoint(point:Point):Bool {
		return true;
	}
	
	public function contains(child:DisplayObject):Bool {
		return true;
	}
	
	public function getChildAt(index:Int):DisplayObject {
		return cast(new JQuery(this.__ele__.children().get(index)).data('__self__'), DisplayObject);
	}
	
	public inline function getChildByName(name:String):DisplayObject {
		return cast(new JQuery(Lib.document.getElementById(name)).data('__self__'), DisplayObject);
	}
	
	public function getChildIndex(child:DisplayObject):Int {
		return 1;
	}
	
	public function getObjectsUnderPoint(point:Point):Array<Dynamic> {
		return [0, 0];
	}
	
	public function removeChild(child:DisplayObject):DisplayObject {
		child.__ele__.trigger(new Event(Event.REMOVED, true, false));
		Setup.__storage__.appendChild(child.__node__);
		child.parent = this.stage;
		return child;
	}
	
	public function removeChildAt(index:Int):DisplayObject {
		this.__ele__.trigger(new Event(Event.REMOVED, true, false));
		return new DisplayObject();
	}
	
	public function setChildIndex(child:DisplayObject, index:Int) {
		
	}
	
	public function swapChildren(child1:DisplayObject, child2:DisplayObject) {
		
	}
	
	public function swapChildrenAt(index1:Int, index2:Int) {
		
	}
	
	/* INTERNAL FUNCTIONS */
	
	private function getMouseChildren():Bool {
		return mouseChildren;
	}
	
	private function setMouseChildren(value:Bool):Bool {
		mouseChildren = value;
		return mouseChildren;
	}
	
	private function getNumChildren():Int {
		return this.__ele__.children().length;
	}
	
	private function setNumChildren(value:Int):Int {
		numChildren = value;
		return numChildren;
	}
	
	private function getTabChildren():Bool {
		return tabChildren;
	}
	
	private function setTabChildren(value:Bool):Bool {
		tabChildren = value;
		return tabChildren;
	}
	
	private function getTextSnapshot():TextSnapshot {
		return textSnapshot;
	}
	
	//	OVERRIDE
	
	override private function initialize():Void 	{
		super.initialize();
		this.initializeDisplayObjectContainer();
	}
	
	//	INTERNAL
	
	private function initializeDisplayObjectContainer():Void {
		
	}
	
}