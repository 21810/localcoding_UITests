import BasePage from '../base.page';
import {url} from '../../specs/constants';

class LoginPage extends BasePage {
  get inputEmail () { return $('#normal_login_email'); }
  get inputPassword () { return $('#normal_login_password'); }
  get buttonSubmit () { return $('.login-form-button'); }

  open(path) {
    browser.url(url.login);
  }

  setEmail(email) {
    this.inputEmail.setValue(email);
  }

  setPassword(password) {
    this.inputPassword.setValue(password);
  }

  clickSubmitButton() {
    this.buttonSubmit.click();
  }
}

export default new LoginPage();
