const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('./paths');

const StyleLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    'style-loader',
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
    new HtmlWebpackPlugin({
      title: 'Show weather',
      inject: 'body',
      template: paths.appHtml,
    })
  );

  plugins.push(new Dotenv());

  return {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: { app: paths.appIndexJs },
    module: {
      rules: [JsLoader, StyleLoader, StaticLoader, FontLoader],
    },
    resolve: {
      extensions: ['.js', '.scss'],
      alias: {
        '@': paths.appSrc,
        components: paths.appComponents,
        styles: paths.appStyles,
      },
    },
    plugins,
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      historyApiFallback: {
        disableDotRule: true,
        index: paths.appPublic,
      },
      hot: true,
      port: 3000,
      static: {
        directory: paths.appPublic,
        publicPath: '/',
      },
    },
  };
};
