import ShopProductPage from '../../../pages/shop/shopProduct.page';
import userData, {users} from '../../../data/users.data';
import HomePage from '../../../pages/home.page';
import LoginPage from '../../../pages/users/login.page';
import expected from '../../../data/expected.json';

describe('SHOP PRODUCT PAGE - POSITIVE', () => {

  describe('SHOP PRODUCT PAGE - ROLE NEW', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
      LoginPage.userLogin(users.new.email, users.new.password);
    });

    after(() => {
      browser.execute('window.localStorage.clear()');
    });

    it('TC SP-002 Verify that Shop page is available for user with new role', () => {
      ShopProductPage.goToShopPage();
      expect(ShopProductPage.headerProducts).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.shopUrl);
    });

    it('TC SP-003-1 Verify that Java Script Syntax SelfLearn is available for user with new role', () => {
      expect(ShopProductPage.javaScriptSyntaxSelfLearn).toBeDisplayed();
    });

    it('TC SP-003-2 Verify that Java Script Syntax With Teacher is available for user with new role', () => {
      expect(ShopProductPage.javaScriptSyntaxWithTeacher).toBeDisplayed();
    });

    it('TC SP-003-3 Verify that JavaScript Practice is available for user with new role', () => {
      expect(ShopProductPage.javaScriptPractice).toBeDisplayed();
    });

    it('TC SP-003-4 Verify that ReactJS is available for user with new role', () => {
      expect(ShopProductPage.reactJS).toBeDisplayed();
    });

    it('TC SP-020 Verify Description for ReactJS course', () => {
      expect(ShopProductPage.reactJSDescription).toHaveText(expected.courseDescription.reactJS);
    });

    it('TC SP-003-5 Verify that Fullstack React Project is available for user with new role', () => {
      expect(ShopProductPage.fullstackReactProject).toBeDisplayed();
    });

    it('TC SP-017 Verify Description for JavaScript Syntax самостоятельно course', () => {
      expect(ShopProductPage.javaScriptSyntaxSelfLearnDescription).toHaveText(expected.courseDescription.javaScriptSyntaxSelfLearn);
    });

    it('TC SP-018 Verify Description for Java Script Syntax With Teacher course', () => {
      expect(ShopProductPage.javaScriptSyntaxWithTeacherDescription).toHaveText(expected.courseDescription.javaScriptSyntaxWithTeacher);
    });

    it('TC SP-019 Verify Description for JavaScript Practice course', () => {
      ShopProductPage.javaScriptPractice.waitForClickable();
      ShopProductPage.javaScriptPractice.click();
      expect(ShopProductPage.javaScriptPracticeDescription).toHaveText(expected.courseDescription.javaScriptPractice);
      browser.back();
    });

    it('TC SP-020 Verify Description for Fullstack React JS course', () => {
      expect(ShopProductPage.reactJSDescription).toHaveText(expected.courseDescription.reactJS);
    });

    it('TC SP-021 Verify Description for Fullstack React Project course', () => {
      expect(ShopProductPage.fullstackReactProjectDescription).toHaveText(expected.courseDescription.fullstackReactProject);
    });

    it('TC SP-027 Verify price for Java Script Syntax SelfLearn course', () => {
      expect(ShopProductPage.javaScriptSyntaxSelfLearnPrice).toHaveText(expected.price.javaScriptSyntaxSelfLearn);
    });

    it.skip('TC SP-028 Verify price for Java Script Syntax With Teacher course', () => {
      ShopProductPage.javaScriptSyntaxWithTeacher.click();
      expect(ShopProductPage.javaScriptSyntaxWithTeacherPrice).toHaveText(expected.price.javaScriptSyntaxWithTeacher);
      browser.back();
    });

    it.skip('TC SP-029 Verify price for JavaScript Practice course', () => {
      expect(ShopProductPage.javaScriptPracticePrice).toHaveText(expected.price.javaScriptPractice);
    });

    it.skip('TC SP-027 Verify price for Fullstack React JS course', () => {
      expect(ShopProductPage.reactJSPrice).toHaveText(expected.price.reactJS);
    });

    it.skip('TC SP-027 Verify price for Fullstack React Project course', () => {
      expect(ShopProductPage.fullstackReactProjectPrice).toHaveText(expected.price.fullstackReactProject);
    });

  });

  describe('SHOP PRODUCT PAGE - ROLE LEARNER', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
      LoginPage.userLogin(users.leaner.email, users.leaner.password);
    });

    after(() => {
      browser.execute('window.localStorage.clear()');
    });

    it('TC SP-005 Verify that Shop page is available for user with role Learner', () => {
      ShopProductPage.goToShopPage();
      expect(ShopProductPage.headerProducts).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.shopUrl);
    });

    it('TC SP-006-1 Verify that Java Script Syntax SelfLearn is available for user with role Learner', () => {
      expect(ShopProductPage.javaScriptSyntaxSelfLearn).toBeDisplayed();
    });

    it('TC SP-006-2 Verify that Java Script Syntax With Teacher is available for user with role Learner', () => {
      expect(ShopProductPage.javaScriptSyntaxWithTeacher).toBeDisplayed();
    });

    it('TC SP-006-3 Verify that JavaScript Practice is available for user with role Learner', () => {
      expect(ShopProductPage.javaScriptPractice).toBeDisplayed();
    });

    it('TC SP-006-4 Verify that ReactJS is available for user with role Learner', () => {
      expect(ShopProductPage.reactJS).toBeDisplayed();
    });

    it('TC SP-006-5 Verify that Fullstack React Project is available for user with role Learner', () => {
      expect(ShopProductPage.fullstackReactProject).toBeDisplayed();
    });

    it('TC SP-007 Verify that JavaScript Syntax самостоятельно for user with role Learner is available and free', () => {
      ShopProductPage.startLearningBtn.click();
      expect(ShopProductPage.javaScriptSyntaxCoursePage).toBeDisplayed();
    });
  });

  describe('SHOP PRODUCT PAGE - ROLE STUDENT', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
      LoginPage.userLogin(users.student.email, users.student.password);
    });

    after(() => {
      browser.execute('window.localStorage.clear()');
    });

    it('TC SP-008 Verify that Shop page is available for user with role Student', () => {
      ShopProductPage.goToShopPage();
      expect(ShopProductPage.headerProducts).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.shopUrl);
    });

    it('TC SP-009-1 Verify that Java Script Syntax SelfLearn is available for user with role Student', () => {
      expect(ShopProductPage.javaScriptSyntaxSelfLearn).toBeDisplayed();
    });

    it('TC SP-009-2 Verify that Java Script Syntax With Teacher is available for user with role Student', () => {
      expect(ShopProductPage.javaScriptSyntaxWithTeacher).toBeDisplayed();
    });

    it('TC SP-009-3 Verify that JavaScript Practice is available for user with role Student', () => {
      expect(ShopProductPage.javaScriptPractice).toBeDisplayed();
    });

    it('TC SP-009-4 Verify that ReactJS is available for user with role Student', () => {
      expect(ShopProductPage.reactJS).toBeDisplayed();
    });

    it('TC SP-009-5 Verify that Fullstack React Project is available for user with role Student', () => {
      expect(ShopProductPage.fullstackReactProject).toBeDisplayed();
    });

    it('TC SP-010 Verify that JavaScript Syntax самостоятельно for user with role Student is available and free', () => {
      ShopProductPage.startLearningBtn.click();
      expect(ShopProductPage.javaScriptSyntaxCoursePage).toBeDisplayed();
    });
  });

  describe('SHOP PRODUCT PAGE - ROLE TEACHER', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
      LoginPage.userLogin(users.teacher.email, users.teacher.password);
    });

    after(() => {
      browser.execute('window.localStorage.clear()');
    });

    it('TC SP-011 Verify that Shop page is available for user with role Teacher', () => {
      ShopProductPage.goToShopPage();
      expect(ShopProductPage.headerProducts).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.shopUrl);
    });

    it('TC SP-012-1 Verify that Java Script Syntax SelfLearn is available for user with role Teacher', () => {
      expect(ShopProductPage.javaScriptSyntaxSelfLearn).toBeDisplayed();
    });

    it('TC SP-012-2 Verify that Java Script Syntax With Teacher is available for user with role Teacher', () => {
      expect(ShopProductPage.javaScriptSyntaxWithTeacher).toBeDisplayed();
    });

    it('TC SP-012-3 Verify that JavaScript Practice is available for user with role Teacher', () => {
      expect(ShopProductPage.javaScriptPractice).toBeDisplayed();
    });

    it('TC SP-012-4 Verify that ReactJS is available for user with role Teacher', () => {
      expect(ShopProductPage.reactJS).toBeDisplayed();
    });

    it('TC SP-012-5 Verify that Fullstack React Project is available for user with role Teacher', () => {
      expect(ShopProductPage.fullstackReactProject).toBeDisplayed();
    });

    it('TC SP-013 Verify that JavaScript Syntax самостоятельно for user with role Teacher is available and free', () => {
      ShopProductPage.startLearningBtn.click();
      expect(ShopProductPage.javaScriptSyntaxCoursePage).toBeDisplayed();
    });
  });

  describe('SHOP PRODUCT PAGE - ROLE ADMIN', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
      LoginPage.userLogin(users.admin.email, users.admin.password);
    });

    after(() => {
      browser.execute('window.localStorage.clear()');
    });

    it('TC SP-014 Verify that Shop page is available for user with role Admin', () => {
      ShopProductPage.goToShopPage();
      expect(ShopProductPage.headerProducts).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.shopUrl);
    });

    it('TC SP-015-1 Verify that Java Script Syntax SelfLearn is available for user with role Admin', () => {
      expect(ShopProductPage.javaScriptSyntaxSelfLearn).toBeDisplayed();
    });

    it('TC SP-015-2 Verify that Java Script Syntax With Teacher is available for user with role Admin', () => {
      expect(ShopProductPage.javaScriptSyntaxWithTeacher).toBeDisplayed();
    });

    it('TC SP-015-3 Verify that JavaScript Practice is available for user with role Admin', () => {
      expect(ShopProductPage.javaScriptPractice).toBeDisplayed();
    });

    it('TC SP-015-4 Verify that ReactJS is available for user with role Admin', () => {
      expect(ShopProductPage.reactJS).toBeDisplayed();
    });

    it('TC SP-015-5 Verify that Fullstack React Project is available for user with role Admin', () => {
      expect(ShopProductPage.fullstackReactProject).toBeDisplayed();
    });

    it('TC SP-016 Verify that JavaScript Syntax самостоятельно for user with role Admin is available and free', () => {
      ShopProductPage.startLearningBtn.click();
      expect(ShopProductPage.javaScriptSyntaxCoursePage).toBeDisplayed();
    });
  });

});


