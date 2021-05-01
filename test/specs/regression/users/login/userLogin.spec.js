import HomePage from '../../../../pages/home.page';
import LoginPage from '../../../../pages/users/login.page';
import ProfilePage from '../../../../pages/users/profile.page';
import {url} from '../../../constants';
const expValue = require ('../../../../data/expected.json');
import {users} from '../../../../data/users.data';
import RegisterPage from '../../../../pages/users/registration.page';
import ResetPage from '../../../../pages/users/reset.page';


describe.only('USER LOGIN - POSITIVE', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TC-LOG001 should verify that Login Page has "Local Coding" logo-link', function () {
    expect(LoginPage.logoLink.isDisplayed()).toEqual(true);
  });
  it('TC-LOG002 should validate that User can access Login page by URL', function () {
    browser.url(url.login);
    expect(LoginPage.inputEmail.isDisplayed()).toEqual(true);
  });
  it('TC-LOG003 should validate that user is redirected to the Main page after clicking on logo-link', function () {
    LoginPage.logoLink.click();
    expect(HomePage.getStarted.isDisplayed()).toEqual(true);
  });
  it('TC-LOG004 should  verify that Login page has a header "Welcome back!"', function () {
    expect(LoginPage.loginPageHeader.getText()).toEqual(expValue.login.header);
  });
  it('TC-LOG005 Verify that Login page has email input field ', function () {
    LoginPage.verifyEmailIfPresent();
  });
  it('TC-LOG006 Verify that Login page has password input field ', function () {
    LoginPage.verifyPasswordIfPresent();
  });
  it('TC-LOG007 Verify that Login Page has submit button', function () {
    LoginPage.verifyButtonSubmitPresent();
  });
  it('TC-LOG008 Verify that submit button text = "Log in"', function () {
    LoginPage.verifyButtonSubmitLogin();
  });
  it('TC-LOG009 Verify that the Login Page has the active "Create one." link', function () {
    expect(LoginPage.createOneLink.isEnabled()).toEqual(true);
  });
  it('TC-LOG010 Verify that the User is redirected to Registration page after clicking on "Create one." link', function () {
    LoginPage.createOneLink.click();
    expect(RegisterPage.header.getText()).toEqual(expValue.registration.header);
  });
  it('TC-LOG011 Verify that the Login Page has the active "Reset it."', function () {
    expect(LoginPage.resetItLink.isEnabled()).toEqual(true);
  });
  it('TC-LOG012 Verify that the User is redirected to Password reset page after clicking on "Reset it." link', function () {
    LoginPage.resetItLink.click();
    expect(ResetPage.resetHeader.getText()).toEqual(expValue.reset.resetHeader);
  });
});
