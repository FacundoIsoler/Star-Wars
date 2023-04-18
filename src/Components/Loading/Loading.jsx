import React from 'react'
import styles from './Loading.module.css'
import Joda from '../../Images/Joda.png'





export default function Loading() {
    return (
    
        <div className={styles.Page}>
            <img src={Joda}  className={styles.Image} alt=''/>
            <h1 className={styles.Loading}>Patience you must have, my young padawan</h1>
        </div>
    )
}