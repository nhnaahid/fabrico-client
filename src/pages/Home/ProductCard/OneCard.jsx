import React from 'react';
import { CiStar } from 'react-icons/ci';

const OneCard = ({ product }) => {
    const { name, category, image, description, price, ratings, brand,date } = product;
    // console.log(brand);
    return (
        <div className="card card-compact bg-base-200 hover:shadow-2xl duration-500">
            <figure>
                <img
                    src={image}
                    alt="Cloths" />
            </figure>
            <div className="card-body">
                <div className='flex items-center justify-between font-semibold'>
                    <h2 className="card-title text-lg">{name}</h2>
                    <div className='flex items-center gap-1'>
                        <CiStar className='text-xl fill-amber-600' />
                        <p>{ratings}</p>
                    </div>
                </div>

                <div className='flex items-center gap-3 md:gap-10'>
                    <p className='rounded-lg bg-white text-center'>{brand}</p>
                    <p className='rounded-lg bg-white text-center'>{category}</p>
                </div>
                <p>{description}</p>
                <p className='font-bold text-red-400 text-md'>BDT <span>{price}</span></p>
                <p>{date}</p>
                <div className="card-actions flex justify-between my-3">
                    <button className="btn btn-sm btn-success btn-outline w-2/5">Add To Cart</button>
                    <button className="btn btn-sm btn-success btn-outline w-2/5">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default OneCard;