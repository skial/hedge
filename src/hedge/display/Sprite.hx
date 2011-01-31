/**
 * ...
 * @author Skial Bainn
 */

package hedge.display;
import hedge.display.DisplayObject;
import hedge.display.DisplayObjectContainer;
import hedge.geom.Rectangle;
import hedge.Setup;

class Sprite extends DisplayObjectContainer {
	
	public var buttonMode(getButtonMode,setButtonMode):Bool;
	public var dropTarget(getDropTarget,setDropTarget):DisplayObject;
	public var graphics(getGraphics,null):Graphics;							// read only
	public var hitArea(getHitArea,setHitArea):Sprite;
	//public var soundTransform:SoundTransform;
	public var useHandCursor(getHandCursor, setHandCursor):Bool;
	
	/* INTERNAL VARIABLES */
	
	private var _g:Graphics;

	public function new() {
		super();
		//_g = new Graphics(this);
	}
	
	public function startDrag(lockCenter:Bool = false, bounds:Rectangle = null) {
		
	}
	
	public function stopDrag() {
		
	}
	
	/* OVERRIDE FUNCTIONS */
	
	/*override private function setName(value:String):String {
		//new JQuery('div#' + name + '-graphics').attr('id', value + '-graphics');
		return super.setName(value);
	}*/
	
	/* INTERNAL FUNCTIONS */
	
	private function getButtonMode():Bool {
		return buttonMode;
	}
	
	private function setButtonMode(value:Bool):Bool {
		buttonMode = value;
		return buttonMode;
	}
	
	private function getDropTarget():DisplayObject {
		return dropTarget;
	}
	
	private function setDropTarget(value:DisplayObject):DisplayObject {
		dropTarget = value;
		return dropTarget;
	}
	
	private function getGraphics():Graphics {
		/*if (new JQuery('div#' + this.name).has('div#' + this.name + '-graphics').length == 0) {
			new JQuery('<div></div>').attr('id', (this.name + '-graphics')).css( { width:'100%', height:'100%' } ).appendTo('div#' + this.name);
		}*/
		return _g == null ? _g = new Graphics(this) : _g;
	}
	
	private function getHitArea():Sprite {
		return hitArea;
	}
	
	private function setHitArea(value:Sprite):Sprite {
		hitArea = value;
		return hitArea;
	}
	
	private function getHandCursor():Bool {
		return useHandCursor;
	}
	
	private function setHandCursor(value:Bool):Bool {
		useHandCursor = value;
		return useHandCursor;
	}
	
}