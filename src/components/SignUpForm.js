import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUpForm() {
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        if (e.target.name === 'password' || e.target.name === 'name') {
            setSignupData({ ...signupData, [e.target.name]: e.target.value })
        } else {
            setSignupData({
                ...signupData,
                [e.target.name]: e.target.value.toLowerCase(),
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:8000/api/users/register',
                signupData
            )
            console.log('response', response)
            setSignupData({ name: '', email: '', password: '', username: '' })
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        // <div className="vh-100 gradient-custom">
        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                    <div className='card bg-dark text-white border-round rounded-5'>
                        <div className='card-body p-5 text-center'>
                            <div className='mb-md-5 mt-md-4 pb-5'>
                                <h2 className='fw-bold mb-2 text-uppercase'>
                                    Sign up
                                </h2>
                                <p className='text-white-50 mb-5'>
                                    Please enter your Name, Email and Password!
                                </p>

                                <div className='form-outline form-white mb-4'>
                                    <input
                                        type='text'
                                        name='name'
                                        value={signupData.name}
                                        id='typename'
                                        className='form-control form-control-lg'
                                        placeholder='Name'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='form-outline form-white mb-4'>
                                    <input
                                        type='email'
                                        name='email'
                                        value={signupData.email}
                                        id='typeEmailX'
                                        className='form-control form-control-lg'
                                        placeholder='Email'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='form-outline form-white mb-4'>
                                    <input
                                        type='password'
                                        name='password'
                                        value={signupData.password}
                                        id='typePasswordX'
                                        className='form-control form-control-lg'
                                        placeholder='Password'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='form-outline form-white mb-4'>
                                    <input
                                        type='text'
                                        name='username'
                                        value={signupData.username}
                                        id='typePasswordX'
                                        className='form-control form-control-lg'
                                        placeholder='Username'
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    className='btn btn-outline-light btn-lg px-5'
                                    type='submit'
                                    onClick={handleSubmit}
                                >
                                    Sign up
                                </button>
                            </div>

                            <div>
                                <p className='mb-0'>
                                    Already have an acount?{' '}
                                    <Link
                                        to='/'
                                        className='text-white-50 fw-bold'
                                    >
                                        Login
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

export default SignUpForm
