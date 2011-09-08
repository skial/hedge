/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.display.InteractiveObject;
import hedge.display.DisplayObject;

class MouseEvent extends Event<DisplayObject> {
	
	//public var altKey:Bool;	// already in jQuery.Event
	public var buttonDown:Bool;
	//public var ctrlKey:Bool;	// already in jQuery.Event
	public var delta:Int;
	public var localX:Float;
	public var localY:Float;
	public var relatedObject:InteractiveObject;
	//public var shiftKey:Bool;	// already in jQuery.Event
	public var stageX:Float;	//	read only - todo
	public var stageY:Float;	//	read only - todo

	public function new(type:String, 
						?bubbles:Bool = true,
						?cancelable:Bool = false,
						?localX:Float = null,
						?localY:Float = null,
						?relatedObject:InteractiveObject = null,
						?ctrlKey:Bool = false,
						?altKey:Bool = false,
						?shiftKey:Bool = false,
						?buttonDown:Bool = false,
						?delta:Int = 0) {
		
		//this._type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
		this.localX = localX;
		this.localY = localY;
		this.relatedObject = relatedObject;
		this.ctrlKey = ctrlKey;
		this.altKey = altKey;
		this.shiftKey = shiftKey;
		this.buttonDown = buttonDown;
		this.delta = delta;
		super(type, this.bubbles, this.cancelable);
	}
	
	override public function clone():Event<DisplayObject> {
		return new MouseEvent(this.type, this.bubbles, this.cancelable, this.localX, this.localY, this.relatedObject, this.ctrlKey, this.altKey,
										this.shiftKey, this.buttonDown, this.delta);
	}
	
	/*override public function toString():String {
		return '';
	}*/
	
	public function updateAfterEvent():Void {
		
	}
	
	public static inline var CLICK:String = 'click';
	public static inline var DOUBLE_CLICK:String = 'doubleClick';
	public static inline var MOUSE_DOWN:String = 'mouseDown';
	public static inline var MOUSE_MOVE:String = 'mouseMove';
	public static inline var MOUSE_OUT:String = 'mouseOut';
	public static inline var MOUSE_OVER:String = 'mouseOver';
	public static inline var MOUSE_UP:String = 'mouseUp';
	public static inline var MOUSE_WHEEL:String = 'mouseWheel';
	public static inline var ROLL_OUT:String = 'rollOut';
	public static inline var ROLL_OVER:String = 'rollOver';
	
}