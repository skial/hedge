package demo.displayobjectexample;

import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.Lib;
import flash.display.Sprite;
import flash.display.Stage;
import flash.display.DisplayObject;
import haxe.Firebug;

#if js
import hedge.Setup;
#end

class DisplayObjectExample extends Sprite {
	
	static function main() {
		#if js
		Firebug.redirectTraces();
		Setup.init(run);
		#else
		run();
		#end
	}
	
	static function run():Void {
		Lib.current.addChild(new DisplayObjectExample());
	}

	public function new() {
		super();
		var child:CustomDisplayObject = new CustomDisplayObject();
		addChild(child);
	}
	
}

class CustomDisplayObject extends Sprite {
	private static var bgColor:Int = 0xFFCC00;
	private static var size:Int = 80;
	
	public function new() {
		super();
		draw();
		addEventListener(Event.ADDED, addedHandler);
        addEventListener(Event.ENTER_FRAME, enterFrameHandler);
        addEventListener(Event.REMOVED, removedHandler);
        addEventListener(MouseEvent.CLICK, clickHandler);
        addEventListener(Event.RENDER, renderHandler);
	}
	
	private function draw():Void {
		graphics.beginFill(bgColor);
		graphics.drawRect(0, 0, size, size);
		graphics.endFill();
	}
	
	private function clickHandler(e:MouseEvent):Void {
		trace('clickHandler: ' + e);
		parent.removeChild(this);
	}
	
	private function addedHandler(e:Event #if !flash <Stage> #end):Void {
		trace('addedHandler: ' + e);
		stage.scaleMode = StageScaleMode.NO_SCALE;
		stage.align = StageAlign.TOP_LEFT;
		stage.addEventListener('resize', resizeHandler);
	}
	
	private function enterFrameHandler(e:Event #if !flash <DisplayObject> #end):Void {
		trace('enterFrameHandler: ' + e);
		removeEventListener('enterFrame', enterFrameHandler);
	}
	
	private function removedHandler(e:Event #if !flash <DisplayObject> #end):Void {
		trace('removedHandler: ' + e);
		stage.removeEventListener('resize', resizeHandler);
	}
	
	private function renderHandler(e:Event #if !flash <DisplayObject> #end):Void {
		trace('renderHandler: ' + e);
	}
	
	private function resizeHandler(e:Event #if !flash <DisplayObject> #end):Void {
		trace('resizeHandler: ' + e);
	}
}