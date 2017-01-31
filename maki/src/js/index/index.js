var $ = require("jquery");
var slick = require('slick-carousel');
$(document).ready(function(){

  $(".c-slide").each(function(index, slide){

    var settings = {
      slidesToShow: 1,
      arrows: false,
      draggable: true
    }

    var len = $(slide).find(".c-panel").length;
    if (len > 1) {
      settings.centerMode = true;
      settings.centerPadding = '5%';
    }

    var showNumber = $(slide).data("showNumber") || 3;
    $(slide).slick({
      infinite: true,
      slidesToShow: showNumber,
      slidesToScroll: 1,
      slide: '.c-panel',
      autoplay: true,
      pauseOnHover: true,
      dots: true,
      arrows: true,
      draggable: false,
      // the magic
      responsive: [{
        breakpoint: 768,
        settings: settings
      }]
    });
  });

});
