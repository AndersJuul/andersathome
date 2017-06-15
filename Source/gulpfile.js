'use strict';

var bump = require('gulp-bump');
var octo = require('@octopusdeploy/gulp-octo');

var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    jsmin = require('gulp-jsmin'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest("dist"));
});
gulp.task('less', function() {
  return gulp.src('./src/less/**/*.less')
      .pipe(less())
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('scripts', function() {
  return gulp.src(['./dist/**/*.js', './app/**/*.js'])
      .pipe(concat('script.js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('build', ['less', 'scripts']);

gulp.task('default', ['less', 'scripts'], function() {
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch(['./src/js/vendor/**/*.js', './src/js/app/**/*.js'], ['scripts']);
});

gulp.task('clean-public', function () {
  return gulp.src(['./public/js', './public/css'], {read: false})
      .pipe(clean());
});

gulp.task('bump', function(){
  return gulp.src('./package.json')
      //.pipe(bump({type: 'patch'}))
      .pipe(gulp.dest('./'));
});
 
gulp.task('publish', ['build'], function () {
  return gulp.src(['**/*.js', '**/*.html','**/*.ico','**/*.json','**/*.css','**/*.jpg','!bin{,/**}', '!src{,/**}', '!gulpfile.js'])
      .pipe(octo.pack())
      .pipe(octo.push({apiKey: 'API-B7XVRTRPPPDIQSP6ZJNZPQHZU', host: 'http://ajf-deploy-01', replace: true}));
});