var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 7,
    loop: Infinity,
    dots:false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    mouseDrag:true,
        responsive: {
            0: {
                items: 3,
            },
            767: {
                items: 7,
            },
            1000: {
                items: 7,
            }
        }
});