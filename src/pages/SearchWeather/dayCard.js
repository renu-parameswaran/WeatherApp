import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

var moment = require("moment");

const DayCard = ({ reading, style }) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);

    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`;

    return (
        <Grid item xs>
            <Paper className={style}>
                <div>
                    <h3>{moment(newDate).format("dddd")}</h3>
                    <p>{moment(newDate).format("MMMM Do, h:mm a")}</p>
                    <i className={imgURL}></i>
                    <h2>{Math.round(reading.main.temp)} &deg;C</h2>
                    <div>
                        <p>{reading.weather[0].description}</p>
                    </div>
                </div>
            </Paper>
        </Grid>
    );
};

export default DayCard;
