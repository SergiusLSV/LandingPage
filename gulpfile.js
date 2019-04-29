// Подключение модулей GULP
var gulp = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS = require('gulp-clean-css'),
		uglify = require('gulp-uglify'),
		browserSync = require('browser-sync').create(),
		watch = require('gulp-watch'),
		sass = require('gulp-sass'),
		plumber = require('gulp-plumber'),
		notify = require("gulp-notify"),
		sourcemaps = require('gulp-sourcemaps');

