$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  });

  $('.rent-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    responsive: [{
      breakpoint: 659,
      settings: {
        slidesToShow: 2,
      }
    }]
  });

  $('.card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    /*     responsive: [
    	    {
    	      breakpoint: 659,
    	      settings: {
    	        slidesToShow: 2,
    	      }
    	    }
        ] */
  });
});
