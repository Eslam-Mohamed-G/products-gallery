import React, { useContext, useRef } from 'react'
import { dataContext } from '../../Context/Context';
import { useLocation } from 'react-router-dom';

export default function SearchInput() {
    const { handleSearch } = useContext(dataContext);
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
        <div className="relative lg:w-80">
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
    )
}
