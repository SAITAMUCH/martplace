$(function () {

    $(".slider__inner").slick({
        dots: false,
        draggable: false,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
    });

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        normalFill: "grey"
    });

    $(".followers__inner-box").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
    });



    var mixer = mixitup('.products__inner-box');

});

