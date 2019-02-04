const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', () => {
  return gulp.src('./scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/'))
});


gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});