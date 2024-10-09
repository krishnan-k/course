import React, { useEffect, useState } from 'react';
import Admin from './Admin';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
const Topicupdate = () => {
    const { id } = useParams();
    const [topicUpdate, setTopicUpdate] = useState({
        topicTitle: '',
        topicDesc: '',
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/topview/${id}`)
            .then((res) => res.json())
            .then((data) => setTopicUpdate(data))
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const topicTitle = form.topicTitle.value;
        const topicDesc = form.topicDesc.value;
        const formData = { topicTitle, topicDesc }

        fetch(`http://localhost:5000/topicupdate/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Product updated successfully')
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
                                <label value="topicTitle" className="text-capitalize mb-1 form-label">
                                    Title
                                </label>
                                <input
                                    className="text-capitalize"
                                    type="text"
                                    id="topicTitle"
                                    name="topicTitle"
                                    placeholder="Introduction to Data Analysis"
                                    defaultValue={topicUpdate.topicTitle}
                                    required
                                />
                            </div>
                            <div className="form_description mb-3">
                                <label value="topicDesc" className="text-capitalize mb-1 form-label">
                                    Description
                                </label>
                                <textarea
                                    className="text-capitalize"
                                    id="topicDesc"
                                    text="topicDesc"
                                    placeholder="enter your description"
                                    defaultValue={topicUpdate.topicDesc}
                                    required
                                ></textarea>
                                <label value="topicDesc" className="text-capitalize mb-1 area-label">
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

export default Topicupdate
