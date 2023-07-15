import { Routes, Route } from 'react-router-dom'

import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import ActivityCards from './components/ActivityCards'
import NewActivityForm from './components/NewActivityForm'
import ProfileForm from './components/ProfileForm'

import Landing from './Layouts/landing'
import Dashboard from './Layouts/dashboard'
import { Fragment } from 'react'

function App() {
    return (
        <Fragment>
            <Routes>
                <Route
                    path='/*'
                    element={
                        <Landing>
                            <Route path='/' element={<SignInForm />} />
                            <Route path='/signup' element={<SignUpForm />} />
                        </Landing>
                    }
                />
                <Route
                    path='/dashboard/*'
                    element={
                        <Dashboard>
                            <Route path='/' element={<ActivityCards />} />
                            <Route
                                path='/my_activities'
                                element={<ActivityCards />}
                            />
                            <Route
                                path='/add_activity'
                                element={<NewActivityForm />}
                            />
                            <Route path='/profile' element={<ProfileForm />} />
                        </Dashboard>
                    }
                />
            </Routes>

            {/* 
      <Landing>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Landing>

      <Dashboard>
        <Routes>
          <Route path="/dashboard" element={<ActivityCards />} />
          <Route path="/my_activities" element={<ActivityCards />} />
          <Route path="/add_activity" element={<NewActivityForm />} />
          <Route path="/profile" element={<ProfileForm />} />
        </Routes>
      </Dashboard> */}
        </Fragment>
    )
}

export default App
