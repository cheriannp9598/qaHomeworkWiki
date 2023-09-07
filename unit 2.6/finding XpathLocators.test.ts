import { Builder, By, Capabilities, WebDriver} from 'selenium-webdriver';
const chromedriver =require('chromedriver');
const driver:WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

descrive('practicing xpath', () => {
    beforeEach(async () => {
        await driver.get('https://www.amazon.com/');
    } );
    afterAll(async () => {
        await driver.quit();
    });