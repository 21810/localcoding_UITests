import BasePage from '../base.page';

class ProfilePortalPage extends BasePage {
  get iconUser() {return $('.ant-avatar-square');}
  get userName() {return $('//div[@class="d-flex align-items-center"]/h1');}

  isOpen() {
    expect(browser).toHaveUrlContaining('profile');
    expect(this.iconUser).toBeDisplayed();
  }
}

export default new ProfilePortalPage();
