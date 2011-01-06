package ;

import haxe.Firebug;
import haxe.rtti.Meta;
import hedge.geom.Rectangle;
import hedge.text.TextField;
import hedge.text.TextFieldType;
#if js
import js.Lib;
import hedge.display.IBitmapDrawable;
import hedge.display.Bitmap;
import hedge.geom.Point;
import hedge.display.BitmapData;
import hedge.display.GradientType;
import hedge.display.Shape;
import hedge.display.Sprite;
import hedge.display.Stage;
import hedge.events.MouseEvent;
import hedge.events.Event;
import hedge.Setup;
#elseif flash9
import flash.display.Bitmap;
import flash.geom.Point;
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
		Setup.init(launch, 15);
		#elseif flash9
		launch();
		#end
	}
	
	static function launch() {
		hedge.Lib.attachToStage(new Examples());
	}
	
}

class Examples extends Sprite {
	
	private var bunnyAmount:TextField;
	private var submitAmount:Sprite;
	private var submitText:TextField;
	private var bunnyOne:BlitTest;
	
	public function new() {
		super();
		this.__jq__.css('border', '1px solid black');
		
		bunnyOne = new BlitTest();
		
		bunnyAmount = new TextField();
		bunnyAmount.type = TextFieldType.INPUT;
		bunnyAmount.background = true;
		bunnyAmount.border = true;
		bunnyAmount.width = 50;
		bunnyAmount.height = 20;
		bunnyAmount.text = '3000';
		
		submitAmount = new Sprite();
		submitAmount.graphics.beginFill(0x009FEC);
		submitAmount.graphics.lineStyle(1, 0x000000);
		submitAmount.graphics.drawRect(0, 0, 98, 20);
		submitAmount.graphics.endFill();
		
		submitText = new TextField();
		submitText.text = 'submit';
		
		submitAmount.x = 640 - (submitAmount.width + 5);
		submitAmount.y = 480 - (submitAmount.height + 5);
		
		bunnyAmount.x = 640 - (submitAmount.width + 5) - (bunnyAmount.width + 5);
		bunnyAmount.y = 480 - (submitAmount.height + 5);
		
		submitText.x = 25;
		submitText.y = 2;
		
		submitAmount.__jq__.bind('click', onClick); // need to replace with addEventListener
		
		this.addChild(bunnyOne);
		this.addChild(bunnyAmount);
		this.addChild(submitAmount);
		submitAmount.addChild(submitText);
	}
	
	public function onClick(e:Dynamic):Void {
		if (bunnyAmount.text == null) {
			bunnyAmount.text = '3000';
		}
		if (Std.parseInt(bunnyAmount.text) > 3000) {
			bunnyAmount.text = '3000';
		}
		if (Std.parseInt(bunnyAmount.text) < 0) {
			bunnyAmount.text = '0';
		}
		BlitTest.numBunnies = Std.parseInt(bunnyAmount.text);
	}
	
}

class BlitTest extends Sprite {
	
	public static var numBunnies:Int = 3000;
	public static var gravity:Float = 3;
	public var bunnies:Array<BlitBunny>;
	public static var maxX:Int = 640;
	public static var minX:Int = 0;
	public static var maxY:Int = 480;
	public static var minY:Int = 0;
	public var bitmap:Bitmap;
	
	public function new() {
		super();
		
		bunnies = new Array<BlitBunny>();
		var bunnyAsset:BitmapData;
		#if js
		bunnyAsset = new BitmapData(26, 37, true, null, 'img#wabbit_alpha');
		#elseif flash9
		
		#end
		var bunny:BlitBunny;
		
		for (i in 0...numBunnies) {
			bunny = {
				position:new Point(),
				bitmapData:bunnyAsset,
				speedX:Math.random() * 10,
				speedY:(Math.random() * 10) - 5
			}
			
			bunnies[i] = bunny;
		}
		bitmap = new Bitmap(new BitmapData(maxX, maxY, true));
		this.addChild(bitmap);
		this.addEventListener(Event.ENTER_FRAME, onEnterFrame);
	}
	
	public function onEnterFrame(e):Void {
		//bitmap.bitmapData.lock();
		
		bitmap.bitmapData.fillRect(new Rectangle(0, 0, maxX, maxY), /* needs to set to white as <canvas> default is black */ 0xFFFFFF);
		var sourceRect:Rectangle = new Rectangle(0, 0, 26, 37);
		var bunny:BlitBunny;
		for (i in 0...numBunnies) {
			bunny = bunnies[i];
			bunny.position.x += bunny.speedX;
			bunny.position.y += bunny.speedY;
			bunny.speedY += gravity;
			
			if (bunny.position.x > maxX) {
				bunny.speedX *= -1;
				bunny.position.x = maxX;
			} else if (bunny.position.x < minX) {
				bunny.speedX *= -1;
				bunny.position.x = minX;
			}
			
			if (bunny.position.y > maxY) {
				bunny.speedY *= -0.8;
				bunny.position.y = maxY;
				
				if (Math.random() > 0.5) {
					bunny.speedY -= Math.random() * 12;
				}
			} else if (bunny.position.y < minY) {
				bunny.speedY = 0;
				bunny.position.y = minY;
			}
			
			bitmap.bitmapData.copyPixels(bunny.bitmapData, sourceRect, bunny.position, null, null, true);
		}
		
		//bitmap.bitmapData.unlock();
		//this.removeEventListener(Event.ENTER_FRAME, onEnterFrame);
	}
	
}

typedef BlitBunny = {
	var speedX:Float;
	var speedY:Float;
	var bitmapData:BitmapData;
	var position:Point;
}