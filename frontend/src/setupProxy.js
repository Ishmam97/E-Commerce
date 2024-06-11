const {createProxyMiddleware}  = require('http-proxy-middleware');
// required for connection between front end and backend
module.exports = function(app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://e-commerce-backend-1:9001',
      changeOrigin: true,
      secure:false,
    })
  );
};