import BasePage from './base.page';

class HomePage extends BasePage {
  get linkLogin () { return $('//a[@data-qa="login"]');}
  get getStarted () {return $('.register-button.p-3'); }
  open() {
    super.open('/');
  }
}

export default new HomePage();
