import { useState, ChangeEvent } from "react";
import "./App.css";

function App() {
  function capitalizeFirstLetter(val: any) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

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
      </div>
    </main>
  );
}

export default App;