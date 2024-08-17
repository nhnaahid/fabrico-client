import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import OneCard from './OneCard';
import { useLoaderData } from 'react-router-dom';

const ProductCard = ({ filterInfo, searchText, sortBy }) => {

    // console.log("From checkbox: ", filterInfo);
    const axiosPublic = useAxiosPublic();
    const { count } = useLoaderData();
    // console.log(count);
    const [totalProduct, setTotalProduct] = useState(count);
    const [currentPage, setCurrentPage] = useState(0);
    const productPerPage = 6;

    const { data: products = [] } = useQuery({
        queryKey: ['products', filterInfo, searchText, sortBy, currentPage, productPerPage],

        queryFn: async () => {
            const res = await axiosPublic.get('/products', {
                params: {
                    category: filterInfo.category.join(','),
                    brand: filterInfo.brand.join(','),
                    minPrice: filterInfo.price[0],
                    maxPrice: filterInfo.price[1],
                    search: searchText,
                    sort: sortBy,
                    currentPage,
                    productPerPage
                }
            })
            return res.data;
        }
    })
    // console.log(products.length);
    // useEffect(() => {
    //     setTotalProduct(products.length);
    // }, [products])
    // console.log(totalProduct);

    const numberOfPages = Math.ceil(totalProduct / productPerPage);
    // console.log(numberOfPages);
    const pages = [...Array(numberOfPages).keys()];
    console.log("pages: ", pages);
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    products.map(product => <OneCard key={product._id} product={product}></OneCard>)
                }
            </div>

            <div className='pagination text-center mt-12 space-x-1 md:space-x-2'>
                <button onClick={handlePrev} className='btn btn-xs'>Prev</button>
                {
                    pages.map(page =>
                        <button
                            onClick={() => setCurrentPage(page)}
                            key={page}
                            className={`${currentPage === page && 'bg-green-600 text-white'} btn btn-xs`}>
                            {page + 1}
                        </button>)
                }
                <button onClick={handleNext} className='btn btn-xs'>Next</button>
            </div>
        </div>
    );
};

export default ProductCard;