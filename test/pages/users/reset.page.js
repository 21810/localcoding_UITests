import BasePage from '../base.page';
import {url} from '../../specs/constants';

class ResetPage extends BasePage {
  get resetHeader() {return $('h1');}


  open(path) {
    browser.url(url.reset);
  }

}
export default new ResetPage();