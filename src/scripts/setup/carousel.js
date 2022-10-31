import 'slick-carousel';

const Carousel = {
    init() {
        $('.js-carousel').each(function() {
            const $carousel = $(this);
            $carousel.slick({
                prevArrow: '<button type="button" class="slick-prev carousel__prev"><span class="icon icon-arrowleft"></span><span class="visually-hidden">Previous</span></button>',
                nextArrow: '<button type="button" class="slick-next carousel__next"><span class="icon icon-arrowright"></span><span class="visually-hidden">Next</span></button>',
              });
        })
        
    },
};

export default Carousel;
