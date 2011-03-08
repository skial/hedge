package ;
import haxe.Firebug;
import js.Lib;

import hedge.Twig;
using hedge.Twig;

class Main {

	public static function main() {
		Firebug.redirectTraces();
		
		Lib.document.getElementById('bunnyBlit').data('hello', 'world');
		trace(Lib.document.getElementById('bunnyBlit').data('hello'));
		Lib.document.getElementById('bunnyBlit').data('bob', 'smith');
		Lib.document.getElementById('wabbit_alpha').data('skial', 'bainn');
		Lib.document.getElementById('wabbit_alpha').data('structure', {a:1, b:2, c:3});
		trace(Lib.document.getElementById('wabbit_alpha').data('skial'));
		trace(Reflect.field(Twig, 'CACHE'));
		
		Lib.document.getElementById('bunnyBlit').removeData('hello');
		Lib.document.getElementById('wabbit_alpha').removeData();
		trace(Reflect.field(Twig, 'CACHE'));
	}

}
