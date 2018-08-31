#!/usr/bin/env node

const puppeteer = require('puppeteer');

(async () => {
  const width = Number(process.argv[2]);
  const filepath = String(process.argv[3]);
  const url = String(process.argv[4]);

  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({
      width: width,
      height: 0
    });
    await page.screenshot({path: filepath});
  } catch (error) {
    console.error(error);
  }

  await browser.close();
})();
