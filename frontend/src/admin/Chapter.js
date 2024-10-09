import React from 'react'
import Admin from './Admin';

const Chapter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const chapterTitle = form.chapterTitle.value;
        const formDesc = form.formDesc.value;
        const formData = { chapterTitle, formDesc }
        console.log(formData);

        fetch("http://localhost:5000/chapter", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                alert('Courser Added Successfully')
                form.reset();
            })
    }
    return (
        <div className='pannel'>
            <Admin />
            <div className="form-control-section">
                <form onSubmit={handleSubmit}>
                    <div className='form-content'>
                        <div className='left-content'>
                            <h5>Course information</h5>
                            <div className="form_title mb-3">
                                <label value="chapterTitle" className="text-capitalize mb-1 form-label">
                                    Title
                                </label>
                                <input
                                    className="text-capitalize"
                                    type="text"
                                    id="chapterTitle"
                                    name="chapterTitle"
                                    placeholder="Introduction to Data Analysis"
                                    required
                                />
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
                </form>
            </div>
        </div>
    )
}

export default Chapter
