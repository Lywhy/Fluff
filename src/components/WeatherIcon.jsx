import React from 'react';
import * as Icons from 'react-icons/wi';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import IconType from '../utilities/iconType';

const iconComponents = {
    [IconType.CLEAR_SKY_DAY]: <IoSunnyOutline />,
    [IconType.CLEAR_SKY_NIGHT]: <IoMoonOutline />,
    [IconType.MAINLY_CLEAR_DAY]: <Icons.WiDayCloudy />,
    [IconType.MAINLY_CLEAR_NIGHT]: <Icons.WiNightCloudy />,
    [IconType.PARTLY_CLOUDY]: <Icons.WiCloud />,
    [IconType.OVERCAST]: <Icons.WiCloudy />,
    [IconType.FOG_DAY]: <Icons.WiDayFog />,
    [IconType.FOG_NIGHT]: <Icons.WiNightFog />,
    [IconType.DEPOSITING_RIME_FOG]: <Icons.WiFog />,
    [IconType.LIGHT_DRIZZLE_DAY]: <Icons.WiDaySprinkle />,
    [IconType.LIGHT_DRIZZLE_NIGHT]: <Icons.WiNightSprinkle />,
    [IconType.MODERATE_DRIZZLE]: <Icons.WiSprinkle />,
    [IconType.LIGHT_RAIN_DAY]: <Icons.WiDayRain />,
    [IconType.LIGHT_RAIN_NIGHT]: <Icons.WiNightRain />,
    [IconType.MODERATE_RAIN]: <Icons.WiRain />,
    [IconType.HEAVY_RAIN]: <Icons.WiRainWind />,
    [IconType.LIGHT_SNOWFALL_DAY]: <Icons.WiDaySnow />,
    [IconType.LIGHT_SNOWFALL_NIGHT]: <Icons.WiNightSnow />,
    [IconType.MODERATE_SNOWFALL]: <Icons.WiSnow />,
    [IconType.HEAVY_SNOWFALL]: <Icons.WiSnowWind />,
    [IconType.LIGHT_MIX_DAY]: <Icons.WiDayRainMix />,
    [IconType.LIGHT_MIX_NIGHT]: <Icons.WiNightRainMix />,
    [IconType.HEAVY_MIX]: <Icons.WiRainMix />,
    [IconType.THUNDERSTORM]: <Icons.WiThunderstorm />,
    [IconType.STORM_SHOWERS]: <Icons.WiStormShowers />,
};

function Icon({ iconType }) {
    const iconComponent = iconComponents[iconType];

    return iconComponent ? React.cloneElement(iconComponent, { className: 'w-full my-5 mb-0 text-[5rem]' }) : null;
}

export default Icon;
