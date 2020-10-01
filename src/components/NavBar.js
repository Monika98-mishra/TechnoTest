import React,{Component} from 'react'
import {Link} from 'react-router-dom'



class Navbar extends Component{



     render(){
          return(
               <nav className="nav">
                 <Link to="LogIn" >LogIn</Link>
                 <Link to="SignUp">SignUp</Link>
               </nav>
          )
     }
}

export default Navbar;