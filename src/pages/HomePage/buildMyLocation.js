import AccordionComponent from "components/AccordionComponent/AccordionComponent";

export default function BuildMyLocation({ locationData, styleprops }) {
    return (
        <AccordionComponent
            key={locationData.name}
            weatherData={locationData.summary}
            // eslint-disable-next-line no-useless-concat
            title={"My location" + " - " + locationData.summary.name}
            details={locationData.details}
            style={styleprops}
        />
    );
}
