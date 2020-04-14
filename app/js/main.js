$(function () {

    $(".slider__inner").slick({
        dots: false,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
    });

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true,
        normalFill: "grey"
    });


    
    var mixer = mixitup('.products__inner-box');

});

