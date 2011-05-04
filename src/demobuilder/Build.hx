package demobuilder;

import massive.neko.cmd.Command;
import massive.neko.io.FileSys;
import neko.io.File;
import neko.Sys;

using StringTools;

class Build extends Command {
	
	public static inline var TEMP_PATH:String = './src/demobuilder/';
	public static inline var DEMO_PATH:String = './src/demo/';
	public static inline var BIN_PATH:String = './bin/';
	public static inline var HXML:String = '.hxml';
	public static inline var HTML:String = '.html';
	public static inline var HX:String = '.hx';
	public static inline var GITIGNORE:String = '.gitignore';

	public function new() {
		
		super();
		
	}
	
	override public function initialise():Void {
		
	}
	
	override public function execute():Void {
		var name:String = this.console.getOption('name', 'Please provide a name for the new demo e.g. awesomeDemo');
		
		if (name == 'true') this.error('The demo name can not be "true"');
		
		if (FileSys.exists(DEMO_PATH + name)) {
			this.print('\nFolder ' + name + ' already exists. Please use another name. Exiting.');
			return;
		}
		
		var cls:String = File.getContent(TEMP_PATH + 'Template' + HX);
		var cmd:String = File.getContent(TEMP_PATH + 'Build' + HXML);
		var htm:String = File.getContent(TEMP_PATH + 'HTML' + HTML);
		var git:String = '*.js\r*.swf';
		
		var path_name:String = name.toLowerCase();
		var class_name:String = name.charAt(0).toUpperCase() + name.substr(1);
		
		cls = this.replaceMeta(cls, path_name, class_name);
		cmd = this.replaceMeta(cmd, path_name, class_name);
		htm = this.replaceMeta(htm, path_name, class_name);
		
		var src_folder = FileSys.createDirectory(DEMO_PATH + path_name);
		var bin_folder = FileSys.createDirectory(BIN_PATH + class_name);
		
		var new_cls = File.write(DEMO_PATH + path_name + massive.neko.io.File.seperator + class_name + HX, true);
		var new_cmd = File.write(DEMO_PATH + path_name + massive.neko.io.File.seperator + class_name + HXML, true);
		var new_htm = File.write(BIN_PATH + class_name + HTML, true);
		var new_git = File.write(BIN_PATH + class_name + massive.neko.io.File.seperator + GITIGNORE, true);
		
		this.print('Creating new demo folder and files.');
		
		new_cls.writeString(cls);
		new_cmd.writeString(cmd);
		new_htm.writeString(htm);
		new_git.writeString(git);
		
		new_cls.flush();
		new_cmd.flush();
		new_htm.flush();
		new_git.flush();
		
		new_cls.close();
		new_cmd.close();
		new_htm.close();
		new_git.close();
		
		this.print('Finished creating new demo folder and files. Exiting.');
	}
	
	public function replaceMeta(value:String, _package:String, _class:String):String {
		
		value = value.replace('@package', _package);
		value = value.replace('@name', _class);
		
		return value;
		
	}
	
}