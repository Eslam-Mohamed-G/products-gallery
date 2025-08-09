import React, { useEffect, useState } from 'react'

export default function ButtomTheme() {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    const [rotation, setRotation] = useState(0);

    const handleMode = () => {
        setMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
        setRotation(prev => prev + 180);
    };

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", mode);
    }, [mode]);
    
    return (
        <div className="rounded-full h-12 w-12 relative top-1/2 translate-y-1/2 transition-transform duration-1000 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {/* icon moone */}
            <button
                onClick={() => { handleMode(); }}
                className="rounded-full transition-colors duration-300 cursor-pointer absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
            >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20">
                    <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                </svg>
            </button>

            {/* icon sun */}
            <button
                onClick={() => { handleMode(); }}
                className="rounded-full transition-colors duration-300 cursor-pointer absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
            >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        className='fill-yellow-500 hover:fill-yellow-600'
                        d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                </svg>
            </button>
        </div>
    )
}
