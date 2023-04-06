import React from 'react'
import './MainWishlistComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import WishlistComponent from '../WishlistComponent/WishlistComponent'
import Products from '../../products.json'
import { useStateValue } from '../../StateProvider'

function MainWishlistComponent() {
    const [{wishlist}] = useStateValue();
  return (
    <React.Fragment>
        <HeaderComponent/>
        <div className='wishlist'>
        <h1>Your Wishlist</h1>
        <br/>
        {
          wishlist.map(product =>(
            <WishlistComponent
              id={product.id}
              pname={product.pname}
              price={product.price}
              image={product.image}
            />   
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default MainWishlistComponent