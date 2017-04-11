module.exports = {
  type: 'react-component',
  babel: {
    runtime: 'helpers',
    plugins: [
      'shed',
    ],
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
