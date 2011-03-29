/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.events.EventDispatcher;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.text.TextSnapshot;

import hedge.events.internal.DisplayEvent;
import hedge.Setup;
import js.Lib;

using clippings.Twig;
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
		__ele__.appendChild(child.__ele__);
		child.parent = this;
		Setup.triggerResize(this, child.x, child.y, child.width, child.height);
		return child;
	}
	
	public function addChildAt(child:DisplayObject, index:Int):DisplayObject {
		return new DisplayObject();
	}
	
	public function areInaccessibleObjectsUnderPoint(point:Point):Bool {
		return true;
	}
	
	public function contains(child:DisplayObject):Bool {
		return true;
	}
	
	public function getChildAt(index:Int):DisplayObject {
		return new DisplayObject();
	}
	
	public function getChildByName(name:String):DisplayObject {
		return Lib.document.getElementById(name).data('__self__');
	}
	
	public function getChildIndex(child:DisplayObject):Int {
		return 1;
	}
	
	public function getObjectsUnderPoint(point:Point):Array<Dynamic> {
		return [0, 0];
	}
	
	public function removeChild(child:DisplayObject):DisplayObject {
		//child.__jq__.appendTo(Setup.__storage__);
		Setup.__storage__.appendChild(child.__ele__);
		//child.parent = Setup.__default__;
		//__jq__.trigger(Setup.RESIZE_ELEMENT, [ { x:0, y:0, w:0, h:0, p:this } ]);
		return child;
	}
	
	public function removeChildAt(index:Int):DisplayObject {
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
		return numChildren;
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
		this.addEventListener(DisplayEvent.RESIZE_ELEMENT, Setup.resizeDiplay);
	}
	
}