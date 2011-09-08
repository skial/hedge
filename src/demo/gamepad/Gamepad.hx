/**
 * ...
 * @author Skial Bainn
 */

package demo.gamepad;
import demo.cheezeworld.utils.KeyCode;
import hedge.events.Event;
import hedge.events.KeyboardEvent;
import hedge.ui.Keyboard;
import hedge.display.Stage;
import hedge.display.DisplayObject;

class Gamepad {
	
	//	INPUTS:
	
	public var _up				(getUp, 				null):GamepadInput;
	public var _down			(getDown,			null):GamepadInput;
	public var _left			(getLeft, 			null):GamepadInput;
	public var _right			(getRight, 			null):GamepadInput;
	public var _fire1			(getFire1, 			null):GamepadInput;
	public var _fire2			(getFire2, 			null):GamepadInput;
	public var _inputs:Array<GamepadInput>;
	
	// MULTI-INPUTS (combines 2 or more inputs into 1, e.g. _upLeft requires both up and left to be pressed)
		
	public var _upLeft		(getUpLeft, 		null):GamepadMultiInput;
	public var _downLeft		(getDownLeft, 		null):GamepadMultiInput;
	public var _upRight		(getUpRight, 		null):GamepadMultiInput;
	public var _downRight	(getDownRight, 	null):GamepadMultiInput;
	public var _anyDirection(getAnyDirection, null):GamepadMultiInput;
	public var _multiInputs:Array<GamepadMultiInput>;
	
	// THE "STICK"
	
	public var _x				(getX, 				setX):Float;
	public var _y				(getY, 				setY):Float;
	public var _targetX:Float;
	public var _targetY:Float;
	public var _angle			(getAngle, 			null):Float;
	public var _rotation		(getRotation, 		null):Float;
	public var _magnitude	(getMagnitude, 	null):Float;
	
	// Prevents diagonal movement being faster than horizontal or vertical movement. Use for top-down view games.
	public var isCircle:Bool;
	
	// Simple ease-out speed (range 0 to 1). Pass value of 1 to prevent easing.
	public var ease:Float;

	public function new(stage:Stage, isCircle:Bool, ?ease:Float = 0.2, ?autoStep:Bool = true) {
		
		this._x = this._y = this._targetX = this._targetY = this._angle = this._rotation = this._magnitude = 0;
		
		this.isCircle = isCircle;
		this.ease = ease;
		
		_up = new GamepadInput();
		_down = new GamepadInput();
		_left = new GamepadInput();
		_right = new GamepadInput();
		_fire1 = new GamepadInput();
		_fire2 = new GamepadInput();
		
		_inputs = [_up, _down, _left, _right, _fire1, _fire2];
		
		_upLeft = new GamepadMultiInput([_up, _left], false);
		_upRight = new GamepadMultiInput([_up, _right], false);
		_downLeft = new GamepadMultiInput([_down, _left], false);
		_downRight = new GamepadMultiInput([_down, _right], false);
		_anyDirection = new GamepadMultiInput([_up, _down, _left, _right], true);
		
		_multiInputs = [_upLeft, _upRight, _downLeft, _downRight, _anyDirection];
		
		useArrows();
		useControlSpace();
		
		stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
		stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp);
		
		if (autoStep) {
			stage.addEventListener(Event.ENTER_FRAME, onEnterFrame);
		}
	}
	
	//	DIRECTION PRESETS
	
	public function mapDirection(up:Int, down:Int, left:Int, right:Int, ?replaceExisting:Bool = false):Void {
		_up.mapKey(up, replaceExisting);
		_down.mapKey(down, replaceExisting);
		_left.mapKey(left, replaceExisting);
		_right.mapKey(right, replaceExisting);
	}
	
	public function useArrows(?replaceExisting:Bool = false):Void {
		mapDirection(Keyboard.UP, Keyboard.DOWN, Keyboard.LEFT, Keyboard.RIGHT, replaceExisting);
	}
	
	public function useWASD(?replaceExisting:Bool = false):Void {
		mapDirection(KeyCode.W, KeyCode.S, KeyCode.A, KeyCode.D, replaceExisting);
	}
	
	public function useIJKL(?replaceExisting:Bool = false):Void {
		mapDirection(KeyCode.I, KeyCode.K, KeyCode.J, KeyCode.L, replaceExisting);
	}
	
	public function useZQSD(?replaceExisting:Bool = false):Void {
		mapDirection(KeyCode.Z, KeyCode.S, KeyCode.Q, KeyCode.D, replaceExisting);
	}
	
	public function mapFireButtons(fire1:Int, fire2:Int, ?replaceExisting:Bool = false):Void {
		_fire1.mapKey(fire1, replaceExisting);
		_fire2.mapKey(fire2, replaceExisting);
	}
	
	public function useChevrons(?replaceExisting:Bool = false):Void {
		mapFireButtons(KeyCode.LESS_THAN, KeyCode.GREATER_THAN, replaceExisting);
	}
	
	public function useGH(?replaceExisting:Bool = false):Void {
		mapFireButtons(KeyCode.G, KeyCode.H, replaceExisting);
	}
	
	public function useZX(?replaceExisting:Bool = false):Void {
		mapFireButtons(KeyCode.Z, KeyCode.X, replaceExisting);
	}
	
	public function useYX(?replaceExisting:Bool = false):Void {
		mapFireButtons(KeyCode.Y, KeyCode.X, replaceExisting);
	}
	
	public function useControlSpace(?replaceExisting:Bool = false):Void {
		mapFireButtons(KeyCode.CONTROL, KeyCode.SPACEBAR, replaceExisting);
	}
	
	public function step():Void {
		_x += (_targetX - _x) * ease;
		_y += (_targetY - _y) * ease;
		
		_magnitude = Math.sqrt((_x * _x) + (_y * _y));
		
		_angle = Math.atan2(_x, _y);
		
		_rotation = _angle * 57.29577951308232;
		
		//for each (var gamepadInput:GamepadInput in _inputs) gamepadInput.update();
		for (i in 0..._inputs.length) {
			_inputs[i].update();
		}
	}
	
	// SETTERS:
	
	/*
	* The horizontal component of the direction pad, value between 0 and 1.
	*/
	public function setX(value:Float):Float { 
		_x = value;
		_targetX = value;
		_angle = Math.atan2(_x, _y);
		_rotation = _angle * 57.29577951308232;
		return _x;
	}
	
	/*
	* The vertical component of the direction pad, value between 0 and 1.
	*/
	public function setY(value:Float):Float { 
		_y = value;
		_targetY = value;
		_angle = Math.atan2(_x, _y);
		_rotation = _angle * 57.29577951308232;
		return _y;
	}
	
	// GETTERS:
	
	/*
	* The angle of the direction pad in radians.
	*/
	public function getAngle():Float { return _angle; }
	
	/*
	* The horizontal component of the direction pad, value between 0 and 1.
	*/
	public function getX():Float { return _x; }
	
	/*
	* The vertical component of the direction pad, value between 0 and 1.
	*/
	public function getY():Float { return _y; }
	
	/*
	* A GamepadInput representing the up/north direction. Configure with its mapKey and unmapKey functions. Get state information from isDown, isPressed, isReleased, downTicks and upTicks.  
	*/
	public function getUp():GamepadInput { return _up; }
	
	/*
	* A GamepadInput representing the down/south direction. Configure with its mapKey and unmapKey functions. Get state information from isDown, isPressed, isReleased, downTicks and upTicks.  
	*/
	public function getDown():GamepadInput { return _down; }
	
	/*
	* A GamepadInput representing the left/west direction. Configure with its mapKey and unmapKey functions. Get state information from isDown, isPressed, isReleased, downTicks and upTicks.  
	*/
	public function getLeft():GamepadInput { return _left; }
	
	/*
	* A GamepadInput representing the right/east direction. Configure with its mapKey and unmapKey functions. Get state information from isDown, isPressed, isReleased, downTicks and upTicks.  
	*/
	public function getRight():GamepadInput { return _right; }
	
	/*
	* A GamepadMultiInput representing the up-left/north-west direction. Get state information from isDown, isPressed, isReleased, downTicks and upTicks. End-users should not need to configure this input.
	*/
	public function getUpLeft():GamepadMultiInput { return _upLeft; }
	
	/*
	* A GamepadMultiInput representing the down-left/south-west direction. Get state information from isDown, isPressed, isReleased, downTicks and upTicks. End-users should not need to configure this input.
	*/
	public function getDownLeft():GamepadMultiInput { return _downLeft; }
	
	/*
	* A GamepadMultiInput representing the up-right/north-east direction. Get state information from isDown, isPressed, isReleased, downTicks and upTicks. End-users should not need to configure this input.
	*/
	public function getUpRight():GamepadMultiInput { return _upRight; }
	
	/*
	* A GamepadMultiInput representing the down-right/south-east direction. Get state information from isDown, isPressed, isReleased, downTicks and upTicks. End-users should not need to configure this input.
	*/
	public function getDownRight():GamepadMultiInput { return _downRight; }
	
	/*
	* A GamepadInput representing the primary fire button. Configure with its mapKey and unmapKey functions. Get state information from isDown, isPressed, isReleased, downTicks and upTicks.  
	*/
	public function getFire1():GamepadInput { return _fire1; }
	
	/*
	* A GamepadInput representing the secondary fire button. Configure with its mapKey and unmapKey functions. Get state information from isDown, isPressed, isReleased, downTicks and upTicks.  
	*/
	public function getFire2():GamepadInput { return _fire2; }
	
	/*
	* A special GamepadMultiInput representing whether any direction is pressed. Get state information from isDown, isPressed, isReleased, downTicks and upTicks. End-users should not need to configure this input.
	*/
	public function getAnyDirection():GamepadMultiInput { return _anyDirection; }
	
	/*
	 * The length/magnitude of the direction pad, between 0 and 1.
	*/
	public function getMagnitude():Float { return _magnitude; }
	
	/*
	 * the angle of the direction pad in degrees, between 0 and 360.
	*/
	public function getRotation():Float { return _rotation; }
	
	// PROTECTED METHODS:
	
	private function onEnterFrame(event:Event<DisplayObject>):Void {
		step();
	}
	
	private function onKeyDown(event:KeyboardEvent):Void {
		//for each (var gamepadInput:GamepadInput in _inputs) gamepadInput.keyDown(event.keyCode);
		for (i in 0..._inputs.length) {
			_inputs[i].keyDown(event.keyCode);
		}
		
		updateState();
	}
	
	private function onKeyUp(event:KeyboardEvent):Void {
		//for each (var gamepadInput:GamepadInput in _inputs) gamepadInput.keyUp(event.keyCode);
		for (i in 0..._inputs.length) {
			_inputs[i].keyUp(event.keyCode);
		}
		
		updateState();
	}
	
	private function updateState():Void {
		//for each (var gamepadMultiInput:GamepadMultiInput in _multiInputs) gamepadMultiInput.update();
		for (i in 0..._multiInputs.length) {
			_multiInputs[i].update();
		}
		
		if (_up._isDown) {
			_targetY = -1;
		}
		else if (_down._isDown) {
			_targetY = 1;
		}
		else {
			_targetY = 0;
		}
		
		if (_left._isDown) {
			_targetX = -1;
		}
		else if (_right._isDown) {
			_targetX = 1;
		}
		else {
			_targetX = 0;
		}
		
		var _targetAngle:Float = Math.atan2(_targetX, _targetY);
		
		if (isCircle && _anyDirection._isDown) {
			_targetX = Math.sin(_targetAngle);
			_targetY = Math.cos(_targetAngle);
		}
	}
}