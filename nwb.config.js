module.exports = {
  type: 'react-component',
  babel: {
    runtime: 'helpers',
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
