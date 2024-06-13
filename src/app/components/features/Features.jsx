import React from 'react'
import styles from "./feature.module.css"
import { MdGroups, MdPlace, MdShoppingBasket } from "react-icons/md";
import { BsCalendarCheckFill } from "react-icons/bs";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
            <span><MdGroups className={styles.icon} style={{color: "#8064A2"}}/></span>
            <h3>People</h3>
        </div>
        <div className={styles.content}>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
        </div>
        <button>Connect</button>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>
            <span><MdPlace className={styles.icon} style={{color: "#77933C"}}/></span>
            <h3>Place</h3>
        </div>
        <div className={styles.content}>
            <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
        </div>
        <button>Meet up</button>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>
            <span><MdShoppingBasket className={styles.icon} style={{color: "#C0504D"}}/></span>
            <h3>Product</h3>
        </div>
        <div className={styles.content}>
            <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
        </div>
        <button>Get it</button>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>
            <span><BsCalendarCheckFill className={styles.icon} style={{color: "#0096C8"}}/></span>
            <h3>Program</h3>
        </div>
        <div className={styles.content}>
            <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
        </div>
        <button>Attend</button>
      </div>
    </div>
  )
}

export default Features
