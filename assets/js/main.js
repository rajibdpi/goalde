// upcoming-match-slider
$(document).ready(function () {
    $('.upcoming-match-slider').owlCarousel({
        loop: true,
        infinite: true,
        margin: 10,
        responsiveClass: true,
        items: 1,
        nav: true,
        dots: false,
    });

    var owl = $('.upcoming-match-slider');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});

// Tranding slider
$(document).ready(function () {
    $('.tranding-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 3,
        nav: true,
        dots: false,
    });

    var owl = $('.tranding-slider');
    owl.owlCarousel();
    // Go to the next item
    $('.trandingNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.trandingPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});

// Footer Img slider
$(document).ready(function () {
    $('.footer-img-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 5,
        nav: true,
        dots: false,
    });

    var owl = $('.footer-img-slider');
    owl.owlCarousel();
    // Go to the next item
    $('.footerSliderNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.footerSliderPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});

// Footer Img slider
$(document).ready(function () {
    $('.transfer-news-summer-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 1,
        nav: false,
        dots: true,
    });
});