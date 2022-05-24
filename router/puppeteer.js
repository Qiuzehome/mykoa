const { puppeteerPdf, puppeteerImage } = require('../src/puppeteer')
const Router = require("koa-router");
const puppeteer = new Router
puppeteer.get('/', async (ctx) => {
    ctx.body = ''
})

puppeteer.get('/pdf', async (ctx) => {
    try {
        await puppeteerPdf(ctx.query.url)
        ctx.body = {
            status: 200,
            msg: '打印成功',
            data: ctx.query
        }
    } catch (e) {
        ctx.body = {
            status: 400,
            err: '请检查url有效性'
        }
    }
})

puppeteer.get('/images', async (ctx) => {
    try {
        await puppeteerImage(ctx.query.url)
        ctx.body = {
            status: 200,
            msg: '打印成功',
            data: ctx.query
        }
    } catch (e) {
        ctx.body = {
            status: 400,
            err: '请检查url有效性'
        }
    }
})
module.exports = puppeteer