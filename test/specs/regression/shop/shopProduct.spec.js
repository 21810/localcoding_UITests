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

    it('TC SP-028 Verify price for Java Script Syntax With Teacher course', () => {
      ShopProductPage.javaScriptSyntaxWithTeacher.click();
      expect(ShopProductPage.javaScriptSyntaxWithTeacherPrice).toHaveText(expected.price.javaScriptSyntaxWithTeacher);
      browser.back();
    });

    it('TC SP-029 Verify price for JavaScript Practice course', () => {
      ShopProductPage.javaScriptPractice.waitForClickable();
      ShopProductPage.javaScriptPractice.click();
      expect(ShopProductPage.javaScriptPracticePrice).toHaveText(expected.price.javaScriptPractice);
      browser.back();
    });

    it('TC SP-030 Verify price for React JS course', () => {
      ShopProductPage.reactJS.waitForClickable();
      ShopProductPage.reactJS.click();
      expect(ShopProductPage.reactJSPrice).toHaveText(expected.price.reactJS);
      browser.back();
    });

    it('TC SP-031 Verify price for Fullstack React Project course', () => {
      ShopProductPage.fullstackReactProject.waitForClickable();
      ShopProductPage.fullstackReactProject.click();
      expect(ShopProductPage.fullstackReactProjectPrice).toHaveText(expected.price.fullstackReactProject);
      browser.back();
    });

    it('TC SP-022 Verify that button Buy now for the course JavaScript Syntax с преподавателем is active and redirect to the checkout page ', () => {
      ShopProductPage.javaScriptSyntaxWithTeacher.waitForClickable();
      ShopProductPage.buyNowBtn[userData.users.buyNowBtn.JavaScriptSyntaxWithTeacher].click();
      expect(ShopProductPage.paymentPage).toBeDisplayed();
      browser.back();
    });

    it('TC SP-023 Verify that button Buy now for the course JavaScript Practice is active and redirect to the checkout page ', () => {
      ShopProductPage.javaScriptPractice.waitForClickable();
      ShopProductPage.buyNowBtn[userData.users.buyNowBtn.JavaScriptPractice].click();
      expect(ShopProductPage.paymentPage).toBeDisplayed();
      browser.back();
    });

    it('TC SP-024 Verify that button Buy now for the course React JS is active and redirect to the checkout page ', () => {
      ShopProductPage.reactJS.waitForClickable();
      ShopProductPage.buyNowBtn[userData.users.buyNowBtn.ReactJS].click();
      expect(ShopProductPage.paymentPage).toBeDisplayed();
      browser.back();
    });

    it('TC SP-025 Verify that button Buy now for the course Fullstack React Project is active and redirect to the checkout page ', () => {
      ShopProductPage.fullstackReactProject.waitForClickable();
      ShopProductPage.buyNowBtn[userData.users.buyNowBtn.FullstackReactProject].click();
      expect(ShopProductPage.paymentPage).toBeDisplayed();
      browser.back();
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

  describe('SHOP PRODUCT PAGE - TERMS AND AGREEMENTS', () => {
    before(() => {
      ShopProductPage.open();
    });

    it('SP-031 Verify that link "contact us" is present', function () {
      expect(ShopProductPage.contactUsFooter).toBeExisting();
    });

    it('SP-031-1 Verify that link "contact us" redirects', function () {
      ShopProductPage.contactUsFooter.click();
      expect(ShopProductPage.contactUsHeader).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.contactUSURL);
    });

    it('SP-032 Verify that link "Terms Of Service" is present', function () {
      expect(ShopProductPage.termsOfServiceFooter).toBeExisting();
    });

    it('SP-032-1 Verify that link "Terms Of Service" redirects', function () {
      ShopProductPage.termsOfServiceFooter.click();
      expect(ShopProductPage.termsOfServiceHeader).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.termsOfServiceURL);
    });

    it('SP-033 Verify that link "Privacy Policy" is present', function () {
      expect(ShopProductPage.privacyPolicyFooter).toBeExisting();
    });

    it('SP-033-1 Verify that link "Privacy Policy" redirects', function () {
      ShopProductPage.privacyPolicyFooter.waitForClickable();
      ShopProductPage.privacyPolicyFooter.click();
      expect(ShopProductPage.privacyPolicyHeader).toBeDisplayed();
      expect(browser.getUrl()).toEqual(expected.url.privacyPolicyURL);
    });

  });

});
