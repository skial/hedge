package demo.eventdispatcherexample;

import flash.Lib;
import flash.events.Event;
import flash.display.Sprite;
import flash.events.EventDispatcher;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class EventDispatcherExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new EventDispatcherExample());
	}

	public function new() {
		super();
		
		var dispatcher:CustomDispatcher = new CustomDispatcher();
		dispatcher.addEventListener(CustomDispatcher.ACTION, actionHandler);
		dispatcher.doAction();
	}
	
	private function actionHandler(e:Event #if !flash <Sprite> #end):Void {
		trace('actionHandler : ' + e);
	}
	
}


class CustomDispatcher extends EventDispatcher {
	public static var ACTION:String = 'action';
	
	public function new():Void {
		super();
	}
	
	public function doAction():Void {
		dispatchEvent(new Event(CustomDispatcher.ACTION));
	}
}