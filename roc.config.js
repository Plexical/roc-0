module.exports = {
  settings: {
    runtime: {
      applicationName: 'Roc lab 0',
      port: 4200,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'app/redux/reducers.js',
      routes: 'app/routes/index.js',
    },
  },
};
