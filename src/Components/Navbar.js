import React  from 'react';
import Contact from '../Pages/Contact'; 
import AboutUs from '../Pages/About';
import Home from '../Pages/Home';

import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css';

//HOOK - reusable functions that provide access to state in React Applications
//- useAuth0()
//Note: Hooks will not work in React class components.


const Navbar = ({size}) => {      //arrow function syntax to encapsulate the components code 
  const { logout } = useAuth0();// helps in logging out of user from authentication system
  const { loginWithRedirect } = useAuth0();//initiates login flow using redirect
  const {isAuthenticated ,user } =useAuth0();//boolean - if user logged in , user - object with user information
  const isHomePage = window.location.pathname === '/';// checks for the current url path as home
    const Button = (props) => <button className="btn btn-primary" style={{ backgroundColor: 'rgb(211, 215, 178)', color: 'Black', padding: '5px 10px' }} {...props} />;
return (
  <>
    <nav>
      <div className="nav-brand">
        <a href="/">ℝ𝔼𝔸𝔻𝔼𝔸𝕊𝕐</a>
      </div>
      <ul className="nav-menu">
      <nav className={`navbar ${isHomePage ? '/Home' : ''}`}/>
      <li><a href='/'><i class="fa fa-home ghar" aria-hidden="true"></i> Home</a></li>
      <li><a href='/About'><i class="fa fa-users hum" aria-hidden="true"></i>About Us</a></li>
      <li><a href='/Contact'><i class="fa fa-phone community" aria-hidden="true"></i>Contact</a></li>
      


      
        {isAuthenticated && (
          <li> <p> {user.name}
        </p> 
      </li>
        )}
        { isAuthenticated ? (
        <li>
           <Button
            onClick={() => logout({ returnTo: window.location.origin  })}>
      Log Out
    </Button>
     </li>) :(  <li><Button onClick={() => loginWithRedirect()}>Log In</Button></li>)
}

      </ul>
    </nav>
      <h1></h1>
    </>
  );
};


export default Navbar;


