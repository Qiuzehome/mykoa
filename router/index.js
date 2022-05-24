
const Router = require('koa-router')
const router = new Router()
const home = require('./home')
const list = require('./list')
const puppeteer = require('./puppeteer')
router.use('/home', home.routes(), home.allowedMethods())
router.use('/list', list.routes(), list.allowedMethods())
router.use('/puppeteer', puppeteer.routes(), puppeteer.allowedMethods())
router.redirect('/', '/home')
module.exports = router
