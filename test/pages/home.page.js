import BasePage from './base.page';

class HomePage extends BasePage {
  // top navigation menu
  get linkChallenges () { return $('div[data-qa="topmenu-Challenges"]');}
  get linkLogin () { return $('//a[@data-qa="login"]');}

  open() {
    super.open('/');
  }
}

export default new HomePage();
