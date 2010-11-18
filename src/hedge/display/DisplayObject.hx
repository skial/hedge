/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.events.EventDispatcher;
import hedge.geom.Rectangle;
import hedge.Setup;

class DisplayObject extends EventDispatcher, implements IBitmapDrawable {
	
	//public var accessibilityProperties
	public var alpha(getAlpha,setAlpha):Float;
	public var blendMode(getBlendMode,setBlendMode):String;
	public var cacheAsBitmap(getCache,setCache):Bool;
	//public var loaderInfo(getLoader,null)									//read only
	public var mask(getMask,setMask):DisplayObject;
	public var mouseX(getMouseX,null):Float;									//read only
	public var mouseY(getMouseY,null):Float;									//read only
	public var name(getName,setName):String;
	public var opaqueBackground(getBackground,setBackground):Dynamic;
	public var parent(getParent,setParent):DisplayObjectContainer;		//read only | CHANGED - was read only
	public var root(getRoot,null):DisplayObject;								//read only
	public var rotation(getRotation,setRotation):Float;
	public var scale9Grid(getScale9,setScale9):Rectangle;
	public var scaleX(getScaleX,setScaleX):Float;
	public var scaleY(getScaleY,setScaleY):Float;
	public var scrollRect(getScrollRect,setScrollRect):Rectangle;
	public var stage(getStage,null):Stage;										//read only
	//public var transform
	public var visible(getVisible,setVisible):Bool;
	public var height(getHeight,setHeight):Float;
	public var width(getWidth,setWidth):Float;
	public var x(getX,setX):Float;
	public var y(getY, setY):Float;
	
	public var __originalName__:String;

	public function new() {
		super();
		Setup.__storage__.append(__jq__ = new JQuery('<div>'));
		__originalName__ = name = Setup.generateInstanceName();
		// width and height need to be set to 0
		__jq__.attr('id', this.name).css( Setup.__attr__( { width:'0px', height:'0px', left:'0px', top:'0px' } ) );
		__jq__.attr('data-originalName', __originalName__);
	}
	
	public function getBounds(targetCoordinateSpace:DisplayObject):Dynamic {
		return 'rectangle';
	}
	
	public function getRect(targetCoordinateSpace:DisplayObject):Dynamic {
		return 'rectangle';
	}
	
	public function hitTestObject(obj:DisplayObject):Bool {
		return true;
	}
	
	public function hitTestPoint(x:Float, y:Float, shapeFlag:Bool = false):Bool {
		return true;
	}
	
	public function localToGlobal(point:Dynamic):Dynamic {
		return 'point';
	}
	
	/* OVERRIDE FUNCTIONS */
	
	/* INTERNAL FUNCTIONS */
	
	private function getMouseX():Float {
		return mouseX;
	}
	
	private function getMouseY():Float {
		return mouseY;
	}
	
	private function getRoot():DisplayObject {
		return root;
	}
	
	private function getStage():Stage {
		return Setup.__stage__;
	}
	
	private function getParent():DisplayObjectContainer {
		return parent;
	}
	
	private function setParent(value:DisplayObjectContainer):DisplayObjectContainer {
		parent = value;
		return parent;
	}
	
	private function getAlpha():Float {
		return __jq__.css('opacity');
	}
	
	private function setAlpha(value:Float):Float {
		__jq__.css('opacity', value);
		return value;
	}
	
	private function getBlendMode():String {
		return blendMode;
	}
	
	private function setBlendMode(value:String):String {
		blendMode = value;
		return blendMode;
	}
	
	private function getCache():Bool {
		return cacheAsBitmap;
	}
	
	private function setCache(value:Bool):Bool {
		cacheAsBitmap = value;
		return cacheAsBitmap;
	}
	
	private function getMask():DisplayObject {
		return mask;
	}
	
	private function setMask(value:DisplayObject):DisplayObject {
		mask = value;
		return mask;
	}
	
	private function getName():String {
		return name;
	}
	
	private function setName(value:String):String {
		__jq__.attr('id', value);
		//new JQuery('div#' + name + '-graphics').attr('id', '' + value + '-graphics');
		//new JQuery('div#' + name + '-graphics').attr('id', '' + value + '-graphics');
		name = value;
		return name;
	}
	
	private function getBackground():Dynamic {
		return opaqueBackground;
	}
	
	private function setBackground(value:Dynamic):Dynamic {
		opaqueBackground = value;
		return opaqueBackground;
	}
	
	private function getRotation():Float {
		return rotation;
	}
	
	private function setRotation(value:Float):Float {
		rotation = value;
		return rotation;
	}
	
	private function getScale9():Rectangle {
		return scale9Grid;
	}
	
	private function setScale9(value:Rectangle):Rectangle {
		scale9Grid = value;
		return scale9Grid;
	}
	
	private function getScaleX():Float {
		return scaleX;
	}
	
	private function setScaleX(value:Float):Float {
		scaleX = value;
		return scaleX;
	}
	
	private function getScaleY():Float {
		return scaleY;
	}
	
	private function setScaleY(value:Float):Float {
		scaleY = value;
		return scaleY;
	}
	
	private function getScrollRect():Rectangle {
		return scrollRect;
	}
	
	private function setScrollRect(value:Rectangle):Rectangle {
		scrollRect = value;
		return scrollRect;
	}
	
	private function getVisible():Bool {
		return visible;
	}
	
	private function setVisible(value:Bool):Bool {
		visible = value;
		return visible;
	}
	
	private function getHeight():Float {
		//return new JQuery('div#' + this.name).height();
		//return __jq__.height();
		return __jq__.data('height') == null ? __jq__.height() : __jq__.data('height');
	}
	
	private function setHeight(value:Float):Float {
		//new JQuery('div#' + this.name).height(value);
		__jq__.height(value);
		//height = value;
		__jq__.data('height', value);
		return __jq__.data('height');
	}
	
	private function getWidth():Float {
		//return new JQuery('div#' + this.name).width();
		//return __jq__.width();
		return __jq__.data('width') == null ? __jq__.width() : __jq__.data('width');
	}
	
	private function setWidth(value:Float):Float {
		//new JQuery('div#' + this.name).width(value);
		__jq__.width(value);
		//width = value;
		__jq__.data('width', value);
		return __jq__.data('width');
	}
	
	private function getX():Float {
		//return new JQuery('div#' + this.name).position().top;
		return __jq__.position().top;
	}
	
	private function setX(value:Float):Float {
		x = value;
		new JQuery('div#' + this.name).css('left', '' + value + 'px');
		return x;
	}
	
	private function getY():Float {
		return new JQuery('div#' + this.name).position().left;
	}
	
	private function setY(value:Float):Float {
		y = value;
		new JQuery('div#' + this.name).css('top', '' + value + 'px');
		return y;
	}
	
}