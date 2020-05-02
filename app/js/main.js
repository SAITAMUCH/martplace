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

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $(".followers__inner-box").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
    });

    $('input, select').styler();

    $('.grid').on('click', function () {
        $('.product__item').removeClass('list');
        $('.grid').addClass('active');
        $('.list').removeClass('active');
    });
    $('.list').on('click', function () {
        $('.product__item').addClass('list');
        $('.list').addClass('active');
        $('.grid').removeClass('active');
    });

    $('.aside__title').click(function () {
        $(this).parent().children('.category__list, .filters__list, .price__list').slideToggle();
        return false;
    });

    $('.single__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    var mixer = mixitup('.products__inner-box, .product-page__items');

});

