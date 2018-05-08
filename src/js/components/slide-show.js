var SLIDE_SHOW_TEMPLATE =
    '<div class="slide-show swiper-container">' +
        '<div class="slide-show__wrapper swiper-wrapper">' +
            /* slide */
            '<div v-for="slide in slides" :style="{\'background-image\': \'url(\' + slide.image + \')\'}" class="slide-show__slide swiper-slide">' +
                '<div class="slide-show__slide__box">' +
                    '<div class="slide-show__slide__box__container">' +
                        /* slide box */
                        '<div class="slide-show__slide__box__main">' +
                            '<div class="slide-show__slide__box__header">' +
                                '<div class="slide-show__slide__box__number">' +
                                    '<span>{{ slide.number }}</span>' +
                                '</div>' +
                                '<h2 class="slide-show__slide__box__title">{{ slide.title }}</h2>' +
                            '</div>' +
                            '<div class="slide-show__slide__box__description">' +
                                '<p>{{ slide.description }}</p>' +
                            '</div>' +
                            '<div class="slide-show__slide__box__control">' +
                                '<a class="slide-show__slide__box__link"><span>Descubra</span><img src="img/slide-show/arrow.png"></p>' +
                            '</div>' +
                        '</div>' +
                        /* end slide box */
                    '</div>' +
                '</div>' +
            '</div>' +
            /* end slide */
        '</div>' +
        '<div class="slide-show__pagination swiper-pagination">' +
            '<div class="slide-show__pagination__container">' +
            '</div>' +
        '</div>' +
    '</div>';

Vue.component('slide-show', {
    template: SLIDE_SHOW_TEMPLATE,
    data: function() {
        return {
            screen: '', /* desktop ou mobile */
            slider: null,
            slides: [{
                image: 'img/slide-show/slide-1-desktop.png',
                imageDesktop: 'img/slide-show/slide-1-desktop.png',
                imageMobile: 'img/slide-show/slide-1-mobile.png',
                number: '01',
                title: 'Lorem Ipsum Dollor Simet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            }, {
                image: 'img/slide-show/slide-2-desktop.png',
                imageDesktop: 'img/slide-show/slide-2-desktop.png',
                imageMobile: 'img/slide-show/slide-2-mobile.png',
                number: '02',
                title: 'Lorem Ipsum Dollor Simet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            }, {
                image: 'img/slide-show/slide-3-desktop.png',
                imageDesktop: 'img/slide-show/slide-3-desktop.png',
                imageMobile: 'img/slide-show/slide-3-mobile.png',
                number: '03',
                title: 'Lorem Ipsum Dollor Simet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            }]
        };
    },
    methods: {
        init: function() {
            var thisScope = this;
            this.updateScreen();
            this.slider = new Swiper ('.slide-show', {
                autoplay: true,
                on: {
                    resize: function() {
                        thisScope.updateScreen();
                    }
                },
                loop: true,
                pagination: {
                    el: '.slide-show__pagination__container',
                    type: 'bullets',
                    bulletClass: 'slide-show__pagination__item',
                    bulletActiveClass: 'slide-show__pagination__item--active',
                    renderBullet: function(index, className) {
                        var i = (index + 1) + '';
                        i = i.length == 1 ? '0' + i : i;
                        return '<a class="' + className + '">' + i + '</a>'
                    }
                }
            });
        },
        updateScreen: function() {
            if (window.innerWidth < 1024) {
                this.screen = 'mobile';
            } else {
                this.screen = 'desktop';
            }
            this.updateSlides();
        },
        updateSlides: function() {
            var screen = this.screen;
            this.slides.forEach(function(slide) {
                if ('desktop' == screen) {
                    slide.image = slide.imageDesktop;
                } else {
                    slide.image = slide.imageMobile;
                }
            });
        }
    },
    mounted: function() {
        this.init();
    }
});