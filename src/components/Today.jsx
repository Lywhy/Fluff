import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Today({ city }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const timezone = useSelector(state => state.weather.timezone);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const options = {
                timeZone: timezone,
                weekday: 'long', // Полное название дня недели
                year: 'numeric',
                day: 'numeric', // Число месяца
                month: 'long', // Полное название месяца
            };
            const dateStr = new Intl.DateTimeFormat('en-US', options).format(now);
            setDate(dateStr);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [timezone]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const options = {
                timeZone: timezone,
                hour12: false, // Включить 24-часовой формат времени
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
            setTime(timeStr);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [timezone]);

    return (
        <div className={"flex justify-around rounded-lg shadow-sm p-5 bg-[#2d2d2d] w-1/2"}>
            <div className={"flex items-center gap-20 text-[#FFFFFF]"}>
                <p className={"text-center text-3xl koho-semibold"}>{city}</p>
                <div>
                    <h1 className={"text-center text-2xl koho-semibold"}>Today</h1>
                    <p className={"koho-medium"}>{date}</p>
                </div>
                <div>
                    <h1 className={"text-center text-2xl koho-semibold"}>Time</h1>
                    <p className={"koho-medium"}>{time}</p>
                </div>
            </div>
        </div>
    );
}

export default Today;
