/**
 * ...
 * @author Skial Bainn
 */

package demo.gamepad;
import hedge.display.Sprite;
import hedge.events.Event;

class GamepadView extends Sprite {
	
	private var ball:Sprite;
	private var button1:Sprite;
	private var button2:Sprite;
	private var up:Sprite;
	private var down:Sprite;
	private var left:Sprite;
	private var right:Sprite;
	private var gamepad:Gamepad;
	private var colour:UInt;

	public function new() {
		super();
	}
	
	public function init(gamepad:Gamepad, ?colour:UInt = 0x669900):Void {
		this.gamepad = gamepad;
		this.colour = colour;
		this.addEventListener(Event.ENTER_FRAME, onEnterFrame);
		this.drawBackground();
		this.createBall();
		this.createButtons();
		this.createKeypad();
	}
	
	private function onEnterFrame(e:Event):Void {
		ball.x = gamepad._x * 25;
		ball.y = gamepad._y * 25;
		
		button1.alpha = gamepad._fire1._isDown ? 1 : 0.4;
		button2.alpha = gamepad._fire2._isDown ? 1 : 0.4;
		
		up.alpha = gamepad._up._isDown ? 1 : 0.4;
		down.alpha = gamepad._down._isDown ? 1 : 0.4;
		left.alpha = gamepad._left._isDown ? 1 : 0.4;
		right.alpha = gamepad._right._isDown ? 1 : 0.4;
	}
	
	private function drawBackground():Void {
		if (gamepad.isCircle) {
			drawCircle();
		} else {
			drawSquare();
		}
	}
	
	private function drawSquare():Void {
		graphics.beginFill(colour, 0.4);
		graphics.drawRoundRect( -50, -50, 100, 100, 50, 50);
		graphics.endFill();
	}
	
	private function drawCircle():Void {
		graphics.beginFill(colour, 0.4);
		graphics.drawCircle(0, 0, 50);
		graphics.endFill();
	}
	
	private function createBall():Void {
		ball = new Sprite();
		ball.graphics.beginFill(colour, 1);
		ball.graphics.drawCircle(0, 0, 25);
		ball.graphics.endFill();
		addChild(ball);
	}
	
	private function createKeypad():Void {
		up = createKey();
		up.x = -125;
		up.y = -15;
		
		down = createKey();
		down.x = -125;
		down.y = 20;
		
		left = createKey();
		left.x = -160;
		left.y = 20;
		
		right = createKey();
		right.x = -90;
		right.y = 20;
	}
	
	private function createButtons():Void {
		button1 = createButton();
		button1.x = 75;
		
		button2 = createButton();
		button2.x = 75;
		button2.y = 35;
	}
	
	private function createButton():Sprite {
		var button:Sprite = new Sprite();
		button.graphics.beginFill(colour, 1);
		button.graphics.drawCircle(0, 0, 15);
		button.graphics.endFill();
		addChild(button);
		
		return button;
	}
	
	private function createKey():Sprite {
		var key:Sprite = new Sprite();
		key.graphics.beginFill(colour, 1);
		key.graphics.drawRoundRect(0, 0, 30, 30, 20, 20);
		key.graphics.endFill();
		addChild(key);
		
		return key;
	}
	
}