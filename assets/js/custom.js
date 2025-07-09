/*==========

Theme Name: SpiffyPlay - Music Design HTML5 Template
Theme Version: 1.0

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Header-Menu Scroll
3.Event Sliderr JS
4.Video Slider JS
5.sponsor Slider JS
6.Page Loader And WOW Animation JS
5.Menu Open JS
6.Sticky Header JS
7.Scroll To Top JS
8.Active Menu JS
9.CountDown JS
10.Vanta.js script
==========*/


$(document).ready(function($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    // Header-Menu Scroll
    jQuery('.header-menu ul li a').on('click', function(evt) {

        evt.preventDefault();
        var url = jQuery(this).attr('href');
        var id = url.substring(url.lastIndexOf('/') + 1);
        if (jQuery(id).length > 0) {
            jQuery('html, body').animate({
                scrollTop: jQuery(id).offset().top - 10
            }, 100);
        } else {
            window.location.href = url;
        }
    });




    // Event Sliderr JS

    var event_slider = new Swiper(".event-slider", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        autoplay: true,
        speed: 3000,
        breakpoints: {
            "320": {
                slidesPerView: 1,
                spaceBetween: 30,
                effect: false,

            },
            "640": {
                slidesPerView: 1,
            },

            "768": {
                slidesPerView: 1.5,
            },
            "1024": {
                slidesPerView: 2,
            },
        },

    });

    // Video Slider JS

   var video_slider = new Swiper(".video-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    centeredSlides: true,

    speed: 10000, // speed of transition (ms)
    autoplay: {
        delay: 0,              // No pause between slides
        disableOnInteraction: false, // keep autoplay running on user interaction
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});
// video_slider()
    // sponsor Slider JS

    var sponsor_slider = new Swiper(".sponsor-slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 4000,
        breakpoints: {
            "320": {
                slidesPerView: 2,
            },
            "640": {
                slidesPerView: 3,
            },
            "768": {
                slidesPerView: 4,
            },
            "1024": {
                slidesPerView: 6,
            },
        }
    });


    // Page Loader And Wow Animation JS

    $(window).ready(function() {
        $('.page-loader').fadeOut();
        // Loader JS End
        $('body').removeClass('body-fixed');
        // Wow Animation JS Start
        new WOW().init();
        // Wow Animation JS Start
    });

    // Menu Open JS

    jQuery(".hamburger").click(function() {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    /* Mobile Navigation Menu Removeclass  */
    jQuery('.header-menu ul li a').click(function() {
        jQuery('.main-navigation').removeClass('toggled');
    });

    // Sticky Header JS

    jQuery(window).scroll(function() { // this will work when your window scrolled.
        var height = jQuery(window).scrollTop(); //getting the scrolling height of window
        if (height > 100) {
            jQuery(".site-header").addClass("sticky_head");
        } else {
            jQuery(".site-header").removeClass("sticky_head");
        }
    });

    // Scroll To Top JS

    jQuery('#scrollToTop').click(function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


    // Active Menu JS

    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active-menu');
                sections.removeClass('active-menu');

                $(this).addClass('active-menu');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-menu');
            }
        });
    });

    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 300);

        return false;
    });


});


// CountDown JS
// var mpath = top.location.pathname;
// var final_path = mpath.split('/').pop();


var distance = "";
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = Date.parse("2025-04-10T24:00:00"),
    x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDown - now;
        if (jQuery('.upcoming-section').length > 0) {
            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }
    }, second);
// console.log(Math.floor(distance / (day)));

// Vanta.js script
VANTA.HALO({
    el: "#vantajs-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
});






  // Add smooth scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.about-me .fade-in-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Add mouse movement parallax effect
        document.addEventListener('mousemove', (e) => {
            const floatingElements = document.querySelectorAll('.about-me .floating-element');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 50;
                
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Add typing effect to title
        const title = document.querySelector('.about-me .container .title');
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing effect after initial animation
        setTimeout(typeWriter, 1000);


        
    //header music box script

   


    //header music box script




    