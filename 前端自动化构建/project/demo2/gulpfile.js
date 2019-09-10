var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var sequence = require('run-sequence');

gulp.task('default', function(){
	sequence('bundlejs', 'watch');
});
gulp.task('bundlejs', function(){
	browserify().add('assets/js/main.js').bundle().pipe(fs.createWriteStream());
});
gulp.task('watch', function(){
	gulp.watch(['assets/js/*.js'], function(){
		sequence('bundlejs');
	})
})