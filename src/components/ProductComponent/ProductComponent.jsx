import React, { useState } from 'react'
import './ProductComponent.css'
import {useStateValue} from '../../StateProvider';

function ProductComponent({id,pname,image,price,rating,description}) {

    const [{basket},dispatch] = useStateValue();

    const addToBasket = (pname) => {
        alert(`${pname} added to basket`)
        dispatch({
            type: 'ADD_TO_BASKET',
            product: {
                id: id,
                pname: pname,
                image: image,
                price: price,
                rating: rating,
                description: description
            },
        });
    };

  return (
    <React.Fragment>
    <div className='product'>
            <img src={image}
            alt='product'/>
            <div className='product_inf'>
                <p>{pname}</p>
                <p className='product_price'>
                <strong>Rs.{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>
                    ))}
                </div>
            </div><br/>
        <button onClick={() => addToBasket (pname)}>Add to Basket</button>
    </div>
    </React.Fragment>
  )
}

export default ProductComponent