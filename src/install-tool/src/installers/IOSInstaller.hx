package installers;


import data.NDLL;
import neko.FileSystem;
import neko.io.Path;
import neko.Lib;


class IOSInstaller extends InstallerBase {
	
   override function build ():Void { throw "Build not supported on IOS target - please build from Xcode"; }
   override function run ():Void { throw "Run not supported on IOS target - please run from Xcode"; }
	
	
	override function useFullClassPaths () { return true; }
		
	private override function onCreate ():Void {
		
		ndlls.push (new NDLL ("curl", "nme", false));
		ndlls.push (new NDLL ("png", "nme", false));
		ndlls.push (new NDLL ("jpeg", "nme", false));
		ndlls.push (new NDLL ("z", "nme", false));
   }
		
	private override function generateContext ():Void {
		super.generateContext ();

		context.HAS_ICON = false;

      switch(defines.get("WIN_ORIENTATION"))
      {
          case "landscape" : context.IPHONE_ORIENTATION = "LandscapeLeft";
          case "landscapeLeft" : context.IPHONE_ORIENTATION = "LandscapeLeft";
          case "landscapeRight" : context.IPHONE_ORIENTATION = "LandscapeRight";
          case "portrait" : context.IPHONE_ORIENTATION = "Portrait";
          case "portraitUpsideDown" : context.IPHONE_ORIENTATION = "PortraitUpsideDown";
      }
         

      updateIcon();
	}

   function updateIcon()
   {
		var destination:String = buildDirectory + "/iphone/";
		mkdir (destination);

      var has_icon = true;
      for(i in 0...4)
      {
         var iname = ["Icon.png", "Icon@2x.png", "Icon-72.png", "Icon-Small.png" ][i];
         var size = [57,114,72,50][i];
         var name = destination + "/" + iname;
         if (!icons.updateIcon(size,size,name))
            has_icon = false;
      }
		context.HAS_ICON = has_icon;
   }
	
	
	override function update ():Void {
		
		var destination:String = buildDirectory + "/iphone/";
		mkdir (destination);
		mkdir (destination + "/haxe" );
		
	
		copyFile (NME + "/install-tool/haxe/Assets.hx", destination + "/haxe/Assets.hx");
		recursiveCopy (NME + "/install-tool/iphone/haxe", destination + "/haxe");
		recursiveCopy (NME + "/install-tool/iphone/Classes", destination + "Classes");
		recursiveCopy (NME + "/install-tool/iphone/PROJ.xcodeproj", destination + defines.get ("APP_FILE") + ".xcodeproj");
		copyFile (NME + "/install-tool/iphone/PROJ-Info.plist", destination + defines.get ("APP_FILE") + "-Info.plist");
		
		mkdir (destination + "lib");
		
		for (ndll in ndlls) {
			
			copyIfNewer (ndll.getSourcePath ("iPhone", "lib" + ndll.name + ".iphoneos.a"), destination + "lib/lib" + ndll.name + ".iphoneos.a" );
			copyIfNewer (ndll.getSourcePath ("iPhone", "lib" + ndll.name + ".iphonesim.a"), destination + "lib/lib" + ndll.name + ".iphonesim.a" );
			
		}
		
		mkdir (destination + "assets");
		
		for (asset in assets) {
			
			mkdir (Path.directory (destination + "assets/" + asset.id));
			copyIfNewer (asset.sourcePath, destination + "assets/" + asset.id );
			
		}
		
	}
	
	
}
