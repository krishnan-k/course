import React, { useEffect, useState } from 'react';
import '../components-css/navbar.css';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
const Navbar = () => {
    const [userLogin, setUserLogin] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    // handle Google Login
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            localStorage.setItem('access_token', codeResponse.access_token);
            fetchUserData(codeResponse.access_token);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const fetchUserData = (token) => {
        axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            })
            .then((res) => {
                setUserLogin(res.data);
                localStorage.setItem('userLogin', JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem('access_token');
            });
    };

    // login to access the token
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const savedUserLogin = localStorage.getItem('userLogin');

        if (accessToken && savedUserLogin) {
            setUserLogin(JSON.parse(savedUserLogin));
        } else if (accessToken) {
            fetchUserData(accessToken);
        }
    }, []);

    // Log out and remove token
    const logOut = () => {
        googleLogout();
        setUserLogin(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('userLogin')
    };

    return (
        <div className='nav-section'>
            <div className='container'>
                <div className='logo'>
                    <img className='logo-image' src={logo} alt='logo' />
                </div>
                <button className='drawer-toggle' onClick={toggleDrawer}>
                    <BiMenu />
                </button>
                <div className={`nav-content ${drawerOpen ? 'open' : ''}`}>
                    <button className='drawer-close' onClick={toggleDrawer}>
                        <IoClose />
                    </button>
                    <ul className='navbar-section'>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/course'>course</Link></li>
                        <li><Link to='/admin'>admin</Link></li>
                    </ul>
                </div>
                <div className='profile'>
                    {userLogin ? (
                        <div className='logged-in'>

                            {userLogin.picture ? (
                                <img
                                    src={userLogin.picture}
                                    alt='User profile'
                                    className='profile-picture'
                                />
                            ) : (
                                <FaUser />
                            )}
                            <span>{userLogin.name}</span>
                            <button className='logout' onClick={logOut}>Log out</button>
                        </div>
                    ) : (
                        <div className='logged-out'>
                            <FaUser />
                            <button className='login' onClick={() => login()}>Login</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
