/*  SERVICES   */
$(function () {
    //animate on scroll
    new WOW({
        animateClass: 'animate__animated' // WOW default is animated but that does not work anymore
    }).init();
});

/*  WORK   */
$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* TEAM */
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
              items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});

/* TESTIMONIALS */
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,       
    });
});

/* STATS */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});

/* CLIENTS */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
              items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
            // breakpoint from 992 up
            992 : {
                items: 6
            }
        }
    });
});

/* NAVIGATION */
// show and hide transparent black navigation
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50) {
            //hide
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else{
            //show
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// smooth scrolling
$(function(){
    $("a.smooth-scrolling").click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250), "easeInOutExpo";
    });
});

/*   close mobile menu on click   */
$(function(){
    $("ul.navbar-nav li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});