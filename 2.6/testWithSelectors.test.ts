import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"
// so is import a variant? why do we have {}? why not[]or()?  
const chromedriver = require("chromedriver")
// const is a variant which won't change. chromedriver is calling a chrome webpage why do we use driver in chromedriver? and then = require? is("a string") or "a string"? if not the first option then why do we use ()? 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
//why webDriver not chromedriver? why dose Builder have a capital B and how do you know to when to capitalize? what is ().for and how do you know when to use it? can you explan the rest of the line of code to me pleses? i see alot of () => {} what dose this mean
// and when do we use these? what dose the line of code below mean? I think it is put there so you can put the sentence in the string in the code. sorry I ask so many questions and maybe more then once I just really really won't to understan and be the best I can be
// I will stop asking questions's for now.   
describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.name('hdrInput')//fill in the blank
    const mkeInput: By = By.css('[name="mkeInput"]') //fill in the blank
    const oaiInput: By = By.css('[name="oriInput"]') //fill in the blank
    const nameInput: By = By.css('[name=namInput]') //fill in the blank
    const clrBtn: By = By.css('[class=button]') //fill in blank 
    const submitBtn: By = By.css('[class=button]') //fill in blank
    const errorMsg: By = By.css('[<p id="validHeader" alt="is"><!-- react-text: 132 --> <!-- /react-text --><!-- react-text: 133 -->Errors Received:<!-- /react-text --><!-- react-text: 134 --> <!-- /react-text --></p>]') // fill in blank 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Change this")
        await driver.findElement(mkeInput).sendKeys("change this")
        await driver.findElement(oaiInput).sendKeys("change this")
        await driver.findElement(nameInput).sendKeys("change this")
        await driver.findElement(submitBtn).click()
        let errorText = driver.findElement(errorMsg).getText()
        expect(errorText).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})