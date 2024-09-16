// AOS 
AOS.init({
  offset: 300,
});


setInterval(function time() {
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if ((min + '').length == 1) {
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if ((sec + '').length == 1) {
    sec = '0' + sec;
  }
  jQuery('#the-final-countdown p').html(hours + ' ' + ':' + ' ' + min + ' ' + ':' + ' ' + sec)
}, 1000);



// RATING SLIDER


$('.ratings-slide-main').slick({
  infinite: true,
  // autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span class="prev"><i class="fa-solid fa-arrow-left"></i></span>',
  nextArrow: '<span class="nex"><i class="fa-solid fa-arrow-right"></i></span>',

  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


// CUSTOMER RATING SLIDER

$('.review-slider-main').slick({
  infinite: true,
  // autoplay: true,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,

  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


// CUSTOMER NUMBER COUNTER 


$('.counter').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
  now = Number(Math.ceil(now)).toLocaleString('en');
          $(this).text(now);
      }
     });
  });

// ACCORDIAN JQUERY 

$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});