package install-tool.src.installers;
import installers.InstallerBase;

/**
 * ...
 * @author Skial Bainn
 */

class HedgeInstaller extends InstallerBase {

	override private function build():Void {
		
		var destination:String = this.buildDirectory + '/hedge/bin/';
		var hxml:String = this.buildDirectory + '/hedge/haxe/' + (this.debug ? 'debug' : 'release') + '.hxml';
		
		this.mkdir(destination);
		
		this.recursiveCopy(NME + '/install-tool/hedge/haxe', this.buildDirectory + '/hedge/haxe');
		this.recursiveCopy(NME + '/install-tool/hedge/hxml', this.buildDirectory + '/hedge/haxe');
		this.recursiveCopy(NME + '/install-tool/hedge/template', this.buildDirectory + 'hedge/haxe');
		
		this.runCommand('', 'haxe', [hxml]);
		
	}
	
}