import React, { useState } from 'react'
import Products from '../../products.json'
import { Link } from 'react-router-dom'
import './HeaderComponent.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'
import FavoriteIcon from '@material-ui/icons/Favorite'


function HeaderComponent(id) {
  const [{basket, user}, dispatch] = useStateValue();
  // const [query, setQuery] = useState("");
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
        {/* {Products.filter(post => {
          if(query === ""){
            return post;
          }
          else if(post.pname.toLowerCase().includes(query.toLowerCase())){
            return post;
          }
        }).map((post,id) => (
          <div className='searchbox' key={id}>
            <p>{post.pname}</p>
          </div>
        ))
        } */}
      </div>

      <div className="navbar">
        <Link to={!user ? '/login' : '/logout'}>
        <div className="options">
            <span className="lineOne">Hello {!user ? 'Guest' : 'User'}</span>
            <span className="lineTwo">{!user ? 'Sign In' : 'Sign Out'}</span>
        </div>
        </Link>

        <Link to='/wishlist'>
        <div className="options">
            <FavoriteIcon/>
        </div>
        </Link>

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