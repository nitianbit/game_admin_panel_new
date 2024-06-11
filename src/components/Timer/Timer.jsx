import React, { useState, useEffect } from 'react';

const Timer = ({ startTime }) => {
    const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Math.floor(Date.now() / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let seconds = startTime + 60 - currentTime;
    // Reset the timer if it reaches 0
    if (seconds < 0) {
        seconds = 59;
    }

    return (
        <div className='d-flex align-items-center'>
            <div className='mr-2'>Timer - &nbsp; </div>
            <div> 00:{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
    );
};

export default Timer;
