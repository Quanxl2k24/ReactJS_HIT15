import "./Launcher.scss";
import { useState, useEffect, use } from "react";
import axios from "axios";

export default function Launcher() {
  const [namecity, setNamecity] = useState("");
  //kiemtra namecity
  console.log("🚀 ~ Launcher ~ namecity:", namecity);
  const API_KEY = "59aa188e7292461c1b1d35f6b62b8a68";
  const [units, setUnits] = useState("metric");
  const [unitslauncher, setUnitslauncher] = useState("°C");
  const [object, setObject] = useState({});
  const [display, setDisplay] = useState(false);
  const [displayerror, setDisplayerror] = useState(false);
  const [callapifall, setCallapifall] = useState("");
  //kiemtra object sau khi call api
  //   console.log("🚀 ~ Launcher ~ object:", object);

  const unix = object.dt;
  const timezone = object.timezone; 

  const localTime = new Date((unix + timezone) * 1000);
  const formatted = localTime.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(formatted); 
  const handleChangeUnits = () => {
    if (units === "metric") {
      setUnits("imperial");
      setUnitslauncher("°F");
    }
    if (units == "imperial") {
      setUnits("metric");
      setUnitslauncher("°C");
    }
  };

  const callApi = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${namecity}&units=${units}&appid=${API_KEY}&lang=vi`
      );
      setObject(response.data);
      setDisplay(true);
      setDisplayerror(false);
    } catch (error) {
      console.log(error);
      //in ra man hih loi
      setCallapifall("Không có thành phố này OK!");
      setDisplay(false);
      setDisplayerror(true);
    }
  };

  const handleClickSearch = () => {
    callApi();
  };

  return (
    <div className="launcher-container">
      <div className="launcher">
        <div className="launcher_title">
          <h1>Weather Forecast App</h1>
        </div>

        <div className="launcher_form">
          <input
            type="text"
            className="launcher_form--inputsearch"
            placeholder="Enter name city"
            value={namecity}
            onChange={(e) => {
              setNamecity(e.target.value);
            }}
          />
          <button
            className="launcher_form--buttonsearch"
            onClick={handleClickSearch}
          >
            Search
          </button>
        </div>

        <div className="launcher_form-changetemp">
          <button
            className="launcher_form-changetemp--but-change"
            onClick={() => {
              handleChangeUnits();
            }}
          >
            {unitslauncher}
          </button>
        </div>
      </div>

      {display && (
        <div className="citytemperature">
          <div className="citytemperature_content-top">
            <div className="citytemperature_content-top--namecity">
              <h2>
                {object.name}, {object.sys?.country}
              </h2>
              <p>{formatted}</p>
            </div>

            <div className="citytemperature_content-top--icon">
              <div className="img">
                <img
                  src={`http://openweathermap.org/img/wn/${object.weather?.[0]?.icon}@2x.png`}
                  alt="weather icon"
                />
              </div>

              <div className="temp">
                <h1>
                  {object.main.temp}
                  {unitslauncher}
                </h1>
                <p>
                  {object.weather?.[0]?.description?.replace(/\b\w/, (c) =>
                    c.toUpperCase()
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="citytemperature_content-bottom">
            <div className="citytemperature_content-bottom--item-info">
              <p>Wind</p>
              <p className="info">{object.wind?.speed}</p>
            </div>

            <div className="citytemperature_content-bottom--item-info">
              <p>Humidity</p>
              <p className="info">{object.main?.humidity}</p>
            </div>

            <div className="citytemperature_content-bottom--item-info">
              <p>Pressure</p>
              <p className="info">{object.main?.pressure}</p>
            </div>

            <div className="citytemperature_content-bottom--item-info">
              <p>Sunrise</p>
              <p className="info">{object.sys?.sunrise}</p>
            </div>

            <div className="citytemperature_content-bottom--item-info">
              <p>Sunset</p>
              <p className="info">{object.sys?.sunset}</p>
            </div>
          </div>
        </div>
      )}

      {displayerror && <div className="error">{callapifall}</div>}
    </div>
  );
}
