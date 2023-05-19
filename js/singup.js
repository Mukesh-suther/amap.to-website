var siturl = document.getElementById("siteurl");
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    items: 1,
})
function getinputvalue() {
    siturl.innerHTML = document.getElementById("siteurlinput").value;
}
function signup() {
    if (document.getElementById("siteurlinput").value === "") {
        document.getElementById("message").style.display = "block";
    }
}