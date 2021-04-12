import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

const DrawerIcon = ({ onClickHandleprops, style, state }) => (
    <IconButton
        className={clsx(state && style)}
        edge="start"
        onClick={onClickHandleprops}
        color="inherit"
        aria-label="menu"
    >
        <MenuIcon />
    </IconButton>
);

IconButton.propTypes = {
    className: PropTypes.string,
    onClickHandleprops: PropTypes.func,
};

IconButton.defaultProps = {
    className: undefined,
};

export default DrawerIcon;
