import HomePage from '../../../pages/home.page';
import ChallengesPage from '../../../pages/challenges/challenges.page';
import {users} from '../../../data/users.data';

describe('TOP NAVIGATION', () => {
  before(() => {
    HomePage.open();
  });

  afterEach(() => {
    browser.execute('window.localStorage.clear()');
  });

  it('should verify that Challenges page is available for unauthorized user', () => {
    HomePage.linkChallenges.click();
    expect(browser).toHaveUrlContaining('/challenge');
    expect(ChallengesPage.imageStairs).toBeDisplayed();
    expect(ChallengesPage.linkUserRegister).toBeDisplayed();
  });

  it('should verify that Challenges page is available for user with new role', () => {
    browser.login(users.new.email, users.new.password);
    HomePage.linkChallenges.click();
    expect(browser).toHaveUrlContaining('/challenge');
    expect(ChallengesPage.imageStairs).toBeDisplayed();
    expect(ChallengesPage.linkUserRegister).not.toBeDisplayed();
  });
});
