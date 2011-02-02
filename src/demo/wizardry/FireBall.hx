/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;
import hedge.display.Sprite;

class FireBall extends Entity {
	
	public var speed:Float;
	public var angle:Float;
	public var speedX:Float;
	public var speedY:Float;
	private var strength:Int;
	
	public var ball:Sprite;
	
	public var targets:Array<Dynamic>;

	public function new() {
		super();
		
		this.strength = 10;
		
		this.speed = 6;
		this.radius = 5;
	}
	
	override public function update():Void {
		this.move();
		
		if (checkForCollisions() == false) {
			this.checkOutOfBounds();
			super.update();
		}
	}
	
	public function checkForCollisions():Bool {
		for (i in targets) {
			if (this.checkCollision(i)) {
				i.hit(this.strength);
				this.destroy();
				return true;
			}
		}
		
		return false;
	}
	
	public function move():Void {
		this.speedX = Math.sin(this.angle) * speed;
		this.speedY = Math.cos(this.angle) * speed;
		
		x += speedX;
		y += speedY;
		
		ball.rotation = -angle * MathHelper.RADIANS_TO_DEGREES;
	}
	
	private function checkOutOfBounds():Void {
		if (x < Config.leftBound || x > Config.rightBound || y < Config.topBound || y > Config.bottomBound) {
			this.destroy();
		}
	}
	
}