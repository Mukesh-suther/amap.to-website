var owl1 = $('.owl-carousel');
var owl2 = $('.owl-carousel2');
owl1.owlCarousel({
    items: 1,
    loop: Infinity,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    nav:true,
    autoplayHoverPause: true
})
owl2.owlCarousel({
    items: 4,
    loop: Infinity,
    dots: false,
    autoplay: true,
    margin:10,
    autoplayTimeout: 2000,
    nav: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2.50,
        },
        767: {
            items: 4,
        },
        1000: {
            items: 4,
        }
    }
})

var valuedisplay = document.querySelectorAll(".platform-section-4-boxes-no");

valuedisplay.forEach((valuedisplay) =>{
    let startvalue = 0;
    let endvalue = valuedisplay.getAttribute("data-val");
    let counter = setInterval(function(){
        startvalue += 1
        valuedisplay.textContent = startvalue;
        if(startvalue == endvalue){
            clearInterval(counter)
        }
    }, 0.2)
})