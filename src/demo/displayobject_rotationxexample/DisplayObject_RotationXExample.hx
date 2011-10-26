package demo.displayobject_rotationxexample;

import flash.Lib;
import flash.display.Sprite;
import flash.display.MovieClip;
import flash.display.Shape;
import flash.display.Graphics;
import haxe.Firebug;
import haxe.Timer;

#if js
import hedge.Setup;
#end

class DisplayObject_RotationXExample extends Sprite {
	
	public static var speed:Int = 10;
	public var ellipse1:Shape;
	public var ellipse2:Shape;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObject_RotationXExample());
	}

	public function new() {
		super();
		this.ellipse1 = new Shape();
		this.ellipse2 = new Shape();
		
		this.drawEllipse(ellipse1, -50, -40, (Lib.current.stage.stageWidth / 2), (Lib.current.stage.stageHeight / 2));
		this.drawEllipse(ellipse2, 30, 40, (Lib.current.stage.stageWidth / 2), (Lib.current.stage.stageHeight / 2));
		
		this.addChild(ellipse1);
		this.addChild(ellipse2);
		
		var t = new Timer(50);
		t.run = this.timerHandler;
	}
	
	public function drawEllipse(e:Shape, x1:Int, y1:Int, x2:Float, y2:Float):Void {
		e.graphics.beginFill(0xFF0000);
		e.graphics.lineStyle(2);
		e.graphics.drawEllipse(x1, y1, 100, 80);
		e.graphics.endFill();
		
		e.x = x2;
		e.y = y2;
		e.z = 1.0;
	}
	
	public function timerHandler():Void {
		ellipse1.rotationY += speed;
		//ellipse1.rotationX -= speed;
		
		ellipse2.rotationY += speed;
		//ellipse2.rotationX -= speed;
	}
	
}