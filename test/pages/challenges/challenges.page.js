import BasePage from '../base.page';

class ChallengesPage extends BasePage {
  get imageStairs() { return $('img[src*="marusya-stairs"]'); }
  get linkUserRegister() { return $('.login-form-button'); }

  open() {
    super.open('/challenge');
  }

}

export default new ChallengesPage();
