import React from 'react'

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-hold'>$7,800</p>
                    <p className='text-gray-600'>Daily revenue</p>
                    <p className='bg-green-200 flex justify-center items p-2 rounded-lg'>
                        <span className='text-green-700 text-lg '>
                            +10%
                        </span>
                    </p>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-hold'>$1,270,800</p>
                    <p className='text-gray-600'>Yearly Revenue</p>
                    <p className='bg-green-200 flex justify-center items p-2 rounded-lg'>
                        <span className='text-green-700 text-lg '>
                            +11%
                        </span>
                    </p>
                </div>
            </div>
            <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-hold'>11,800</p>
                    <p className='text-gray-600'>Total Customers</p>
                    <p className='bg-green-200 flex justify-center items p-2 rounded-lg'>
                        <span className='text-green-700 text-lg '>
                            +12%
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopCards