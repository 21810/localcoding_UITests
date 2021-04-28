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

  get errorNameNotIncludeNumbers() {
    return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_firstName"]]//div[@role="alert"]');
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

  verifyIFFirstNamePlaceholder() {
    expect(this.inputFieldFirstName).toHaveAttribute('placeholder', 'First Name');
  }

  verifyInputFirstName(symbols, exp) {
    this.inputFieldFirstName.setValue(symbols);
    expect(this.inputFieldFirstName).toHaveValue(exp);
  }

  verifyErrorNameNotIncludeNumbers(symbols, err) {
    this.inputFieldFirstName.setValue(symbols);
    expect(this.errorNameNotIncludeNumbers).toBeDisplayed();
    expect(this.errorNameNotIncludeNumbers).toHaveText(err);
  }
}


export default new RegistrationPage();
