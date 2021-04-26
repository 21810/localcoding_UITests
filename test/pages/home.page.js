import BasePage from './base.page';
import {url} from './../specs/constants';

class HomePage extends BasePage {
  // top navigation menu
  get linkChallenges () { return $('div[data-qa="topmenu-Challenges"]');}
  get linkLogin () { return $('//a[@data-qa="login"]');}

  open() {
    super.open(url.baseUrl);
  }
}

export default new HomePage();
