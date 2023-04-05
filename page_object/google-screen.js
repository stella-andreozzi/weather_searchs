const {Builder, By, Key} = require('selenium-webdriver');
require('chromedriver');
var driver = new Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({implicit: (10000)});

class GoogleSearchPage{
    constructor(){
        global.driver = driver;
    }

    async goToURL(){
        await driver.get("https://www.google.com");
    }

    async runSearch(searchText){
        const searchBar = await driver.findElement(By.name("q")).sendKeys(searchText, Key.RETURN);
    }

    async getTemp(){
        await driver.manage().setTimeouts( { implicit: 10000 } );
        const temp = await driver.findElement(By.xpath("//div[@class='vk_bk TylWce SGNhVe']/span[@class='wob_t q8U8x']")).getText();
        //console.log('TEMP:', temp);
        return temp;
    }

    async closeBrowser(){
        await driver.quit();
    }
}

module.exports = new GoogleSearchPage();