import 'slick-carousel';

const MultiCarousel = {
    init() {
        $('.js-multi-carousel').each(function() {
            const $carousel = $(this);
            $carousel.slick({
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                prevArrow: '<button type="button" class="topic-listing__button-prev slick-prev btn btn-primary btn-round"><span class="icon icon-arrowleft"></span><span class="visually-hidden">Previous</span></button>',
                nextArrow: '<button type="button" class="topic-listing__button-next slick-next btn btn-primary btn-round"><span class="icon icon-arrowright"></span><span class="visually-hidden">Next</span></button>',
                variableWidth: true,
                responsive: [
                  {
                    breakpoint: 1399,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    },
                  },
                  {
                    breakpoint: 1070,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    },
                  },
                  {
                    breakpoint: 576,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ],
              });
        })
    },
};

export default MultiCarousel;
