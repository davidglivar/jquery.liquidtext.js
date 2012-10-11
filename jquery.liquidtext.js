(function ($) {
    "use strict";
    var methods = {
            init: function (options) {
                return this.each(function () {
                    var liquidData = measure(this);
                    draw(this, liquidData);
                });
            }
        };

    function measure(that) {
        var liquidData = {
            pw: parseInt($(that).css("width")) - 1,
            fs: parseInt($(that).css("font-size"))
        }
        $(that).css({
            position: "absolute",
            width: "auto"
        });
        liquidData.nw = that.clientWidth - 1;
        return liquidData;
    }

    function draw(that, ld) {
        var liquidSize = (ld.fs / ld.nw) * ld.pw; 
        $(that).css({
            fontSize: Math.round(liquidSize - 2),
            position: "relative"
        });
    }

    $.fn.liquidText = function (method, callback) {
        methods.init.apply(this, arguments);
        if (typeof callback === "function") { 
            callback.call(this);
        }
    };
}(jQuery));
