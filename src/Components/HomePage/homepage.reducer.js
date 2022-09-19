import { createSlice } from "@reduxjs/toolkit";
import {getWeatherForecast, searchWeatherForecast} from "./homepage.action";

const WeatherReducer = createSlice({
    name: "weatherData",
    initialState: {
        weatherData: {},
        isLoadingWeather: false,
        errors: {},
    },
    extraReducers: {
        [getWeatherForecast.pending]: (state, action) => {
            state.isLoadingWeather = true;
        },
        [getWeatherForecast.fulfilled]: (state, action) => {
            state.isLoadingWeather = false;
            state.weatherData = action.payload;
        },
        [getWeatherForecast.rejected]: (state, action) => {
            state.isLoadingWeather = false;
            state.errors = action.payload;
        },

        [searchWeatherForecast.pending]: (state, action) => {
            state.isLoadingWeather = true;
        },
        [searchWeatherForecast.fulfilled]: (state, action) => {
            state.isLoadingWeather = false;
            state.weatherData = action.payload;
        },
        [searchWeatherForecast.rejected]: (state, action) => {
            state.isLoadingWeather = false;
            state.errors = action.payload;
        },
    },
});
export default WeatherReducer;