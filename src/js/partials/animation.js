$(document).ready(function () {

    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animation.json'
    };

    var anim;
    anim = lottie.loadAnimation(params);


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

    TweenMax.to(ladyText, 0.5, {scale:2, opacity: 0, display: 'none', ease: Back.easing, delay: 4});
    TweenMax.to(ladyText1, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing, delay: 4});
    TweenMax.to(lady, 1, {left: 0, ease: Linear.easing, delay: 4.5});
    TweenMax.to('.lady-1', 1, {opacity: 0, ease: Linear.easing, delay: 4.5});
    TweenMax.to('.lady-2', 1, {opacity: 1, ease: Linear.easing, delay: 4.5});
    TweenMax.to(ladyText2, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 5.5});
    TweenMax.to(phoneBlock1, 1, {x:0, opacity: 1, ease: Linear.easing, delay: 6});
    TweenMax.to(ladyText3, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 7});

    TweenMax.to(phoneBlock1, 1, {y:-1000, opacity: 0, display: 'none', ease: Linear.easing, delay: 9.5});
    TweenMax.to(ladyText2, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing, delay: 9.5});
    TweenMax.to(ladyText3, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing, delay: 9.5});
    TweenMax.to('.lady-2', 1, {opacity: 0, ease: Linear.easing, delay: 10.5});
    TweenMax.to('.lady-3', 1, {opacity: 1, ease: Linear.easing, delay: 10.5});
    TweenMax.to(ladyText4, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 10.5});
    TweenMax.to(phoneBlock2, 1, {x:0, opacity: 1, ease: Linear.easing, delay: 11});
    TweenMax.to(ladyText5, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 12});


    TweenMax.to(phoneBlock2, 1, {y:-1000, opacity: 0, display: 'none', ease: Linear.easing, delay: 13.5});
    TweenMax.to(ladyText4, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing, delay: 13.5});
    TweenMax.to(ladyText5, 0.5, {scale:0, opacity: 0, display: 'none', ease: Linear.easing, delay: 13.5});
    setTimeout(function() {lady.classList.add('transition')}, 13000);
    TweenMax.to(lady, 1, {left: 'calc(50% - 150px)', delay: 14.5});
    TweenMax.to(appLinks, 0.5, {scale:1, opacity: 1, ease: Linear.easing, delay: 15.5});

    setTimeout(function() {$('body').removeClass('blocked')}, 16000);

});


