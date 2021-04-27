import BasePage from '../base.page';
import expected from '../../data/expected.json';
import {url} from '../../specs/constants';


class RegistrationPage extends BasePage {

  get header() {
    return $('h1');
  }

  open() {
    super.open(url.register);
  }

  getTitleLocalCoding() {
    const title = browser.getTitle();
    expect(title).toEqual(expected.registration.title);
  }

  verifyURL() {
    const regURL = browser.getUrl();
    expect(regURL).toEqual(expected.registration.url);
  }

  verifyHeader() {
    expect(this.header).toHaveText(expected.registration.header);
  }
}


export default new RegistrationPage();
