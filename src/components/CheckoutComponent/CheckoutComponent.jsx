import React from 'react'
import './CheckoutComponent.css'
import { useStateValue } from '../../StateProvider'
import { useNavigate } from 'react-router-dom';

function CheckoutComponent({id,pname,price,image,hideButton}) {
    const navigate = useNavigate();
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

  return (
    <div className='checkout'>
        <img className='product_img' src={image} alt='product'/>
        <div className='product_info'>
            <p>{pname}</p>
            <p>Rs.{price}</p><br/>
            {!hideButton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
        </div>
    </div>
  )
}

export default CheckoutComponent