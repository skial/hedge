package ;
import flash.events.Event;
import flash.events.MouseEvent;
import haxe.Firebug;
import flash.display.Sprite;
import flash.events.KeyboardEvent;
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
		#if js
		hedge.Lib.current.addChild(m);
		#else
		flash.Lib.current.addChild(m);
		#end
	}
	
	public function new () {
		super();
		
		graphics.beginFill(0xFF0000);
		graphics.lineStyle(1, 0x000000);
		graphics.drawCircle(20, 20, 20);
		graphics.endFill();
		
		this.x = 100;
		this.y = 100;
		
		//this.addEventListener(KeyboardEvent.KEY_DOWN, moveBall);
		flash.Lib.current.stage.addEventListener(KeyboardEvent.KEY_DOWN, moveBall);
		flash.Lib.current.stage.focus = flash.Lib.current.stage;
	}
	
	public function moveBall(e:Event):Void {
		this.x += 10;
	}

}
