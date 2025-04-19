import "./Weather.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [namecity, setNamecity] = useState("");

  const [post, setPost] = useState({});
  const [units, setUnits] = useState("metric");
  const API_KEY = "59aa188e7292461c1b1d35f6b62b8a68";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${namecity}&units=${units}&appid=${API_KEY}`
      );
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("post", post);

  const handleClickSearch = () => {
    fetchWeather();
  };

  return (
    <div className="Weather-cointainer">
      <div className="weather">
        <h1>Weather Forecast App</h1>
        <div className="weather_input">
          <input
            type="text"
            placeholder="Enter City Name"
            value={namecity}
            onChange={(e) => setNamecity(e.target.value)}
          />

          <button onClick={handleClickSearch}>Search</button>
          {post && post.main && (
          <div className="weather_result">
            <h2>{post.name}</h2>
            <p>🌡 Temperature: {post.main.temp}°C</p>
            <p>🌤 Weather: {post.weather[0].description}</p>
            <p>💧 Humidity: {post.main.humidity}%</p>
            <p>🌬 Wind: {post.wind.speed} m/s</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

