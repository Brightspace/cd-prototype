import gulp from 'gulp';
import mocha from 'gulp-mocha';

gulp.task('test', () => {
	gulp
		.src('tests/**.tests.js')
		.pipe(mocha({ reporter: 'spec' }));
});

gulp.task('default', ['test']);
