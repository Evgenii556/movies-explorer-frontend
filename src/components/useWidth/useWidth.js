import { useEffect, useState } from "react";

function useWidth() {

    const [width, setWidth] = useState(window.innerWidth);

    const handleResizeWindow = (evt) => {
        setWidth(evt.target.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        }
    }, [width]);
    return width;
};

export default useWidth;
