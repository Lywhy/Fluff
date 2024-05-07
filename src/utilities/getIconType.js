import IconType from "./iconType";

const getIconType = (time, weather_code) => {
    const isDaytime = time > 5 && time < 21;

    const iconTypes = {
        0: isDaytime ? IconType.CLEAR_SKY_DAY : IconType.CLEAR_SKY_NIGHT,
        1: isDaytime ? IconType.MAINLY_CLEAR_DAY : IconType.MAINLY_CLEAR_NIGHT,
        2: IconType.PARTLY_CLOUDY,
        3: IconType.OVERCAST,
        45: isDaytime ? IconType.FOG_DAY : IconType.FOG_NIGHT,
        48: IconType.DEPOSITING_RIME_FOG,
        51: isDaytime ? IconType.LIGHT_DRIZZLE_DAY : IconType.LIGHT_DRIZZLE_NIGHT,
        53: IconType.MODERATE_DRIZZLE,
        55: IconType.MODERATE_DRIZZLE,
        56: isDaytime ? IconType.LIGHT_DRIZZLE_DAY : IconType.LIGHT_DRIZZLE_NIGHT,
        57: IconType.MODERATE_DRIZZLE,
        61: isDaytime ? IconType.LIGHT_RAIN_DAY : IconType.LIGHT_RAIN_NIGHT,
        63: IconType.MODERATE_RAIN,
        65: IconType.HEAVY_RAIN,
        66: isDaytime ? IconType.LIGHT_RAIN_DAY : IconType.LIGHT_RAIN_NIGHT,
        67: IconType.MODERATE_RAIN,
        71: isDaytime ? IconType.LIGHT_SNOWFALL_DAY : IconType.LIGHT_SNOWFALL_NIGHT,
        73: IconType.MODERATE_SNOWFALL,
        75: IconType.HEAVY_SNOWFALL,
        77: IconType.MODERATE_SNOWFALL,
        80: isDaytime ? IconType.LIGHT_RAIN_DAY : IconType.LIGHT_RAIN_NIGHT,
        81: IconType.MODERATE_RAIN,
        82: IconType.HEAVY_RAIN,
        85: isDaytime ? IconType.LIGHT_MIX_DAY : IconType.LIGHT_MIX_NIGHT,
        86: IconType.HEAVY_MIX,
        95: IconType.THUNDERSTORM,
        96: IconType.STORM_SHOWERS,
        99: IconType.STORM_SHOWERS
    };
    return iconTypes[weather_code] || '';
}

export default getIconType;