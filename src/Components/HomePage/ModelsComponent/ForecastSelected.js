import React from 'react';
import {Avatar, Box, Button, Container, Divider, Grid, Typography} from "@mui/material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment";

const ForecastSelected = (props) => {
    const {weatherData} = useSelector(
        (state) => state.weather,
    );
    const {datetime} = useParams();
    const navigate = useNavigate();
    const weatherSelected = weatherData?.data?.filter((item) => datetime === item.datetime)
    const currentWeather = weatherSelected?.find((item) => item);
    return [
        <Container className="mt-20">

            <Button variant="contained" startIcon={<ArrowBackIcon/>} onClick={() => navigate('/')}> Back </Button>
            <div className="mt-4 border border-radius-4 border-color-primary bg-primary">
                <Grid container spacing={10} alignItems="center" justifyContent="center" className="py-2">
                    <Grid item lg={4} sm={4} md={4} xs={12}>
                        <Box align="center" className="p-2">
                            <Avatar
                                alt={currentWeather?.weather?.description}
                                src={`https://www.weatherbit.io/static/img/icons/${currentWeather?.weather?.icon}.png`}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    margin: 'auto',
                                }}
                            />

                            <Typography
                                variant="h2"
                                component="h2"
                                gutterBottom={true}
                            >
                                {currentWeather?.temp}<sup>o</sup>
                            </Typography>
                            <Typography
                                variant="p2"
                                component="p2">
                                {currentWeather?.weather?.description}
                            </Typography>
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem className="hide-on-mobile"/>
                    <Grid item lg={6} sm={6} md={6} xs={12}>
                        <div>
                            <Grid container spacing={2} className="px-2">

                                <Grid item xs={6} lg={4}>
                                    <Box display="flex">
                                        <Box pr={2}>
                                            <Avatar className="avatar-bg" variant="rounded">
                                                <ArrowUpwardOutlinedIcon/>
                                            </Avatar>
                                        </Box>
                                        <div>
                                            <Typography variant="p2" component="p2" gutterBottom>High Temp</Typography>
                                            <Typography variant="p" component="p">
                                                {currentWeather?.high_temp}<sup>o</sup>
                                            </Typography>
                                        </div>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} lg={4}>
                                    <Box display="flex">
                                        <Box pr={2}>
                                            <Avatar className="avatar-bg" variant="rounded">
                                                <WbSunnyOutlinedIcon/>
                                            </Avatar>
                                        </Box>
                                        <div>
                                            <Typography variant="p2" component="p2" gutterBottom>Sunrise</Typography>
                                            <Typography variant="p" component="p">
                                                {moment(currentWeather?.sunrise_ts).format('h:mm:ss')}
                                            </Typography>
                                        </div>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} lg={4}>
                                    <Box display="flex">
                                        <Box pr={2}>
                                            <Avatar className="avatar-bg" variant="rounded">
                                                <WavesOutlinedIcon/>
                                            </Avatar>
                                        </Box>
                                        <div>
                                            <Typography variant="p2" component="p2" gutterBottom>Wind</Typography>
                                            <Typography variant="p" component="p">
                                                {currentWeather?.wind_spd}
                                            </Typography>
                                        </div>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} lg={4}>
                                    <Box display="flex">
                                        <Box pr={2}>
                                            <Avatar className="avatar-bg" variant="rounded">
                                                <ArrowDownwardOutlinedIcon/>
                                            </Avatar>
                                        </Box>
                                        <div>
                                            <Typography variant="p2" component="p2" gutterBottom>Low Temp</Typography>
                                            <Typography variant="p" component="p">
                                                {currentWeather?.low_temp}<sup>o</sup>
                                            </Typography>
                                        </div>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} lg={4}>
                                    <Box display="flex">
                                        <Box pr={2}>
                                            <Avatar className="avatar-bg" variant="rounded">
                                                <Brightness4OutlinedIcon/>
                                            </Avatar>
                                        </Box>
                                        <div>
                                            <Typography variant="p2" component="p2" gutterBottom>Sunset</Typography>
                                            <Typography variant="p" component="p">
                                                {moment(currentWeather?.sunset_ts).format('h:mm:ss')}
                                            </Typography>
                                        </div>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} lg={4}>
                                    <Box display="flex">
                                        <Box pr={2}>
                                            <Avatar className="avatar-bg" variant="rounded">
                                                <AcUnitOutlinedIcon/>
                                            </Avatar>
                                        </Box>
                                        <div>
                                            <Typography variant="p2" component="p2" gutterBottom>Snow</Typography>
                                            <Typography variant="p" component="p">
                                                {currentWeather?.snow} %
                                            </Typography>
                                        </div>
                                    </Box>
                                </Grid>

                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </Container>
    ];
}
export default ForecastSelected;