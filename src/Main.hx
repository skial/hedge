package ;
import haxe.Firebug;
import hedge.display.Sprite;
import hedge.Setup;
import js.Lib;

import hedge.Twig;

class Main extends Sprite {

	public static function main() {
		Firebug.redirectTraces();
		
		Setup.init(run, 30, 'TEST');
	}
	
	public static function run():Void {
		var m = new Main();
		var a = new Sprite();
		var b = new Sprite();
		hedge.Lib.attachToStage(m);
		m.addChild(a);
		a.addChild(b);
		
		a.name = 'FIRST';
		b.name = 'SECOND';
		
		trace('FIRST parent name is | ' + a.parent.name);
		trace('SECOND parent name is | ' + b.parent.name);
	}
	
	public function new () {
		super();
		this.name = 'MAIN';
		trace('MAIN parent name is | ' + this.parent.name);
	}

}
