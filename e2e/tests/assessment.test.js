/**
 * E2E Assessment.
 *
 * 1. Update dependencies/devDependencies in the package.json.
 * 2. npm i && npm t
 * 3. Make any changes to assesment.test.js and index.html you want
 * 4. Challenge 1
 *    * Validate the bulleted list gets populated with links and dates.
 *    * Mock out the external network call so the E2E tests never actually hit GitHub's API directly.
 *    * Validates an error message is shown if the network call fails.
 * 5. Challenge 2
 *    * Validate the correct image shows up for:
 *      * Turtles + Turtles
 *      * Turtles + Cowboys
 *      * Cowboys + Cowboys
 *    * Validate the correct data is sent to the backend stub on submit
 *    * Make a test where we set values for both people, but then click the "X" in the dropdowns to clear out each selection.
 *      * This should show no image, and no text below the table.
 *    * Don't worry about testing the network call failing, the backend doesn't work yet anyways :)
 */

import { test, expect } from '@playwright/test';
import { verifyRequestPayload, ids } from "../functions/functions.js";



const LOCAL = 'http://localhost:3000/';

test.describe('Example Test', () => {
  test('Assessment page loads', async ({ page }) => {
    await page.goto(LOCAL);

    await expect(page)
      .toHaveTitle('E2E Assessment');

    await expect(page.locator('[data-qa="explanation"]'))
      .toContainText('This challenge assesses your skills at writing end-to-end tests.');
  });
})

test.describe('Challenge 1', () => {
  test('Validate the bulleted list gets populated with links and dates', async ({ page }) => {
  
    await page.goto(LOCAL);

    await expect(page).toHaveTitle('E2E Assessment');
    await page.getByRole('button', { name: 'Get releases', exact: true }).click();
    
    const links = await page.locator('ul li a[href]');
    await expect(links).toHaveCount(3);
    const datetimeElement = page.locator('[datetime]');
    await expect(datetimeElement).toHaveCount(3);

  });
});


test.describe('Challenge 2', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(LOCAL);
  });

  test('cowboys + cowboys', async ({page}) => {
  
  await page.click(ids.dropdownMenu1)
  await page.click(ids.cowboys);  
  const selectedText1 = await page.textContent(ids.dropdownMenu1);
  expect(selectedText1).toContain('cowboys');

  await page.click(ids.dropdownMenu2)
  await page.click(ids.cowboys);  
  const selectedText2 = await page.textContent(ids.dropdownMenu2);
  expect(selectedText2).toContain('cowboys');

  await expect(page.locator(ids.ccImage)).toBeVisible();
  await page.getByRole(ids.submitBtn)

  const expectedData = [
    { name: "Jonathon", likes: "cowboys" },
    { name: "Freddy", likes: "cowboys" }
  ];
  await verifyRequestPayload(page, expectedData);



  })

  test('Turtles + Turtles', async ({page}) => {

  await page.click(ids.dropdownMenu1)
  await page.click(ids.turtles);
  const selectedText1 = await page.textContent(ids.dropdownMenu1);
  expect(selectedText1).toContain('turtles');

  await page.click(ids.dropdownMenu2)
  await page.click(ids.turtles);
  const selectedText2 = await page.textContent(ids.dropdownMenu1);
  expect(selectedText2).toContain('turtles');
  await expect(page.locator(ids.ttImage)).toBeVisible();
  await page.getByRole(ids.submitBtn)

  const expectedData = [
    { name: "Jonathon", likes: "turtles" },
    { name: "Freddy", likes: "turtles" }
  ];
  await verifyRequestPayload(page, expectedData);

  })

  test('Turtles + Cowboys', async ({page}) => {


  await page.click(ids.dropdownMenu1)
  await page.click(ids.cowboys);  
  const selectedText1 = await page.textContent(ids.dropdownMenu1);
  expect(selectedText1).toContain('cowboys');
  
  await page.click(ids.dropdownMenu2)
  await page.click(ids.turtles);
  const selectedText2 = await page.textContent(ids.dropdownMenu2);
  expect(selectedText2).toContain('turtles');
  await expect(page.locator(ids.ctImage)).toBeVisible();
  await page.getByRole(ids.submitBtn);

  const expectedData = [
    { name: "Jonathon", likes: "cowboys" },
    { name: "Freddy", likes: "turtles" }
  ];
  await verifyRequestPayload(page, expectedData);


  //Clears out selection
  await page.locator(ids.xButton).nth(0).click();
  await expect(page.locator(ids.dropdownMenu2)).not.toHaveText('cowboys');
  await page.locator(ids.xButton).nth(1).click();
  await expect(page.locator(ids.dropdownMenu2)).not.toHaveText('turtles');
  await expect(page.locator(ids.ctImage)).not.toBeVisible();

  })


});
