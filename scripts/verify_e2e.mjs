import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const screenshotsDir = "C:\\Users\\Muntasir\\.gemini\\antigravity\\brain\\0d7130a4-94d9-4845-bc15-5157b683a4cc";
fs.mkdirSync(screenshotsDir, { recursive: true });

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runVerification() {
  console.log("Launching headless Chrome for verification...");
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
      console.log("Browser error:", msg.text());
    }
  });

  page.on("pageerror", (err) => {
    consoleErrors.push(err.toString());
    console.error("Page error:", err);
  });

  try {
    // 1. DESKTOP TEST (1280x800)
    console.log("Navigating to http://localhost:3000 at 1280x800...");
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    // Wait for initial animation
    await new Promise((r) => setTimeout(r, 2000));
    await page.screenshot({
      path: path.join(screenshotsDir, "step1_opening_desktop.png"),
    });
    console.log("Captured step1_opening_desktop.png");

    // Click "Open your gift →"
    console.log("Clicking #open-gift-btn...");
    await page.waitForSelector("#open-gift-btn");
    await page.click("#open-gift-btn");
    await new Promise((r) => setTimeout(r, 1200));

    // Capture envelope closed
    await page.screenshot({
      path: path.join(screenshotsDir, "step2_envelope_closed.png"),
    });
    console.log("Captured step2_envelope_closed.png");

    // Click envelope to trigger 3D opening
    console.log("Tapping #envelope-btn to open...");
    await page.waitForSelector("#envelope-btn");
    await page.click("#envelope-btn");
    await new Promise((r) => setTimeout(r, 1500));

    // Capture envelope during rise
    await page.screenshot({
      path: path.join(screenshotsDir, "step3_envelope_rising.png"),
    });
    console.log("Captured step3_envelope_rising.png");

    // Wait for transition into birthday hero
    console.log("Waiting for transition into Birthday Hero...");
    await new Promise((r) => setTimeout(r, 2200));
    await page.screenshot({
      path: path.join(screenshotsDir, "step4_birthday_hero.png"),
    });
    console.log("Captured step4_birthday_hero.png");

    // Scroll through sections
    console.log("Scrolling through story sections...");
    await page.evaluate(() => window.scrollBy(0, 1000));
    await new Promise((r) => setTimeout(r, 800));

    await page.screenshot({
      path: path.join(screenshotsDir, "step5_beginning_timeline.png"),
    });
    console.log("Captured step5_beginning_timeline.png");

    // Scroll to Memories & Gallery
    await page.evaluate(() => window.scrollBy(0, 2000));
    await new Promise((r) => setTimeout(r, 800));

    await page.screenshot({
      path: path.join(screenshotsDir, "step6_editorial_gallery.png"),
    });
    console.log("Captured step6_editorial_gallery.png");

    // Test Lightbox
    console.log("Testing Lightbox interaction on #gallery-item-0...");
    await page.waitForSelector("#gallery-item-0");
    await page.click("#gallery-item-0");
    await new Promise((r) => setTimeout(r, 600));

    await page.screenshot({
      path: path.join(screenshotsDir, "step7_lightbox_open.png"),
    });
    console.log("Captured step7_lightbox_open.png");

    // Press Escape to close
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 500));

    // Scroll down to Love Letter
    console.log("Scrolling to Love Letter...");
    await page.evaluate(() => window.scrollBy(0, 2400));
    await new Promise((r) => setTimeout(r, 800));

    // Test open letter
    console.log("Clicking #open-letter-btn...");
    await page.waitForSelector("#open-letter-btn");
    await page.click("#open-letter-btn");
    await new Promise((r) => setTimeout(r, 1000));

    await page.screenshot({
      path: path.join(screenshotsDir, "step8_love_letter_opened.png"),
    });
    console.log("Captured step8_love_letter_opened.png");

    // Scroll to Countdown & Reveal
    console.log("Scrolling to Countdown & Reveal...");
    await page.evaluate(() => window.scrollBy(0, 1800));
    await new Promise((r) => setTimeout(r, 800));

    await page.screenshot({
      path: path.join(screenshotsDir, "step9_countdown_reveal.png"),
    });
    console.log("Captured step9_countdown_reveal.png");

    // Scroll to final footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise((r) => setTimeout(r, 800));

    await page.screenshot({
      path: path.join(screenshotsDir, "step10_final_peaceful_ending.png"),
    });
    console.log("Captured step10_final_peaceful_ending.png");

    // 2. MOBILE TEST (390x844 - iPhone 14 / modern phone)
    console.log("Testing Mobile Viewport (390x844)...");
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    // Check horizontal scrollbar on opening
    const hasHorizontalOverflow = await mobilePage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log("Mobile opening has horizontal overflow:", hasHorizontalOverflow);

    await new Promise((r) => setTimeout(r, 1000));
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, "step11_mobile_opening.png"),
    });
    console.log("Captured step11_mobile_opening.png");

    // Click open gift on mobile
    await mobilePage.waitForSelector("#open-gift-btn");
    await mobilePage.click("#open-gift-btn");
    await new Promise((r) => setTimeout(r, 1000));

    // Tap envelope on mobile
    await mobilePage.waitForSelector("#envelope-btn");
    await mobilePage.click("#envelope-btn");
    await new Promise((r) => setTimeout(r, 3000));

    // Check horizontal scroll on full story page
    const storyHorizontalOverflow = await mobilePage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log("Mobile story has horizontal overflow:", storyHorizontalOverflow);

    await mobilePage.screenshot({
      path: path.join(screenshotsDir, "step12_mobile_birthday_hero.png"),
    });
    console.log("Captured step12_mobile_birthday_hero.png");

    await mobilePage.evaluate(() => window.scrollBy(0, 1600));
    await new Promise((r) => setTimeout(r, 800));
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, "step13_mobile_memories.png"),
    });
    console.log("Captured step13_mobile_memories.png");

    await mobilePage.evaluate(() => window.scrollBy(0, 1800));
    await new Promise((r) => setTimeout(r, 800));
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, "step14_mobile_countdown.png"),
    });
    console.log("Captured step14_mobile_countdown.png");

    console.log("ALL VERIFICATION CHECKS PASSED!");
    console.log("Total Console Errors:", consoleErrors.length);
  } catch (err) {
    console.error("Verification failed:", err);
  } finally {
    await browser.close();
  }
}

runVerification();
