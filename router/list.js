const Router = require('koa-router')
const list = new Router()

list.get('/', async (ctx) => {
    ctx.body = 'list'
})
list.get('/tools', async (ctx) => {
    ctx.body = 'tools'
})
module.exports = list