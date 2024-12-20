import React, { useState } from "react";
import search from "./assets/icons/search.svg";
import "./App.css";
import { useStateContext } from "./Context"; // Ensure this file exists
import BackgroundLayout from "./Components/BackgroundLayout.jsx"; // Correct path to the component
import WeatherCard from "./Components/WeatherCard.jsx";
import MiniCard from "./Components/MiniCard.jsx";

export default function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext()
  // console.log(weather)
  const submitCity = () => {
    console.log("Searching for city:", input);
    setPlace(input);
    setInput(""); // Clear the input field after submission
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 bg-white flex justify-between items-center shadow-md">
        <h1 className="font-bold tracking-wide text-3xl text-black">Weather App</h1>
        <div className="relative w-[15rem]">
          {/* Search icon inside the input box */}
          <img
            src={search}
            alt="search"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer w-5 h-5"
            onClick={submitCity}
          />
         
          {/* Input field */}
          <input
            type="text"
            placeholder="Search city"
            className="focus:outline-none w-full text-[#212121] text-lg pl-10 pr-3 py-2 rounded shadow-md"
            value={input}
            onKeyUp={(e) => e.key === "Enter" && submitCity()}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className="w-full flex flex-wrap gap-8 py-8 px-[10%] items-center justify-center">
      <WeatherCard
          place={thisLocation}
          windspeed={weather.windspeedd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
  {values?.slice(1, 7).length ? (
    values.slice(1, 7).map((curr) => (
      <MiniCard
        key={curr.datetime}
        time={curr.datetime}
        temp={curr.temp}
        iconString={curr.conditions}
      />
    ))
  ) : (
    <p>No data available</p>
  )}
</div>
      </main>
    </div> 
  );
}
