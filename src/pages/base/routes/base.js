import React from "react";
import { Route, Switch } from "react-router-dom";
import { NAV_KEYS } from "constants/Layout.constants";
import ROUTE_URLS from "pages/base/routes/route.constants";

export default function routeFunction() {
    return (
        <Switch>
            <Route exact path={ROUTE_URLS[NAV_KEYS.SEARCH]} component={""} />
            <Route from="*" to={ROUTE_URLS[NAV_KEYS.HOME]} />
        </Switch>
    );
}
