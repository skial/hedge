/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;
import hedge.display.InteractiveObject;

class MouseEvent extends Event {
	
	public var altKey:Bool;
	public var buttonDown:Bool;
	public var ctrlKey:Bool;
	public var delta:Int;
	public var localX:Float;
	public var localY:Float;
	public var relatedObject:InteractiveObject;
	public var shiftKey:Bool;
	public var stageX:Float;	//	read only - todo
	public var stageY:Float;	//	read only - todo

	public function new(	type:String, 
								?bubbles:Bool = true,
								?cancelable:Bool = false,
								?localX:Float = null,
								?localY:Float = null,
								?relatedObject:InteractiveObject = null,
								?ctrlKey:Bool = false,
								?altKey:Bool = false,
								?shiftKey:Bool = false,
								?buttonDown:Bool = false,
								?delta:Int = 0,
								?commandKey:Bool = false,
								?controlKey:Bool = false,
								?clickCount:Int = 0) {
		
		this.type = type;
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
		this.commandKey = commandKey;
		this.controlKey = controlKey;
		this.clickCount = clickCount;
		super(this.type, this.bubbles, this.cancelable);
	}
	
	override public function clone():Event {
		return new MouseEvent(	this.type, this.bubbles, this.cancelable, this.localX, this.localY, this.relatedObject, this.ctrlKey, this.altKey,
										this.shiftKey, this.buttonDown, this.delta, this.commandKey, this.controlKey, this.clickCount);
	}
	
	/*override public function toString():String {
		return '';
	}*/
	
	public function updateAfterEvent():Void {
		
	}
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'localX', 'localY', 'shiftKey', 'commandKey', 'controlKey', 'stageX', 'stageY', 'target')
	public static var CLICK:String = 'click';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'localX', 'localY', 'shiftKey', 'commandKey', 'controlKey', 'stageX', 'stageY', 'target')
	public static var DOUBLE_CLICK:String = 'doubleClick';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'localX', 'localY', 'shiftKey', 'commandKey', 'controlKey', 'clickCount', 'stageX', 'stageY', 'target')
	public static var MOUSE_DOWN:String = 'mouseDown';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'localX', 'localY', 'shiftKey', 'stageX', 'stageY', 'target')
	public static var MOUSE_MOVE:String = 'mouseMove';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'relatedObject', 'localX', 'localY', 'shiftKey', 'stageX', 'stageY', 'target')
	public static var MOUSE_OUT:String = 'mouseOut';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'relatedObject', 'localX', 'localY', 'shiftKey', 'stageX', 'stageY', 'target')
	public static var MOUSE_OVER:String = 'mouseOver';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'localX', 'localY', 'shiftKey', 'commandKey', 'controlKey', 'clickCount', 'stageX', 'stageY', 'target')
	public static var MOUSE_UP:String = 'mouseUp';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'delta', 'localX', 'localY', 'shiftKey', 'stageX', 'stageY', 'target')
	public static var MOUSE_WHEEL:String = 'mouseWheel';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'relatedObject', 'localX', 'localY', 'shiftKey', 'stageX', 'stageY', 'target')
	public static var ROLL_OUT:String = 'rollOut';
	
	@properties('bubbles', 'buttonDown', 'cancelable', 'ctrlKey', 'currentTarget', 'relatedObject', 'localX', 'localY', 'shiftKey', 'stageX', 'stageY', 'target')
	public static var ROLL_OVER:String = 'rollOver';
	
}