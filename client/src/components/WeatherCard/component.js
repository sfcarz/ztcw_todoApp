import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = ({ temp, condition, city, country }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  // this is for hot weather
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
    //   this is for cold weather
  } else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    background: ${bg};
    margin: 0 auto;
    margin-left: 70%;
    margin-top: 100px;
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    color: white;
  `;

  return (
    <div className="weather">
      <div className="card card-color">
        <div className="card-body">
          <Location className='text-light' city={city} country={country} />
          <Condition temp={temp} condition={condition} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
