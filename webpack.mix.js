const mix = require('laravel-mix');

mix.js('vue/src/main.js', 'web/js/app.js')
    .setPublicPath('web')
    .vue();