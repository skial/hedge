package html5;

extern class DirectoryReader {
	function readEntries( successCallback : Array<Entry>->Void, ?errorCallback : FileError->Void ) : Void;
}
