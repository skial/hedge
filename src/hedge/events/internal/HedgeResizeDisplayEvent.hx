/**
 * ...
 * @author Skial Bainn
 */

package hedge.events.internal;
import hedge.D;
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
		D.t(' | EVENT HANDLER TRIGGERED');
		D.t(' | HedgeResizeDisplayEvent::resizeDisplayObject');
		D.t(' | event type : ' + e.type);
		D.t(' | target name : ' + cast(e.target, Sprite).name);
		#end
		
		var target:Sprite = cast(e.target, Sprite);
		var rect:Rectangle = e.rectangle;
		var noffsetX:Float = 0;
		var noffsetY:Float = 0;
		var newWidth:Float = 0;
		var newHeight:Float = 0;
		
		// TODO the  + 1 is temp I hope... it fixes a problem with the current test case
		noffsetX = (rect.x < 0 ? -rect.x + 1 : 0);
		noffsetY = (rect.y < 0 ? -rect.y + 1 : 0);
		
		target.__offsetX__ = noffsetX > target.__offsetX__ ? noffsetX : target.__offsetX__;
		target.__offsetY__ = noffsetY > target.__offsetY__ ? noffsetY : target.__offsetY__;
		
		/*if (target.graphics != null) {
			trace('move svg');
			target.graphics.__set__.translate(noffsetX, noffsetY);
		}*/
		
		newWidth = rect.width + target.__offsetX__ + (rect.x > 0 ? rect.x : 0);
		newHeight = rect.height + target.__offsetY__ + (rect.y > 0 ? rect.y : 0);
		
		if (target.width < newWidth) {
			
			target.width = target.width + (newWidth - target.width);
			
		}
		
		if (target.height < newHeight) {
			
			target.height = target.height + (newHeight - target.height);
			
		}
		
		#if HEDGE_EVENT_DEBUG
		D.t(' | rect : ' + Std.string(rect));
		D.t(' | noffsetX : ' + noffsetX);
		D.t(' | noffsetY : ' + noffsetY);
		D.t(' | target.__offsetX__ : ' + target.__offsetX__);
		D.t(' | target.__offsetY__ : ' + target.__offsetY__);
		D.t(' | newWidth : ' + newWidth);
		D.t(' | newHeight : ' + newHeight);
		D.t('---');
		#end
	}
	
}