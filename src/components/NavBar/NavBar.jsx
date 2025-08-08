import React, { useContext, useRef } from 'react'
import { useEffect, useState } from 'react'
import { dataContext } from '../../Context/Context';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const { setSearchTerm, handleSearch } = useContext(dataContext);
    const searchInputRef = useRef(null);
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

    // when click on enter handle search
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const term = searchInputRef.current.value.trim();
            handleSearch(term);
        }
    };

    // Search when clicking on the search icon
    const handleSearchClick = () => {
        const term = searchInputRef.current.value.trim();
        handleSearch(term);
    };

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", mode);
    }, [mode]);

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow transition-colors ease-in-out duration-1000">
            <div className="flex flex-wrap items-center justify-between py-4 ps-6 pr-2 md:pr-4 md:ps-8">
                <Link to="/" onClick={() => setSearchTerm("")} className="flex items-center">
                    <span className="text-lg sm:text-2xl font-bold dark:text-white uppercase transition-colors ease-in-out duration-1000">products</span>
                </Link>

                <div className="flex items-center content-center">
                    {/* search bar */}
                    <div className={`relative md:w-80 ${location.pathname === '/' ? 'opacity-100' : 'opacity-0'}`}>
                        <button onClick={handleSearchClick} className="absolute inset-y-0 end-0 flex items-center mx-1 my-1 px-2 cursor-pointer hover:bg-gray-300 transition-all duration-300 rounded-lg">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="search-navbar"
                            ref={searchInputRef}
                            onKeyDown={handleKeyDown}
                            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                            placeholder="Search..."
                        />
                    </div>

                    {/* button for dark mode */}
                    <div className="relative overflow-hidden sm:px-1">
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
                    </div>
                </div>

            </div>
        </nav>
    )
}
