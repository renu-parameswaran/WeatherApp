import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ErrorMessage from "./errorMessage.js";
import Typography from "@material-ui/core/Typography";
import getLocationWeather from "./getLocationWeather";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import WeatherDisplay from "./weatherDisplay";
import { useDispatch } from "react-redux";
import allActions from "actions";
import FormatDayCards from "./formatDayCards";
import LoadingIndicatorComponent from "components/LoadingIndicatorComponent/LoadingIndicatorComponent";

const useStyles = makeStyles(theme => ({
    headerLine: {
        display: "flex",
        alignItems: "center",
    },
    location: {
        flex: 1,
    },
    detailLine: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    description: {
        flex: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

function LocationWeather(props) {
    const classes = useStyles();
    let history = useHistory();

    const dispatch = useDispatch();

    function handleClick() {
        history.push("/search");
    }

    const [weatherData, setWeatherData] = React.useState({});
    const [weeklyWeather, setweeklyWeather] = React.useState("");
    const [apiError, setApiError] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isView, setIsView] = React.useState(true);

    const handleAddLocation = () => {
        dispatch(allActions.setLocation(props.match.params.id));
        setIsView(false);
    };

    React.useEffect(() => {
        const loadingIndicatorTimeout = setTimeout(() => setIsLoading(true), 500);
        const getWeather = async () => {
            const result = await getLocationWeather(props.match.params.id);
            clearTimeout(loadingIndicatorTimeout);
            setIsLoading(true);
            setWeatherData(result.success ? result.data : {});
            setweeklyWeather(result.success ? result.weeklydata : "");
            setApiError(result.success ? "" : result.error);
        };
        getWeather();
        return () => clearTimeout(loadingIndicatorTimeout);
    }, [props.match.params.id]);

    const { flagIcon, countryCode } = React.useMemo(() => {
        return {
            flagIcon: weatherData.sys ? `https://www.countryflags.io/${weatherData.sys.country}/shiny/32.png` : "",
            countryCode: weatherData.sys ? weatherData.sys.country : "",
        };
    }, [weatherData]);

    return (
        <>
            <Card style={{ margin: "30px" }} variant="outlined">
                <CardContent style={{ margin: "30px" }}>
                    <Button variant="contained" onClick={handleClick}>
                        <ArrowBackIcon />
                    </Button>

                    <br />
                    <br />
                    <br />
                    <div className={classes.headerLine}>
                        <Typography className={classes.location} variant="h5">
                            {props.match.params.id.toUpperCase()}
                        </Typography>
                        <span className={classes.location}>{flagIcon && <img alt={countryCode} src={flagIcon} />}</span>
                        {isView ? (
                            <Button variant="contained" onClick={handleAddLocation}>
                                {"Add"}
                            </Button>
                        ) : (
                            <span style={{ color: "green", width: "50px", height: "50px" }}>
                                <CheckCircleOutlinedIcon style={{ color: "green", width: "50px", height: "40px" }} />
                                {"Added"}
                            </span>
                        )}
                    </div>
                    <br />
                    <br />
                    <div className={classes.detailLine}>
                        <LoadingIndicatorComponent isLoading={isLoading} />
                        <ErrorMessage apiError={apiError} />
                        <WeatherDisplay weatherData={weatherData} />
                    </div>
                    <br />
                    <br />
                    <div>
                        {weeklyWeather !== "" ? (
                            <Grid container spacing={7}>
                                <FormatDayCards weeklyWeather={weeklyWeather} style={classes.paper} />
                            </Grid>
                        ) : (
                            ""
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

LocationWeather.propTypes = {
    // location: PropTypes.string,
};

export default LocationWeather;
