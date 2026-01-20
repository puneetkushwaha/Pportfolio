import React, { useState, useEffect } from 'react';

export default function Weather() {
    const [weather, setWeather] = useState({
        temp: 26,
        city: 'Lucknow',
        icon: '☀️',
        condition: 'Sunny'
    });

    useEffect(() => {
        // In a real app, you'd fetch from an API like OpenWeatherMap here
        // For the portfolio, we can keep it static or randomize slightly
        const conditions = [
            { temp: 26, icon: '☀️', condition: 'Sunny' },
            { temp: 24, icon: '⛅', condition: 'Partly Cloudy' },
            { temp: 28, icon: '🌤️', condition: 'Mostly Sunny' }
        ];
        const random = conditions[Math.floor(Math.random() * conditions.length)];
        setWeather(prev => ({ ...prev, ...random }));
    }, []);

    return (
        <div
            title={weather.condition}
            className="flex items-center space-x-1.5 px-2 py-1 hover:bg-ub-warm-grey hover:bg-opacity-20 rounded transition duration-100 cursor-default select-none"
        >
            <span className="text-sm">{weather.icon}</span>
            <span className="text-xs md:text-sm font-medium text-ubt-grey">{weather.temp}°C</span>
            <span className="hidden lg:inline text-xs text-ubt-grey opacity-70">{weather.city}</span>
        </div>
    );
}
