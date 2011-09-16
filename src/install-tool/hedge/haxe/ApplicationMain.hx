package;

import hedge.Setup;

class ApplicationMain {
	public static function main() {
		Setup.init(::APP_MAIN::.main(), ::WIN_FPS::, ::WIN_BACKGROUND::, ::WIN_WIDTH::, ::WIN_HEIGHT::);
	}

	public static function getAsset(inName:String):Dynamic {
		::foreach assets::
		if (inName=="::id::") {
			::if (type=="image")::
				return nme.display.BitmapData.load("::resourceName::");
			::elseif (type=="sound")::
				return new nme.media.Sound(new nme.net.URLRequest("::resourceName::"),null,false);
			::elseif (type=="music")::
				return new nme.media.Sound(new nme.net.URLRequest("::resourceName::"),null,true);
			::else::
				return nme.utils.ByteArray.readFile("::resourceName::");
			::end::
		}
		::end::
		return null;
	}
	
}

