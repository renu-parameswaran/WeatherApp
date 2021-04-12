import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import TitleComponent from "molecules/TitleComponent/TitleComponent";
import DrawerIcon from "molecules/DrawerIcon/DrawerIcon";
import s from "./appHeader.module.scss";
import clsx from "clsx";

const AppHeader = ({ headerText, onClickHandleprops, state, style }) => (
    <AppBar
        style={{ background: style[3] }}
        position="fixed"
        className={clsx(style[0], {
            [style[1]]: state,
        })}
    >
        <Toolbar>
            <DrawerIcon onClickHandleprops={onClickHandleprops} style={style[2]} state={state} />
            <TitleComponent className={`${s.title}`} headerText={headerText} />
        </Toolbar>
    </AppBar>
);

export default AppHeader;
