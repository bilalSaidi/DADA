$("document").ready(function(){

  // Setting Fit Text
  jQuery(".home-heading h3").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });
    /*
    ================================================================
            Customize Settings Library WOW
    ================================================================
    */
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
  )
  wow.init();

  // Start Loading Spinenr


});
/*
================================================================
        Customize Settings Library magnific-popup
================================================================
*/

$(function () {
  $("#work").magnificPopup({
      delegate:'a' ,
      type : 'image' ,
      gallery: {
          enabled: true
      }
  });
});




/*
================================================================
        Customize Settings Library owlCarousel
================================================================
*/
$(function () {
  $(".teamMembers").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 400,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
                    0: {
                      items: 1
                    },
                    480: {
                      items: 2
                    },
                    768: {
                      items: 3
                    }
     }

  });

  /*
  ================================================================
          Customize Settings Library testiMonials
  ================================================================
  */
$(function () {
    $(".testiMonialsClient").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive: {
                      0: {
                        items: 1
                      },
                      480: {
                        items: 1
                      },
                      768: {
                        items: 1
                      }
       }

    });
  });
});


/*
================================================================
        Customize Settings Library counterup
================================================================
*/



$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});



/*
================================================================
        Customize Settings Library (owlCarouse)lclients
================================================================
*/

$(function () {
  $(".clients").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 400,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
                    0: {
                      items: 1
                    },
                    480: {
                      items: 2
                    },
                    768: {
                      items: 3
                    }
     }

  });
});


/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("dada-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("dada-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


/*
================================================================
        Customize Settings scrollspy
================================================================



$('body').scrollspy({ target: '#top-nav-dada' });

*/

// Smooth scrolling

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href");
        var parent = $(this).parent();

        $('html, body').animate({
            scrollTop: $(section).offset().top-40
        }, 1250);
    });

});


/* Colose collapse auto When Click Link  */

$('.collapse ul li a').on("click touch " , function () {
        $('.navbar-toggle').click();
});
