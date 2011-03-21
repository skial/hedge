/**
 * ...
 * @author Skial Bainn
 */

package demo.bunnyBlitTest;

import haxe.Firebug;
import hedge.display.Sprite;
import hedge.display.Bitmap;
import hedge.display.BitmapData;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.events.Event;
import hedge.Lib;
import hedge.Setup;

typedef BlitBunny = {
	var speedX:Float;
	var speedY:Float;
	var bitmapData:BitmapData;
	var position:Point;
}

class BlitTest extends Sprite {
	
	public static var numBunnies:Int = 3000;
	public static var gravity:Float = 3;
	public var bunnies:Array<BlitBunny>;
	public static var maxX:Int = 640;
	public static var minX:Int = 0;
	public static var maxY:Int = 480;
	public static var minY:Int = 0;
	public static var rect:Rectangle = new Rectangle(0, 0, maxX, maxY);
	public static var sourceRect:Rectangle = new Rectangle(0, 0, 26, 37);
	public static var bunny:BlitBunny;
	public var bitmap:Bitmap;
	
	public static function main() {
		Firebug.redirectTraces();
		Setup.init(run, 30);
	}
	
	public static function run():Void {
		Lib.current.addChild(new BlitTest());
	}
	
	public function new() {
		super();
		bunnies = new Array<BlitBunny>();
		var bunnyAsset:BitmapData;
		//bunnyAsset = new BitmapData(26, 37, true, null, 'img#wabbit_alpha');
		bunnyAsset = new BitmapData(26, 37, true, null, 'wabbit_alpha');
		
		/*for (i in 0...numBunnies) {
			bunny = {
				position:new Point(),
				bitmapData:bunnyAsset,
				speedX:Math.random() * 10,
				speedY:(Math.random() * 10) - 5
			}
			
			bunnies[i] = bunny;
		}*/
		bitmap = new Bitmap(new BitmapData(maxX, maxY, true));
		this.addChild(bitmap);
		this.addEventListener(Event.ENTER_FRAME, onEnterFrame);
	}
	
	public function onEnterFrame(e):Void {
		bitmap.bitmapData.fillRect(rect, /* needs to set to white as <canvas> default is black */ 0xFFFFFF);
		
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
	}
	
}