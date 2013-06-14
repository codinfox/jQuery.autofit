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

This plugin is MIT licensed. It is free for usage and distribution.
