import { Page } from '@playwright/test';

export class TableWidget {
  constructor(private page: Page) {}

  async getStaticTableRow(bookName: string) {
    return this.page.getByRole('row', { name: new RegExp(bookName) });
  }

  async getStaticTableCell(bookName: string, column: string) {
    const row = await this.getStaticTableRow(bookName);
    return row.getByRole('cell', { name: column });
  }

  async getDynamicCell(rowName: string, columnName: string) {
    const row = this.page.getByRole('row', { name: new RegExp(rowName) });
    return row.getByText(columnName);
  }
}