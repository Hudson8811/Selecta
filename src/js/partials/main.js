$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");



});

var sliderIsLive = false;

$(document).ready(function () {

    $('.questions .item .head').click(function () {
        $(this).siblings('.bottom').stop(true, true).slideToggle(200);
        $(this).parent().toggleClass('open');
    })
    /*
        window.addEventListener("resize", function () {
            if (window.innerWidth <= 768) {
                $('.your-slider').slick('unslick');
                sliderIsLive = false;
            }
            else {
                if (sliderIsLive) {
                    $('.your-slider').slick();
                    sliderIsLive = true;
                }
            }
        });

    */

    $(".wrapper .watch").fancybox();

});
