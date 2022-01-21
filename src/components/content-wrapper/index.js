import React from 'react';
import styles from './index.module.css';

const ContentWrapper = (props) => {
    return (
        <div className={styles.container}>       
                {props.children}
        </div>
    )
}

export default ContentWrapper;