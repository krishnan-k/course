import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const Topic = ({ title }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="topic">
            {title}
            <div className="dropdown-content">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
                <a href="#">View</a>
            </div>
        </div>
    )
}

export default Topic
