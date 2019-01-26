$(document).ready(function () {
  console.log("ready!");

    $('.accordion-qstns li').on('click', function () {
      $('.answer').css('display', 'block');
  
  });

  ////slider
  const bestSlider = $(".ba-featured-product-slider");
  bestSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    adaptiveHeight: true,
    fade: false,
    // slide: '.ba-index-slider__img',
    prevArrow: ".ba-index-slider-prev",
    nextArrow: ".ba-index-slider-next",
    dots: true,
    responsive: [{
      breakpoint: 1023,
      settings: {
        rows: 2,
        slidesPerRow: 2,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });


  
});