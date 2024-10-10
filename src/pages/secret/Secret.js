import React, { useEffect, useState } from 'react';

const Secret = () => {
    const [timeElapsed, setTimeElapsed] = useState('');

    useEffect(() => {
        const startDate = new Date('June 10, 2024 21:30:00');
        const updateTimer = () => {
            const now = new Date();
            const difference = now - startDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeElapsed(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        };

        const timerId = setInterval(updateTimer, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex-1 flex justify-center">
                <img src={`${process.env.PUBLIC_URL}/img/secret.gif`} alt="Secret Gif" className="max-w-full max-h-full" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="mb-4 text-4xl">Sam + Jill ♡</div>
                <div>We have been dating for {timeElapsed}</div>
            </div>
        </div>
    );
};

export default Secret;