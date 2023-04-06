import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import DetailsComponent from '../DetailsComponent/DetailsComponent';
import { useStateValue } from '../../StateProvider'

function DisplayDetailsComponent() {
    const [{details},dispatch] = useStateValue();
  return (
    <React.Fragment>
        <HeaderComponent/>
        <div className='display_details'>
            <h1>Book Details</h1><br/><br/>
        {
          details.map(product =>(
            <DetailsComponent
              id={product.id}
              pname={product.pname}
              author={product.author}
              price={product.price}
              image={product.image}
              rating={product.rating}
              description={product.description}
            />
          ))
        }
        </div>
    </React.Fragment>
  )
}

export default DisplayDetailsComponent