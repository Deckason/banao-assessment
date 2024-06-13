"use client"
import React, { useState } from 'react'
import styles from "./Hero.module.css"
import SignIn from '../signupForm/SignIn'
import JoinIn from '../signupForm/JoinIn'
import Image from 'next/image'
import illustration from "../../../../public/media/img/screenshot.png"

const Hero = () => {
    const [signIn, setsignIn] = useState(true)
  return (
    <div className={styles.container}>
     <div className={styles.heroText}>
        <h1>Explore your <span>hobby</span> or <span>passion</span></h1>
        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
        </p><br />
        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
     </div>
     <div className={styles.heroForm}>
        <div className={styles.formTitles}>
            <h3 className={signIn && styles.titleButtomBorder} onClick={()=>setsignIn(true)}>Sign In</h3>
            <h3 className={!signIn && styles.titleButtomBorder} onClick={()=>setsignIn(false)}>Join In</h3>
        </div>
        {signIn && <SignIn />}
        {!signIn && <JoinIn />}
     </div>
     <div className={styles.illustration}>
      <Image
        src={illustration}
        width={500}
        height={300}
        alt='Illustration'
      />
     </div>
    </div>
  )
}

export default Hero
