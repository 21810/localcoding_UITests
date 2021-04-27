import LoginPage from '../../pages/users/login.page';
import expected from '../../data/expected.json';
import {users} from '../../data/users.data';

describe ('User Logout - Smoke', () => {

  beforeEach(() => {
    LoginPage.open();
    LoginPage.userLogin(users.new.email, users.new.password);
  });

  it('Logout link in User dropdown = "Logout"', function () {
    LoginPage.userDropdown.click();
    const logoutText = LoginPage.logoutDropdownLink.getText();
    expect(logoutText).toEqual(expected.logoutLink);
  });
});

describe ('User Login Smoke', () => {

  before(() => {
    LoginPage.open();
  });

  it('should verify that user can login with valid credentials', () => {
    LoginPage.setEmail(users.new.email);
    LoginPage.setPassword(users.new.password);
    LoginPage.clickSubmitButton();
    ProfilePortalPage.isOpen();
  });
});
