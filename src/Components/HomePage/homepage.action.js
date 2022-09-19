import {createAsyncThunk} from "@reduxjs/toolkit";
import request from "../Common/ApiRequest";

//
const url = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=53.9614&lon=-1.0739&key=09a4b4305daf497bbfcca199eacc99fb'


export const getWeatherForecast = createAsyncThunk(
    "weatherLatLongThunk",
    async (e) => {
        const response = await request.get(url).then((payload) => {
            return payload.data;
        }).catch((error) => {
                return error
            }
        )
        return response;
    }
);

export const searchWeatherForecast = createAsyncThunk(
    "weatherLatLongThunk",
    async (city) => {
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=09a4b4305daf497bbfcca199eacc99fb`

        const response = await request.get(url).then((payload) => {
            return payload.data;
        }).catch((error) => {
                return error
            }
        )
        return response;
    }
);