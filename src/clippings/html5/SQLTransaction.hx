
/**
 * @source : https://github.com/tong/hx.html5
 * @author : tong / disktree - https://github.com/tong
 */

package clippings.html5;

typedef SQLTransaction = {
	 function executeSql( sqlStatement : String,
	 					  ?arguments : Array<Dynamic>,
	 					  ?cb : SQLTransaction->SQLResultSet->Void,
	 					  ?errorCb : SQLTransaction->SQLError->Void ) : Void;
}
