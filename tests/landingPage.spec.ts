import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test("Should have title", async ({ page }) => {
  await expect(page).toHaveTitle("Promptfolio");
});

test("should display the landing page welcome content", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Hi, Welcome" }),
  ).toBeVisible();
  await expect(page.locator(".empty-state")).toBeVisible();
});

test.describe("Input field area", () => {
  test("Input field should have placeholder to guide user", async ({
    page,
  }) => {
    await expect(
      page.getByPlaceholder("Try: about, skills, projects..."),
    ).toBeVisible();
  });

  test("Input field should be visible and editable", async ({ page }) => {
    const inputField = page.getByPlaceholder("Try: about, skills, projects...");
    await expect(inputField).toBeVisible();
    await expect(inputField).toBeEditable();
  });

  test("Submit button should be visible", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
  });
});

test("Should display helper text for cmds", async ({ page }) => {
  await expect(page.locator(".empty-state")).toContainText("cmds");
});

test("the 'cmds' text should be bold", async ({ page }) => {
  await expect(page.locator(".empty-state p span")).toHaveCSS(
    "font-weight",
    "700",
  );
});

test("should display footer", async ({ page }) => {
  const year = new Date().getFullYear();
  expect(page.locator("footer")).toContainText(year.toString());
});

test("should display header logo", async ({ page }) => {
  await expect(page.getByAltText("portfolio-logo")).toBeVisible();
});
