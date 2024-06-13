import React from 'react'
import styles from "./nav.module.css"
import Image from 'next/image'
import logo from "../../../../public/media/img/banao-logo.png"
import { CiSearch } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
            src={logo}
            height={200}
            width={500}
            alt='logo'
        />
      </div>
      <form className={styles.navSearch}>
        <input type="text" placeholder='Search here...'/>
        <button><CiSearch className={styles.searchIcon}/></button>
      </form>
      <div className={styles.navLinks}>
        <ul className={styles.explore}>
            <li><MdExplore className={styles.exploreIcon}/></li>
            <li>Explore
                <ul className={styles.exploreSubMenue}>
                    <li>People - Community</li>
                    <li>Places - Venues</li>
                    <li>Programs - Events</li>
                    <li>Products - Store</li>
                    <li>Blogs</li>
                </ul>
            </li>
            <li><MdOutlineExpandMore className={styles.expand}/></li>
        </ul>
        <ul className={styles.hobbies}>
            <li><RiShieldStarFill className={styles.hobbiesIcon}/></li>
            <li>Hobbies
                {/* <ul className={styles.exploreSubMenue}>
                    <li>People - Community</li>
                    <li>Places - Venues</li>
                    <li>Programs - Events</li>
                    <li>Products - Store</li>
                    <li>Blogs</li>
                </ul> */}
            </li>
            <li><MdOutlineExpandMore className={styles.expand}/></li>
        </ul>
        <ul className={styles.bookMark}>
            <li><FaBookmark /></li>
        </ul>
        <ul className={styles.smallScreenSearch}>
            <li><CiSearch /></li>
        </ul>
        <ul className={styles.notification}>
            <li><FaBell /></li>
        </ul>
        <ul className={styles.cart}>
            <li><BsCartFill /></li>
        </ul>
        <ul className={styles.signIn}>
            <Link href={"#"}>Sign in</Link>
        </ul>
        <ul className={styles.burgerMenue}>
            <li><IoMenuOutline /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
