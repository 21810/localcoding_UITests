import BasePage from "./base.page";

class HomePage extends BasePage {
    get linkLogin () { return $('//a[@data-qa="login"]')};

    open() {
        super.open('/');
    };
}

export default new HomePage();
