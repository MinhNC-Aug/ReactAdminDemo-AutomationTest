import { Page } from '@playwright/test';

export class DatePickerWidget {
  constructor(private page: Page) {}

  async selectDatePicker1(date: string) {
    await this.page.getByText("Date Picker 1 (mm/dd/yyyy): ").fill(date);
  }

  async selectDatePicker2(date: string) {
    await this.page.getByText("Date Picker 2 (dd/mm/yyyy): ").fill(date);
  }

  async selectDateRange(start: string, end: string) {
    await this.page.getByPlaceholder('Start Date').fill(start);
    await this.page.getByPlaceholder('End Date').fill(end);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async getResult() {
    return this.page.getByText(/You selected a range/).textContent();
  }
}