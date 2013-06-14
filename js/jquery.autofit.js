/**
 * jQuery plugin - auto fit the image to the frame
 * MIT licensed
 * Author: Ben
 * GitHub: https://github.com/codinfox/jQuery.autofit
 */
( function($) {

        var setting;

        $.fn.autofit = function(options) {
            setting = $.extend({
                height : $(this).parent().height(),
                width : $(this).parent().width(),
                cut : true,
                defaultConfig : false
            }, options);
            
            if (setting.defaultConfig) {
                $(this).css({
                    position : "absolute"
                });
                $(this).parent().css({
                    overflow : "hidden",
                    position : "relative" 
                });
            }
            $(this).load(_autofit);
        }
        function _autofit() {

            var height = $(this).height();
            var width = $(this).width();

            if (setting.cut && width >= setting.width && height >= setting.height) {
                console.log("height: " + height + " width: " + width);
                console.log("height: " + setting.height + " width: " + setting.width);
                var offset_x = (width - setting.width) / 2;
                var offset_y = (height - setting.height) / 2;
                console.log("offset_x: " + offset_x + "offset_y: " + offset_y);
                $(this).css({
                    left : "-" + offset_x + "px",
                    top : "-" + offset_y + "px"
                });
                return;
            }

            var th = setting.height;
            var tw = width / height * th;
            if (tw < setting.width) {
                tw = setting.width;
                th = height / width * tw;
            }
            var offset_x = (tw - setting.width) / 2;
            var offset_y = (th - setting.height) / 2;
            offset_x = (offset_x < 0) ? 0 : offset_x;
            offset_y = (offset_y < 0) ? 0 : offset_y;

            $(this).css({
                left : "-" + offset_x + "px",
                top : "-" + offset_y + "px",
                height : th,
                width : tw,
            });
        }

    }(jQuery));
