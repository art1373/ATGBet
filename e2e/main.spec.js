describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("should open fetch games", async () => {
    await element(by.text("Select your Game")).tap();
    await element(by.text("V75")).tap();
    expect(element(by.text("Axevalla"))).toBeVisible();
  });
});
