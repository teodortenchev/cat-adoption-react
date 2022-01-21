import React from 'react';
import Title from '../../components/title'
import styles from './index.module.css';
import image from '../../images/errorcat.jpg';
import Link from '../../components/link/'

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <Title className={styles.title} title="Error" />
            <img className={styles.image} src={image} alt="error" />
            <Link title="Go Back" to="/" />
        </div>
    )
}

export default ErrorPage;
