import React from 'react'
import styles from "./testimonial.module.css"
import { ImQuotesLeft } from "react-icons/im";
import Image from 'next/image';
import profPic from "../../../../public/media/img/dance.png"

const Testimonial = () => {
  return (
    <div className={styles.container} style={{background: "#fff"}}>
      <div className={`${styles.card} ${styles.card2}`} style={{background: "#F7F5F9"}}>
        <div className={styles.title}>
            <ImQuotesLeft className={styles.icon2} />
            <h3>Testimonials</h3>
        </div>
        <div className={styles.content} >
            <p style={{color: "#6D747A"}}>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
        </div>
        <div className={styles.media}>
            <div className={styles.audio}>
                <audio controls>
                <source src="/media/audio/audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
            <div className={styles.profilePic}>
                <div className={styles.img}>
                    <Image
                        src={profPic}
                        width={500}
                        height={300}
                        alt='profile'
                    />
                </div>
                <div className={styles.profDetail}>
                    <div className={styles.header}>
                        <h3>Shubha Nagarajan</h3>
                        <h4>Classical Dancer</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
