const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const notify = require('gulp-notify');
const concat = require('gulp-concat');

// Utilidades CSS

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename')

const paths = {
    css: 'src/sass/**/*.scss',
    img: 'src/img/**/*',
    js: 'src/js/*.js'
}

function css(){
    return src('src/sass/app.scss')
        .pipe( sourcemaps.init())
        .pipe( sass())
        .pipe( postcss( [autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('./build/css'))
}

function javascript(){
    return src(paths.js)
        .pipe( sourcemaps.init())
        .pipe( concat('bundle.js'))
        .pipe( terser())
        .pipe( sourcemaps.write('.'))
        .pipe( rename({suffix: '.min'}))
        .pipe(dest('./build/js'))
}

function minificarImg(){
    return src(paths.img)
        .pipe( imagemin())
        .pipe( dest('./build/img'))
        .pipe( notify({message: 'Imagen Minificada'}))
}

function webpImg(){
    return src('build/img/**/*')
        .pipe( webp())
        .pipe( dest('build/img/'))
        .pipe( notify({message: 'Imagen Webp'}))
}

function watchFiles(){
    watch(paths.css, css);
    watch(paths.js, javascript);
}

exports.css = css;
exports.minificarImg = minificarImg;
exports.webpImg = webpImg;
exports.javascript = javascript;
exports.default = series(css, javascript,watchFiles);