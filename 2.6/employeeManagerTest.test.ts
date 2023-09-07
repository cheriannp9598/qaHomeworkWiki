import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
        afterAll(async () => {
          await driver.quit();
        })

        const hdrInput: By = By.css('[name ="hdrInput"]')
        const mkeInput: By = By.xpath('//input[@name="mkeInput"]')
        const oaiInput: By = By.css('[name"oriInput"]')
        const nameInput: By = By.xpath('(//input[@class="inputField"])[4]')
        const clrBtn: By = By.id('clearBtn')
        const submitBtn: By = By.id('saveBtn')
        const errorMsg: By = By.id('validHeader')
  
        test("filling in the blanks for real", async() => {
          await driver.findElement(hdrInput) .sendKeys("Change this")
          await driver.findElement(mkeInput).sendKeys("change this")
          await driver.findElement(oaiInput).sendKeys("change this")
          await driver.findElement(nameInput).sendKeys("change this")
          await driver.findElement(submitBtn).click()
          let errorHdr = await driver.findElement(errorMsg).getText()
          expect(errorHdr).toContain("Errors Received:")
          await driver.findElement(clrBtn).click()
        })

  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await employeePage.
          navigate();
      })
      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(employeePage.header))
          await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.newEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Change this")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("Change this")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Change this")
  '{'
})

  /* this is a commment */ 
