import { MdOutlineWaterDrop } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { LiaWindSolid } from "react-icons/lia";
import IconWindDirection from "./WindDirection";
import WeatherIcon from "./WeatherIcon";
import formatTime from "../utilities/formatTime";

function WeatherCard({ data }) {
    const iconText = data.iconType.replace(/\s+\S+$/, '');

    return (
        <div className="shadow-sm rounded-lg text-center px-4 py-2 bg-[#2d2d2d] text-[#FFFFFF]" style={{width: '180px'}}>
            <WeatherIcon iconType={data.iconType}/>
            <p className="p-2 text-xl">{iconText}</p>
            <div className="flex justify-between">
                <p className="p-2 pt-0 text-xl">{Math.round(data.temp)}&#186;C</p>
                <span className="text-lg">/</span>
                <p className="p-2 pt-0 text-xl">{Math.round(data.apparent)}&#186;C</p>
            </div>
            <hr className="border-zinc-900"/>
            <p className="p-2 text-lg">{formatTime(data.time)}</p>
            <hr className="border-zinc-900"/>
            <div className="flex items-center justify-between p-2 text-lg">
                <MdOutlineWaterDrop/>
                <p>{data.humidity}%</p>
            </div>
            <hr className="border-zinc-900"/>
            <div className="flex items-center justify-between p-2 text-lg">
                <IoEyeOutline/>
                <p>{(data.visible / 1000)}km</p>
            </div>
            <hr className="border-zinc-900"/>
            <div className="flex items-center justify-between p-2 text-lg">
                <LiaWindSolid/>
                <p>{data.windSpeed}km/h</p>
            </div>
            <div className="flex justify-center p-2 text-2xl">
                <IconWindDirection windDirection={data.windDirection}/>
            </div>
        </div>
    );
}

export default WeatherCard;
