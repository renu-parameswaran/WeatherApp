import axios from "axios";

async function getCurrentLocation(position) {
    try {
        const weatherApi = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
        );

        if (weatherApi.status === 200) {
            return { success: true, data: await weatherApi.data };
        }

        return { success: false, error: weatherApi.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
}

export default getCurrentLocation;
