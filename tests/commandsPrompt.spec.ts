import { expect, test } from "@playwright/test";
import { commands } from "../src/components/data/commands";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test("Should display info when user type valid cmd", async ({ page }) => {
  const inputField = page.getByPlaceholder("Try: about, skills, projects...");
  for (const command of commands) {
    await inputField.clear();
    await inputField.fill(command.title);
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator(".result-content")).not.toBeEmpty();
    await inputField.fill("clear");
    await page.getByRole("button", { name: "Submit" }).click();
  }
});

test("Should display error message when user type invalid cmd", async ({
  page,
}) => {
  const inputField = page.getByPlaceholder("Try: about, skills, projects...");
  await inputField.fill("invalid cmd");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator(".result-content p")).toContainText("Sorry");
});

test("should clear result when user types 'clear' and shows initial message", async ({
  page,
}) => {
  const inputField = page.getByPlaceholder("Try: about, skills, projects...");
  await inputField.fill("erase this later");
  await page.getByRole("button", { name: "Submit" }).click();
  await inputField.fill("clear");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("heading", { name: "Hi, Welcome" }),
  ).toBeVisible();
  await expect(page.locator(".empty-state")).toBeVisible();
});

test("Should display commands suggestions when user types 'cmds'", async ({
  page,
}) => {
  await page.getByPlaceholder("Try: about, skills, projects...").fill("cmds");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator(".command-suggestions")).toBeVisible();
  await expect(page.locator(".prompt-list").first()).toBeVisible();
});
