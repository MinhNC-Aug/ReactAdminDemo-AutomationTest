import { Page } from '@playwright/test';
import { BasePage } from '../base';
import { FormWidget } from '../widgets/form-widget';
import { DatePickerWidget } from '../widgets/datepicker-widget';
import { TableWidget } from '../widgets/table-widget';
import { UploadWidget } from '../widgets/upload-widget';

export class HomePage extends BasePage {
  form: FormWidget;
  datePicker: DatePickerWidget;
  table: TableWidget;
  upload: UploadWidget;

  constructor(page:Page) {
    super(page);

    this.form = new FormWidget(page);
    this.datePicker = new DatePickerWidget(page);
    this.table = new TableWidget(page);
    this.upload = new UploadWidget(page);
  }

  async open() {
    await this.goto('https://testautomationpractice.blogspot.com/');
  }
}