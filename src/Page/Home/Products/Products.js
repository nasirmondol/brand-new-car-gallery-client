import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from './Product';

const Products = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('car.json')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h2 className='mx-16 text-4xl text-center sm:text-center text-primary mt-10 uppercase font-bold mb-6'>The 2023 EV seeling Guide Here</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.slice(4).map(product => <Product
                        key={product.id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;