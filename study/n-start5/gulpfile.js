
/*
 ** todo: watch
*/

var path = require('path');
var fs = require('fs');

var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var less = require('gulp-less');

// 资源地址
var SRC_BASE = './statics/src';
var BUILD_BASE = './statics/build';

// css打包
gulp.task('css', function() {

	gulp.src(SRC_BASE + '/**/*.css')
		.pipe(minify())
		.pipe(gulp.dest(BUILD_BASE));
});

// js打包
gulp.task('script', function() {

	gulp.src(SRC_BASE + '/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(BUILD_BASE));
});

// less编译 及 打包
gulp.task('less', function() {

	gulp.src(SRC_BASE + '/**/*.less')
		.pipe(less({
      			paths: [ path.join(__dirname, 'less', 'includes') ]
    		}))
		.pipe(minify())
		.pipe(gulp.dest(BUILD_BASE));

});

// watch
gulp.task('watch', function() {

	gulp.watch(SRC_BASE + '/**/*', ['default']);
	
});

gulp.task('default', ['script', 'css', 'less', 'watch']);

