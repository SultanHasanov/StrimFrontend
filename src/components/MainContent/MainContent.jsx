import React from 'react'
import MainWelcome from './MainWelcome/MainWelcome'
import styles from './MainContent.module.css'
import MainCollection from './MainCollection/MainCollection'
import MainIncome from './MainIncome/MainIncome'
import PersistentDrawerLeft from './Slider/PersistentDrawerLeft'

const MainContent = () => {
  return (
    <div className={styles.main}>
        <MainWelcome />
        <MainCollection />
        <MainIncome />
    </div>
  )
}

export default MainContent
