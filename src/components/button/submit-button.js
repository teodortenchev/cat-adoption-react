import React from 'react';
import styles from './submit-button.module.css';
import Button from '@material-ui/core/Button';


const SubmitButton = ({ title, onClick, size, color, disabled }) => {
    return (
        <div className={styles.buttonContainer}>
            <Button variant="contained" color={color || "default"} size={size || "small"} className={styles.button} onClick={onClick} disabled={disabled || false}>{title}</Button>
        </div>
    )
}

export default SubmitButton;