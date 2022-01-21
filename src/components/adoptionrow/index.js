import React from 'react';
import styles from './index.module.css';
import approved from './../../images/approved2.gif'
import rejected from './../../images/rejected.gif'
import pending from './../../images/pending.gif'


const CatRow = ({ cat }) => {


    const status = cat.adoptionStatus;

    let approvalImage = '';
    if (status === 'Approved') {
        approvalImage = approved;
    } else if (status === 'Rejected') {
        approvalImage = rejected;
    } else {
        approvalImage = pending;
    }

    return (
        <div className={`${styles.catContainer} ${styles[status]}`}>
            <img className={styles.avatar} src={cat.imageUrl || 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg'} alt="Adoption Request" />

            <div className={styles.info}>
                <strong>{cat.name || 'Kitty'}</strong> <br />
                <strong>Gender:</strong> {cat.gender} <br />
                <strong>Medical Status:</strong> {cat.medicalStatus} <br />
                <strong>Adoption Status: </strong> {cat.adoptionStatus || 'Pending'}
            </div>

            <img className={styles.statusImage} alt={cat.status} src={approvalImage} />
        </div>
    )
}

export default CatRow;