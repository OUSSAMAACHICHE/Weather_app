import React from "react";
import { Button } from "@mui/material";

export default function SearchBar({ city, setCity, getWeather }) {
  return (
    <div>
      <input
        style={{
          backgroundColor: "black",
          padding: "0 10px",
          height: "30px",
          border: "none",
          color: "white",
        }}
        placeholder="Type here to search."
        value={city}
        onChange={(ev) => setCity(ev.target.value)}
      />
      <Button variant="outlined" onClick={getWeather}>
        بحث
      </Button>
    </div>
  );
}