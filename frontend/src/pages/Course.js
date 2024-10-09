import React, { useEffect, useState } from 'react'
import { FaHome, FaPlus, FaUser } from "react-icons/fa";
import { IoIosBookmarks, IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
const Course = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courseget")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  })

  return (
    <div className="pannel">
      <div className='admin_pannel_menu'>
        <ul>
          <li><Link to='/'><FaHome /> Home</Link></li>
          <li><IoMdSettings /> settings</li>
          <li><FaUser />profile</li>
        </ul>
      </div>
      <div className='course-details-data'>
        {courseData.map((item) => (
          <div key={item._id}>
            <div className='details-content'>
              <h2 className='title course-title'>{item.formTitle}
                <Link to='/chapter'><FaPlus /></Link>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Course
