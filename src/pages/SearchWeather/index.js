import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LocationEntry from "./locationEntry";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
    },
    containerGrid: {
        flex: 1,
        overflowY: "auto",
        padding: "2em",
    },
    addButton: {
        position: "absolute",
        margin: "1em",
        right: 0,
        bottom: 0,
    },
    content: { flex: 1 },
    carddiv: {
        display: "flex",
        flexDirection: "column",
    },
}));

function SearchWeather() {
    const classes = useStyles();
    let history = useHistory();

    return (
        <div className={classes.root}>
            <Grid className={classes.containerGrid}>
                <Card className={classes.carddiv} variant="outlined">
                    <CardContent className={classes.content}>
                        <LocationEntry history={history} />
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default SearchWeather;
