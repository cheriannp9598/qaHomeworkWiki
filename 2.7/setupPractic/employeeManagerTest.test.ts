import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import {employeePO} from './employeeManagerPageObject'
const emPage = new employeePO(driver)

  describe("Practicing PageObjects", () => {
      beforeEach(async () => {
          await emPage.navigate()
      })
      afterAll(async () =>{
          await emPage.driver.quit()
      } )

      test("adding employees", async () => {
          await emPage.click(emPage.addEmployee)
          await emPage.click(emPage.newEmployee)
          await emPage.click(emPage.nameField)
          await emPage.driver.findElement(emPage.nameField).clear()
          await emPage.sendKeys(emPage.nameField, "Bob the Builder")
          await emPage.click(emPage.saveBtn)
          await emPage.driver.sleep(100);
      })
  })