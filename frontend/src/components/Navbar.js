import React from 'react'
import '../components-css/navbar.css'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='nav-section'>
            <div className='container'>
                <div className='nav-content'>
                    <div className='logo'>
                        <img className='logo-image' src={logo} alt='logo' />
                    </div>
                    <ul className='navbar-section'>
                        <li><Link to='/home'>home</Link></li>
                        <li><Link to='/course'>course</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar
