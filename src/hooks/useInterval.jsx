import React, { useState, useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    const intervalRef = useRef(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function func() {
            savedCallback.current();
        }
        if (delay !== null) {
            intervalRef.current = setInterval(func, delay);
            return () => clearInterval(intervalRef.current);
        }
    }, [delay]);
}

export default useInterval
