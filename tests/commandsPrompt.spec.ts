import { expect, test } from "@playwright/test";
import { commands } from "../src/components/data/commands";
import { PromptCommandPage } from "../project-objects/promptCommandPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Prompt text commands", () => {
  test("Should display info when user type valid cmd", async ({ page }) => {
    for (const command of commands) {
      const promptCommand = new PromptCommandPage(page);
      await promptCommand.expectCommandResult(command.title);
    }
  });

  test("Should display error message when user type invalid cmd", async ({
    page,
  }) => {
    const promptCommand = new PromptCommandPage(page);
    await promptCommand.expectLinksForCommand("invalid command");
    await expect(page.locator(".result-content p")).toContainText("Sorry");
  });

  test("should clear result when user types 'clear' and shows initial message", async ({
    page,
  }) => {
    const promptCommand = new PromptCommandPage(page);
    await promptCommand.expectLinksForCommand("invalid command");
    await promptCommand.expectLinksForCommand("clear");
    await expect(
      page.getByRole("heading", { name: "Hi, Welcome" }),
    ).toBeVisible();
    await expect(page.locator(".empty-state")).toBeVisible();
  });

  test("Should display commands suggestions when user types 'cmds'", async ({
    page,
  }) => {
    const promptCommand = new PromptCommandPage(page);
    await promptCommand.expectLinksForCommand("cmds");
    await expect(page.locator(".command-suggestions")).toBeVisible();
    await expect(page.locator(".prompt-list").first()).toBeVisible();
  });
});

test.describe("Commands that display interactive links", () => {
  test("Should display contact links and logos when user types 'contact", async ({
    page,
  }) => {
    const promptCommand = new PromptCommandPage(page);
    await promptCommand.expectLinksForCommand("contact");
  });

  test("should display project links when user types projects", async ({
    page,
  }) => {
    const promptCommand = new PromptCommandPage(page);
    await promptCommand.expectLinksForCommand("projects");
  });
  test("should display resume link when user types resume", async ({
    page,
  }) => {
    const promptCommand = new PromptCommandPage(page);
    await promptCommand.expectLinksForCommand("resume");
  });
});
