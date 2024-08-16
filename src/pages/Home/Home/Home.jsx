import PageHeadline from '../PageHeadline/PageHeadline';

const Home = () => {

    const handlePriceChange = (priceRange) => {
        console.log('Selected Price Range:', priceRange);
        // Implement filtering logic here
    };

    return (
        <div className='text-black'>
            <PageHeadline></PageHeadline>

            <div className='flex justify-between mt-12 lg:px-5'>
                {/* sidebar */}
                <div className='w-1/5 h-screen space-y-3'>
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
                                <input className='border rounded-md' type="number" name="min" id="" />
                            </div>
                            <div className='flex gap-2'>
                                <p>Max: </p>
                                <input className='border rounded-md' type="number" name="max" id="" />
                            </div>
                        </form>
                    </div>

                    <div className='w-full border'>
                        <button className='btn btn-sm rounded-lg border border-emerald-600 w-full bg-gray-100'>Apply</button>
                    </div>
                </div>

                {/* main */}
                <div className='w-3/4'>
                    {/* search and sort */}
                    <div className='flex items-center justify-between p-2 bg-base-200 rounded-md'>
                        <div className='w-full'>
                            <div className="join w-4/5">
                                <input className="w-full input input-sm input-bordered join-item" placeholder="Product name" />
                                <button className="btn btn-sm join-item rounded-r-full bg-white border border-emerald-600">Search</button>
                            </div>
                        </div>

                        <div className="flex gap-3 items-baseline justify-center space-y-2 w-4/5 mx-auto text-sm">
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;