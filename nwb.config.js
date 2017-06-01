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
      devtool: false,
    },
  },
  npm: {
    umd: {
      global: 'Shed',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        glamourous: 'Glamorous',
        glamor: 'Galmor',
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
