import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import Items from './Items';

const Lists = ({ dataSource }) => {

    const style = {
        border: "1px solid blue",
        margin: 12,
        padding: 8
    }

    return (
        dataSource.map((data, index)=>{
            return <Items data={ data } key={ index }/>
        })
    )
}

export default Lists