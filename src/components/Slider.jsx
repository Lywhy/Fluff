import React, { useRef, useState } from 'react';

const HorizontalSlider = ({ children }) => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const x = event.pageX - sliderRef.current.offsetLeft;
        const walk = x - startX;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleWheel = (event) => {
        sliderRef.current.scrollLeft += event.deltaY * 2;
    };

    return (
        <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}
            style={{ overflowX: 'hidden', display: 'flex', flexDirection: 'row', width: '1180px' }}
        >
            {React.Children.map(children, child => (
                React.cloneElement(child, { style: { userSelect: 'none' } })
            ))}
        </div>
    );
};

export default HorizontalSlider;
