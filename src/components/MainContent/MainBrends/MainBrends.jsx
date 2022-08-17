import React from 'react'
import styles from './MainBrends.module.css'

const MainBrends = () => {
  return (
    <div className={styles.main}>
        <div className={styles.pos}>
            <div className={styles.title}>
                <h1>НАШИ БРЕНДЫ</h1>
            </div>
            <div className={styles.brends_block}>
                <div className={styles.brend}>
                    <div className={styles.image_block}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ef489149200797.62e2d3cc08cd3.gif" alt="" />
                    </div>
                </div>
                <div className={styles.brend}>
                    <div className={styles.image_block}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ef489149200797.62e2d3cc08cd3.gif" alt="" />
                    </div>
                </div>
                <div className={styles.brend}>
                    <div className={styles.image_block}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ef489149200797.62e2d3cc08cd3.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBrends