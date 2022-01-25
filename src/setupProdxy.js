/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable func-names */
const { createProxyMiddleware } = require('http-proxy-middleware');

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true,
    }),
  );
}
