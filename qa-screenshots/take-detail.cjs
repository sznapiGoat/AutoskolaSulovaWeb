const puppeteer = require('C:/Users/sznap/autoskola-sulova/scraper/node_modules/puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 20000 });
  await new Promise(r => setTimeout(r, 2000));

  // Navbar on hero (dark)
  await page.screenshot({ path: 'C:/Users/sznap/autoskola-sulova-web/qa-screenshots/detail-navbar-hero.png',
    clip: { x: 0, y: 0, width: 600, height: 72 } });

  // Scroll just past hero into white section (navbar turns white)
  await page.evaluate(() => window.scrollTo(0, 80));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'C:/Users/sznap/autoskola-sulova-web/qa-screenshots/detail-navbar-white.png',
    clip: { x: 0, y: 0, width: 600, height: 72 } });

  // Footer top
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight - 600));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:/Users/sznap/autoskola-sulova-web/qa-screenshots/detail-footer.png',
    clip: { x: 0, y: 0, width: 600, height: 220 } });

  await browser.close();
  console.log('done');
})();
