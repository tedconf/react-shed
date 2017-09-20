const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const ManifestPlugin = require('webpack-manifest-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const { DIST_PATH, APP_PATH } = require('./paths');

const PRODUCTION_CONFIG = {
  entry: {
    client: [
      APP_PATH,
    ],
  },

  externals: {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'glamorous': {
      root: 'glamorous',
      commonjs2: 'glamorous',
      commonjs: 'glamorous',
      amd: 'glamorous',
    },
  },

  output: {
    publicPath: '/',
    path: DIST_PATH,
    filename: 'react-shed.min.js',
    umdNamedDefine: true,
    library: {
      root: 'ReactShed',
      amd: 'react-shed',
      commonjs: 'react-shed',
      commonjs2: 'react-shed',
    },
    libraryTarget: 'umd',
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

    new webpack.NoEmitOnErrorsPlugin(),

    new WebpackMd5Hash(),

    new StatsPlugin('stats.json'),
  ],
};

module.exports = PRODUCTION_CONFIG;
