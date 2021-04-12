import _forEach from "lodash/forEach";
import _get from "lodash/get";

import { SIDE_NAV_ITEMS } from "constants/Layout.constants";

const ROUTE_URLS = {};
_forEach(SIDE_NAV_ITEMS, value => {
    ROUTE_URLS[_get(value, "keyName")] = _get(value, "path");
});

export default ROUTE_URLS;
