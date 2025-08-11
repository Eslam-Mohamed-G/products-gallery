import React, { useContext, useRef } from 'react'
import { dataContext } from '../../Context/Context';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ButtomTheme from '../ButtomTheme/ButtomTheme';

export default function NavBar() {
    const location = useLocation();
    const { setSearchTerm, handleSearch } = useContext(dataContext);
    const searchInputRef = useRef(null);

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

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow transition-colors ease-in-out duration-1000">
            <div className="flex flex-wrap items-center justify-between py-4 ps-6 pr-2 md:pr-4 md:ps-8">
                <Link to="/" onClick={() => setSearchTerm("")} className="flex items-center">
                    <span className="text-lg sm:text-2xl font-bold dark:text-white uppercase transition-colors ease-in-out duration-1000">Shope</span>
                </Link>


                <div className="flex items-center border-1">
                    <ul className='flex flex-col sm:flex-row gap-4'>
                        <li>
                            <Link to="/products" onClick={() => setSearchTerm("")} className="flex items-center">
                                <span className="text-lg sm:text-xl font-bold dark:text-white capitalize transition-colors ease-in-out duration-1000">products</span>
                            </Link>
                        </li>
                        <li>
                            <NavLink to='#'>
                                <span className="text-lg sm:text-xl font-bold dark:text-white capitalize transition-colors ease-in-out duration-1000">category</span>
                            </NavLink>
                        </li>
                        {/* search bar */}
                        <li>
                            <div className={`relative lg:w-80 ${location.pathname === '/' ? 'opacity-100' : 'opacity-0'}`}>
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
                        </li>
                    </ul>
                    <button className='sm:hidden cursor-pointer'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                        </svg>
                    </button>

                    {/* button for dark mode */}
                    <div className="relative overflow-hidden sm:px-1 border border-red-400">
                        <ButtomTheme />
                    </div>
                </div>
            </div>
        </nav>
    )
}
