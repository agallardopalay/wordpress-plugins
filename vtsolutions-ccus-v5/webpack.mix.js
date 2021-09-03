const mix = require('laravel-mix');
let path = require('path');

mix.setPublicPath(path.resolve('./'));

// JS Config
mix.js([
    'src/js/main.js',
], 'public/js/bundle.min.js');

// CSS Config
mix.postCss("src/css/app.css", "public/css/bundle.min.css");
mix.postCss("src/css/editor-style.css", "public/css/dashboard.min.css");
mix.postCss("src/css/home.css", "public/css/home.min.css");

mix.options({
    processCssUrls: false,
    postCss: [
        require('postcss-nested-ancestors'),
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
});


// BrowserSync Config. Change this depending on your local environment
mix.browserSync({
    proxy: 'http://localhost:9090/newconsolidatedcredit.org',
    host: 'http://localhost:9090/newconsolidatedcredit.org',
    port: 9090,
    injectChanges: true,
    files: [
      'src/**/*.{css,js}',
      'public/**/*.{css,js}',
      '*.php',
      'template-parts/**/*.php'
    ]
});

// mix.bundleAnalyzer();
