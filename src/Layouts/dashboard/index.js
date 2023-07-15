import NavBarDashboard from '../../components/NavBarDashboard'
import styles from './Dashboard.module.css'
import { Routes } from 'react-router-dom'

export default function Dashboard({ children }) {
    return (
        <div className={`${styles.gradientCustom} overflow-hidden`}>
            <NavBarDashboard />
            <div>
                <Routes>{children}</Routes>
            </div>
        </div>
    )
}
