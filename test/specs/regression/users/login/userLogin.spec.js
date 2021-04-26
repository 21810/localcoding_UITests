import HomePage from '../../../../pages/home.page';
import LoginPage from '../../../../pages/users/login.page';
import ProfilePage from '../../../../pages/users/profile.page';
import {users} from '../../../../data/users.data';

describe('USER LOGIN - POSITIVE', () => {
  before(() => {
    HomePage.open();
    HomePage.linkLogin.click();
  });

  it('should verify that user can login with valid credentials', () => {
    LoginPage.setEmail(users.new.email);
    LoginPage.setPassword(users.new.password);
    LoginPage.clickSubmitButton();
    ProfilePage.isOpen();
  });
});
