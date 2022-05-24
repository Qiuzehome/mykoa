const puppeteer = require('puppeteer');

const initBrower = async () => {
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ["--enable-automation"], // 破解个别反爬虫
        args:
            process.env.NODE_ENV === "local"
                ? [
                    "--no-sandbox",
                    "--allow-cross-origin-auth-prompt",
                    "--disable-features=IsolateOrigins,site-per-process", // 兼容mac电脑定位iframe
                    "--single-process",
                    "--no-zygote", // https://github.com/puppeteer/puppeteer/issues/1825
                ]
                : [
                    "--no-sandbox",
                    "--disable-setuid-sandbox",
                    "--single-process",
                    "--no-zygote", // https://github.com/puppeteer/puppeteer/issues/1825
                ],
        headless: process.env.NODE_ENV === "local" ? false : true, // 是否无头（是否需要调起一个浏览器GUI），默认无头}
    });
    return browser
}

const puppeteerPdf = async (url) => {
    const browser = await initBrower()
    const page = await browser.newPage();
    await page.goto(url)
    let date = new Date().getTime()
    await page.pdf({ path: `./assets/pdf/${date}.pdf`, printBackground: true })
    console.log('打印成功')
}

const puppeteerImage = async (url) => {
    const browser = await initBrower()
    const page = await browser.newPage();
    await page.goto(url)
    let date = new Date().getTime()
    await page.screenshot({ path: `./assets/images/${date}.png`, fullPage: true });
    console.log('打印成功')
}
module.exports = {
    puppeteerPdf,
    puppeteerImage
}