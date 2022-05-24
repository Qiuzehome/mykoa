const Koa = require('koa2')
const router = require('./router')
const app = new Koa();
/*
router.routers()//启动路由
router.allowedMethods()允许任何请求
*/
app.use(router.routes(), router.allowedMethods())

app.listen(5050, () => {
    console.log('localhost:5050')
})