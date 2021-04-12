import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { STATIC_TEXT } from "constants/General.constants";
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "components/AppHeader/AppHeader";
import Drawer from "components/DrawerComponent/DrawerComponent";

import Routes from "./routes";
import { SIDE_NAV_ITEMS } from "constants/Layout.constants";
import _cloneDeep from "lodash/cloneDeep";
import _values from "lodash/values";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [menuItems] = React.useState(_cloneDeep(_values(SIDE_NAV_ITEMS)));

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppHeader
                    headerText={STATIC_TEXT.HEADER_TEXT}
                    onClickHandleprops={handleDrawerOpen}
                    state={open}
                    style={[classes.appBar, classes.appBarShift, classes.hide, "#2A708E"]}
                />
                <Drawer
                    state={open}
                    onClickHandleprops={handleDrawerClose}
                    menuprops={menuItems}
                    style={[classes.drawer, classes.drawerPaper, classes.drawerHeader, theme]}
                />
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    <Routes />
                </main>
            </div>
        </Router>
    );
}
