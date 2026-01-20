import React, { useState, useEffect } from 'react';

export default function JarvisFloatingIcon(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [bubble, setBubble] = useState(null);

    const messages = [
        "Welcome to my world!",
        "Need a hand?",
        "Ask me anything!",
        "Check out my projects!",
        "System online. Ready.",
        "The SIH win was epic!",
        "I'm Jarvis. Your guide.",
        "Look at the resume!"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance to show a bubble
                const randomMsg = messages[Math.floor(Math.random() * messages.length)];
                setBubble(randomMsg);
                setTimeout(() => setBubble(null), 4000);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            onClick={() => props.openApp('jarvis')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-10 z-[100] cursor-pointer group"
        >
            {/* Speech Bubble */}
            {bubble && (
                <div className="absolute bottom-full right-full mb-8 mr-[-20px] bg-white text-black px-4 py-2 rounded-2xl rounded-tr-none shadow-2xl animate-fadeIn whitespace-nowrap text-xs font-bold border-2 border-red-600">
                    {bubble}
                    <div className="absolute top-full right-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white"></div>
                </div>
            )}

            {/* Tooltip */}
            <div className={`absolute bottom-full right-0 mb-4 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg transition-opacity duration-300 whitespace-nowrap ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                Ask Jarvis
            </div>

            {/* Glowing Ring */}
            <div className={`absolute inset-0 rounded-full bg-red-600 opacity-20 blur-xl transition-transform duration-500 ${isHovered ? 'scale-150' : 'scale-100 animate-pulse'}`}></div>

            {/* Main Icon Container */}
            <div className={`relative w-16 h-16 bg-black bg-opacity-40 backdrop-blur-md rounded-full border border-red-600 border-opacity-30 flex items-center justify-center overflow-hidden transition-all duration-300 ${isHovered ? 'scale-110 shadow-[0_0_20px_rgba(220,38,38,0.5)]' : 'shadow-lg'}`}>
                <img
                    src="/images/logos/jarvis.svg"
                    alt="Jarvis"
                    className={`w-12 h-12 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`}
                />

                {/* Center Core Dot */}
                <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
            </div>

            {/* Pulsating Ring (Visual) */}
            <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-40 group-hover:animate-ping"></div>
        </div>
    );
}
