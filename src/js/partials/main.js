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



    //init-descctop-slider
    var all_cards = $('.mobile-app .card');
    var length = all_cards.length;
    var csDotsContainer = $('.mobile-app .csDots');

    csDotsContainer.append('<div class="item active"></div>');
    for (let index = 1; index < length; index++) {
        csDotsContainer.append('<div class="item"></div>');
    }
    var csDots = $('.mobile-app .csDots .item');


    function change_slide(type = 'next', newIndex = -1) {
        var index = all_cards.index($('.mobile-app .front'));

        switch (type) {
            case 'next':
                newIndex = (index + 1) % length;
                break;
            case 'prev':
                newIndex = (index - 1) >= 0 ? index - 1 : length - 1;
                break;
        }

        var thisCard = all_cards.eq((index));
        var card2 = all_cards.eq((index + 1) % length);

        var card3 = all_cards.eq((newIndex));
        var card4 = all_cards.eq((newIndex + 1) % length);

        thisCard.fadeOut(200).attr('class', 'card back').fadeIn(200);
        card2.attr('class', 'card back');

        card3.attr('class', 'card front');
        card4.attr('class', 'card center');

        csDots.eq(index).removeClass('active');
        csDots.eq(newIndex).addClass('active');
    }
    $('.mobile-app .next').click(
        function () {
            change_slide();
        }
    );
    $('.mobile-app .prev').click(
        function () {
            change_slide('prev');
        }
    );
    $('.mobile-app .csDots .item').click(
        function () {
            var index = csDots.index($(this));
            change_slide('csDots', index);
        }
    );








    /*
        $('.mobile-app .next').click(
            function () {
                var $this = $(this);
                var thisCard = $this.closest('.card');
                var index = all_cards.index(thisCard);
                var card2 = all_cards.eq((index+1)%length);
                var card3 = all_cards.eq((index+2)%length);
                thisCard.stop().fadeOut(200).fadeIn(200);
                card2.stop().fadeIn(200);
                csDots.eq(index).removeClass('active');
                csDots.eq((index + 1) % length).addClass('active');
                thisCard.removeClass('front').addClass('back');
                card2.removeClass('center').addClass('front');
                card3.removeClass('back').addClass('center');

            }
        );
        $('.mobile-app .prev').click(
            function () {
                var $this = $(this);
                var thisCard = $this.closest('.card');
                var index = all_cards.index(thisCard);
                var card2 = all_cards.eq((index-1)<0?length+(index-1):index-1);
                var card3 = all_cards.eq((index+1)%length);
                thisCard.stop().fadeOut(200).fadeIn(200);
                card2.stop().fadeIn(200);
                csDots.eq(index).removeClass('active');
                csDots.eq((index - 1 )<0?length + (index - 1 ):index-1).addClass('active');

                card3.removeClass('center').addClass('back');
                thisCard.removeClass('front').addClass('center');
                card2.removeClass('back').addClass('front');

            }
        );
        $('.mobile-app .csDots .item').click(
            function () {
                var $this = $(this);
                var indexClick=csDots.index(this);
                var index = all_cards.index($this.parent().siblings('.front'));

                console.log("TCL: index", index);
                console.log("TCL: indexClick", indexClick);

                var thisCard = all_cards.eq((index));
                var card2 = all_cards.eq((index+1)%length);

                var card3 = all_cards.eq((indexClick));
                var card4 = all_cards.eq((indexClick+1)%length);

                thisCard.attr('class', 'card back');
                card2.attr('class', 'card back');

                card3.attr('class', 'card front');
                card4.attr('class', 'card center');

                csDots.eq(index).removeClass('active');
                csDots.eq(indexClick).addClass('active');


            }
        );
    */



});
