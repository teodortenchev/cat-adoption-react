import React from 'react'
import styles from './index.module.css';
import { Link } from 'react-router-dom';


const NavLink = ({ title, to }) => {
    return (
        <Link to={to} className={styles['header']}>
            <div className={styles['header-option']}>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default NavLink;