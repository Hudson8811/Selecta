$(document).ready(function () {

    var firstSlider = false;

    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'animation.json'
    };

    var anim;
    anim = lottie.loadAnimation(params);


    if (!mobileCheck()){

        var lock = 1,
            step = 0;


        var lady = document.getElementById("lady"),
            ladyText = document.getElementById("main-lady-text"),
            ladyText1 = document.getElementById("lady-1-text"),
            ladyText2 = document.getElementById("lady-2-text"),
            ladyText3 = document.getElementById("lady-3-text"),
            ladyText4 = document.getElementById("lady-4-text"),
            ladyText5 = document.getElementById("lady-5-text"),
            phoneBlock1 = document.getElementById("phone-block-1"),
            phoneBlock2 = document.getElementById("phone-block-2"),
            appLinks = document.getElementById("app-links");



        TweenMax.from(lady, 1, {y: -400,scale:0.5, opacity: 0, ease: Linear.easing});
        TweenMax.to(ladyText, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 1});
        TweenMax.to(ladyText1, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 1.5});
        TweenMax.from('.animation .container', 1.5, {backgroundPositionY: 1500, ease: Linear.easing, delay: 1.5});

        setTimeout(function() {lock = 0; step = 1;}, 3000);



        $(window).on('wheel', function(e) {

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var delta = e.originalEvent.deltaY;
            if (delta > 0 && lock == 0 && scrollTop == 0) {

                switch (step) {
                    case 1:
                        lock = 1;
                        lady.classList.add('transition');
                        TweenMax.to(ladyText, 0.5, {scale:2, opacity: 0, display: 'none', ease: Back.easing});
                        TweenMax.to(ladyText1, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing});
                        TweenMax.to(lady, 0, {left: 0, delay: 0.5});
                        TweenMax.to('.lady-1', 1, {opacity: 0, ease: Linear.easing, delay: 0.5});
                        TweenMax.to('.lady-2', 1, {opacity: 1, ease: Linear.easing, delay: 0.5});
                        TweenMax.to(ladyText2, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 1.5});
                        TweenMax.to(phoneBlock1, 1, {x:0, opacity: 1, ease: Linear.easing, delay: 2});
                        TweenMax.to(ladyText3, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 3});
                        setTimeout(function() {lock = 0; step++;}, 3500);
                        lottie.stop();
                        break;
                    case 2:
                        lock = 1;
                        TweenMax.to(phoneBlock1, 1, {y:-1000, opacity: 0, display: 'none', ease: Linear.easing});
                        TweenMax.to(ladyText2, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing});
                        TweenMax.to(ladyText3, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing});
                        TweenMax.to('.lady-2', 1, {opacity: 0, ease: Linear.easing, delay: 1});
                        TweenMax.to('.lady-3', 1, {opacity: 1, ease: Linear.easing, delay: 1});
                        TweenMax.to(ladyText4, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 1});
                        TweenMax.to(phoneBlock2, 1, {x:0, opacity: 1, ease: Linear.easing, delay: 1.5});
                        TweenMax.to(ladyText5, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 2.5});
                        setTimeout(function() {lock = 0; step++;}, 3000);
                        break;
                    case 3:
                        lock = 1;
                        TweenMax.to(phoneBlock2, 1, {y:-1000, opacity: 0, display: 'none', ease: Linear.easing});
                        TweenMax.to(ladyText4, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing});
                        TweenMax.to(ladyText5, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing});
                        lady.classList.add('transition');
                        TweenMax.to(lady, 0, {left: 'calc(50% - 150px)', delay: 1});
                        TweenMax.to('.lady-3', 1, {opacity: 0, ease: Linear.easing, delay: 1});
                        TweenMax.to('.lady-4', 1, {opacity: 1, ease: Linear.easing, delay: 1});
                        TweenMax.to(appLinks, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 2});

                        setTimeout(function() {$('body').removeClass('blocked')}, 2500);
                        setTimeout(function() {lock = 0; step++;}, 2500);
                        break;
                    default:
                        break;
                }
            } else  if (delta < 0 && lock == 0 && scrollTop == 0){
                switch (step) {
                    case 2:
                        lock = 1;
                        TweenMax.to(ladyText3, 0.5, {scale:0, opacity: 0, ease: Linear.easing});
                        TweenMax.to(phoneBlock1, 1, {x:2000, opacity: 0, ease: Linear.easing});
                        TweenMax.to(ladyText2, 0.5, {scale:0, opacity: 0, ease: Linear.easing});
                        TweenMax.to('.lady-2', 1, {opacity: 0, ease: Linear.easing, delay: 0.5});
                        TweenMax.to('.lady-1', 1, {opacity: 1, ease: Linear.easing, delay: 0.5});
                        lady.classList.add('transition');
                        TweenMax.to(lady, 0, {left: 'calc(50% - 150px)', delay: 0.5});
                        TweenMax.to(ladyText1, 0.5, {scale:1, opacity: 1, display: 'block', ease: Linear.easing, delay: 1.5});
                        TweenMax.to(ladyText, 0.5, {scale:1, opacity: 1, display: 'block', ease: Back.easing, delay: 1.5});
                        setTimeout(function() {lock = 0; step--; lady.classList.remove('transition');}, 2000);
                        lottie.play();
                        break;
                    case 3:
                        lock = 1;
                        TweenMax.to(ladyText5, 0.5, {scale:0, opacity: 0, ease: Linear.easing});
                        TweenMax.to(phoneBlock2, 1, {x:2000, opacity: 0, ease: Linear.easing});
                        TweenMax.to(ladyText4, 0.5, {scale:0, opacity: 0, ease: Linear.easing});
                        TweenMax.to('.lady-2', 1, {opacity: 1, ease: Linear.easing, delay: 0.5});
                        TweenMax.to('.lady-3', 1, {opacity: 0, ease: Linear.easing, delay: 0.5});

                        TweenMax.to(phoneBlock1, 0.5, {y:0, opacity: 1, display: 'block', ease: Linear.easing, delay: 1.5});
                        TweenMax.to(ladyText2, 0.5, {scale:1, opacity: 1, display: 'block', ease: Linear.easing, delay: 1.5});
                        TweenMax.to(ladyText3, 0.5, {scale:1, opacity:1 , display: 'block', ease: Linear.easing, delay: 1.5});

                        setTimeout(function() {lock = 0; step--;}, 2000);
                        break;
                    case 4:
                        lock = 1;
                        $('body').addClass('blocked');

                        TweenMax.to(appLinks, 0.5, {scale:0, opacity: 0, ease: Linear.easing});
                        TweenMax.to('.lady-4', 1, {opacity: 0, ease: Linear.easing, delay: 0.5});
                        TweenMax.to('.lady-3', 1, {opacity: 1, ease: Linear.easing, delay: 0.5});
                        TweenMax.to(lady, 0, {left: 0, delay: 0.5});
                        TweenMax.to(ladyText5, 0.5, {scale:1, opacity: 1, display: 'block', ease: Linear.easing, delay: 1.5});
                        TweenMax.to(ladyText4, 0.5, {scale:1, opacity: 1, display: 'block', ease: Linear.easing, delay: 1.5});
                        TweenMax.to(phoneBlock2, 0.5, {y:0, opacity: 1, display: 'block', ease: Linear.easing, delay: 1.5});
                        setTimeout(function() {lock = 0; step--; lady.classList.remove('transition');}, 2000);
                        break;
                    default:
                        break;
                }
            }
        });

    } else {
        $('body').removeClass('blocked');
        $('.animation .container2').hide();
        $('.animation .container3').show();
        if (!firstSlider) {
            $('.slider-first-block').slick();
            firstSlider == true;
        }
    }


    $(window).scroll(function (event) {
        var top = $(window).scrollTop();
        if(top == 0 && step < 4 && !mobileCheck() && !$('body').hasClass('blocked')){
            $('body').addClass('blocked');
        }
    });

    $(window).resize(function (event) {
        if (!mobileCheck()){
            $('.animation .container2').show();
            $('.animation .container3').hide();
        } else {
            $('body').removeClass('blocked');
            $('.animation .container2').hide();
            $('.animation .container3').show();
            if (!firstSlider) {
                $('.slider-first-block').slick();
                firstSlider == true;
            }
        }
    });
});


function mobileCheck() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/Trident/i) ||
        $(window).width() < 1000
    ) {
        return true;
    } else {
        return false;
    }
}



