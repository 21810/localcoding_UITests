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
      expect(RegisterPage.inputFieldFirstName).toBeExisting();
    });

    it('TC - REG006 Verify that input field First Name placeholder text = "First Name" ', () => {
      expect(RegisterPage.inputFieldFirstName).toHaveAttribute('placeholder','First Name');
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

    it('TC - REG011 Verify that input field does not accept digits', () => {
      RegisterPage.verifyErrorNameNotIncludeNumbers(userData.users.name.digits, expected.errorMessages.nameShouldNotIncludeNumbers);
    });

    it('TC - REG012 Verify that special characters are not allowed other than apostrophe or dash', () => {
      RegisterPage.verifyErrorNameNotIncludeNumbers(userData.users.name.specialChar, expected.errorMessages.nameShouldNotIncludeCharacters);
    });
  });

  describe('REGISTRATION PAGE - LAST NAME', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC - REG013 Verify the input field Last Name is present', () => {
      expect(RegisterPage.inputFieldLastName).toBeExisting();
    });

    it('TC - REG014 Verify that input field\'s placeholder text = Last Name', () => {
      expect(RegisterPage.inputFieldLastName).toHaveAttribute('placeholder', 'Last Name');
    });

    it('TC - REG015 Verify that the user can input 1 symbol', () => {
      RegisterPage.verifyInputFieldLastName(userData.users.name.oneSymbol, expected.name.oneSymbol);
    });

    it('TC - REG016 Verify that the user can input 10 symbols', () => {
      RegisterPage.verifyInputFieldLastName(userData.users.name.tenSymbols, expected.name.tenSymbols);
    });

    it('TC - REG017 Verify that the user can input 20 symbols', () => {
      RegisterPage.verifyInputFieldLastName(userData.users.name.twentySymbols, expected.name.twentySymbols);
    });

    it('TC - REG019 Verify that input field does not accept digits', () => {
      RegisterPage.verifyErrorLastNameNotIncludeNumbers(userData.users.name.digits, expected.errorMessages.nameShouldNotIncludeNumbers);
    });

    it('TC - REG020 Verify that special characters are not allowed other than apostrophe or dash', () => {
      RegisterPage.verifyErrorLastNameNotIncludeNumbers(userData.users.name.specialChar, expected.errorMessages.nameShouldNotIncludeCharacters);
    });

  });

  describe('REGISTRATION PAGE - COUNTRY DROPDOWN', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC - REG021 Verify that label "Country" is present', () => {
      expect(RegisterPage.inputFieldCountry).toBeExisting();
    });

    it('TC - REG023-1 Verify that dropdown menu contains option by default "United States"', () => {
      expect(RegisterPage.inputFieldCountry).toHaveText('United States');
    });

    it.skip('TC - REG023 Verify that dropdown menu contains "United States"', () => {
      RegisterPage.selectCountry(RegisterPage.inputFieldCountry, userData.users.country.UnitedStates);
      expect(RegisterPage.selectedCountry).toHaveText(expected.country.UnitedStates);
    });

    it.skip('TC - REG024 Verify that dropdown menu contains "Russia"', () => {
      RegisterPage.selectCountry(RegisterPage.inputFieldCountry, userData.users.country.Russia);
      expect(RegisterPage.selectedCountry).toHaveText(expected.country.Russia);
    });

    it.skip('TC - REG025 Verify that dropdown menu contains "Ukraine"', () => {
      RegisterPage.selectCountry(RegisterPage.inputFieldCountry, userData.users.country.Ukraine);
      expect(RegisterPage.selectedCountry).toHaveText(expected.country.Ukraine);
    });

  });

  describe('REGISTRATION PAGE - PHONE INPUT FIELD', () => {
    before(() => {
      RegisterPage.open();
    });
  });

  describe('REGISTRATION PAGE - EMAIL INPUT FIELD', () => {
    before(() => {
      RegisterPage.open();
    });
  });

  describe('REGISTRATION PAGE - PASSWORD INPUT FIELD', () => {
    before(() => {
      RegisterPage.open();
    });
  });

  describe('REGISTRATION PAGE - TERMS AND AGREEMENTS', () => {
    before(() => {
      RegisterPage.open();
    });
  });

  describe('REGISTRATION PAGE - REGISTER BUTTON', () => {
    before(() => {
      RegisterPage.open();
    });
  });

  describe('REGISTRATION PAGE - FOOTER', () => {
    before(() => {
      RegisterPage.open();
    });
  });
});


