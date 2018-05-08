
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

/* styles process */

var stylesSrcFile = 'src/sass/app.scss';
var styleDistPath = 'dist/css/';

gulp.task('styles', function () {
  return gulp.src(stylesSrcFile)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(styleDistPath));
});

/* scripts process */

var scriptsLibSrcFiles = [
  'node_modules/vue/dist/vue.min.js',
  'node_modules/swiper/dist/js/swiper.min.js'
];
var scriptsLibDistPath = 'dist/js/';
var scriptsLibDistFileName = 'scripts-lib.min.js';

gulp.task('scripts-libraries', function () {
  return gulp.src(scriptsLibSrcFiles)
    .pipe(concat(scriptsLibDistFileName))
    .pipe(gulp.dest(scriptsLibDistPath));
});

var scriptsAppSrcFiles = [
  'src/js/config.js',
  /* components */
  'src/js/components/slide-show.js',
  'src/js/components/features.js',
  'src/js/components/home-page.js',
  'src/js/components/main-menu.js',
  'src/js/app.js'
];
var scriptsAppDistPath = 'dist/js/';
var scriptsAppDistFileName = 'scripts-app.min.js';

gulp.task('scripts-application', function () {
  return gulp.src(scriptsAppSrcFiles)
    .pipe(uglify())
    .pipe(concat(scriptsAppDistFileName))
    .pipe(gulp.dest(scriptsAppDistPath));
});

var scriptsSrcFiles = [
  scriptsLibDistPath + scriptsLibDistFileName,
  scriptsAppDistPath + scriptsAppDistFileName
];
var scriptsDistFileName = 'app.min.js';
var scriptsDistPath = 'dist/js/';

gulp.task('scripts', [
    'scripts-libraries',
    'scripts-application'
  ], function () {
    return gulp.src(scriptsSrcFiles)
      .pipe(concat(scriptsDistFileName))
      .pipe(gulp.dest(scriptsDistPath));
});

/* views process */

var viewsSrcFiles = [
  'src/html/*'
];
var viewsDistPath = 'dist/';

gulp.task('views', function() {
  return gulp.src(viewsSrcFiles)
    .pipe(gulp.dest(viewsDistPath));
});

/* images process */

var imagesSrcFiles = [
  'src/img/*',
  'src/img/**/*'
];
var imagesDistPath = 'dist/img/';

gulp.task('images', function() {
  return gulp.src(imagesSrcFiles)
    .pipe(gulp.dest(imagesDistPath));
});


/* gulp default */

gulp.task('default', ['styles', 'scripts', 'views', 'images']);