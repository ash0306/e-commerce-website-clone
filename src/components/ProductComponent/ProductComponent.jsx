import React, { useState } from 'react'
import './ProductComponent.css'
import {useStateValue} from '../../StateProvider';

function ProductComponent({id,pname,image,price,rating,description}) {
    const [isHover, setIsHover] = useState(false);
    
    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

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
    <div className='product' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
        <button onClick={() => addToBasket (pname)}>Add to Basket</button>
    </div>
    {/* {isHover ? <div className='desc'><p>{description}</p></div>:null} */}
    </React.Fragment>
  )
}

export default ProductComponent