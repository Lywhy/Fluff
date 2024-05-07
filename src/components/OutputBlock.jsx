import { useSelector } from "react-redux";
import HorizontalSlider from "./Slider";
import WeatherCard from "./WeatherCard";

function OutputBlock() {
    const data = useSelector(state => state.weather.data);

    return (
        <HorizontalSlider>
            <div className="flex gap-x-5">
                {data.weather?.map(item => (
                    <WeatherCard key={item.id} data={item} />
                ))}
            </div>
        </HorizontalSlider>
    );
}

export default OutputBlock;
