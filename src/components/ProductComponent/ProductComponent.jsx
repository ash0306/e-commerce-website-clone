import React, { useState } from 'react'
import './ProductComponent.css'
import {useStateValue} from '../../StateProvider';
import { Link } from 'react-router-dom';

function ProductComponent({id,pname,author,image,price,rating,description}) {

    const [{basket},dispatch] = useStateValue();

    const showDesc = (pname) =>{
        dispatch({
            type: 'SHOW_DESCRIPTION',
            product: {
                id: id,
                pname: pname,
                image: image,
                price: price,
                rating: rating,
                author: author,
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
                <Link className='product_desc'>{pname}</Link>
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
            <button onClick={() => showDesc(pname)}><Link className='product_link' to={'/details'}>View Details</Link></button>
    </div>
    </React.Fragment>
  )
}

export default ProductComponent