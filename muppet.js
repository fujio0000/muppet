#!/usr/bin/env node

const puppeteer = require('puppeteer');

async function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

(async () => {
  const width = Number(process.argv[2]);
  const filepath = String(process.argv[3]);
  const url = String(process.argv[4]);
  var browser = null;
  if (!process.env.CHROMEPATH) {
    browser = await puppeteer.launch();
  } else {
    browser = await puppeteer.launch({ executablePath: process.env.CHROMEPATH, headless: true });
  }
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await sleep(2000);
    await page.setViewport({
      width: width,
      height: 0
    });
    await page.screenshot({ path: filepath });
  } catch (error) {
    console.error(error);
  }

  await browser.close();
})();
