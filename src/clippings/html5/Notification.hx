
/**
 * @source : https://github.com/tong/hx.html5
 * @author : tong / disktree - https://github.com/tong
 */

package clippings.html5;

extern class Notification {
	function show() : Void;
	function cancel() : Void;
	var ondisplay : Void->Void;
	var onerror : Void->Void;
	var onclose : Void->Void;
}
