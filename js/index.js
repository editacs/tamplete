$(document).ready(function () {
    $("#loading").fadeOut(2000, function () {
        $("body").css("overflow-y", "auto")
    })
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
        $("#btnUp").fadeIn(500);
    }
    else {
        $("#btnUp").fadeOut(500);
    }
})
$("#btnUp").click(function(){
    $("body,html").animate({scrollTop:0},1000)
})



$("nav a").click(function () {
    let aHref = $(this).attr("href");
    let aOffset = $(aHref).offset().top;
    $("body,html").animate({ scrollTop: aOffset }, 1000)
})

$(window).on('load', function() {
  $('#loading').fadeOut(500, function() {
    $('body').css('overflow', 'auto');
  });
});

