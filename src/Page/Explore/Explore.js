import React from 'react';
import useProducts from '../hooks/useProducts';
import SingleExplore from './SingleExplore';

const Explore = () => {
    const [products]  = useProducts();
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 p-6'>
            {
                products.map( product => <SingleExplore
                key={product.id}
                product={product}
                ></SingleExplore>)
            }
        </div>
    );
};

export default Explore;