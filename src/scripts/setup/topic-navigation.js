import Collapse from 'bootstrap/js/dist/collapse'

const TopicNav = {
    init() {
        this.$title = $('.js-topic-navigation__title');
        this.$items = $('.js-topic-navigation__list');
        this.checkBreakpoint();
        $(window).on('resize', () => {
            this.checkBreakpoint();
        });
    },
    checkBreakpoint() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            this.activateCollapse();
        }
        else {
            this.deactivateCollapse();
        }
    },
    activateCollapse() {
        this.collapsible = new Collapse('.js-topic-navigation__list', {
            toggle: false,
        });
        this.$items.addClass('collapse');
        this.$title.on('click', () => {
            this.collapsible.toggle();
        });
        this.$items.on('show.bs.collapse', () => {
            this.$title.addClass('is-open');
        });
        this.$items.on('hide.bs.collapse', () => {
            this.$title.removeClass('is-open');
        });
    },
    deactivateCollapse() {
        this.$items.collapse.dispose();
        this.$items.removeClass('collapse');
    },
};

export default TopicNav;
