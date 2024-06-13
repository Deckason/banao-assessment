"use client"
import React, { useState } from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";
import { FaTwitter, FaInstagram, FaPinterest, FaGooglePlusG, FaYoutube, FaTelegramPlane, FaFacebookF  } from "react-icons/fa";
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
    const [expandedSections, setExpandedSections] = useState({
        hobbycue: true,
        howDoI: true,
        quickLinks: true,
        socialMedia: true
      });
    
      const toggleSection = (section) => {
        setExpandedSections(prevState => ({
          ...prevState,
          [section]: !prevState[section]
        }));
    }
  return (
    <footer className={styles.container}>
      <section className={styles.upperSec}>
        <div className={styles.linkContainer}>
        <h3 className={styles.title}>
            Hobbycue {expandedSections.hobbycue ? 
              <MdExpandLess onClick={() => toggleSection('hobbycue')} className={styles.expand}/> : 
              <MdOutlineExpandMore onClick={() => toggleSection('hobbycue')} className={styles.expand}/>}
          </h3>
          {expandedSections.hobbycue && (
            <>
              <Link href="#">About Us</Link>
              <Link href="#">Our Services</Link>
              <Link href="#">Work with Us</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Contact Us</Link>
            </>
          )}
        </div>
        <div className={styles.linkContainer}>
        <h3 className={styles.title}>
            How Do I {expandedSections.howDoI ? 
              <MdExpandLess onClick={() => toggleSection('howDoI')} className={styles.expand}/> : 
              <MdOutlineExpandMore onClick={() => toggleSection('howDoI')} className={styles.expand}/>}
          </h3>
          {expandedSections.howDoI && (
            <>
              <Link href="#">Sign Up</Link>
              <Link href="#">Add a Listing</Link>
              <Link href="#">Claim Listing</Link>
              <Link href="#">Post a Query</Link>
              <Link href="#">Add a Blog Post</Link>
              <Link href="#">Other Queries</Link>
            </>
          )}
        </div>
        <div className={styles.linkContainer}>
        <h3 className={styles.title}>
            Quick Links {expandedSections.quickLinks ? 
              <MdExpandLess onClick={() => toggleSection('quickLinks')} className={styles.expand}/> : 
              <MdOutlineExpandMore onClick={() => toggleSection('quickLinks')} className={styles.expand}/>}
          </h3>
          {expandedSections.quickLinks && (
            <>
              <Link href="#">Listings</Link>
              <Link href="#">Blog Posts</Link>
              <Link href="#">Shop / Store</Link>
              <Link href="#">Community</Link>
            </>
          )}
        </div>
        <div className={styles.linkContainer}>
            <h3 className={styles.title}>Social Media </h3>
            <div className={styles.socialContainer}>
                <div className={styles.socialLinks}>
                    <span><FaFacebookF className={styles.icon}/></span>
                    <span><FaTwitter className={styles.icon}/></span>
                    <span><FaInstagram className={styles.icon}/></span>
                    <span><FaPinterest className={styles.icon}/></span>
                    <span><FaGooglePlusG className={styles.icon}/></span>
                    <span><FaYoutube className={styles.icon}/></span>
                    <span><FaTelegramPlane className={styles.icon}/></span>
                    <span><IoMdMail className={styles.icon}/></span>
                </div>
                <form className={styles.inviteFriend}>
                    <h3 className={styles.title}>Invite Friends</h3>
                    <div className={styles.input}>
                        <input type="email" placeholder='Email ID'/>
                        <button>Invite</button>
                    </div>
                </form>
            </div>
        </div>
      </section>
      <section className={styles.lowerSec}>
        <small>&copy; Purple Cues Private Limited</small>
      </section>
    </footer>
  )
}

export default Footer
