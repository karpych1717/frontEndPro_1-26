const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const less = require('gulp-less')
const minify = require('gulp-minify-css')

const merge = require('merge-stream')

const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

gulp.task('html', () =>
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
)

gulp.task('css', function () {
  const lessStream = gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(concat('less-files.less'))

  const scssStream = gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(concat('scss-files.scss'))

  const cssStream = gulp.src('src/**/*.css')
    .pipe(concat('css-files.css'))

  const mergedStream = merge(lessStream, scssStream, cssStream)
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('build'))

  return mergedStream
})

gulp.task('js', () =>
  gulp.src(['src/app.js', 'src/script.js'])
    .pipe(concat('index.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
)

gulp.task('watch', () => {
  gulp.watch('src/**/*.html', gulp.series('html'))
  gulp.watch(['src/**/*.less', 'src/**/*.scss', 'src/**/*.css'], gulp.series('css'))
  gulp.watch('src/**/*.js', gulp.series('js'))
})
