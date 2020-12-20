import React, { useState, useEffect } from "react";
import { Grid, Cell } from "react-mdl";
import WeatherCard from "./WeatherCard/component";
import { useSelector } from 'react-redux';

function Weather() {
  const [query, setQuery] = useState("San Diego, USA");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=fba8f47aed24da8bf91fe6fc2885a83e`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: resJSON.main.temp,
      city: resJSON.name,
      condition: resJSON.weather[0].main,
      country: resJSON.country,
    });
  };
  const { user } = useSelector(state => state.user)

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(query);
  }, []);

  return (
    <div>
    <Grid className="landing-grid">
      <Cell col={12}>
        <div className="banner-text-weather text-light">
          <h1>Hi, Welcome to you ToDo App </h1>
          <h1>{user}</h1>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country} />
          <form>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)} placeholder={query} />
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </form>
        </div>
      </Cell>
    </Grid>
    </div >
  );
}

export default Weather;
