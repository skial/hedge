/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

class PlayerWizard extends Wizard {
	
	private var gamepad:Gamepad;
	
	private var moveTargetX:Float;
	private var moveTargetY:Float;

	public function new() {
		super();
		
		speed = 4;
		
		chargeToFire = 5;
		
		targets = Game.instance.enemies;
		
		moveTargetX;
		moveTargetY;
		
		gamepad = new Gamepad(stage);
	}
	
	override public function setPosition(x:Float, y:Float):Void {
		this.x = this.moveTargetX = x;
		this.y = this.moveTargetY = y;
	}
	
	override public function update():Void {
		if (gamepad != null) {
			if (gamepad.any) {
				moveTargetX += Math.sin(gamepad.angle) * speed;
				moveTargetY += Math.cos(gamepad.angle) * speed;
				
				moveTargetX = MathHelper.constrain(moveTargetX, Config.leftBound, Config.rightBound);
				moveTargetY = MathHelper.constrain(moveTargetY, Config.topBound, Config.bottomBound);
			}
			
			if (gamepad._fire1) {
				attemptFire();
			}
		}
		
		speedX = (moveTargetX - x) * 0.2;
		speedY = (moveTargetY - y) * 0.2;
		
		x += speedX;
		y += speedY;
		
		if (gamepad != null && gamepad.any) {
			angle = Math.atan2(speedX, speedY);
		}
		
		super.update();
	}
	
}