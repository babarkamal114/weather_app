import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import moment from "moment";
import {
    Grid,
    IconButton,
    InputAdornment,
    InputBase,
    Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {searchWeatherForecast} from "../homepage.action";


const SearchCity = (props) => {
    const [search, setSearch] = useState('');
    const {weatherData} = props;
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const changeHandleSearch = () => {
        dispatch(searchWeatherForecast(search))
    }

    return [
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Grid item xs={12} lg={4} md={6} key={0}>
                <Typography
                    variant="h4"
                    component="h4"
                    className="primary">
                    {weatherData.city_name}{', '} {weatherData.country_code}
                </Typography>

                <Typography color="#fff">
                    {moment().format("MMM Do YYYY h:mm")}</Typography>

            </Grid>
            <Grid item xs={12} lg={4} md={6} key={1}>
                <InputBase
                    fullWidth
                    type='text'
                    size="medium"
                    placeholder="Search City"
                    sx={{
                        border: '1px solid #334155',
                        background: "#1e293b",
                        color: "white",
                        borderRadius: 1,
                        padding: "4px"
                    }}
                    onChange={(e) => handleSearch(e)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={changeHandleSearch} className="text-white" edge="end">
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Grid>
        </Grid>
    ]
}
export default SearchCity;