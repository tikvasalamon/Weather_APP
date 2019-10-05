const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const crawler = require('./crawler');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/weather', async (req, res) => {
    let country = req.body.country.replace(/ /g,'');
    let city = req.body.city.replace(/ /g,'');
    let weatherData = await crawler.getWeather(country, city);
    
    if (weatherData !== false) {
        return res.status(200).json(weatherData);
    }
    res.status(204).json({ locationError: 'No result' });
})

app.listen(8000);