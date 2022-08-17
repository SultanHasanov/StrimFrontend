import React from 'react'
import MainWelcome from './MainWelcome/MainWelcome'
import styles from './MainContent.module.css'
import MainCollection from './MainCollection/MainCollection'
import MainIncome from './MainIncome/MainIncome'
import PersistentDrawerLeft from './Slider/PersistentDrawerLeft'
import MainBrends from './MainBrends/MainBrends'

const MainContent = () => {
  return (
    <div className={styles.main}>
        <MainWelcome />
        <MainCollection />
        <MainIncome />
        <MainBrends />
    </div>
  )
}

export default MainContent
