const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHTML'],() => {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglifyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
})

gulp.task('copiarHTML', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})