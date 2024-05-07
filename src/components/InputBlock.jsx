import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../store/weatherSlice";
import Today from "./Today";
import axios from "axios";

function InputBlock() {
    const [city, setCity] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get("https://ipapi.co/json/");
                const { city } = response.data;
                setCity(city);
                dispatch(getWeather(city));
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };
        fetchLocation();
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCity = inputRef.current.value.trim();
        if (newCity) {
            inputRef.current.value = "";
            setCity(newCity);
            dispatch(getWeather(newCity));
        }
    };

    return (
        <div className="flex justify-between gap-5">
            <form className="flex justify-around rounded-lg shadow-sm p-5 bg-[#2d2d2d] text-[#FFFFFF] w-1/2" onSubmit={handleSubmit}>
                <input
                    className="capitalize outline-none text-xl w-3/4 bg-[#454545] rounded-lg px-5 py-2 koho-medium placeholder-[#FFFFFF]"
                    ref={inputRef}
                    placeholder="Enter City"
                    autoFocus
                />
                <button className="bg-[#454545] rounded-lg px-5 py-2 text-xl koho-medium" type="submit">
                    Search
                </button>
            </form>
            <Today city={city} />
        </div>
    );
}

export default InputBlock;
