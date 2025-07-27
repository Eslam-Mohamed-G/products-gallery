import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { dataContext } from '../Context/Context';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const { getAllProducts, products } = useContext(dataContext);
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const handleMode = () => {
        setMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    };

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", mode);
        getAllProducts();
    }, [mode]);

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow">
            <div className="flex flex-wrap items-center justify-between py-4 ps-6 pr-2 md:pr-4 md:ps-8">
                <Link to="/" className="flex items-center">
                    <span className="text-lg sm:text-2xl font-bold dark:text-white uppercase">products</span>
                </Link>

                <div className="flex items-center content-center">
                    <div className="relative md:w-80">
                        <div className="absolute inset-y-0 end-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Search..." />
                    </div>

                    {/* button for dark mode */}
                    <button
                        onClick={() => { handleMode(); }}
                        className="p-2 rounded transition-colors duration-300 cursor-pointer"
                    >
                        {mode ?
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    className='fill-yellow-500 hover:fill-yellow-600'
                                    d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                            </svg>
                            :
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20">
                                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                            </svg>
                        }
                    </button>
                </div>

            </div>
        </nav>
    )
}
