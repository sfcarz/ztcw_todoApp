import React from "react";
import styled from "@emotion/styled";
import {
  WiCloudy,
  WiNightClear,
  WiDaySunny,
  WiDayHaze,
  WiHail,
  WiFog,
  WiTornado,
  WiDust,
  WiDayCloudyGusts,
  WiNightCloudyGusts,
  WiSnow,
  WiRain,
  WiLightning,
  WiThunderstorm,
  WiCloud,
} from "react-icons/wi";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;
  var icon = "";
  console.log(props.condition);
  console.log(WiCloudy);
  switch (props.condition) {
    case "Clouds":
      icon = <WiCloudy />;
      break;
    case "NightClear":
      icon = <WiNightClear />;
      break;
    case "DayClear":
      icon = <WiDaySunny />;
      break;

    case "Haze":
      icon = <WiDayHaze />;
      break;
    case "Hail":
      icon = <WiHail />;
      break;
    case "Fog":
      icon = <WiFog />;
      break;
    case "Tornado":
      icon = <WiTornado />;
      break;
    case "Dust":
      icon = <WiDust />;
      break;
    case "DayWindy":
      icon = <WiDayCloudyGusts />;
      break;
    case "NightWindy":
      icon = <WiNightCloudyGusts />;
      break;
    case "Snow":
      icon = <WiSnow />;
      break;
    case "Rain":
      icon = <WiRain />;
      break;
    case "Lightening":
      icon = <WiLightning />;
      break;
    case "Thunderstorm":
      icon = <WiThunderstorm />;
      break;
    default:
      icon = <WiCloud />;
      break;
  }

  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
