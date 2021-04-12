import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const TitleComponent = ({ className, headerText }) => (
    <Typography variant="h6" className={`${className}`}>
        {headerText}
    </Typography>
);

TitleComponent.propTypes = {
    className: PropTypes.string,
    headerText: PropTypes.string,
};

TitleComponent.defaultProps = {
    className: undefined,
    headerText: undefined,
};

export default TitleComponent;
