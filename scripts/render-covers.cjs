/**
 * Bakes every cover listed in src/site/data/covers.ts into public/covers/*.jpg.
 *
 * Needs the dev server running (npm run dev) and a Chromium browser. Point
 * CHROME_PATH at one if it is not the default Edge install:
 *   CHROME_PATH="/path/to/chrome" node scripts/render-covers.cjs
 */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const BASE = process.env.COVER_BASE || 'http://localhost:5173';
const CHROME = process.env.CHROME_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const OUT = path.join(__dirname, '..', 'public', 'covers');

const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'site', 'data', 'covers.ts'), 'utf8');
const ids = [...src.matchAll(/\{ id: '([^']+)'/g)].map((m) => m[1]);

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 750 });
  for (const id of ids) {
    await page.goto(`${BASE}/cover-lab.html?id=${id}`, { waitUntil: 'networkidle0' });
    await page.waitForFunction('window.__coverReady === true', { timeout: 60000 });
    const el = await page.$('#cover');
    await el.screenshot({ path: path.join(OUT, `${id}.jpg`), type: 'jpeg', quality: 86 });
    console.log('baked', id);
  }
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
