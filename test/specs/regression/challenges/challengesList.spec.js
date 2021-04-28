import HomePage from '../../../pages/home.page';
import ChallengesPage from '../../../pages/challenges/challenges.page';
import RegistrationPage from '../../../pages/users/registration.page';
import {url} from '../../constants';
import expected from '../../../data/expected.json';
import {users} from '../../../data/users.data';
import {challenges, searchTestCases} from '../../../data/challenges.data';
import challengeCreate from '../challenges/_actions/challengeCreate';
import challengeDelete from '../challenges/_actions/challengeDelete';

describe('CHALLENGES LIST - NAVIGATION', () => {

  before(() => {
    HomePage.open();
    HomePage.clickChallengesLink();
  });

  it('TC-CH007 Verify that Challenges page is available for unauthorized user', () => {
    ChallengesPage.clickUserRegisterLink();
    expect(browser).toHaveUrlContaining(url.register);
    expect(RegistrationPage.header).toHaveText(expected.registration.header);
  });

});

describe('CHALLENGES LIST - SEARCH', () => {
  let challengesArray = [];

  before(async () => {
    for (let i = 0; i < 2; i++) {
      for (const challenge of Object.values(challenges)) {
        challengesArray.push(await challengeCreate(challenge));
      }
    }
    HomePage.open();
  });

  afterEach( async () => {
    browser.execute('window.localStorage.clear()');
  });

  after( async () => {
    for (const challenge of challengesArray) {
      await challengeDelete(challenge);
    }
  });

  Object.keys(searchTestCases).forEach(function(key) {
    const testCase = searchTestCases[key];
    it(key, () => {
      browser.login(users.student.email, users.student.password);
      HomePage.clickChallengesLink();
      ChallengesPage.setSearchName(testCase.query);
      browser.waitUntil(() => {
        if (testCase.expectedCount > 0)
          return ChallengesPage.getItemsTotalText() == expected.challenges.search.textTotalItems + testCase.expectedCount;
        else
          return ChallengesPage.textEmptyTable.waitForDisplayed(1500);
      }, {
        timeout: 1500,
        timeoutMsg: 'count of table rows to different after 1.5s'
      });
      expect(ChallengesPage.getCountOfTableRows()).toEqual(testCase.expectedCount);
    });
  });

});
