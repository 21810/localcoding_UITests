import BasePage from '../base.page';
import {url} from '../../specs/constants';

class ShopProductPage extends BasePage {
  get userNameDropDown() {return $('//span[@class=\'anticon anticon-down\']/..');}
  get shopInDropDown() {return $('//li//*[contains(text(),"Shop")]');}
  get headerProducts() {return $('//h1[contains(text(),"Products")]');}
  get javaScriptSyntaxCoursePage () {return $('//div//h1[contains(text(),"JavaScript Syntax")]');}

  get startLearningBtn () {return $('//a[contains(text(),"Start learning")]');}

  get javaScriptSyntaxSelfLearn () {return $('//h3//a[contains(text(),"JavaScript Syntax самостоятельно")]');}
  get javaScriptSyntaxWithTeacher () {return $('//h3//a[contains(text(),"JavaScript Syntax с преподавателем")]');}
  get javaScriptPractice () {return $('//h3//a[contains(text(),"JavaScript Practice")]');}
  get reactJS () {return $('//h3//a[contains(text(),"React JS")]');}
  get fullstackReactProject () {return $('//h3//a[contains(text(),"Fullstack React Project")]');}

  get javaScriptSyntaxSelfLearnDescription () {return $('//div[contains(text(),"Подготовит вас к нашим профессиональным курсам.")]');}
  get javaScriptSyntaxWithTeacherDescription () {return $('//*[contains(text(),"1 месяц по 3 занятия в неделю.")]');}
  get javaScriptPracticeDescription () {return $('//p[contains(text(),"2 месяца по 2 занятия в неделю.")]');}
  get reactJSDescription () {return $('//*[contains(text(),"Длительность 2 месяца.")]');}
  get fullstackReactProjectDescription () {return $('//*[contains(text(),"Доступно только выпускникам курса React JS")]');}

  get javaScriptSyntaxSelfLearnPrice () {return $('//p[contains(text(),"FREE")]');}
  get javaScriptSyntaxWithTeacherPrice () {return $('//h3[contains(text(),"99.00")]');}
  get javaScriptPracticePrice () {return $('//p[contains(text(),"$199.00")]');}
  get reactJSPrice () {return $('//p[contains(text(),"$1,499.00")]');}
  get fullstackReactProjectPrice () {return $('//p[contains(text(),"$1,499.00")]');}


  open() {
    super.open(url.shop);
  }

  goToShopPage(){
    this.userNameDropDown.click();
    this.shopInDropDown.waitForClickable();
    this.shopInDropDown.click();
  }





}

export default new ShopProductPage();
