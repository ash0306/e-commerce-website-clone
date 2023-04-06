import React from 'react'
import './MainCheckoutComponent.css'
import CheckoutComponent from '../CheckoutComponent/CheckoutComponent'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { Link } from 'react-router-dom';

function MainCheckoutComponent() {
  const [{basket}] = useStateValue();
  return (
    <div className='main_checkout'>
      <HeaderComponent/>
      <div className='check_left'>
        <h1>Your Basket</h1>
        <br/>
        {
          basket.map(product =>(
            <CheckoutComponent
              id={product.id}
              pname={product.pname}
              price={product.price}
              image={product.image}
            />
          ))
        }
      </div>
      <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) =>(
            <>
              <p>Subtotal({basket.length} product) : {value}</p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rs.'}
        />
        <button><Link to={'/shipping'} className='confirm_btn'> Confirm Order </Link></button>
      </div>
    </div>
  )
}

export default MainCheckoutComponent