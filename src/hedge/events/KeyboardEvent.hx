/**
 * ...
 * @author Skial Bainn
 */

package hedge.events;

class KeyboardEvent extends Event {
	
	public var altKey:Bool;
	public var charCode:Int;
	public var ctrlKey:Bool;
	public var keyCode:Int;
	public var keyLocation:Int;
	public var shiftKey:Bool;
	
	public static inline var KEY_DOWN:String = 'keyDown';
	public static inline var KEY_UP:String = 'keyUp';

	public function new(	type:String,
								?bubbles:Bool = true,
								?cancelable:Bool = false,
								?charCodeValue:Int = 0,
								?keyCodeValue:Int = 0,
								?keyLocationValue:Int = 0,
								?ctrlKeyValue:Bool = false,
								?altKeyValue:Bool = false,
								?shiftKeyValue:Bool = false/*,
								?controlKeyValue:Bool = false,
								?commandKeyValue:Bool = false*/) {
		this.type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
		this.charCode = charCodeValue;
		this.keyCode = keyCodeValue;
		this.keyLocation = keyLocationValue;
		this.ctrlKey = ctrlKeyValue;
		this.altKey = altKeyValue;
		this.shiftKey = shiftKeyValue;
		super(this.type, this.bubbles, this.cancelable);
	}
	
	override public function clone():Event {
		return new KeyboardEvent(	this.type, this.bubbles, this.cancelable, this.charCode, this.keyCode, this.keyLocation, this.ctrlKey, this.altKey,
											this.shiftKey); //TODO need to add controlKeyValue and commandKeyValue from constructor
	}
	
	/*override public function toString():String {
		return '';
	}*/
	
	public function updateAfterEvent():Void {
		
	}
	
}