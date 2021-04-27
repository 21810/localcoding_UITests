import BasePage from '../base.page';
import {url} from '../../specs/constants';

class ChallengesPage extends BasePage {
  get imageStairs() { return $('img[src*="marusya-stairs"]'); }
  get linkUserRegister() { return $('.login-form-button'); }

  open() {
    super.open(url.challenges);
  }

}

export default new ChallengesPage();
