package demobuilder;

import massive.neko.cmd.CommandLineRunner;

class DemoBuilder extends CommandLineRunner {
	
	static function main() {
		var m = new DemoBuilder();
	}
	
	public function new():Void {
		
		super();
		
		this.mapCommand(Build, 'build', ['b'], 'Creates directory and content for a new hedge demo');
		
		this.run();
		
	}
	
}