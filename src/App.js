import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import MainCheckoutComponent from './components/MainCheckoutComponent/MainCheckoutComponent';
import OrderPlacedComponent from './components/OrderPlacedComponent/OrderPlacedComponent';
import DisplayDetailsComponent from './components/DisplayDetailsComponent/DisplayDetailsComponent';
import ShippingComponent from './components/ShippingComponent/ShippingComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import MainWishlistComponent from './components/MainWishlistComponent/MainWishlistComponent';
import LogoutComponent from './components/LogoutComponent/LogoutComponent';


function App() {
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
          <Route exact path='/wishlist' element={<MainWishlistComponent/>}/>
          <Route exact path='/logout' element={<LogoutComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
