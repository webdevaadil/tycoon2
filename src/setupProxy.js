const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ca-signalsleaderboard-dev.orangedesert-af9d2c45.westeurope.azurecontainerapps.io/',
      changeOrigin: true,
  })
);
};
