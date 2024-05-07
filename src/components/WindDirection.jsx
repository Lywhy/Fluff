import {HiArrowNarrowDown, HiArrowNarrowLeft, HiArrowNarrowRight, HiArrowNarrowUp} from "react-icons/hi";

function IconWindDirection({ windDirection }) {
    let IconComponent = null;
    const rotate = "rotate-45"

    // Normal state
    if (windDirection < 30 || windDirection > 330) {
        IconComponent = <HiArrowNarrowRight/>;
    } else if (windDirection < 120 && windDirection > 60) {
        IconComponent = <HiArrowNarrowUp/>;
    } else if (windDirection < 210 && windDirection > 150) {
        IconComponent = <HiArrowNarrowLeft/>;
    } else if (windDirection < 300 && windDirection > 240) {
        IconComponent = <HiArrowNarrowDown/>;
    }
    // Rotate state
    else if (windDirection >= 30 || windDirection <= 60) {
        IconComponent = <HiArrowNarrowRight className={rotate}/>;
    } else if (windDirection >= 120 && windDirection <= 150) {
        IconComponent = <HiArrowNarrowUp className={rotate}/>;
    } else if (windDirection >= 210 && windDirection <= 240) {
        IconComponent = <HiArrowNarrowLeft className={rotate}/>;
    } else if (windDirection >= 300 && windDirection <= 300) {
        IconComponent = <HiArrowNarrowDown className={rotate}/>;
    }

    return (
        <div>
            {IconComponent}
        </div>
    );
}

export default IconWindDirection;
