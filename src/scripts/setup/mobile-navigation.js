class MobileNav {
    constructor($trigger, $body) {
        this.$trigger = $trigger;
        this.$body = $body;
        this.targetId = $trigger.attr('href');
        this.$target = $(this.targetId);
        this.$closeTrigger = $(this.$target.find('.js-mobile-navigation__close-trigger'));
        
        let obj = this;
        this.$trigger.on('click', function(e) {
            e.preventDefault();
            obj.open();
        });
        this.$closeTrigger.on('click', function(e) {
            e.preventDefault();
            obj.close();
        });
    }
    open() {
        this.$trigger.addClass('is-active');
        this.$target.addClass('is-open');
        this.$body.addClass('mobile-navigation-open')
    }
    close() {
        this.$trigger.removeClass('is-active');
        this.$target.removeClass('is-open');
        this.$body.removeClass('mobile-navigation-open')
    }
}

export default MobileNav;
