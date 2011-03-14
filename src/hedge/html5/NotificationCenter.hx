
/**
 * @source : https://github.com/tong/hx.html5
 * @author : tong / disktree - https://github.com/tong
 */

package hedge.html5;

@:native("window.webkitNotifications") extern class NotificationCenter {
	static function createNotification( iconUrl : String, title : String, body : String ) : Notification;
	static function createHTMLNotification( url : String ) : Notification;
	static function requestPermission( ?cb : Void->Void ) : Void;
	static function checkPermission() : Int;
}
