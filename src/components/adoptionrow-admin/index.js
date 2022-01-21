import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const CatRowAdmin = ({ cat, approve, reject }) => {


    return (
        <div className={`${styles.catContainer}`}>
            <img className={styles.avatar} src={cat.imageUrl || 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg'} alt="Adoption Request" />

            <div className={styles.info}>
                <strong>{cat.name || 'Kitty'}</strong> <br />
                <strong>Gender:</strong> {cat.gender} <br />
                <strong>Medical Status:</strong> {cat.medicalStatus} <br />
                <strong>Adoption Candidate: </strong> <span className={styles.name}>{cat.adoptedBy}</span>
            </div>
            <div className={styles.controls}>
                <Link className={styles.approve} to="/requests" title="Approve" onClick={approve}>Approve</Link>
                <Link className={styles.reject} to="/requests" title="Approve" onClick={reject}>Reject</Link>
            </div>
        </div>
    )
}

export default CatRowAdmin;