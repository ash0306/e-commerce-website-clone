import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import MainCheckoutComponent from './components/MainCheckoutComponent/MainCheckoutComponent';
import OrderPlacedComponent from './components/OrderPlacedComponent/OrderPlacedComponent';
import DisplayDetailsComponent from './components/DisplayDetailsComponent/DisplayDetailsComponent';
import ShippingComponent from './components/ShippingComponent/ShippingComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';


function App() {
  const [dispatch] = useStateValue();

  useEffect (() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route exact path="/login" element={<LoginComponent/>}/>
          <Route exact path='/register' element={<RegisterComponent/>}/>
          <Route exact path='/checkout' element={<MainCheckoutComponent/>}/>
          <Route exact path="/order" element={<OrderPlacedComponent/>}/>
          <Route exact path='/details' element={<DisplayDetailsComponent/>}/>
          <Route exact path='/shipping' element={<ShippingComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
