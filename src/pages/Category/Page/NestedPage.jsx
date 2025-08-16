import React, { useContext, useEffect } from 'react';
import { dataContext } from '../../../Context/Context';
import MapContent from '../../../components/MapContent/MapContent';
import { useLocation } from 'react-router-dom';

export default function NestedPage() {
  const { setCategoryName, categoryFilteredProducts } = useContext(dataContext);
  const location = useLocation();

  useEffect(() => {
    const categoryFromPath = decodeURIComponent(location.pathname.split("/")[2]); 
    setCategoryName(categoryFromPath);
  }, [location.pathname]);
  return (
    <div className='flex flex-row flex-wrap justify-center'>
      {categoryFilteredProducts.map(product => (
        <MapContent key={product.id} id={product.id} title={product.title} image={product.image} rate={product.rating.rate} price={product.price} />
      ))}
    </div>
  )
}
