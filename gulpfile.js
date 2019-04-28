// Подключение модулей GULP
var gulp = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS = require('gulp-clean-css'),
		uglify = require('gulp-uglify'),
		browsersync = require('browser-sync');





// Подключения стилей
var styleFiles = [
	'./src/css/main.css'
]





// Порядок подключения стилей
var jsFiles = [
	'./src/js/main.js'
]





// Таск на стили
function styles(){
	// Шаблон для поиска файлов CSS
	// Все файлы по шаблону './src/css/**/*.css'
	return gulp.src(styleFiles)
	
	// Добавить префиксы
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))

	// Минимизация CSS
	.pipe(cleanCSS({
		level: 2
	}))

	// Выходная папка для стилей
	.pipe(gulp.dest('./css/min.css'))
}





// Таск на скрипты
function scripts(){
	// Шаблон для поиска файлов JS
	// Все файлы по шаблону './src/js/**/*.js'
	return gulp.src(jsFiles)

	//Минимизация JS
	.pipe(uglify({
		toplevel: true
	}))

	// Выходная папка для стилей
	.pipe(gulp.dest('./js/min.js'))
}





// Таск вызывающий функцию styles
gulp.task('styles', styles);

// Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
