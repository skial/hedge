/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

class Wizard extends Person {
	
	private var spellCharge:Int;
	private var chargeToFire:Int;
	
	public var targets:Array<Dynamic>;

	public function new() {
		super();
		
		this.spellCharge = 0;
		this.chargeToFire = 15;
	}
	
	private function addFireball():Void {
		var fireBall:FireBall = new FireBall();
		fireBall.setPosition(x, y);
		fireBall.angle = angle;
		fireBall.targets = targets;
		Game.instance.addEntity(fireBall);
	}
	
	private function attemptFire():Void {
		if ((spellCharge < chargeToFire) == false) {
			addFireball();
			spellCharge = 0;
		}
	}
	
	override public function update():Void {
		spellCharge++;
		
		super.update();
	}
	
}