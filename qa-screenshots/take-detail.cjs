const puppeteer = require('C:/Users/sznap/autoskola-sulova/scraper/node_modules/puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 20000 });
  await new Promise(r => setTimeout(r, 2000));

  // Full scroll pass to trigger all whileInView
  const totalH = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let pos = 0; pos < totalH; pos += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), pos);
    await new Promise(r => setTimeout(r, 80));
  }
  await new Promise(r => setTimeout(r, 800));

  // Scroll to Course section center
  const courseY = await page.evaluate(() => {
    const el = document.getElementById('kurz');
    return el ? el.getBoundingClientRect().top + window.scrollY : 0;
  });
  await page.evaluate((y) => window.scrollTo(0, y - 80), courseY);
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:/Users/sznap/autoskola-sulova-web/qa-screenshots/detail-course.png', fullPage: false });
  console.log('Course screenshot done');

  // Navbar (scroll back to near top so it shows white)
  await page.evaluate(() => window.scrollTo(0, 100));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'C:/Users/sznap/autoskola-sulova-web/qa-screenshots/detail-navbar-white.png',
    clip: { x: 0, y: 0, width: 1000, height: 72 } });

  // Navbar on dark hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'C:/Users/sznap/autoskola-sulova-web/qa-screenshots/detail-navbar-dark.png',
    clip: { x: 0, y: 0, width: 1000, height: 72 } });

  await browser.close();
  console.log('All done');
})();
