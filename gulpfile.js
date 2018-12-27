const gulp = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');


const processSass = () => {
  return gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css'));
}

gulp.task('sass', processSass);


// Clean "build" directory
const clean = () => {
  return del(['build/*'], {dot: true});
};
gulp.task('clean', clean);

// Copy "src" directory to "build" directory
const copy = () => {
 return gulp.src([
    'src/*.html',
    'src/**/*.js',
  ]).pipe(gulp.dest('build'));
};
gulp.task('copy', copy);


// This is the app's build process
const build = gulp.series('clean', 'copy', 'sass');
gulp.task('build', build);

// Build the app, run a local dev server, and rebuild on "src" file changes
const browserSyncOptions = {
  server: 'build',
  port: 8081,
  open: false
};
const serve = gulp.series(build, () => {
  browserSync.init(browserSyncOptions);
  return gulp.watch('src/**/*', build).on('change', browserSync.reload);
});
gulp.task('serve', serve);

// Set the default task to "build"
gulp.task('default', build);
