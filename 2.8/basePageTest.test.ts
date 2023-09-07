import { Google} from "./googleWBP";

const page = new Google();

test("it works", async () => {
  await page.navigate();
  await page.search("sweet magnolias");
  expect(await page.getResults()).toContain("sweet magnolias");
});

afterAll(async () => {
  await page.driver.quit();
});