const {Builder, By, Key} = require('selenium-webdriver');
const GoogleSearchPage = require('../page_object/google-screen');
const OpenweathermapAPI = require('../api/weather-api')
require('chromedriver');
const googleScreen = require('../page_object/google-screen');

describe('Test: Compare temperature between Google search and WeatherAPI', function(){
    
    before(async () => {
        await GoogleSearchPage.goToURL();
    });

    it('Should run search on google and find the temperature', async () =>{
        await GoogleSearchPage.runSearch("Weather in San Francisco, California");

        var title = await driver.getTitle();
        console.log('Title is:',title);
    
        const googleTemp = await GoogleSearchPage.getTemp();
        console.log('Google Temperature:', googleTemp);
    
        await googleScreen.closeBrowser();

    });

    it('Should run GET request to WeatherAPI to obtain the temperature', async () =>{
        const apiTem = await OpenweathermapAPI.getTempfromAPI();
        console.log("API Temp:", apiTem);
    });

    it('Should compare the two temperatures', async () =>{
        const tempDifference = parseFloat(googleTemp) - apiTem;
        console.log("Temperature difference:", tempDifference);
    })




})

// async function compareTemperatureTest() {
//    //navigate the app
//     await GoogleSearchPage.goToURL();

//     //add a todo
//     await GoogleSearchPage.runSearch("Weather in San Francisco, California");

//     var title = await driver.getTitle();
//     console.log('Title is:',title);

//     const googleTemp = await GoogleSearchPage.getTemp();
//     console.log('Google Temperature:', googleTemp);

//     await googleScreen.closeBrowser();

//     const apiTem = await OpenweathermapAPI.getTempfromAPI();
//     console.log("API Temp:", apiTem);

//     const tempDifference = parseFloat(googleTemp) - apiTem;
//     console.log("Temperature difference:", tempDifference);
// }

// compareTemperatureTest();
