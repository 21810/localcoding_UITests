import HomePage from '../../../../pages/home.page';
import LoginPage from '../../../../pages/users/login.page';
import ProfilePage from '../../../../pages/users/profile.page';
import testUser from '../../../../data/testUser.json';

describe('LOGIN PAGE - POSITIVE', () => {
  before(() => {
    HomePage.open();
    HomePage.linkLogin.click();
  });

  it('should verify that user can login with valid credentials', () => {
    LoginPage.setEmail(testUser.email);
    LoginPage.setPassword(testUser.password);
    LoginPage.clickSubmitButton();
    ProfilePage.isOpen();
  });
});
