
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

require("dotenv").config();
app.use(express.static("public"));
// app.use(express.static(__dirname + '/index.css'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  // It will not fetch and display any data in the index page
  res.render("index", { weather: null, error: null });
});


app.post("/", function (req, res) {
  // Get city name passed in the form
  let city = req.body.cityname;
  const APIkey = "0627e9800f926b438df5adf6493f031c";
  // Use that city name to fetch data
  // Use the API_KEY in the '.env' file
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
  request(url, function (err, response, body) {
    // On return, check the json data fetched
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let Weatherdata = JSON.parse(body);  // convert the json data into javascript object
      // console.log(Weatherdata);

      if (Weatherdata.main == undefined) {
        res.render("index", {
            weather: null,
          error: "Error, please try again",
        });
      } else {
        // we shall use the data got to set up your output
        // let weatherIcon = `http://openweathermap.org/img/wn/${Weatherdata.weather[0].icon}@2x.png`;
        let temp = `${Weatherdata.main.temp}`;
        // console.log(temp);
        let location = Weatherdata.name;
        country = `${Weatherdata.sys.country}`;
        // console.log(country);
        tempmin = `${Weatherdata.main.temp_min}`;
        // console.log(tempmin);
        tempmax = `${Weatherdata.main.temp_max}`;
        tempstat= `http://openweathermap.org/img/wn/${Weatherdata.weather[0].icon}@2x.png`;
        // console.log(tempstat);

        res.render("index", {
          weather: Weatherdata,
          location: location,
          country: country,
          tempVal: temp,
          tempmin: tempmin,
          tempmax: tempmax,
          icon:tempstat,
          error:null
        });
      }
    }
  });
});

app.listen(3000, () => console.log("Server is running at port 3000"));
