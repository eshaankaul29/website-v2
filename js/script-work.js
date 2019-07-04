$(document).ready(function() {

    // variables
    var postHeader = $('.post-header');

    var postHero = $('#post-hero');
    var post = $(".post");

    // setup
    postHero.addClass("post-hero-loaded");
    post.addClass("post-loaded");

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var postHeroBottom = postHero.height();

        if (scrollPos > postHeroBottom) {
            postHeader.addClass("post-header-scrolled");
        } else {
            postHeader.removeClass("post-header-scrolled");
        }
    });
});
