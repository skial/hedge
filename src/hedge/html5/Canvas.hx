
/**
 * @source : https://github.com/tong/hx.html5
 * @author : tong / disktree - https://github.com/tong
 */

package hedge.html5;
import js.Dom;

typedef Canvas = {>HtmlDom,
	var width : Int;
	var height : Int;
	function getContext( id : String ) : CanvasRenderingContext2D;
	//DOMString toDataURL(optional in DOMString type, in any... args);
	function toDataURL( ?mimetype : String ) : String;
}
