import { task, watch, series } from 'gulp';
import { createServer, reloadBrowser, injectCss } from './server';
import compileCss from './styles';
import { bundle, es5 } from './scripts';

const eye = () => {
  watch('./app/index.html', reloadBrowser);
  watch('./app/assets/styles/**/*.css', series(compileCss, injectCss));
  watch('./app/assets/scripts/**/*.js', series(bundle, es5, reloadBrowser));
};
task('watch', series(createServer, eye));
