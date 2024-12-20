import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";

// Images
import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/Fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/Snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather?.conditions) {
      const condition = weather.conditions.toLowerCase();
      if (condition.includes("clear")) setImage(Clear);
      else if (condition.includes("cloud")) setImage(Cloudy);
      else if (condition.includes("rain") || condition.includes("shower")) setImage(Rainy);
      else if (condition.includes("snow")) setImage(Snow);
      else if (condition.includes("fog")) setImage(Fog);
      else if (condition.includes("thunder") || condition.includes("storm")) setImage(Stormy);
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather background"
      className="h-screen w-full fixed left-0 top-0 object-cover -z-10"
    />
  );
  
};

export default BackgroundLayout;
