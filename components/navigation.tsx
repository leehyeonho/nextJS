"use client";

import Link from "next/link";
import styles from "../styles/navigation.module.css"

function Navigiation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/" className={styles.a}>Home</Link>
              </li>
              <li className={styles.li}>
              <Link href="/about-us" className={styles.a}>about us</Link>
              </li>
            </ul>
        </nav>
    )
}

export default Navigiation;