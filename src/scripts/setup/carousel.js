import 'slick-carousel';

const Carousel = {
    init() {
        $('.carousel').each(function() {
            const $carousel = $(this);
            $carousel.slick();
        })
        
    },
};

export default Carousel;
