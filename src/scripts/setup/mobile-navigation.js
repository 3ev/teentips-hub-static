class MobileNav {
    constructor($trigger, $html) {
        this.$trigger = $trigger;
        this.$html = $html;
        this.checkBreakpoint();
        window.addEventListener('resize', () => {
            this.checkBreakpoint();
        });
    }
    checkBreakpoint() {
        if (window.matchMedia('(max-width: 1199px)').matches) {
            this.activate();
        }
        else {
            this.deactivate();
        }
    }
    activate() {
        this.active = true;
        this.targetId = this.$trigger.attr('href');
        this.$target = $(this.targetId);
        this.$closeTrigger = $('.js-mobile-navigation__close-trigger');
        this.$menus = $('.js-mobile-navigation');
        this.$menuItems = $('.js-mobile-navigation__menu-item');
        this.$backTriggers = $('.js-mobile-navigation__back-trigger');
        this.$overlay = $('.js-mobile-navigation__overlay');

        this.attach();
        this.setPlacement();
        $(window).on('resize', () => {
            this.setPlacement();
        });
    }
    deactivate() {
        if(this.active == true) {
            this.close();
            return;
        }
        this.active = false;

    }
    attach() {
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
            const targetId = $(this).attr('href');
            if (typeof targetId === 'undefined') {
                return;
            }
            const firstChar = Array.from(targetId)[0]; 
            if(firstChar !== '#') {
                return;
            }
            const $target = $(targetId);
            obj.openNavItem($target);
        });
        this.$backTriggers.on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            obj.closeSelf($this);
        });
        this.$menuItems.each(function() {
            const $menuItem = $(this);
            const $summary = $menuItem.find('.js-mobile-navigation__collapsible-trigger');
            if($summary.length == 0) {
                return;
            }
            $summary.on('click', function() {
                $menuItem.toggleClass('is-open');
                const $icon = $menuItem.find('.mobile-navigation__menu-item-icon');
                $icon.toggleClass('rotate-180');
            });
        });
    }
    open() {
        this.$trigger.addClass('is-active');
        this.$target.addClass('is-open');
        this.$html.addClass('mobile-navigation-open');
        this.$overlay.addClass('is-visible');
    }
    close() {
        this.$trigger.removeClass('is-active');
        this.$target.removeClass('is-open');
        this.$html.removeClass('mobile-navigation-open');
        this.$overlay.removeClass('is-visible');
        this.$menus.each(function() {
            $(this).removeClass('is-open');
        });
    }
    setPlacement() {
        this.$menus.each(function() {
            const $menu = $(this);
            const $header = $menu.find('.js-mobile-navigation__header');
            const mobileNavHeaderHeight = $header.css('height');
            const $menuList = $menu.find('.mobile-navigation__menu');
            $menuList.css('top', mobileNavHeaderHeight);
        });
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
