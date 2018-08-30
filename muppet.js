#!/usr/bin/env node

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const width = Number(process.argv[2]);
  const filepath = String(process.argv[3]);
  const url = String(process.argv[4]);
  try {
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
