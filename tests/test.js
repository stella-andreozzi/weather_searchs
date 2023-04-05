const {Builder, By, Key} = require('selenium-webdriver');
const GoogleSearchPage = require('../page_object/google-screen');
const OpenweathermapAPI = require('../api/weather-api')
require('chromedriver');
const assert = require('assert');
const googleScreen = require('../page_object/google-screen');

async function example() {
   //navigate the app
    await GoogleSearchPage.goToURL();

    //add a todo
    await GoogleSearchPage.runSearch("Weather in San Francisco, California");

    var title = await driver.getTitle();
    console.log('Title is:',title);

    const googleTemp = await GoogleSearchPage.getTemp();
    console.log('Google Temperature:', googleTemp);

    await googleScreen.closeBrowser();

    const apiTem = await OpenweathermapAPI.getTempfromAPI();
    console.log("API Temp:", apiTem);

    const tempDifference = parseFloat(googleTemp) - apiTem;
    console.log("Temperature difference:", tempDifference);
}

example();
