$(function () {
    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        pauseOnHover: false,
    })

    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        autoplaySpeed: 1000,
    });

    $('.slider02').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    })


})

// 1s = 1000