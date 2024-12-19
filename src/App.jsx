import React, { useState } from "react";
import search from "./assets/icons/search.svg";
import "./App.css";
import { useStateContext } from "./Context"; // Ensure this file exists
import BackgroundLayout from "./Components/BackgroundLayout"; // Correct path to the component

export default function App() {
  const [input, setInput] = useState("");
  const { place, setPlace } = useStateContext();

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
    </div> {/* This div is now properly closed */}
  )
}
