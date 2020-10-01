import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route , Switch  , Link} from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import Navbar from './components/NavBar'

function App() {
  return (
    <Router>
      <React.Fragment>
       
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/Dashboard/" component={Dashboard}/>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;


const Home =()=>{
  return(
    <div className="text-center mt-3">
       <h1>Techno Reactjs Assignment</h1>
        <div className="mt-5">
          <button className="btn btn-primary mr-3" ><Link to="Login" className="nav-links text-white">Login</Link></button>
          <button className="btn btn-primary"><Link to="SignUp" className="nav-links text-white">SignUp</Link></button>
        </div>
    </div>  
  )
}
