import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

// will creat a useTimeOutEffact hook

export const useDebounce = (callback: any, delay: number, deps: any) => {
    const { reset, clear } = useTimeout(callback, delay);
    useEffect(reset, [...deps, reset]);
    useEffect(clear, [clear]);
};
