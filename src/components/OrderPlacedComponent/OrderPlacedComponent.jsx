import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Link } from 'react-router-dom'
import './OrderPlacedComponent.css'

function OrderPlacedComponent() {
  return (
    <>
    <HeaderComponent/>
    <div className='order_placed'>
        <img className='success_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/800px-Eo_circle_green_checkmark.svg.png"
         alt= 'success'/>
        <br/>
        <br/>
        <div className='success_text'>
            <h1>Your order has been placed!!</h1>
            <br/>
            <Link className='home_link' to={'/'}>Click to continue to homepage</Link>
        </div>
    </div>
    </>
  )
}

export default OrderPlacedComponent