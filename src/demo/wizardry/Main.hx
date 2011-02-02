/**
 * ...
 * @author Skial Bainn
 */

package demo.wizardry;

import hedge.display.Sprite;
import hedge.events.Event;

class Main extends Sprite {
	
	private var game:Game;

	public function new() {
		super();
		
		game = new Game();
		this.addChild(game);
		
		this.addEventListener(Event.ENTER_FRAME, onEnterFrame, false, 0, true);
	}
	
	private function onEnterFrame(e:Event):Void {
		game.update();
	}
	
}