import React from 'react'
import Admin from './Admin';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Coursechapter = () => {
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
                toast.success('Course Added Successfully', {
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
                form.reset();
                window.location.href = "/course"
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
            <ToastContainer autoClose={1000} position="bottom-center" />
        </div>
    )
}

export default Coursechapter
