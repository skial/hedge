package html5;

extern class DirectoryEntry extends Entry {
	function createReader() : DirectoryReader;
	function getFile( path : String, ?options : Dynamic, ?successCallback : Entry->Void, ?errorCallback : FileError->Void ) : Void;
	function getDirectory( path : String, ?options : Dynamic, ?successCallback : Dynamic, ?errorCallback : FileError->Void ) : Void;
	function removeRecursively( successCallback : Void->Void, ?errorCallback : FileError->Void ) : Void;
}
