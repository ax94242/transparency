const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="content-free-1-8afa"]/div/div[1]/div/div[1]/div/p[2]')
    const txt = await el.getProperty('txt');
    const rawTxt = await txt.jsonValue();

    console.log({rawTxt});
    browser.close();
}

scrapeProduct('https://www.pwc.com/us/en/industries/pharma-life-sciences/navigate-risk-and-regulatory-complexity/transparency-bulletin.html');