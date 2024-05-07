import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import getIconType from "../utilities/getIconType";
import axios from 'axios'

export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async (cityName) => {
        try {
            // Get coordinates by city name
            let coordinates = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)
            let {latitude, longitude, timezone} = coordinates.data.results[0]
            // Get weather data
            let response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain,snowfall,weather_code,cloud_cover,visibility,wind_speed_10m,wind_direction_10m&timezone=auto&forecast_days=1`)
            let {temperature_2m, relative_humidity_2m, visibility, apparent_temperature, wind_speed_10m, wind_direction_10m, weather_code} = response.data.hourly

            let weather = []

            for (let i = 0; i <= 23; i+=1) {
                weather.push({
                    id: cityName + i,
                    time: i,
                    code: weather_code[i],
                    temp: temperature_2m[i],
                    humidity: relative_humidity_2m[i],
                    visible: visibility[i],
                    apparent: apparent_temperature[i],
                    windSpeed: wind_speed_10m[i],
                    windDirection: wind_direction_10m[i],
                    iconType: getIconType(i, weather_code[i])
                })
            }
            return {weather, timezone};
        } catch (err) {
            throw new Error('Check the city name is correct.')
        }
    }
);

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: [],
        timezone: '',
        isLoading: false,
        error: '',
    },
    extraReducers(builder) {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.timezone = action.payload.timezone;
            state.error = '';
        })
        builder.addCase(getWeather.pending, (state) => {
            state.error = '';
            state.isLoading = true;
        })
        builder.addCase(getWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const weatherReducer = weatherSlice.reducer