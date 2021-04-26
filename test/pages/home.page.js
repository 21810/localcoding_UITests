import BasePage from './base.page';

class HomePage extends BasePage {
  get linkLogin () { return $('//a[@data-qa="login"]');}
  get btnStartRightNow () { return $('//a[@class="ant-btn ant-btn-primary login-form-button"][contains(text(),"Start Right Now!")]');}

  open() {
    super.open('/');
  }


}

export default new HomePage();
