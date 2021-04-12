import DayCard from "./dayCard";

export default function FormatDayCards({ weeklyWeather, style }) {
    let dailydata = {};
    dailydata = weeklyWeather !== "" ? weeklyWeather.list.filter(reading => reading.dt_txt.includes("18:00:00")) : "";
    return dailydata.map((reading, index) => <DayCard style={style} reading={reading} key={index} />);
}
