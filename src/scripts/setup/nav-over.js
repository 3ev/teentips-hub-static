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
        this.$navItem.on('click', function() {
            obj.click();
        });
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
  }

export default NavOver;
