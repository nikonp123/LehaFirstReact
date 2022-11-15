import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";

import './style.scss'

function Navbar(props) {

  const {isAuth,setIsAuth} = useContext(AuthContext);

  const logoutHandler = e => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

    return (
      <div className='navbar'>
        <div className='navbar__links'>
          <Link className='navbar__link' to='/about'>About site</Link>
          <Link className='navbar__link' to='/posts'>Posts' site</Link>
          <Link className='navbar__link' to='/login'>Login</Link>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    );
}

export default Navbar;