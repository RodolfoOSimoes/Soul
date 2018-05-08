var MAIN_MENU_TEMPLATE = '<div class="main-menu">' +
        '<div class="main-menu__container">' +
            '<a href="/" class="main-menu__logo">' +
                '<img src="img/logo.png">' +
            '</a>' +
            '<ul class="main-menu__menu">' +
                '<li v-for="option in options" :class="{\'main-menu__menu__item--active\' : option.active}" class="main-menu__menu__item">' +
                    '<a class="main-menu__menu__item__link" :href="option.link">' +
                        '<img :src="option.icon">' +
                        '<span>{{ option.label }}</span>' +
                    '</a>' +
                '</li>' +
            '</ul>' +
            '<a :class="{\'main-menu__mobile-control--active\': mobileActive}" v-on:click="mobileActive = !mobileActive" class="main-menu__mobile-control">' +
                '<span class="main-menu__mobile-control__label">Menu</span>' +
                '<i class="main-menu__mobile-control__icon"></i>' +
            '</a>' +
        '</div>' +
    '</main-menu>';

Vue.component('main-menu', {
    template: MAIN_MENU_TEMPLATE,
    data: function() {
        return {
            mobileActive: false,
            options: [{
                label: 'Home',
                link: '#',
                icon: 'img/main-menu/op-6.png',
                active: true
            }, {
                label: 'Features',
                link: '#',
                icon: 'img/main-menu/op-5.png',
                active: false
            }, {
                label: 'Portfolio',
                link: '#',
                icon: 'img/main-menu/op-4.png',
                active: false
            }, {
                label: 'Blog',
                link: '#',
                icon: 'img/main-menu/op-3.png',
                active: false
            }, {
                label: 'Contact',
                link: '#',
                icon: 'img/main-menu/op-2.png',
                active: false
            }, {
                label: '',
                link: '#',
                icon: 'img/main-menu/op-1.png',
                active: false
            }]
        };
    }
});