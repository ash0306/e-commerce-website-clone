import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
  const [dispatch] = useStateValue();

  useEffect (() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

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
          <Route exact path="/" element={<><HeaderComponent/><HomeComponent/></>}></Route>
          <Route exact path="/login" element={<LoginComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
