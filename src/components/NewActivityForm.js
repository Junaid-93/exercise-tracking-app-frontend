import React, { useEffect } from 'react'
// import useActivity from '../hooks/useActivity';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function NewActivityForm() {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        duration: '',
        date: '',
        description: '',
    })
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:8000/api/exercises',
                formData,
                { headers: { Authorization: token } }
            )
            console.log('response: ', response)
            setFormData({
                name: '',
                type: '',
                duration: '',
                date: '',
                description: '',
            })
            navigate('/dashboard/my_activities')
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        const localToken = JSON.parse(localStorage.getItem('token'))
        setToken(localToken)
    }, [])

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center py-5 h-10 '>
            <form className='w-25'>
                <div>
                    <h1 className='text-dark text-center m-3 border-2-dark '>
                        Add New Activity
                    </h1>
                </div>
                {/* style="color: black ; text-align: center; margin: 3pc; border: 2px solid black; border-radius: 10px; " */}
                <div className='row'>
                    <div className='col-6 mb-4'>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            // id='validationDefault01'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='col-6 mb-4'>
                        <select
                            className='form-select'
                            name='type'
                            value={formData.type}
                            aria-label='Default select example'
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Please select type</option>
                            {/* <option value='type'>Type</option> */}
                            <option value='Running'>Running</option>
                            <option value='Bicycling'>Bicycle Ride</option>
                            <option value='Swimming'>Swimming</option>
                            <option value='Walking'>Walking</option>
                            <option value='Hiking'>Hiking</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 mb-4'>
                        <input
                            type='text'
                            name='duration'
                            className='form-control'
                            // id='validationDefaultUsername'
                            placeholder='Duration in minutes'
                            value={formData.duration}
                            onChange={handleChange}
                            aria-describedby='inputGroupPrepend2'
                            required
                        />
                    </div>

                    <div className='col-6 mb-4'>
                        <input
                            type='date'
                            name='date'
                            className='form-control'
                            // id='validationDefault04'
                            placeholder='Date'
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='col-12 mb-4'>
                    <textarea
                        type='text'
                        name='description'
                        className='form-control'
                        // id='validationDefault05'
                        placeholder='Description'
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className='form-group'>
                    <button
                        className='btn btn-primary border-dark'
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Add Acitivity
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewActivityForm
