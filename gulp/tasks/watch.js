import { task, watch, series } from 'gulp';
import { createServer, reloadBrowser, injectCss } from './server';
import compileCss from './styles';

const eye = () => {
  createServer();
  watch('./app/index.html', reloadBrowser);
  watch('./app/assets/styles/**/*.css', series(compileCss, injectCss));
};
task('watch', eye);
