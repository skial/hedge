package ;
import hedge.events.Event;
import hedge.events.MouseEvent;
import haxe.Firebug;
import hedge.display.Sprite;
import hedge.events.KeyboardEvent;
#if js
import hedge.Setup;
import js.Lib;
#end

class Main extends Sprite {

	public static function main() {
		Firebug.redirectTraces();
		
		#if js
		Setup.init(run, 30);
		#else
		run();
		#end
	}
	
	public static function run():Void {
		var m:Main = new Main();
		hedge.Lib.current.addChild(m);
	}
	
	public function new () {
		super();
		
		graphics.beginFill(0xFF0000);
		graphics.lineStyle(1, 0x000000);
		graphics.drawCircle(0, 0, 20);
		graphics.endFill();
		
		this.x = 100;
		this.y = 100;
		
		hedge.Lib.current.stage.addEventListener(KeyboardEvent.KEY_DOWN, moveBall);
	}
	
	public function moveBall(e:KeyboardEvent):Void {
		this.x += 10;
	}

}
