$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");

});



var sliderIsLive = false;

$(document).ready(function () {

    $('.questions .item .head').click(function () {
        $(this).siblings('.bottom').stop(true, true).slideToggle(200);
        $(this).parent().toggleClass('open');
    })

    $('.lang-toggle .toggle').click(function () {
        var $this = $(this);
        $this.siblings('.langs').stop(true, true).slideToggle(200);
        $this.parent().toggleClass('open');
    });

    var slider1 = $('.who-will-suit .flex-block');
    var slider2 = $('.warranty .flex-block');
    var sliderNumber1 = $('#slider-controls1 .slider-number');
    var sliderNumber2 = $('#slider-controls2 .slider-number');

    var slider3 = $('.mobile-app-slider .items');
    var sliderNumber3 = $('#slider-controls3 .slider-number');

    function adaptive_slider() {
        if (window.innerWidth > 700) {
            slider1.slick('unslick');
            slider2.slick('unslick');
            sliderIsLive = false;
        }
        else {
            if (!sliderIsLive) {
                slider1.slick({
                    arrows: false,
                });
                slider2.slick({
                    arrows: false,
                });
                slider3.slick({
                    arrows: false,
                });
                sliderIsLive = true;
            }
        }
    };

    window.addEventListener("load", function () {
        adaptive_slider();
    });

    window.addEventListener("resize", function () {
        adaptive_slider();
    });

    slider1.on('init reInit afterChange', function (e, slick, currentSlide) {
        sliderNumber1.html('<span>' + ((currentSlide ? currentSlide : 0) + 1) + '</span>/' + slick.slideCount);
    });
    slider2.on('init reInit afterChange', function (e, slick, currentSlide) {
        sliderNumber2.html('<span>' + ((currentSlide ? currentSlide : 0) + 1) + '</span>/' + slick.slideCount);
    });
    slider3.on('init reInit afterChange', function (e, slick, currentSlide) {
        sliderNumber3.html('<span>' + ((currentSlide ? currentSlide : 0) + 1) + '</span>/' + slick.slideCount);
    });
    $('#slider-controls1 .prev-arrow').click(function () {
        slider1.slick('slickPrev');
    })

    $('#slider-controls1 .next-arrow').click(function () {
        slider1.slick('slickNext');
    })
    $('#slider-controls2 .prev-arrow').click(function () {
        slider2.slick('slickPrev');
    })

    $('#slider-controls2 .next-arrow').click(function () {
        slider2.slick('slickNext');
    })

    $('#slider-controls3 .prev-arrow').click(function () {
        slider3.slick('slickPrev');
    })

    $('#slider-controls3 .next-arrow').click(function () {
        slider3.slick('slickNext');
    })

    $(".wrapper .watch").fancybox();



    $('header ul li a').on('click', function () {
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if (dest !== undefined && dest !== '') { // проверяем существование
            $('body').removeClass('blocked');
            $('html').animate({
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
            );
        }
        return false;
    });



    $('.mobile-app .next').click(
        function () {
            var $this = $(this);
            thisCard=$this.closest('.card');
            card2=thisCard.siblings('.center');
            card3=thisCard.siblings('.back');
            thisCard.fadeOut(100);
            thisCard.fadeIn(100);
            thisCard.removeClass('front').addClass('back');
            card2.removeClass('center').addClass('front');
            card3.removeClass('back').addClass('center');
        }
    );
});

