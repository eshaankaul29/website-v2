$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $(".inner-header").addClass("inner-header-scrolled ");
    } else {
        $(".inner-header").removeClass("inner-header-scrolled ");
    }
});