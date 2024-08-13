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
});


test.describe('Challenge 2', () => {
});
