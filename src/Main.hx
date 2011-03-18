package ;
import haxe.Firebug;
import hedge.display.Sprite;
import hedge.events.internal.DisplayEvent;
import hedge.Setup;
import js.Lib;

import hedge.Twig;

class Main extends Sprite {

	public static function main() {
		Firebug.redirectTraces();
		
		Setup.init(run, 30);
	}
	
	public static function run():Void {
		var m = new Main();
		hedge.Lib.current.addChild(m);
	}
	
	public function onResize(e:DisplayEvent):Void {
		trace('hello');
	}
	
	public function new () {
		super();
		height = width = 100;
		graphics.beginFill(0xff60cc);
		graphics.drawRect(0, 0, 50, 75);
		graphics.endFill();
		this.addEventListener(DisplayEvent.RESIZE_ELEMENT, onResize);
	}

}
