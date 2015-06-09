/*
 * image-uploader
 * http://www.eastros.com/image-uploader
 *
 * Copyright (c) 2015 Umar Ashfaq
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.image_uploader = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.image_uploader = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.image_uploader.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.image_uploader.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].image_uploader = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
