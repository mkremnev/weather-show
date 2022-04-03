const path = require('path');

const appDirectory = path.resolve(__dirname);

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appStyles: resolveApp('src/styles'),
  appComponents: resolveApp('src/components'),
  appImages: resolveApp('public/assets/img'),
  appFonts: resolveApp('public/assets/fonts'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appStylesEntry: resolveApp('src/styles/main.scss'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
};
