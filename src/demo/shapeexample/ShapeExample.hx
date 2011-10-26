package demo.shapeexample;

import flash.display.Shape;
import flash.Lib;
import flash.display.Sprite;
import haxe.Firebug;
import flash.display.DisplayObject;

#if js
import hedge.Setup;
#end

class ShapeExample extends Sprite {
	
	private static var size:Int = 80;
	private static var bgColor:Int = 0xFFCC00;
	private static var borderColor:Int = 0x666666;
	private static var borderSize:Int = 0;
	private static var cornerRadius:Int = 9;
	private static var gutter:Int = 5;
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new ShapeExample());
	}

	public function new() {
		super();
		doDrawCircle();
		doDrawRoundRect();
		doDrawRect();
		refreshLayout();
	}
	
	private function refreshLayout():Void {
		var ln:Int = numChildren;
		var child:DisplayObject;
		var lastChild:DisplayObject = getChildAt(0);
		lastChild.x = gutter;
		lastChild.y = gutter;
		for (n in 0...ln) {
			child = getChildAt(n);
			child.x = gutter + lastChild.x + lastChild.width;
			child.y = gutter;
			lastChild = child;
		}
	}
	
	private function doDrawCircle():Void {
		var child:Shape = new Shape();
		var halfSize:Int = Math.round(size / 2);
		child.graphics.beginFill(bgColor);
		child.graphics.lineStyle(borderSize, borderColor);
		child.graphics.drawCircle(halfSize, halfSize, halfSize);
		child.graphics.endFill();
		addChild(child);
	}
	
	private function doDrawRoundRect():Void {
		var child:Shape = new Shape();
		child.graphics.beginFill(bgColor);
        child.graphics.lineStyle(borderSize, borderColor);
        child.graphics.drawRoundRect(0, 0, size, size, cornerRadius);
        child.graphics.endFill();
        addChild(child);
	}
	
	private function doDrawRect():Void {
        var child:Shape = new Shape();
        child.graphics.beginFill(bgColor);
        child.graphics.lineStyle(borderSize, borderColor);
        child.graphics.drawRect(0, 0, size, size);
        child.graphics.endFill();
        addChild(child);
    }
	
}