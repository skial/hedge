/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

class Explosion extends Entity {

	public function new() {
		super();
	}
	
	override public function update():Void {
		if (this.currentFrame == this.totalFrames) destroy();
		
		super.update();
	}
	
}