var App = {

	accessibleMenu: function(){
		var menu                 = $('.access-menu'),
            menu_item            = menu.find('> li > a'),

			subMenu              = $('.access-submenu'),
			subMenu_item         = subMenu.find('> li > a'),
			subMenu_last_item    = subMenu.find('> li:last-child > a'),

            isShow               = 'is-show';

		menu_item.bind({
			focus: function(){
				subMenu.removeClass(isShow);
				if($(this).next(subMenu)){
					$(this).next(subMenu).addClass(isShow);
				}
			},

			blur: function(){
				subMenu.removeClass(isShow);
			}
		});

		subMenu_item.bind({
			focus: function(){
				$(this).parent().parent().addClass(isShow);
			}
		});

		subMenu_last_item.bind({
			blur: function(){
				subMenu.removeClass(isShow);
			}
		});

		$(document).click(function(){
			if(subMenu.hasClass(isShow)){
				subMenu.removeClass(isShow);
			}
		});
	}

};

$(function(){
	App.accessibleMenu();
});