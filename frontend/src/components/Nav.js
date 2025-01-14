import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../images/v.png';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div className='navbar-container'>
            {/* <img alt="logo" className="logo" src={logo} /> */}
            {
                auth ?
                    <ul className="nav-ul">
                        <li><Link to="/">Prescriptions</Link></li>
                        <li><Link to="/add">Add Item</Link></li>
                        <li><Link to="/update">Update Item</Link></li>
                        <li><Link to="/profile">Profile ({JSON.parse(auth).name}) </Link></li>
                        <li><Link onClick={logout} to="/login">Logout</Link> </li>
                    </ul>
                    :
                    <ul className="nav-ul nav-not-logged-in">
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }

        </div>
    )
}

export default Nav;