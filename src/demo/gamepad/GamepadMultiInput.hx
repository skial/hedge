/**
 * ...
 * @author Skial Bainn
 */

package demo.gamepad;

class GamepadMultiInput {
	
	public var _isDown		(getIsDown, 		null):Bool;
	public var _isPressed	(getIsPressed, 	null):Bool;
	public var _isReleased	(getIsReleased, 	null):Bool;
	public var _downTicks	(getDownTicks, 	null):Int;
	public var _upTicks		(getUpTicks, 		null):Int;
	private var isOr:Bool;
	private var inputs:Array<GamepadInput>;

	public function new(inputs:Array<GamepadInput>, isOr:Bool) {
		this._downTicks = this._upTicks = -1;
		this.inputs = inputs;
		this.isOr = isOr;
	}
	
	public function update():Void {
		if (isOr) {
			_isDown = false;
			for (i in 0...inputs.length) {
				if (inputs[i]._isDown) {
					_isDown = true;
					break;
				}
			}
		} else {
			_isDown = true;
			
			for (i in 0...inputs.length) {
				if (!inputs[i]._isDown) {
					_isDown = false;
					break;
				}
			}
		}
		
		if (_isDown) {
			_isPressed = _downTicks == -1;
			_isReleased = false;
			_downTicks++;
			_upTicks = -1;
		} else {
			_isReleased = _upTicks == -1;
			_isPressed = false;
			_upTicks++;
			_downTicks = -1;
		}
	}
	
	public function getIsDown():Bool {
		return _isDown;
	}
	
	public function getIsPressed():Bool {
		return _isPressed;
	}
	
	public function getIsReleased():Bool {
		return _isReleased;
	}
	
	public function getDownTicks():Int {
		return _downTicks;
	}
	
	public function getUpTicks():Int {
		return _upTicks;
	}
	
}