import {expect, test} from '@playwright/test';

test('Visits the initial project page', async ({page}) => {
  await page.goto('http://localhost:4200/');
  await expect(page).toHaveURL('http://localhost:4200/packs');
  await expect(page.locator('mat-toolbar')).toContainText('Sticker Generator');
});

test('Visits pack page after click', async ({page}) => {
  await page.goto('http://localhost:4200/');
  await page.click('text=Icebear');
  await expect(page).toHaveURL('http://localhost:4200/packs/2');
  await expect(page.locator('app-sticker-pack')).toContainText(
    'Pack from We Bare Bears'
  );
});

test('Goes back to home page on header link click', async ({page}) => {
  await page.goto('http://localhost:4200/packs/2');
  await page.click('text=Packs');
  await expect(page).toHaveURL('http://localhost:4200/packs');
});
