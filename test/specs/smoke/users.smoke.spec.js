import LoginPage from '../../pages/users/login.page';
import testUser from '../../data/testUser.json';

describe ('User Logout - Smoke', () => {

  beforeEach(() => {
    LoginPage.open();
    LoginPage.userLogin(testUser.email, testUser.password);
  });

  it('Logout link in User dropdown = "Logout"', function () {
    LoginPage.userDropdown.click();
    const logoutText = LoginPage.logoutDropdownLink.getText();
    expect(logoutText).toEqual(testUser.logoutLink);
  });

});
