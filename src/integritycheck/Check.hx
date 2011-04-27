package integritycheck;

class Check {

	static function main() {
		/* 
		 * check all '.hx' files if they have 'package html5;' included in them,
		 * if not its likely cloned from the github source, so this will add it
		 * to all '.hx' files
		 */
		CheckHTML5.check();
	}
	
}