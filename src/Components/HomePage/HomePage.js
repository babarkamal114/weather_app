import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWeatherForecast} from "./homepage.action";
import {Box, Container,} from "@mui/material";
import CurrentWeather from "./ModelsComponent/CurrentWeather";
import FiveDaysForecast from "./ModelsComponent/FiveDaysForecast";
import SearchCity from "./ModelsComponent/Search";
import LoadingSkeleton from "./loadingSkeleton/loadingSkeleton";

const HomePage = () => {
    const {isLoadingWeather, weatherData} = useSelector(
        (state) => state.weather,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeatherForecast());
    }, [dispatch]);

    return (
        <Container>
            <Box className="mt-20">
                {isLoadingWeather ?
                    <LoadingSkeleton/>
                    :
                    <>
                        <SearchCity weatherData={weatherData}/>
                        <div className="mt-6">
                            <CurrentWeather weather={weatherData} isLoading={isLoadingWeather}/>
                            <FiveDaysForecast weather={weatherData}/>
                        </div>
                    </>
                }
            </Box>
        </Container>
    )
}
export default HomePage;