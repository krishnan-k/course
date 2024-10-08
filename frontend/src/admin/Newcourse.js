import React, { useState } from 'react'
import Admin from './Admin'
import Select from "react-dropdown-select";
const Newcourse = () => {
    const options = [
        {
            value: 1,
            label: 'Data Analysis'
        },
        {
            value: 2,
            label: 'MERN stack developer'
        },
        {
            value: 3,
            label: 'Fullstack developer'
        },
        {
            value: 4,
            label: 'Software testing'
        }
    ];
    const levels = [
        {
            value: 5,
            label: "Basic"
        },
        {
            value: 6,
            label: "Intermediate"
        },
        {
            value: 7,
            label: "Advanced"
        }
    ];

    const [selectOption, setselectOption] = useState(options[0]);
    const [selectLevel, setSelectLevel] = useState(levels[0]);
    const handleChange = (value) => {
        setselectOption(value)
    }
    const handleLevelChange = (value) => {
        setSelectLevel(value);
    };
    return (
        <div className='pannel'>
            <Admin />
            <div className="form-control-section">
                <form>
                    <div className='form-content'>
                        <div className='left-content'>
                            <h5>Course information</h5>
                            <div className="form_title mb-3">
                                <label value="formTitle" className="text-capitalize mb-1 form-label">
                                    Title
                                </label>
                                <input
                                    className="text-capitalize"
                                    type="text"
                                    id="formTitle"
                                    name="formTitle"
                                    placeholder="Introduction to Data Analysis"
                                    required
                                />
                            </div>
                            <div className='select-category'>
                                <div className="form_category mb-3">
                                    <label value="category" className="text-capitalize mb-1 form-label">
                                        category
                                    </label>
                                    <Select
                                        className='dropdown-list'
                                        name='category'
                                        options={options}
                                        onChange={handleChange}
                                        values={selectOption ? [selectOption] : []}
                                        required
                                         />
                                </div>
                                <div className="form_level mb-3">
                                    <label value="level" className="text-capitalize mb-1 form-label">
                                        Level
                                    </label>
                                    <Select
                                        className='dropdown-list'
                                        name='level'
                                        options={levels}
                                        onChange={handleLevelChange}
                                        values={selectLevel ? [selectLevel] : []}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form_description mb-3">
                                <label value="formDesc" className="text-capitalize mb-1 form-label">
                                    Description
                                </label>
                                <textarea
                                    className="text-capitalize"
                                    id="formDesc"
                                    text="formDesc"
                                    placeholder="enter your description"
                                    required
                                ></textarea>
                                <label value="formDesc" className="text-capitalize mb-1 area-label">
                                    0/2000 characters
                                </label>
                            </div>
                            <div className="form_title mb-3">
                                <label value="formQuery" className="text-capitalize mb-1 form-label">
                                    Frequently asked questions
                                </label>
                                <input
                                    className="text-capitalize"
                                    type="text"
                                    id="formQuery"
                                    name="formQuery"
                                    placeholder="Introduction to Data Analysis"
                                />
                            </div>
                            <div className='form-button'>
                                <div className='save-draft-button'>
                                    <button
                                        className="text-capitalize save-draft"
                                        type="button"
                                    >
                                        save as draft
                                    </button>
                                </div>
                                <div className='save-draft-button'>
                                    <button
                                        className="text-capitalize save-continue"
                                        type="submit"
                                    >
                                        save & continue
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className="upload-img mb-3">
                                <label value="img" className="text-capitalize mb-1 form-label">
                                    cover image
                                </label>
                                <input
                                    className="text-capitalize input-file"
                                    type="file"
                                    id="img"
                                    name="img"
                                    accept="image/*"
                                    placeholder="add your Img url here"

                                />
                            </div>
                            <div className="upload-video mb-3">
                                <label value="img" className="text-capitalize mb-1 form-label">
                                    sales video
                                </label>
                                <input
                                    className="text-capitalize input-file"
                                    type="file"
                                    id="img"
                                    name="img"
                                    accept="image/*"
                                    placeholder="add your Img url here"

                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newcourse
