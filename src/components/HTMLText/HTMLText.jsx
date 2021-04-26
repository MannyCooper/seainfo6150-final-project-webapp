import React from "react";
import PropTypes from "prop-types";
import styles from "./HTMLText.module.css"

const HTMLText = (props) => {
  return <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.text }} />;
};

HTMLText.propTypes = {
    text: PropTypes.string.isRequired
}
export default HTMLText;