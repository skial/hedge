/**
 * ...
 * @author Skial Bainn
 */

package hedge.events.internal;
import hedge.display.DisplayObject;
import hedge.display.Sprite;
import hedge.events.Event;
import hedge.geom.Rectangle;

class HedgeResizeDisplayEvent extends Event {
	
	public var rectangle:Rectangle;

	public function new(	type:String, 
								?bubbles:Bool = false, 
								?cancelable:Bool = false,
								?rectangle:Rectangle) {
		super(this.type, this.bubbles, this.cancelable);
		this.type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
		this.rectangle = rectangle;
	}
	
	public static inline var RESIZE_ELEMENT:String = 'hedgeResizeDisplay';
	
	public static function resizeDisplayObject(e:HedgeResizeDisplayEvent):Void {
		#if HEDGE_EVENT_DEBUG
		trace(' | EVENT HANDLER TRIGGERED');
		trace(' | HedgeResizeDisplayEvent.resizeGraphicParent');
		trace(' | event type : ' + e.type);
		trace(' | target name : ' + cast(e.target, Sprite).name);
		trace('---');
		#end
		
		var target:Sprite = cast(e.target, Sprite);
		var rect:Rectangle = e.rectangle;
		trace(target.name);
		// the  + 1 is temp I hope... it fixes a problem with a current test case
		/*var noffsetX:Float = (rect.x < 0 ? -rect.x : 0) + 1;
		var noffsetY:Float = (rect.y < 0 ? -rect.x : 0) + 1;
		
		target.__offsetX__ = noffsetX > target.__offsetX__ ? noffsetX : target.__offsetX__;
		target.__offsetY__ = noffsetY > target.__offsetY__ ? noffsetY : target.__offsetY__;
		
		if (target.graphics != null) {
			target.graphics.__element__.translate(noffsetX, noffsetY);
		}*/
		
		var newWidth = rect.width + rect.x;
		var newHeight = rect.height + rect.y;
		
		if (target.width < newWidth) {
			
			target.width = target.width + (newWidth - target.width);
			
		}
		
		if (target.height < newHeight) {
			
			target.height = target.height + (newHeight - target.height);
			
		}
	}
	
}