var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('image',function()
{
  gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img'));
})

gulp.task('default',['image']);
