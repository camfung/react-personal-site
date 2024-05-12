import { useState, useEffect } from "react";
import { ScreenSize } from "../enums/screenSizes";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(ScreenSize.MEDIUM); // Default to 'medium'

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.matchMedia("(max-width: 600px)").matches) {
                // Small screens (e.g., phones)
                return ScreenSize.SMALL;
            } else if (
                window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches
            ) {
                // Medium screens (e.g., tablets)
                return ScreenSize.MEDIUM
            } else {
                // Large screens (e.g., desktops)
                return ScreenSize.LARGE
            }
        };

        const handleResize = () => {
            setScreenSize(checkScreenSize());
        };

        // Set initial size
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
};

export default useScreenSize;
