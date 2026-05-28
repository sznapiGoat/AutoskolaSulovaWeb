const puppeteer = require('C:/Users/sznap/autoskola-sulova/scraper/node_modules/puppeteer');
const path = require('path');

const viewports = [
  { name: 'mobile-375',   width: 375,  height: 812 },
  { name: 'tablet-768',   width: 768,  height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'wide-1920',    width: 1920, height: 1080 },
];

async function scrollFull(page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  let pos = 0;
  while (pos < height) {
    pos = Math.min(pos + 400, height);
    await page.evaluate((y) => window.scrollTo(0, y), pos);
    await new Promise(r => setTimeout(r, 150));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise(r => setTimeout(r, 2000));

    // Scroll through page to trigger all whileInView animations
    await scrollFull(page);
    await new Promise(r => setTimeout(r, 500));

    const outPath = path.join('C:/Users/sznap/autoskola-sulova-web/qa-screenshots', vp.name + '.png');
    await page.screenshot({ path: outPath, fullPage: true });

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(`✓ ${vp.name}.png — overflow: ${overflow ? 'YES ❌' : 'none ✓'}`);
    await page.close();
  }

  await browser.close();
  console.log('QA done.');
})();
