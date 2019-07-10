$(document).ready(() => {

    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $("#nav").css('position', 'relative') : $("#nav").css('position', 'fixed');
    });
    // smooth scrolling
    $("a").on('click', function(event) {


        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });
});