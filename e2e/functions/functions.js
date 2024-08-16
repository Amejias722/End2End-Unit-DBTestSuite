
import { expect } from '@playwright/test';

export async function verifyRequestPayload(page, expectedData) {
  
    const [request] = await Promise.all([
      page.waitForRequest(request =>
        request.url().includes('/backend-stub') && request.method() === 'POST'
      ),
      await page.getByRole('button', { name: 'Submit', exact: true }).click()
    ]);
  
  
    const requestBody = JSON.parse(request.postData());
    expect(requestBody).toEqual(expectedData);
  }

  export const ids = {
    dropdownMenu1: '[id="vs1__combobox"]',
    dropdownMenu2: '[id="vs2__combobox"]',
    cowboys: 'li:has-text("cowboys")',
    turtles: 'li:has-text("turtles")',
    xButton: 'button[title="Clear Selected"]',
    submitBtn: 'button[type="submit"]',
    ccImage: '[src="/cowboy-cowboy.png"]',
    ttImage: '[src="/turtle-turtle.png"]',
    ctImage: '[src="/cowboy-turtle.png"]',
  }
