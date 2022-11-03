let navItems = new Array;

const NavOver = {
    init() {
        const closeAllNavs = this.closeAllNavs;
        $('.js-site-header__nav-item').each(function() {
            const $body = $('body');
            const $navItem = $(this);
            const navItem = new NavOverItem($navItem, $body, closeAllNavs);
            navItems.push(navItem);
        })
    },
    closeAllNavs() {
        for (const navItem of navItems) {
            if(navItem.isActive) {
                navItem.close();
            }
        }
    },
};

class NavOverItem {
    constructor($navItem, $body, closeAllNavs) {
        this.closeAllNavs = closeAllNavs;
        this.isActive = false;
        this.$body = $body;
        this.$navItem = $navItem;
        this.targetId = $navItem.attr('href');
        this.$target = $(this.targetId);
        if(this.$target.length == 0) {
            console.error('Referenced navigation content not found!')
        }
        let obj = this;
        this.$navItem.on('click', function(e) {
            e.preventDefault();
            obj.click();
        });

        // The sub-navigation in each pane
        const navItem = this;
        this.$subNavItems = this.$target.find('.js-nav-over__nav-item');
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
    close() {
        this.isActive = false;
        this.$navItem.removeClass('btn-info');
        this.$navItem.addClass('btn-invisible');
        this.$target.removeClass('is-open');
        this.$body.removeClass('nav-over-open');
    }
    open() {
        this.isActive = true;
        this.$navItem.addClass('btn-info');
        this.$navItem.removeClass('btn-invisible');
        this.$target.addClass('is-open');
        this.$body.addClass('nav-over-open');
    }
    isAnotherNavOpen() {
        if(this.$body.hasClass('nav-over-open')) {
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
        this.targetId = $subNavItem.find('a').attr('href');
        this.$target = $(this.targetId);
        if(this.$target.length == 0) {
            console.error('Referenced navigation content not found: ' + this.targetId);
        }
        let obj = this;
        this.$subNavItem.on('click', function() {
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
