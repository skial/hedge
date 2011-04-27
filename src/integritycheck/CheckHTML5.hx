package integritycheck;

import massive.neko.io.File;
import massive.neko.io.FileSys;
import neko.io.FileOutput;

import neko.Sys;
import neko.io.File;

using StringTools;

class CheckHTML5 {
	
	public static inline var PATH:String = 'src' + File.seperator + 'html5';
	public static inline var PACKAGE:String = 'package html5;\n';

	public static function check():Void {
		
		var path:String = FileSys.getCwd() + PATH;
		var cont:String;
		var file:FileOutput;
		var tmp:String;
		
		if (FileSys.exists(path) && FileSys.isDirectory(path)) {
			
			for (n in FileSys.readDirectory(path)) {
				
				if (n.endsWith('.hx')) {
					
					tmp = path + File.seperator + n;
					cont = neko.io.File.getContent(tmp);
					
					if (cont.indexOf(PACKAGE) != 0) {
						
						file = neko.io.File.write(tmp, true);
						file.writeString(PACKAGE + cont);
						file.flush();
						file.close();
						
					}
					
				}
				
			}
			
		}
		
	}
	
}