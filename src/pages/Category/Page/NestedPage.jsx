import React, { useContext } from 'react';
import { dataContext } from '../../../Context/Context';
import MapContent from '../../../components/MapContent/MapContent';

export default function NestedPage() {
  const { categoryFilteredProducts } = useContext(dataContext);
  return (
    <div>
      {categoryFilteredProducts.map(product => (
        <MapContent key={product.id} id={product.id} title={product.title} image={product.image} rate={product.rating.rate} price={product.price} />
      ))}
    </div>
  )
}
