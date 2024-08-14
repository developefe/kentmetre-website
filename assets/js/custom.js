// Javascript

// Header

function header() {
	var height = $('header').outerHeight();
	var lastst = 0;

    $(window).on('scroll', function () {
		var scrollTop = $(this).scrollTop();

        if (scrollTop > 199) {
            if (scrollTop > lastst) {
                $('header').removeClass('active');
                $('header').addClass('in-active');
            } else {
                $('header').addClass('active');
                $('header').removeClass('in-active');
            }
        }else {
            $('header').removeClass('active');
            $('header').removeClass('in-active');
        }

		lastst = scrollTop;
	});

	$(window).scroll(function (event) {
		if ($(window).scrollTop() > 80) {
			$('header').addClass('fixed-active');
		} else {
			$('header').removeClass('fixed-active');
		}
	});
}

header();

// Main Slider

var entranceLeft = new Swiper(".entrance-left", {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 700,
    pagination: {
        el: ".entrance .slider-props .right .top .swiper-pag",
        type: "fraction",
    },
    navigation: {
        prevEl: ".entrance .slider-props .left .top .custom-nav .prev",
        nextEl: ".entrance .slider-props .left .top .custom-nav .next",
    },
});

var entranceRight = new Swiper(".entrance-right", {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 50,
});

entranceLeft.controller.control = entranceRight;
entranceRight.controller.control = entranceLeft;


// Sosyology Slider

new Swiper(".sosyology-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 700,
    navigation: {
        prevEl: ".sosyology .top .custom-nav .prev",
        nextEl: ".sosyology .top .custom-nav .next",
    },
    breakpoints: {
        1550: {
            slidesPerView: 2.3,
        },
        1440: {
            slidesPerView: 2.2,
        },
        1201: {
            slidesPerView: 2.1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 1.8,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 30,
        }
    }
});

// Services section

var servicesHeadlines = new Swiper(".services-slider .services-box.slider-controll .services-headlines", {
    slidesPerView: 4,
    direction: "vertical",
    spaceBetween: 10,
    speed: 700,
    breakpoints: {
        1201: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        }
    }
});

var servicesSlideHeadline = new Swiper(".services-slider .services-box.slide-headline .swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 700,
    thumbs: {
        swiper: servicesHeadlines,
    },
    navigation: {
        prevEl: ".services-slider .services-box.slider-controll .custom-nav .prev",
        nextEl: ".services-slider .services-box.slider-controll .custom-nav .next",
    },
});

var servicesVid = new Swiper(".services-slider .services-box.vid .services-vid-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 700,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: ["-150%", 0, -800],
        },
        next: {
            translate: ["150%", 0, -800],
        },
    },
});

var servicesNum = new Swiper(".services-box.num-slide .swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 700,
});

var servicesImg = new Swiper(".services-slider .services-box.image-slide .swiper", {
    slidesPerView: 1,
    direction: "vertical",
    spaceBetween: 0,
    speed: 700,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, "-20%", -1],
        },
        next: {
            translate: [0, "100%", 0],
        },
    },
});

var servicesTitle = new Swiper(".services-slider .services-box.service-title .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 700,
});

var servicesExp = new Swiper(".services-slider .services-box.service-exp .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 700,
});

servicesSlideHeadline.controller.control = [servicesVid,servicesNum,servicesImg,servicesTitle,servicesExp]


// Brands

$('.brands .bottom').height($('.brands .bottom .tab-content:nth-child(1)').height());

var blob = $('.brands .top .tab-links .hover-blob');

function positionBlob(el) {
    var w = el.outerWidth();
    var h = el.outerHeight();
    var x = el.offset().left - $('.brands .top .tab-links').offset().left;
    var y = el.offset().top - $('.brands .top .tab-links').offset().top;

    blob.css({width: w, height: h, left: x + "px", top: y + "px"});
}

positionBlob($('.brands .top .tab-links .link-item:nth-child(1)'));

$('.brands .top .tab-links .link-item').on('click', function () {
    var index = $(this).index();

    positionBlob($(this));
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.brands .bottom .tab-content:nth-child('+ (index + 1) +')').addClass('active').siblings().removeClass('active');
    $('.brands .bottom').height($('.brands .bottom .tab-content:nth-child('+ (index + 1) +')').height());
});


// FAQ

$('.faq .questions .question-item .head').on('click', function () {
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().removeClass('active');
    $(this).next().slideToggle();
});

// About Us

if ($(window).width() < 1441) {
    $('.who-are-we .bottom .left').addClass('swiper');
    $('.who-are-we .bottom .left .company-properties').addClass('swiper-wrapper');
    $('.who-are-we .bottom .left .company-properties .property-item').addClass('swiper-slide');

    var aboutUsSlider = new Swiper(".who-are-we .bottom .left.swiper", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        speed: 700,
        breakpoints: {
            1201: {
                slidesPerView: 2.6,
            },
            992: {
                slidesPerView: 1.8,
                spaceBetween: 50,
            },
            1: {
                centeredSlides: true,
            }
        }
    });

    if ($(window).width() < 768) {
        aboutUsSlider.slideTo(1);
    }
}

// Mobile Menu

if ($(window).width() < 1200) {
    $('header .hamburger-menu').on('click', function () {
        $('body, html').addClass('mobile-menu-opened');
    });
    $('.mobile-menu .close, .mobile-menu .ovarlay').on('click', function () {
        $('body, html').removeClass('mobile-menu-opened');
    });
}

function afterCloseMobileMenu() {
    setTimeout(() => {
        $('body, html').removeClass('mobile-menu-opened');
        setTimeout(() => {
            $('header').removeClass('active');
            $('header').addClass('in-active');
        }, 401);
    }, 600);
}

if ($(window).width() > 991) {
    $('header .logo').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1000)
    });
    $('header .link-item#what-we-do').on('click', function () {
        $('html, body').animate({scrollTop: $('.services-slider').offset().top - 5}, 1000)
    });
    $('header .link-item#who-are-we').on('click', function () {
        $('html, body').animate({scrollTop: $('.who-are-we').offset().top - 10}, 1000)
    });
    $('header .link-item#sosyology').on('click', function () {
        $('html, body').animate({scrollTop: $('.sosyology').offset().top - 40}, 1000)
    });
    $('header .link-item#partners').on('click', function () {
        $('html, body').animate({scrollTop: $('.brands').offset().top - 80}, 1000)
    });
    $('header .link-item#contact').on('click', function () {
        $('html, body').animate({scrollTop: $('.contact').offset().top - 30}, 1000)
    });
}else {
    $('header .logo').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1000);
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#what-we-do').on('click', function () {
        $('html, body').animate({scrollTop: $('.services-slider').offset().top - 5}, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#who-are-we').on('click', function () {
        $('html, body').animate({scrollTop: $('.who-are-we').offset().top - 10}, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#sosyology').on('click', function () {
        $('html, body').animate({scrollTop: $('.sosyology').offset().top - 40}, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#partners').on('click', function () {
        $('html, body').animate({scrollTop: $('.brands').offset().top - 80}, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#contact').on('click', function () {
        $('html, body').animate({scrollTop: $('.contact').offset().top - 30}, 1000)
        afterCloseMobileMenu();
    });
}

// Select

$(document).ready(function() {
    $('.custom-select').select2();
});

// Chart

var options = {
    series: [{
        name: 'Ekonomi',
        data: [31, 40, 28, 51, 42, 109, 100, 60, 75, 109, 100, 120, 90,]
    }],
    chart: {
        height: 185,
        type: 'area',
        foreColor: "#9C9EAB",
        toolbar: {
            show: false,
            tools: {
                download: false,
                selection: false,
              },
        }
    },
    fill: {
        type: "gradient",
        gradient: {
        colors: ["#ffffff"],
          shadeIntensity: 0,
          opacityFrom: 0.7,
          opacityTo: .3,
          stops: [0, 100]
        }
    },
    grid: {
      borderColor: "#202543",
      clipMarkers: false,
    //   yaxis: {
    //     lines: {
    //       show: false
    //     }
    //   }
    },
    colors: ['#878999'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    xaxis: {
        // type: 'datetime',
        categories: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130"]
    },
    tooltip: {
        theme: 'dark',
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// Sosyology Popup

$('.sosyology .bottom .swiper .swiper-wrapper .swiper-slide .exp .btn, .sosyology .bottom .swiper .swiper-wrapper .swiper-slide .img').on('click', function () {

    var parent = $(this).closest('.swiper-slide'),
        img = parent.attr('data-img'),
        title = parent.attr('data-title'),
        subtitle = parent.attr('data-subtitle'),
        exp = parent.attr('data-exp');

    $('.sosyology-popup .img').css('background-image', 'url('+ img +')');
    $('.sosyology-popup .texts .top p').text(title);
    $('.sosyology-popup .texts .bottom .sub-title').text(subtitle);
    $('.sosyology-popup .texts .bottom p:not(.sub-title)').text(exp);

    $('.sosyology-popup').addClass('active')
});

$('.sosyology-popup .texts .top .close, .sosyology-popup .bg').on('click', function () {
    $('.sosyology-popup').removeClass('active') 
})