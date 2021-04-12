import React from "react";
import TextField from "@material-ui/core/TextField";

function LocationEntry({ history }) {
    const [view, setview] = React.useState(false);
    const handleKeyDown = ev => {
        if (ev.key === "Enter") {
            history.push("/details/" + ev.target.value);
            setview(true);
        }
    };

    return view ? null : (
        <TextField style={{ color: "#2A708E" }} autoFocus label="Enter location" onKeyDown={handleKeyDown} />
    );
}

LocationEntry.propTypes = {};

export default LocationEntry;
