import BasePage from '../base.page';
import {url} from '../../specs/constants';

class ShopProductPage extends BasePage {
  get userNameDropDown() {return $('//span[@class=\'anticon anticon-down\']/..');}
  get shopInDropDown() {return $('//li//*[contains(text(),"Shop")]');}
  get headerProducts() {return $('//h1[contains(text(),"Products")]');}
  get javaScriptSyntaxSelfLearn () {return $('//h3//a[contains(text(),"JavaScript Syntax самостоятельно")]');}
  get javaScriptSyntaxWithTeacher () {return $('//h3//a[contains(text(),"JavaScript Syntax с преподавателем")]');}
  get javaScriptPractice () {return $('//h3//a[contains(text(),"JavaScript Practice")]');}
  get reactJS () {return $('//h3//a[contains(text(),"React JS")]');}
  get fullstackReactProject () {return $('//h3//a[contains(text(),"Fullstack React Project")]');}
  get startLearningBtn () {return $('//a[contains(text(),"Start learning")]');}
  get javaScriptSyntaxCoursePage () {return $('//div//h1[contains(text(),"JavaScript Syntax")]');}

  open() {
    super.open(url.shop);
  }
}

export default new ShopProductPage();
