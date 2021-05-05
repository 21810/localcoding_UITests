import HomePage from '../../../../pages/home.page';
import RegisterPage from '../../../../pages/users/registration.page';
import userData, {users} from '../../../../data/users.data';
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
      expect(RegisterPage.inputFieldFirstName).toHaveAttribute('placeholder', 'First Name');
    });

    it('TC - REG007 Verify that the user can input 1 symbol', () => {
      RegisterPage.verifyInputFieldFirstName(userData.users.name.oneSymbol, expected.name.oneSymbol);
    });

    it('TC - REG008 Verify that the user can input 10 symbols', () => {
      RegisterPage.verifyInputFieldFirstName(userData.users.name.tenSymbols, expected.name.tenSymbols);
    });

    it('TC - REG009 Verify that the user can input 20 symbols', () => {
      RegisterPage.verifyInputFieldFirstName(userData.users.name.twentySymbols, expected.name.twentySymbols);
    });

    it('TC - REG011 Verify that input field does not accept digits', () => {
      RegisterPage.verifyErrorNameNotIncludeNumbers(userData.users.name.digits, expected.errorMessages.nameShouldNotIncludeNumbers);
    });

    it('TC - REG012 Verify that special characters are not allowed other than apostrophe or dash', () => {
      RegisterPage.verifyErrorNameNotIncludeNumbers(userData.users.name.specialChar, expected.errorMessages.nameShouldNotIncludeCharacters);
    });

    it('TC - REG012_1 Verify that error Required is appear when data in the Fist Name IF is deleting', () => {
      RegisterPage.verifyInputFieldFirstName(userData.users.name.tenSymbols, expected.name.tenSymbols);
      RegisterPage.emptyFirstNameInput();
      expect(RegisterPage.errorRequiredFirstName).toBeDisplayed();
      expect(RegisterPage.errorRequiredFirstName.getText()).toEqual(expected.errorMessages.required);
    });
  });

  describe('REGISTRATION PAGE - LAST NAME', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC - REG013 Verify the input field Last Name is present', () => {
      expect(RegisterPage.inputFieldLastName).toBeExisting();
    });

    it('TC - REG014 Verify that input field placeholder has text = Last Name', () => {
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

    it('TC - REG020_1 Verify that error Required is appear when data in the Last Name IF is deleting', () => {
      RegisterPage.verifyInputFieldLastName(userData.users.name.tenSymbols, expected.name.tenSymbols);
      RegisterPage.emptyLastNameInput();
      expect(RegisterPage.errorRequiredLastName).toBeDisplayed();
      expect(RegisterPage.errorRequiredLastName.getText()).toEqual(expected.errorMessages.required);
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

    it('TC - REG024 Verify that dropdown menu contains "Russia"', () => {
      RegisterPage.selectCountry(RegisterPage.inputFieldCountry, userData.users.country.Russia);
      expect(RegisterPage.selectedCountry).toHaveText(expected.country.Russia);
      browser.refresh();
    });

    it('TC - REG025 Verify that dropdown menu contains "Ukraine"', () => {
      RegisterPage.selectCountry(RegisterPage.inputFieldCountry, userData.users.country.Ukraine);
      expect(RegisterPage.selectedCountry).toHaveText(expected.country.Ukraine);
    });

  });

  describe('REGISTRATION PAGE - PHONE INPUT FIELD', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC - REG026 Verify that label "Phone" is present', () => {
      expect(RegisterPage.inputFieldPhone).toBeExisting();
    });

    it('TC - REG027 Verify that label has text = phone number', () => {
      expect(RegisterPage.inputFieldPhone).toHaveAttribute('placeholder', expected.phone.phoneIF);
    });

    it('TC - REG028 Verify that input field has prefix +1 by default ', () => {
      expect(RegisterPage.inputFieldPhonePrefix).toHaveText('+1');
    });

    it('TC - REG029 Verify that input field holds a pre-populated phone prefix based on a country selection', () => {
      RegisterPage.selectCountry(RegisterPage.inputFieldCountry, userData.users.country.Russia);
      expect(RegisterPage.selectedCountry).toHaveText(expected.country.Russia);
      expect(RegisterPage.inputFieldPhonePrefix).toHaveText('+7');
      browser.refresh();
    });

    it('TC - REG030 Verify that input field accepts 10 digits', () => {
      RegisterPage.verifyInputFieldPhone(userData.users.phone.tenDigits, expected.phone.tenDigits);
    });

    it('TC - REG031 Verify that input field accepts a 11-digit number (not including prefix)', () => {
      RegisterPage.verifyInputFieldPhone(userData.users.phone.elevenDigits, expected.phone.elevenDigits);
    });

    it('TC - REG032 Verify that input field does not accept 9-digit (not including prefix)', () => {
      RegisterPage.verifyErrorPhoneIFMustBeTenOrElevenDigits(userData.users.phone.nineDigits, expected.errorMessages.phoneNumberDigits);
    });

    it('TC - REG033 Verify that input field does not accept 12-digit (not including prefix)', () => {
      RegisterPage.verifyErrorPhoneIFMustBeTenOrElevenDigits(userData.users.phone.twelveDigits, expected.errorMessages.phoneNumberDigits);
    });

    it('TC - REG034 Verify that input field does not accept letters', () => {
      RegisterPage.verifyErrorPhoneIFMustContainNumbers(userData.users.phone.letters, expected.errorMessages.phoneMustOnlyContainNumber, expected.errorMessages.phoneNumberDigits);
    });

    it('TC - REG035 Verify that input field does not accept special characters', () => {
      RegisterPage.verifyErrorPhoneIFMustContainNumbers(userData.users.phone.specialChar, expected.errorMessages.phoneMustOnlyContainNumber);
    });

    it('TC - REG036 Verify that input field does not accept combination of special characters and digits', () => {
      RegisterPage.verifyErrorPhoneIFMustContainNumbers(userData.users.phone.combainSCharAndDigits, expected.errorMessages.phoneMustOnlyContainNumber);
    });

    it('TC - REG037 Verify that input field does not accept combination of letters and digits', () => {
      RegisterPage.verifyErrorPhoneIFMustContainNumbers(userData.users.phone.combainLettersAndDigits, expected.errorMessages.phoneMustOnlyContainNumber);
    });

  });

  describe('REGISTRATION PAGE - EMAIL INPUT FIELD', () => {
    before(() => {
      RegisterPage.open();
    });

    beforeEach('Refresh', function () {
      browser.refresh();
    });

    it('TC-REG038 Verify that input field Email is present', function () {
      expect(RegisterPage.inputFieldEmail).toBeExisting();
    });

    it('TC-REG039 Verify that input field has placeholder text = Email', function () {
      expect(RegisterPage.inputFieldEmail).toHaveAttribute('placeholder', expected.email.emailIF);
    });

    it('TC-REG040 Verify that input field accepts letters', function () {
      RegisterPage.verifyInputFieldEmail(userData.users.new.email, expected.email.new);
    });

    it('TC-REG041 Verify that input field accepts combination of letters and digits', function () {
      RegisterPage.verifyInputFieldEmail(userData.users.email.new123, expected.email.new123);
    });

    it('TC-REG042 Verify that input field accepts combination of letters, special char and digits', function () {
      RegisterPage.verifyInputFieldEmail(userData.users.email.lettersDigitsSpChar, expected.email.lettersDigitsSpChar);
    });

    it('TC-REG043 Verify that input field accepts 1 letter', function () {
      RegisterPage.verifyInputFieldEmail(userData.users.email.oneLetter, expected.email.oneLetter);
    });

    it('TC-REG044 Verify that input field accepts 1 digit', function () {
      RegisterPage.verifyInputFieldEmail(userData.users.email.oneDigit, expected.email.oneDigit);
    });

    it('TC-REG045 Verify that input field accepts 1 symbol', function () {
      RegisterPage.verifyInputFieldEmail(userData.users.email.oneSymbol, expected.email.oneSymbol);
    });

    it('TC-REG046 Verify that Email is not valid without "." before domane', function () {
      RegisterPage.verifyErrorEmailIsNotValid(userData.users.email.withoutDot, expected.errorMessages.emailIsNotValid);
    });

    it('TC-REG047 Verify that Email is not valid without "@"', function () {
      RegisterPage.verifyErrorEmailIsNotValid(userData.users.email.withoutAtSign, expected.errorMessages.emailIsNotValid);
    });

    it('TC-REG048 Verify that Email is not valid with "@" in the name', function () {
      RegisterPage.verifyErrorEmailIsNotValid(userData.users.email.withoutAtSignInTheName, expected.errorMessages.emailIsNotValid);
    });

    it('TC-REG049 Verify that Email is not valid if username ends with dot (.)', function () {
      RegisterPage.verifyErrorEmailIsNotValid(userData.users.email.dotInTheName, expected.errorMessages.emailIsNotValid);
    });

    it('TC-REG050 Verify that user can not register with exist email', function () {
      RegisterPage.setFirstName(users.new.firstName);
      RegisterPage.setLastName(users.new.lastName);
      RegisterPage.setPhone(users.new.phone);
      RegisterPage.setEmail(users.new.email);
      RegisterPage.setPassword(users.new.password);
      RegisterPage.termsAndAgreementsCheckbox.click();
      RegisterPage.registerButton.click();
      expect(RegisterPage.errorUserExists).toHaveText(expected.errorMessages.userExists);
    });
  });

  describe('REGISTRATION PAGE - PASSWORD INPUT FIELD', () => {
    before(() => {
      RegisterPage.open();
    });

    beforeEach('Refresh', function () {
      browser.refresh();
    });

    it('TC-REG051 Verify the input field Password is present', function () {
      expect(RegisterPage.inputFieldPassword).toBeExisting();
    });

    it('TC-REG052 Verify that input field has placeholder text = Password', function () {
      expect(RegisterPage.inputFieldPassword).toHaveAttribute('placeholder', expected.password.passwordIF);
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





