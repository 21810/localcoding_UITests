import BasePage from './base.page';
import {url} from './../specs/constants';

class HomePage extends BasePage {
  // top navigation menu
  get linkChallenges () { return $('div[data-qa="topmenu-Challenges"]');}
  get linkLogin () { return $('//a[@data-qa="login"]');}
  get getStarted () {return $('.register-button.p-3'); }
  get btnStartRightNow () { return $('//a[@class="ant-btn ant-btn-primary login-form-button"][contains(text(),"Start Right Now!")]');}

  open() {
    super.open(url.baseUrl);
  }

  clickChallengesLink() {
    this.linkChallenges.click();
  }

  clickLoginLink() {
    this.linkLogin.click();
  }
}

export default new HomePage();
