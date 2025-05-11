import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
// library for time and date
import moment from "moment";

// components
import WeatherCard from "./component/WeatherCard";
import SearchBar from "./component/SearchBar";
import { ClipLoader } from "react-spinners";

// Recat hooks
import { useState, useCallback } from "react";
// Custom theme
const theme = createTheme({
  typography: {
    fontFamily: ["Amiri"],
  },
  palette: {
    primary: {
      main: "#1976d2", //  main primary color #1976d2
    },
    secondary: {
      main: "#9c27b0", //  main secondary color #9c27b0
    },
    customColor: {
      main: "#ff5722", // a custom color #ff5722
      contrastText: "#ffffff",
    },
  },
});

function App() {
  // Library for time and date
  const now = moment().format("LLLL");
  const [city, setCity] = useState(""); // City input state
  // weather state 
  const [weather, setWeather] = useState({
    temp: "",
    description: "",
    min: null,
    max: null,
    name: null,
    icon: "",
    country: "",
  });
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  const getWeather = useCallback(async () => {
    // get api key 
    const apiKey = process.env.REACT_APP_API_KEY;

    try {
      setError(""); // Clear previous errors
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error(
          "Failed to fetch weather data. Please check the city name."
        );
      }
      const result = await response.json();

      const description = result.weather[0].description;
      const temp = result.main.temp;
      const min = result.main.temp_min;
      const max = result.main.temp_max;
      const name = result.name;
      const icon = result.weather[0].icon;
      const country = result.sys.country;

      setWeather({ temp, description, min, max, name, icon, country });
      setCity("")
      setLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      console.log("finially");
    }
  }, [city]);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          background: "blue",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth={"sm"}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <ClipLoader color="white" size={50} />
            </div>
          ) : (
            <WeatherCard weather={weather} now={now} />
          )}
          <SearchBar city={city} setCity={setCity} getWeather={getWeather} />
          {error && (
            <div style={{ color: "red", fontSize: "1.2rem" }}>{error}</div>
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
