import React from 'react';
import styles from './index.module.css'
import UpperNav from '../../../components/header';

const PageLayoutAdmin = (props) => {
    return (
        <div className={styles.wrapper}>
            <UpperNav />
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}

export default PageLayoutAdmin;