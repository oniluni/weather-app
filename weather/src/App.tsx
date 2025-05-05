import { useState, ChangeEvent, useEffect } from "react";
import "./App.css";

export function App() {

  function capitalizeFirstLetter(val: any) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [degrees, setDegrees] = useState<string>("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const city = text
  const url = `${API_URL}?key=${API_KEY}&q=${city}&aqi=no`

  useEffect(() => {

    function fetchWeather() {
      return fetch(url).then(response => response.json())
    }
  
    fetchWeather()
    .then(data => {
      setDegrees(data.current.temp_c)
    })
    .catch(e => (console.log(e)))
  }
)

  return (
    <main className="container">
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
      />
      <div>
        <h1>
          Погода в {capitalizeFirstLetter(text)}
        </h1>
        <h2 id="weatherOutput">
          {degrees}
        </h2>
      </div>
    </main>
  );
}
