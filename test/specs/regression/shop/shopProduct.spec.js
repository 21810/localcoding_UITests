import ProfilePage from '../../../pages/users/profile.page';
import userData, {users} from '../../../data/users.data';
import HomePage from '../../../pages/home.page';
import LoginPage from '../../../pages/users/login.page';


describe('SHOP PRODUCT PAGE - POSITIVE', () => {

  describe('SHOP PRODUCT PAGE - ROLE NEW', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
    });

    it('TC SP-002 Verify that Shop page is available for user with new role', () => {
      LoginPage.userLogin(users.new.email, users.new.password);
      expect(ProfilePage.userName).toBeDisplayed();
    });

  });
});


