const currentLocations = (state = { location: [], locationdata: [], currentlocation: "" }, action) => {
    if (action !== [])
        switch (action.type) {
            case "ADD":
                return {
                    ...state,
                    location: [...state.location, action.payload],
                };
            case "ADD_CURRENT":
                return {
                    ...state,
                    currentlocation: action.payload,
                };
            case "ADD_DATA":
                return {
                    ...state,
                    locationdata: action.payload,
                };
            case "UPDATE_DATA": {
                return Object.assign({}, state, {
                    locationdata: [
                        ...state.locationdata.filter(item => item.summary.name.toLowerCase() !== action.payload),
                    ],
                });
            }
            case "DELETE":
                return Object.assign({}, state, {
                    location: [...state.location.filter(item => item !== action.payload)],
                });

            default:
                return state;
        }
};

export default currentLocations;
