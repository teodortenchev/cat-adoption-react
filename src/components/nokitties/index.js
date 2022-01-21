import React from 'react';
import image from '../../images/nokitties.gif';
import styles from './index.module.css'

const AllKittiesGone = () => {

    return (
        <div className={styles.container}>
            <img className={styles.photo} src={image} alt="" />
            <h3 className={styles.text}>We've found a forever home for all our kitties! Check back soon!</h3>
        </div>
    )
}

export default AllKittiesGone;