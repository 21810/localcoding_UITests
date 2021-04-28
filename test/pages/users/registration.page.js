import BasePage from '../base.page';
import expected from '../../data/expected.json';
import {url} from '../../specs/constants';


class RegistrationPage extends BasePage {

  get header() {
    return $('h1');
  }

  get inputFieldFirstName() {
    return $('#user_login_firstName');
  }

  get inputFieldLastName() {
    return $('#user_login_lastName');
  }

  get errorNameNotIncludeNumbers() {
    return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_firstName"]]//div[@role="alert"]');
  }

  get errorLastNameNotIncludeNumbers() {
    return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_lastName"]]//div[@role="alert"]');
  }

  open() {
    super.open(url.register);
  }

  getTitleLocalCoding() {
    const title = browser.getTitle();
    expect(title).toEqual(expected.registration.title);
  }

  verifyURL() {
    const regURL = browser.getUrl();
    expect(regURL).toEqual(expected.registration.url);
  }

  verifyHeader() {
    expect(this.header).toHaveText(expected.registration.header);
  }
  
  verifyIFFirstNameExist() {
    expect(this.inputFieldFirstName).toBeExisting();
  }

  verifyIFLastNameExists() {
    expect(this.inputFieldLastName).toBeExisting();
  }

  verifyIFFirstNamePlaceholder() {
    expect(this.inputFieldFirstName).toHaveAttribute('placeholder', 'First Name');
  }

  verifyIFLastnamePlaceholder() {
    expect(this.inputFieldLastName).toHaveAttribute('placeholder', 'Last Name');
  }

  verifyInputFirstName(symbols, exp) {
    this.inputFieldFirstName.setValue(symbols);
    expect(this.inputFieldFirstName).toHaveValue(exp);
  }

  verifyInputFieldLastName(symbols, exp) {
    this.inputFieldLastName.setValue(symbols);
    expect(this.inputFieldLastName).toHaveValue(exp);
  }

  verifyErrorNameNotIncludeNumbers(symbols, err) {
    this.inputFieldFirstName.setValue(symbols);
    expect(this.errorNameNotIncludeNumbers).toBeDisplayed();
    expect(this.errorNameNotIncludeNumbers).toHaveText(err);
  }

  verifyErrorLastNameNotIncludeNumbers(symbols, err) {
    this.inputFieldLastName.setValue(symbols);
    expect(this.errorLastNameNotIncludeNumbers).toBeDisplayed();
    expect(this.errorLastNameNotIncludeNumbers).toHaveText(err);
  }
}


export default new RegistrationPage();
