import NavBarLanding from '../../components/NavBarLanding'
import styles from './Landing.module.css'
import { Routes } from 'react-router-dom'

export default function Landing({ children }) {
    return (
        <div className={`${styles.gradientCustom}`}>
            <NavBarLanding />
            <div>
                <Routes>{children}</Routes>
            </div>
        </div>
    )
}
