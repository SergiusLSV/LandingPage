// Подключение модулей GULP
var gulp = require('gulp'),
		autoprefixer = require('gulp-autoprefixer');





// Порядок подключения стилей
var styleFiles = [
	'./src/css/main.css'
]





// Порядок подключения стилей
var jsFiles = [
	'./src/js/main.js'
]





// Таск на стили
function styles(){
	return gulp.src(styleFiles)
}
