const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss').webpack('app.js');
    mix.styles([
        './public/css/core.css',
        './public/css/components.css',
        './public/css/icons.css',
        './public/css/pages.css',
        './public/css/menu.css',
        './public/css/responsive.css',
        './public/plugins/switchery/switchery.min.css',
        './public/plugins/tablesaw/css/tablesaw.css'
    ], 'public/css/all.css');
    mix.scripts([
        './public/js/detect.js',
        './public/js/fastclick.js',
        './public/js/jquery.blockUI.js',
        './public/js/waves.js',
        './public/js/jquery.slimscroll.js',
        './public/js/jquery.scrollTo.min.js',
        './public/plugins/switchery/switchery.min.js',
        './public/js/jquery.core.js',
        './public/js/jquery.app.js',
        './public/plugins/tablesaw/js/tablesaw.js',
        './public/plugins/tablesaw/js/tablesaw-init.js'
    ], 'public/js/all.js')
});
