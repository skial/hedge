/**
 * ...
 * @author Skial Bainn
 */

package hedge.events.internal;
import hedge.display.DisplayObject;
import hedge.display.Sprite;
import hedge.events.Event;
import jQuery.JQuery;

class HedgeResizeDisplayEvent extends Event<DisplayObject> {
	
	public function new(type:String, ?bubbles:Bool = true, ?cancelable:Bool = false) {
		super(type, this.bubbles, this.cancelable);
		this.bubbles = bubbles;
		this.cancelable = cancelable;
	}
	
	public static inline var RESIZE_DOM_ELEMENT:String = 'resizeDomElement';
	
	public static function resizeDisplayObject(e:Event<DisplayObject>):Void {
		var _t = e.target;
		
		/*var _x:Float = _t.x;
		var _y:Float = _t.y;
		var _w:Float = _t.width;
		var _h:Float = _t.height;
		
		_w += _x < 0 ? 0 : _x;
		_h += _y < 0 ? 0 : _y;
		
		_w > _t.parent.width ? _t.parent.width = _w : return;
		_h > _t.parent.height ? _t.parent.height = _h : return;*/
		
		var _x:Float = 0;
		var _y:Float = 0;
		var _px:Float = 0;
		var _py:Float = 0;
		var _w:Float = 0;
		var _h:Float = 0;
		var _j:JQuery;
		var _c:JQuery = _t.__ele__.children();
		_c.each(function() {
			_j = new JQuery(untyped __js__('this'));
			_w = _j.width() > _w ? _j.width() : _w;
			_h = _j.height() > _h ? _j.height() : _h;
		} );
		//_t.__skipResizeEvent__ = true;
		/*_w > _t.width ? _t.width = _c.last().position().left + _w : return;
		_h > _t.height ? _t.height = _c.last().position().top + _h : return;*/
		_t.width = _w;
		_t.height = _h;
	}
	
}