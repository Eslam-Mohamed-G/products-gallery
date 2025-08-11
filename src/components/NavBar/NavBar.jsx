import React, { useContext } from 'react'
import { dataContext } from '../../Context/Context';
import { Link, NavLink } from 'react-router-dom';
import ButtomTheme from '../ButtomTheme/ButtomTheme';

export default function NavBar() {
    const { setSearchTerm } = useContext(dataContext);

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
