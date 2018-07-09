const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  var width = Number(process.argv[2]);
  var height = Number(process.argv[3]);
  var filepath = String(process.argv[4]);
  var url = String(process.argv[5]);
  await page.goto(url);
  await page.setViewport({
    width: width,
    height: height
  });
  await page.screenshot({path: filepath});

  await browser.close();
})();
