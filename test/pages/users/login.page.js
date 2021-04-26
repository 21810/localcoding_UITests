import BasePage from '../base.page';
import {url} from '../../specs/constants';

class LoginPage extends BasePage {
  get inputEmail () { return $('#normal_login_email'); }
  get inputPassword () { return $('#normal_login_password'); }
  get buttonSubmit () { return $('.login-form-button'); }
  get userDropdown () { return $('.ml-2.mr-2'); }
  get logoutDropdownLink () { return $('li[data-qa="logout"]'); }

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

  userLogin(email, password) {
    this.setEmail(email);
    this.setPassword(password);
    this.clickSubmitButton();
  }
}

export default new LoginPage();
