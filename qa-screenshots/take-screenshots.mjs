import puppeteer from '../../autoskola-sulova/scraper/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
// fallback — use the scraper's puppeteer

const viewports = [
  { name: 'mobile-375',   width: 375,  height: 812 },
  { name: 'tablet-768',   width: 768,  height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'wide-1920',    width: 1920, height: 1080 },
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 25000 });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: `./qa-screenshots/${vp.name}.png`, fullPage: true });
  console.log(`✓ ${vp.name}.png`);

  // Check for horizontal overflow
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log(`  overflow: ${overflow ? '❌ YES' : '✓ none'}`);
  await page.close();
}

await browser.close();
console.log('QA screenshots done.');
