import BasePage from '../base.page';
import TestUser from '../../data/testUser.json';


class RegistrationPage extends BasePage {

  get header() {
    return $('h1');
  }

  open() {
    super.open('/user/register');
  }

  getTitleLocalCoding() {
    const title = browser.getTitle();
    expect(title).toEqual(TestUser.registration.title);
  }

  verifyURL() {
    const regURL = browser.getUrl();
    expect(regURL).toEqual(TestUser.registration.url);
  }

  verifyHeader() {
    expect(this.header).toHaveText(TestUser.registration.header);
  }
}


export default new RegistrationPage();
