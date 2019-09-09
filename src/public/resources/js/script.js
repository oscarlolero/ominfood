/*//Sticky nav in jQuery
$('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
    offset: '63px;'
});*/

const allWaypoints = [
    new Waypoint({
        element: document.querySelector('.js--section-features'),
        handler: direction => {
            if (direction == "down") {
                document.querySelector('nav').classList.add('sticky');
            } else {
                document.querySelector('nav').classList.remove('sticky');
            }
        },
        offset: '63px;'
    }), 
    new Waypoint({
        element: document.querySelector('.js--waypoint-1'),
        handler: () => {
            document.querySelector('.js--waypoint-1').classList.add('animated', 'fadeIn');
        },
        offset: '60%' //half of the page/section
    }), 
    new Waypoint({
        element: document.querySelector('.js--waypoint-2'),
        handler: () => {
            document.querySelector('.js--waypoint-2').classList.add('animated', 'fadeInUp');
        },
        offset: '60%' //half of the page/section
    }), 
    new Waypoint({
        element: document.querySelector('.js--waypoint-3'),
        handler: () => {
            document.querySelector('.js--waypoint-3').classList.add('animated', 'fadeIn');
        },
        offset: '60%' //half of the page/section
    }),
    new Waypoint({
        element: document.querySelector('.js--waypoint-4'),
        handler: () => {
            document.querySelector('.js--waypoint-4').classList.add('animated', 'pulse');
        },
        offset: '60%' //half of the page/section
    })

];

//Mobile nav
document.querySelector('.js--nav-icon').addEventListener('click', () => {
    const nav = $('.js--main-nav');
    const icon = document.querySelector('.js--nav-icon i');
    nav.slideToggle(200); //jQuery, 200ms
    
    if(icon.classList.contains('ion-navicon-round')) {
        icon.classList.add('ion-close-round');
        icon.classList.remove('ion-navicon-round');
    } else {
        icon.classList.add('ion-navicon-round');
        icon.classList.remove('ion-close-round');
    }
});

//Scroll on buttons
document.querySelector('.js--scroll-to-plans').addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('.js--section-plans').offset().top
    }, 700);
});

document.querySelector('.js--scroll-to-start').addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('.js--section-features').offset().top
    }, 700);
});


// Animate hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
