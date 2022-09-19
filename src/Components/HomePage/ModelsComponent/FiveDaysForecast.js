import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from 'moment';

const FiveDaysForecast = (props) => {
    const {weather} = props;
    const navigate = useNavigate();
    const fivedaysForecast = weather?.data?.slice(1, 6).map((data) => {
        return data;
    });
    return [
        <div>
            <Grid
                container
                style={{border: "1px solid"}}
                className="border-radius-4 mt-5 p-8 justify-between border-color-primary bg-primary"
            >
                {fivedaysForecast?.map((weather, index) => {
                    return [
                        <Grid item xs={12} lg={2} md={6} sm={6} key={index} className="mb-2 p-2">
                            <Typography variant="p" component="p" className="text-center mb-2"
                                        style={{color: "#fff", lineHeight: 1.2}}>
                                {moment(weather.datetime).format('dddd')}
                            </Typography>
                            <div className="p-4 cursor-pointer shahdow border-radius-4 text-center"
                                 onClick={() => navigate(`/${weather.datetime}`)} style={{backgroundColor: "#334155"}}>
                                <Avatar
                                    alt={weather.weather.description}
                                    src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
                                    sx={{
                                        width: 80,
                                        height: 60,
                                        margin: 'auto',
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    component="h4">
                                    {weather.temp}<sup>o</sup>
                                </Typography>
                                <Typography
                                    variant="p2"
                                    component="p2">
                                    {weather.weather.description}
                                </Typography>
                            </div>
                        </Grid>
                    ];
                })}
            </Grid>
        </div>

    ];
}
export default FiveDaysForecast;