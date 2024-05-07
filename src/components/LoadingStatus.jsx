import {useSelector} from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";

function LoadingStatus() {
    const isLoading = useSelector(store => store.weather.isLoading)
    const error = useSelector (store => store.weather.error)
    return (
        <div className={"my-10"}>
            {isLoading &&  <AiOutlineLoading className={"animate-spin w-full py-10 h-40"} />}
            {error &&
                <div className="flex h-20 place-items-center">
                    <p className={"w-full text-lg text-white bg-red-500/50 py-5 text-center rounded-lg shadow-lg"}>
                        {error}
                    </p>
                </div>}
        </div>
    )
}

export default LoadingStatus