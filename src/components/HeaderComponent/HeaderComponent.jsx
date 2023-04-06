import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderComponent.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'


function HeaderComponent(id) {
  const [{basket, user, details}, dispatch] = useStateValue();
  const clearDesc = () =>{
    dispatch({
      type: 'CLEAR_DESCRIPTION',
      id: id
    })
  }
  const handleAuth = () => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to='/' onClick={clearDesc}>
        <img
          className="logo"
          src="https://www.littsburgh.com/wp-content/uploads/2020/12/spark-books-logo-01-300x300.png"
        />
      </Link>
      

      <div className="searchbar">
        <input className="searchInput" type="text" placeholder='Search for books...'/>
        <SearchIcon className="searchIcon" />
      </div>

      <div className="navbar">
        <Link to={!user && '/login'}>
        <div onClick={handleAuth} className="options">
            <span className="lineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="lineTwo">{user ? 'Sign In' : 'Sign In'}</span>
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