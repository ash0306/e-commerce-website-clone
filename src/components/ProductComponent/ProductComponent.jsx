import React from 'react'
import './ProductComponent.css'


function ProductComponent({id,pname,image,price,rating}) {
  return (
    <div className='product'>
            <img src={image}
            alt='product'/>
        <div className='product_info'>
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
        <button>Add to Basket</button>
        
    </div>
  )
}

export default ProductComponent