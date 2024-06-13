"use client"
import React from 'react'
import styles from "./signUpForm.module.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from 'react';
import { IoMdLock } from "react-icons/io";

const SignIn = () => {
  const [eyeOff, seteyeOff] = useState(true)
  return (
    <div className={styles.container}>
      <div className={styles.inputArea}>
        <button><span><FcGoogle /></span> Continue with Google</button>
        <button><span><FaFacebook className={styles.fbIcon} /></span> Continue with Facebook</button>
    </div>
    <div className={styles.otherSignupMethod}>
      <span></span>
      <small>Or connect with</small>
      <span></span>
    </div>
    <form className={styles.form}>
      <input type="text" placeholder='Email'/>
      <div className={styles.password}>
        <input type={eyeOff?"password":"text"} placeholder='Password'/>
          {eyeOff ? <IoEyeOff className={styles.eye} onClick={()=>seteyeOff(prev=>!prev)}/> : <IoEye className={styles.eye} onClick={()=>seteyeOff(prev=>!prev)}/>}
      </div>
      <div className={styles.forgotPassLink}>
        <span><input type="checkbox" /> <small>Remember me</small></span>
        <span><IoMdLock className={styles.lock}/> <small>Forgot password?</small></span>
      </div>
      <button>Continue</button>
    </form>
    </div>
  )
}

export default SignIn
