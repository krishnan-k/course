import React from 'react'

const Topic = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="topic">
            {title}
            <button className="dropdown-btn" onClick={toggleDropdown}>
                Options ▼
            </button>

            {isDropdownOpen && (
                <div className="dropdown-content">
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    <a href="#">View</a>
                </div>
            )}
        </div>
    )
}

export default Topic
