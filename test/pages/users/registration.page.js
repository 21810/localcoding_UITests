import BasePage from '../base.page';
import expected from '../../data/expected.json';
import {url} from '../../specs/constants';

class RegistrationPage extends BasePage {

  get header() {return $('h1');}
  get inputFieldFirstName() {return $('#user_login_firstName');}
  get inputFieldLastName() {return $('#user_login_lastName');}
  get inputFieldCountry() {return $('//div[@class="ant-select ant-select-lg ant-select-single ant-select-show-arrow"]');}
  get selectedCountry() {return $('//span[@class="ant-select-selection-item"]');}
  get activeCountry() {return $("//div[@class='ant-select-item ant-select-item-option ant-select-item-option-active']");}
  get inputFieldPhone() {return $('user_login_phone');}
  get inputFieldEmail () {return $('#user_login_email');}
  get inputFieldPassword () {return $('user_login_password');}
  get errorNameNotIncludeNumbers() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_firstName"]]//div[@role="alert"]');}
  get errorLastNameNotIncludeNumbers() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_lastName"]]//div[@role="alert"]');}

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

  verifyInputFirstName(symbols, exp) {
    this.inputFieldFirstName.setValue(symbols);
    expect(this.inputFieldFirstName).toHaveValue(exp);
  }

  verifyInputFieldLastName(symbols, exp) {
    this.inputFieldLastName.setValue(symbols);
    expect(this.inputFieldLastName).toHaveValue(exp);
  }

  selectCountry(elem, text) {
    elem.click();
    let valueOfCountry;
    let iteration = true;
    do {
      browser.keys(['ArrowUp']);
      valueOfCountry = this.activeCountry.getAttribute('title');
      if (valueOfCountry === text) {
        browser.keys(['Enter']);
        iteration = false;
      }
    } while (iteration);
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
