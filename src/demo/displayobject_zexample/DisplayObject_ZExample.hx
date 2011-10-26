package demo.displayobject_zexample;

import flash.display.Shape;
import flash.events.Event;
import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObject_ZExample extends Sprite {
	
	private static var ellipse1Back:Int = 1;
	private static var ellipse2Back:Int = 1;
	private static var depth:Int = 1000;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_ZExample());
	}

	public function new() {
		super();
		
		var ellipse1:Shape = drawEllipse((Lib.current.stage.stageWidth / 2) - 100, (Lib.current.stage.stageHeight / 2), 100, 80, 10);
		var ellipse2:Shape = drawEllipse((Lib.current.stage.stageWidth / 2) + 100, (Lib.current.stage.stageHeight / 2), 100, 80, 300);
		addChild(ellipse1);
		addChild(ellipse2);
		ellipse1.addEventListener(Event.ENTER_FRAME, ellipse1FrameHandler);
		ellipse2.addEventListener(Event.ENTER_FRAME, ellipse2FrameHandler);
	}
	
	public function drawEllipse(x:Float, y:Float, w:Float, h:Float, z:Float):Shape {
		var s:Shape = new Shape();
		s.z = z;
		s.graphics.beginFill(0xFF0000);
		s.graphics.lineStyle(2);
		s.graphics.drawEllipse(x, y, w, h);
		s.graphics.endFill();
		return s;
	}
	
	public function ellipse1FrameHandler(e:Event #if !flash <Shape> #end):Void {
		ellipse1Back = setDepth(e, ellipse1Back);
		e.currentTarget.z += ellipse1Back * 10;
	}
	
	public function ellipse2FrameHandler(e:Event #if !flash <Shape> #end):Void {
		ellipse2Back = setDepth(e, ellipse1Back);
		e.currentTarget.z += ellipse2Back * 20;
	}
	
	public function setDepth(e:Event #if !flash <Shape> #end, d:Int):Int {
		if (e.currentTarget.z > depth) {
			e.currentTarget.z = depth;
			d = -1;
		} else if (e.currentTarget.z < 0) {
			e.currentTarget.z = 0;
			d = 1;
		}
		return d;
	}
	
}