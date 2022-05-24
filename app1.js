const koa = require('koa2')
const app = new koa();
//洋葱模式
app.use(async (ctx,next)=>{
    console.log(1)
    await next()
    console.log(1)
})
app.use(async (ctx,next)=>{
    console.log(2)
})
app.listen(5000,()=>{
    console.log('succes')
})