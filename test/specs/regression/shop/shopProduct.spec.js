import ShopProductPage from '../../../pages/shop/shopProduct.page';
import userData, {users} from '../../../data/users.data';
import HomePage from '../../../pages/home.page';
import LoginPage from '../../../pages/users/login.page';


describe('SHOP PRODUCT PAGE - POSITIVE', () => {

  describe('SHOP PRODUCT PAGE - ROLE NEW BASE FUNCTIONAL', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
      LoginPage.userLogin(users.new.email, users.new.password);
    });

    it('TC SP-002 Verify that Shop page is available for user with new role', () => {
      ShopProductPage.userNameDropDown.click();
      ShopProductPage.shopInDropDown.waitForClickable();
      ShopProductPage.shopInDropDown.click();
      expect(ShopProductPage.headerProducts).toBeDisplayed();
    });
  });

  describe('SHOP PRODUCT PAGE - ROLE NEW', () => {
    before(() => {
      ShopProductPage.open();
    });

    after(() => {
      browser.execute('window.localStorage.clear()');
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

    it('TC SP-003-5 Verify that Fullstack React Project is available for user with new role', () => {
      expect(ShopProductPage.fullstackReactProject).toBeDisplayed();
    });
  });

  describe('SHOP PRODUCT PAGE - ROLE LEARNER BASE FUNCTIONAL', () => {
    before(() => {
      HomePage.open();
      HomePage.clickLoginLink();
      LoginPage.userLogin(users.leaner.email, users.leaner.password);
    });

    it('TC SP-005 Verify that Shop page is available for user with role Learner', () => {
      ShopProductPage.userNameDropDown.click();
      ShopProductPage.shopInDropDown.waitForClickable();
      ShopProductPage.shopInDropDown.click();
      expect(ShopProductPage.headerProducts).toBeDisplayed();
    });
  });

  describe('SHOP PRODUCT PAGE - ROLE LEARNER', () => {
    before(() => {
      browser.url('https://stage.localcoding.us/shop');
    });

    after(() => {
      browser.execute('window.localStorage.clear()');
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



});


