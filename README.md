# Weather App

## Description

This is a simple weather application built with React. It allows users to search for the current weather of any city. The app fetches real-time weather data from the OpenWeatherMap API and displays information such as temperature, weather description, and minimum/maximum temperatures.

## Features

- Search for the current weather of any city.
- Displays:
  - Current temperature.
  - Weather description.
  - Minimum and maximum temperatures.
  - City and country name.
  - Weather icon.
- Loading spinner while fetching data.
- Error handling for invalid city names or API issues.

## Technologies Used

- **React**: For building the user interface.
- **Material-UI**: For styling and theming.
- **React Spinners**: For displaying a loading spinner.
- **Moment.js**: For formatting the current date and time.
- **OpenWeatherMap API**: For fetching real-time weather data.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. cd whether-app

3. npm install

## How to Use

1. Enter the name of a city in the search bar.

2. Click the "Search" button to fetch the weather data.

3. View the weather details, including temperature, description, and more.

4. If the city name is invalid, an error message will be displayed.

## File Structure

whether-app/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx   # Component to display weather details
│   │   ├── SearchBar.jsx     # Component for the search bar
│   ├── App.js                # Main app component
│   ├── App.css               # Global styles
│   ├── index.js              # Entry point
├── .env                      # Environment variables (API key)
├── [package.json](http://_vscodecontentref_/0)              # Project dependencies