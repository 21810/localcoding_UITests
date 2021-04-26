import HomePage from '../../../../pages/home.page';
import RegisterPage from '../../../../pages/users/registration.page';
import ProfilePage from '../../../../pages/users/profile.page';
import testUser from '../../../../data/testUser.json';

describe('REGISTRATION PAGE - POSITIVE', () => {

  describe('REGISTRATION PAGE - LINK', () => {
    before(() => {
      HomePage.open();
      HomePage.btnStartRightNow.click();
    });

    it('TC - REG002 Verify that the text = "Local Coding" ', () => {
      RegisterPage.getTitleLocalCoding();
    });

    it('TC - REG003 Verify that Register page has URL https://stage.localcoding.us/user/register', () => {
      RegisterPage.verifyURL();
    });
  });

  describe('REGISTRATION PAGE - HEADER', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC - REG002 Verify that the text = "Local Coding" ', () => {
      RegisterPage.verifyHeader();
    });
  });
});