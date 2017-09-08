const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ManifestPlugin = require('webpack-manifest-plugin');
const OfflinePlugin = require('offline-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const { DIST_PATH, APP_PATH } = require('./paths');

const PRODUCTION_CONFIG = {
  entry: {
    client: [
      APP_PATH,
    ],
  },

  output: {
    publicPath: '/',
    path: DIST_PATH,
    filename: '[name]-[chunkhash].bundle.js',
    chunkFilename: '[name]-[chunkhash].bundle.js',
  },

  performance: {
    maxAssetSize: 400000,
    maxEntrypointSize: 400000,
    hints: 'warning',
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    new LodashModuleReplacementPlugin({
      currying: true,
      paths: true,
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),

    new ManifestPlugin({
      fileName: 'webpack-asset-manifest.json',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      quiet: true,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 3,
      filename: 'vendor.[chunkhash:6].js',
    }),

    new PreloadWebpackPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new OfflinePlugin({
      safeToUseOptionalCaches: true,
      caches: {
        main: [
          '*.js',
        ],
        additional: [
          ':externals:',
        ],
        optional: [
          ':rest:',
        ],
      },

      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
      },

      AppCache: {
        events: true,
        FALLBACK: {
          '/': '/index.html',
        },
      },
    }),

    new WebpackMd5Hash(),

    new StatsPlugin('stats.json'),
  ],
};

module.exports = PRODUCTION_CONFIG;
