/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;

import hedge.display.DisplayObject;
import hedge.events.Event;
import hedge.geom.Rectangle;
import hedge.Setup;
import hedge.text.TextSnapshot;
import clippings.Twig;
import js.Lib;

class Stage extends DisplayObjectContainer {
	
	public var align:String;
	public var displayState:String;
	public var focus:InteractiveObject;
	public var frameRate:Float;
	public var fullScreenHeight:Int;
	public var fullScreenSourceRect:Rectangle;
	public var fullScreenWidth:Int;
	public var quality:String;
	public var scaleMode:String;
	public var showDefaultContextMenu:Bool;
	public var stageFocusRect:Bool;
	public var stageHeight:Int;
	public var stageWidth:Int;

	public function new() {
		super();
	}
	
	public function invalidate() {
		
	}
	
	public function isFocusInaccessible():Bool {
		return true;
	}
	
	/* OVERRIDE METHODS */
	
	override private function initialize():Void {
		this.initializeStage();
		this.__ancestorPath__ = Setup.createAncestorPath(this);
		this.initializeInterativeObject();
		this.initializeDisplayObjectContainer();
	}
	
	//	INTERNAL METHODS
	
	private function initializeStage():Void {
		this.__ele__ = Setup.__ele__;
		this.__originalName__ = 'Stage';
	}
	
}