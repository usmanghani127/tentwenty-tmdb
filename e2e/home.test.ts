// @ts-nocheck
import {element} from 'detox';

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

describe('Home Test Suite', () => {
  beforeAll(async () => {
    await device.launchApp();
    await sleep(3000);
  });

  it('should display hello world', async () => {
    await expect(element(by.text('Hello World'))).toBeVisible();
  });
});
