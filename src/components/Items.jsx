import React from 'react';
import { FaUserCircle } from "react-icons/fa";


const Items = ({ data }) => {

    return (
        <div className="max-w-sm h-50 p-6 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-2xl flex mx-auto justify-center my-8">
            <div className='flex items-center justify-center h-30 w-2/6'>
                <FaUserCircle className='text-white text-7xl' />
            </div>
            <div className='flex justify-center h-30 flex-col w-4/6 ml-3 text-white text-md'>
                <span>{ data.first_name + " " + data.last_name }</span>
                <span>{ data.age }</span>
                <span className='overflow-hidden text-ellipsis'>{ data.email }</span>
            </div>
        </div>
    )
}

export default Items