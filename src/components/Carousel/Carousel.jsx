import React, { useState, useEffect } from 'react'
import { carouselData } from './carouselData';

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    const changeSlide = (nextIndex) => {
        setFade(false);
        setTimeout(() => {
            setCurrent(nextIndex);
            setFade(true);
        }, 500);
    };

    const prevSlide = () => {
        changeSlide(current === 0 ? carouselData.length - 1 : current - 1);
    };

    const nextSlide = () => {
        changeSlide(current === carouselData.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className="relative w-full pt-5">
            {/* Carousel wrapper */}
            <div
                className={`w-full h-full flex flex-col items-center justify-center text-center text-black text-lg transition-opacity ease-in-out duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className='w-full flex flex-col-reverse sm:flex-row justify-around items-center'>
                    <div>
                        <p className='text-2xl font-bold dark:text-white transition-colors duration-700'>
                            {carouselData[current]?.category}
                        </p>
                    </div>
                    <div>
                        <img
                            src={carouselData[current].image}
                            alt={carouselData[current].title}
                            className="max-h-56 sm:mx-auto sm:max-h-80 object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* prev button */}
            <button
                onClick={prevSlide}
                type="button"
                className="absolute top-0 start-0 z-10 flex items-center justify-center h-full md:px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-700 group-hover:bg-gray-500 dark:group-hover:bg-gray-800 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                    </svg>
                </span>
            </button>

            {/* next button */}
            <button
                onClick={nextSlide}
                type="button"
                className="absolute top-0 end-0 z-10 flex items-center justify-center h-full md:px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-700 group-hover:bg-gray-500 dark:group-hover:bg-gray-800 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                    </svg>
                </span>
            </button>
        </div>
    );
}
