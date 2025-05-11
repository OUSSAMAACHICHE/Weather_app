import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

export default function WeatherCard({ weather, now }) {
  return (
    <Card sx={{ minWidth: 275, bgcolor: "#1930d24d" }}>
      <CardContent>
        {/* City & time */}
        <Box
          component="section"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "flex-start",
            color: "customColor.contrastText",
          }}
        >
          <Typography sx={{ fontStyle: "italic", fontSize: "800" }} gutterBottom variant="h2">
            {weather.name} <br />
            {weather.country}
          </Typography>
          <Typography variant="h5" component="div">
            {now}
          </Typography>
        </Box>
        <hr />
        {/* Temperature & description */}
        <Box
          component="section"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "space-between",
            color: "customColor.contrastText",
          }}
        >
          <Box>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h2" component="div">
                {weather.temp}
              </Typography>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weather icon"
              />
            </div>
            <Typography sx={{ fontStyle: "italic" }} variant="h6" component="div">
              {weather.description}
            </Typography>
            <Typography variant="h6" component="span">
              Min {weather.min}
            </Typography>
            <Typography variant="h6" sx={{ marginInline: "5px" }} component="span">
              |
            </Typography>
            <Typography variant="h6" component="span">
              Max {weather.max}
            </Typography>
          </Box>
          <CloudIcon sx={{ fontSize: "8rem" }} />
        </Box>
      </CardContent>
    </Card>
  );
}