import React from 'react';
import Product from './Product';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products]  = useProducts();

    return (
        <div>
            <h2 className='mx-16 text-4xl text-center sm:text-center text-primary mt-10 uppercase font-bold mb-6'>The 2023 EV seeling Guide Here</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.slice(4).map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;