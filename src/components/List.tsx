import React from 'react';

function List(){

    const products = [
        { title:'Beef', isMeat: true, id: 1 },
        { title:'Chicken', isMeat: true, id: 2 },
        { title:'Tomato', isMeat: false, id: 3 },
    ];

    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{ color: product.isMeat ? 'purple' : 'red' }}
        >
            {product.title}
        </li>
        );
    
    return (
        <ul>{listItems}</ul>
    );
}
export default List;