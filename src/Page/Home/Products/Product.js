import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, description, price } = product;
    return (
        <div className="card w-96 bg- shadow-xl">
            <figure className="px-10 pt-10">
                <img width={250} src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-teal-300 font-bold">{name}</h2>
                <p className='font-bold text-sky-400'>Price: $ {price}</p>
                <p className=' text-black'>{description.slice(100)}</p>
                <div className="card-actions">
                    <button className="btn btn-primary"><Link to='/purchase'>Purchase Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Product;