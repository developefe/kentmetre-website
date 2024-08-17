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
        } else {
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

servicesSlideHeadline.controller.control = [servicesVid, servicesNum, servicesImg, servicesTitle, servicesExp]


// Brands

$('.brands .bottom').height($('.brands .bottom .tab-content:nth-child(1)').height());

var blob = $('.brands .top .tab-links .hover-blob');

function positionBlob(el) {
    var w = el.outerWidth();
    var h = el.outerHeight();
    var x = el.offset().left - $('.brands .top .tab-links').offset().left;
    var y = el.offset().top - $('.brands .top .tab-links').offset().top;

    blob.css({ width: w, height: h, left: x + "px", top: y + "px" });
}

positionBlob($('.brands .top .tab-links .link-item:nth-child(1)'));

$('.brands .top .tab-links .link-item').on('click', function () {
    var index = $(this).index();

    positionBlob($(this));
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.brands .bottom .tab-content:nth-child(' + (index + 1) + ')').addClass('active').siblings().removeClass('active');
    $('.brands .bottom').height($('.brands .bottom .tab-content:nth-child(' + (index + 1) + ')').height());
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
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });
    $('header .link-item#what-we-do').on('click', function () {
        $('html, body').animate({ scrollTop: $('.services-slider').offset().top - 5 }, 1000)
    });
    $('header .link-item#who-are-we').on('click', function () {
        $('html, body').animate({ scrollTop: $('.who-are-we').offset().top - 10 }, 1000)
    });
    $('header .link-item#sosyology').on('click', function () {
        $('html, body').animate({ scrollTop: $('.sosyology').offset().top - 40 }, 1000)
    });
    $('header .link-item#partners').on('click', function () {
        $('html, body').animate({ scrollTop: $('.brands').offset().top - 80 }, 1000)
    });
    $('header .link-item#contact').on('click', function () {
        $('html, body').animate({ scrollTop: $('.contact').offset().top - 30 }, 1000)
    });
} else {
    $('header .logo').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#what-we-do').on('click', function () {
        $('html, body').animate({ scrollTop: $('.services-slider').offset().top - 5 }, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#who-are-we').on('click', function () {
        $('html, body').animate({ scrollTop: $('.who-are-we').offset().top - 10 }, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#sosyology').on('click', function () {
        $('html, body').animate({ scrollTop: $('.sosyology').offset().top - 40 }, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#partners').on('click', function () {
        $('html, body').animate({ scrollTop: $('.brands').offset().top - 80 }, 1000)
        afterCloseMobileMenu();
    });
    $('.mobile-menu .link-item#contact').on('click', function () {
        $('html, body').animate({ scrollTop: $('.contact').offset().top - 30 }, 1000)
        afterCloseMobileMenu();
    });
}

// Sosyology Popup

$('.sosyology .bottom .swiper .swiper-wrapper .swiper-slide .exp .btn, .sosyology .bottom .swiper .swiper-wrapper .swiper-slide .img').on('click', function () {

    var parent = $(this).closest('.swiper-slide'),
        img = parent.attr('data-img'),
        title = parent.attr('data-title'),
        subtitle = parent.attr('data-subtitle'),
        exp = parent.attr('data-exp');

    $('.sosyology-popup .img').css('background-image', 'url(' + img + ')');
    $('.sosyology-popup .texts .top p').text(title);
    $('.sosyology-popup .texts .bottom .sub-title').text(subtitle);
    $('.sosyology-popup .texts .bottom p:not(.sub-title)').text(exp);

    $('.sosyology-popup').addClass('active')
});

$('.sosyology-popup .texts .top .close, .sosyology-popup .bg').on('click', function () {
    $('.sosyology-popup').removeClass('active')
})

// Entrance Video Animation

/* The encoding is super important here to enable frame-by-frame scrubbing. */

// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

// const video = $("#v0");
// let src = video.currentSrc || video.src;
// console.log(video, src);

// // /* Make sure the video is 'activated' on iOS */
// function once(el, event, fn, opts) {
//     var onceFn = function (e) {
//         el.removeEventListener(event, onceFn);
//         fn.apply(this, arguments);
//     };
//     el.addEventListener(event, onceFn, opts);
//     return onceFn;
// }

// once(document.documentElement, "touchstart", function (e) {
//     video.play();
//     video.pause();
// });

// // /* ---------------------------------- */
// // /* Scroll Control! */

// gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline({
//     defaults: { duration: 1 },
//     scrollTrigger: {
//         trigger: ".entrance .sticky-holder",
//         start: "top top",
//         end: "top+=2000px top",
//         scrub: true,
//         markers: true,
//     }
// });

// once(video, "loadedmetadata", () => {
//     tl.fromTo(
//         video,
//         {
//             currentTime: 0
//         },
//         {
//             currentTime: video.duration || 1
//         }
//     );
// });

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
// setTimeout(function () {
//     if (window["fetch"]) {
//         fetch(src)
//             .then((response) => response.blob())
//             .then((response) => {
//                 var blobURL = URL.createObjectURL(response);

//                 var t = video.currentTime;
//                 once(document.documentElement, "touchstart", function (e) {
//                     video.play();
//                     video.pause();
//                 });

//                 video.setAttribute("src", blobURL);
//                 video.currentTime = t + 0.01;
//             });
//     }
// }, 1000);

/* ---------------------------------- */


// var frameNumber = 1, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 100, 
//     // get page height from video duration
//     setHeight = $(".entrance"), 
//     // select video element         
//     vid = document.getElementById('v0'); 

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.css('height', Math.floor(vid.duration) * playbackConst + "px");
// });

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);




    // GSAP ve ScrollTrigger'ın yüklü olduğundan emin olun
// gsap.registerPlugin(ScrollTrigger);

// // Video elementini seçin
// const video = document.querySelector('#v0');

// let videoDuration = 0;

// // Video yüklendiğinde süresini al
// video.addEventListener('loadedmetadata', () => {
//     videoDuration = video.duration;
// });

// // ScrollTrigger ayarlarını yapın
// ScrollTrigger.create({
//     trigger: ".entrance .sticky-holder",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     onUpdate: self => {
//         if (videoDuration > 0) {
//             const scrollPos = self.progress;
//             video.currentTime = scrollPos * videoDuration;
//         }
//     }
// });

// // Video oynatımını başlat
// video.pause();


// Chart

var chartName = "Nüfus";
var chartSeriesData = [];
var chartXAxisData = [];

var options = {
    series: [{
        name: 'Çelik',
        data: [42, 52, 45, 63, 26, 37, 25, 12, 18]
    },{
        name: 'Çimento',
        data: [20, 14, 25, 45, 53, 24, 65, 21, 64]
    },],
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
            colors: ["#ffffff0"],
            shadeIntensity: 0,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [0, 1]
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
        curve: 'straight',
        width: 2,
    },
    xaxis: {
        // type: 'datetime',
        categories: ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015']
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

var options = {
    series: [
        {
            name: 'Çelik',
            data: [42, 52, 45, 63, 26, 37, 25, 12, 18]
        },
        {
            name: 'Çimento',
            data: [20, 14, 25, 45, 53, 24, 65, 21, 64]
        },
        {
            name: 'Çimento 2',
            data: [27, 12, 35, 55, 62, 34, 85, 61, 69]
        },
        {
            name: 'Çimento 3',
            data: [10, 14, 55, 45, 73, 51, 65, 36, 42]
        },
        {
            name: 'Çimento 4',
            data: [40, 34, 37, 45, 50, 37, 45, 11, 84]
        },
        {
            name: 'Çimento 5',
            data: [20, 14, 25, 45, 53, 24, 65, 21, 64]
        }
    ],
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
            colors: ["#ffffff0"],
            shadeIntensity: 0,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [0, 1]
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
        curve: 'straight',
        width: 2,
    },
    xaxis: {
        // type: 'datetime',
        categories: ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015']
    },
    tooltip: {
        theme: 'dark',
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart2 = new ApexCharts(document.querySelector("#chart-2"), options);
chart2.render();

// Map and Datas

// JSON dosyasını yükleme fonksiyonu
async function fetchData() {
    const response = await fetch('assets/datas/map-datas.json'); // JSON dosyasının yolu
    const data = await response.json();
    return data;
}

// Veriyi il bazında filtreleme fonksiyonu
function filterByCityAndCategory(data, city, category, subCategory) {
    let filteredData = data.filter(item => item.SEHIR === city && item.KATEGORI === category);

    if (subCategory && subCategory !== "TUMU") {
        filteredData = filteredData.filter(item => item.ALT_KATEGORI === subCategory);
    }

    return filteredData;
}

// Veriyi yıl büyükten küçüğe sıralama fonksiyonu
function sortByYear(data) {
    return data.sort((a, b) => b.YIL - a.YIL);
}

// Filtrelenmiş veriyi tabloya ekleme fonksiyonu
function updateTable(data) {
    const tableBody = $('#data-table-body');
    var totalCount;
    tableBody.empty(); // Önceki içeriği temizle

    chartName = data[0].SEHIR;
    chartSeriesData = [];
    chartXAxisData = [];

    data.forEach((item, index) => {
        const row = `
            <tr>
                <td>${item.YIL}</td>
                <td>${item.SEHIR}</td>
                <td>${item.KATEGORI}</td>
                <td>${item.ALT_KATEGORI}</td>
                <td>${item.DEGER.toLocaleString()}</td>
            </tr>
        `;
        totalCount = index;
        tableBody.append(row);

        chartSeriesData.push(item.DEGER.toLocaleString());
        chartXAxisData.push(item.YIL);
    });

    // chart.updateOptions({
    //     xaxis: {
    //        categories: chartXAxisData
    //     },
    //     series: [{
    //        data: chartSeriesData
    //     }],
    //  });

    //  chart2.updateOptions({
    //     xaxis: {
    //        categories: chartXAxisData
    //     },
    //     series: [{
    //        data: chartSeriesData
    //     }],
    //  });

    if (data.length == 0) {
        tableBody.append("<p>Veri bulunamadı. Lütfen arama parametrelerini değiştiriniz.</p>")
    }

    $('.map-datas .left .table-container table thead tr th:nth-child(4) span').remove();
    $('.map-datas .left .table-container table thead tr th:nth-child(4)').append('<span>('+ (totalCount ? totalCount : 0) +')</span>')
}

// Veriyi işleme ve tabloya bastırma
var memoFilteredData;

async function processDataAndDisplay(city, category, subCategory) {
    memoFilteredData = [city, category, subCategory]

    const data = await fetchData();
    let filteredData = filterByCityAndCategory(data, memoFilteredData[0], memoFilteredData[1], memoFilteredData[2]);
    filteredData = sortByYear(filteredData);
    updateTable(filteredData);
}
processDataAndDisplay('ISTANBUL', 'EKONOMI', 'TUMU')

// Select

$(document).ready(function () {
    $('#map-citys').select2();
    // $('#map-category').select2();
});

jQuery(document).ready(function() {
    // Verileri fetch etme fonksiyonu
    // async function fetchSubCategorys(region, category) {
    //     // Örneğin, JSON verilerini fetch ediyoruz (burada JSON verisi simüle edilmiştir)
    //     let subcategorys = []; // Bu array fetch edilen alt kategorilerle doldurulacak

    //     // Örnek JSON verisi
    //     const data = await fetchData()

    //     // Gelen verilerden alt kategorileri filtrele
    //     subcategorys = data
    //         .filter(item => item.SEHIR === region && item.KATEGORI === category)
    //         .map(item => item.ALT_KATEGORI);

    //     // Tekrarlayan alt kategorileri kaldır
    //     subcategorys = [...new Set(subcategorys)];

    //     return subcategorys;
    // }

    // Select2'nin initialize edilmesi
    // $('#map-subcategory').select2();

    // Alt kategorileri select2'ye ekleme fonksiyonu
    // async function createOptionsForSubcategorys(region, kategori) {
    //     let altKategoriler = await fetchSubCategorys(region, kategori);
    //     let $select = $('#map-subcategory');

    //     // Önce mevcut seçenekleri temizle
    //     $select.empty();

    //     // "Tümü" seçeneği ekleme
    //     $select.append('<option value="TUMU">Tümü</option>');

    //     // Yeni seçenekleri ekleme
    //     altKategoriler.forEach(function(altKategori) {
    //         $select.append(new Option(altKategori, altKategori));
    //     });

    //     // Select2'yi güncelleme
    //     $select.trigger('change');
    // }

    // setTimeout(() => {
    //     createOptionsForSubcategorys('ARTVIN', 'NÜFUS');
    // });
    
    var isManualChange = false;
    var isSelectClick = false;
    
    $('#map-citys').on('change', function() {
        if (!isManualChange) {
            var city = $("#map-citys option:selected").val();
            var cityNumber = $("#map-citys option:selected").index() + 1;
            isSelectClick = true;
            $('.map-datas .right div#vmap svg >g path:nth-child(' + cityNumber + ')').click();
            processDataAndDisplay(city, memoFilteredData[1], memoFilteredData[2]);
        }

        // createOptionsForSubcategorys(city, memoFilteredData[1], memoFilteredData[2])

        isManualChange = false;
    });
    
    // $('#map-category').on('change', function() {
    //     var category = $("#map-category option:selected").val();
    //     processDataAndDisplay(memoFilteredData[0], category, memoFilteredData[2])
    //     createOptionsForSubcategorys(memoFilteredData[0], category, memoFilteredData[2])
    // });
    
    // $('#map-subcategory').on('change', function() {
    //     var subcategory = $("#map-subcategory option:selected").val();
    //     processDataAndDisplay(memoFilteredData[0], memoFilteredData[1], subcategory)
    // });

    jQuery('#vmap').vectorMap(
        {
            map: 'turkey_tr',
            backgroundColor: '#ffffff0',
            borderColor: '#2C5CAD',
            borderOpacity: 1,
            borderWidth: .5,
            color: '#122763',
            enableZoom: false,
            hoverColor: '#2E9DFF',
            hoverOpacity: null,
            scaleColors: ['#FFFFFF', '#FF0000'],
            selectedColor: '#2E9DFF',
            selectedRegion: null,
            showTooltip: true,
            normalizeFunction: 'polynomial',
            onRegionClick: function(element, code, region)
            {   
                
                isManualChange = true;
    
                var region = region.toUpperCase();
                var trMap = {
                    'ç':'c',
                    'Ç':'C',
                    'ğ':'g',
                    'Ğ':'G',
                    'ş':'s',
                    'Ş':'S',
                    'ü':'u',
                    'Ü':'U',
                    'ı':'i',
                    'İ':'I',
                    'ö':'o',
                    'Ö':'O'
                };
    
                for (var key in trMap) {
                    var regExp = new RegExp(key, 'g');
                    region = region.replace(regExp, trMap[key]);
                }
    
                if (!isSelectClick) {
                    processDataAndDisplay(region, memoFilteredData[1], memoFilteredData[2]);
                    // createOptionsForSubcategorys(region, memoFilteredData[1], memoFilteredData[2] )
                }
                
                $('#map-citys').val(region)
                console.log(region);
                
                $('#map-citys').trigger('change')
                
                isSelectClick = false;
            }
        });
        
    $('.map-datas .right div#vmap svg >g path:nth-child(34)').click();
});

// 

// const video2 = document.getElementById('videoxx');
// const totalScrollHeightd = document.body.scrollHeight - window.innerHeight;

// // Kaydırma sırasında çalışacak olay
// window.addEventListener('scroll', function () {
//     const scrollTops = window.scrollY;
//     const scrollFractions = scrollTops / totalScrollHeightd;
//     const videoDuration2 = video2.duration;

//     video2.currentTime = scrollFractions * videoDuration2;
// });