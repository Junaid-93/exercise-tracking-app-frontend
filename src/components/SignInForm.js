import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignInForm() {
    const [loginData, setLoginData] = useState({ email: '', password: '' })

    const navigate = useNavigate()

    const handleChange = (e) => {
        if (e.target.name === 'password') {
            setLoginData({ ...loginData, [e.target.name]: e.target.value })
        } else {
            setLoginData({
                ...loginData,
                [e.target.name]: e.target.value.toLowerCase(),
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(
                'http://localhost:8000/api/users/login',
                loginData
            )
            console.log('response: ', data)
            localStorage.setItem('token', JSON.stringify(data.token))
            setLoginData({ email: '', password: '' })
            navigate('/dashboard')
        } catch (error) {
            console.log(error.message)
        }
    }

    // console.log(loginData)

    return (
        // <div className="vh-100 gradient-custom">
        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                    <div className='card bg-dark text-white border-round rounded-5'>
                        <div className='card-body p-5 text-center'>
                            <div className='mb-md-5 mt-md-4 pb-5'>
                                <h2 className='fw-bold mb-2 text-uppercase'>
                                    Login
                                </h2>
                                <p className='text-white-50 mb-5'>
                                    Please enter your Name and Password !
                                </p>

                                <div className='form-outline form-white mb-4'>
                                    <input
                                        type='email'
                                        name='email'
                                        value={loginData.email}
                                        id='typeEmailX'
                                        className='form-control form-control-lg'
                                        placeholder='Email'
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='form-outline form-white mb-4'>
                                    <input
                                        type='password'
                                        name='password'
                                        value={loginData.password}
                                        id='typePasswordX'
                                        className='form-control form-control-lg'
                                        placeholder='Password'
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    className='btn btn-outline-light btn-lg px-5'
                                    type='submit'
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </div>

                            <div>
                                <p className='mb-0'>
                                    Don't have an account?{' '}
                                    <Link
                                        to='/signup'
                                        className='text-white-50 fw-bold'
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default SignInForm
