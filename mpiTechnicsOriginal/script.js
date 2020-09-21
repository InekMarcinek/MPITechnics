$('.arrow').on('click', function () {
    $('.box-3').addClass('box-3Appear');
         $('body,html').animate({
            scrollTop: $('main').offset().top + 30 + "px"
         }, 1000)
     })

$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.mobileNav').toggleClass('showMobile');
    $('.arrow').toggleClass('hideArrow');
    $('body').toggleClass('scroll');
})     