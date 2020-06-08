// ============stiky bar===============
$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()

  if(scrollamount > 640){
    $(".menu").addClass("fixed")
  }
 
    else{
    $(".menu").removeClass("fixed")
    }

    if(scrollamount > 650){
      $(".btop").fadeIn();
    }
    else{
      $(".btop").fadeOut();
    }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})



//================slick slider======== 
$('#banner-part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
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
  autoplay: true,
});


// =============color tab js==========

$("#colorful").colorfulTab();    



// ===========popup===========
$(".button").click(function(){
  $(".po").slideDown();
})

$(".icon").click(function(){
  $(".po").slideUp();
})