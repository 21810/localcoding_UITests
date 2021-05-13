import BasePage from '../base.page';
import expected from '../../data/expected.json';
import {url} from '../../specs/constants';

class RegistrationPage extends BasePage {

  get header() {return $('h1');}
  get inputFieldFirstName() {return $('#user_login_firstName');}
  get inputFieldLastName() {return $('#user_login_lastName');}
  get inputFieldCountry() {return $('//div[@class="ant-select ant-select-lg ant-select-single ant-select-show-arrow"]');}
  get inputFieldEmail() {return $('#user_login_email');}
  get inputFieldPassword() {return $('#user_login_password');}
  get selectedCountry() {return $('//span[@class="ant-select-selection-item"]');}
  get activeCountry() {return $("//div[@class='ant-select-item ant-select-item-option ant-select-item-option-active']");}
  get inputFieldPhone() { return $('//div[@class="ant-form-item-control-input-content"]//input[@id="user_login_phone"]');}
  get inputFieldPhonePrefix() {return $('//span[@class="ant-input-affix-wrapper ant-input-affix-wrapper-lg"]/span[@class="ant-input-prefix"]');}
  get registerButton () {return $('.ant-btn.ant-btn-primary.ant-btn-lg');}
  get eyeIcon () {return $('//span[@class="ant-input-suffix"]/span[@class="anticon anticon-eye-invisible ant-input-password-icon"]');}
  get checkBoxTermsAndAgreements() {return $('#user_login_agreement');}
  get buttonTermsAndAgreements(){return $('//span[contains(text(),\'Terms and agreements\')]')}
  get termsOfServicePage() {return $('//div[@class="ant-drawer-body"]/h1');}
  get footer() {return $('//div[@class="ant-form-item-control-input-content"]/p');}
  get footerLogin() {return $('//a[contains(text(),"Log in")]');}

  get errorNameNotIncludeNumbers() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_firstName"]]//div[@role="alert"]');}
  get errorLastNameNotIncludeNumbers() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_lastName"]]//div[@role="alert"]');}
  get errorRequiredFirstName() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_firstName"]]//div[@role="alert"]')};
  get errorRequiredLastName() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_lastName"]]//div[@role="alert"]')};
  get errorPhoneNumberMustBeTenOrEleven() {return $('//div[@class="ant-form-item-explain ant-form-item-explain-error"]');}
  get errorPhoneMustOnlyContainNumbers() {return $('//div[contains(text(),"Phone must only contain numbers.")]');}
  get errorEmailIsNotValid() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="user_login_email"]]//div[@role="alert"]');}
  get errorUserExists() {return $('//div[@class="ant-notification-notice-message"]');}
  get errorPasswordMustBeFiveSymbols() {return $('//div[contains(text(),"Password must be min: 5 symbols.")]');}
  get errorPasswordWhitespace() {return $('//div[contains(text(),"Password must be without whitespace.")]');}

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

  setFirstName(firstName) {
    this.inputFieldFirstName.setValue(firstName);
  }

  setLastName(LastName) {
    this.inputFieldLastName.setValue(LastName);
  }

  setPhone(phone) {
    this.inputFieldPhone.setValue(phone);
  }

  setEmail(email) {
    this.inputFieldEmail.setValue(email);
  }

  setPassword(password) {
    this.inputFieldPassword.setValue(password);
  }

  verifyInputFieldFirstName(symbols, exp) {
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
      browser.keys(['ArrowDown']);
      valueOfCountry = this.activeCountry.getAttribute('title');
      if (valueOfCountry === text) {
        browser.keys(['Enter']);
        iteration = false;
      }
    } while (iteration);
  }

  verifyInputFieldPhone(digits, exp) {
    this.inputFieldPhone.setValue(digits);
    expect(this.inputFieldPhone).toHaveValue(exp);
  }

  verifyInputFieldEmail(symbols, exp) {
    this.inputFieldEmail.setValue(symbols);
    expect(this.inputFieldEmail).toHaveValue(exp);
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

  verifyErrorPhoneIFMustBeTenOrElevenDigits (digits, err) {
    this.inputFieldPhone.setValue(digits);
    expect(this.errorPhoneNumberMustBeTenOrEleven).toBeDisplayed();
    expect(this.errorPhoneNumberMustBeTenOrEleven).toHaveText(err);
  }

  verifyErrorPhoneIFMustContainNumbers (symbols, err) {
    this.inputFieldPhone.setValue(symbols);
    expect(this.errorPhoneMustOnlyContainNumbers).toBeDisplayed();
    expect(this.errorPhoneMustOnlyContainNumbers).toHaveText(err);
    expect(this.errorPhoneMustOnlyContainNumbers).toHaveText(err);
  }

  verifyErrorEmailIsNotValid (symbols, err) {
    this.inputFieldEmail.setValue(symbols);
    expect(this.errorEmailIsNotValid).toBeDisplayed();
    expect(this.errorEmailIsNotValid).toHaveText(err);
  }

  clearInput(element) {
    const value = element.getValue();
    for(let i =0; i < value.length; i++) {
      element.keys('Backspace');
    }
  }

  emptyFirstNameInput() {
    this.clearInput(this.inputFieldFirstName);
  }

  emptyLastNameInput() {
    this.clearInput(this.inputFieldLastName);
  }
}


export default new RegistrationPage();
