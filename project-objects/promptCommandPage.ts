import { expect, Page } from "@playwright/test";
import { commands } from "../src/components/data/commands";
import { placeholderText } from "../src/components/prompt/PromptInputBox";

export class PromptCommandPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  submitCommand = async (cmd: string) => {
    const inputField = this.page.getByPlaceholder(placeholderText);
    await inputField.fill(cmd);
    await this.page.getByRole("button", { name: "Submit" }).click();
  };

  expectCommandResult = async (commandTitle: string) => {
    await this.submitCommand(commandTitle);

    const latestResult = this.page.locator(".result-content").last();

    await expect(latestResult).toBeVisible();
    await expect(latestResult).not.toBeEmpty();
  };

  expectLinksForCommand = async (cmd: string) => {
    await this.submitCommand(cmd);
    const certainItem = commands.find((item) => item.title === cmd);
    if (certainItem?.links) {
      for (const link of certainItem.links) {
        const contactLink = this.page.getByRole("link", { name: link.label });
        await expect(contactLink).toBeVisible();
        await expect(contactLink).toHaveAttribute("href", link.href);
        if (link.imageSrc) {
          const logo = this.page.getByAltText(`${link.label} logo`);
          await expect(logo).toBeVisible();
        }
      }
    }
  };
}
