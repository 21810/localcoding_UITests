import BasePage from '../base.page';

class LoginPage extends BasePage {
    get inputEmail () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }

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
