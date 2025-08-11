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


                <div className="flex items-center">
                    <ul className='flex gap-4'>
                        <li>
                            <NavLink to="/products" onClick={() => setSearchTerm("")} className="flex items-center">
                                <span className="text-[16px] sm:text-xl font-bold dark:text-white capitalize transition-colors ease-in-out duration-1000">products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#'>
                                <span className="text-[16px] sm:text-xl font-bold dark:text-white capitalize transition-colors ease-in-out duration-1000">category</span>
                            </NavLink>
                        </li>
                    </ul>

                    {/* button for dark mode */}
                    <div className="relative overflow-hidden sm:px-1">
                        <ButtomTheme />
                    </div>
                </div>
            </div>
        </nav>
    )
}
