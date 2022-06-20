$(function () {
    $('.main_slider').on('inIt reInit afterChange', function () {
        var here = $('.slick-current');
        here.addClass('on').siblings().removeClass('on')
    })
    //on 붙었을때 애니메이션 줄수있음

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });
})
//pauseOnHover >마우스올렸을때 정지 (false : 마우스올려놔도 슬라이드 작동)
//pauseOnFocus: false >클릭했을때 슬라이드 정지





