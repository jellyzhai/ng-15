const target = "http://www.nmc.cn";

const PROXY_CONFIG = {
  target,
  context: ["/rest"],
  secure: false,
  changeOrigin: true,
  // pathRewrite: {
  //   "^/api": "",
  // },
  // ws: true,
};

module.exports = PROXY_CONFIG;

/*
0）context: 需要匹配的path

1）/api：把路径为 /api 的请求转发到 target

2）target：转发到http://your_remote_IP:8888

3）secure：是否开启安全校验

4）logLevel：是否打印转发日志

5）pathRewrite：把'/api'重写为''。不加该字段，则请求 'http://localhost:4200/api/user' 会请求到 'http://IP:8301/api/user' 。加上了，则请求到 'http://yourIP:8301/user'

6) changeOrigin: 是否改变域名，当 域名相同，端口不同时，可以 设置false

7）ws: 是否支持 websocket 协议
*/
