/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.display.DisplayObject;
import hedge.events.Event;
import hedge.geom.Rectangle;
import hedge.text.TextSnapshot;
import hedge.Twig;
import hedge.TwigType;

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
		/* this is a rubbish way to stop the stage from creating another
		 * div with the same name but allowing full access to all methods
		 * and properties
		 */ 
		if (1 > 2) {
			super();
		}
		__originalName__ = 'Stage';
		//__jq__ = new JQuery('div#Stage');
		__jq__ = new Twig('Stage', TwigType.FIND_ID);
	}
	
	public function invalidate() {
		
	}
	
	public function isFocusInaccessible():Bool {
		return true;
	}
	
	/* OVERRIDE FUNCTIONS */
	
	/*override public function addChild(child:DisplayObject):DisplayObject {
		new JQuery('<div></div>').attr('id', child.name).css(child.__values__()).appendTo('div#' + this.name);
		child.parent = this;
		return child;
	}*/
	
	/*override public function addChildAt(child:DisplayObject, index:Int):DisplayObject {
		return super.addChildAt(child, index);
	}
	
	override public function removeChild(child:DisplayObject):DisplayObject {
		return super.removeChild(child);
	}
	
	override public function removeChildAt(index:Int):DisplayObject {
		return super.removeChildAt(index);
	}*/
	
}