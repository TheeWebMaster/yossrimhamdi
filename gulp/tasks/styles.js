import { src, dest } from 'gulp';
import postcss from 'gulp-postcss';
import imports from 'postcss-import';
import variables from 'postcss-simple-vars';
import nested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import mixins from 'postcss-mixins';
import hexRgba from 'postcss-hexrgba';

const compileCss = () => {
  return src('./app/assets/styles/styles.css')
    .pipe(postcss([imports, variables, nested, autoprefixer, mixins, hexRgba]))
    .pipe(dest('./app/temp/styles/'));
};

export default compileCss;
