let navItems = new Array;

const NavOver = {
    init() {
        this.navItems = new Array;
        this.checkBreakpoint();
        window.addEventListener('resize', () => {
            this.checkBreakpoint();
        });
    },
    checkBreakpoint() {
        if (window.matchMedia('(min-width: 1200px)').matches) {
            if(navItems.length > 0) {
                return;
            }
            this.activate();
        }
        else {
            this.deactivate();
        }
    },
    activate() {
        const closeAllNavs = this.closeAllNavs;
        const $html = $('html, body');
        const $overlay = $('.nav-over__overlay');
        const $homeLink = $('.js-site-header__logo');
        $('.js-site-header__nav-item').each(function() {
            const $navItem = $(this);
            navItems.push(new NavOverItem($navItem, $html, closeAllNavs, $overlay, $homeLink));
        });
        this.setPlacement();
        window.addEventListener('resize', this.setPlacement);
    },
    deactivate() {
        if(this.navItems.length == 0) {
            return;
        }
        for (let navItem = 0; navItem < navItems.length; navItem++) {
            const element = array[navItem];
            element.closeAllSubNavs();
        }
        this.closeAllNavs();
    },
    closeAllNavs() {
        for (const navItem of navItems) {
            if(navItem.isActive) {
                navItem.close();
            }
        }
    },
    setPlacement() {
        const siteHeaderHeight = $('.js-site-header').outerHeight();
        for (const navItem of navItems) {
            const $target = navItem.$target;
            $target.css('padding-top', siteHeaderHeight);
            const $navOverNav = $target.find('.nav-over__nav');
            $navOverNav.css('top', siteHeaderHeight);
        }
    },
};

class NavOverItem {
    constructor($navItem, $html, closeAllNavs, $overlay, $homeLink) {
        this.closeAllNavs = closeAllNavs;
        this.isActive = false;
        this.$html = $html;
        this.$overlay = $overlay;
        this.$navItem = $navItem;
        this.targetId = $navItem.attr('href');
        this.$target = $(this.targetId);
        this.$homeLink = $homeLink;
        if(this.$target.length == 0) {
            console.error('Referenced navigation content not found!')
        }
        let obj = this;
        this.$navItem.on('click', function(e) {
            e.preventDefault();
            obj.click();
        });
        
        this.$homeLink.on('click', function(e) {
            obj.closeCurrentNav(e);
        });
        
        this.$overlay.on('click', function(e) {
            obj.closeCurrentNav(e);
        });

        // The sub-navigation in each pane
        const navItem = this;
        this.$subNavItems = this.$target.find('.js-nav-over__nav-item');
        if(this.$subNavItems.length === 0) {
            return;
        }
        let subNavItems = new Array;
        this.$subNavItems.each(function() {
            const $subNavItem = $(this);
            const subNavItem = new SubNavOverItem($subNavItem, navItem);
            subNavItems.push(subNavItem);
        });
        this.subNavItems = subNavItems;

        // Set the first subnav as active
        this.subNavItems[0].open();
    }
    click(){
        if(this.isActive) {
            this.close();
        }
        else if(this.isAnotherNavOpen()) {
            this.closeAllNavs();
            this.open();
        } 
        else {
            this.open();
        }
    }
    closeCurrentNav(e) {
        if(this.isActive ) {
            e.preventDefault();
            this.close();
        }
    }
    close() {
        this.isActive = false;
        this.$navItem.removeClass('btn-info');
        this.$navItem.addClass('btn-invisible');
        this.$target.removeClass('is-open');
        this.$html.removeClass('nav-over-open');
        this.$overlay.removeClass('is-visible');
    }
    open() {
        this.isActive = true;
        this.$navItem.addClass('btn-info');
        this.$navItem.removeClass('btn-invisible');
        this.$target.addClass('is-open');
        this.$html.addClass('nav-over-open');
        this.$overlay.addClass('is-visible');
    }
    isAnotherNavOpen() {
        if(this.$html.hasClass('nav-over-open')) {
            return true;
        }
        return false;
    }
    closeAllSubNavs() {
        const navItems = this.subNavItems;
        for (const navItem of navItems) {
            if(navItem.isActive) {
                navItem.close();
            }
        }
    }
  }

  class SubNavOverItem {
    constructor($subNavItem, navItem) {
        this.parentItem = navItem;
        this.$subNavItem = $subNavItem;
        this.href = $subNavItem.find('a').attr('href');
        const firstChar = Array.from(this.href)[0]; 
        if(firstChar !== '#') {
            return;
        }
        this.$target = $(this.href);
        if(this.$target.length == 0) {
            console.error('Referenced navigation content not found: ' + this.targetId);
        }
        let obj = this;
        this.$subNavItem.on('click', function(e) {
            e.preventDefault();
            obj.click();
        });
    }
    click() {
        this.parentItem.closeAllSubNavs();
        this.open();
    }
    open() {
        this.isActive = true;
        this.$subNavItem.addClass('is-active');
        this.$target.addClass('is-active');
    }
    close() {
        this.isActive = false;
        this.$subNavItem.removeClass('is-active');
        this.$target.removeClass('is-active');
    }
  }

export default NavOver;
