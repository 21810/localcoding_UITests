import BasePage from '../base.page';
import {url} from '../../specs/constants';

class ShopProductPage extends BasePage {
  get userNameDropDown() {return $('//span[@class=\'anticon anticon-down\']/..');}
  get shopInDropDown() {return $('//li//*[contains(text(),"Shop")]');}
  get headerProducts() {return $('//h1[contains(text(),"Products")]');}
  get javaScriptSyntaxCoursePage () {return $('//div//h1[contains(text(),"JavaScript Syntax")]');}

  get startLearningBtn () {return $('//a[contains(text(),"Start learning")]');}
  get buyNowBtn () {return $$ ('.ant-btn.ant-btn-primary.mb-1rem');}
  get paymentPage() {return $('//span[contains(text(),"Card information")]');}

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
  get javaScriptSyntaxWithTeacherPrice () {return $('//h3');}
  get javaScriptPracticePrice () {return $('//h3');}
  get reactJSPrice () {return $('//h3');}
  get fullstackReactProjectPrice () {return $('//h3');}

  get contactUsFooter () {return $('//a[@data-qa="footerContactUs"]');}
  get contactUsHeader () {return $('//h1[contains(text(),"Contact us")]');}
  get termsOfServiceFooter () {return $('//a[@data-qa="footerTerms"]');}
  get termsOfServiceHeader () {return $ ('//h1[contains(text(),"Terms of Service")]');}
  get privacyPolicyFooter () {return $('//a[@data-qa="footerPrivacy"]');}
  get privacyPolicyHeader () {return $ ('//h1[contains(text(),"LOCALCODING Privacy Policy")]');}


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
