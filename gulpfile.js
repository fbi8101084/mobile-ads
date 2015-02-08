var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'); // depen on cssmin

var paths = {
    coffee: 'coffee/',
    scss: 'scss/',
    images: 'images/',
    js: 'js/',
    css: 'css/',
    html: 'html/',
    dist: 'dist/'
};

gulp.task('compass', function () {
    gulp.src(paths.scss + '**/*.scss')
        .pipe(compass({
            css: paths.css,
            sass: paths.scss,
            image: 'images'
        }))
        .pipe(concat('style.src.css'))
        .pipe(gulp.dest(paths.dist))
        .pipe(cssmin())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('coffee', function () {
    gulp.src(paths.coffee + '**/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(concat('all.src.js'))
        .pipe(gulp.dest(paths.dist))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('html', function () {
    gulp.src(paths.html + '*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(concat('template.html'))
        .pipe(gulp.dest(paths.dist));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.start('compass', 'coffee', 'html');
    gulp.watch(paths.scss + '**/*.scss', ['compass']);
    gulp.watch(paths.coffee + '**/*.coffee', ['coffee']);
    gulp.watch(paths.html + '*.html', ['html']);
});

gulp.task('default', function () {
    gulp.start('compass', 'coffee', 'html');
});