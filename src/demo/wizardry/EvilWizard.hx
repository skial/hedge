/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

class EvilWizard extends Wizard {
	
	private var targetVillager:Villager;

	public function new() {
		super();
		
		speed = 1.5;
		
		targets = Game.instance.villiagers;
		
		findTargetVillager();
	}
	
	private function findTargetVillager():Void {
		targetVillager = Game.instance.villiagers[MathHelper.randomInt(0, Game.instance.villiagers.length)];
	}
	
	override public function update():Void {
		if (targetVillager.isDestroyed) findTargetVillager();
		
		angle = MathHelper.getAngle(targetVillager.x, targetVillager.y, x, y);
		
		speedX = Math.sin(angle) * speed;
		speedY = Math.cos(angle) * speed;
		
		x += speedX;
		y += speedY;
		
		attemptFire();
		
		super.update();
	}
	
}