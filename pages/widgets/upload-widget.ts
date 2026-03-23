import { Page } from '@playwright/test';

export class UploadWidget {
  constructor(private page: Page) {}

  async uploadSingle(filePath: string) {
    await this.page.getByText('Upload Single File')
      .locator('..')
      .getByRole('textbox')
      .setInputFiles(filePath);

    await this.page.getByRole('button', { name: 'Upload Single File' }).click();
  }

  async uploadMultiple(files: string[]) {
    await this.page.getByRole('button', { name: 'Upload Multiple Files' })
      .locator('..')
      .getByRole('textbox')
      .setInputFiles(files);

    await this.page.getByRole('button', { name: 'Upload Multiple Files' }).click();
  }
}