/**
 * ...
 * @author Skial Bainn
 */

package hedge.events.internal;
import hedge.events.Event;
import hedge.geom.Rectangle;

class DisplayEvent extends Event {
	
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
	
}