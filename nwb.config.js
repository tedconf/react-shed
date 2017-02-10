module.exports = {
  type: 'react-component',
  babel: {
    runtime: 'helpers',
    plugins: [
      ['styled-components', {
        ssr: false,
        displayName: false,
      }],
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
