import HomePage from '../../../../pages/home.page';
import RegisterPage from '../../../../pages/users/registration.page';
import userData from '../../../../data/users.data';
import expected from '../../../../data/expected.json';

describe('REGISTRATION PAGE - POSITIVE', () => {

  describe('REGISTRATION PAGE - LINK', () => {
    before(() => {
      HomePage.open();
      HomePage.btnStartRightNow.click();
    });

    it('TC - REG002 Verify that the text = "Local Coding" ', () => {
      RegisterPage.getTitleLocalCoding();
    });

    it('TC - REG003 Verify that Register page has URL https://stage.localcoding.us/user/register', () => {
      RegisterPage.verifyURL();
    });
  });

  describe('REGISTRATION PAGE - HEADER', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC - REG004 Verify that the text = "Local Coding" ', () => {
      RegisterPage.verifyHeader();
    });
  });

  describe('REGISTRATION PAGE - FIRST NAME', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC - REG005 Verify the input field First Name is present ', () => {
      RegisterPage.verifyIFFirstNameExist();
    });

    it('TC - REG006 Verify that input field First Name placeholder text = "First Name" ', () => {
      RegisterPage.verifyIFFirstNamePlaceholder();
    });

    it('TC - REG007 Verify that the user can input 1 symbol', () => {
      RegisterPage.verifyInputFirstName(userData.users.name.oneSymbol, expected.name.oneSymbol);
    });

    it('TC - REG008 Verify that the user can input 10 symbols', () => {
      RegisterPage.verifyInputFirstName(userData.users.name.tenSymbols, expected.name.tenSymbols);
    });

    it('TC - REG009 Verify that the user can input 20 symbols', () => {
      RegisterPage.verifyInputFirstName(userData.users.name.twentySymbols, expected.name.twentySymbols);
    });

    it.skip('TC - REG010 Verify that the user can input 21 symbols', () => {
      RegisterPage.verifyInputFirstName(userData.users.name.twentyOneSymbols, expected.name.twentyOneSymbols);
    });

    it.skip('TC - REG011 Verify that input field does not accept digits', () => {
      RegisterPage.verifyErrorNameNotIncludeNumbers(userData.users.name.digits, expected.errorMessages.nameShouldNotIncludeNumbers);
    });

    it.skip('TC - REG012 Verify that special characters are not allowed other than apostrophe or dash', () => {
      RegisterPage.verifyErrorNameNotIncludeNumbers(userData.users.name.specialChar, expected.errorMessages.nameShouldNotIncludeCharacters);
    });

  });
});
