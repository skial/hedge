package html5;

extern LocalFileSystemSync {
	static var TEMPORARY : Int;
	static var PERSISTENT : Int;
	static function requestFileSystemSync( type : Int, size : Float ) : FileSystemSync;
	static function resolveLocalFileSystemSyncURI( uri : String ) : EntrySync;
}
