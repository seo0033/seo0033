$(function () {
    // 20220620 seo0 topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on')
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }
        $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
    });

    $('.mainSlider').slick({
        arrows: false,
        // autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // autoplaySpeed :2000,
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    })
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    })

    $('#utb').YTPlayer({
        videoURL: 'https://youtu.be/Wc4ZIVBMvQ8',
        containment: '.utb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,

    });

    $('.utb .zoom').on('click', function (e) {
        e.preventDefault();
        // event 전파되는거 방지
        $('#utb').YTPFullscreen();
    })
})//the end