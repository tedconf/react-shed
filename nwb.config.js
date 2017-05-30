module.exports = {
  type: 'react-component',
  babel: {
    runtime: 'helpers',
    cherryPick: 'lodash',
    plugins: [
      'shed',
    ],
  },
  webpack: {
    extra: {
      devtool: 'inline-source-map', // 'source-map', //cheap-eval-source-map
    },
  },
  npm: {
    umd: {
      global: 'Shed',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        glamourous: 'Glamorous',
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
