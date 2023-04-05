import React from 'react'
import './HeaderComponent.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function HeaderComponent() {
  return (
    <div className="header">
        <img
          className="logo"
          src="https://www.littsburgh.com/wp-content/uploads/2020/12/spark-books-logo-01-300x300.png"
        />
      

      <div className="searchbar">
        <input className="searchInput" type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="navbar">
        <div className="options">
            <span className="lineOne">Hello User</span>
            <span className="lineTwo">Sign In</span>
        </div>
        <div className="options">
            <span className="lineOne">Returns</span>
            <span className="lineTwo">& Orders</span>
        </div>
        <div className="Basket">
            <ShoppingBasketIcon />
            <span className="lineTwo basketCount">
              0
            </span>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent