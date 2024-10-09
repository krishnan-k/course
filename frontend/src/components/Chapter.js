import React, { useState } from 'react';
import Topic from './Topic';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Chapter = ({ title, topics }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChapter = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="chapter">
            <div className="chapter-header" onClick={toggleChapter}>
                <h2>{title}{isOpen ? <FaMinus/> : <FaPlus />}</h2>
            </div>

            {isOpen && (
                <div className="chapter-content">
                    {topics.map((topic, index) => (
                        <Topic key={index} title={topic} />
                    ))}
                    
                </div>
            )}
        </div>
    );
}

export default Chapter;
