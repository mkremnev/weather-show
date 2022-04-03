const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');

const StyleLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        esModule: true,
      },
    },
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sassOptions: {
          includePaths: [paths.appStyles],
        },
      },
    },
  ],
};

const JsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};

const StaticLoader = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  loader: 'url-loader',
  options: {
    limit: 8192,
    outputPath: './assets/img',
    publicPath: '/assets/img',
  },
};

const FontLoader = {
  test: /\.(eot|ttf|woff|woff2)$/i,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: paths.appFonts,
    publicPath: paths.appFonts,
  },
};

module.exports = () => {
  const plugins = [];

  plugins.push(
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'styles/main.css',
    })
  );

  plugins.push(
    new HtmlWebpackPlugin({
      title: 'Show Weather',
      inject: 'body',
      template: paths.appHtml,
    })
  );

  return {
    mode: 'production',
    entry: { app: paths.appIndexJs },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/[name].js',
    },
    resolve: {
      extensions: ['.js', '.scss'],
      alias: {
        '@': paths.appSrc,
        components: paths.appComponents,
        styles: paths.appStyles,
      },
    },
    module: {
      rules: [JsLoader, StyleLoader, StaticLoader, FontLoader],
    },
    plugins,
    experiments: {
      topLevelAwait: true,
    },
  };
};
