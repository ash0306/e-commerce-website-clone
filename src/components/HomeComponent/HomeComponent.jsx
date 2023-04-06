import React from 'react'
import './HomeComponent.css'
import ProductComponent from '../ProductComponent/ProductComponent'
import Products from '../../products.json'

function HomeComponent() {
  return (
    <div className="home">
    <div className="home_container">
      <div className='home_header'>
      <img
        className="home_banner"
        src="banner.avif"
        alt="banner"
      />
      <h3 className='home_caption'>✨A book is a dream that <br/>you hold in your hand✨</h3>
      </div>

      <div className='home_content'>
        {
          Products.map((product) => <div key={product.id}>
            <ProductComponent
              pname={product.pname}
              price={product.price}
              image={product.image}
              id={product.id}
              rating={product.rating}
              description={product.description}
            />
            </div>)
        } 
      </div>      
    </div>
  </div>
  )
}

export default HomeComponent