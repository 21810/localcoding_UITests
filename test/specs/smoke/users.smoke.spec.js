import LoginPage from '../../pages/users/login.page';
import expected from '../../data/expected.json';
import {users} from '../../data/users.data';
import ProfilePortalPage from '../../pages/users/profile.page';
import RegisterPage from '../../pages/users/registration.page';

describe ('User Logout - Smoke', () => {

  beforeEach(() => {
    LoginPage.open();
    LoginPage.userLogin(users.new.email, users.new.password);
  });

  it.skip('Logout link in User dropdown = "Logout"', function () {
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

describe('User Registration Smoke', () => {
  before(() => {
    RegisterPage.open();
  });

  it('TC-REG072 Verify that submit button is enabled after all mandatory fields are filled with valid data', function () {
    RegisterPage.setFirstName(users.new.firstName);
    RegisterPage.setLastName(users.new.lastName);
    RegisterPage.setPhone(users.new.phone);
    RegisterPage.setEmail(users.new.email);
    RegisterPage.setPassword(users.new.password);
    RegisterPage.checkBoxTermsAndAgreements.click();
    expect(RegisterPage.registerButton).toBeEnabled();
  });
});