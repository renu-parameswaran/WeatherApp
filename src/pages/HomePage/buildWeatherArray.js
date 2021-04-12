import AccordionComponent from "components/AccordionComponent/AccordionComponent";
import READER from "readers/weatherSummaryReader";

export default function buildWeatherArray({ result, styleprops, onDelete }) {
    var ResultArray = [];
    for (var i = result.length - 1; i >= 0; i--) {
        ResultArray.push(
            <AccordionComponent
                key={i}
                weatherData={result[i].summary}
                title={READER.summary(result[i]).name.toUpperCase()}
                details={result[i].details}
                style={styleprops}
                onDelete={onDelete(i)}
            />,
        );
    }
    return ResultArray;
}
