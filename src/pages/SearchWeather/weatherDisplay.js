import React from "react";
import Typography from "@material-ui/core/Typography";

export default function WeatherDisplay({ weatherData }) {
    const { temp, description, windSpeed, imgURL } = React.useMemo(() => {
        const [weather] = weatherData.weather || [];
        return {
            temp: weatherData.main && weatherData.main.temp ? Math.round(weatherData.main.temp).toString() : "",
            description: weather ? weather.description : "",
            windSpeed: weatherData.wind ? Math.round(weatherData.wind.speed) : 0,
            imgURL: `owf owf-${weather ? weather.id : ""} owf-5x`,
        };
    }, [weatherData]);

    return (
        <>
            {temp && <Typography variant="h6">{temp}&deg;C</Typography>}
            {imgURL && <i className={imgURL}></i>}
            {
                <div>
                    <Typography variant="subtitle2">{description}</Typography>
                    <br />
                </div>
            }
            {windSpeed > 0 && (
                <>
                    <Typography variant="h6">{`${windSpeed} km/h`}</Typography>
                </>
            )}
        </>
    );
}
