import { useEffect, useState } from "react";

const useBreakPoint = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth < 768)
            setIsTablet(screenWidth >= 768 && screenWidth < 1024)
            setIsDesktop(screenWidth >= 1024)
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return {
        isMobile,
        isTablet,
        isDesktop,
    };
}

export default useBreakPoint;