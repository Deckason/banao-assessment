import React from 'react'
import styles from "./end.module.css"
import Image from 'next/image'
import illustration2 from "../../../../public/media/img/illustration2.png"

const End = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Your <span className={styles.hobby}>Hobby</span>, Your <span className={styles.community}>Community...</span></h2>
        <button>Get started</button>
      </div>
      <div className={styles.llustration}>
        <Image
          src={illustration2}
          width={700}
          height={500}
          alt='end-illustration'
        />
      </div>
    </div>
  )
}

export default End
