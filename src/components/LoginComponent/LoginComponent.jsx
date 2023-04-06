import React, {useState} from 'react'
import './LoginComponent.css'
import {useNavigate} from 'react-router-dom'
import { auth } from '../../firebase';


function LoginComponent() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
            navigate('/')
        })
        .catch(error =>alert (error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            if(auth){
                navigate('/')
            }
        })
        .catch(error =>alert (error.message))
    }

  return (
    <div className='container'>
    <div className='login'>
        <img className='login_logo' src='logo.png' alt='logo'/>
        <div className='login_content'>
            <h1>Login</h1>
            <br/>
            <form>
                <h3>E-Mail: </h3>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='Username or e-mail'/>
                <h3>Password: </h3>
                <input type='password' value={password} onChange={e =>setPassword(e.target.value)} placeholder='Password'/>
                <br/><br/>
                <button onClick={'signIn'} type='submit' className='login_btn'>Login</button>
            </form>
            <p className='register'>Don't have an account?<br/><button onClick={register} className='reg_btn'>Register</button></p>
        </div>
    </div>
    </div>
  )
}

export default LoginComponent