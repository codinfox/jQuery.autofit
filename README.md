jQuery.autofit
==============
Tiny but useful jQuery plugin to free you from fitting your images to the frame.

## What's this?

Well, when doing personal project, I find that sometimes I need to write some codes to make my image fit the frame, which means sometimes your image is too large for a `div`. I want to make this job less tiring. <br/>

jQuery.autofit enables you to write fewer codes but make your image display properly in a frame(by which I mean a `div` or some other container).

## How to

To make this plugin work, you need to: 

* make the container `position`ed
* make the container `overflow: hidden`
* set the height and width of your container
* make your image(or something else) `abusolute` positioned

and then, you need just to :

	$(document).ready(function(){
		$("img").autofit();
	});

### Some Options
#### Default Config

Maybe you just want to use the default config, then you could:

	$(document).ready(function(){
		$("img").autofit({
			defaultConfig : true,
		});
	});

and you could get the default config. <br/>
But *REMEMBER*, what the default config will do is just to modify the CSS of your container and images to

	#container {
		position: relative;
		overflow: hidden;
	}
	#img {
		position: absolute;
	}

The default value is `false`

#### Height/Width

Due to some reasons, you may be unable to set the height and width of your container, then you may define them:

	$.autofit({
		height: `number`,
		width: `number`,
	});

The attributes may be not effective under some circumstances, like the size of the frame is already set.


#### Cut

By setting the cut attribute to `true`, you "cut" a part of your image to display in the frame instead of resize the image. Simply follow:

	$.autofit({
		cut : true,
	});

The default value is `true`

## License

The MIT License (MIT)

Copyright (c) 2013 Codinfox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
