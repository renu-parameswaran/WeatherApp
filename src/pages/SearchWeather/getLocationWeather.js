import axios from "axios";

async function location(location) {
    try {
        const dailyResult = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
        );

        const weeklyResult = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
        );
        if (dailyResult.status === 200 && weeklyResult.status === 200) {
            return { success: true, data: await dailyResult.data, weeklydata: await weeklyResult.data };
        }

        return { success: false, error: dailyResult.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
}

export default location;
