import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLeft}>
        <h3>Weather at Chennai</h3>
      </div>
      <div className={styles.navRight}>
        <Link className={styles.link} to={'/'}>Home</Link>
        <Link className={styles.link} to={'/about'}>About</Link>
        <Link className={styles.link} to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navigation