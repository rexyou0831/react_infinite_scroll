import React from 'react';
import { FaUserCircle } from "react-icons/fa";


const Items = ({ data }) => {

    const style = {
        border: "1px solid blue",
        margin: 12,
        padding: 8
    }

    return (
        <div style={ style }>
            <div>
                <FaUserCircle className='text-white text-7xl' />
            </div>
            <div>
                <span>{ data.first_name + " " + data.last_name }</span>
                <span>{ data.age }</span>
                <span className='overflow-hidden text-ellipsis'>{ data.email }</span>
            </div>
        </div>
    )
}

export default Items