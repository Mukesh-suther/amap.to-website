var owl = $('.owl-carousel3');
owl.owlCarousel({
    items: 5,
    loop: Infinity,
    dots: false,
    autoplay: true,
    margin:10 ,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    mouseDrag: true,
    responsive: {
        0: {
            items: 2,
        },
        767: {
            items: 5
        },
        1000: {
            items: 5
        }
    }
});