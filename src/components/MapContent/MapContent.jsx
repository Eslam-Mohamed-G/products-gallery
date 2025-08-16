import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MapContent({ id, title, image, rate, price}) {
    const navigate = useNavigate();
    return (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
            <div onClick={() => { navigate(`/${title.split(' ').slice(0, 3).join(" ")}/${id}`) }} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-80 md:h-96 pt-4 cursor-pointer">
                <div className='w-2/3 h-1/2 sm:h-2/3 m-auto bg-transparent'>
                    <img className="object-contain w-full h-full" src={image} alt="product image" />
                </div>
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title.split(' ').slice(0, 3).join(" ")}</h5>
                    <div className="flex flex-wrap items-center justify-between mt-2.5 mb-5">
                        <div className='flex items-center justify-center'>
                            <span
                                className="star-rating"
                                style={{ '--rating-percent': `${(rate / 5) * 100}%` }}
                            >
                                ★★★★★
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-1">{rate}</span>
                        </div>
                        <span className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
