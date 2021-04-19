export default class BasePage {
    open(path) {
        if (browser.capabilities.browserName != 'Chrome') browser.maximizeWindow();
        return browser.url(path);
    }
};
