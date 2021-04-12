import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NAV_KEYS } from "constants/Layout.constants";
import ROUTE_URLS from "pages/base/routes/route.constants";
import SearchWeather from "pages/SearchWeather";
import LocationWeather from "pages/SearchWeather/locationWeather";
import DisplayAllWeathercards from "pages/HomePage/displayAllWeathercards";

export default function routeFunction() {
    return (
        <Switch>
            <Redirect exact from="/*/home" to={ROUTE_URLS[NAV_KEYS.HOME]} component={DisplayAllWeathercards} />
            <Route exact path={ROUTE_URLS[NAV_KEYS.SEARCH]} component={SearchWeather} />
            <Route exact path={"/details/:id"} component={LocationWeather} />
            <Route from="*" to={ROUTE_URLS[NAV_KEYS.HOME]} component={DisplayAllWeathercards} />
        </Switch>
    );
}
