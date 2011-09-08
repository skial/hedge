/**
 * ...
 * @author Skial Bainn
 */

package demo.bunnyLandBlitTest;

import haxe.Firebug;
import demo.gamepad.Gamepad;
import hedge.display.Bitmap;
import hedge.display.BitmapData;
import hedge.display.Sprite;
import hedge.events.Event;
import hedge.geom.Point;
import hedge.geom.Rectangle;
import hedge.display.DisplayObject;
import hedge.Lib;
import hedge.Setup;

class BlitBunny {
	public var speedX:Float;
	public var speedY:Float;
	public var speedZ:Float;
	public var bitmapData:BitmapData;
	public var x:Float;
	public var y:Float;
	public var z:Float;
	public var angle:Float;
	public var speed:Float;
	public var drawPosition:Point;
	public function new() { }
}

class BunnyLandBlitTest extends Sprite {
	
	public static var numBunnies:Int = 3000;
	public static var gravity:Float = 1;
	public var bunnies:Array<BlitBunny>;
	public var maxX:Int;
	public var minX:Int;
	public var maxY:Int;
	public var minY:Int;
	public static var maxZ:Int = 0;
	public static var minZ:Int = -10000;
	public static var screenWidth:Int = 640;
	public static var screenHeight:Int = 480;
	public var bitmap:Bitmap;
	public static var cameraSpeedX:Float = 4;
	public static var cameraSpeedY:Float = 5;
	public var cameraRect:Rectangle;
	public static var columns:Int = 127;
	public static var rows:Int = 127;
	public var ground:BitmapData;
	public static var tileSize:Int = 32;
	public var gamepad:Gamepad;
	
	public var bunnyAsset:BitmapData;
	public var grassAsset:BitmapData;
	
	public static function main() {
		Firebug.redirectTraces();
		Setup.init(run, 30);
	}
	
	public static function run():Void {
		Lib.current.addChild(new BunnyLandBlitTest());
	}

	public function new() {
		super();
		
		//	CAMERA AND BOUNDRIES
		
		cameraRect = new Rectangle(0, 0, screenWidth, screenHeight);
		
		maxX = columns * tileSize;
		maxY = rows * tileSize;
		
		//	GROUND
		
		ground = new BitmapData(maxX, maxY);
		//ground.lock();
		
		grassAsset = new BitmapData(32, 32, false, null, 'outdoor');
		var sourceRect:Rectangle = new Rectangle(0, 0, 32, 32);
		var destPoint:Point = new Point();
		
		for (r in 0...rows) {
			for (c in 0...columns) {
				destPoint.x = c * tileSize;
				destPoint.y = r * tileSize;
				ground.copyPixels(grassAsset, sourceRect, destPoint);
			}
		}
		
		//ground.unlock();
		
		//	BUNNIES
		
		bunnyAsset = new BitmapData(26, 37, false, null, 'wabbit_alpha');
		bunnies = new Array<BlitBunny>();
		
		var bunny:BlitBunny;
		
		var bunnyRows:Int = Std.int(Math.sqrt(numBunnies));
		
		var spacingX:Float = maxX / bunnyRows;
		var spacingY:Float = maxY / bunnyRows;
		
		var column;
		var row;
		
		for (i in 0...numBunnies) {
			column = i % bunnyRows;
			row = i / bunnyRows;
			
			bunny = new BlitBunny();
			bunny.bitmapData = bunnyAsset;
			bunny.x = column * spacingX;
			bunny.y = row * spacingY;
			
			bunny.angle = Math.random() * Math.PI * 2;
			bunny.speed = (Math.random() * 5) + 0.5;
			bunny.speedX = Math.sin(bunny.angle) * bunny.speed;
			bunny.speedY = Math.cos(bunny.angle) * bunny.speed;
			bunny.speedZ = -1;
			
			bunny.drawPosition = new Point();
			
			bunnies[i] = bunny;
		}
		
		//	"VIEWPORT"
		
		bitmap = new Bitmap(new BitmapData(maxX, maxY));
		this.addChild(bitmap);
		
		//	LISTEN FOR EVENTS
		
		gamepad = new Gamepad(this.stage, true);
		gamepad.useWASD();
		
		this.addEventListener(Event.ENTER_FRAME, onEnterFrame);
	}
	
	public function onEnterFrame(e:Event<DisplayObject>):Void {
		//bitmap.bitmapData.lock();
		
		//	CAMERA MOVEMENT
		
		cameraSpeedX = gamepad._x * 10;
		cameraSpeedY = gamepad._y * 10;
		
		cameraRect.x += cameraSpeedX;
		cameraRect.y += cameraSpeedY;
		
		if (cameraRect.x > maxX - screenWidth) {
			cameraRect.x = maxX - screenWidth;
			cameraSpeedX *= -1;
		} else if (cameraRect.x < 0) {
			cameraRect.x = 0;
			cameraSpeedX *= -1;
		}
		
		if (cameraRect.y > maxY - screenHeight) {
			cameraRect.y = maxY - screenHeight;
			cameraSpeedY *= -1;
		} else if (cameraRect.y < 0) {
			cameraRect.y = 0;
			cameraSpeedY *= -1;
		}
		
		//	GROUND
		
		bitmap.bitmapData.copyPixels(ground, cameraRect, new Point());
		
		//	BUNNIES
		
		var sourceRect:Rectangle = new Rectangle(0, 0, 26, 37);
		var bunny:BlitBunny;
		var drawableBunnies:Array<BlitBunny> = new Array<BlitBunny>();
		
		var i = numBunnies-1;
		while (i > 0) {
		//for (i in 0...numBunnies) {
			bunny = bunnies[i];
			bunny.x += bunny.speedX;
			bunny.y += bunny.speedY;
			
			//	POSITION X (horizontal position)
			
			if (bunny.x > maxX) {
				bunny.speedX *= -1;
				bunny.x = maxX;
			} else if (bunny.x < minX) {
				bunny.speedX *= -1;
				bunny.x = minX;
			}
			
			// POSITION Y (Depth into scene)
			
			if (bunny.y > maxY) {
				bunny.speedY *= -1;
				bunny.y = maxY;
			}
			else if (bunny.y < minY) {
				bunny.speedY *= -1;
				bunny.y = minY;
			}
			
			// POSITION Z (height off ground)
			
			bunny.z += bunny.speedZ;
			bunny.speedZ += gravity;
			
			if (bunny.z > maxZ) {
				bunny.speedZ *= -0.5;
				bunny.z = maxZ;
				
				if (Math.random() > 0.1) {
					bunny.speedZ -= Math.random() * 1;
				}
			} else if (bunny.z < minZ) {
				bunny.speedZ = 0;
				bunny.z = minZ;
			}
			
			// DRAW BUNNIES
			
			var drawPosition:Point = bunny.drawPosition;
			
			drawPosition.x = bunny.x - cameraRect.x;
			drawPosition.y = bunny.y + bunny.z - cameraRect.y;
			
			if (drawPosition.x <= screenWidth && drawPosition.x > -sourceRect.width) {
				if (drawPosition.y <= screenHeight && drawPosition.y > -sourceRect.height) {
					drawableBunnies.push(bunny);
				}
			}
			i--;
		}
		
		//drawableBunnies.sort(sortDepths);
		var numDrawableBunnies:Int = drawableBunnies.length;
		
		i = numDrawableBunnies-1;
		while (i > 0) {
		//for (i in 0...numDrawableBunnies) {
			bunny = drawableBunnies[i];
			bitmap.bitmapData.copyPixels(bunny.bitmapData, sourceRect, bunny.drawPosition, null, null, true);
			i--;
		}
		
		//bitmap.bitmapData.unlock();
	}
	
	private function sortDepths(bunny1:BlitBunny, bunny2:BlitBunny):Int {
		if (bunny1.y < bunny2.y ) return -1;
		if (bunny1.y > bunny2.y) return 1;
		return 0;
	}
	
}