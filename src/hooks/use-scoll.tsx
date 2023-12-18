import { useState, useEffect } from "react";

// Custom hook for handling scroll events
export const useScroll = (scrollThreshold = 200) => {
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled enough
      const scrolled = window.scrollY > scrollThreshold;
      // Update the state based on the scroll position
      setScrolledEnough(scrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]); // Re-run effect if scrollThreshold changes

  return scrolledEnough;
};
