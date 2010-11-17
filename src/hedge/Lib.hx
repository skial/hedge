/**
 * ...
 * @author Skial Bainn
 */

package hedge;
import hedge.display.DisplayObject;
import hedge.display.Sprite;
import hedge.display.Stage;

class Lib {

	/*public static function as<T>(v:Dynamic, c:Class<T>):Null<T> {
		return untyped v;
	}*/
	
	public static function attachToStage(displayobject:DisplayObject):Stage {
		Setup.__stage__.addChild(displayobject);
		return Setup.__stage__;
	}
	
}