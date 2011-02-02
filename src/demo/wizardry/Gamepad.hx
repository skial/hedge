/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

import hedge.display.Stage;
import hedge.events.EventDispatcher;
import hedge.events.KeyboardEvent;
import hedge.ui.Keyboard;

class Gamepad extends EventDispatcher {
	
	// STATE:
	
	public var up:Bool;
	public var down:Bool;
	public var left:Bool;
	public var right:Bool;
	
	public var upLeft:Bool;
	public var downLeft:Bool;
	public var upRight:Bool;
	public var downRight:Bool;
	
	public var fire1:Bool;
	public var fire2:Bool;
	
	public var any:Bool;
	
	public var x:Float;
	public var y:Float;
	
	public var angle:Float;
	
	// CONFIGURATION:
	
	public var leftKey:Int;
	public var rightKey:Int;
	public var downKey:Int;
	public var upKey:Int;
	public var jumpKey:Int;
	public var fire1Key:Int;
	public var fire2Key:Int;
	public var fire3Key:Int;
	public var pauseKey:Int;

	public function new(stage:Stage) {
		this.leftKey = Keyboard.LEFT;
		this.rightKey = Keyboard.RIGHT;
		this.downKey = Keyboard.DOWN;
		this.upKey = Keyboard.UP;
		this.fire1Key = Keyboard.SPACE;
		this.fire2Key = Keyboard.ENTER;
		
		this.x = this.y = 0;
		
		stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown, false, 0, true);
		stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp, false, 0, true);
		
		super();
	}
	
	private function onKeyDown(e:KeyboardEvent):Void {
		switch (e.keyCode) {
			case upKey:
				up = true;
			case downKey:
				down = true;
			case leftKey:
				left = true;
			case rightKey:
				right = true;
			case fire1Key:
				fire1 = true;
			case fire2Key:
				fire2 = true;
			default:
				// Not a game key
		}
		
		updateState();
	}
	
	private function onKeyUp(e:KeyboardEvent):Void {
		switch (e.keyCode) {
			case upKey:
				up = false;
			case downKey:
				down = false;
			case leftKey:
				left = false;
			case rightKey:
				right = false;
			case fire1Key:
				fire1 = false;
			case fire2Key:
				fire2 = false;
			default:
				// Not a game key
		}
		
		updateState();
	}
	
	private function updateState():Void {
		upLeft = up && left;
		upRight = up && right;
		downLeft = down && left;
		downRight = down && right;
		
		any = up || down || right || left;
		
		if (up) {
			y = -1;
		} else if (down) {
			y = 1;
		} else {
			y = 0;
		}
		
		if (left) {
			x = -1;
		} else if (right) {
			x = 1;
		} else {
			x = 0;
		}
		
		angle = Math.atan2(x, y);
	}
	
}