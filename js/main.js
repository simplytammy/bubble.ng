$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".navbar").addClass("nav-bg");
    } else {
        $(".navbar").removeClass("nav-bg");
    }
});