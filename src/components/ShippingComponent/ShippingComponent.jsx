import React from 'react'
import './ShippingComponent.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { Link } from 'react-router-dom';

function ShippingComponent() {
    const [{basket}] = useStateValue();
  return (
    <React.Fragment>
        <HeaderComponent/>
        <h1 className='heading'>Shipping and Payment Details</h1>
        <br/><br/>
        <div className="shipping_details">
            <h3>Shipping Details</h3>
            <br/>
            <label>Address : </label><br/>
            <textarea className="address" placeholder='Enter your address ...' required/><br/><br/>
            <label>Phone Number : </label><br/>
            <input type="number" className="phone" required/><br/><br/><br/>
        </div>
        <div className='payment_details'>
            <h3>Payment Details</h3><br/>
            <input type="radio" className="cod" required/>
            <label>   Cash on Delivery</label><br/>
            <CurrencyFormat className='payment_amt'
                renderText={(value) =>(
                <>
                    <h2>Total({basket.length} product) : {value}</h2>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rs.'}
            /><br/><br/>
            <button><Link to={'/order'} className='order_btn'> Place Order </Link></button>
        </div>
    </React.Fragment>
  )
}

export default ShippingComponent