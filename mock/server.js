const app = require('koa')();
const router = require('koa-router')();
let cors = require('cors');

let corslet = cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST'],
  // allowedHeaders: ['Content-Type'],
  credentials: true
});
app.use(corslet);

const homeAdData = require('./home/ad.js');
router.get('/api/homed', function* () {
  this.body = homeAdData;
});
// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function* (next) {
  // 参数
  const params = this.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)

  this.body = homeListData
});



// 开始服务并生成路由
app.use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);