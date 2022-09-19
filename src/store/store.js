import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../Components/HomePage/homepage.reducer";

export default configureStore({
    reducer: {
        weather: WeatherReducer.reducer,
    },
});