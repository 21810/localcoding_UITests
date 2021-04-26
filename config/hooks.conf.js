import LoginPage from '../test/pages/users/login.page';
import ProfilePage from '../test/pages/users/profile.page';

module.exports = {
  before: function (capabilities, specs) {
    browser.addCommand('login', function (username, password) {
      LoginPage.open();
      LoginPage.setEmail(username);
      LoginPage.setPassword(password);
      LoginPage.clickSubmitButton();
      ProfilePage.isOpen();
    });
  },

  afterTest: function(test, context, { error, result, duration, passed, retries }) {
    if (error) {
      browser.takeScreenshot();
    }
  }
};
