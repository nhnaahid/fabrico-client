import { useState } from 'react';
import PageHeadline from '../PageHeadline/PageHeadline';
import ProductCard from '../ProductCard/ProductCard';
import { RxCross1 } from 'react-icons/rx';
import { RiMenu3Fill } from 'react-icons/ri';

const Home = () => {
    const [open, setOpen] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [category, setCategory] = useState([]);
    // const [brand, setBrand] = useState([])
    const [filterInfo, setFilterInfo] = useState({
        category: [],
        brand: [],
        price: []
    });
    const handlePriceRange = e => {
        e.preventDefault();
        const minPrice = e.target.min.value;
        const maxPrice = e.target.max.value;
        setFilterInfo({ ...filterInfo, price: [minPrice, maxPrice] });
    }
    const handleCheckBox = e => {
        // setIsChecked(e.target.checked);
        // console.log("From checkbox: ", e.target.checked);
        if (e.target.name === "category") {
            if (e.target.checked) {
                setFilterInfo({ ...filterInfo, category: [...filterInfo.category, e.target.value] });
            }
            else {
                setFilterInfo({ ...filterInfo, category: filterInfo.category.filter(item => item !== e.target.value) });
            }
        }
        else if (e.target.name === "brand") {
            if (e.target.checked) {
                setFilterInfo({ ...filterInfo, brand: [...filterInfo.brand, e.target.value] });
            }
            else {
                setFilterInfo({ ...filterInfo, brand: filterInfo.brand.filter(item => item !== e.target.value) });
            }
        }
    }
    // console.log("From checkbox: ", filterInfo);

    return (
        <div className='text-black'>
            <div className='flex justify-end md:hidden'>
                <div onClick={() => setOpen(!open)} className='w-fit'>
                    {
                        open ? <RxCross1 className="text-3xl rounded-full p-2 bg-emerald-500 text-white" /> : <RiMenu3Fill className="text-3xl rounded-full p-2 bg-emerald-500 text-white" />
                    }
                </div>
            </div>

            <PageHeadline></PageHeadline>
            <div className='flex justify-between mt-12 lg:px-5'>
                {/* sidebar-small*/}
                <div className={`${open ? 'left-0 top-16' : '-left-96 top-16'} duration-700 w-1/2 md:w-1/5 h-screen space-y-3 absolute md:hidden z-10 bg-base-200 md:bg-none rounded-md`}>
                    {/* category */}
                    <div className='bg-gray-100 p-3 rounded-md'>
                        <h2 className='font-bold border-b pb-2 mb-3'>Category</h2>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Pant</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Shirt</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>T-Shirt</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Polo</p>
                        </div>
                    </div>

                    {/* brand */}
                    <div className='bg-gray-100 p-3 rounded-md'>
                        <h2 className='font-bold border-b pb-2 mb-3'>Brand</h2>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Ecstasy</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>GentlePark</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Dorjibari</p>
                        </div>
                    </div>

                    {/* price */}
                    <div className='bg-gray-100 p-3 rounded-md'>
                        <h2 className='font-bold border-b pb-2 mb-3'>Price Range</h2>
                        <form className='space-y-2'>
                            <div className='flex gap-2'>
                                <p>Min: </p>
                                <input className='w-4/5 lg:w-1/2 border rounded-md' type="number" name="min" id="" required />
                            </div>
                            <div className='flex gap-2'>
                                <p>Max: </p>
                                <input className='w-4/5 lg:w-1/2 border rounded-md' type="number" name="max" id="" required />
                            </div>
                            <input type="submit" value="Apply Price Range" className='btn btn-xs rounded-lg border border-emerald-600 bg-gray-100 w-full text-xs' />
                        </form>
                    </div>

                    {/* <div className='w-full px-1'>
                        <button className='btn btn-sm rounded-lg border border-emerald-600 w-full bg-gray-100'>Apply</button>
                    </div> */}
                </div>

                {/* sidebar-medium*/}
                <div className={`w-2/5 md:w-1/5 h-screen space-y-3 hidden md:block z-10 rounded-md`}>
                    {/* category */}
                    <div className='bg-gray-100 p-3 rounded-md'>
                        <h2 className='font-bold border-b pb-2 mb-3'>Category</h2>
                        <div className='flex items-center gap-2'>
                            <input onChange={handleCheckBox} name='category' value="Pant" type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Pant</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input onChange={handleCheckBox} name='category' value="Shirt" type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Shirt</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input onChange={handleCheckBox} name='category' value="T-Shirt" type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>T-Shirt</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input onChange={handleCheckBox} name='category' value="Polo" type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Polo</p>
                        </div>
                    </div>

                    {/* brand */}
                    <div className='bg-gray-100 p-3 rounded-md'>
                        <h2 className='font-bold border-b pb-2 mb-3'>Brand</h2>
                        <div className='flex items-center gap-2'>
                            <input onChange={handleCheckBox} name='brand' value="Ecstasy" type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Ecstasy</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input onChange={handleCheckBox} name='brand' value="GentlePark" type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>GentlePark</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input onChange={handleCheckBox} name='brand' value="Dorjibari" type="checkbox" className="checkbox checkbox-xs rounded-md" />
                            <p>Dorjibari</p>
                        </div>
                    </div>

                    {/* price */}
                    <div className='bg-gray-100 p-3 rounded-md'>
                        <h2 className='font-bold border-b pb-2 mb-3'>Price Range</h2>
                        <form onSubmit={handlePriceRange} className='space-y-2'>
                            <div className='flex gap-2'>
                                <p>Min: </p>
                                <input className='w-4/5 lg:w-1/2 border rounded-md' type="number" name="min" id="" required />
                            </div>
                            <div className='flex gap-2'>
                                <p>Max: </p>
                                <input className='w-4/5 lg:w-1/2 border rounded-md' type="number" name="max" id="" required />
                            </div>
                            <input type="submit" value="Apply Price Range" className='btn btn-xs rounded-lg border border-emerald-600 bg-gray-100 w-full' />
                        </form>
                    </div>

                    {/* <div className='w-full px-1'>
                        <button className='btn btn-sm rounded-lg border border-emerald-600 w-full bg-gray-100'>Apply</button>
                    </div> */}
                </div>

                {/* main */}
                <div className='w-full md:w-3/4'>
                    {/* search and sort */}
                    <div className='flex flex-col md:flex-row items-center justify-between p-2 bg-base-200 rounded-md gap-3 md:gap-0'>
                        <div className='w-full'>
                            <div className="join w-4/5">
                                <input className="w-full input input-sm input-bordered join-item" placeholder="Product name" />
                                <button className="btn btn-sm join-item rounded-r-full bg-white border border-emerald-600">Search</button>
                            </div>
                        </div>

                        <div className="flex gap-3 items-baseline md:justify-center space-y-2 w-full md:w-4/5 mx-auto text-sm">
                            <label className="font-semibold">Sort By:</label>
                            <select name="sort" defaultValue="default" className="border border-emerald-600 rounded-md px-2">
                                <option disabled value="default" >Default</option>
                                <option value="lo2hi">Low to High</option>
                                <option value="hi2lo">High to Low</option>
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                            </select>
                        </div>
                    </div>
                    {/* cards */}
                    <div>
                        <ProductCard filterInfo={filterInfo}></ProductCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;