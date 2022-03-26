import { useEffect, useState, useRef } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  /*
  Intersection Observer API lets you do something in the callback 
  function when it observes an intersection (beyond a certain 
  threshold) between the root element and the target element.
  */

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.35
    };

    //Create Observer with callback and options
    observerRef.current = new IntersectionObserver(([entry]) => {
      console.log(
        `${entry.target.id} ${entry.intersectionRatio} ${entry.isIntersecting}`
      );
      setIsOnScreen(entry.isIntersecting);
    }, options);
  }, []);

  useEffect(() => {
    //Observer to start observing a target
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};
