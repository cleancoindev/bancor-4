$( document ).ready(function() {

    // Mobile menu

    $('.header_wrap__icon').on('click', function(){
        $('.header_mobile').addClass('nav_active');
    });

    $('.header_mobile__top .icon').on('click', function(){
        $('.header_mobile').removeClass('nav_active');
    });

    //Slider

    var Slider = new Swiper('.swiper-container', {
        slidesPerView: 4,
        speed: 1000,
        freeMode: true,
        freeModeMomentum: true,
        mousewheelSensitivity: 0.02,
        simulateTouch: true,
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                direction: 'vertical',
                slidesPerView: 2,
                speed: 1000,
                freeMode: true,
                freeModeMomentum: true,
                mousewheelSensitivity: 0.02,
                simulateTouch: true
            },
        }
    });

    // $(window).on("resize orientationchange", function(){
    //     var ww = document.documentElement.clientWidth;
    //     $el = $(Slider.$el);
    //     if (ww > 768) $el.removeClass("swiper-container-vertical").addClass("swiper-container-horizontal");
    //     else $el.removeClass("swiper-container-horizontal").addClass("swiper-container-vertical");
    //     Slider.update();
    // });

    // Protocol slider

    var Slider1 = new Swiper('.protocol_slider', {
        slidesPerView: 1,
        speed: 1000,
        noSwiping: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Home slider

    var Slider1 = new Swiper('.home_slider', {
        slidesPerView: 1,
        speed: 500,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        // autoHeight: true,
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });

    // Foundation slider

    var Slider1 = new Swiper('.foundation_slider', {
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Scroll to top

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });

    // Price

    $.get("https://api.bancor.network/0.1/currencies/BNT/ticker?fromCurrencyCode=ETH&displayCurrencyCode=USD", function(a,b) {
        $('#bnt_price').html(a['data']['price'].toFixed(2));
    });

    // Video play

    $('.spu-open-2135').on('click',function(e){
        $('#video')[0].src = $(this).attr('href') + '&autoplay=1';
        e.preventDefault();
    });

    // Load more

    var list = $(".press_cat_wrap .blog_item ");
    var numToShow = 6;
    var button = $("#next");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function(){
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });

    // Open video

    $(function(){
        $("#video").click(function(){
            $(".video").modal('show');
        });
        $(".test").modal({
            closable: true
        });
    });

    // Roadmap

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#roadmap"
    })
        .on('start', function () {
            var duration =5;
            var stagger = 2;
            var someClassName = '.bancorx_roadmap_wrap__item:nth-child(-n+3)';
            var animationClass = 'white';
            var someClassName2 = '.bancorx_roadmap_wrap .line';
            var animationClass2 = 'white_line';
            TweenMax.staggerTo(someClassName2, 1, {className: '+=' + animationClass2}, 1);
            TweenMax.staggerTo(someClassName, duration, {className: '+=' + animationClass, transformOrigin: 'bottom right', ease: Power4.easeOut}, stagger);

        })

        .addTo(controller);

    // Network numbers

    if ($('.network_numbers__item.conversions'))
    {
        $.get("https://api.bancor.network/0.1/currencies/convertiblePairs", function(a) {
            var t_count = Object.keys(a.data).filter(function(i){return i.length < 6}).length;
            $('.network_numbers__item.tokens > p').html(t_count);
            $('.network_numbers__item.token_pairs > p').html((t_count*(t_count-1))/2);
        });
        setInterval(function() {
            $('.network_numbers__item.conversions > p').html('$'+formatMoney(1225162480+((Date.now()-1540401281596)/1000 * 36)));
        },200);
    }

    function formatMoney(n) {
        var c = 0,
            d = ".",
            t = ",",
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

});


