$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.mobileNav').toggleClass('showMobile');
    $('.arrow').toggleClass('hideArrow');
    $('body').toggleClass('scroll');
})     