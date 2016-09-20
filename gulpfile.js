var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var templateCache = require('gulp-angular-templatecache');
var sass = require('gulp-sass');

gulp.task('default', ['useref', 'template', 'pages']);

gulp.task('useref', function () {
    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('wwwroot'))
});

gulp.task('template', function () {
    return gulp.src('src/pages/*.html')
        .pipe(templateCache('templates.js', { module: 'templates', standalone: true }))
        .pipe(gulp.dest('wwwroot/js'));
});

gulp.task('pages', function () {
    return gulp.src('src/pages/*')
        .pipe(useref())
        .pipe(gulp.dest('wwwroot/pages'))
});

gulp.task("sass", function () {
    gulp.src(["./src/app/styles/style.scss"])
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./wwwroot/styles"))
});

