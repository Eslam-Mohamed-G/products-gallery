import React, { useContext, useEffect } from 'react';
import { dataContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';
import SearchInput from '../../components/SearchInput/SearchInput';


export default function Products() {
    const { getAllProducts, loading, errorMessage, filteredProducts, sortedProducts, setSortOption } = useContext(dataContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts();
        return () => {

        };
    }, []);
    return (
        <div className="px-4">
            {loading &&
                <Loading SkeletonNumber={20} />
            }

            {errorMessage && <ErrorPage onRetry={getAllProducts} />}

            {!loading && !errorMessage && (
                <div className="">
                    {/* div for sort by name or price */}
                    <div className="flex items-center justify-between border-b-1 border-gray-400 w-full px-2 md:px-4 py-3">
                        <SearchInput/>
                        <select
                            onChange={(e) => setSortOption(e.target.value)}
                            className="dark:text-white bg-gray-50 dark:bg-gray-700 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            <option value="" className='hidden'>Sort By Price:</option>
                            <option value="price-low">Low to High</option>
                            <option value="price-high">High to Low</option>
                        </select>

                        <select
                            onChange={(e) => setSortOption(e.target.value)}
                            className="dark:text-white bg-gray-50 dark:bg-gray-700 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            <option value="" className='hidden'>Sort By Name:</option>
                            <option value="name-az">A–Z</option>
                            <option value="name-za">Z–A</option>
                        </select>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        {filteredProducts.length > 0 ?
                            sortedProducts.map((product) => (
                                <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4" key={product.id}>
                                    <div onClick={() => { navigate(`/${product.title.split(' ').slice(0, 3).join(" ")}/${product.id}`) }} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-80 md:h-96 pt-4 cursor-pointer">
                                        <div className='w-2/3 h-1/2 sm:h-2/3 m-auto bg-transparent'>
                                            <img className="object-contain w-full h-full" src={product.image} alt="product image" />
                                        </div>
                                        <div className="px-5 pb-5">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.split(' ').slice(0, 3).join(" ")}</h5>
                                            <div className="flex flex-wrap items-center justify-between mt-2.5 mb-5">
                                                <div className='flex items-center justify-center'>
                                                    <span
                                                        className="star-rating"
                                                        style={{'--rating-percent': `${(product.rating.rate / 5) * 100}%`}}
                                                    >
                                                        ★★★★★
                                                    </span>
                                                    <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-1">{product.rating.rate}</span>
                                                </div>
                                                <span className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <p>no products</p>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}
