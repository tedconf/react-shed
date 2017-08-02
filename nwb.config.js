module.exports = {
  type: 'react-component',
  babel: {
    runtime: 'helpers',
    cherryPick: 'lodash',
    plugins: [
      ['emotion/babel'],
      'shed',
    ],
  },
  webpack: {
    extra: {
      devtool: false, // 'source-map', //cheap-eval-source-map
    },
  },
  npm: {
    umd: {
      global: 'Shed',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        emotion: 'Emotion',
        color: 'Color',
      },
    },
  },
  uglify: {
    compress: {
      warnings: false,
      drop_console: true,
    },
    output: {
      comments: false,
    },
    sourceMap: false,
  },
};
