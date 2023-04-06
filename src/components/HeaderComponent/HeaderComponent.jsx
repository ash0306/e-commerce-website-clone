import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderComponent.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'


function HeaderComponent(id) {
  const [{basket, user}, dispatch] = useStateValue();
  const clearDesc = () =>{
    dispatch({
      type: 'CLEAR_DESCRIPTION',
      id: id
    })
  }

  return (
    <div className="header">
      <Link to='/' onClick={clearDesc}>
        <img
          className="logo"
          src="logo.png"
        />
      </Link>
      

      <div className="searchbar">
        <input className="searchInput" type="text" placeholder='Search for books...'/>
        <SearchIcon className="searchIcon" />
      </div>

      <div className="navbar">
        <Link to={!user && '/login'}>
        <div className="options">
            <span className="lineOne">Hello {!user ? 'Guest' : 'User'}</span>
            <span className="lineTwo">{!user ? 'Sign In' : 'Sign Out'}</span>
        </div>
        </Link>
        <div className="options">
            <span className="lineOne">Returns</span>
            <span className="lineTwo">& Orders</span>
        </div>

        <Link to='/checkout'>  
        <div className="Basket">
            <ShoppingBasketIcon />
            <span className="lineTwo basketCount">
              {basket?.length}
            </span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent