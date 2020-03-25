import { task, watch, series } from 'gulp';
import { createServer, reloadBrowser, injectCss } from './server';
import compileCss from './styles';

const eye = () => {
  watch('./app/index.html', reloadBrowser);
  watch('./app/assets/styles/**/*.css', series(compileCss, injectCss));
};
task('watch', series(createServer, eye));
