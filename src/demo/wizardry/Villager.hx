/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

class Villager extends Person {
	
	private var moveTargetX:Float;
	private var moveTargetY:Float;

	public function new() {
		super();
		
		speed = 2;
		angle = 0;
		
		setRandomPosition();
	}
	
	private function setRandomPosition():Void {
		moveTargetX = MathHelper.random(Config.leftBound, Config.rightBound);
		moveTargetY = MathHelper.random(Config.topBound, Config.bottomBound);
	}
	
	override public function update():Void {
		angle = MathHelper.getAngle(moveTargetX, moveTargetY, x, y);
			
		speedX = Math.sin(angle) * speed;
		speedY = Math.cos(angle) * speed;
		
		x += speedX;
		y += speedY;
		
		if (MathHelper.getDistance(x, y, moveTargetX, moveTargetY) < 15) {
			setRandomPosition();
		}
		
		super.update();
	}
	
}