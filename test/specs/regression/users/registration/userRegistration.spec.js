import HomePage from '../../../../pages/home.page';
import RegisterPage from '../../../../pages/users/registration.page';
import LoginPage from '../../../../pages/users/login.page';
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

    it('TC - REG023 Verify that dropdown menu contains option by default "United States"', () => {
      expect(RegisterPage.inputFieldCountry).toHaveText('United States');
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
      RegisterPage.checkBoxTermsAndAgreements.click();
      RegisterPage.registerButton.click();
      expect(RegisterPage.errorUserExists).toHaveText(expected.errorMessages.userExists);
    });

    it('TC-REG050_1 Verify that user can not register with exist fields - First Name', function () {
      RegisterPage.setLastName(users.new.lastName);
      RegisterPage.setPhone(users.new.phone);
      RegisterPage.setEmail(users.new.email);
      RegisterPage.setPassword(users.new.password);
      RegisterPage.checkBoxTermsAndAgreements.click();
      expect(RegisterPage.registerButton).toBeDisabled();
    });

    it('TC-REG050_2 Verify that user can not register with exist fields - Last Name', function () {
      RegisterPage.setFirstName(users.new.firstName);
      RegisterPage.setPhone(users.new.phone);
      RegisterPage.setEmail(users.new.email);
      RegisterPage.setPassword(users.new.password);
      RegisterPage.checkBoxTermsAndAgreements.click();
      expect(RegisterPage.registerButton).toBeDisabled();
    });

    it('TC-REG050_3 Verify that user can not register with exist fields - Phone', function () {
      RegisterPage.setFirstName(users.new.firstName);
      RegisterPage.setLastName(users.new.lastName);
      RegisterPage.setEmail(users.new.email);
      RegisterPage.setPassword(users.new.password);
      RegisterPage.checkBoxTermsAndAgreements.click();
      expect(RegisterPage.registerButton).toBeDisabled();
    });

    it('TC-REG050_4 Verify that user can not register with exist fields - Email', function () {
      RegisterPage.setFirstName(users.new.firstName);
      RegisterPage.setLastName(users.new.lastName);
      RegisterPage.setPhone(users.new.phone);
      RegisterPage.setPassword(users.new.password);
      RegisterPage.checkBoxTermsAndAgreements.click();
      expect(RegisterPage.registerButton).toBeDisabled();
    });

    it('TC-REG050_5 Verify that user can not register with exist fields - Password', function () {
      RegisterPage.setFirstName(users.new.firstName);
      RegisterPage.setLastName(users.new.lastName);
      RegisterPage.setPhone(users.new.phone);
      RegisterPage.setEmail(users.new.email);
      RegisterPage.checkBoxTermsAndAgreements.click();
      expect(RegisterPage.registerButton).toBeDisabled();
    });

    it('TC-REG050_6 Verify that user can not register with exist fields - Terms and Agreements', function () {
      RegisterPage.setFirstName(users.new.firstName);
      RegisterPage.setLastName(users.new.lastName);
      RegisterPage.setPhone(users.new.phone);
      RegisterPage.setEmail(users.new.email);
      RegisterPage.setPassword(users.new.password);
      expect(RegisterPage.registerButton).toBeDisabled();
    });
  });

  describe('REGISTRATION PAGE - PASSWORD INPUT FIELD', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TC-REG051 Verify the input field Password is present', function () {
      expect(RegisterPage.inputFieldPassword).toBeExisting();
    });

    it('TC-REG052 Verify that input field has placeholder text = Password', function () {
      expect(RegisterPage.inputFieldPassword).toHaveAttribute('placeholder', expected.password.passwordIF);
    });

    it('TC-REG053 Verify the input field Password have an eye icon', function (){
      expect(RegisterPage.eyeIcon).toBeDisplayed();
    });

    it('REG-054 Verify that eye icon lets toggle password visibility', function (){
      RegisterPage.setPassword(users.new.password);
      RegisterPage.eyeIcon.click();
      expect(RegisterPage.inputFieldPassword).toHaveValue(expected.password.new);
    });

    it('REG-056 Verify that input field accepts 5 symbols', function (){
      RegisterPage.setPassword(users.password.fiveSymbols);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).not.toBeDisplayed();
    });

    it('REG-057 Verify that input field does not accept 4 symbols', function (){
      RegisterPage.setPassword(users.password.fourSymbols);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).toBeDisplayed();
    });

    it('REG-058 Verify that input field accepts letters', function (){
      RegisterPage.setPassword(users.password.letters);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).not.toBeDisplayed();
    });

    it('REG-059 Verify that input field accepts digits', function (){
      RegisterPage.setPassword(users.password.digits);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).not.toBeDisplayed();
    });

    it('REG-060 Verify that input field accepts special characters', function (){
      RegisterPage.setPassword(users.password.specialChar);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).not.toBeDisplayed();
    });

    it('REG-061 Verify that input field accepts combination of letters and special characters', function (){
      RegisterPage.setPassword(users.password.lettersAndSpecialChar);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).not.toBeDisplayed();
    });

    it('REG-062 Verify that input field accepts combination of digits and special characters', function (){
      RegisterPage.setPassword(users.password.digitsAndSpecialChar);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).not.toBeDisplayed();
    });

    it('REG-063 Verify that input field accepts combination of letters and digits', function (){
      RegisterPage.setPassword(users.password.lettersAndDigits);
      expect(RegisterPage.errorPasswordMustBeFiveSymbols).not.toBeDisplayed();
    });

    it('REG-064 Verify that input field does not accepts  whitespace', function (){
      RegisterPage.setPassword(users.password.whiteSpace);
      expect(RegisterPage.errorPasswordWhitespace).toBeDisplayed();
    });

  });

  describe('REGISTRATION PAGE - TERMS AND AGREEMENTS', () => {
    before(() => {
      RegisterPage.open();
    });

    it('REG-065 Verify that check box "I have read Terms and agreements " is present', function (){
      expect(RegisterPage.checkBoxTermsAndAgreements).toBeExisting();
    });

    it('REG-067 Verify that check box for "I have read Terms and agreements " after clicking have check mark', function (){
      RegisterPage.checkBoxTermsAndAgreements.click();
      expect(RegisterPage.checkBoxTermsAndAgreements).toBeChecked();
    });

    it('REG-069 Verify that upon clicking on"Terms and agreements " a pop-up window is open', function (){
      RegisterPage.buttonTermsAndAgreements.click();
      expect(RegisterPage.termsOfServicePage).toBeDisplayed();
    });

  });

  describe('REGISTRATION PAGE - REGISTER BUTTON', () => {
    before(() => {
      RegisterPage.open();
    });

    it('REG-070 Verify that submit button is present', function (){
      expect(RegisterPage.registerButton).toBeDisabled();
    });

    it('REG-071 Verify that submit button text = Register', function (){
      expect(RegisterPage.registerButton).toHaveText(expected.registration.registerBtn);
    });

  });

  describe('REGISTRATION PAGE - FOOTER', () => {
    before(() => {
      RegisterPage.open();
    });

    it('REG-075 Verify that footer is present', function () {
      expect(RegisterPage.footer).toBeExisting();
      expect(RegisterPage.footer).toHaveText(expected.registration.footer);
    });

    it('REG-077 Verify that footer Log in is clickable', function () {
      expect(RegisterPage.footerLogin).toBeClickable();
    });

    it('REG-078 Verify that upon click on Log in link user will redirect on login page ', function () {
      RegisterPage.footerLogin.click();
      expect(LoginPage.loginPageHeader).toHaveText(expected.login.header);
    });
  });
});





