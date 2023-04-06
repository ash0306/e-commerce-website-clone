import React from 'react'
import './DetailsComponent.css'
import { useStateValue } from '../../StateProvider'
import { useNavigate } from 'react-router-dom';
import Products from '../../products.json'

function DetailsComponent({id,pname,author,price,image,rating,description}) {
    const navigate = useNavigate();
    const [{details}, dispatch] = useStateValue();
    
    const addToBasket = (pname) => { 
        alert(`${pname} added to basket`)
        dispatch({
            type: 'ADD_TO_BASKET',
            product: {
                id: id,
                pname: pname,
                image: image,
                price: price,
                author: author,
                rating: rating,
                description: description
            },
        });
    };
    const addToWishlist = (pname) => { 
        alert(`${pname} added to wishlist`)
        dispatch({
            type: 'ADD_TO_WISHLIST',
            product: {
                id: id,
                pname: pname,
                image: image,
                price: price,
                author: author,
                rating: rating,
                description: description
            },
        });
    };
  return (
    <div className='details'>
        <div className='details_left'><img className='details_img' src={image} alt='product'/></div>
        <div className='details_info'>
            <p className='details_name'>{pname}</p>
            <p className='details_author'>{author}</p>
            <p className='details_price'>Rs.{price}</p>
            <div className='details_rating'>Rating:{Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>
                    ))}
            </div><br/>
            <p className='details_desc'>{description}</p><br/><br/>
            <button onClick={() => addToBasket (pname)}>Add to Basket</button>
            <button onClick={() => addToWishlist (pname)}>Add to Wishlist</button>
        </div>
    </div>
  )
}

export default DetailsComponent