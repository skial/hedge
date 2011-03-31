package ;
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
		m.name = 'm';
		flash.Lib.current.addChild(m);
	}
	
	public function new () {
		super();
		
		graphics.lineStyle(1, 0x400080);
		graphics.beginFill(0x800080);
		graphics.drawRect(0, 0, 100, 100);
		graphics.endFill();
		var n = new Sprite();
		n.name = 'n';
		n.width = n.height = 100;
		this.addChild(n);
		
		this.x = 75;
		this.y = 125;
		
		flash.Lib.current.stage.addEventListener(KeyboardEvent.KEY_DOWN, moveBall);
	}
	
	public function moveBall(e:KeyboardEvent):Void {
		this.x += 10;
	}

}
