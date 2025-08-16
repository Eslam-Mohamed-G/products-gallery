import React, { useContext, useEffect } from 'react';
import { dataContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';
import SearchInput from '../../components/SearchInput/SearchInput';
import MapContent from '../../components/MapContent/MapContent';


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
                    <div className="flex flex-col items-center justify-between gap-1 border-b-1 border-gray-400 w-full px-2 md:px-4 py-3">
                        {/* search bar */}
                        <SearchInput />
                        <div className="flex w-full items-center justify-between gap-1">
                            <select
                                onChange={(e) => setSortOption(e.target.value)}
                                className="dark:text-white bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 text-gray-900 font-medium rounded-lg text-sm px-3 sm:px-5 py-2.5"
                            >
                                <option value="" className='hidden'>Sort By Price:</option>
                                <option value="price-low">Low to High</option>
                                <option value="price-high">High to Low</option>
                            </select>

                            <select
                                onChange={(e) => setSortOption(e.target.value)}
                                className="dark:text-white bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 text-gray-900 font-medium rounded-lg text-sm px-3 sm:px-5 py-2.5"
                            >
                                <option value="" className='hidden'>Sort By Name:</option>
                                <option value="name-az">A–Z</option>
                                <option value="name-za">Z–A</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        {filteredProducts.length > 0 ?
                            sortedProducts.map((product) => (
                                <MapContent key={product.id} id={product.id} title={product.title} image={product.image} rate={product.rating.rate} price={product.price}/>
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
