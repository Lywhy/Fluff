const formatTime = (time) => {
    const hours = time < 10 ? `0${time}` : time;
    return `${hours} : 00`;
};

export default formatTime;
