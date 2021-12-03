// Initialize modules
const {
    src,
    dest,
    watch,
    series
} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Sass Task
const scssTask = () => {
    return src('scss/**/*.scss', {
            sourcemaps: true
        })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('assets', {
            sourcemaps: '.'
        }));
}

const watchTask = () => {
    watch('scss/**/*.scss', series(scssTask));

}

// Default Gulp Task
exports.default = series(scssTask, watchTask);