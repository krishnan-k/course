import React from 'react'
import '../components-css/admin.css'
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosBookmarks,IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='admin_pannel_dashboard'>
            <div className='admin_pannel_menu'>
                <ul>
                    <li><Link to='/'><FaHome /> Home</Link></li>
                    <li><Link to='/newcourse'><IoIosBookmarks /> My course</Link> </li>
                    <li><IoMdSettings /> settings</li>
                    <li><FaUser />profile</li>
                </ul>
            </div>
        </div>
    )
}

export default Admin
