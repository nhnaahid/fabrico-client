import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import OneCard from './OneCard';

const ProductCard = ({ filterInfo, searchText, sortBy }) => {

    console.log("From checkbox: ", filterInfo);

    const axiosPublic = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products', filterInfo, searchText, sortBy],

        queryFn: async () => {
            const res = await axiosPublic.get('/products', {
                params: {
                    category: filterInfo.category.join(','),
                    brand: filterInfo.brand.join(','),
                    minPrice: filterInfo.price[0],
                    maxPrice: filterInfo.price[1],
                    search: searchText,
                    sort: sortBy
                }
            })
            return res.data;
        }
    })
    console.log(products);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                products.map(product => <OneCard key={product._id} product={product}></OneCard>)
            }
        </div>
    );
};

export default ProductCard;