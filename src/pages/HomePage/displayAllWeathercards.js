import React from "react";
import LoadingIndicatorComponent from "components/LoadingIndicatorComponent/LoadingIndicatorComponent";
import BuildMyLocation from "../HomePage/buildMyLocation";
import BuildWeatherArray from "../HomePage/buildWeatherArray";
import getLocationWeather from "../SearchWeather/getLocationWeather";
import getCurrentLocation from "../HomePage/getCurrentLocation";
import store from "../../../src/store";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import allActions from "actions";
import _isEmpty from "lodash/isEmpty";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

function DisplayAllWeathercards() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [show, setShow] = React.useState(false);
    const [locations, setlocations] = React.useState([]);
    const [currentWeather, setcurrentWeather] = React.useState([]);

    const onDelete = index => event => {
        event.stopPropagation();
        dispatch(allActions.updateLocationData(store.getState().location[index]));
        dispatch(allActions.updateLocation(store.getState().location[index]));
        setlocations(store.getState().locationdata);
        setShow(true);
    };

    const buildWeatherObject = async props => {
        let data = [];
        setShow(false);
        for (var j = 0; j < props.length; j++) {
            let objectDetails = { summary: "", details: "" };
            let result_locs = await getLocationWeather(props[j]);
            objectDetails.summary = result_locs.data;
            objectDetails.details = result_locs.weeklydata;
            data.push(objectDetails);
        }
        return data;
    };
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function (position) {
            const weatherApi = await getCurrentLocation(position);
            dispatch(allActions.setCurrentLocation(weatherApi.data.name));
            let currentLocation = [store.getState().currentlocation];
            let currentLocationObject = await buildWeatherObject(currentLocation);
            setcurrentWeather(currentLocationObject[0]);
            setShow(true);
        });
        const render = async () => {
            let objectData = await buildWeatherObject(store.getState().location);
            dispatch(allActions.setLocationData(objectData));
            setlocations(store.getState().locationdata);
            setShow(true);
        };
        render();
    }, [dispatch]);

    return (
        <>
            {!_isEmpty(currentWeather) ? (
                <BuildMyLocation locationData={currentWeather} styleprops={classes.paper} />
            ) : (
                <LoadingIndicatorComponent isLoading={show} />
            )}
            {store.getState().location.length !== 0 ? (
                <BuildWeatherArray result={locations} styleprops={classes.paper} onDelete={onDelete} />
            ) : null}
        </>
    );
}

DisplayAllWeathercards.propTypes = {};

export default DisplayAllWeathercards;
