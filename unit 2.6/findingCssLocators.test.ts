import {Builder, Capabilities, WebDriver} from 'selenium-webdriver';
const chromedriver = require('chromedrivver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities).build();

describe('practicing CSS', () => {
    beforeEach(async () => {
        await driver.get('https://www.amazon.com/');
    });
afterAll(async () => {
    await driver.quit();
});

const searchBar: By = By.id('twotabsearchtextbox');
    const results: By = By.css('.s-main-slot');

    test('searching for an item', async () => {
        await driver.findElement(searchBar).click();
        await driver.findElement(searchBar).sendKeys("baby yoda\n");
        let resultsText = await driver.findElement(results).getText(); 
        expect(resultsText).toContain("The Child");
    }); 

});
