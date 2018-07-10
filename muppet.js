#!/usr/bin/env node

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const width = Number(process.argv[2]);
  const height = Number(process.argv[3]);
  const filepath = String(process.argv[4]);
  const url = String(process.argv[5]);
  await page.goto(url);
  await page.setViewport({
    width: width,
    height: height
  });
  await page.screenshot({path: filepath});

  await browser.close();
})();
