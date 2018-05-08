var FEATURES_TEMPLATE = '<div class="features">' +
        '<div class="features__background-left"></div>' +
        '<div class="features__background-right-1"></div>' +
        '<div class="features__background-right-2"></div>' +
        '<div class="features__background-right-3"></div>' +
        '<div class="features__container">' +
            '<div class="features__control">' +
                '<a v-for="feature in features" :href="feature.link" class="features__control__option">' +
                    '<div class="features__control__option__main">' +
                        '<img :src="feature.logo">' +
                        '<h3>{{ feature.title }}</h3>' +
                        '<p>{{ feature.description }}</p>' +
                    '</div>' +
                '</a>' +
            '</div>' +
        '</div>' +
    '</div>';

Vue.component('features', {
    template: FEATURES_TEMPLATE,
    data: function() {
        return {
            features: [{
                link: '#',
                logo: 'img/features/tv.png',
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            }, {
                link: '#',
                logo: 'img/features/engineering.png',
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            }, {
                link: '#',
                logo: 'img/features/sent.png',
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            }]
        };
    }
});