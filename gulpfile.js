// Подключение модулей GULP
var gulp = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS = require('gulp-clean-css'),
		uglify = require('gulp-uglify'),
		browserSync = require('browser-sync').create();



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
	.pipe(gulp.dest('./src/css/'))
	.pipe(browserSync.stream())
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
	.pipe(gulp.dest('./src/js/'))
	.pipe(browserSync.stream())
}



// Просмотр файлов
function watch(){
	browserSync.init({
		server: {
			baseDir: "./src"
		}
	});

	// Слежка за HTML файлами
	gulp.watch('./*.html').on('change', browserSync.reload);
	// Слежка за CSS файлами
	gulp.watch('./src/css/**/*.css', styles)
	// Слежка за SCSS файлами
	// gulp.watch('./src/scss/**/*.scss', ['sass']);
	// Слежка за JS файлами
	gulp.watch('./src/js/**/*.js', scripts)
}



// Таск вызывающий функцию styles
gulp.task('styles', styles);
// Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
// Таск для отслеживания изменений
gulp.task('watch', watch);
// Таск для запуска стилей и скрипта
gulp.task('build', gulp.series(gulp.parallel(styles,scripts)));
// Таск для последовательного запуска build и watch 
gulp.task('dev', gulp.series('build','watch'));
