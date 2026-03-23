import { Page, Locator } from '@playwright/test';

export class FormWidget {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressTextarea: Locator;

  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;

  readonly countryDropdown: Locator;
  readonly colorList: Locator;
  readonly animalList: Locator;

  constructor(private page: Page) {
    this.nameInput = page.getByText('Name:');
    this.emailInput = page.getByText('Email:');
    this.phoneInput = page.getByText('Phone:');
    this.addressTextarea = page.getByText('Address:');

    this.maleRadio = page.getByText('Male');
    this.femaleRadio = page.getByText('Female');

    this.countryDropdown = page.getByText('Country:');
    this.colorList = page.getByText('Colors:');
    this.animalList = page.getByText('Sorted List:');
  }

  async fillBasicInfo(data: {
    name: string;
    email: string;
    phone: string;
    address?: string;
  }) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);

    if (data.address) {
      await this.addressTextarea.fill(data.address);
    }
  }

  async selectGender(gender: 'male' | 'female') {
    if (gender === 'male') {
      await this.maleRadio.check();
    } else {
      await this.femaleRadio.check();
    }
  }

  async selectDays(days: string[]) {
    for (const day of days) {
      await this.page.getByLabel(day.charAt(0).toUpperCase() + day.slice(1)).check();
    }
  }

  async selectCountry(country: string) {
    await this.countryDropdown.selectOption({ label: country });
  }
  
  async selectColor(color: string) {
    await this.colorList.selectOption({ label: color });
  }

  async selectAnimal(animal: string) {
    await this.animalList.selectOption({ label: animal });
  }
}