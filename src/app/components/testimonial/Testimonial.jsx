import React from 'react'
import styles from "./testimonial.module.css"
import { MdOutlineAddCircle } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
            <MdOutlineAddCircle className={styles.icon}/>
            <h3>Add your own</h3>
        </div>
        <div className={styles.content}>
            <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
        </div>
        <button>Add new</button>
      </div>
    </div>
  )
}

export default Testimonial
