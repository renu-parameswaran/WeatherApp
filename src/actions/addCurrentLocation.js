const setCurrentLocation = Obj => {
    return {
        type: "ADD_CURRENT",
        payload: Obj,
    };
};

export default setCurrentLocation;
