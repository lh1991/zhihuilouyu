const gulp = require('gulp')
const pug = require("gulp-pug")
const stylus = require('gulp-stylus')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const opn = require('opn')
const postcss = require('gulp-postcss')
const pxtorem = require('postcss-pxtorem')
const plugins={
  'postcss-pxtorem': {
    'propList': ['*'],
    'rootValue':18
  }
}

gulp.task('build:lib', function() {
  gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/echarts/dist/echarts.js',
  ]).pipe(gulp.dest('dist/lib'))
})

gulp.task('build:html', function() {
  gulp.src('src/html/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('build:image', function() {
  gulp.src('src/image/**/*')
    .pipe(gulp.dest('dist/image'))
    .pipe(connect.reload())
})

gulp.task('build:style', function() {
  gulp.src('src/style/*.styl')
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/style'))
    .pipe(connect.reload())
})

gulp.task('build:script', function() {
  gulp.src('src/script/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/script'))
    .pipe(connect.reload())
})
gulp.task('build:fonts', function() {
  gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(connect.reload())
})

gulp.task('watch', function(){
  gulp.watch('src/image/**', ['build:image'])
  gulp.watch('src/html/**', ['build:html'])
  gulp.watch('src/style/**', ['build:style'])
  gulp.watch('src/script/**', ['build:script'])
})

gulp.task('build', [
  'build:lib',
  'build:image',
  'build:html',
  'build:style',
  'build:script',
  'build:fonts'
])

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 2089,
    livereload: true
  })
  opn('http://localhost:2089/')
})

gulp.task('dev', ['build', 'connect', 'watch'])
