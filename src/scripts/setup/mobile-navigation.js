class MobileNav {
    constructor($trigger, $body) {
        this.$trigger = $trigger;
        this.$body = $body;
        this.targetId = $trigger.attr('href');
        this.$target = $(this.targetId);
        this.$closeTrigger = $(this.$target.find('.js-mobile-navigation__close-trigger'));
        this.$menuItems = $(this.$target.find('.js-mobile-navigation__menu-item'));
        this.$backTriggers = $('.js-mobile-navigation__back-trigger');
        
        let obj = this;
        this.$trigger.on('click', function(e) {
            e.preventDefault();
            obj.open();
        });
        this.$closeTrigger.on('click', function(e) {
            e.preventDefault();
            obj.close();
        });
        this.$menuItems.on('click', function(e) {
            e.preventDefault();
            const targetId = $(this).find('a').attr('href');
            const $target = $(targetId);
            obj.openNavItem($target);
        });
        this.$backTriggers.on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            obj.closeSelf($this);
        });
        
        // this.setPlacement();
        // window.addEventListener('resize', this.setPlacement);
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
    setPlacement() {
        const mobileNavHeaderHeight = $('.mobile-navigation__header').css('height');
        $('.mobile-navigation__menu').css('top', mobileNavHeaderHeight);
    }
    openNavItem($target) {
        $target.addClass('is-open');
    }
    closeNavItem($target) {
        $target.removeClass('is-open');
    }
    closeSelf($this){
        const targetID = $this.attr('aria-controls');
        const $target = $('#' + targetID);
        this.closeNavItem($target);
    }
}

export default MobileNav;
