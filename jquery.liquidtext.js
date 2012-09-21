(function ($) {
  var methods = {
    init: function () {
      return this.each(function () {
        var original = measure(this);
        $(this).css({ position: "absolute", height: "auto", width: "auto" });
        draw(this, original);
      });
    }
  };

  function measure(that) {
    return {
      w: parseInt($(that).css("width")),
      fs: parseInt($(that).css("font-size"))
    };
  }

  var draw = function (that, original) {
    var normalizedW = that.clientWidth,
        liquidSize  = (original.fs / normalizedW) * original.w,
        endW;

    $(that).css("font-size", liquidSize);
    endW = that.clientWidth;

    if (endW < original.w - 5) {
      original.fs = liquidSize;
      draw(that, original);
    } else if (endW > original.w) {
      original.fs = liquidSize;
      original.w -= 1;
      draw(that, original);
    } else {
      $(that).css("position", "relative");
      $(that).addClass("drawn");
    }
  };

  $.fn.liquidText = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.liquidText');
    }    
  };

}(jQuery));
