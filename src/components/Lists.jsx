import React from 'react';
import Items from './Items';

const Lists = ({ dataSource }) => {

    return (
        dataSource.map((data, index)=>{
            return <Items data={ data } key={ index }/>
        })
    )
}

export default Lists