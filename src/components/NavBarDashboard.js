// import { NavLink } from "react-bootstrap"
// import classes from "./NavBarDashboard.module.css"
import { Link } from 'react-router-dom'

function NavBarDashboard() {
    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    return (
        <header>
            <ul className='nav nav-pills bg-dark'>
                <li className='nav-item'>
                    <Link
                        className='nav-link p-3 '
                        aria-current='page'
                        to='/dashboard'
                    >
                        Dashboard
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link p-3'
                        aria-current='page'
                        to='/dashboard/my_activities'
                    >
                        My Activities
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link p-3 '
                        aria-current='page'
                        to='/dashboard/add_activity'
                    >
                        Add Activity
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link p-3 '
                        aria-current='page'
                        to='/dashboard/profile'
                    >
                        Profile
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link p-3'
                        to='/'
                        onClick={handleLogout}
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBarDashboard
