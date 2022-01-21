import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const CustomLink = ({ title, to, styleType, onClick }) => {
    return (
        <Link to={to} className={styles[styleType]} onClick={onClick}>
            {title}
        </Link>
    )
}

export default CustomLink;
