import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WeatherDisplay from "pages/SearchWeather/weatherDisplay";
import FormatDayCards from "pages/SearchWeather/formatDayCards";
import Button from "@material-ui/core/Button";

export default function AccordionComponent({ weatherData, title, details, style, onDelete }) {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: "#EDF5F9" }}
                >
                    {" "}
                    <div>
                        <b>{title}</b>
                        <br />
                        <br />
                        <WeatherDisplay weatherData={weatherData} />
                        <br />
                        {onDelete ? (
                            <Button onClick={onDelete} size="small" color="primary">
                                Remove
                            </Button>
                        ) : (
                            ""
                        )}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography>
        <WeatherDisplay weatherData = {weatherData}/> 
          </Typography> */}
                    <FormatDayCards weeklyWeather={details} style={style} />
                </AccordionDetails>
            </Accordion>
            <br />
            <br />
        </>
    );
}
