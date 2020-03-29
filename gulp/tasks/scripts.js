import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import webpackConfigFile from '../../webpack.config';

export const bundle = () => {
  return src('./app/assets/scripts/App.js')
    .pipe(webpack(webpackConfigFile))
    .pipe(dest('./app/temp/scripts/bundled'));
};

export const es5 = () => {
  return src('./app/temp/scripts/bundled/App.js')
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(dest('./app/temp/scripts/ECMAscript5'));
};
