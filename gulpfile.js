const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }

function buildStyles(){
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask(){
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)