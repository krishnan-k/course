import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHome, FaPlus, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = () => {
  const [courseData, setCourseData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [openChapters, setOpenChapters] = useState({});
  const [visibleTopics, setVisibleTopics] = useState({});

  // Fetch course data
  useEffect(() => {
    fetch("http://localhost:5000/courseget")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  // Fetch chapter data 
  useEffect(() => {
    fetch("http://localhost:5000/chapterget")
      .then((res) => res.json())
      .then((data) => setChapterData(data));
  }, []);

  // Fetch Topic data
  useEffect(() => {
    fetch("http://localhost:5000/topicget")
      .then((res) => res.json())
      .then((data) => setTopicData(data));
  }, []);

  //Particular chapter select
  const toggleChapter = (courseId, chapterIndex) => {
    setOpenChapters((prevState) => ({
      ...prevState,
      [courseId]: {
        ...prevState[courseId],
        [chapterIndex]: !prevState[courseId]?.[chapterIndex]
      }
    }));
  };

  //particular topic select
  const toggleTopic = (courseId, chapterIndex, topicIndex) => {
    setVisibleTopics((prevState) => {
      const currentChapter = prevState[courseId]?.[chapterIndex] || {};
      const updatedTopics = {
        ...currentChapter,
        [topicIndex]: !currentChapter[topicIndex]
      };

      return {
        ...prevState,
        [courseId]: {
          ...prevState[courseId],
          [chapterIndex]: updatedTopics
        }
      };
    });
  };

  //Chapter delete
  const deleteChapter = (id) => {
    fetch(`http://localhost:5000/deletechapter/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((req) => req.json())
      .then((data) => {
        toast.error('Delete Successfully', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setChapterData(previousValue => previousValue.filter(item => item._id !== id));
      });
  };

  //Topic delete
  const deleteTopic = (id) => {
    fetch(`http://localhost:5000/deletetopic/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((req) => req.json())
      .then((data) => {
        toast.error('Delete Successfully', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTopicData(previousValue => previousValue.filter(item => item._id !== id));
      });
  };

  return (
    <div className="pannel">
      <div className='admin_pannel_menu'>
        <ul>
          <li><Link to='/'><FaHome /> Home</Link></li>
          <li><IoMdSettings /> Settings</li>
          <li><FaUser />Profile</li>
        </ul>
      </div>
      <div className='course-details-data'>
        {courseData.map((course) => (
          <div key={course._id}>
            <div className='details-content'>
              <h2 className='title course-title'>{course.formTitle}</h2>
              <div className="chapters-container">
                {chapterData.length === 0 ? (
                  <h2 className='empty-chapter'>
                    Course chapter empty
                    <Link to='/coursechapter' className='create-chapter-info'>Create chapter</Link>
                  </h2>
                ) : (
                  chapterData.map((chapterItem, chapterIndex) => (
                    <div key={chapterItem._id}>
                      <h3>
                        {chapterItem.chapterTitle}
                        <div className='top-edit-content'>
                          <div className='delete-chapter-btn' onClick={() => deleteChapter(chapterItem._id)}>
                            <MdDelete />
                          </div>
                          <Link to={`/chapterupdate/${chapterItem._id}`}>
                            <MdEdit />
                          </Link>
                          <Link to='/coursechapter' className='tooltip-info'>
                            <FaPlus /><span className='create-chapter'>Create Chapter</span>
                          </Link>
                          <div className='chapter-open' onClick={() => toggleChapter(course._id, chapterIndex)}>
                            {openChapters[course._id]?.[chapterIndex] ? <FaChevronUp /> : <FaChevronDown />}
                          </div>
                        </div>
                      </h3>
                      {openChapters[course._id]?.[chapterIndex] && (
                        <div className="course-details">
                          {topicData.length === 0 ? (
                            <h2 className='empty-chapter'>
                              Course Topic empty
                              <Link to='/coursetopic' className='create-chapter-info'>Create course</Link>
                            </h2>
                          ) : (
                            topicData.map((topic, topicIndex) => (
                              <div className="topic-heading" key={topicIndex}>
                                <h4>
                                  {topic.topicTitle}
                                  <div className='topic-content'>
                                    <div className='delete-topic-btn' onClick={() => deleteTopic(topic._id)}>
                                      <MdDelete />
                                    </div>
                                    <Link to={`/topicupdate/${topic._id}`}>
                                      <MdEdit />
                                    </Link>
                                    <Link to='/coursetopic' className='tooltip-info'>
                                      <FaPlus /><span className='create-chapter'>Create Topic</span>
                                    </Link>
                                    <div className='topic-open' onClick={() => toggleTopic(course._id, chapterIndex, topicIndex)}>
                                      {visibleTopics[course._id]?.[chapterIndex]?.[topicIndex] ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                  </div>
                                </h4>
                                {visibleTopics[course._id]?.[chapterIndex]?.[topicIndex] && (
                                  <p className="description">{topic.topicDesc}</p>
                                )}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer autoClose={1000} position="bottom-center" />
    </div>
  );
};

export default Course;
