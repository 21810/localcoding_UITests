import HomePage from '../../../../pages/home.page';
import LoginPage from '../../../../pages/users/login.page';
import ProfilePage from '../../../../pages/users/profile.page';
import {url} from '../../../constants';
const expValue = require ('../../../../data/expected.json')
import {users} from '../../../../data/users.data';


describe('USER LOGIN - POSITIVE', () => {
  before(() => {
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
  it('TC-LOG004 should  verify that Login page has a header above the email input field ', function () {
    HomePage.linkLogin.click();
    expect(LoginPage.LoginPageHeader.getText()).toEqual(expValue.header);
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
});
