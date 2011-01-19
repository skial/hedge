# hedge - *a javascript implementation of the Flash9 haXe api.*
***
## reason
This project started because I've never had to use a substantial amount of javascript. Now extern files have been released by [andyli](https://github.com/andyli) I can jump straight in. 

This is more a reason for me to keep learning new libs / features. I will keep adding classes / methods when I need them. I will also add a list of classes / methods that have been added to the wiki.

For a more **finished flash to javascript / html(5) library**, take a look at [jeash](https://launchpad.net/jeash).
***
## contribute
This project **encourages** contributions.
***
## required javascript & haXe libraries
+ [jQuery](http://jquery.com)
+ [raphaeljs](http://raphaeljs.com/)
+ [jQueryExtern](https://github.com/andyli/jQueryExternForHaxe)
+ [raphaelExtern](https://github.com/andyli/raphaelExternForHaxe)

jQuery is used extensively through out the library. Raphaeljs is used only for the vector graphics. This could change.
***
## examples
I recommend using Chrome to view the examples. Chrome runs the quickest for me, then Firefox 4.0 *(beta)*, Safari and Opera.

+ [1] [BunnyMark BlitTest](http://skial.github.com/hedge/BunnyBlitTest.html) | Runs at 15fps about, with 3000 max bunnies. Canvas at 640x480.
+ [2] [BunnyLand BlitTest](http://skial.github.com/hedge/BunnyLandBlitTest.html) | Runs at 15fps about, with 34000 max bunnies. Canvas at 4046x4046.

At the moment I'm not sure what the reason is for **[1]** being 2x slower than the pure javascript version by [iain lobb](http://iainlobb.com/bunnies/bunnies.html). It's either *(1)* haXe's generated javascript, *(2)* using jQuery or *(3)* my lack of knowledge. I will go with *(3)* ![alt :D](http://cdn.skialbainn.com/emote/emoticon_grin.png).

Examples [1] and [2]  also show a textfield and sprite button which are usable. Example [2] textfield and sprite button occasionally break and will stop rendering bunnies.
***
## notes
possible js libraries to use in place of certain flash9 areas.

+ [1] - [http://blog.iainlobb.com/2010/11/display-list-vs-blitting-results.html](http://blog.iainlobb.com/2010/11/display-list-vs-blitting-results.html)
+ [2] - [http://iainlobb.com/bunnies/bunnies.html](http://iainlobb.com/bunnies/bunnies.html)
+ [3] - [https://github.com/pnitsch/BitmapData.js](https://github.com/pnitsch/BitmapData.js)
+ [4] - [http://attacklab.net/showdown/](http://attacklab.net/showdown/)
+ [5] - [http://markitup.jaysalvat.com/home/](http://markitup.jaysalvat.com/home/)
+ [6] - [http://www.ben-daglish.net/textile.shtml](http://www.ben-daglish.net/textile.shtml)

Code from [1] was used for **example [1]**. [2] is for comparison to **example [1]**.
[3] could possibly be used as a replacement to my bitmapData implementation.
[4] [5] and [6] might be used for textFields html methods as I'm using a html textarea as a textField.
