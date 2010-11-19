package ;

import haxe.Firebug;
import haxe.rtti.Meta;
#if js
import js.Lib;
import hedge.display.BitmapData;
import hedge.display.GradientType;
import hedge.display.Shape;
import hedge.display.Sprite;
import hedge.display.Stage;
import hedge.events.MouseEvent;
import hedge.events.Event;
import hedge.Setup;
#elseif flash9
import flash.Lib;
import flash.display.BitmapData;
import flash.display.GradientType;
import flash.display.Shape;
import flash.display.Sprite;
import flash.display.Stage;
import flash.events.MouseEvent;
import flash.events.Event;
#end

/**
 * ...
 * @author Skial Bainn
 */

class Main {
		
	static function main() {
		if (Firebug.detect()) {
			Firebug.redirectTraces();
		}
		
		#if js
		Setup.init(launch);
		#elseif flash9
		launch();
		#end
	}
	
	public static function something(e:MouseEvent):Void {
		trace(e.target);
		trace(e.type);
		trace(e.currentTarget + ' : has been clicked');
	}
	
	static function launch() {
		#if js
		trace('Stage Width: ' + Setup.__stage__.width);
		trace('Stage Height: ' + Setup.__stage__.height);
		trace('Stage Name: ' + Setup.__stage__.name);
		#elseif flash9
		trace('Stage Width: ' + Lib.current.stage.stageWidth);
		trace('Stage Height: ' + Lib.current.stage.stageHeight);
		trace('Stage Name: ' + Lib.current.stage.name);
		#end
		
		trace('created tri');
		var tri:Shape = new Shape();
		tri.name = 'tri';
		tri.graphics.beginFill(0xFF0080);
		tri.graphics.moveTo(0, 0);
		tri.graphics.lineTo(100, 0);
		tri.graphics.lineTo(50, 100);
		tri.graphics.lineTo(0, 0);
		tri.graphics.endFill();
		tri.x = 400;
		tri.y = 75;
		
		trace('created ball');
		//M100,200 	C100,100 250,	100 250,200 S400,300 400,200
		//M250,0		C300,0 	300,	50C300 100 250 100C200 0 250 0 z
		var ball:Sprite = new Sprite();
		/*ball.graphics.beginFill(0x00FF40);
		ball.graphics.drawCircle(200, 200, 100);
		ball.graphics.endFill();*/
		ball.graphics.beginFill(0x00FF40);
      ball.graphics.moveTo(100, 100); 
      ball.graphics.curveTo(30, 150, 100, 200);    
      ball.graphics.curveTo(50, 150, 100, 100);
      ball.graphics.endFill();
		ball.name = 'ball';
		
		var bmd1:BitmapData = new BitmapData(100, 100, true, 0xFF0080);
		var bmd2:BitmapData = new BitmapData(100, 100, true, 0x0080FF);
		
		trace('created sp3');
		var sp3:Sprite = new Sprite();
		
		sp3.name = 'skialbainn';
		sp3.graphics.beginFill(0xff0000, 1);
		sp3.graphics.lineStyle(3, 0x000000, 1.0);
		sp3.graphics.drawRect(0, 0, 300, 300);
		sp3.graphics.drawCircle(350, 10, 10);
		sp3.graphics.drawRoundRect(320, 75, 85, 100, 5);
		sp3.graphics.drawEllipse(600, 10, 60, 70);
		trace('changed sp3 x, y, width and height');
		sp3.x = 100;
		sp3.y = 150;
		sp3.graphics.clear();
		
		#if js
		hedge.Lib.attachToStage(tri);
		hedge.Lib.attachToStage(ball);
		hedge.Lib.attachToStage(sp3);
		#elseif flash9
		Lib.current.addChild(tri);
		Lib.current.addChild(ball);
		Lib.current.addChild(sp3);
		#end
		
		/*trace('stage name: ' + ball.stage);
		trace('stage x pos: ' + ball.stage.x);
		trace('stage y pos: ' + ball.stage.y);
		
		trace('testSprite child sp3 x: ' + sp3.x);
		trace('testSprite child sp3 y: ' + sp3.y);
		trace('testSprite child sp3 width: ' + sp3.width);
		trace('testSprite child sp3 height: ' + sp3.height);*/
	}
	
}