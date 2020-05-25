$(document).ready(function () {
    // 点击menu-toggler 然后在 menu-toggler .top-nav 加open
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    })
    // 自动下拉到 指定位置动画
    $('nav a[href*="#"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000)
    })
    $('#up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000)
    })

    // aos 

    AOS.init({
        easing: 'ease',
        duration: 1800,

    })
});
