const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
  debugger;
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.weatherbit.io/v2.0/forecast/',
      changeOrigin: true,
    }),
  );
};