/**
 * ...
 * @author Skial Bainn
 */

package demo.gamepad;

class GamepadInput {
	
	public var 	_isDown		(getIsDown, 		null):Bool;
	public var 	_isPressed	(getIsPressed, 	null):Bool;
	public var 	_isReleased	(getIsReleased, 	null):Bool;
	public var 	_downTicks	(getDownTicks, 	null):Int;
	public var 	_upTicks		(getUpTicks, 		null):Int;
	
	private var mappedKeys:Array<Int>;

	public function new(?keyCode:Int = -1) {
		this._downTicks = this._upTicks = -1;
		mappedKeys = (keyCode > -1) == true ? [keyCode] : [];
	}
	
	public function mapKey(keyCode:Int, ?replaceExisting:Bool = false):Void {
		if (replaceExisting) {
			mappedKeys = [keyCode];
		} else if (Lambda.has(mappedKeys, keyCode) == false) {
			mappedKeys.push(keyCode);
		}
	}
	
	public function unmapKey(keyCode:Int):Void {
		mappedKeys.remove(keyCode);
	}
	
	public function update():Void {
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
	
	public function keyDown(keyCode:Int):Void {
		if (Lambda.has(mappedKeys, keyCode) != false) _isDown = true;
	}
	
	public function keyUp(keyCode:Int):Void {
		if (Lambda.has(mappedKeys, keyCode) != false) _isDown = false;
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