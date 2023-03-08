import { useCallback, useEffect, useRef } from "react";

// useEffect: runs on component-did-mount, plus looks at dependencies

// useCallback: runs whenever a dependencies changes
//            : used memoization to ensure that some calculation does not have to be done from scratch each time.
//            : "caches" the resutls

export const useTimeout = (callback: any, delay: number) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<any>();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const setTimer = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    const reset = useCallback(() => {
        clear();
        setTimer();
    }, [clear, setTimer]);

    return { reset, clear };
};
