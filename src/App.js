import React from "react";
import countries from "./countriesAll.json";
import { useState } from "react";
import './App.css';
import RenderCountries from "./RenderCountries";

function filterCountries(inputValue){
  return countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      country.capital?.toLowerCase().includes(inputValue.toLowerCase())
    );
  }
  );
}

function App() {
  const [arrayOfCountries, setArrayOfCountries] = useState(countries);
  return (
    <div className="App">
      <h1>Where in the world?</h1>
      <form className ="nosubmit">
      <input
          type="text"
          placeholder="Search for a country..."
          className="nosubmit"
        onChange={(e) => {
          setArrayOfCountries(filterCountries(e.target.value));
        }}
      ></input>
      </form>
      <div className="App-body">
        <RenderCountries countries={arrayOfCountries} />
      </div>
    </div>
  );
}

export default App;