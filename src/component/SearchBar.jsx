import React from "react";
import { Button } from "@mui/material";

export default function SearchBar({ city, setCity, getWeather }) {
  return (
    <div style={{ padding: '10px', display: 'flex', gap: '10px', alignItems: 'center'}}>
      
      <input
        style={{
          backgroundColor: "black",
          padding: "0 10px",
          height: "30px",
          border: "none",
          color: "white",
          width: "100%",
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