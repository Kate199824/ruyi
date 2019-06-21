const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://easy-mock.com/mock/5cb7f44dd6c1e752a6132591/',
      changeOrigin: true
    })
  );
  app.use(
    proxy('/api', {
      target: 'https://easy-mock.com/mock/5cb7f44dd6c1e752a6132591/',
      changeOrigin: true
    })
  );
};
