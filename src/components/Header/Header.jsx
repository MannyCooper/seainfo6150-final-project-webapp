import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className = {styles.header}>
          <nav className = {styles.nav}>
              <Link className = {styles.nav_left} to="/">Zifan An's Blog</Link>
              <ul className = {styles.menu}>
                {/* these links should show you how to connect up a link to a specific route */}
                {/* <li>
                  <Link to="/">Posts</Link>
                </li> */}
                <li>
                  <Link to="/archives">Archives</Link>
                </li>
                <li>
                  <Link to="/tags">Tags</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/me">Me</Link>
                </li>
              </ul>
          </nav>
      </header>
    );
};

export default Header;