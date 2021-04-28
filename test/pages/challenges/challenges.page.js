import BasePage from '../base.page';
import {url} from '../../specs/constants';


class ChallengesPage extends BasePage {
  get imageStairs() { return $('img[src*="marusya-stairs"]'); }
  get linkUserRegister() { return $('.login-form-button'); }
  get header() { return $('div.h1'); }
  // filter
  get inputSearchName() { return $('#name');}
  //table
  get tableRows() { return $$('.ant-table-row');}
  get itemsTotal() { return $('.mt-4 .small'); }
  get textEmptyTable() { return $('.ant-empty-description');}

  open() {
    super.open(url.challenges);
  }

  setSearchName(text) {
    this.inputSearchName.waitForDisplayed();
    this.inputSearchName.setValue(text);
  }

  clickUserRegisterLink() {
    this.linkUserRegister.click();
  }

  getCountOfTableRows() {
    return this.tableRows.length;
  }

  getItemsTotalText() {
    return this.itemsTotal.getText();
  }
}

export default new ChallengesPage();
