import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import portrait from "../../images/portrait.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/">
                <img className={styles.logo} src={portrait} alt="portrait"/>
            </Link>
            <nav className={styles.nav}>
                <span className={styles.copyright}>Copyright © 2021</span>
                <Link className={styles.link} to="/">Zifan An's Blog</Link>
            </nav>
        </footer>
        )
}

export default Footer;