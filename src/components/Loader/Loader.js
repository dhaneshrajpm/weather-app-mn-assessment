import { Spin } from 'antd'
import React from 'react'

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}><Spin /></div>
  )
}

export default Loader