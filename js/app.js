var App = {

    accessibleMenu: function () {
        var _document           = $(document),

            menu                = $('.access-menu'),
            menu_item           = menu.find('> li > a'),

            subMenu             = $('.access-submenu'),
            subMenu_item        = subMenu.find('> li > a'),
            subMenu_last_item   = subMenu.find('> li:last-child > a'),

            isShow              = 'is-show';

        menu_item.bind({

            focus: function () {
                var _this           = $(this),
                    next_subMenu    = _this.next(subMenu);
                
                subMenu.removeClass(isShow);

                if ( next_subMenu ) {
                    next_subMenu.addClass(isShow);
                }

            },

            blur: function () {
                subMenu.removeClass(isShow);
            }

        });

        subMenu_item.bind({

            focus: function () {
                var _this           = $(this),
                    _this_parent    = _this.parent().parent();

                _this_parent.addClass(isShow);
            }

        });

        subMenu_last_item.bind({

            blur: function () {
                subMenu.removeClass(isShow);
            }

        });

        _document.click(function () {
            if ( subMenu.hasClass(isShow) ) {
                subMenu.removeClass(isShow);
            }
        });
    }

};

(function () {

    App.accessibleMenu();

})();