import classes from './NavBarLanding.module.css'
// import {Link} from 'react-router-dom'
function NavBarLanding() {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary bg-light'>
            <div className='container-fluid d-flex justify-content-start'>
                <div className='d-flex justify-content-left'>
                    <img
                        className={classes.Logo}
                        src='https://rb.gy/p22fhw'
                        alt='Logo'
                        title='Logo'
                    />
                    <h1 className={classes.heading}>
                        <b> Exercise Tracking </b>
                    </h1>
                </div>
                {/* <div>
          <Link to={'/'}>Sign In</Link>
          <Link to={'/signup'}>Sign Up</Link>
        </div> */}
            </div>
        </nav>
    )
}

export default NavBarLanding
