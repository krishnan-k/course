import React, { useEffect, useState } from 'react';
import Admin from './Admin';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
const Chapterupdate = () => {
    const { id } = useParams();
    const [chapterUpdate, setchapterUpdate] = useState({
        chapterTitle: '',
        formDesc: '',
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/chapterview/${id}`)
            .then((res) => res.json())
            .then((data) => setchapterUpdate(data))
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const chapterTitle = form.chapterTitle.value;
        const formDesc = form.formDesc.value;
        const formData = { chapterTitle, formDesc }

        fetch(`http://localhost:5000/chapterupdate/${id}`,{
            method: 'PATCH',
            headers:{
              'Content-Type' : 'application/json'
            },
            body:JSON.stringify(formData)
          })
          .then((res) => res.json())
          .then((data) =>{
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
                                <label value="chapterTitle" className="text-capitalize mb-1 form-label">
                                    Title
                                </label>
                                <input
                                    className="text-capitalize"
                                    type="text"
                                    id="chapterTitle"
                                    name="chapterTitle"
                                    placeholder="Introduction to Data Analysis"
                                    defaultValue={chapterUpdate.chapterTitle}
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
                                    defaultValue={chapterUpdate.formDesc}
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
    );
}

export default Chapterupdate;
