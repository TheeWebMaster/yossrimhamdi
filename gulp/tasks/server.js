import { create } from 'browser-sync';
import { src } from 'gulp';

const browserSync = create();

export const createServer = async () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
};

export const reloadBrowser = async () => {
  browserSync.reload();
};

export const injectCss = () => {
  return src('./app/temp/styles/styles.css').pipe(browserSync.stream());
};
