$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");



});


$(document).ready(
    $('.questions .item .head').click(function () {
        $(this).siblings('.bottom').stop(true,true).slideToggle(200);
        $(this).parent().toggleClass('open');
    })

)
