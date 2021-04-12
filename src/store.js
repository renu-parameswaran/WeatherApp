import { createStore } from "redux";
import currentLocations from "./reducers/currentLocations";

const store = createStore(
    currentLocations,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
