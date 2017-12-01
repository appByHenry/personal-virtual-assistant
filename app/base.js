$(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $("#top-header").addClass("scroll-class");
        } else {
            $("#top-header").removeClass("scroll-class");
        }
    });
    var selectedEffect = "bounce";

    var myInterval = setInterval(function() {
        
        $('.overlay-txt > .blinking-div').toggle(selectedEffect, null, 500);
    }, 2000);

    console.log("On page lopad");
    $('.slider-class-amazon').slick({

        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000

    });

    var obj = {
        "video": {
            "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='http://www.youtube.com/embed/TTOKvj9sQZg' frameborder='0' allowFullScreen></iframe>"
        }
    };

    $("#video-container").html(obj.video.value);

});