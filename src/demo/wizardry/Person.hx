/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;
import hedge.display.MovieClip;
import hedge.display.Sprite;

class Person extends Entity {
	
	public var health:Int;
	public var speed:Float;
	public var angle:Float;
	
	public var speedX:Float;
	public var speedY:Float;
	
	public var north:MovieClip;
	public var south:MovieClip;
	public var east:MovieClip;
	public var west:MovieClip;
	
	public var animations:Array<MovieClip>;
	
	private var currentAnimation:MovieClip;

	public function new() {
		super();
		
		this.health = 100;
		
		north = cast getChildByName('North');
		south = cast getChildByName('South');
		east 	= cast getChildByName('East');
		west 	= cast getChildByName('West');
		
		animations = new Array<MovieClip>();
		animations.push(north);
		animations.push(south);
		animations.push(east);
		animations.push(west);
		
		for (i in animations) {
			this.removeChild(i);
			//i.stop(); // does not have stop() as each hedge Movieclip treats each layer as a bitmap object
		}
		
		showAnimation(south);
	}
	
	public function hit(damage:Int):Void {
		health -= damage;
		
		if (health <= 0) {
			this.destroy();
		}
	}
	
	override public function destroy():Void {
		Game.instance.createExplosion(x, y);
		super.destroy();
	}
	
	private function showAnimation(animation:MovieClip):Void {
		if (currentAnimation != null) {
			this.removeChild(currentAnimation);
			currentAnimation.stop();
		}
		
		this.addChild(animation);
		animation.play();
		
		currentAnimation = animation;
	}
	
	private function showStill(animation:MovieClip, frameNum:Int = 1):Void {
		if (this.currentAnimation != null) {
			this.removeChild(this.currentAnimation);
			currentAnimation.stop();
		}
		
		this.addChild(animation);
		animation.gotoAndStop(frameNum);
		
		this.currentAnimation = animation;
	}
	
	private function showWalk():Void {
		angle = MathHelper.limitRadians(angle);
		
		if (angle >= MathHelper.EIGHTH_CIRCLE - 0.01 && angle <= MathHelper.EIGHTH_CIRCLE * 3) {
			showAnimation(east);
		} else if (angle <= -MathHelper.EIGHTH_CIRCLE + 0.02 && angle >= -MathHelper.EIGHTH_CIRCLE * 3 - 0.02) {
			showAnimation(west);
		} else if (angle > -MathHelper.EIGHTH_CIRCLE && angle < MathHelper.EIGHTH_CIRCLE) {
			showAnimation(south);
		} else {
			showAnimation(north);
		}
	}
	
	private function showIdle():Void {
		showStill(currentAnimation, currentAnimation.currentFrame);
	}
	
	override public function render():Void {
		var totalSpeed:Float = MathHelper.magnitude(speedX, speedY);
			
		if (totalSpeed < 1) {
			showIdle();
		} else {
			showWalk();
		}
		
		super.render();
	}
	
}