var request = require('request');
var cheerio = require('cheerio');

let BASE_URL = "https://www.timeanddate.com/weather/";


function getWeather(country, city) {

    // Make the request
    let url = BASE_URL + country + '/' + city;
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            // Check status code (200 is HTTP OK)
            if (response.statusCode !== 200) {
                console.log("Error: " + error);
                resolve(false);
            }
            // Parse the document body
            let $ = cheerio.load(body);

            if ($('#bk-focus #qlook').html()) {
                let wind =  $('#bk-focus #qlook p').last().text();
                weatherData = {
                    name: $('.fixed .pg-title h1').text().substring(12),
                    temper: $('#bk-focus #qlook .h2').text(),
                    icon: "https://www.timeanddate.com" + $('#bk-focus #qlook img').attr('src'),
                    desc: $('#bk-focus #qlook p').first().text(),
                    wind: wind.substring(wind.indexOf('Wind')+5,wind.indexOf('km/h')+4)
                    ,
                    location: $('#bk-focus #qfacts p').first().find('span').last().text(),
                    time: $('#bk-focus #qfacts p').eq(1).find('span').last().text(),
                    humidity: $('#bk-focus #qfacts p').eq(5).text()
                }
                resolve (weatherData)
            }
            resolve (false);
        });
    })

}

module.exports = {
    getWeather
}