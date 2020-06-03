//================slick slider======== 
$('#banner-part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
});

// ====================venobox========

$('.venobox').venobox();


// ==============teslimonial slider==========
$('.testi-slaider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
});


// ============coounter js===========
$('.counter').counterUp({
  delay: 10,
  time: 3000
});

// =============slider js==========

$('.sliders').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',

});


// =============color tab js==========

$("#colorful").colorfulTab();    


