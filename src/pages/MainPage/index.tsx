import { useState, useEffect } from 'react';
import './style.scss';

const MainPage = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='container'>
            <div className="time_w">
                <h2 className='time'>{currentTime.toLocaleTimeString('en-US', { hour12: false })}</h2>
            </div>
        </div>
    )
}

export default MainPage