import React, { useContext } from 'react';
import { dataContext } from '../../Context/Context';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Link, Outlet } from 'react-router-dom';

const cardData = [
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        rating: {
            rate: 4.7,
            count: 500
        }
    },
    {
        id: 6,
        title: "White Gold Plated Princess",
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
        rating: {
            rate: 3,
            count: 400
        }
    },
    {
        id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
        rating: {
            rate: 2.2,
            count: 140
        }
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
        rating: {
            rate: 3.6,
            count: 145
        }
    }
]

export default function Category() {
    const { setCategoryName, categoryFilteredProducts, loading, errorMessage } = useContext(dataContext);
    console.log(categoryFilteredProducts);
    if (loading) return <Loading SkeletonNumber={4} />;
    if (errorMessage) return <ErrorPage />;
    return (
        <div className='flex flex-row flex-wrap justify-center px-4 pt-4'>
            {cardData.map((item) => (
                <Link className="w-1/2 lg:w-1/4 p-2 md:p-4" key={item.id} to={item.category}>
                    <div onClick={() => setCategoryName(item.category)} className="flex flex-col items-center justify-center h-64 md:h-96 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition-colors ease-in-out duration-700">
                        <div className='w-full h-1/2 sm:h-2/3 m-auto bg-transparent px-4'>
                            <img className="object-contain w-full h-full" src={item.image} alt={item.category} />
                        </div>

                        <div className="flex flex-wrap flex-row items-center justify-between gap-4 px-2 md:px-5 pb-5 w-full">
                            <p className="text-[14px] md:text-xl font-bold capitalize tracking-tight text-gray-900 dark:text-white m-auto transition-colors ease-in-out duration-700">{item.category}</p>
                            <button className="flex items-center justify-center capitalize text-white cursor-pointer bg-gray-400 rounded-md px-4 py-2 m-auto transition-colors ease-in-out duration-700">
                                more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
            <Outlet/>
        </div>
    )
}
