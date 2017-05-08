module.exports = {
  type: 'react-component',
  babel: {
    runtime: 'helpers',
    plugins: [
      'shed',
    ],
  },
  webpack: {
    extra: {
      devtool: 'inline-source-map', // 'source-map', //cheap-eval-source-map
    }
  },
  npm: {
    umd: {
      global: 'Shed',
      externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'StyledComponents',
      },
    },
  },
};
