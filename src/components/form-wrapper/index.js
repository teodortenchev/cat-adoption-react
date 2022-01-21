import React from 'react';
import styles from './index.module.css';

const FormWrapper = (props) => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                {props.children}
            </form>
        </div>
    )
}

export default FormWrapper;