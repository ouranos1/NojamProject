const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    "/user",
    createProxyMiddleware({
      target: "http://ec2-3-35-139-15.ap-northeast-2.compute.amazonaws.com:8080/api/user",
      changeOrigin: true,
    })
  );
};