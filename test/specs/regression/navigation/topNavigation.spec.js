import HomePage from '../../../pages/home.page';
import ChallengesPage from '../../../pages/challenges/challenges.page';
import {users} from '../../../data/users.data';
import {url} from '../../constants';
import expected from '../../../data/expected.json';

describe('TOP NAVIGATION', () => {

  before(() => {
    HomePage.open();
  });

  afterEach(() => {
    browser.execute('window.localStorage.clear()');
  });

  it('TC-CH001 Verify that Challenges page is available for unauthorized user', () => {
    HomePage.clickChallengesLink();
    expect(browser).toHaveUrlContaining(url.challenges);
    expect(ChallengesPage.imageStairs).toBeDisplayed();
    expect(ChallengesPage.linkUserRegister).toBeDisplayed();
  });

  it('TC-CH002 Verify that Challenges page is available for user with new role', () => {
    browser.login(users.new.email, users.new.password);
    HomePage.clickChallengesLink();
    expect(browser).toHaveUrlContaining(url.challenges);
    expect(ChallengesPage.imageStairs).toBeDisplayed();
    expect(ChallengesPage.linkUserRegister).not.toBeDisplayed();
  });

  it('TC-CH003 Verify that Challenges page is available for user with learner role', () => {
    browser.login(users.leaner.email, users.leaner.password);
    HomePage.clickChallengesLink();
    expect(browser).toHaveUrlContaining(url.challenges);
    expect(ChallengesPage.header).toHaveText(expected.challenges.list.header);
  });

  it('TC-CH004 Verify that Challenges page is available for user with student role', () => {
    browser.login(users.student.email, users.student.password);
    HomePage.clickChallengesLink();
    expect(browser).toHaveUrlContaining(url.challenges);
    expect(ChallengesPage.header).toHaveText(expected.challenges.list.header);
  });

  it('TC-CH005 Verify that Challenges page is available for user with teacher role', () => {
    browser.login(users.teacher.email, users.teacher.password);
    HomePage.clickChallengesLink();
    expect(browser).toHaveUrlContaining(url.challenges);
    expect(ChallengesPage.header).toHaveText(expected.challenges.list.header);
  });

  it('TC-CH006 Verify that Challenges page is available for user with admin role', () => {
    browser.login(users.admin.email, users.admin.password);
    HomePage.clickChallengesLink();
    expect(browser).toHaveUrlContaining(url.challenges);
    expect(ChallengesPage.header).toHaveText(expected.challenges.list.header);
  });

});
