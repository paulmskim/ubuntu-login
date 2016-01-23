var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('default', function() {
	// place code for your default task here
});

gulp.task('styles', function() {
	var processors = [
		autoprefixer
	];

	return gulp.src('public_html/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('public_html/css'));
});

gulp.task('watch:styles', function() {
	gulp.watch('public_html/scss/**/*.scss', ['styles']);
});