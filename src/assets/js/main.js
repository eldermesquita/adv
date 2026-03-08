/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */



import $ from 'jquery'
window.$ = window.jQuery = $
import Swiper from 'swiper';
import { WOW } from 'wowjs'

import '@assets/css/animate.css'
import '@assets/css/meanmenu.css'
import '@assets/js/jquery.meanmenu.min.js'

(function ($) {
    "use strict";

    $(document).ready(function () {





        if ($(".post-filter").length) {
            var postFilterList = $(".post-filter li");
            // for first init
            $(".filter-layout").isotope({
                filter: ".filter-item",
                animationOptions: {
                    duration: 500,
                    easing: "linear",
                    queue: false
                }
            });
            // on click filter links
            postFilterList.on("click", function () {
                var Self = $(this);
                var selector = Self.attr("data-filter");
                postFilterList.removeClass("active");
                Self.addClass("active");

                $(".filter-layout").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: "linear",
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($(".post-filter.has-dynamic-filter-counter").length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
                "li"
            );

            activeFilterItem.each(function () {
                var filterElement = $(this).data("filter");
                var count = $(".filter-layout").find(filterElement).length;
                $(this).append("<sup>[" + count + "]</sup>");
            });
        }


        /*-- Price Range --*/
        function priceFilter() {
            if ($(".price-ranger").length) {
                $("#slider-range").slider({
                    range: true,
                    min: 56,
                    max: 1578,
                    values: [56, 789], // Default values
                    slide: function (event, ui) {
                        $(".ranger-min-max-block .min").text("$" + ui.values[0]);
                        $(".ranger-min-max-block .max").text("$" + ui.values[1]);
                    }
                });

                $(".ranger-min-max-block .min").text("$" + $("#slider-range").slider("values", 0));
                $(".ranger-min-max-block .max").text("$" + $("#slider-range").slider("values", 1));
            }
        }

        $(document).ready(function () {
            priceFilter();
        });

        //>> Hero-1 Slider Start <<//
        const sliderActive2 = ".hero-slider";
        const sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 2000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        const sliderActive3 = ".hero-slider2";
        const sliderInit4 = new Swiper(sliderActive3, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }

        animated_swiper(sliderActive2, sliderInit2, sliderActive3, sliderInit4);

        //>> Brand Slider Start <<//
        const brandSlider = new Swiper(".brand-slider", {
            spaceBetween: 95,
            speed: 1000,
            loop: "true",
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                475: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 6,
                },
            },
        });
        // Case Study Swiper Slide Start <<//
        const caseStudy = new Swiper(".caseStudy", {
            spaceBetween: 24,
            speed: 1000,
            loop: "true",
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3.2,
                },
                1199: {
                    slidesPerView: 2,
                },
                750: {
                    slidesPerView: 2,
                },
                700: {
                    slidesPerView: 1,
                },
            },
        });

        // Case Study 2 Swiper Slide Start <<//
        const caseStudy2 = new Swiper(".caseStudy2", {
            spaceBetween: 24,
            speed: 1000,
            loop: "true",
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1499: {
                    slidesPerView: 2.9,
                },
                1199: {
                    slidesPerView: 2,
                },
                750: {
                    slidesPerView: 2,
                },
                700: {
                    slidesPerView: 1,
                },
            },
        });


        if ($('.features-slider').length > 0) {
            const featuresSlider = new Swiper(".features-slider", {
                spaceBetween: 50,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1499: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> testimonial Slider Start <<//
        const testimonialSlide = new Swiper(".testimonial-slide", {
            spaceBetween: 0,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });


        if ($('.testimonial-slide-2').length > 0) {
            const testimonialSwiper2 = new Swiper(".testimonial-slide-2", {
                spaceBetween: 30,
                speed: 1000,
                loop: "true",
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                    },
                },
            });
        }

        //>> testimonial Slider Start <<//
        const testimonialSlide3 = new Swiper(".testimonial-slide-3", {
            spaceBetween: 0,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        // Case Study 2 Swiper Slide Start <<//
        const testimonial4 = new Swiper(".testimonial-4", {
            spaceBetween: 20,
            speed: 1000,
            loop: "true",
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                // reverseDirection: true,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3.5,
                },
                1199: {
                    slidesPerView: 2,
                },
                750: {
                    slidesPerView: 2,
                },
                700: {
                    slidesPerView: 1,
                },
            },
        });

        if ($('.service-slide').length > 0) {
            const serviceSlide = new Swiper(".service-slide", {
                spaceBetween: 20,
                speed: 1000,
                loop: true,
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    1699: {
                        slidesPerView: 4,
                    },
                    1599: {
                        slidesPerView: 4,
                    },
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($('.service-slide-2').length > 0) {
            const serviceSwiper2 = new Swiper(".service-slide-2", {
                spaceBetween: 20,
                speed: 2000,
                loop: true,
                // centeredSlides: true,
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1699: {
                        slidesPerView: 3.5,
                    },
                    1599: {
                        slidesPerView: 3,
                    },
                    1399: {
                        slidesPerView: 2.5,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    667: {
                        slidesPerView: 1.3,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Text Slider Start <<//
        if ($('.text-slider').length > 0) {
            const textSlider = new Swiper(".text-slider", {
                slidesPerView: 'auto',
                spaceBetween: 35,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 6000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        if ($('.text-slider-2').length > 0) {
            const textSlider2 = new Swiper(".text-slider-2", {
                slidesPerView: 'auto',
                spaceBetween: 35,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 6000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        //>>blog-post-slider Start <<//
        if ($('.blog-post-slider').length > 0) {
            const textSlider = new Swiper(".blog-post-slider", {
                slidesPerView: 'auto',
                spaceBetween: 35,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 2000,
                allowTouchMove: false,
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: true,
                },
            });
        }

        // Add payment amount area start here ***
        $(document).on("click", ".amount-btn", function () {
            // Remove the "active" class from all buttons
            $(".amount-btn").removeClass("active");

            // Add the "active" class to the clicked button
            $(this).addClass("active");

            // Get the text value of the clicked button
            let buttonValue = $(this).text();

            // Update the value attribute of the input element
            $(".addAmount-value").val(buttonValue);
        });
        // Add payment amount area end here ***
    }); // End Document Ready Function





// eslint-disable-next-line no-undef
})(jQuery); // End jQuery

