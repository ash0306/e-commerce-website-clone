import React from 'react'
import './LogoutComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'

function LogoutComponent() {
    const [{user},dispatch] = useStateValue();
    const delete_user = () => {
        dispatch({
            type: 'DELETE_USER',
            user: false
        })
        alert('Successfully Logged out');
    }
  return (
    <React.Fragment>
        <HeaderComponent/>
        <div className='logout'>
            <div className='logout_content'>
                <h1>Logout</h1>
                <br/>
                <button type='submit' onClick={() => delete_user()}><Link to='/' className='logout_btn'>Logout</Link></button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default LogoutComponent