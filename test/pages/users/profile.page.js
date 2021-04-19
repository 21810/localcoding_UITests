import BasePage from '../base.page';

class ProfilePortalPage extends BasePage {
    get iconUser () { return $('.ant-avatar-square');}

    isOpen () {
        expect(browser).toHaveUrlContaining('profile');
        expect(this.iconUser).toBeDisplayed();
    }
}

export default new ProfilePortalPage();
